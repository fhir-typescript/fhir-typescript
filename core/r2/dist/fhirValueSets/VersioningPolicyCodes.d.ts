/**
 * How the system supports versioning for a resource.
 */
export declare const VersioningPolicyCodes: {
    /**
     * no-version: VersionId meta-property is not supported (server) or used (client).
     */
    readonly NoVersionIdSupport: "no-version";
    /**
     * versioned: VersionId meta-property is supported (server) or used (client).
     */
    readonly Versioned: "versioned";
    /**
     * versioned-update: VersionId is must be correct for updates (server) or will be specified (If-match header) for updates (client).
     */
    readonly VersionIdTrackedFully: "versioned-update";
};
/**
 * How the system supports versioning for a resource.
 */
export declare type VersioningPolicyCodeType = typeof VersioningPolicyCodes[keyof typeof VersioningPolicyCodes];
//# sourceMappingURL=VersioningPolicyCodes.d.ts.map