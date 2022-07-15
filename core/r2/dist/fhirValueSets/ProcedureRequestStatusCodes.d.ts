/**
 * The status of the request.
 */
export declare const ProcedureRequestStatusCodes: {
    /**
     * aborted: The request was attempted, but due to some procedural error, it could not be completed.
     */
    readonly Aborted: "aborted";
    /**
     * accepted: The receiving system has accepted the request, but work has not yet commenced.
     */
    readonly Accepted: "accepted";
    /**
     * completed: The work has been completed, the report(s) released, and no further work is planned.
     */
    readonly Completed: "completed";
    /**
     * draft: The request is in preliminary form, prior to being requested.
     */
    readonly Draft: "draft";
    /**
     * in-progress: The work to fulfill the request is happening.
     */
    readonly InProgress: "in-progress";
    /**
     * proposed: The request has been proposed.
     */
    readonly Proposed: "proposed";
    /**
     * received: The receiving system has received the request but not yet decided whether it will be performed.
     */
    readonly Received: "received";
    /**
     * rejected: The receiving system has declined to fulfill the request.
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
 * The status of the request.
 */
export declare type ProcedureRequestStatusCodeType = typeof ProcedureRequestStatusCodes[keyof typeof ProcedureRequestStatusCodes];
//# sourceMappingURL=ProcedureRequestStatusCodes.d.ts.map