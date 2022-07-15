// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-recommendation-reason|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 */
export type ImmunizationRecommendationReasonCodingType = {
  /**
   * Code: 77176002
   */
  VAL77176002: CodingArgs;
  /**
   * Code: 77386006
   */
  VAL77386006: CodingArgs;
}

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 */
export const ImmunizationRecommendationReasonCodings:ImmunizationRecommendationReasonCodingType = {
  /**
   * Code: 77176002
   */
  VAL77176002: {
    code: "77176002",
    system: "http://snomed.info/sct",
  },
  /**
   * Code: 77386006
   */
  VAL77386006: {
    code: "77386006",
    system: "http://snomed.info/sct",
  },
} as const;
