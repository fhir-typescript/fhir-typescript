// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-category|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Example codes for grouping goals for filtering or presentation.
 */
export type GoalCategoryCodingType = {
  /**
   * behavioral: Goals related to the manner in which the subject acts.
   */
  Behavioral: CodingArgs;
  /**
   * dietary: Goals related to the consumption of food and/or beverages.
   */
  Dietary: CodingArgs;
  /**
   * nursing: Goals related to the practice of nursing or established by nurses.
   */
  Nursing: CodingArgs;
  /**
   * physiotherapy: Goals related to the mobility and motor capability of the subject.
   */
  Physiotherapy: CodingArgs;
  /**
   * safety: Goals related to the personal protection of the subject.
   */
  Safety: CodingArgs;
}

/**
 * Example codes for grouping goals for filtering or presentation.
 */
export const GoalCategoryCodings:GoalCategoryCodingType = {
  /**
   * behavioral: Goals related to the manner in which the subject acts.
   */
  Behavioral: {
    display: "Behavioral",
    code: "behavioral",
    system: "http://hl7.org/fhir/goal-category",
  },
  /**
   * dietary: Goals related to the consumption of food and/or beverages.
   */
  Dietary: {
    display: "Dietary",
    code: "dietary",
    system: "http://hl7.org/fhir/goal-category",
  },
  /**
   * nursing: Goals related to the practice of nursing or established by nurses.
   */
  Nursing: {
    display: "Nursing",
    code: "nursing",
    system: "http://hl7.org/fhir/goal-category",
  },
  /**
   * physiotherapy: Goals related to the mobility and motor capability of the subject.
   */
  Physiotherapy: {
    display: "Physiotherapy",
    code: "physiotherapy",
    system: "http://hl7.org/fhir/goal-category",
  },
  /**
   * safety: Goals related to the personal protection of the subject.
   */
  Safety: {
    display: "Safety",
    code: "safety",
    system: "http://hl7.org/fhir/goal-category",
  },
} as const;