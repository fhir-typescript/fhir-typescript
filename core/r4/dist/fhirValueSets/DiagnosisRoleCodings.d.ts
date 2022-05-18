import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare const DiagnosisRoleCodings: {
    /**
     * Code: AD
     */
    readonly AdmissionDiagnosis: Coding;
    /**
     * Code: billing
     */
    readonly Billing: Coding;
    /**
     * Code: CC
     */
    readonly ChiefComplaint: Coding;
    /**
     * Code: CM
     */
    readonly ComorbidityDiagnosis: Coding;
    /**
     * Code: DD
     */
    readonly DischargeDiagnosis: Coding;
    /**
     * Code: post-op
     */
    readonly PostOpDiagnosis: Coding;
    /**
     * Code: pre-op
     */
    readonly PreOpDiagnosis: Coding;
};
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare type DiagnosisRoleCodingType = typeof DiagnosisRoleCodings;
//# sourceMappingURL=DiagnosisRoleCodings.d.ts.map