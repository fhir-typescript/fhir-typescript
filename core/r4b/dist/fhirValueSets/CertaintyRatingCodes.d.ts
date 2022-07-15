/**
 * The assessment of quality, confidence, or certainty.
 */
export declare const CertaintyRatingCodes: {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    readonly Absent: "absent";
    /**
     * downcode1: reduce quality rating by 1.
     */
    readonly ReduceRating1: "downcode1";
    /**
     * downcode2: reduce quality rating by 2.
     */
    readonly ReduceRating2: "downcode2";
    /**
     * downcode3: reduce quality rating by 3.
     */
    readonly ReduceRating3: "downcode3";
    /**
     * extremely-serious-concern: extremely serious concern.
     */
    readonly ExtremelySeriousConcern: "extremely-serious-concern";
    /**
     * high: High quality evidence.
     */
    readonly HighQuality: "high";
    /**
     * low: Low quality evidence.
     */
    readonly LowQuality: "low";
    /**
     * moderate: Moderate quality evidence.
     */
    readonly ModerateQuality: "moderate";
    /**
     * no-change: no change to quality rating.
     */
    readonly NoChangeToRating: "no-change";
    /**
     * no-concern: no serious concern.
     */
    readonly NoSeriousConcern: "no-concern";
    /**
     * present: possible reason for increasing quality rating was checked and found to be present.
     */
    readonly Present: "present";
    /**
     * serious-concern: serious concern.
     */
    readonly SeriousConcern: "serious-concern";
    /**
     * upcode1: increase quality rating by 1.
     */
    readonly IncreaseRatingPlus1: "upcode1";
    /**
     * upcode2: increase quality rating by 2.
     */
    readonly IncreaseRatingPlus2: "upcode2";
    /**
     * very-low: Very low quality evidence.
     */
    readonly VeryLowQuality: "very-low";
    /**
     * very-serious-concern: very serious concern.
     */
    readonly VerySeriousConcern: "very-serious-concern";
};
/**
 * The assessment of quality, confidence, or certainty.
 */
export declare type CertaintyRatingCodeType = typeof CertaintyRatingCodes[keyof typeof CertaintyRatingCodes];
//# sourceMappingURL=CertaintyRatingCodes.d.ts.map