import { Coding } from '../fhir/Coding.js';
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare const CertaintySubcomponentRatingCodings: {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    readonly Absent: Coding;
    /**
     * critical-concern: critical concern.
     */
    readonly CriticalConcern: Coding;
    /**
     * downcode1: reduce quality rating by 1.
     */
    readonly ReduceRating1: Coding;
    /**
     * downcode2: reduce quality rating by 2.
     */
    readonly ReduceRating2: Coding;
    /**
     * downcode3: reduce quality rating by 3.
     */
    readonly ReduceRating3: Coding;
    /**
     * no-change: no change to quality rating.
     */
    readonly NoChangeToRating: Coding;
    /**
     * no-concern: no serious concern.
     */
    readonly NoSeriousConcern: Coding;
    /**
     * present: possible reason for increasing quality rating was checked and found to bepresent.
     */
    readonly Present: Coding;
    /**
     * serious-concern: serious concern.
     */
    readonly SeriousConcern: Coding;
    /**
     * upcode1: increase quality rating by 1.
     */
    readonly IncreaseRatingPlus1: Coding;
    /**
     * upcode2: increase quality rating by 2.
     */
    readonly IncreaseRatingPlus2: Coding;
};
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare type CertaintySubcomponentRatingCodingType = typeof CertaintySubcomponentRatingCodings;
//# sourceMappingURL=CertaintySubcomponentRatingCodings.d.ts.map