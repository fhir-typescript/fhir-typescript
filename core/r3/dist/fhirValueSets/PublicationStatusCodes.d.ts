/**
 * The lifecycle status of a Value Set or Concept Map.
 */
export declare const PublicationStatusCodes: {
    /**
     * active: This resource is ready for normal use.
     */
    readonly Active: "active";
    /**
     * draft: This resource is still under development and is not yet considered to be ready for normal use.
     */
    readonly Draft: "draft";
    /**
     * retired: This resource has been withdrawn or superseded and should no longer be used.
     */
    readonly Retired: "retired";
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: "unknown";
};
/**
 * The lifecycle status of a Value Set or Concept Map.
 */
export declare type PublicationStatusCodeType = typeof PublicationStatusCodes[keyof typeof PublicationStatusCodes];
//# sourceMappingURL=PublicationStatusCodes.d.ts.map