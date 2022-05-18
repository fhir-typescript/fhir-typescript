// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationknowledge-status|4.0.1

/**
 * MedicationKnowledge Status Codes
 */
export const MedicationknowledgeStatusCodes = {
  /**
   * active: The medication is available for use.
   */
  Active: "active",
  /**
   * entered-in-error: The medication was entered in error.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: The medication is not available for use.
   */
  Inactive: "inactive",
} as const;

/**
 * MedicationKnowledge Status Codes
 */
export type MedicationknowledgeStatusCodeType = typeof MedicationknowledgeStatusCodes[keyof typeof MedicationknowledgeStatusCodes];