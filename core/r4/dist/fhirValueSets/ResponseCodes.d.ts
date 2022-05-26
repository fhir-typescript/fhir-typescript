/**
 * The kind of response to a message.
 */
export declare const ResponseCodes: {
    /**
     * fatal-error: The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    readonly FatalError: "fatal-error";
    /**
     * ok: The message was accepted and processed without error.
     */
    readonly OK: "ok";
    /**
     * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    readonly TransientError: "transient-error";
};
/**
 * The kind of response to a message.
 */
export declare type ResponseCodeType = typeof ResponseCodes[keyof typeof ResponseCodes];
//# sourceMappingURL=ResponseCodes.d.ts.map