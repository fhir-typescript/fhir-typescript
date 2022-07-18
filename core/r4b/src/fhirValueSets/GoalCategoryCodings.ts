// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-category|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Example codes for grouping goals to use for filtering or presentation.
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
   * physiotherapy: Goals related to the mobility and/or motor capability of the subject.
   */
  Physiotherapy: CodingArgs;
  /**
   * safety: Goals related to the personal protection of the subject.
   */
  Safety: CodingArgs;
}

/**
 * Example codes for grouping goals to use for filtering or presentation.
 */
export const GoalCategoryCodings:GoalCategoryCodingType = {
  /**
   * behavioral: Goals related to the manner in which the subject acts.
   */
  Behavioral: {
    display: "Behavioral",
    code: "behavioral",
    system: "http://terminology.hl7.org/CodeSystem/goal-category",
  },
  /**
   * dietary: Goals related to the consumption of food and/or beverages.
   */
  Dietary: {
    display: "Dietary",
    code: "dietary",
    system: "http://terminology.hl7.org/CodeSystem/goal-category",
  },
  /**
   * nursing: Goals related to the practice of nursing or established by nurses.
   */
  Nursing: {
    display: "Nursing",
    code: "nursing",
    system: "http://terminology.hl7.org/CodeSystem/goal-category",
  },
  /**
   * physiotherapy: Goals related to the mobility and/or motor capability of the subject.
   */
  Physiotherapy: {
    display: "Physiotherapy",
    code: "physiotherapy",
    system: "http://terminology.hl7.org/CodeSystem/goal-category",
  },
  /**
   * safety: Goals related to the personal protection of the subject.
   */
  Safety: {
    display: "Safety",
    code: "safety",
    system: "http://terminology.hl7.org/CodeSystem/goal-category",
  },
} as const;