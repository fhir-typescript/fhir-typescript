// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/product-status|4.3.0

/**
 * Biologically Derived Product Status.
 */
export const ProductStatusCodes = {
  /**
   * available: Product is currently available for use.
   */
  Available: "available",
  /**
   * unavailable: Product is not currently available for use.
   */
  Unavailable: "unavailable",
} as const;

/**
 * Biologically Derived Product Status.
 */
export type ProductStatusCodeType = typeof ProductStatusCodes[keyof typeof ProductStatusCodes];
