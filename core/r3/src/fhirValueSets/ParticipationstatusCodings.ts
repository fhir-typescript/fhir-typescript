// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participationstatus|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The Participation status of an appointment.
 */
export type ParticipationstatusCodingType = {
  /**
   * accepted: The participant has accepted the appointment.
   */
  Accepted: CodingArgs;
  /**
   * declined: The participant has declined the appointment and will not participate in the appointment.
   */
  Declined: CodingArgs;
  /**
   * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
   */
  NeedsAction: CodingArgs;
  /**
   * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
   */
  Tentative: CodingArgs;
}

/**
 * The Participation status of an appointment.
 */
export const ParticipationstatusCodings:ParticipationstatusCodingType = {
  /**
   * accepted: The participant has accepted the appointment.
   */
  Accepted: {
    display: "Accepted",
    code: "accepted",
    system: "http://hl7.org/fhir/participationstatus",
  },
  /**
   * declined: The participant has declined the appointment and will not participate in the appointment.
   */
  Declined: {
    display: "Declined",
    code: "declined",
    system: "http://hl7.org/fhir/participationstatus",
  },
  /**
   * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
   */
  NeedsAction: {
    display: "Needs Action",
    code: "needs-action",
    system: "http://hl7.org/fhir/participationstatus",
  },
  /**
   * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
   */
  Tentative: {
    display: "Tentative",
    code: "tentative",
    system: "http://hl7.org/fhir/participationstatus",
  },
} as const;
