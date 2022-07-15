// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-seriousness|3.0.2

/**
 * Overall seriousness of this event for the patient
 */
export const AdverseEventSeriousnessCodes = {
  /**
   * Code: Mild
   */
  Mild: "Mild",
  /**
   * Code: Moderate
   */
  Moderate: "Moderate",
  /**
   * Code: Severe
   */
  Severe: "Severe",
} as const;

/**
 * Overall seriousness of this event for the patient
 */
export type AdverseEventSeriousnessCodeType = typeof AdverseEventSeriousnessCodes[keyof typeof AdverseEventSeriousnessCodes];
