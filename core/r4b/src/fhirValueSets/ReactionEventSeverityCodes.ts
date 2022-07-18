// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reaction-event-severity|4.3.0

/**
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 */
export const ReactionEventSeverityCodes = {
  /**
   * mild: Causes mild physiological effects.
   */
  Mild: "mild",
  /**
   * moderate: Causes moderate physiological effects.
   */
  Moderate: "moderate",
  /**
   * severe: Causes severe physiological effects.
   */
  Severe: "severe",
} as const;

/**
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 */
export type ReactionEventSeverityCodeType = typeof ReactionEventSeverityCodes[keyof typeof ReactionEventSeverityCodes];