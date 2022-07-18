// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Medication Status Codes
 */
export type MedicationStatusCodingType = {
  /**
   * active: The medication is available for use.
   */
  Active: CodingArgs;
  /**
   * entered-in-error: The medication was entered in error.
   */
  EnteredInError: CodingArgs;
  /**
   * inactive: The medication is not available for use.
   */
  Inactive: CodingArgs;
}

/**
 * Medication Status Codes
 */
export const MedicationStatusCodings:MedicationStatusCodingType = {
  /**
   * active: The medication is available for use.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/CodeSystem/medication-status",
  },
  /**
   * entered-in-error: The medication was entered in error.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/CodeSystem/medication-status",
  },
  /**
   * inactive: The medication is not available for use.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/CodeSystem/medication-status",
  },
} as const;