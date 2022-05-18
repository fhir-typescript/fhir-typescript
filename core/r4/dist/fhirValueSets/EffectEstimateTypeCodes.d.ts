/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare const EffectEstimateTypeCodes: {
    /**
     * absolute-ARD: absolute risk difference (a type of absolute effect estimate).
     */
    readonly AbsoluteRiskDifference: "absolute-ARD";
    /**
     * absolute-MeanDiff: mean difference (a type of absolute effect estimate).
     */
    readonly MeanDifference: "absolute-MeanDiff";
    /**
     * absolute-MedianDiff: median difference (a type of absolute effect estimate).
     */
    readonly MedianDifference: "absolute-MedianDiff";
    /**
     * absolute-SMD: standardized mean difference (a type of absolute effect estimate).
     */
    readonly StandardizedMeanDifference: "absolute-SMD";
    /**
     * relative-HR: hazard ratio (a type of relative effect estimate).
     */
    readonly HazardRatio: "relative-HR";
    /**
     * relative-OR: odds ratio (a type of relative effect estimate).
     */
    readonly OddsRatio: "relative-OR";
    /**
     * relative-RR: relative risk (a type of relative effect estimate).
     */
    readonly RelativeRisk: "relative-RR";
};
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare type EffectEstimateTypeCodeType = typeof EffectEstimateTypeCodes[keyof typeof EffectEstimateTypeCodes];
//# sourceMappingURL=EffectEstimateTypeCodes.d.ts.map