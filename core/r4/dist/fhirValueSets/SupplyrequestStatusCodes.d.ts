/**
 * Status of the supply request.
 */
export declare const SupplyrequestStatusCodes: {
    /**
     * active: The request is ready to be acted upon.
     */
    readonly Active: "active";
    /**
     * cancelled: The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: Activity against the request has been sufficiently completed to the satisfaction of the requester.
     */
    readonly Completed: "completed";
    /**
     * draft: The request has been created but is not yet complete or ready for action.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * suspended: The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.
     */
    readonly Suspended: "suspended";
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    readonly Unknown: "unknown";
};
/**
 * Status of the supply request.
 */
export declare type SupplyrequestStatusCodeType = typeof SupplyrequestStatusCodes[keyof typeof SupplyrequestStatusCodes];
//# sourceMappingURL=SupplyrequestStatusCodes.d.ts.map