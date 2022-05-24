import { CodingArgs } from '../fhir/Coding.js';
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare type CertaintySubcomponentRatingCodingType = {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    Absent: CodingArgs;
    /**
     * critical-concern: critical concern.
     */
    CriticalConcern: CodingArgs;
    /**
     * downcode1: reduce quality rating by 1.
     */
    ReduceRating1: CodingArgs;
    /**
     * downcode2: reduce quality rating by 2.
     */
    ReduceRating2: CodingArgs;
    /**
     * downcode3: reduce quality rating by 3.
     */
    ReduceRating3: CodingArgs;
    /**
     * no-change: no change to quality rating.
     */
    NoChangeToRating: CodingArgs;
    /**
     * no-concern: no serious concern.
     */
    NoSeriousConcern: CodingArgs;
    /**
     * present: possible reason for increasing quality rating was checked and found to bepresent.
     */
    Present: CodingArgs;
    /**
     * serious-concern: serious concern.
     */
    SeriousConcern: CodingArgs;
    /**
     * upcode1: increase quality rating by 1.
     */
    IncreaseRatingPlus1: CodingArgs;
    /**
     * upcode2: increase quality rating by 2.
     */
    IncreaseRatingPlus2: CodingArgs;
};
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare const CertaintySubcomponentRatingCodings: CertaintySubcomponentRatingCodingType;
//# sourceMappingURL=CertaintySubcomponentRatingCodings.d.ts.map