/**
 * Codes for the reason why a communication did not happen.
 */
export declare const CommunicationNotDoneReasonCodes: {
    /**
     * family-objection: The communication was not done due to a family objection.
     */
    readonly FamilyObjection: "family-objection";
    /**
     * invalid-phone-number: The communication was not done due to an invalid phone number.
     */
    readonly InvalidPhoneNumber: "invalid-phone-number";
    /**
     * patient-objection: The communication was not done due to a patient objection.
     */
    readonly PatientObjection: "patient-objection";
    /**
     * recipient-unavailable: The communication was not done due to the recipient being unavailable.
     */
    readonly RecipientUnavailable: "recipient-unavailable";
    /**
     * system-error: The communication was not done due to a system error.
     */
    readonly SystemError: "system-error";
    /**
     * unknown: The communication was not done due to an unknown reason.
     */
    readonly Unknown: "unknown";
};
/**
 * Codes for the reason why a communication did not happen.
 */
export declare type CommunicationNotDoneReasonCodeType = typeof CommunicationNotDoneReasonCodes[keyof typeof CommunicationNotDoneReasonCodes];
//# sourceMappingURL=CommunicationNotDoneReasonCodes.d.ts.map