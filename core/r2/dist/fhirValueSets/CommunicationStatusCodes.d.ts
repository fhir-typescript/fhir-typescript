/**
 * The status of the communication.
 */
export declare const CommunicationStatusCodes: {
    /**
     * completed: The message transmission is complete, i.e., delivered to the recipient's destination.
     */
    readonly Completed: "completed";
    /**
     * failed: There was a failure in transmitting the message out.
     */
    readonly Failed: "failed";
    /**
     * in-progress: The communication transmission is ongoing.
     */
    readonly InProgress: "in-progress";
    /**
     * rejected: The receiving system has declined to accept the message.
     */
    readonly Rejected: "rejected";
    /**
     * suspended: The communication transmission has been held by originating system/user request.
     */
    readonly Suspended: "suspended";
};
/**
 * The status of the communication.
 */
export declare type CommunicationStatusCodeType = typeof CommunicationStatusCodes[keyof typeof CommunicationStatusCodes];
//# sourceMappingURL=CommunicationStatusCodes.d.ts.map