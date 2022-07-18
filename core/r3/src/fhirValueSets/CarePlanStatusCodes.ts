// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-status|3.0.2

/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export const CarePlanStatusCodes = {
  /**
   * active: The plan is intended to be followed and used as part of patient care.
   */
  Active: "active",
  /**
   * cancelled: The plan has been terminated prior to reaching completion (though it may have been replaced by a new plan).
   */
  Cancelled: "cancelled",
  /**
   * completed: The plan is no longer in use and is not expected to be followed or used in patient care.
   */
  Completed: "completed",
  /**
   * draft: The plan is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: "draft",
  /**
   * entered-in-error: The plan was entered in error and voided.
   */
  EnteredInError: "entered-in-error",
  /**
   * suspended: The plan has been temporarily stopped but is expected to resume in the future.
   */
  Suspended: "suspended",
  /**
   * unknown: The authoring system doesn't know the current state of the care plan.
   */
  Unknown: "unknown",
} as const;

/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export type CarePlanStatusCodeType = typeof CarePlanStatusCodes[keyof typeof CarePlanStatusCodes];