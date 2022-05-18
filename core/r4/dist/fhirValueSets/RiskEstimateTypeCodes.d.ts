/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare const RiskEstimateTypeCodes: {
    /**
     * count: descriptive measure reported as total number of items.
     */
    readonly Count: "count";
    /**
     * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    readonly DerivedProportion: "derivedProportion";
    /**
     * descriptive: descriptive measure reported as narrative.
     */
    readonly Descriptive: "descriptive";
    /**
     * mean: continuous numerical measure reported as an average.
     */
    readonly Mean: "mean";
    /**
     * median: continuous numerical measure reported as the middle of the range.
     */
    readonly Median: "median";
    /**
     * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    readonly Proportion: "proportion";
};
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare type RiskEstimateTypeCodeType = typeof RiskEstimateTypeCodes[keyof typeof RiskEstimateTypeCodes];
//# sourceMappingURL=RiskEstimateTypeCodes.d.ts.map