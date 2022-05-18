// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-participant-type|4.0.1

/**
 * The type of participant for the action.
 */
export const ActionParticipantTypeCodes = {
  /**
   * device: The participant is a system or device used in the care of the patient.
   */
  Device: "device",
  /**
   * patient: The participant is the patient under evaluation.
   */
  Patient: "patient",
  /**
   * practitioner: The participant is a practitioner involved in the patient's care.
   */
  Practitioner: "practitioner",
  /**
   * related-person: The participant is a person related to the patient.
   */
  RelatedPerson: "related-person",
} as const;

/**
 * The type of participant for the action.
 */
export type ActionParticipantTypeCodeType = typeof ActionParticipantTypeCodes[keyof typeof ActionParticipantTypeCodes];