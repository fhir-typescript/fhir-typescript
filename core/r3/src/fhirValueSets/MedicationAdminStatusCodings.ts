// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-admin-status|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export type MedicationAdminStatusCodingType = {
  /**
   * completed: All actions that are implied by the administration have occurred.
   */
  Completed: CodingArgs;
  /**
   * entered-in-error: The administration was entered in error and therefore nullified.
   */
  EnteredInError: CodingArgs;
  /**
   * in-progress: The administration has started but has not yet completed.
   */
  InProgress: CodingArgs;
  /**
   * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: CodingArgs;
  /**
   * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
   */
  Stopped: CodingArgs;
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: CodingArgs;
}

/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export const MedicationAdminStatusCodings:MedicationAdminStatusCodingType = {
  /**
   * completed: All actions that are implied by the administration have occurred.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/medication-admin-status",
  },
  /**
   * entered-in-error: The administration was entered in error and therefore nullified.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/medication-admin-status",
  },
  /**
   * in-progress: The administration has started but has not yet completed.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/medication-admin-status",
  },
  /**
   * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: {
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/medication-admin-status",
  },
  /**
   * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
   */
  Stopped: {
    display: "Stopped",
    code: "stopped",
    system: "http://hl7.org/fhir/medication-admin-status",
  },
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/medication-admin-status",
  },
} as const;
