import { CodingArgs } from '../fhir/Coding.js';
/**
 * The free/busy status of an appointment.
 */
export declare type AppointmentstatusCodingType = {
    /**
     * arrived: Some of the patients have arrived.
     */
    Arrived: CodingArgs;
    /**
     * booked: All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
     */
    Booked: CodingArgs;
    /**
     * cancelled: The appointment has been cancelled.
     */
    Cancelled: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * fulfilled: This appointment has completed and may have resulted in an encounter.
     */
    Fulfilled: CodingArgs;
    /**
     * noshow: Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
     */
    NoShow: CodingArgs;
    /**
     * pending: Some or all of the participant(s) have not finalized their acceptance of the appointment request.
     */
    Pending: CodingArgs;
    /**
     * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time may not be set yet.
     */
    Proposed: CodingArgs;
};
/**
 * The free/busy status of an appointment.
 */
export declare const AppointmentstatusCodings: AppointmentstatusCodingType;
//# sourceMappingURL=AppointmentstatusCodings.d.ts.map