/**
 * The mode of a message conformance statement.
 */
export declare const MessageConformanceEventModeCodes: {
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
 * The mode of a message conformance statement.
 */
export declare type MessageConformanceEventModeCodeType = typeof MessageConformanceEventModeCodes[keyof typeof MessageConformanceEventModeCodes];
//# sourceMappingURL=MessageConformanceEventModeCodes.d.ts.map