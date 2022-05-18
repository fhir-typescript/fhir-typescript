// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/remittance-outcome|4.0.1

/**
 * This value set includes Claim Processing Outcome codes.
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
  /**
   * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
   */
  Queued: "queued",
} as const;

/**
 * This value set includes Claim Processing Outcome codes.
 */
export type RemittanceOutcomeCodeType = typeof RemittanceOutcomeCodes[keyof typeof RemittanceOutcomeCodes];