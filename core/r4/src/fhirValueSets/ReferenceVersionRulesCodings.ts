// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-version-rules|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export const ReferenceVersionRulesCodings = {
  /**
   * either: The reference may be either version independent or version specific.
   */
  EitherSpecificOrIndependent: new Coding({
    display: "Either Specific or independent",
    code: "either",
    system: "http://hl7.org/fhir/reference-version-rules",
  }),
  /**
   * independent: The reference must be version independent.
   */
  VersionIndependent: new Coding({
    display: "Version independent",
    code: "independent",
    system: "http://hl7.org/fhir/reference-version-rules",
  }),
  /**
   * specific: The reference must be version specific.
   */
  VersionSpecific: new Coding({
    display: "Version Specific",
    code: "specific",
    system: "http://hl7.org/fhir/reference-version-rules",
  }),
} as const;

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export type ReferenceVersionRulesCodingType = typeof ReferenceVersionRulesCodings;
