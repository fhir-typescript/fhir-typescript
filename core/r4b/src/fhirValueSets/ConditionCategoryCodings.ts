// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-category|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Preferred value set for Condition Categories.
 */
export type ConditionCategoryCodingType = {
  /**
   * encounter-diagnosis: A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
   */
  EncounterDiagnosis: CodingArgs;
  /**
   * problem-list-item: An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
   */
  ProblemListItem: CodingArgs;
}

/**
 * Preferred value set for Condition Categories.
 */
export const ConditionCategoryCodings:ConditionCategoryCodingType = {
  /**
   * encounter-diagnosis: A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
   */
  EncounterDiagnosis: {
    display: "Encounter Diagnosis",
    code: "encounter-diagnosis",
    system: "http://terminology.hl7.org/CodeSystem/condition-category",
  },
  /**
   * problem-list-item: An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
   */
  ProblemListItem: {
    display: "Problem List Item",
    code: "problem-list-item",
    system: "http://terminology.hl7.org/CodeSystem/condition-category",
  },
} as const;