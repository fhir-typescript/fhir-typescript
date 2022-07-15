import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare type DiagnosisRoleCodingType = {
    /**
     * Code: AD
     */
    AdmissionDiagnosis: CodingArgs;
    /**
     * Code: billing
     */
    Billing: CodingArgs;
    /**
     * Code: CC
     */
    ChiefComplaint: CodingArgs;
    /**
     * Code: CM
     */
    ComorbidityDiagnosis: CodingArgs;
    /**
     * Code: DD
     */
    DischargeDiagnosis: CodingArgs;
    /**
     * Code: post-op
     */
    PostOpDiagnosis: CodingArgs;
    /**
     * Code: pre-op
     */
    PreOpDiagnosis: CodingArgs;
};
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare const DiagnosisRoleCodings: DiagnosisRoleCodingType;
//# sourceMappingURL=DiagnosisRoleCodings.d.ts.map