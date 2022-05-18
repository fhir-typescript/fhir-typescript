// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-capability-mode|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The mode of a message capability statement.
 */
export const EventCapabilityModeCodings = {
  /**
   * receiver: The application receives requests and sends responses.
   */
  Receiver: new Coding({
    display: "Receiver",
    code: "receiver",
    system: "http://hl7.org/fhir/event-capability-mode",
  }),
  /**
   * sender: The application sends requests and receives responses.
   */
  Sender: new Coding({
    display: "Sender",
    code: "sender",
    system: "http://hl7.org/fhir/event-capability-mode",
  }),
} as const;

/**
 * The mode of a message capability statement.
 */
export type EventCapabilityModeCodingType = typeof EventCapabilityModeCodings;