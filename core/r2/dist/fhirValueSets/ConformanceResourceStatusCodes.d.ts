/**
 * The lifecycle status of a Value Set or Concept Map.
 */
export declare const ConformanceResourceStatusCodes: {
    /**
     * active: This resource is ready for normal use.
     */
    readonly Active: "active";
    /**
     * draft: This resource is still under development.
     */
    readonly Draft: "draft";
    /**
     * retired: This resource has been withdrawn or superseded and should no longer be used.
     */
    readonly Retired: "retired";
};
/**
 * The lifecycle status of a Value Set or Concept Map.
 */
export declare type ConformanceResourceStatusCodeType = typeof ConformanceResourceStatusCodes[keyof typeof ConformanceResourceStatusCodes];
//# sourceMappingURL=ConformanceResourceStatusCodes.d.ts.map