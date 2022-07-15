/**
 * The status of the communication.
 */
export declare const CommunicationRequestStatusCodes: {
    /**
     * accepted: The receiving system has accepted the order, but work has not yet commenced.
     */
    readonly Accepted: "accepted";
    /**
     * completed: The work has been complete, the report(s) released, and no further work is planned.
     */
    readonly Completed: "completed";
    /**
     * failed: The communication was attempted, but due to some procedural error, it could not be completed.
     */
    readonly Failed: "failed";
    /**
     * in-progress: The work to fulfill the order is happening.
     */
    readonly InProgress: "in-progress";
    /**
     * planned: The request has been planned.
     */
    readonly Planned: "planned";
    /**
     * proposed: The request has been proposed.
     */
    readonly Proposed: "proposed";
    /**
     * received: The receiving system has received the request but not yet decided whether it will be performed.
     */
    readonly Received: "received";
    /**
     * rejected: The receiving system has declined to fulfill the request
     */
    readonly Rejected: "rejected";
    /**
     * requested: The request has been placed.
     */
    readonly Requested: "requested";
    /**
     * suspended: The request has been held by originating system/user request.
     */
    readonly Suspended: "suspended";
};
/**
 * The status of the communication.
 */
export declare type CommunicationRequestStatusCodeType = typeof CommunicationRequestStatusCodes[keyof typeof CommunicationRequestStatusCodes];
//# sourceMappingURL=CommunicationRequestStatusCodes.d.ts.map