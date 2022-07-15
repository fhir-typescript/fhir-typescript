// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-capability-mode|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The mode of a message capability statement.
 */
export type EventCapabilityModeCodingType = {
  /**
   * receiver: The application receives requests and sends responses.
   */
  Receiver: CodingArgs;
  /**
   * sender: The application sends requests and receives responses.
   */
  Sender: CodingArgs;
}

/**
 * The mode of a message capability statement.
 */
export const EventCapabilityModeCodings:EventCapabilityModeCodingType = {
  /**
   * receiver: The application receives requests and sends responses.
   */
  Receiver: {
    display: "Receiver",
    code: "receiver",
    system: "http://hl7.org/fhir/event-capability-mode",
  },
  /**
   * sender: The application sends requests and receives responses.
   */
  Sender: {
    display: "Sender",
    code: "sender",
    system: "http://hl7.org/fhir/event-capability-mode",
  },
} as const;
