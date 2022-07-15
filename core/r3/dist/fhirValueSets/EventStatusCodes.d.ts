/**
 * Codes identifying the stage lifecycle stage of a event
 */
export declare const EventStatusCodes: {
    /**
     * aborted: The event was  prior to the full completion of the intended actions
     */
    readonly Aborted: "aborted";
    /**
     * completed: The event has now concluded
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: The event is currently occurring
     */
    readonly InProgress: "in-progress";
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    readonly Preparation: "preparation";
    /**
     * suspended: The event has been temporarily stopped but is expected to resume in the future
     */
    readonly Suspended: "suspended";
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: "unknown";
};
/**
 * Codes identifying the stage lifecycle stage of a event
 */
export declare type EventStatusCodeType = typeof EventStatusCodes[keyof typeof EventStatusCodes];
//# sourceMappingURL=EventStatusCodes.d.ts.map