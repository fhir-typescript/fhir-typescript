// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-statement-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A set of codes indicating the current status of a MedicationStatement.
 */
export type MedicationStatementStatusCodingType = {
  /**
   * active: The medication is still being taken.
   */
  Active: CodingArgs;
  /**
   * completed: The medication is no longer being taken.
   */
  Completed: CodingArgs;
  /**
   * entered-in-error: The statement was entered in error.
   */
  EnteredInError: CodingArgs;
  /**
   * intended: The medication may be taken at some time in the future.
   */
  Intended: CodingArgs;
}

/**
 * A set of codes indicating the current status of a MedicationStatement.
 */
export const MedicationStatementStatusCodings:MedicationStatementStatusCodingType = {
  /**
   * active: The medication is still being taken.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/medication-statement-status",
  },
  /**
   * completed: The medication is no longer being taken.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/medication-statement-status",
  },
  /**
   * entered-in-error: The statement was entered in error.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/medication-statement-status",
  },
  /**
   * intended: The medication may be taken at some time in the future.
   */
  Intended: {
    display: "Intended",
    code: "intended",
    system: "http://hl7.org/fhir/medication-statement-status",
  },
} as const;
