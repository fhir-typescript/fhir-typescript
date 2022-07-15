// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participantstatus|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The Participation status of an appointment.
 */
export type ParticipantstatusCodingType = {
  /**
   * accepted: The appointment participant has accepted that they can attend the appointment at the time specified in the AppointmentResponse.
   */
  Accepted: CodingArgs;
  /**
   * completed: The participant has completed the appointment.
   */
  Completed: CodingArgs;
  /**
   * declined: The appointment participant has declined the appointment.
   */
  Declined: CodingArgs;
  /**
   * in-process: The participant has in-process the appointment.
   */
  InProcess: CodingArgs;
  /**
   * needs-action: This is the intitial status of an appointment participant until a participant has replied. It implies that there is no commitment for the appointment.
   */
  NeedsAction: CodingArgs;
  /**
   * tentative: The appointment participant has tentatively accepted the appointment.
   */
  Tentative: CodingArgs;
}

/**
 * The Participation status of an appointment.
 */
export const ParticipantstatusCodings:ParticipantstatusCodingType = {
  /**
   * accepted: The appointment participant has accepted that they can attend the appointment at the time specified in the AppointmentResponse.
   */
  Accepted: {
    display: "Accepted",
    code: "accepted",
    system: "http://hl7.org/fhir/participantstatus",
  },
  /**
   * completed: The participant has completed the appointment.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/participantstatus",
  },
  /**
   * declined: The appointment participant has declined the appointment.
   */
  Declined: {
    display: "Declined",
    code: "declined",
    system: "http://hl7.org/fhir/participantstatus",
  },
  /**
   * in-process: The participant has in-process the appointment.
   */
  InProcess: {
    display: "In Process",
    code: "in-process",
    system: "http://hl7.org/fhir/participantstatus",
  },
  /**
   * needs-action: This is the intitial status of an appointment participant until a participant has replied. It implies that there is no commitment for the appointment.
   */
  NeedsAction: {
    display: "Needs Action",
    code: "needs-action",
    system: "http://hl7.org/fhir/participantstatus",
  },
  /**
   * tentative: The appointment participant has tentatively accepted the appointment.
   */
  Tentative: {
    display: "Tentative",
    code: "tentative",
    system: "http://hl7.org/fhir/participantstatus",
  },
} as const;
