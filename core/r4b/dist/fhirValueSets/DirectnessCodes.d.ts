/**
 * The quality of how direct the match is.
 */
export declare const DirectnessCodes: {
    /**
     * exact: Exact matching quality between observed and intended variable, so no concern for indirectness in evidence interpretation.
     */
    readonly ExactMatchBetweenObservedAndIntendedVariable: "exact";
    /**
     * high: High matching quality between observed and intended variable, so little concern for indirectness in evidence interpretation.
     */
    readonly HighQualityMatchBetweenObservedAndIntendedVariable: "high";
    /**
     * low: Low matching quality between observed and intended variable, so very serious concern for indirectness in evidence interpretation.
     */
    readonly LowQualityMatchBetweenObservedAndIntendedVariable: "low";
    /**
     * moderate: Moderate matching quality between observed and intended variable, so serious concern for indirectness in evidence interpretation.
     */
    readonly ModerateQualityMatchBetweenObservedAndIntendedVariable: "moderate";
};
/**
 * The quality of how direct the match is.
 */
export declare type DirectnessCodeType = typeof DirectnessCodes[keyof typeof DirectnessCodes];
//# sourceMappingURL=DirectnessCodes.d.ts.map