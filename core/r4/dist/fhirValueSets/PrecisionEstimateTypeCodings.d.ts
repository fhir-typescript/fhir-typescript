import { Coding } from '../fhir/Coding.js';
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare const PrecisionEstimateTypeCodings: {
    /**
     * CI: confidence interval.
     */
    readonly ConfidenceInterval: Coding;
    /**
     * IQR: interquartile range.
     */
    readonly InterquartileRange: Coding;
    /**
     * SD: standard deviation.
     */
    readonly StandardDeviation: Coding;
    /**
     * SE: standard error.
     */
    readonly StandardError: Coding;
};
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare type PrecisionEstimateTypeCodingType = typeof PrecisionEstimateTypeCodings;
//# sourceMappingURL=PrecisionEstimateTypeCodings.d.ts.map