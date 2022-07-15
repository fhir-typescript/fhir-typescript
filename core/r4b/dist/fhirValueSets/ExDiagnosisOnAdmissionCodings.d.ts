import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes example Diagnosis on Admission codes.
 */
export declare type ExDiagnosisOnAdmissionCodingType = {
    /**
     * n: Diagnosis was not present at time of inpatient admission.
     */
    No: CodingArgs;
    /**
     * u: Documentation insufficient to determine if condition was present at the time of inpatient admission.
     */
    Unknown: CodingArgs;
    /**
     * w: Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.
     */
    Undetermined: CodingArgs;
    /**
     * y: Diagnosis was present at time of inpatient admission.
     */
    Yes: CodingArgs;
};
/**
 * This value set includes example Diagnosis on Admission codes.
 */
export declare const ExDiagnosisOnAdmissionCodings: ExDiagnosisOnAdmissionCodingType;
//# sourceMappingURL=ExDiagnosisOnAdmissionCodings.d.ts.map