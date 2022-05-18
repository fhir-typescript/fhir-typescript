// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-reason|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was administered. This value set is provided as a suggestive example.
 */
export const ImmunizationReasonCodings = {
  /**
   * Code: 281657000
   */
  VAL281657000: new Coding({
    code: "281657000",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 429060002
   */
  VAL429060002: new Coding({
    code: "429060002",
    system: "http://snomed.info/sct",
  }),
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was administered. This value set is provided as a suggestive example.
 */
export type ImmunizationReasonCodingType = typeof ImmunizationReasonCodings;