// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinicalimpression-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export type ClinicalimpressionStatusCodingType = {
  /**
   * completed: The event has now concluded.
   */
  Completed: CodingArgs;
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
   */
  EnteredInError: CodingArgs;
  /**
   * in-progress: The event is currently occurring.
   */
  InProgress: CodingArgs;
}

/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export const ClinicalimpressionStatusCodings:ClinicalimpressionStatusCodingType = {
  /**
   * completed: The event has now concluded.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/event-status",
  },
  /**
   * in-progress: The event is currently occurring.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/event-status",
  },
} as const;
