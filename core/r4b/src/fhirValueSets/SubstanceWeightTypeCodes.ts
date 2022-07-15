// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-weight-type|4.3.0

/**
 * The type of substance weight measurement.
 */
export const SubstanceWeightTypeCodes = {
  /**
   * Code: Average
   */
  NumberAverage: "Average",
  /**
   * Code: Exact
   */
  Exact: "Exact",
  /**
   * Code: WeightAverage
   */
  WeightAverage: "WeightAverage",
} as const;

/**
 * The type of substance weight measurement.
 */
export type SubstanceWeightTypeCodeType = typeof SubstanceWeightTypeCodes[keyof typeof SubstanceWeightTypeCodes];
