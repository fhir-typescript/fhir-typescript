import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of an event.
 */
export declare type EventStatusCodingType = {
    /**
     * completed: The event has now concluded.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The event is currently occurring.
     */
    InProgress: CodingArgs;
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    NotDone: CodingArgs;
    /**
     * on-hold: The event has been temporarily stopped but is expected to resume in the future.
     */
    OnHold: CodingArgs;
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    Preparation: CodingArgs;
    /**
     * stopped: The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
     */
    Stopped: CodingArgs;
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    Unknown: CodingArgs;
};
/**
 * Codes identifying the lifecycle stage of an event.
 */
export declare const EventStatusCodings: EventStatusCodingType;
//# sourceMappingURL=EventStatusCodings.d.ts.map