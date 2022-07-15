/**
 * The Participation status of an appointment.
 */
export declare const ParticipationstatusCodes: {
    /**
     * accepted: The participant has accepted the appointment.
     */
    readonly Accepted: "accepted";
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    readonly Declined: "declined";
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    readonly NeedsAction: "needs-action";
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    readonly Tentative: "tentative";
};
/**
 * The Participation status of an appointment.
 */
export declare type ParticipationstatusCodeType = typeof ParticipationstatusCodes[keyof typeof ParticipationstatusCodes];
//# sourceMappingURL=ParticipationstatusCodes.d.ts.map