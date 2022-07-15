// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identity-assuranceLevel|4.3.0

/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export const IdentityAssuranceLevelCodes = {
  /**
   * level1: Little or no confidence in the asserted identity's accuracy.
   */
  Level1: "level1",
  /**
   * level2: Some confidence in the asserted identity's accuracy.
   */
  Level2: "level2",
  /**
   * level3: High confidence in the asserted identity's accuracy.
   */
  Level3: "level3",
  /**
   * level4: Very high confidence in the asserted identity's accuracy.
   */
  Level4: "level4",
} as const;

/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export type IdentityAssuranceLevelCodeType = typeof IdentityAssuranceLevelCodes[keyof typeof IdentityAssuranceLevelCodes];
