// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-statement-category|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Medication Status Codes
 */
export type MedicationStatementCategoryCodingType = {
  /**
   * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
   */
  Community: CodingArgs;
  /**
   * inpatient: Includes orders for medications to be administered or consumed in an inpatient or acute care setting
   */
  Inpatient: CodingArgs;
  /**
   * outpatient: Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
   */
  Outpatient: CodingArgs;
  /**
   * patientspecified: Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
   */
  PatientSpecified: CodingArgs;
}

/**
 * Medication Status Codes
 */
export const MedicationStatementCategoryCodings:MedicationStatementCategoryCodingType = {
  /**
   * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
   */
  Community: {
    display: "Community",
    code: "community",
    system: "http://terminology.hl7.org/CodeSystem/medication-statement-category",
  },
  /**
   * inpatient: Includes orders for medications to be administered or consumed in an inpatient or acute care setting
   */
  Inpatient: {
    display: "Inpatient",
    code: "inpatient",
    system: "http://terminology.hl7.org/CodeSystem/medication-statement-category",
  },
  /**
   * outpatient: Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
   */
  Outpatient: {
    display: "Outpatient",
    code: "outpatient",
    system: "http://terminology.hl7.org/CodeSystem/medication-statement-category",
  },
  /**
   * patientspecified: Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
   */
  PatientSpecified: {
    display: "Patient Specified",
    code: "patientspecified",
    system: "http://terminology.hl7.org/CodeSystem/medication-statement-category",
  },
} as const;
