import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes representing the status of the request.
 */
export declare type DeviceUseRequestStatusCodingType = {
    /**
     * aborted: The request was attempted, but due to some procedural error, it could not be completed.
     */
    Aborted: CodingArgs;
    /**
     * accepted: The receiving system has accepted the request but work has not yet commenced.
     */
    Accepted: CodingArgs;
    /**
     * completed: The work has been complete, the report(s) released, and no further work is planned.
     */
    Completed: CodingArgs;
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
     * rejected: The receiving system has declined to fulfill the request.
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
 * Codes representing the status of the request.
 */
export declare const DeviceUseRequestStatusCodings: DeviceUseRequestStatusCodingType;
//# sourceMappingURL=DeviceUseRequestStatusCodings.d.ts.map