// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/quantity-comparator|1.0.2

/**
 * How the Quantity should be understood and represented.
 */
export const QuantityComparatorCodes = {
  /**
   * &lt;: The actual value is less than the given value.
   */
  LessThan: "<",
  /**
   * &lt;=: The actual value is less than or equal to the given value.
   */
  LessOrEqualTo: "<=",
  /**
   * &gt;: The actual value is greater than the given value.
   */
  GreaterThan: ">",
  /**
   * &gt;=: The actual value is greater than or equal to the given value.
   */
  GreaterOrEqualTo: ">=",
} as const;

/**
 * How the Quantity should be understood and represented.
 */
export type QuantityComparatorCodeType = typeof QuantityComparatorCodes[keyof typeof QuantityComparatorCodes];