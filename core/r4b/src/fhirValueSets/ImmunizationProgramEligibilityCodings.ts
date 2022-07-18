// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-program-eligibility|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
export type ImmunizationProgramEligibilityCodingType = {
  /**
   * ineligible: The patient is not eligible for the funding program.
   */
  NotEligible: CodingArgs;
  /**
   * uninsured: The patient is eligible for the funding program because they are uninsured.
   */
  Uninsured: CodingArgs;
}

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
export const ImmunizationProgramEligibilityCodings:ImmunizationProgramEligibilityCodingType = {
  /**
   * ineligible: The patient is not eligible for the funding program.
   */
  NotEligible: {
    display: "Not Eligible",
    code: "ineligible",
    system: "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
  },
  /**
   * uninsured: The patient is eligible for the funding program because they are uninsured.
   */
  Uninsured: {
    display: "Uninsured",
    code: "uninsured",
    system: "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
  },
} as const;