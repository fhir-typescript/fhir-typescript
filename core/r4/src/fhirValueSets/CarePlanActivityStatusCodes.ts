// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-status|4.0.1

/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export const CarePlanActivityStatusCodes = {
  /**
   * cancelled: The planned care plan activity has been withdrawn.
   */
  Cancelled: "cancelled",
  /**
   * completed: Care plan activity has been completed (more or less) as planned.
   */
  Completed: "completed",
  /**
   * entered-in-error: Care plan activity was entered in error and voided.
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: Care plan activity has been started but is not yet complete.
   */
  InProgress: "in-progress",
  /**
   * not-started: Care plan activity is planned but no action has yet been taken.
   */
  NotStarted: "not-started",
  /**
   * on-hold: Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.
   */
  OnHold: "on-hold",
  /**
   * scheduled: Appointment or other booking has occurred but activity has not yet begun.
   */
  Scheduled: "scheduled",
  /**
   * stopped: The planned care plan activity has been ended prior to completion after the activity was started.
   */
  Stopped: "stopped",
  /**
   * unknown: The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.
   */
  Unknown: "unknown",
} as const;

/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export type CarePlanActivityStatusCodeType = typeof CarePlanActivityStatusCodes[keyof typeof CarePlanActivityStatusCodes];
