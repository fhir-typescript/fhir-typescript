import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the communication.
 */
export declare type CommunicationRequestStatusCodingType = {
    /**
     * accepted: The receiving system has accepted the order, but work has not yet commenced.
     */
    Accepted: CodingArgs;
    /**
     * completed: The work has been complete, the report(s) released, and no further work is planned.
     */
    Completed: CodingArgs;
    /**
     * failed: The communication was attempted, but due to some procedural error, it could not be completed.
     */
    Failed: CodingArgs;
    /**
     * in-progress: The work to fulfill the order is happening.
     */
    InProgress: CodingArgs;
    /**
     * planned: The request has been planned.
     */
    Planned: CodingArgs;
    /**
     * proposed: The request has been proposed.
     */
    Proposed: CodingArgs;
    /**
     * received: The receiving system has received the request but not yet decided whether it will be performed.
     */
    Received: CodingArgs;
    /**
     * rejected: The receiving system has declined to fulfill the request
     */
    Rejected: CodingArgs;
    /**
     * requested: The request has been placed.
     */
    Requested: CodingArgs;
    /**
     * suspended: The request has been held by originating system/user request.
     */
    Suspended: CodingArgs;
};
/**
 * The status of the communication.
 */
export declare const CommunicationRequestStatusCodings: CommunicationRequestStatusCodingType;
//# sourceMappingURL=CommunicationRequestStatusCodings.d.ts.map