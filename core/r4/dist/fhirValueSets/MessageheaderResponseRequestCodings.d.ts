import { Coding } from '../fhir/Coding.js';
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare const MessageheaderResponseRequestCodings: {
    /**
     * always: initiator expects a response for this message.
     */
    readonly Always: Coding;
    /**
     * never: initiator does not expect a response.
     */
    readonly Never: Coding;
    /**
     * on-error: initiator expects a response only if in error.
     */
    readonly ErrorRejectConditionsOnly: Coding;
    /**
     * on-success: initiator expects a response only if successful.
     */
    readonly SuccessfulCompletionOnly: Coding;
};
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare type MessageheaderResponseRequestCodingType = typeof MessageheaderResponseRequestCodings;
//# sourceMappingURL=MessageheaderResponseRequestCodings.d.ts.map