/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * How the system supports versioning for a resource.
 */
var VersioningPolicyCodings = {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    NoVersionIdSupport: new Coding({
        display: "No VersionId Support",
        code: "no-version",
        system: "http://hl7.org/fhir/versioning-policy",
    }),
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    Versioned: new Coding({
        display: "Versioned",
        code: "versioned",
        system: "http://hl7.org/fhir/versioning-policy",
    }),
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    VersionIdTrackedFully: new Coding({
        display: "VersionId tracked fully",
        code: "versioned-update",
        system: "http://hl7.org/fhir/versioning-policy",
    }),
};

export { VersioningPolicyCodings };
//# sourceMappingURL=VersioningPolicyCodings.js.map
