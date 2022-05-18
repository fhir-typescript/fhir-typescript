// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-status-codes|4.0.1

/**
 * The current status of the test report.
 */
export const ReportStatusCodesCodes = {
  /**
   * completed: All test operations have completed.
   */
  Completed: "completed",
  /**
   * entered-in-error: This test report was entered or created in error.
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: A test operations is currently executing.
   */
  InProgress: "in-progress",
  /**
   * stopped: The test script execution was manually stopped.
   */
  Stopped: "stopped",
  /**
   * waiting: A test operation is waiting for an external client request.
   */
  Waiting: "waiting",
} as const;

/**
 * The current status of the test report.
 */
export type ReportStatusCodesCodeType = typeof ReportStatusCodesCodes[keyof typeof ReportStatusCodesCodes];
