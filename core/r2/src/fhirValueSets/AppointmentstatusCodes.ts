// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointmentstatus|1.0.2

/**
 * The free/busy status of an appointment.
 */
export const AppointmentstatusCodes = {
  /**
   * arrived: Some of the patients have arrived.
   */
  Arrived: "arrived",
  /**
   * booked: All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
   */
  Booked: "booked",
  /**
   * cancelled: The appointment has been cancelled.
   */
  Cancelled: "cancelled",
  /**
   * fulfilled: This appointment has completed and may have resulted in an encounter.
   */
  Fulfilled: "fulfilled",
  /**
   * noshow: Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
   */
  NoShow: "noshow",
  /**
   * pending: Some or all of the participant(s) have not finalized their acceptance of the appointment request.
   */
  Pending: "pending",
  /**
   * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time may not be set yet.
   */
  Proposed: "proposed",
} as const;

/**
 * The free/busy status of an appointment.
 */
export type AppointmentstatusCodeType = typeof AppointmentstatusCodes[keyof typeof AppointmentstatusCodes];
