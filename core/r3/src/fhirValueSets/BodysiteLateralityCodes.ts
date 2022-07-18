// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/bodysite-laterality|3.0.2

/**
 * Laterality: SNOMED-CT concepts for 'left', 'right', and 'bilateral'
 */
export const BodysiteLateralityCodes = {
  /**
   * Code: 419161000
   */
  UnilateralLeft: "419161000",
  /**
   * Code: 419465000
   */
  UnilateralRight: "419465000",
  /**
   * Code: 51440002
   */
  Bilateral: "51440002",
} as const;

/**
 * Laterality: SNOMED-CT concepts for 'left', 'right', and 'bilateral'
 */
export type BodysiteLateralityCodeType = typeof BodysiteLateralityCodes[keyof typeof BodysiteLateralityCodes];