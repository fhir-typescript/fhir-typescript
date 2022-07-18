// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-status|1.0.2

/**
 * Lifecycle status of the questionnaire.
 */
export const QuestionnaireStatusCodes = {
  /**
   * draft: This Questionnaire is not ready for official use.
   */
  Draft: "draft",
  /**
   * published: This Questionnaire is ready for use.
   */
  Published: "published",
  /**
   * retired: This Questionnaire should no longer be used to gather data.
   */
  Retired: "retired",
} as const;

/**
 * Lifecycle status of the questionnaire.
 */
export type QuestionnaireStatusCodeType = typeof QuestionnaireStatusCodes[keyof typeof QuestionnaireStatusCodes];