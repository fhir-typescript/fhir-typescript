/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare const RiskProbabilityCodes: {
    /**
     * certain: The specified outcome is effectively guaranteed.
     */
    readonly Certain: "certain";
    /**
     * high: The specified outcome is more likely to occur than not.
     */
    readonly HighLikelihood: "high";
    /**
     * low: The specified outcome is possible but unlikely.
     */
    readonly LowLikelihood: "low";
    /**
     * moderate: The specified outcome has a reasonable likelihood of occurrence.
     */
    readonly ModerateLikelihood: "moderate";
    /**
     * negligible: The specified outcome is exceptionally unlikely.
     */
    readonly NegligibleLikelihood: "negligible";
};
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export declare type RiskProbabilityCodeType = typeof RiskProbabilityCodes[keyof typeof RiskProbabilityCodes];
//# sourceMappingURL=RiskProbabilityCodes.d.ts.map