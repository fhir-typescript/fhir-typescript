// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-category|3.0.2

/**
 * This value set includes a smattering of Benefit Category codes.
 */
export const BenefitCategoryCodes = {
  /**
   * medical: Medical Health Coverage
   */
  MedicalHealthCoverage: "medical",
  /**
   * oral: Dental and Oral Health Coverage
   */
  DentalAndOralHealthCoverage: "oral",
  /**
   * pharmacy: Pharmacy Coverage
   */
  PharmacyCoverage: "pharmacy",
  /**
   * vision: Vision Health Coverage
   */
  VisionHealthCoverage: "vision",
} as const;

/**
 * This value set includes a smattering of Benefit Category codes.
 */
export type BenefitCategoryCodeType = typeof BenefitCategoryCodes[keyof typeof BenefitCategoryCodes];
