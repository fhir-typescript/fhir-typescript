import { CodingArgs } from '../fhir/Coding.js';
/**
 * How the system supports versioning for a resource.
 */
export declare type VersioningPolicyCodingType = {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    NoVersionIdSupport: CodingArgs;
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    Versioned: CodingArgs;
    /**
     * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    VersionIdTrackedFully: CodingArgs;
};
/**
 * How the system supports versioning for a resource.
 */
export declare const VersioningPolicyCodings: VersioningPolicyCodingType;
//# sourceMappingURL=VersioningPolicyCodings.d.ts.map