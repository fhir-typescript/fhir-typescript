/**
 * The status of the endpoint
 */
export declare const EndpointStatusCodes: {
    /**
     * active: This endpoint is expected to be active and can be used
     */
    readonly Active: "active";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * error: This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken
     */
    readonly Error: "error";
    /**
     * off: This endpoint is no longer to be used
     */
    readonly Off: "off";
    /**
     * suspended: This endpoint is temporarily unavailable
     */
    readonly Suspended: "suspended";
    /**
     * test: This endpoint is not intended for production usage.
     */
    readonly Test: "test";
};
/**
 * The status of the endpoint
 */
export declare type EndpointStatusCodeType = typeof EndpointStatusCodes[keyof typeof EndpointStatusCodes];
//# sourceMappingURL=EndpointStatusCodes.d.ts.map