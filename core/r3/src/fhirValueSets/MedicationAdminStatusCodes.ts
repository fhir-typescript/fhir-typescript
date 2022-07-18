// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-admin-status|3.0.2

/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export const MedicationAdminStatusCodes = {
  /**
   * completed: All actions that are implied by the administration have occurred.
   */
  Completed: "completed",
  /**
   * entered-in-error: The administration was entered in error and therefore nullified.
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: The administration has started but has not yet completed.
   */
  InProgress: "in-progress",
  /**
   * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: "on-hold",
  /**
   * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
   */
  Stopped: "stopped",
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: "unknown",
} as const;

/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export type MedicationAdminStatusCodeType = typeof MedicationAdminStatusCodes[keyof typeof MedicationAdminStatusCodes];