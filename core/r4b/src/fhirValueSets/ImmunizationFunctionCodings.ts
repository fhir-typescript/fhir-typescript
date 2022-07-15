// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-function|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the function a practitioner or organization may play in the immunization event. This value set is provided as a suggestive example.
 */
export type ImmunizationFunctionCodingType = {
  /**
   * Code: AP
   */
  AP: CodingArgs;
  /**
   * Code: OP
   */
  OP: CodingArgs;
}

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the function a practitioner or organization may play in the immunization event. This value set is provided as a suggestive example.
 */
export const ImmunizationFunctionCodings:ImmunizationFunctionCodingType = {
  /**
   * Code: AP
   */
  AP: {
    code: "AP",
    system: "http://terminology.hl7.org/CodeSystem/v2-0443",
  },
  /**
   * Code: OP
   */
  OP: {
    code: "OP",
    system: "http://terminology.hl7.org/CodeSystem/v2-0443",
  },
} as const;
