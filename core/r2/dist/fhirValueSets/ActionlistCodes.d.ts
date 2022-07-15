/**
 * List of allowable action which this resource can request.
 */
export declare const ActionlistCodes: {
    /**
     * cancel: Cancel, reverse or nullify the target resource.
     */
    readonly CancelReverseOrNullify: "cancel";
    /**
     * poll: Check for previously un-read/ not-retrieved resources.
     */
    readonly Poll: "poll";
    /**
     * reprocess: Re-process the target resource.
     */
    readonly ReProcess: "reprocess";
    /**
     * status: Retrieve the processing status of the target resource.
     */
    readonly StatusCheck: "status";
};
/**
 * List of allowable action which this resource can request.
 */
export declare type ActionlistCodeType = typeof ActionlistCodes[keyof typeof ActionlistCodes];
//# sourceMappingURL=ActionlistCodes.d.ts.map