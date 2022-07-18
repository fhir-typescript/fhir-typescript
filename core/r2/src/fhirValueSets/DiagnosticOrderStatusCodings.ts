// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-order-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of a diagnostic order.
 */
export type DiagnosticOrderStatusCodingType = {
  /**
   * accepted: The receiving system has accepted the order, but work has not yet commenced.
   */
  Accepted: CodingArgs;
  /**
   * cancelled: The request has been withdrawn.
   */
  Cancelled: CodingArgs;
  /**
   * completed: The work has been completed, the report(s) released, and no further work is planned.
   */
  Completed: CodingArgs;
  /**
   * draft: The request is in preliminary form prior to being sent.
   */
  Draft: CodingArgs;
  /**
   * failed: The diagnostic investigation was attempted, but due to some procedural error, it could not be completed.
   */
  Failed: CodingArgs;
  /**
   * in-progress: The work to fulfill the order is happening.
   */
  InProgress: CodingArgs;
  /**
   * planned: The request has been planned.
   */
  Planned: CodingArgs;
  /**
   * proposed: The request has been proposed.
   */
  Proposed: CodingArgs;
  /**
   * received: The receiving system has received the order, but not yet decided whether it will be performed.
   */
  Received: CodingArgs;
  /**
   * rejected: The receiving system has declined to fulfill the request.
   */
  Rejected: CodingArgs;
  /**
   * requested: The request has been placed.
   */
  Requested: CodingArgs;
  /**
   * review: The work is complete, and the outcomes are being reviewed for approval.
   */
  Review: CodingArgs;
  /**
   * suspended: The request has been held by originating system/user request.
   */
  Suspended: CodingArgs;
}

/**
 * The status of a diagnostic order.
 */
export const DiagnosticOrderStatusCodings:DiagnosticOrderStatusCodingType = {
  /**
   * accepted: The receiving system has accepted the order, but work has not yet commenced.
   */
  Accepted: {
    display: "Accepted",
    code: "accepted",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * cancelled: The request has been withdrawn.
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * completed: The work has been completed, the report(s) released, and no further work is planned.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * draft: The request is in preliminary form prior to being sent.
   */
  Draft: {
    display: "Draft",
    code: "draft",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * failed: The diagnostic investigation was attempted, but due to some procedural error, it could not be completed.
   */
  Failed: {
    display: "Failed",
    code: "failed",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * in-progress: The work to fulfill the order is happening.
   */
  InProgress: {
    display: "In-Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * planned: The request has been planned.
   */
  Planned: {
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * proposed: The request has been proposed.
   */
  Proposed: {
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * received: The receiving system has received the order, but not yet decided whether it will be performed.
   */
  Received: {
    display: "Received",
    code: "received",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * rejected: The receiving system has declined to fulfill the request.
   */
  Rejected: {
    display: "Rejected",
    code: "rejected",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * requested: The request has been placed.
   */
  Requested: {
    display: "Requested",
    code: "requested",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * review: The work is complete, and the outcomes are being reviewed for approval.
   */
  Review: {
    display: "Review",
    code: "review",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
  /**
   * suspended: The request has been held by originating system/user request.
   */
  Suspended: {
    display: "Suspended",
    code: "suspended",
    system: "http://hl7.org/fhir/diagnostic-order-status",
  },
} as const;