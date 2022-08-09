// <copyright file="CodeGenService.cs" company="Microsoft Corporation">
//     Copyright (c) Microsoft Corporation. All rights reserved.
//     Licensed under the MIT License (MIT). See LICENSE in the repo root for license information.
// </copyright>

using GenHelperBlazor.Export;
using System.Diagnostics;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace GenHelperBlazor.Services;

/// <summary>A service for accessing code generates information.</summary>
public class TestGenService : ITestGenService, IDisposable, IHostedService
{
    /// <summary>A validation issue.</summary>
    /// <param name="Severity">  The severity.</param>
    /// <param name="Code">      The code.</param>
    /// <param name="DetailText">The detail text.</param>
    private record struct ValidationIssue(
        string Severity,
        string Code,
        string DetailText);
    
    /// <summary>(Immutable) Name of the language.</summary>
    private const string _languageName = "TypeScriptSdk";

    /// <summary>True if has disposed, false if not.</summary>
    private bool _hasDisposed;

    /// <summary>The HTTP client.</summary>
    private HttpClient _httpClient;

    /// <summary>The example issues by version.</summary> 
    private Dictionary<string, Dictionary<string, int>> _exampleIssuesByVersion = new();

    /// <summary>
    /// Initializes a new instance of the <see cref="SpecExporterWebService"/> class.
    /// </summary>
    public TestGenService()
    {
        _hasDisposed = false;
        _httpClient = new();
    }

    /// <summary>Initializes this object.</summary>
    public void Init()
    {
        // r4
        _exampleIssuesByVersion.Add("r4", new());
        _exampleIssuesByVersion["r4"].Add("bundle-questionnaire", 50);
        _exampleIssuesByVersion["r4"].Add("bundle-with-no-type", 1);
        _exampleIssuesByVersion["r4"].Add("diagnosticreport-example-gingival-mass", 1);
        _exampleIssuesByVersion["r4"].Add("myconsent-resource", 2);
    }

    /// <summary>Builds the tests.</summary>
    /// <exception cref="DirectoryNotFoundException">Thrown when the requested directory is not
    ///  present.</exception>
    /// <exception cref="FileNotFoundException">     Thrown when the requested file is not present.</exception>
    /// <exception cref="ArgumentNullException">     Thrown when one or more required arguments are
    ///  null.</exception>
    /// <param name="packageName">Name of the package.</param>
    /// <param name="outputPath"> (Optional) Full pathname of the output file.</param>
    /// <returns>An asynchronous result.</returns>
    public Task BuildTests(
        string packageName,
        string outputPath = "")
    {
        if (string.IsNullOrEmpty(packageName))
        {
            throw new ArgumentNullException(nameof(packageName), "Package Name is required!");
        }

        string sdkRoot = FindRelativeDir("fhir-typescript");
        if (string.IsNullOrEmpty(sdkRoot))
        {
            throw new DirectoryNotFoundException("Could not find fhir-typescript root directory!");
        }

        string fhirVersionKey;
        string publicationKey;

        if (packageName.Contains("r2", StringComparison.OrdinalIgnoreCase) ||
            packageName.Contains("dstu2", StringComparison.OrdinalIgnoreCase))
        {
            fhirVersionKey = "r2";
            publicationKey = "DSTU2";
        }
        else if (packageName.Contains("r3", StringComparison.OrdinalIgnoreCase) ||
                 packageName.Contains("stu3", StringComparison.OrdinalIgnoreCase))
        {
            fhirVersionKey = "r3";
            publicationKey = "STU3";
        }
        else if (packageName.Contains("r4b", StringComparison.OrdinalIgnoreCase))
        {
            fhirVersionKey = "r4b";
            publicationKey = "R4B";
        }
        else if (packageName.Contains("r4", StringComparison.OrdinalIgnoreCase))
        {
            fhirVersionKey = "r4";
            publicationKey = "R4";
        }
        else
        {
            string[] components = packageName.Split('.');
            if (components.Length == 1)
            {
                fhirVersionKey = packageName.ToLowerInvariant();
                publicationKey = packageName.ToUpperInvariant();
            }
            else if (components.Length >= 3)
            {
                fhirVersionKey = components[2].ToLowerInvariant();
                publicationKey = components[2].ToUpperInvariant();
            }
            else
            {
                fhirVersionKey = string.Empty;
                publicationKey = string.Empty;
            }
        }

        if (string.IsNullOrEmpty(fhirVersionKey))
        {
            throw new Exception($"Could not determine the FHIR Version of package {packageName}!");
        }

        if (string.IsNullOrEmpty(outputPath))
        {
            outputPath = Path.Combine(sdkRoot, "core", fhirVersionKey, "tests", "generated");
        }

        if (string.IsNullOrEmpty(outputPath))
        {
            throw new ArgumentNullException(nameof(outputPath), "No outputPath was provided and one could not be determined!");
        }

        if (!Directory.Exists(outputPath))
        {
            Directory.CreateDirectory(outputPath);
        }

        string genDir = Path.Combine(sdkRoot, "generation");
        string testCaseDir = Path.Combine(genDir, "fhir-test-cases");

        Task genTask = new Task(() =>
        {
            DownloadJsonEdgeCases(fhirVersionKey, publicationKey, genDir);
            CreateOrUpdateTestCaseDir(genDir, testCaseDir);
            CreateTests(fhirVersionKey, genDir, testCaseDir, outputPath);
        });

        return genTask;
    }

