// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/remittance-outcome|3.0.2

/**
 * This value set includes a Claim Processing Outcome codes.
 */
export const RemittanceOutcomeCodes = {
  /**
   * complete: The processing has completed without errors
   */
  ProcessingComplete: "complete",
  /**
   * error: One or more errors have been detected in the Claim
   */
  Error: "error",
  /**
   * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
   */
  PartialProcessing: "partial",
} as const;

/**
 * This value set includes a Claim Processing Outcome codes.
 */
export type RemittanceOutcomeCodeType = typeof RemittanceOutcomeCodes[keyof typeof RemittanceOutcomeCodes];