// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-diagnosisrelatedgroup|3.0.2

/**
 * This value set includes example Diagnosis Related Group codes.
 */
export const ExDiagnosisrelatedgroupCodes = {
  /**
   * 100: Normal Vaginal Delivery.
   */
  NormalVaginalDelivery: "100",
  /**
   * 101: Appendectomy without rupture or other complications.
   */
  AppendectomyUncomplicated: "101",
  /**
   * 300: Emergency department treatment of a tooth abcess.
   */
  ToothAbcess: "300",
  /**
   * 400: Head trauma - concussion.
   */
  HeadTraumaConcussion: "400",
} as const;

/**
 * This value set includes example Diagnosis Related Group codes.
 */
export type ExDiagnosisrelatedgroupCodeType = typeof ExDiagnosisrelatedgroupCodes[keyof typeof ExDiagnosisrelatedgroupCodes];
