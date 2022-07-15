/**
 * The Participation status of an appointment.
 */
export declare const ParticipantstatusCodes: {
    /**
     * accepted: The appointment participant has accepted that they can attend the appointment at the time specified in the AppointmentResponse.
     */
    readonly Accepted: "accepted";
    /**
     * completed: The participant has completed the appointment.
     */
    readonly Completed: "completed";
    /**
     * declined: The appointment participant has declined the appointment.
     */
    readonly Declined: "declined";
    /**
     * in-process: The participant has in-process the appointment.
     */
    readonly InProcess: "in-process";
    /**
     * needs-action: This is the intitial status of an appointment participant until a participant has replied. It implies that there is no commitment for the appointment.
     */
    readonly NeedsAction: "needs-action";
    /**
     * tentative: The appointment participant has tentatively accepted the appointment.
     */
    readonly Tentative: "tentative";
};
/**
 * The Participation status of an appointment.
 */
export declare type ParticipantstatusCodeType = typeof ParticipantstatusCodes[keyof typeof ParticipantstatusCodes];
//# sourceMappingURL=ParticipantstatusCodes.d.ts.map