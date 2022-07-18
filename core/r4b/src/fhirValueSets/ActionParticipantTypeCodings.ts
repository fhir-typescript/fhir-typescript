// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-participant-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of participant for the action.
 */
export type ActionParticipantTypeCodingType = {
  /**
   * device: The participant is a system or device used in the care of the patient.
   */
  Device: CodingArgs;
  /**
   * patient: The participant is the patient under evaluation.
   */
  Patient: CodingArgs;
  /**
   * practitioner: The participant is a practitioner involved in the patient's care.
   */
  Practitioner: CodingArgs;
  /**
   * related-person: The participant is a person related to the patient.
   */
  RelatedPerson: CodingArgs;
}

/**
 * The type of participant for the action.
 */
export const ActionParticipantTypeCodings:ActionParticipantTypeCodingType = {
  /**
   * device: The participant is a system or device used in the care of the patient.
   */
  Device: {
    display: "Device",
    code: "device",
    system: "http://hl7.org/fhir/action-participant-type",
  },
  /**
   * patient: The participant is the patient under evaluation.
   */
  Patient: {
    display: "Patient",
    code: "patient",
    system: "http://hl7.org/fhir/action-participant-type",
  },
  /**
   * practitioner: The participant is a practitioner involved in the patient's care.
   */
  Practitioner: {
    display: "Practitioner",
    code: "practitioner",
    system: "http://hl7.org/fhir/action-participant-type",
  },
  /**
   * related-person: The participant is a person related to the patient.
   */
  RelatedPerson: {
    display: "Related Person",
    code: "related-person",
    system: "http://hl7.org/fhir/action-participant-type",
  },
} as const;