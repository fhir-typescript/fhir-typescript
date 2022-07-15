/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare const AllergyIntoleranceCriticalityCodes: {
    /**
     * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
     */
    readonly HighRisk: "high";
    /**
     * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
     */
    readonly LowRisk: "low";
    /**
     * unable-to-assess: Unable to assess the worst case result of a future exposure.
     */
    readonly UnableToAssessRisk: "unable-to-assess";
};
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export declare type AllergyIntoleranceCriticalityCodeType = typeof AllergyIntoleranceCriticalityCodes[keyof typeof AllergyIntoleranceCriticalityCodes];
//# sourceMappingURL=AllergyIntoleranceCriticalityCodes.d.ts.map