// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reaction-event-certainty|1.0.2

/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export const ReactionEventCertaintyCodes = {
  /**
   * confirmed: There is a very high level of clinical certainty that the reaction was due to the identified Substance, which may include clinical evidence by testing or rechallenge.
   */
  Confirmed: "confirmed",
  /**
   * likely: There is a high level of clinical certainty that the reaction was caused by the identified Substance.
   */
  Likely: "likely",
  /**
   * unlikely: There is a low level of clinical certainty that the reaction was caused by the identified Substance.
   */
  Unlikely: "unlikely",
} as const;

/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export type ReactionEventCertaintyCodeType = typeof ReactionEventCertaintyCodes[keyof typeof ReactionEventCertaintyCodes];
