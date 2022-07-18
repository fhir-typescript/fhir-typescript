// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-version-rules|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export type ReferenceVersionRulesCodingType = {
  /**
   * either: The reference may be either version independent or version specific.
   */
  EitherSpecificOrIndependent: CodingArgs;
  /**
   * independent: The reference must be version independent.
   */
  VersionIndependent: CodingArgs;
  /**
   * specific: The reference must be version specific.
   */
  VersionSpecific: CodingArgs;
}

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export const ReferenceVersionRulesCodings:ReferenceVersionRulesCodingType = {
  /**
   * either: The reference may be either version independent or version specific.
   */
  EitherSpecificOrIndependent: {
    display: "Either Specific or independent",
    code: "either",
    system: "http://hl7.org/fhir/reference-version-rules",
  },
  /**
   * independent: The reference must be version independent.
   */
  VersionIndependent: {
    display: "Version independent",
    code: "independent",
    system: "http://hl7.org/fhir/reference-version-rules",
  },
  /**
   * specific: The reference must be version specific.
   */
  VersionSpecific: {
    display: "Version Specific",
    code: "specific",
    system: "http://hl7.org/fhir/reference-version-rules",
  },
} as const;