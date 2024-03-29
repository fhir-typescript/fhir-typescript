// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-amount-type|4.3.0

/**
 * The relationship between two substance types.
 */
export const SubstanceAmountTypeCodes = {
  /**
   * Code: Approximately
   */
  Approximately: "Approximately",
  /**
   * Code: Average
   */
  Average: "Average",
  /**
   * Code: LessThan
   */
  LessThan: "LessThan",
  /**
   * Code: MoreThan
   */
  MoreThan: "MoreThan",
} as const;

/**
 * The relationship between two substance types.
 */
export type SubstanceAmountTypeCodeType = typeof SubstanceAmountTypeCodes[keyof typeof SubstanceAmountTypeCodes];
