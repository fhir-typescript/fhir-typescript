// <copyright file="CodeGenService.cs" company="Microsoft Corporation">
//     Copyright (c) Microsoft Corporation. All rights reserved.
//     Licensed under the MIT License (MIT). See LICENSE in the repo root for license information.
// </copyright>

using System.Diagnostics;

namespace GenHelperBlazor.Services;

/// <summary>A service for accessing code generates information.</summary>
public class CodeGenService : ICodeGenService, IDisposable, IHostedService
{
    /// <summary>(Immutable) Name of the language.</summary>
    private const string _languageName = "TypeScriptSdk";

    /// <summary>True if has disposed, false if not.</summary>
    private bool _hasDisposed;

    /// <summary>
    /// Initializes a new instance of the <see cref="SpecExporterWebService"/> class.
    /// </summary>
    public CodeGenService()
    {
        _hasDisposed = false;
    }

    /// <summary>Initializes this object.</summary>
    public void Init()
    {
    }

    /// <summary>Request export.</summary>
    /// <exception cref="DirectoryNotFoundException">Thrown when the requested directory is not
    ///  present.</exception>
    /// <exception cref="FileNotFoundException">     Thrown when the requested file is not present.</exception>
    /// <exception cref="ArgumentNullException">     Thrown when one or more required arguments are
    ///  null.</exception>
    /// <param name="packageName">            Name of the package.</param>
    /// <param name="version">                (Optional) The version.</param>
    /// <param name="ciBranch">               (Optional) The ci branch.</param>
    /// <param name="codeGenExe">             (Optional) The code generator executable.</param>
    /// <param name="codeGenLanguageInputDir">(Optional) The code generator language input dir.</param>
    /// <param name="outputPath">             (Optional) Full pathname of the output file.</param>
    /// <returns>An asynchronous result.</returns>
    public Task RequestExport(
        string packageName,
        string version = "latest",
        string ciBranch = "",
        string codeGenExe = "",
        string codeGenLanguageInputDir = "",
        string outputPath = "")
    {
        if (string.IsNullOrEmpty(codeGenExe))
        {
            string codeGenRoot = FindRelativeDir("fhir-codegen");
            if (string.IsNullOrEmpty(codeGenRoot))
            {
                throw new DirectoryNotFoundException("Could not find fhir-codegen root directory!");
            }

            codeGenExe = Path.Combine(new string[] { 
                codeGenRoot,
                "src",
                "fhir-codegen-cli",
                "bin",
                "Release",
                "net6.0",
                "fhir-codegen-cli.exe"
            });
        }

        if (!File.Exists(codeGenExe))
        {
            throw new FileNotFoundException("Could not find fhir-codegen executable!");
        }

        if (string.IsNullOrEmpty(codeGenLanguageInputDir))
        {
            string codeGenRoot = FindRelativeDir("fhir-codegen");
            if (string.IsNullOrEmpty(codeGenRoot))
            {
                throw new DirectoryNotFoundException("Could not find fhir-codegen root directory!");
            }

            codeGenLanguageInputDir = Path.Combine(new string[] {
                codeGenRoot,
                "languageInput",
                _languageName
            });
        }

        if (!Directory.Exists(codeGenLanguageInputDir))
        {
            throw new DirectoryNotFoundException("Could not find fhir-codegen language input directory!");
        }

        if (string.IsNullOrEmpty(packageName))
        {
            throw new ArgumentNullException(nameof(packageName), "Package Name is required!");
        }

        if (string.IsNullOrEmpty(version))
        {
            version = "latest";
        }

        if (string.IsNullOrEmpty(outputPath))
        {
            string sdkRoot = FindRelativeDir("fhir-typescript");

            if (string.IsNullOrEmpty(sdkRoot))
            {
                throw new DirectoryNotFoundException("Could not find fhir-typescript root directory!");
            }

            if (packageName.Contains("r2", StringComparison.OrdinalIgnoreCase) ||
                packageName.Contains("dstu2", StringComparison.OrdinalIgnoreCase))
            {
                outputPath = Path.Combine(sdkRoot, "core", "r2", "src");
            }
            else if (packageName.Contains("r3", StringComparison.OrdinalIgnoreCase) ||
                     packageName.Contains("stu3", StringComparison.OrdinalIgnoreCase))
            {
                outputPath = Path.Combine(sdkRoot, "core", "r3", "src");
            }
            else if (packageName.Contains("r4b", StringComparison.OrdinalIgnoreCase))
            {
                outputPath = Path.Combine(sdkRoot, "core", "r4b", "src");
            }
            else if (packageName.Contains("r4", StringComparison.OrdinalIgnoreCase))
            {
                outputPath = Path.Combine(sdkRoot, "core", "r4", "src");
            }
            else
            {
                string[] components = packageName.Split('.');
                if (components.Length == 1)
                {
                    outputPath = Path.Combine(sdkRoot, "core", packageName.ToLowerInvariant(), "src");
                }
                else if (components.Length >= 3)
                {
                    outputPath = Path.Combine(sdkRoot, "core", components[2].ToLowerInvariant(), "src");
                }
            }
        }

        if (string.IsNullOrEmpty(outputPath))
        {
            throw new ArgumentNullException(nameof(outputPath), "No outputPath was provided and one could not be determined!");
        }

        if (!Directory.Exists(outputPath))
        {
            Directory.CreateDirectory(outputPath);
        }

        Task exportTask = new Task(() =>
        {
            using (Process process = new Process())
            {
                process.StartInfo.FileName = codeGenExe;
                process.StartInfo.Arguments = string.Join(' ', new string[]
                {
                    "--output-path",
                    "\"" + outputPath + "\"",
                    "-p",
                    $"{packageName}#{version}",
                    "--language",
                    _languageName,
                    "--language-input-dir",
                    "\"" + codeGenLanguageInputDir + "\"",
                    "--official-expansions-only",
                    "true",
                });

                process.StartInfo.UseShellExecute = false;
                process.StartInfo.RedirectStandardOutput = true;
                process.Start();

                // Synchronously read the standard output of the spawned process.
                StreamReader reader = process.StandardOutput;
                string output = reader.ReadToEnd();

                process.WaitForExit();

                // Write the redirected output to this application's window.
                Console.WriteLine(output);
            }

            //Process genProc = Process.Start(
            //    codeGenExe,
            //    new string[]
            //    {
            //        "--output-path",
            //        outputPath,
            //        "-p",
            //        $"{packageName}#{version}",
            //        "--language",
            //        _languageName,
            //        "--language-input-dir",
            //        codeGenLanguageInputDir,
            //        "--official-expansions-only",
            //        "true",
            //    });

            //genProc.WaitForExit();
        });

        return exportTask;
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