    /// <summary>Creates the tests.</summary>
    /// <param name="fhirVersionKey">The FHIR version key.</param>
    /// <param name="genDir">        The generate dir.</param>
    /// <param name="testGenDir">    The test generate dir.</param>
    /// <param name="testCaseDir">   The test case dir.</param>
    /// <param name="outputPath">    Full pathname of the output file.</param>
    private void CreateTests(
        string fhirVersionKey,
        string genDir,
        string testCaseDir,
        string outputPath)
    {
        string versionTestCaseDir = Path.Combine(testCaseDir, fhirVersionKey);

        if (!Directory.Exists(versionTestCaseDir))
        {
            return;
        }

        string[] files = Directory.GetFiles(versionTestCaseDir, "*.json", SearchOption.TopDirectoryOnly);
        foreach (string file in files)
        {
            string shortName = Path.GetFileNameWithoutExtension(file);
            string destName = Path.Combine(outputPath, shortName + ".ts");

            WriteTestFileForRootTestCase(file, destName, fhirVersionKey, shortName);
        }

        string exampleTestCaseDir = Path.Combine(versionTestCaseDir, "examples");

        if (Directory.Exists(exampleTestCaseDir))
        {
            files = Directory.GetFiles(exampleTestCaseDir, "*.json", SearchOption.AllDirectories);

            foreach (string file in files)
            {
                string shortName = Path.GetFileNameWithoutExtension(file);
                string destName = Path.Combine(outputPath, shortName + ".ts");

                WriteTestFileForExampleTestCase(file, destName, fhirVersionKey, shortName);
            }
        }

        string edgeCaseFilename = Path.Combine(genDir, $"json-edge-cases-{fhirVersionKey}.json");
        if (File.Exists(edgeCaseFilename))
        {
            string destName = Path.Combine(outputPath, "json-edge-cases.ts");
            WriteTestFileForRootTestCase(edgeCaseFilename, destName, fhirVersionKey, "json-edge-cases");
        }
    }

    /// <summary>A JSON resource type.</summary>
    private class ParseableResourceType
    {
        /// <summary>Gets or sets the type of the resource.</summary>
        [JsonPropertyName("resourceType")]
        public string ResourceType { get; set; } = string.Empty;
    }

    /// <summary>Writes a test file for root test case.</summary>
    /// <param name="jsonFilename">           Filename of the JSON file.</param>
    /// <param name="destinationTestFilename">Filename of the destination test file.</param>
    /// <param name="fhirVersionKey">         The FHIR version key.</param>
    private void WriteTestFileForExampleTestCase(
        string jsonFilename,
        string destinationTestFilename,
        string fhirVersionKey,
        string shortName)
    {
        ExportStringBuilder sb = new();

        string contents = File.ReadAllText(jsonFilename);
        string resourceType = string.Empty;

        if (contents.Contains("resourceType"))
        {
            try
            {
                ParseableResourceType? pt = JsonSerializer.Deserialize<ParseableResourceType>(contents);
                resourceType = pt?.ResourceType ?? string.Empty;
            }
            catch (Exception)
            {
            }
        }

        sb.WriteLineIndented("import { fhir } from '../../src/index.js';");
        sb.WriteLineIndented(string.Empty);
        sb.WriteLineIndented("const src = " + contents + ";");
        sb.OpenScope("test('generated', () => {");
        sb.WriteLineIndented("let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});");
        sb.WriteLineIndented("expect(v).toBeDefined();");
        sb.WriteLineIndented("if (v === null) { return; }");

        if (!string.IsNullOrEmpty(resourceType))
        {
            sb.WriteLineIndented($"expect(v.resourceType).toBe('{resourceType}');");
        }

        sb.WriteLineIndented("let s:any = JSON.stringify(v);");
        sb.WriteLineIndented("let r:any = JSON.parse(s);");
        sb.WriteLineIndented("expect(r).toEqual(src);");
        sb.WriteLineIndented("let issues:fhir.FtsIssue[] = v.doModelValidation();");

        //sb.WriteLineIndented("if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }");
        sb.OpenScope("if (issues && (issues.length > 0)) {");
        sb.WriteLineIndented("let t:string = '';");
        sb.WriteLineIndented("issues.forEach((i) => t += `\\n- ${i.severity}: ${i.details?.text}`);");
        sb.WriteLineIndented($"t += `\\n_known[\"{fhirVersionKey}\"].Add(\"{shortName}\", ${{issues.length}});`;");
        sb.WriteLineIndented("console.log(t);");
        sb.CloseScope("}");


        sb.WriteLineIndented($"expect(issues.length).toBe(0);");
        sb.CloseScope("});");

        WriteFile(sb, destinationTestFilename);
    }

