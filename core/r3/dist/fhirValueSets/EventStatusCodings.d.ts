import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the stage lifecycle stage of a event
 */
export declare type EventStatusCodingType = {
    /**
     * aborted: The event was  prior to the full completion of the intended actions
     */
    Aborted: CodingArgs;
    /**
     * completed: The event has now concluded
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The event is currently occurring
     */
    InProgress: CodingArgs;
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    Preparation: CodingArgs;
    /**
     * suspended: The event has been temporarily stopped but is expected to resume in the future
     */
    Suspended: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: CodingArgs;
};
/**
 * Codes identifying the stage lifecycle stage of a event
 */
export declare const EventStatusCodings: EventStatusCodingType;
//# sourceMappingURL=EventStatusCodings.d.ts.map