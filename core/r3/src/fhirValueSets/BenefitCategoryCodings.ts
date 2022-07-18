// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-category|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Benefit Category codes.
 */
export type BenefitCategoryCodingType = {
  /**
   * medical: Medical Health Coverage
   */
  MedicalHealthCoverage: CodingArgs;
  /**
   * oral: Dental and Oral Health Coverage
   */
  DentalAndOralHealthCoverage: CodingArgs;
  /**
   * pharmacy: Pharmacy Coverage
   */
  PharmacyCoverage: CodingArgs;
  /**
   * vision: Vision Health Coverage
   */
  VisionHealthCoverage: CodingArgs;
}

/**
 * This value set includes a smattering of Benefit Category codes.
 */
export const BenefitCategoryCodings:BenefitCategoryCodingType = {
  /**
   * medical: Medical Health Coverage
   */
  MedicalHealthCoverage: {
    display: "Medical Health Coverage",
    code: "medical",
    system: "http://hl7.org/fhir/benefit-category",
  },
  /**
   * oral: Dental and Oral Health Coverage
   */
  DentalAndOralHealthCoverage: {
    display: "Dental and Oral Health Coverage",
    code: "oral",
    system: "http://hl7.org/fhir/benefit-category",
  },
  /**
   * pharmacy: Pharmacy Coverage
   */
  PharmacyCoverage: {
    display: "Pharmacy Coverage",
    code: "pharmacy",
    system: "http://hl7.org/fhir/benefit-category",
  },
  /**
   * vision: Vision Health Coverage
   */
  VisionHealthCoverage: {
    display: "Vision Health Coverage",
    code: "vision",
    system: "http://hl7.org/fhir/benefit-category",
  },
} as const;