// <copyright file="ICodeGenService.cs" company="Microsoft Corporation">
//     Copyright (c) Microsoft Corporation. All rights reserved.
//     Licensed under the MIT License (MIT). See LICENSE in the repo root for license information.
// </copyright>

namespace GenHelperBlazor.Services;

/// <summary>Interface for code generate service.</summary>
public interface ICodeGenService
{
    /// <summary>Initializes this service.</summary>
    void Init();

    /// <summary>Request export.</summary>
    /// <param name="packageName">            Name of the package.</param>
    /// <param name="version">                (Optional) The version.</param>
    /// <param name="ciBranch">               (Optional) The ci branch.</param>
    /// <param name="codeGenExe">             (Optional) The code generator executable.</param>
    /// <param name="codeGenLanguageInputDir">(Optional) The code generator language input dir.</param>
    /// <param name="outputPath">             (Optional) Full pathname of the output file.</param>
    /// <returns>An asynchronous result.</returns>
    Task RequestExport(
        string packageName,
        string version = "latest",
        string ciBranch = "",
        string codeGenExe = "",
        string codeGenLanguageInputDir = "",
        string outputPath = "");
}
