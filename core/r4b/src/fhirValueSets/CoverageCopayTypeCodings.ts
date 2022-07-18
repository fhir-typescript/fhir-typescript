// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/coverage-copay-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export type CoverageCopayTypeCodingType = {
  /**
   * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
   */
  CopayAmount: CodingArgs;
  /**
   * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
   */
  CopayPercentage: CodingArgs;
  /**
   * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
   */
  Deductible: CodingArgs;
  /**
   * emergency: An episode in an emergency department.
   */
  Emergency: CodingArgs;
  /**
   * gpvisit: An office visit for a general practitioner of a discipline.
   */
  GPOfficeVisit: CodingArgs;
  /**
   * inpthosp: An episode of an Inpatient hospital stay.
   */
  InpatientHospital: CodingArgs;
  /**
   * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
   */
  MaximumOutOfPocket: CodingArgs;
  /**
   * spvisit: An office visit for a specialist practitioner of a discipline
   */
  SpecialistOfficeVisit: CodingArgs;
  /**
   * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
   */
  TeleVisit: CodingArgs;
  /**
   * urgentcare: A visit to an urgent care facility - typically a community care clinic.
   */
  UrgentCare: CodingArgs;
}

/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export const CoverageCopayTypeCodings:CoverageCopayTypeCodingType = {
  /**
   * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
   */
  CopayAmount: {
    display: "Copay Amount",
    code: "copay",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
   */
  CopayPercentage: {
    display: "Copay Percentage",
    code: "copaypct",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
   */
  Deductible: {
    display: "Deductible",
    code: "deductible",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * emergency: An episode in an emergency department.
   */
  Emergency: {
    display: "Emergency",
    code: "emergency",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * gpvisit: An office visit for a general practitioner of a discipline.
   */
  GPOfficeVisit: {
    display: "GP Office Visit",
    code: "gpvisit",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * inpthosp: An episode of an Inpatient hospital stay.
   */
  InpatientHospital: {
    display: "Inpatient Hospital",
    code: "inpthosp",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
   */
  MaximumOutOfPocket: {
    display: "Maximum out of pocket",
    code: "maxoutofpocket",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * spvisit: An office visit for a specialist practitioner of a discipline
   */
  SpecialistOfficeVisit: {
    display: "Specialist Office Visit",
    code: "spvisit",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
   */
  TeleVisit: {
    display: "Tele-visit",
    code: "televisit",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
  /**
   * urgentcare: A visit to an urgent care facility - typically a community care clinic.
   */
  UrgentCare: {
    display: "Urgent Care",
    code: "urgentcare",
    system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  },
} as const;