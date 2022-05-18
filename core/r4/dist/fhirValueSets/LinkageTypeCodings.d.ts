import { Coding } from '../fhir/Coding.js';
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
export declare const LinkageTypeCodings: {
    /**
     * alternate: The resource represents an alternative view of the underlying event/condition/etc.  The resource may still be actively maintained, even though it is not considered to be the source of truth.
     */
    readonly AlternateRecord: Coding;
    /**
     * historical: The resource represents an obsolete record of the underlying event/condition/etc.  It is not expected to be actively maintained.
     */
    readonly HistoricalObsoleteRecord: Coding;
    /**
     * source: The resource represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
     */
    readonly SourceOfTruth: Coding;
};
/**
 * Used to distinguish different roles a resource can play within a set of linked resources.
 */
export declare type LinkageTypeCodingType = typeof LinkageTypeCodings;
//# sourceMappingURL=LinkageTypeCodings.d.ts.map