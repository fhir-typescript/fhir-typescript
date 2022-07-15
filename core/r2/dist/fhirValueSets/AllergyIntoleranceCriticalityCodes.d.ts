/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified Substance.
 */
export declare const AllergyIntoleranceCriticalityCodes: {
    /**
     * CRITH: The potential clinical impact of a future reaction is estimated as high risk: exposure to substance may result in a life threatening or organ system threatening outcome. Future exposure to the Substance may be considered an absolute contra-indication.
     */
    readonly HighRisk: "CRITH";
    /**
     * CRITL: The potential clinical impact of a future reaction is estimated as low risk: exposure to substance is unlikely to result in a life threatening or organ system threatening outcome. Future exposure to the Substance is considered a relative contra-indication.
     */
    readonly LowRisk: "CRITL";
    /**
     * CRITU: Unable to assess the potential clinical impact with the information available.
     */
    readonly UnableToDetermine: "CRITU";
};
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified Substance.
 */
export declare type AllergyIntoleranceCriticalityCodeType = typeof AllergyIntoleranceCriticalityCodes[keyof typeof AllergyIntoleranceCriticalityCodes];
//# sourceMappingURL=AllergyIntoleranceCriticalityCodes.d.ts.map