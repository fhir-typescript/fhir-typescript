// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationknowledge-status|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * MedicationKnowledge Status Codes
 */
export type MedicationknowledgeStatusCodingType = {
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
 * MedicationKnowledge Status Codes
 */
export const MedicationknowledgeStatusCodings:MedicationknowledgeStatusCodingType = {
  /**
   * active: The medication is available for use.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
  },
  /**
   * entered-in-error: The medication was entered in error.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
  },
  /**
   * inactive: The medication is not available for use.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
  },
} as const;
