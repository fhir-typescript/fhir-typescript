/**
 * The mode of a message capability statement.
 */
export declare const EventCapabilityModeCodes: {
    /**
     * receiver: The application receives requests and sends responses.
     */
    readonly Receiver: "receiver";
    /**
     * sender: The application sends requests and receives responses.
     */
    readonly Sender: "sender";
};
/**
 * The mode of a message capability statement.
 */
export declare type EventCapabilityModeCodeType = typeof EventCapabilityModeCodes[keyof typeof EventCapabilityModeCodes];
//# sourceMappingURL=EventCapabilityModeCodes.d.ts.map