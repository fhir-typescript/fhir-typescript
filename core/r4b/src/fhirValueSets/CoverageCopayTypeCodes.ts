// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/coverage-copay-type|4.3.0

/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export const CoverageCopayTypeCodes = {
  /**
   * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
   */
  CopayAmount: "copay",
  /**
   * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
   */
  CopayPercentage: "copaypct",
  /**
   * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
   */
  Deductible: "deductible",
  /**
   * emergency: An episode in an emergency department.
   */
  Emergency: "emergency",
  /**
   * gpvisit: An office visit for a general practitioner of a discipline.
   */
  GPOfficeVisit: "gpvisit",
  /**
   * inpthosp: An episode of an Inpatient hospital stay.
   */
  InpatientHospital: "inpthosp",
  /**
   * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
   */
  MaximumOutOfPocket: "maxoutofpocket",
  /**
   * spvisit: An office visit for a specialist practitioner of a discipline
   */
  SpecialistOfficeVisit: "spvisit",
  /**
   * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
   */
  TeleVisit: "televisit",
  /**
   * urgentcare: A visit to an urgent care facility - typically a community care clinic.
   */
  UrgentCare: "urgentcare",
} as const;

/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export type CoverageCopayTypeCodeType = typeof CoverageCopayTypeCodes[keyof typeof CoverageCopayTypeCodes];