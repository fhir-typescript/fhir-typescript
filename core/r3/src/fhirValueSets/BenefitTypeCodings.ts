// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Benefit type codes.
 */
export type BenefitTypeCodingType = {
  /**
   * benefit: Maximum benefit allowable.
   */
  Benefit: CodingArgs;
  /**
   * copay: Copayment per service
   */
  CopaymentPerService: CodingArgs;
  /**
   * copay-maximum: Copayment maximum per service
   */
  CopaymentMaximumPerService: CodingArgs;
  /**
   * copay-percent: Copayment percentage per service
   */
  CopaymentPercentPerService: CodingArgs;
  /**
   * deductable: Cost to be incurred before benefits are applied
   */
  Deductable: CodingArgs;
  /**
   * medical-primarycare: Medical Primary Health Coverage
   */
  MedicalPrimaryHealthCoverage: CodingArgs;
  /**
   * pharmacy-dispense: Pharmacy Dispense Coverage
   */
  PharmacyDispenseCoverage: CodingArgs;
  /**
   * room: Type of room
   */
  Room: CodingArgs;
  /**
   * vision-contacts: Contact Lenses
   */
  VisionContactsCoverage: CodingArgs;
  /**
   * vision-exam: Vision Exam
   */
  VisionExam: CodingArgs;
  /**
   * vision-glasses: Frames and lenses
   */
  VisionGlasses: CodingArgs;
  /**
   * visit: Service visit
   */
  Visit: CodingArgs;
}

/**
 * This value set includes a smattering of Benefit type codes.
 */
export const BenefitTypeCodings:BenefitTypeCodingType = {
  /**
   * benefit: Maximum benefit allowable.
   */
  Benefit: {
    display: "Benefit",
    code: "benefit",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * copay: Copayment per service
   */
  CopaymentPerService: {
    display: "Copayment per service",
    code: "copay",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * copay-maximum: Copayment maximum per service
   */
  CopaymentMaximumPerService: {
    display: "Copayment maximum per service",
    code: "copay-maximum",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * copay-percent: Copayment percentage per service
   */
  CopaymentPercentPerService: {
    display: "Copayment Percent per service",
    code: "copay-percent",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * deductable: Cost to be incurred before benefits are applied
   */
  Deductable: {
    display: "Deductable",
    code: "deductable",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * medical-primarycare: Medical Primary Health Coverage
   */
  MedicalPrimaryHealthCoverage: {
    display: "Medical Primary Health Coverage",
    code: "medical-primarycare",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * pharmacy-dispense: Pharmacy Dispense Coverage
   */
  PharmacyDispenseCoverage: {
    display: "Pharmacy Dispense Coverage",
    code: "pharmacy-dispense",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * room: Type of room
   */
  Room: {
    display: "Room",
    code: "room",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * vision-contacts: Contact Lenses
   */
  VisionContactsCoverage: {
    display: "Vision Contacts Coverage",
    code: "vision-contacts",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * vision-exam: Vision Exam
   */
  VisionExam: {
    display: "Vision Exam",
    code: "vision-exam",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * vision-glasses: Frames and lenses
   */
  VisionGlasses: {
    display: "Vision Glasses",
    code: "vision-glasses",
    system: "http://hl7.org/fhir/benefit-type",
  },
  /**
   * visit: Service visit
   */
  Visit: {
    display: "Visit",
    code: "visit",
    system: "http://hl7.org/fhir/benefit-type",
  },
} as const;
