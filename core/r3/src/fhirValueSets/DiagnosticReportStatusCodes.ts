// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-report-status|3.0.2

/**
 * The status of the diagnostic report as a whole.
 */
export const DiagnosticReportStatusCodes = {
  /**
   * amended: Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
   */
  Amended: "amended",
  /**
   * appended: Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
   */
  Appended: "appended",
  /**
   * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
   */
  Cancelled: "cancelled",
  /**
   * corrected: Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
   */
  Corrected: "corrected",
  /**
   * entered-in-error: The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
   */
  EnteredInError: "entered-in-error",
  /**
   * final: The report is complete and verified by an authorized person.
   */
  Final: "final",
  /**
   * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
   */
  Partial: "partial",
  /**
   * preliminary: Verified early results are available, but not all  results are final.
   */
  Preliminary: "preliminary",
  /**
   * registered: The existence of the report is registered, but there is nothing yet available.
   */
  Registered: "registered",
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: "unknown",
} as const;

/**
 * The status of the diagnostic report as a whole.
 */
export type DiagnosticReportStatusCodeType = typeof DiagnosticReportStatusCodes[keyof typeof DiagnosticReportStatusCodes];
