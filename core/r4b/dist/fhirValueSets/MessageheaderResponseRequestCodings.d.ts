import { CodingArgs } from '../fhir/Coding.js';
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare type MessageheaderResponseRequestCodingType = {
    /**
     * always: initiator expects a response for this message.
     */
    Always: CodingArgs;
    /**
     * never: initiator does not expect a response.
     */
    Never: CodingArgs;
    /**
     * on-error: initiator expects a response only if in error.
     */
    ErrorRejectConditionsOnly: CodingArgs;
    /**
     * on-success: initiator expects a response only if successful.
     */
    SuccessfulCompletionOnly: CodingArgs;
};
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export declare const MessageheaderResponseRequestCodings: MessageheaderResponseRequestCodingType;
//# sourceMappingURL=MessageheaderResponseRequestCodings.d.ts.map