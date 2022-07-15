// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/undesirable-effect-frequency|4.3.0

/**
 * A categorisation for a frequency of occurence of an undesirable effect.
 */
export const UndesirableEffectFrequencyCodes = {
  /**
   * Code: Common
   */
  Common: "Common",
  /**
   * Code: Rare
   */
  Rare: "Rare",
  /**
   * Code: Uncommon
   */
  Uncommon: "Uncommon",
} as const;

/**
 * A categorisation for a frequency of occurence of an undesirable effect.
 */
export type UndesirableEffectFrequencyCodeType = typeof UndesirableEffectFrequencyCodes[keyof typeof UndesirableEffectFrequencyCodes];
