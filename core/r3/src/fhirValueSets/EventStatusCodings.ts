// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-status|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes identifying the stage lifecycle stage of a event
 */
export type EventStatusCodingType = {
  /**
   * aborted: The event was  prior to the full completion of the intended actions
   */
  Aborted: CodingArgs;
  /**
   * completed: The event has now concluded
   */
  Completed: CodingArgs;
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
   */
  EnteredInError: CodingArgs;
  /**
   * in-progress: The event is currently occurring
   */
  InProgress: CodingArgs;
  /**
   * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
   */
  Preparation: CodingArgs;
  /**
   * suspended: The event has been temporarily stopped but is expected to resume in the future
   */
  Suspended: CodingArgs;
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: CodingArgs;
}

/**
 * Codes identifying the stage lifecycle stage of a event
 */
export const EventStatusCodings:EventStatusCodingType = {
  /**
   * aborted: The event was  prior to the full completion of the intended actions
   */
  Aborted: {
    display: "Aborted",
    code: "aborted",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * completed: The event has now concluded
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * in-progress: The event is currently occurring
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
   */
  Preparation: {
    display: "Preparation",
    code: "preparation",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * suspended: The event has been temporarily stopped but is expected to resume in the future
   */
  Suspended: {
    display: "Suspended",
    code: "suspended",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/event-status",
  },
} as const;
