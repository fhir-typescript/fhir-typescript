// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-action-result-codes|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The results of executing an action.
 */
export type ReportActionResultCodingType = {
  /**
   * error: The action encountered a fatal error and the engine was unable to process.
   */
  Error: CodingArgs;
  /**
   * fail: The action failed.
   */
  Fail: CodingArgs;
  /**
   * pass: The action was successful.
   */
  Pass: CodingArgs;
  /**
   * skip: The action was skipped.
   */
  Skip: CodingArgs;
  /**
   * warning: The action passed but with warnings.
   */
  Warning: CodingArgs;
}

/**
 * The results of executing an action.
 */
export const ReportActionResultCodings:ReportActionResultCodingType = {
  /**
   * error: The action encountered a fatal error and the engine was unable to process.
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/report-action-result-codes",
  },
  /**
   * fail: The action failed.
   */
  Fail: {
    display: "Fail",
    code: "fail",
    system: "http://hl7.org/fhir/report-action-result-codes",
  },
  /**
   * pass: The action was successful.
   */
  Pass: {
    display: "Pass",
    code: "pass",
    system: "http://hl7.org/fhir/report-action-result-codes",
  },
  /**
   * skip: The action was skipped.
   */
  Skip: {
    display: "Skip",
    code: "skip",
    system: "http://hl7.org/fhir/report-action-result-codes",
  },
  /**
   * warning: The action passed but with warnings.
   */
  Warning: {
    display: "Warning",
    code: "warning",
    system: "http://hl7.org/fhir/report-action-result-codes",
  },
} as const;
