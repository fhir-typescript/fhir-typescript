// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicinal-product-confidentiality|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Confidentiality rating, e.g. commercial sensitivity for a Medicinal Product.
 */
export type MedicinalProductConfidentialityCodingType = {
  /**
   * CommerciallySensitive: Commercially Sensitive
   */
  CommerciallySensitive: CodingArgs;
  /**
   * NotCommerciallySensitive: Not Commercially Sensitive
   */
  NotCommerciallySensitive: CodingArgs;
}

/**
 * Confidentiality rating, e.g. commercial sensitivity for a Medicinal Product.
 */
export const MedicinalProductConfidentialityCodings:MedicinalProductConfidentialityCodingType = {
  /**
   * CommerciallySensitive: Commercially Sensitive
   */
  CommerciallySensitive: {
    display: "Commercially Sensitive",
    code: "CommerciallySensitive",
    system: "http://hl7.org/fhir/medicinal-product-confidentiality",
  },
  /**
   * NotCommerciallySensitive: Not Commercially Sensitive
   */
  NotCommerciallySensitive: {
    display: "Not Commercially Sensitive",
    code: "NotCommerciallySensitive",
    system: "http://hl7.org/fhir/medicinal-product-confidentiality",
  },
} as const;
