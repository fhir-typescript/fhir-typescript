// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinicalimpression-status|4.3.0

/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export const ClinicalimpressionStatusCodes = {
  /**
   * completed: The event has now concluded.
   */
  Completed: "completed",
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: The event is currently occurring.
   */
  InProgress: "in-progress",
} as const;

/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export type ClinicalimpressionStatusCodeType = typeof ClinicalimpressionStatusCodes[keyof typeof ClinicalimpressionStatusCodes];