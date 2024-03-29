// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-type|4.3.0

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
   * deductible: Cost to be incurred before benefits are applied
   */
  Deductible: CodingArgs;
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
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * copay: Copayment per service
   */
  CopaymentPerService: {
    display: "Copayment per service",
    code: "copay",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * copay-maximum: Copayment maximum per service
   */
  CopaymentMaximumPerService: {
    display: "Copayment maximum per service",
    code: "copay-maximum",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * copay-percent: Copayment percentage per service
   */
  CopaymentPercentPerService: {
    display: "Copayment Percent per service",
    code: "copay-percent",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * deductible: Cost to be incurred before benefits are applied
   */
  Deductible: {
    display: "Deductible",
    code: "deductible",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * medical-primarycare: Medical Primary Health Coverage
   */
  MedicalPrimaryHealthCoverage: {
    display: "Medical Primary Health Coverage",
    code: "medical-primarycare",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * pharmacy-dispense: Pharmacy Dispense Coverage
   */
  PharmacyDispenseCoverage: {
    display: "Pharmacy Dispense Coverage",
    code: "pharmacy-dispense",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * room: Type of room
   */
  Room: {
    display: "Room",
    code: "room",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * vision-contacts: Contact Lenses
   */
  VisionContactsCoverage: {
    display: "Vision Contacts Coverage",
    code: "vision-contacts",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * vision-exam: Vision Exam
   */
  VisionExam: {
    display: "Vision Exam",
    code: "vision-exam",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * vision-glasses: Frames and lenses
   */
  VisionGlasses: {
    display: "Vision Glasses",
    code: "vision-glasses",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
  /**
   * visit: Service visit
   */
  Visit: {
    display: "Visit",
    code: "visit",
    system: "http://terminology.hl7.org/CodeSystem/benefit-type",
  },
} as const;
