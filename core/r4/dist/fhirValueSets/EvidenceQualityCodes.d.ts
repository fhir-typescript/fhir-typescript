/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare const EvidenceQualityCodes: {
    /**
     * high: High quality evidence.
     */
    readonly HighQuality: "high";
    /**
     * low: Low quality evidence.
     */
    readonly LowQuality: "low";
    /**
     * moderate: Moderate quality evidence.
     */
    readonly ModerateQuality: "moderate";
    /**
     * very-low: Very low quality evidence.
     */
    readonly VeryLowQuality: "very-low";
};
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export declare type EvidenceQualityCodeType = typeof EvidenceQualityCodes[keyof typeof EvidenceQualityCodes];
//# sourceMappingURL=EvidenceQualityCodes.d.ts.map