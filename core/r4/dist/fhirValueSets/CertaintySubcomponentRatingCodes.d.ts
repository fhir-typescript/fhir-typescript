/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare const CertaintySubcomponentRatingCodes: {
    /**
     * absent: possible reason for increasing quality rating was checked and found to be absent.
     */
    readonly Absent: "absent";
    /**
     * critical-concern: critical concern.
     */
    readonly CriticalConcern: "critical-concern";
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
     * no-change: no change to quality rating.
     */
    readonly NoChangeToRating: "no-change";
    /**
     * no-concern: no serious concern.
     */
    readonly NoSeriousConcern: "no-concern";
    /**
     * present: possible reason for increasing quality rating was checked and found to bepresent.
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
};
/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export declare type CertaintySubcomponentRatingCodeType = typeof CertaintySubcomponentRatingCodes[keyof typeof CertaintySubcomponentRatingCodes];
//# sourceMappingURL=CertaintySubcomponentRatingCodes.d.ts.map