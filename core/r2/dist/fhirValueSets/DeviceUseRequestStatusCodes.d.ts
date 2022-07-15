/**
 * Codes representing the status of the request.
 */
export declare const DeviceUseRequestStatusCodes: {
    /**
     * aborted: The request was attempted, but due to some procedural error, it could not be completed.
     */
    readonly Aborted: "aborted";
    /**
     * accepted: The receiving system has accepted the request but work has not yet commenced.
     */
    readonly Accepted: "accepted";
    /**
     * completed: The work has been complete, the report(s) released, and no further work is planned.
     */
    readonly Completed: "completed";
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
 * Codes representing the status of the request.
 */
export declare type DeviceUseRequestStatusCodeType = typeof DeviceUseRequestStatusCodes[keyof typeof DeviceUseRequestStatusCodes];
//# sourceMappingURL=DeviceUseRequestStatusCodes.d.ts.map