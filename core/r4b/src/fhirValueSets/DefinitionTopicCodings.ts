// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/definition-topic|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export type DefinitionTopicCodingType = {
  /**
   * assessment: The definition is related to assessment of the patient.
   */
  Assessment: CodingArgs;
  /**
   * education: The definition is related to education of the patient.
   */
  Education: CodingArgs;
  /**
   * treatment: The definition is related to treatment of the patient.
   */
  Treatment: CodingArgs;
}

/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export const DefinitionTopicCodings:DefinitionTopicCodingType = {
  /**
   * assessment: The definition is related to assessment of the patient.
   */
  Assessment: {
    display: "Assessment",
    code: "assessment",
    system: "http://terminology.hl7.org/CodeSystem/definition-topic",
  },
  /**
   * education: The definition is related to education of the patient.
   */
  Education: {
    display: "Education",
    code: "education",
    system: "http://terminology.hl7.org/CodeSystem/definition-topic",
  },
  /**
   * treatment: The definition is related to treatment of the patient.
   */
  Treatment: {
    display: "Treatment",
    code: "treatment",
    system: "http://terminology.hl7.org/CodeSystem/definition-topic",
  },
} as const;
