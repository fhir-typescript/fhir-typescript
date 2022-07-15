// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/request-status|3.0.2

/**
 * Codes identifying the stage lifecycle stage of a request
 */
export const RequestStatusCodes = {
  /**
   * active: The request is ready to be acted upon
   */
  Active: "active",
  /**
   * cancelled: The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
   */
  Cancelled: "cancelled",
  /**
   * completed: Activity against the request has been sufficiently completed to the satisfaction of the requester
   */
  Completed: "completed",
  /**
   * draft: The request has been created but is not yet complete or ready for action
   */
  Draft: "draft",
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
   */
  EnteredInError: "entered-in-error",
  /**
   * suspended: The authorization/request to act has been temporarily withdrawn but is expected to resume in the future
   */
  Suspended: "suspended",
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" . One of the listed statuses is presumed to apply,  but the system creating the request doesn't know.
   */
  Unknown: "unknown",
} as const;

/**
 * Codes identifying the stage lifecycle stage of a request
 */
export type RequestStatusCodeType = typeof RequestStatusCodes[keyof typeof RequestStatusCodes];
