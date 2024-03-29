// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-status|3.0.2

/**
 * Codes that convey the current status of the research study
 */
export const ResearchStudyStatusCodes = {
  /**
   * completed: The information sought by the study has been gathered and compiled and no further work is being performed
   */
  Completed: "completed",
  /**
   * draft: The study is undergoing design but the process of selecting study subjects and capturing data has not yet begun.
   */
  Draft: "draft",
  /**
   * entered-in-error: This study never actually existed.  The record is retained for tracking purposes in the event decisions may have been made based on this erroneous information.
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: The study is currently being executed
   */
  InProgress: "in-progress",
  /**
   * stopped: The study was terminated prior to the final determination of results
   */
  Stopped: "stopped",
  /**
   * suspended: Execution of the study has been temporarily paused
   */
  Suspended: "suspended",
} as const;

/**
 * Codes that convey the current status of the research study
 */
export type ResearchStudyStatusCodeType = typeof ResearchStudyStatusCodes[keyof typeof ResearchStudyStatusCodes];
