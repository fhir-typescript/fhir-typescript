// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-status-codes|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The current status of the test report.
 */
export type ReportStatusCodingType = {
  /**
   * completed: All test operations have completed
   */
  Completed: CodingArgs;
  /**
   * entered-in-error: This test report was entered or created in error
   */
  EnteredInError: CodingArgs;
  /**
   * in-progress: A test operations is currently executing
   */
  InProgress: CodingArgs;
  /**
   * stopped: The test script execution was manually stopped
   */
  Stopped: CodingArgs;
  /**
   * waiting: A test operation is waiting for an external client request
   */
  Waiting: CodingArgs;
}

/**
 * The current status of the test report.
 */
export const ReportStatusCodings:ReportStatusCodingType = {
  /**
   * completed: All test operations have completed
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/report-status-codes",
  },
  /**
   * entered-in-error: This test report was entered or created in error
   */
  EnteredInError: {
    display: "Entered In Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/report-status-codes",
  },
  /**
   * in-progress: A test operations is currently executing
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/report-status-codes",
  },
  /**
   * stopped: The test script execution was manually stopped
   */
  Stopped: {
    display: "Stopped",
    code: "stopped",
    system: "http://hl7.org/fhir/report-status-codes",
  },
  /**
   * waiting: A test operation is waiting for an external client request
   */
  Waiting: {
    display: "Waiting",
    code: "waiting",
    system: "http://hl7.org/fhir/report-status-codes",
  },
} as const;
