/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export declare const GroupMeasureCodes: {
    /**
     * mean: Aggregated using Mean of participant values.
     */
    readonly Mean: "mean";
    /**
     * mean-of-mean: Aggregated using Mean of study mean values.
     */
    readonly MeanOfStudyMeans: "mean-of-mean";
    /**
     * mean-of-median: Aggregated using Mean of study median values.
     */
    readonly MeanOfStudyMedins: "mean-of-median";
    /**
     * median: Aggregated using Median of participant values.
     */
    readonly Median: "median";
    /**
     * median-of-mean: Aggregated using Median of study mean values.
     */
    readonly MedianOfStudyMeans: "median-of-mean";
    /**
     * median-of-median: Aggregated using Median of study median values.
     */
    readonly MedianOfStudyMedians: "median-of-median";
};
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export declare type GroupMeasureCodeType = typeof GroupMeasureCodes[keyof typeof GroupMeasureCodes];
//# sourceMappingURL=GroupMeasureCodes.d.ts.map