    /// <summary>Writes a test file for root test case.</summary>
    /// <param name="jsonFilename">           Filename of the JSON file.</param>
    /// <param name="destinationTestFilename">Filename of the destination test file.</param>
    private void WriteTestFileForRootTestCase(
        string jsonFilename,
        string destinationTestFilename,
        string fhirVersionKey,
        string shortName)
    {
        ExportStringBuilder sb = new();

        string contents = File.ReadAllText(jsonFilename);
        string resourceType = string.Empty;

        if (contents.Contains("resourceType"))
        {
            try
            {
                ParseableResourceType? pt = JsonSerializer.Deserialize<ParseableResourceType>(contents);
                resourceType = pt?.ResourceType ?? string.Empty;
            }
            catch (Exception)
            {
            }
        }

        sb.WriteLineIndented("import { fhir } from '../../src/index.js';");
        sb.WriteLineIndented(string.Empty);
        sb.WriteLineIndented("const src = " + contents + ";");
        sb.OpenScope("test('generated', () => {");
        sb.WriteLineIndented("let v:fhir.FhirResource|null = fhir.resourceFactory(src, {allowUnknownElements: true});");
        sb.WriteLineIndented("expect(v).toBeDefined();");
        sb.WriteLineIndented("if (v === null) { return; }");

        if (!string.IsNullOrEmpty(resourceType))
        {
            sb.WriteLineIndented($"expect(v.resourceType).toBe('{resourceType}');");
        }

        sb.WriteLineIndented("let s:any = JSON.stringify(v);");
        sb.WriteLineIndented("let r:any = JSON.parse(s);");
        sb.WriteLineIndented("expect(r).toEqual(src);");
        sb.WriteLineIndented("let issues:fhir.FtsIssue[] = v.doModelValidation();");

        //sb.WriteLineIndented("if (issues && (issues.length > 0)) { issues.forEach((i) => console.log('Found issue:', i)); }");
        sb.OpenScope("if (issues && (issues.length > 0)) {");
        sb.WriteLineIndented("let t:string = '';");
        sb.WriteLineIndented("issues.forEach((i) => t += `\\n- ${i.severity}: ${i.details?.text}`);");
        sb.WriteLineIndented($"t += `\\n_known[\"{fhirVersionKey}\"].Add(\"{shortName}\", ${{issues.length}});`;");
        sb.WriteLineIndented("console.log(t);");
        sb.CloseScope("}");

        sb.CloseScope("});");

        WriteFile(sb, destinationTestFilename);
    }

    /// <summary>Writes a file.</summary>
    /// <param name="sb">      The writer.</param>
    /// <param name="filename">Filename of the file.</param>
    private void WriteFile(
        ExportStringBuilder sb,
        string filename)
    {
        using (FileStream stream = new FileStream(filename, FileMode.Create))
        using (StreamWriter writer = new StreamWriter(stream))
        {
            writer.Write(sb);
        }
    }

