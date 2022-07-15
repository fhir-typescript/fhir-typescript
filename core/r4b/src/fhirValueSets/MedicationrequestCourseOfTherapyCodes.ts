// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-course-of-therapy|4.3.0

/**
 * MedicationRequest Course of Therapy Codes
 */
export const MedicationrequestCourseOfTherapyCodes = {
  /**
   * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
   */
  ShortCourseAcuteTherapy: "acute",
  /**
   * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
   */
  ContinuousLongTermTherapy: "continuous",
  /**
   * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
   */
  Seasonal: "seasonal",
} as const;

/**
 * MedicationRequest Course of Therapy Codes
 */
export type MedicationrequestCourseOfTherapyCodeType = typeof MedicationrequestCourseOfTherapyCodes[keyof typeof MedicationrequestCourseOfTherapyCodes];
