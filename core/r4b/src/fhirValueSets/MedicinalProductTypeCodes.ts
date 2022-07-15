// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicinal-product-type|4.3.0

/**
 * Overall defining type of this Medicinal Product.
 */
export const MedicinalProductTypeCodes = {
  /**
   * InvestigationalProduct: An investigational medicinal product.
   */
  InvestigationalMedicinalProduct: "InvestigationalProduct",
  /**
   * MedicinalProduct: A standard medicinal product.
   */
  MedicinalProduct: "MedicinalProduct",
} as const;

/**
 * Overall defining type of this Medicinal Product.
 */
export type MedicinalProductTypeCodeType = typeof MedicinalProductTypeCodes[keyof typeof MedicinalProductTypeCodes];
