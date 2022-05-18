/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare const MessageheaderResponseRequestCodes: {
    /**
     * always: initiator expects a response for this message.
     */
    readonly Always: "always";
    /**
     * never: initiator does not expect a response.
     */
    readonly Never: "never";
    /**
     * on-error: initiator expects a response only if in error.
     */
    readonly ErrorRejectConditionsOnly: "on-error";
    /**
     * on-success: initiator expects a response only if successful.
     */
    readonly SuccessfulCompletionOnly: "on-success";
};
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare type MessageheaderResponseRequestCodeType = typeof MessageheaderResponseRequestCodes[keyof typeof MessageheaderResponseRequestCodes];
//# sourceMappingURL=MessageheaderResponseRequestCodes.d.ts.map