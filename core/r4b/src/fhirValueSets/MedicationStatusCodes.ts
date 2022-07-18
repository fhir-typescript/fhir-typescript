// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-status|4.3.0

/**
 * Medication Status Codes
 */
export const MedicationStatusCodes = {
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
 * Medication Status Codes
 */
export type MedicationStatusCodeType = typeof MedicationStatusCodes[keyof typeof MedicationStatusCodes];