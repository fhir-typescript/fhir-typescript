// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/device-use-request-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes representing the status of the request.
 */
export type DeviceUseRequestStatusCodingType = {
  /**
   * aborted: The request was attempted, but due to some procedural error, it could not be completed.
   */
  Aborted: CodingArgs;
  /**
   * accepted: The receiving system has accepted the request but work has not yet commenced.
   */
  Accepted: CodingArgs;
  /**
   * completed: The work has been complete, the report(s) released, and no further work is planned.
   */
  Completed: CodingArgs;
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
   * received: The receiving system has received the request but not yet decided whether it will be performed.
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
   * suspended: The request has been held by originating system/user request.
   */
  Suspended: CodingArgs;
}

/**
 * Codes representing the status of the request.
 */
export const DeviceUseRequestStatusCodings:DeviceUseRequestStatusCodingType = {
  /**
   * aborted: The request was attempted, but due to some procedural error, it could not be completed.
   */
  Aborted: {
    display: "Aborted",
    code: "aborted",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * accepted: The receiving system has accepted the request but work has not yet commenced.
   */
  Accepted: {
    display: "Accepted",
    code: "accepted",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * completed: The work has been complete, the report(s) released, and no further work is planned.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * in-progress: The work to fulfill the order is happening.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * planned: The request has been planned.
   */
  Planned: {
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * proposed: The request has been proposed.
   */
  Proposed: {
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * received: The receiving system has received the request but not yet decided whether it will be performed.
   */
  Received: {
    display: "Received",
    code: "received",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * rejected: The receiving system has declined to fulfill the request.
   */
  Rejected: {
    display: "Rejected",
    code: "rejected",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * requested: The request has been placed.
   */
  Requested: {
    display: "Requested",
    code: "requested",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
  /**
   * suspended: The request has been held by originating system/user request.
   */
  Suspended: {
    display: "Suspended",
    code: "suspended",
    system: "http://hl7.org/fhir/device-use-request-status",
  },
} as const;