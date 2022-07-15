/**
 * Indicates whether the location is still in use.
 */
export declare const LocationStatusCodes: {
    /**
     * active: The location is operational.
     */
    readonly Active: "active";
    /**
     * inactive: The location is no longer used.
     */
    readonly Inactive: "inactive";
    /**
     * suspended: The location is temporarily closed.
     */
    readonly Suspended: "suspended";
};
/**
 * Indicates whether the location is still in use.
 */
export declare type LocationStatusCodeType = typeof LocationStatusCodes[keyof typeof LocationStatusCodes];
//# sourceMappingURL=LocationStatusCodes.d.ts.map