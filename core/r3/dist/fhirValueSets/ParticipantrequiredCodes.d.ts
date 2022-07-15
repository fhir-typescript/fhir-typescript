/**
 * Is the Participant required to attend the appointment.
 */
export declare const ParticipantrequiredCodes: {
    /**
     * information-only: The participant is excluded from the appointment, and may not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).
     */
    readonly InformationOnly: "information-only";
    /**
     * optional: The participant may optionally attend the appointment.
     */
    readonly Optional: "optional";
    /**
     * required: The participant is required to attend the appointment.
     */
    readonly Required: "required";
};
/**
 * Is the Participant required to attend the appointment.
 */
export declare type ParticipantrequiredCodeType = typeof ParticipantrequiredCodes[keyof typeof ParticipantrequiredCodes];
//# sourceMappingURL=ParticipantrequiredCodes.d.ts.map