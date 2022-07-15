// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-report-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of the diagnostic report as a whole.
 */
export type DiagnosticReportStatusCodingType = {
  /**
   * appended: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed.
   */
  Appended: CodingArgs;
  /**
   * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
   */
  Cancelled: CodingArgs;
  /**
   * corrected: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed
   */
  Corrected: CodingArgs;
  /**
   * entered-in-error: The report has been withdrawn following a previous final release.
   */
  EnteredInError: CodingArgs;
  /**
   * final: The report is complete and verified by an authorized person.
   */
  Final: CodingArgs;
  /**
   * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
   */
  Partial: CodingArgs;
  /**
   * registered: The existence of the report is registered, but there is nothing yet available.
   */
  Registered: CodingArgs;
}

/**
 * The status of the diagnostic report as a whole.
 */
export const DiagnosticReportStatusCodings:DiagnosticReportStatusCodingType = {
  /**
   * appended: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed.
   */
  Appended: {
    display: "Appended",
    code: "appended",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
  /**
   * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
  /**
   * corrected: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed
   */
  Corrected: {
    display: "Corrected",
    code: "corrected",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
  /**
   * entered-in-error: The report has been withdrawn following a previous final release.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
  /**
   * final: The report is complete and verified by an authorized person.
   */
  Final: {
    display: "Final",
    code: "final",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
  /**
   * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
   */
  Partial: {
    display: "Partial",
    code: "partial",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
  /**
   * registered: The existence of the report is registered, but there is nothing yet available.
   */
  Registered: {
    display: "Registered",
    code: "registered",
    system: "http://hl7.org/fhir/diagnostic-report-status",
  },
} as const;
