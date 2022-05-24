import { CodingArgs } from '../fhir/Coding.js';
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare type RiskEstimateTypeCodingType = {
    /**
     * count: descriptive measure reported as total number of items.
     */
    Count: CodingArgs;
    /**
     * derivedProportion: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    DerivedProportion: CodingArgs;
    /**
     * descriptive: descriptive measure reported as narrative.
     */
    Descriptive: CodingArgs;
    /**
     * mean: continuous numerical measure reported as an average.
     */
    Mean: CodingArgs;
    /**
     * median: continuous numerical measure reported as the middle of the range.
     */
    Median: CodingArgs;
    /**
     * proportion: dichotomous measure (present or absent) reported as a ratio compared to the denominator of 1 (A percentage is a proportion with denominator of 100).
     */
    Proportion: CodingArgs;
};
/**
 * Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).
 */
export declare const RiskEstimateTypeCodings: RiskEstimateTypeCodingType;
//# sourceMappingURL=RiskEstimateTypeCodings.d.ts.map