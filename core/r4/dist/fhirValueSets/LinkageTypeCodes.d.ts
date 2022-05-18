/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
export declare const LinkageTypeCodes: {
    /**
     * alternate: The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.
     */
    readonly AlternateRecord: "alternate";
    /**
     * historical: The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.
     */
    readonly HistoricalObsoleteRecord: "historical";
    /**
     * source: The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    readonly SourceOfTruth: "source";
};
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
export declare type LinkageTypeCodeType = typeof LinkageTypeCodes[keyof typeof LinkageTypeCodes];
//# sourceMappingURL=LinkageTypeCodes.d.ts.map