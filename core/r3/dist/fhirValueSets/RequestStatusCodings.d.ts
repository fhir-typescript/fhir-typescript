import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes identifying the stage lifecycle stage of a request
 */
export declare type RequestStatusCodingType = {
    /**
     * active: The request is ready to be acted upon
     */
    Active: CodingArgs;
    /**
     * cancelled: The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
     */
    Cancelled: CodingArgs;
    /**
     * completed: Activity against the request has been sufficiently completed to the satisfaction of the requester
     */
    Completed: CodingArgs;
    /**
     * draft: The request has been created but is not yet complete or ready for action
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
     */
    EnteredInError: CodingArgs;
    /**
     * suspended: The authorization/request to act has been temporarily withdrawn but is expected to resume in the future
     */
    Suspended: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" . One of the listed statuses is presumed to apply,  but the system creating the request doesn't know.
     */
    Unknown: CodingArgs;
};
/**
 * Codes identifying the stage lifecycle stage of a request
 */
export declare const RequestStatusCodings: RequestStatusCodingType;
//# sourceMappingURL=RequestStatusCodings.d.ts.map