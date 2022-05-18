// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reaction-event-severity|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 */
export const ReactionEventSeverityCodings = {
  /**
   * mild: Causes mild physiological effects.
   */
  Mild: new Coding({
    display: "Mild",
    code: "mild",
    system: "http://hl7.org/fhir/reaction-event-severity",
  }),
  /**
   * moderate: Causes moderate physiological effects.
   */
  Moderate: new Coding({
    display: "Moderate",
    code: "moderate",
    system: "http://hl7.org/fhir/reaction-event-severity",
  }),
  /**
   * severe: Causes severe physiological effects.
   */
  Severe: new Coding({
    display: "Severe",
    code: "severe",
    system: "http://hl7.org/fhir/reaction-event-severity",
  }),
} as const;

/**
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 */
export type ReactionEventSeverityCodingType = typeof ReactionEventSeverityCodings;
