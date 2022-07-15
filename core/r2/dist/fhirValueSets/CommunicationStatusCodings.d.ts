import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the communication.
 */
export declare type CommunicationStatusCodingType = {
    /**
     * completed: The message transmission is complete, i.e., delivered to the recipient's destination.
     */
    Completed: CodingArgs;
    /**
     * failed: There was a failure in transmitting the message out.
     */
    Failed: CodingArgs;
    /**
     * in-progress: The communication transmission is ongoing.
     */
    InProgress: CodingArgs;
    /**
     * rejected: The receiving system has declined to accept the message.
     */
    Rejected: CodingArgs;
    /**
     * suspended: The communication transmission has been held by originating system/user request.
     */
    Suspended: CodingArgs;
};
/**
 * The status of the communication.
 */
export declare const CommunicationStatusCodings: CommunicationStatusCodingType;
//# sourceMappingURL=CommunicationStatusCodings.d.ts.map