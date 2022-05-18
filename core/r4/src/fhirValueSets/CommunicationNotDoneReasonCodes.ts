// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/communication-not-done-reason|4.0.1

/**
 * Codes for the reason why a communication did not happen.
 */
export const CommunicationNotDoneReasonCodes = {
  /**
   * family-objection: The communication was not done due to a family objection.
   */
  FamilyObjection: "family-objection",
  /**
   * invalid-phone-number: The communication was not done due to an invalid phone number.
   */
  InvalidPhoneNumber: "invalid-phone-number",
  /**
   * patient-objection: The communication was not done due to a patient objection.
   */
  PatientObjection: "patient-objection",
  /**
   * recipient-unavailable: The communication was not done due to the recipient being unavailable.
   */
  RecipientUnavailable: "recipient-unavailable",
  /**
   * system-error: The communication was not done due to a system error.
   */
  SystemError: "system-error",
  /**
   * unknown: The communication was not done due to an unknown reason.
   */
  Unknown: "unknown",
} as const;

/**
 * Codes for the reason why a communication did not happen.
 */
export type CommunicationNotDoneReasonCodeType = typeof CommunicationNotDoneReasonCodes[keyof typeof CommunicationNotDoneReasonCodes];
