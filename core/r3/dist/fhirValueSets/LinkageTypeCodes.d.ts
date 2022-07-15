/**
 * Used to distinguish different roles a resource can play within a set of linked resources
 */
export declare const LinkageTypeCodes: {
    /**
     * alternate: The record represents the alternative view of the underlying event/condition/etc.  The record may still be actively maintained, even though it is not considered to be the source of truth.
     */
    readonly AlternateRecord: "alternate";
    /**
     * historical: The record represents an obsolete record of the underlyng event/condition/etc.  It is not expected to be actively maintained.
     */
    readonly HistoricalObsoleteRecord: "historical";
    /**
     * source: The record represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    readonly SourceOfTruth: "source";
};
/**
 * Used to distinguish different roles a resource can play within a set of linked resources
 */
export declare type LinkageTypeCodeType = typeof LinkageTypeCodes[keyof typeof LinkageTypeCodes];
//# sourceMappingURL=LinkageTypeCodes.d.ts.map