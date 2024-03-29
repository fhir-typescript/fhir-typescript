// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-report-status|1.0.2

/**
 * The status of the diagnostic report as a whole.
 */
export const DiagnosticReportStatusCodes = {
  /**
   * appended: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed.
   */
  Appended: "appended",
  /**
   * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
   */
  Cancelled: "cancelled",
  /**
   * corrected: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed
   */
  Corrected: "corrected",
  /**
   * entered-in-error: The report has been withdrawn following a previous final release.
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
   * registered: The existence of the report is registered, but there is nothing yet available.
   */
  Registered: "registered",
} as const;

/**
 * The status of the diagnostic report as a whole.
 */
export type DiagnosticReportStatusCodeType = typeof DiagnosticReportStatusCodes[keyof typeof DiagnosticReportStatusCodes];
