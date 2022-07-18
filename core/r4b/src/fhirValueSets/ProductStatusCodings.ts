// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/product-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Biologically Derived Product Status.
 */
export type ProductStatusCodingType = {
  /**
   * available: Product is currently available for use.
   */
  Available: CodingArgs;
  /**
   * unavailable: Product is not currently available for use.
   */
  Unavailable: CodingArgs;
}

/**
 * Biologically Derived Product Status.
 */
export const ProductStatusCodings:ProductStatusCodingType = {
  /**
   * available: Product is currently available for use.
   */
  Available: {
    display: "Available",
    code: "available",
    system: "http://hl7.org/fhir/product-status",
  },
  /**
   * unavailable: Product is not currently available for use.
   */
  Unavailable: {
    display: "Unavailable",
    code: "unavailable",
    system: "http://hl7.org/fhir/product-status",
  },
} as const;