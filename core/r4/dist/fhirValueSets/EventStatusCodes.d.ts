/**
 * Codes identifying the lifecycle stage of an event.
 */
export declare const EventStatusCodes: {
    /**
     * completed: The event has now concluded.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: The event is currently occurring.
     */
    readonly InProgress: "in-progress";
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    readonly NotDone: "not-done";
    /**
     * on-hold: The event has been temporarily stopped but is expected to resume in the future.
     */
    readonly OnHold: "on-hold";
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    readonly Preparation: "preparation";
    /**
     * stopped: The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
     */
    readonly Stopped: "stopped";
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    readonly Unknown: "unknown";
};
/**
 * Codes identifying the lifecycle stage of an event.
 */
export declare type EventStatusCodeType = typeof EventStatusCodes[keyof typeof EventStatusCodes];
//# sourceMappingURL=EventStatusCodes.d.ts.map