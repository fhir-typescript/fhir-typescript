// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-status|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Codes identifying the lifecycle stage of an event.
 */
export const EventStatusCodings = {
  /**
   * completed: The event has now concluded.
   */
  Completed: new Coding({
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * in-progress: The event is currently occurring.
   */
  InProgress: new Coding({
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
   */
  NotDone: new Coding({
    display: "Not Done",
    code: "not-done",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * on-hold: The event has been temporarily stopped but is expected to resume in the future.
   */
  OnHold: new Coding({
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
   */
  Preparation: new Coding({
    display: "Preparation",
    code: "preparation",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * stopped: The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
   */
  Stopped: new Coding({
    display: "Stopped",
    code: "stopped",
    system: "http://hl7.org/fhir/event-status",
  }),
  /**
   * unknown: The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/event-status",
  }),
} as const;

/**
 * Codes identifying the lifecycle stage of an event.
 */
export type EventStatusCodingType = typeof EventStatusCodings;