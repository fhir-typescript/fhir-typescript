/**
 * The status of a diagnostic order.
 */
export declare const DiagnosticOrderStatusCodes: {
    /**
     * accepted: The receiving system has accepted the order, but work has not yet commenced.
     */
    readonly Accepted: "accepted";
    /**
     * cancelled: The request has been withdrawn.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The work has been completed, the report(s) released, and no further work is planned.
     */
    readonly Completed: "completed";
    /**
     * draft: The request is in preliminary form prior to being sent.
     */
    readonly Draft: "draft";
    /**
     * failed: The diagnostic investigation was attempted, but due to some procedural error, it could not be completed.
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
     * received: The receiving system has received the order, but not yet decided whether it will be performed.
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
     * review: The work is complete, and the outcomes are being reviewed for approval.
     */
    readonly Review: "review";
    /**
     * suspended: The request has been held by originating system/user request.
     */
    readonly Suspended: "suspended";
};
/**
 * The status of a diagnostic order.
 */
export declare type DiagnosticOrderStatusCodeType = typeof DiagnosticOrderStatusCodes[keyof typeof DiagnosticOrderStatusCodes];
//# sourceMappingURL=DiagnosticOrderStatusCodes.d.ts.map