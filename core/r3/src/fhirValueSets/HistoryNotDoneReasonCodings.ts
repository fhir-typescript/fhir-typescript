// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/history-not-done-reason|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes describing the reason why a family member history was not done.
 */
export type HistoryNotDoneReasonCodingType = {
  /**
   * deferred: Patient does not have the information now, but can provide the information at a later date.
   */
  Deferred: CodingArgs;
  /**
   * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
   */
  SubjectUnknown: CodingArgs;
  /**
   * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient
   */
  UnableToObtain: CodingArgs;
  /**
   * withheld: The patient withheld or refused to share the information.
   */
  InformationWithheld: CodingArgs;
}

/**
 * Codes describing the reason why a family member history was not done.
 */
export const HistoryNotDoneReasonCodings:HistoryNotDoneReasonCodingType = {
  /**
   * deferred: Patient does not have the information now, but can provide the information at a later date.
   */
  Deferred: {
    display: "Deferred",
    code: "deferred",
    system: "http://hl7.org/fhir/history-not-done-reason",
  },
  /**
   * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
   */
  SubjectUnknown: {
    display: "Subject Unknown",
    code: "subject-unknown",
    system: "http://hl7.org/fhir/history-not-done-reason",
  },
  /**
   * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient
   */
  UnableToObtain: {
    display: "Unable To Obtain",
    code: "unable-to-obtain",
    system: "http://hl7.org/fhir/history-not-done-reason",
  },
  /**
   * withheld: The patient withheld or refused to share the information.
   */
  InformationWithheld: {
    display: "Information Withheld",
    code: "withheld",
    system: "http://hl7.org/fhir/history-not-done-reason",
  },
} as const;
