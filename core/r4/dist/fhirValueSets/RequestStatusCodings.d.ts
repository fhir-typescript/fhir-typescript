import { Coding } from '../fhir/Coding.js';
/**
 * Codes identifying the lifecycle stage of a request.
 */
export declare const RequestStatusCodings: {
    /**
     * active: The request is in force and ready to be acted upon.
     */
    readonly Active: Coding;
    /**
     * completed: The activity described by the request has been fully performed.  No further activity will occur.
     */
    readonly Completed: Coding;
    /**
     * draft: The request has been created but is not yet complete or ready for action.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: This request should never have existed and should be considered 'void'.  (It is possible that real-world decisions were based on it.  If real-world activity has occurred, the status should be "revoked" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * on-hold: The request (and any implicit authorization to act) has been temporarily withdrawn but is expected to resume in the future.
     */
    readonly OnHold: Coding;
    /**
     * revoked: The request (and any implicit authorization to act) has been terminated prior to the known full completion of the intended actions.  No further activity should occur.
     */
    readonly Revoked: Coding;
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    readonly Unknown: Coding;
};
/**
 * Codes identifying the lifecycle stage of a request.
 */
export declare type RequestStatusCodingType = typeof RequestStatusCodings;
//# sourceMappingURL=RequestStatusCodings.d.ts.map