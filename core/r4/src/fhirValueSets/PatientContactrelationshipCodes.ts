// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/patient-contactrelationship|4.0.1

/**
 * The nature of the relationship between the patient and the contact person.
 */
export const PatientContactrelationshipCodes = {
  /**
   * Code: C
   */
  EmergencyContact: "C",
  /**
   * Code: E
   */
  Employer: "E",
  /**
   * Code: F
   */
  FederalAgency: "F",
  /**
   * Code: I
   */
  InsuranceCompany: "I",
  /**
   * Code: N
   */
  NextOfKin: "N",
  /**
   * Code: S
   */
  StateAgency: "S",
  /**
   * Code: U
   */
  Unknown: "U",
} as const;

/**
 * The nature of the relationship between the patient and the contact person.
 */
export type PatientContactrelationshipCodeType = typeof PatientContactrelationshipCodes[keyof typeof PatientContactrelationshipCodes];
