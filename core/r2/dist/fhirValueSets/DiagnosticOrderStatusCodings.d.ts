import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of a diagnostic order.
 */
export declare type DiagnosticOrderStatusCodingType = {
    /**
     * accepted: The receiving system has accepted the order, but work has not yet commenced.
     */
    Accepted: CodingArgs;
    /**
     * cancelled: The request has been withdrawn.
     */
    Cancelled: CodingArgs;
    /**
     * completed: The work has been completed, the report(s) released, and no further work is planned.
     */
    Completed: CodingArgs;
    /**
     * draft: The request is in preliminary form prior to being sent.
     */
    Draft: CodingArgs;
    /**
     * failed: The diagnostic investigation was attempted, but due to some procedural error, it could not be completed.
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
     * received: The receiving system has received the order, but not yet decided whether it will be performed.
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
     * review: The work is complete, and the outcomes are being reviewed for approval.
     */
    Review: CodingArgs;
    /**
     * suspended: The request has been held by originating system/user request.
     */
    Suspended: CodingArgs;
};
/**
 * The status of a diagnostic order.
 */
export declare const DiagnosticOrderStatusCodings: DiagnosticOrderStatusCodingType;
//# sourceMappingURL=DiagnosticOrderStatusCodings.d.ts.map