// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-diagnosis-on-admission|4.3.0

/**
 * This value set includes example Diagnosis on Admission codes.
 */
export const ExDiagnosisOnAdmissionCodes = {
  /**
   * n: Diagnosis was not present at time of inpatient admission.
   */
  No: "n",
  /**
   * u: Documentation insufficient to determine if condition was present at the time of inpatient admission.
   */
  Unknown: "u",
  /**
   * w: Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.
   */
  Undetermined: "w",
  /**
   * y: Diagnosis was present at time of inpatient admission.
   */
  Yes: "y",
} as const;

/**
 * This value set includes example Diagnosis on Admission codes.
 */
export type ExDiagnosisOnAdmissionCodeType = typeof ExDiagnosisOnAdmissionCodes[keyof typeof ExDiagnosisOnAdmissionCodes];
