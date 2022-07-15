// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/remittance-outcome|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a Claim Processing Outcome codes.
 */
export type RemittanceOutcomeCodingType = {
  /**
   * complete: The processing has completed without errors
   */
  ProcessingComplete: CodingArgs;
  /**
   * error: One or more errors have been detected in the Claim
   */
  Error: CodingArgs;
  /**
   * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
   */
  PartialProcessing: CodingArgs;
}

/**
 * This value set includes a Claim Processing Outcome codes.
 */
export const RemittanceOutcomeCodings:RemittanceOutcomeCodingType = {
  /**
   * complete: The processing has completed without errors
   */
  ProcessingComplete: {
    display: "Processing Complete",
    code: "complete",
    system: "http://hl7.org/fhir/remittance-outcome",
  },
  /**
   * error: One or more errors have been detected in the Claim
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/remittance-outcome",
  },
  /**
   * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
   */
  PartialProcessing: {
    display: "Partial Processing",
    code: "partial",
    system: "http://hl7.org/fhir/remittance-outcome",
  },
} as const;
