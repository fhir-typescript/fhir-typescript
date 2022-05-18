import { Coding } from '../fhir/Coding.js';
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare const EffectEstimateTypeCodings: {
    /**
     * absolute-ARD: absolute risk difference (a type of absolute effect estimate).
     */
    readonly AbsoluteRiskDifference: Coding;
    /**
     * absolute-MeanDiff: mean difference (a type of absolute effect estimate).
     */
    readonly MeanDifference: Coding;
    /**
     * absolute-MedianDiff: median difference (a type of absolute effect estimate).
     */
    readonly MedianDifference: Coding;
    /**
     * absolute-SMD: standardized mean difference (a type of absolute effect estimate).
     */
    readonly StandardizedMeanDifference: Coding;
    /**
     * relative-HR: hazard ratio (a type of relative effect estimate).
     */
    readonly HazardRatio: Coding;
    /**
     * relative-OR: odds ratio (a type of relative effect estimate).
     */
    readonly OddsRatio: Coding;
    /**
     * relative-RR: relative risk (a type of relative effect estimate).
     */
    readonly RelativeRisk: Coding;
};
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare type EffectEstimateTypeCodingType = typeof EffectEstimateTypeCodings;
//# sourceMappingURL=EffectEstimateTypeCodings.d.ts.map