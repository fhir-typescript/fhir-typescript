/**
 * The free/busy status of an appointment.
 */
export declare const AppointmentstatusCodes: {
    /**
     * arrived: Some of the patients have arrived.
     */
    readonly Arrived: "arrived";
    /**
     * booked: All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
     */
    readonly Booked: "booked";
    /**
     * cancelled: The appointment has been cancelled.
     */
    readonly Cancelled: "cancelled";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * fulfilled: This appointment has completed and may have resulted in an encounter.
     */
    readonly Fulfilled: "fulfilled";
    /**
     * noshow: Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
     */
    readonly NoShow: "noshow";
    /**
     * pending: Some or all of the participant(s) have not finalized their acceptance of the appointment request.
     */
    readonly Pending: "pending";
    /**
     * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time may not be set yet.
     */
    readonly Proposed: "proposed";
};
/**
 * The free/busy status of an appointment.
 */
export declare type AppointmentstatusCodeType = typeof AppointmentstatusCodes[keyof typeof AppointmentstatusCodes];
//# sourceMappingURL=AppointmentstatusCodes.d.ts.map