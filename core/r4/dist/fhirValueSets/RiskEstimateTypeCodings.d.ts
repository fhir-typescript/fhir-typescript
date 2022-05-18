import { Coding } from '../fhir/Coding.js';
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare const RiskEstimateTypeCodings: {
    /**
     * count: descriptive measure reported as total number of items.
     */
    readonly Count: Coding;
    /**
     * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    readonly DerivedProportion: Coding;
    /**
     * descriptive: descriptive measure reported as narrative.
     */
    readonly Descriptive: Coding;
    /**
     * mean: continuous numerical measure reported as an average.
     */
    readonly Mean: Coding;
    /**
     * median: continuous numerical measure reported as the middle of the range.
     */
    readonly Median: Coding;
    /**
     * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    readonly Proportion: Coding;
};
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare type RiskEstimateTypeCodingType = typeof RiskEstimateTypeCodings;
//# sourceMappingURL=RiskEstimateTypeCodings.d.ts.map