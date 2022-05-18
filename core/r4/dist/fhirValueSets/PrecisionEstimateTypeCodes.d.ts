/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare const PrecisionEstimateTypeCodes: {
    /**
     * CI: confidence interval.
     */
    readonly ConfidenceInterval: "CI";
    /**
     * IQR: interquartile range.
     */
    readonly InterquartileRange: "IQR";
    /**
     * SD: standard deviation.
     */
    readonly StandardDeviation: "SD";
    /**
     * SE: standard error.
     */
    readonly StandardError: "SE";
};
/**
 * Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.
 */
export declare type PrecisionEstimateTypeCodeType = typeof PrecisionEstimateTypeCodes[keyof typeof PrecisionEstimateTypeCodes];
//# sourceMappingURL=PrecisionEstimateTypeCodes.d.ts.map