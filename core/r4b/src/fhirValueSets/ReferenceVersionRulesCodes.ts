// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-version-rules|4.3.0

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export const ReferenceVersionRulesCodes = {
  /**
   * either: The reference may be either version independent or version specific.
   */
  EitherSpecificOrIndependent: "either",
  /**
   * independent: The reference must be version independent.
   */
  VersionIndependent: "independent",
  /**
   * specific: The reference must be version specific.
   */
  VersionSpecific: "specific",
} as const;

/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export type ReferenceVersionRulesCodeType = typeof ReferenceVersionRulesCodes[keyof typeof ReferenceVersionRulesCodes];