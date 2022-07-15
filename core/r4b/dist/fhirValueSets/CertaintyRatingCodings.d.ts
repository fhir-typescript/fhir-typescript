import { CodingArgs } from '../fhir/Coding.js';
/**
 * The assessment of quality, confidence, or certainty.
 */
export declare type CertaintyRatingCodingType = {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    Absent: CodingArgs;
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
     * extremely-serious-concern: extremely serious concern.
     */
    ExtremelySeriousConcern: CodingArgs;
    /**
     * high: High quality evidence.
     */
    HighQuality: CodingArgs;
    /**
     * low: Low quality evidence.
     */
    LowQuality: CodingArgs;
    /**
     * moderate: Moderate quality evidence.
     */
    ModerateQuality: CodingArgs;
    /**
     * no-change: no change to quality rating.
     */
    NoChangeToRating: CodingArgs;
    /**
     * no-concern: no serious concern.
     */
    NoSeriousConcern: CodingArgs;
    /**
     * present: possible reason for increasing quality rating was checked and found to be present.
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
    /**
     * very-low: Very low quality evidence.
     */
    VeryLowQuality: CodingArgs;
    /**
     * very-serious-concern: very serious concern.
     */
    VerySeriousConcern: CodingArgs;
};
/**
 * The assessment of quality, confidence, or certainty.
 */
export declare const CertaintyRatingCodings: CertaintyRatingCodingType;
//# sourceMappingURL=CertaintyRatingCodings.d.ts.map