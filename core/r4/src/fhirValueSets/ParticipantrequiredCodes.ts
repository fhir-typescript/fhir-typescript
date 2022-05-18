// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participantrequired|4.0.1

/**
 * Is the Participant required to attend the appointment.
 */
export const ParticipantrequiredCodes = {
  /**
   * information-only: The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).
   */
  InformationOnly: "information-only",
  /**
   * optional: The participant may optionally attend the appointment.
   */
  Optional: "optional",
  /**
   * required: The participant is required to attend the appointment.
   */
  Required: "required",
} as const;

/**
 * Is the Participant required to attend the appointment.
 */
export type ParticipantrequiredCodeType = typeof ParticipantrequiredCodes[keyof typeof ParticipantrequiredCodes];