    /// <summary>Downloads the JSON edge cases.</summary>
    /// <param name="fhirVersionKey">The FHIR version key.</param>
    /// <param name="publicationKey">The publication key.</param>
    /// <param name="genDir">        The generate dir.</param>
    private void DownloadJsonEdgeCases(
        string fhirVersionKey,
        string publicationKey,
        string genDir)
    {
        string filename = Path.Combine(genDir, $"json-edge-cases-{fhirVersionKey}.json");

        if (File.Exists(filename))
        {
            return;
        }

        try
        {
            Uri uri = new Uri($"https://hl7.org/fhir/{publicationKey}/json-edge-cases.json");

            string contents = _httpClient.GetStringAsync(uri).Result;
            File.WriteAllText(filename, contents);
        }
        catch (Exception ex)
        {
            Console.WriteLine(
                $"DownloadJsonEdgeCases <<< exception downloading:" +
                $" https://hl7.org/fhir/{publicationKey}/json-edge-cases.json," +
                $" {ex.Message}");
            if (ex.InnerException != null)
            {
                Console.WriteLine($" <<< inner: {ex.InnerException.Message}");
            }

            if (File.Exists(filename))
            {
                File.Delete(filename);
            }
        }
    }

    /// <summary>Creates or update test case dir.</summary>
    /// <param name="genDir">     The generate dir.</param>
    /// <param name="testGenDir"> The test generate dir.</param>
    /// <param name="testCaseDir">The test case dir.</param>
    private static void CreateOrUpdateTestCaseDir(
        string genDir,
        string testCaseDir)
    {
        if (Directory.Exists(testCaseDir))
        {
            using (Process process = new Process())
            {
                process.StartInfo.FileName = "git";
                process.StartInfo.Arguments = "pull";
                process.StartInfo.WorkingDirectory = testCaseDir;
                process.StartInfo.UseShellExecute = true;
                process.Start();
                process.WaitForExit();
            }
        }
        else
        {
            using (Process process = new Process())
            {
                process.StartInfo.FileName = "git";
                process.StartInfo.Arguments = "clone https://github.com/FHIR/fhir-test-cases.git";
                process.StartInfo.WorkingDirectory = genDir;
                process.StartInfo.UseShellExecute = true;
                process.Start();
                process.WaitForExit();
            }
        }
    }


    /// <summary>Deletes the directory described by dir.</summary>
    /// <param name="dir">The dir.</param>
    private static void DeleteDirectory(string dir)
    {
        try
        {
            foreach (string subDir in Directory.GetDirectories(dir))
            {
                foreach (string filename in Directory.GetFiles(subDir))
                {
                    File.Delete(filename);
                }

                DeleteDirectory(subDir);
            }

            Directory.Delete(dir);
        }
        catch (IOException)
        {
            // ignore
        }
    }


    /// <summary>Searches for the first relative dir.</summary>
    /// <param name="dirName">Pathname of the directory.</param>
    /// <returns>The found relative dir.</returns>
    private static string FindRelativeDir(string dirName)
    {
        string currentDir = Path.GetDirectoryName(AppContext.BaseDirectory) ?? string.Empty;
        string testDir = Path.Combine(currentDir, dirName);

        while (!Directory.Exists(testDir))
        {
            currentDir = Path.GetFullPath(Path.Combine(currentDir, ".."));

            if (currentDir == Path.GetPathRoot(currentDir))
            {
                return string.Empty;
            }

            testDir = Path.Combine(currentDir, dirName);
        }

        return testDir;
    }

    /// <summary>Triggered when the application host is ready to start the service.</summary>
    /// <param name="cancellationToken">Indicates that the start process has been aborted.</param>
    /// <returns>An asynchronous result.</returns>
    Task IHostedService.StartAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }

    /// <summary>Triggered when the application host is performing a graceful shutdown.</summary>
    /// <param name="cancellationToken">Indicates that the shutdown process should no longer be
    ///  graceful.</param>
    /// <returns>An asynchronous result.</returns>
    Task IHostedService.StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Releases the unmanaged resources used by the
    /// FhirModelComparer.Server.Services.FhirManagerService and optionally releases the managed
    /// resources.
    /// </summary>
    /// <param name="disposing">True to release both managed and unmanaged resources; false to
    ///  release only unmanaged resources.</param>
    protected virtual void Dispose(bool disposing)
    {
        if (!_hasDisposed)
        {
            if (disposing)
            {
                // TODO: dispose managed state (managed objects)
            }

            // TODO: free unmanaged resources (unmanaged objects) and override finalizer
            // TODO: set large fields to null
            _hasDisposed = true;
        }
    }

    /// <summary>
    /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged
    /// resources.
    /// </summary>
    void IDisposable.Dispose()
    {
        // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        Dispose(disposing: true);
        GC.SuppressFinalize(this);
    }
}
