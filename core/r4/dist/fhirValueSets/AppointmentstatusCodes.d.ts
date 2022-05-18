/**
 * The free/busy status of an appointment.
 */
export declare const AppointmentstatusCodes: {
    /**
     * arrived: The patient/patients has/have arrived and is/are waiting to be seen.
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
     * checked-in: When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).
     */
    readonly CheckedIn: "checked-in";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * fulfilled: The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.
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
     * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.
     */
    readonly Proposed: "proposed";
    /**
     * waitlist: The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.
     * A specific time might or might not be pre-allocated.
     */
    readonly Waitlisted: "waitlist";
};
/**
 * The free/busy status of an appointment.
 */
export declare type AppointmentstatusCodeType = typeof AppointmentstatusCodes[keyof typeof AppointmentstatusCodes];
//# sourceMappingURL=AppointmentstatusCodes.d.ts.map