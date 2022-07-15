/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare const DiagnosisRoleCodes: {
    /**
     * Code: AD
     */
    readonly AdmissionDiagnosis: "AD";
    /**
     * Code: billing
     */
    readonly Billing: "billing";
    /**
     * Code: CC
     */
    readonly ChiefComplaint: "CC";
    /**
     * Code: CM
     */
    readonly ComorbidityDiagnosis: "CM";
    /**
     * Code: DD
     */
    readonly DischargeDiagnosis: "DD";
    /**
     * Code: post-op
     */
    readonly PostOpDiagnosis: "post-op";
    /**
     * Code: pre-op
     */
    readonly PreOpDiagnosis: "pre-op";
};
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare type DiagnosisRoleCodeType = typeof DiagnosisRoleCodes[keyof typeof DiagnosisRoleCodes];
//# sourceMappingURL=DiagnosisRoleCodes.d.ts.map