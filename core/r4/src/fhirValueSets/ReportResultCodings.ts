// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-result-codes|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The reported execution result.
 */
export type ReportResultCodingType = {
  /**
   * fail: One or more test operations failed one or more asserts.
   */
  Fail: CodingArgs;
  /**
   * pass: All test operations successfully passed all asserts.
   */
  Pass: CodingArgs;
  /**
   * pending: One or more test operations is pending execution completion.
   */
  Pending: CodingArgs;
}

/**
 * The reported execution result.
 */
export const ReportResultCodings:ReportResultCodingType = {
  /**
   * fail: One or more test operations failed one or more asserts.
   */
  Fail: {
    display: "Fail",
    code: "fail",
    system: "http://hl7.org/fhir/report-result-codes",
  },
  /**
   * pass: All test operations successfully passed all asserts.
   */
  Pass: {
    display: "Pass",
    code: "pass",
    system: "http://hl7.org/fhir/report-result-codes",
  },
  /**
   * pending: One or more test operations is pending execution completion.
   */
  Pending: {
    display: "Pending",
    code: "pending",
    system: "http://hl7.org/fhir/report-result-codes",
  },
} as const;