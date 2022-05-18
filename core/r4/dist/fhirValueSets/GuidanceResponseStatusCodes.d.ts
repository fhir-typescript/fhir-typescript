/**
 * The status of a guidance response.
 */
export declare const GuidanceResponseStatusCodes: {
    /**
     * data-requested: The request was processed successfully, but more data may result in a more complete evaluation.
     */
    readonly DataRequested: "data-requested";
    /**
     * data-required: The request was processed, but more data is required to complete the evaluation.
     */
    readonly DataRequired: "data-required";
    /**
     * entered-in-error: The response was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * failure: The request was not processed successfully.
     */
    readonly Failure: "failure";
    /**
     * in-progress: The request is currently being processed.
     */
    readonly InProgress: "in-progress";
    /**
     * success: The request was processed successfully.
     */
    readonly Success: "success";
};
/**
 * The status of a guidance response.
 */
export declare type GuidanceResponseStatusCodeType = typeof GuidanceResponseStatusCodes[keyof typeof GuidanceResponseStatusCodes];
//# sourceMappingURL=GuidanceResponseStatusCodes.d.ts.map