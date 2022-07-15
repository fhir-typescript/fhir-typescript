// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-source-material-part|4.3.0

/**
 * An anatomical origin of the source material within an organism.
 */
export const SubstanceSourceMaterialPartCodes = {
  /**
   * Code: Animal
   */
  Animal: "Animal",
  /**
   * Code: Mineral
   */
  Mineral: "Mineral",
  /**
   * Code: Plant
   */
  Plant: "Plant",
} as const;

/**
 * An anatomical origin of the source material within an organism.
 */
export type SubstanceSourceMaterialPartCodeType = typeof SubstanceSourceMaterialPartCodes[keyof typeof SubstanceSourceMaterialPartCodes];
