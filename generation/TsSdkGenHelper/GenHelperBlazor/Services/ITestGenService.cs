// <copyright file="ITestGenService.cs" company="Microsoft Corporation">
//     Copyright (c) Microsoft Corporation. All rights reserved.
//     Licensed under the MIT License (MIT). See LICENSE in the repo root for license information.
// </copyright>

namespace GenHelperBlazor.Services;

/// <summary>Interface for test generate service.</summary>
public interface ITestGenService
{
    /// <summary>Initializes this service.</summary>
    void Init();

    /// <summary>Builds the tests.</summary>
    /// <param name="packageName">Name of the package.</param>
    /// <param name="outputPath"> (Optional) Full pathname of the output file.</param>
    /// <returns>An asynchronous result.</returns>
    Task BuildTests(
        string packageName,
        string outputPath = "");
}
