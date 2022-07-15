// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-objective-type|4.3.0

/**
 * Codes for the kind of study objective.
 */
export const ResearchStudyObjectiveTypeCodes = {
  /**
   * exploratory: Exploratory questions to be answered in the study.
   */
  Exploratory: "exploratory",
  /**
   * primary: The main question to be answered, and the one that drives any statistical planning for the study—e.g., calculation of the sample size to provide the appropriate power for statistical testing.
   */
  Primary: "primary",
  /**
   * secondary: Question to be answered in the study that is of lesser importance than the primary objective.
   */
  Secondary: "secondary",
} as const;

/**
 * Codes for the kind of study objective.
 */
export type ResearchStudyObjectiveTypeCodeType = typeof ResearchStudyObjectiveTypeCodes[keyof typeof ResearchStudyObjectiveTypeCodes];
