import { CodingArgs } from '../fhir/Coding.js';
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare type EffectEstimateTypeCodingType = {
    /**
     * absolute-ARD: absolute risk difference (a type of absolute effect estimate).
     */
    AbsoluteRiskDifference: CodingArgs;
    /**
     * absolute-MeanDiff: mean difference (a type of absolute effect estimate).
     */
    MeanDifference: CodingArgs;
    /**
     * absolute-MedianDiff: median difference (a type of absolute effect estimate).
     */
    MedianDifference: CodingArgs;
    /**
     * absolute-SMD: standardized mean difference (a type of absolute effect estimate).
     */
    StandardizedMeanDifference: CodingArgs;
    /**
     * relative-HR: hazard ratio (a type of relative effect estimate).
     */
    HazardRatio: CodingArgs;
    /**
     * relative-OR: odds ratio (a type of relative effect estimate).
     */
    OddsRatio: CodingArgs;
    /**
     * relative-RR: relative risk (a type of relative effect estimate).
     */
    RelativeRisk: CodingArgs;
};
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export declare const EffectEstimateTypeCodings: EffectEstimateTypeCodingType;
//# sourceMappingURL=EffectEstimateTypeCodings.d.ts.map