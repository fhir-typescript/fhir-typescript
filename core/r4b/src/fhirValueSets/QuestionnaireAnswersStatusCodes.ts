// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-answers-status|4.3.0

/**
 * Lifecycle status of the questionnaire response.
 */
export const QuestionnaireAnswersStatusCodes = {
  /**
   * amended: This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
   */
  Amended: "amended",
  /**
   * completed: This QuestionnaireResponse has been filled out with answers and the current content is regarded as definitive.
   */
  Completed: "completed",
  /**
   * entered-in-error: This QuestionnaireResponse was entered in error and voided.
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: This QuestionnaireResponse has been partially filled out with answers but changes or additions are still expected to be made to it.
   */
  InProgress: "in-progress",
  /**
   * stopped: This QuestionnaireResponse has been partially filled out with answers but has been abandoned. It is unknown whether changes or additions are expected to be made to it.
   */
  Stopped: "stopped",
} as const;

/**
 * Lifecycle status of the questionnaire response.
 */
export type QuestionnaireAnswersStatusCodeType = typeof QuestionnaireAnswersStatusCodes[keyof typeof QuestionnaireAnswersStatusCodes];
