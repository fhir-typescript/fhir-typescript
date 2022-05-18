import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes example Diagnosis on Admission codes.
 */
export declare const ExDiagnosisOnAdmissionCodings: {
    /**
     * n: Diagnosis was not present at time of inpatient admission.
     */
    readonly No: Coding;
    /**
     * u: Documentation insufficient to determine if condition was present at the time of inpatient admission.
     */
    readonly Unknown: Coding;
    /**
     * w: Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.
     */
    readonly Undetermined: Coding;
    /**
     * y: Diagnosis was present at time of inpatient admission.
     */
    readonly Yes: Coding;
};
/**
 * This value set includes example Diagnosis on Admission codes.
 */
export declare type ExDiagnosisOnAdmissionCodingType = typeof ExDiagnosisOnAdmissionCodings;
//# sourceMappingURL=ExDiagnosisOnAdmissionCodings.d.ts.map