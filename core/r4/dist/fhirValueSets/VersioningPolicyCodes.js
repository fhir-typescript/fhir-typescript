/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/versioning-policy|4.0.1
/**
 * How the system supports versioning for a resource.
 */
var VersioningPolicyCodes = {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    NoVersionIdSupport: "no-version",
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    Versioned: "versioned",
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    VersionIdTrackedFully: "versioned-update",
};

export { VersioningPolicyCodes };
//# sourceMappingURL=VersioningPolicyCodes.js.map
