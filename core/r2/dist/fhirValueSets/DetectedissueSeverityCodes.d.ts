/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export declare const DetectedissueSeverityCodes: {
    /**
     * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
     */
    readonly High: "high";
    /**
     * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
     */
    readonly Low: "low";
    /**
     * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
     */
    readonly Moderate: "moderate";
};
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export declare type DetectedissueSeverityCodeType = typeof DetectedissueSeverityCodes[keyof typeof DetectedissueSeverityCodes];
//# sourceMappingURL=DetectedissueSeverityCodes.d.ts.map