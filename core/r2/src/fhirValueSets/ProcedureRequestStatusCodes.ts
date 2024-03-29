// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/procedure-request-status|1.0.2

/**
 * The status of the request.
 */
export const ProcedureRequestStatusCodes = {
  /**
   * aborted: The request was attempted, but due to some procedural error, it could not be completed.
   */
  Aborted: "aborted",
  /**
   * accepted: The receiving system has accepted the request, but work has not yet commenced.
   */
  Accepted: "accepted",
  /**
   * completed: The work has been completed, the report(s) released, and no further work is planned.
   */
  Completed: "completed",
  /**
   * draft: The request is in preliminary form, prior to being requested.
   */
  Draft: "draft",
  /**
   * in-progress: The work to fulfill the request is happening.
   */
  InProgress: "in-progress",
  /**
   * proposed: The request has been proposed.
   */
  Proposed: "proposed",
  /**
   * received: The receiving system has received the request but not yet decided whether it will be performed.
   */
  Received: "received",
  /**
   * rejected: The receiving system has declined to fulfill the request.
   */
  Rejected: "rejected",
  /**
   * requested: The request has been placed.
   */
  Requested: "requested",
  /**
   * suspended: The request has been held by originating system/user request.
   */
  Suspended: "suspended",
} as const;

/**
 * The status of the request.
 */
export type ProcedureRequestStatusCodeType = typeof ProcedureRequestStatusCodes[keyof typeof ProcedureRequestStatusCodes];
