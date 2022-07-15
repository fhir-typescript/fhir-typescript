// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/process-outcome|3.0.2

/**
 * This value set includes sample Process Outcome codes.
 */
export const ProcessOutcomeCodes = {
  /**
   * complete: The requested processing has completed.
   */
  Complete: "complete",
  /**
   * error: The requested processing has terminated with some errors being found.
   */
  Error: "error",
  /**
   * pended: The requested processing has been suspended.
   */
  Pended: "pended",
} as const;

/**
 * This value set includes sample Process Outcome codes.
 */
export type ProcessOutcomeCodeType = typeof ProcessOutcomeCodes[keyof typeof ProcessOutcomeCodes];
