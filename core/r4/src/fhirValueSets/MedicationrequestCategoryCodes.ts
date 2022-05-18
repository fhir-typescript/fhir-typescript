// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-category|4.0.1

/**
 * MedicationRequest Category Codes
 */
export const MedicationrequestCategoryCodes = {
  /**
   * community: Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
   */
  Community: "community",
  /**
   * discharge: Includes requests for medications created when the patient is being released from a facility
   */
  Discharge: "discharge",
  /**
   * inpatient: Includes requests for medications to be administered or consumed in an inpatient or acute care setting
   */
  Inpatient: "inpatient",
  /**
   * outpatient: Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
   */
  Outpatient: "outpatient",
} as const;

/**
 * MedicationRequest Category Codes
 */
export type MedicationrequestCategoryCodeType = typeof MedicationrequestCategoryCodes[keyof typeof MedicationrequestCategoryCodes];