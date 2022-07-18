// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/history-not-done-reason|3.0.2

/**
 * Codes describing the reason why a family member history was not done.
 */
export const HistoryNotDoneReasonCodes = {
  /**
   * deferred: Patient does not have the information now, but can provide the information at a later date.
   */
  Deferred: "deferred",
  /**
   * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
   */
  SubjectUnknown: "subject-unknown",
  /**
   * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient
   */
  UnableToObtain: "unable-to-obtain",
  /**
   * withheld: The patient withheld or refused to share the information.
   */
  InformationWithheld: "withheld",
} as const;

/**
 * Codes describing the reason why a family member history was not done.
 */
export type HistoryNotDoneReasonCodeType = typeof HistoryNotDoneReasonCodes[keyof typeof HistoryNotDoneReasonCodes];