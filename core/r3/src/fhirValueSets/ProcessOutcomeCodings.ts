// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/process-outcome|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Process Outcome codes.
 */
export type ProcessOutcomeCodingType = {
  /**
   * complete: The requested processing has completed.
   */
  Complete: CodingArgs;
  /**
   * error: The requested processing has terminated with some errors being found.
   */
  Error: CodingArgs;
  /**
   * pended: The requested processing has been suspended.
   */
  Pended: CodingArgs;
}

/**
 * This value set includes sample Process Outcome codes.
 */
export const ProcessOutcomeCodings:ProcessOutcomeCodingType = {
  /**
   * complete: The requested processing has completed.
   */
  Complete: {
    display: "Complete",
    code: "complete",
    system: "http://hl7.org/fhir/processoutcomecodes",
  },
  /**
   * error: The requested processing has terminated with some errors being found.
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/processoutcomecodes",
  },
  /**
   * pended: The requested processing has been suspended.
   */
  Pended: {
    display: "Pended",
    code: "pended",
    system: "http://hl7.org/fhir/processoutcomecodes",
  },
} as const;