import { Coding } from '../fhir/Coding.js';
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare const ClinicalimpressionStatusCodings: {
    /**
     * completed: The event has now concluded.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: The event is currently occurring.
     */
    readonly InProgress: Coding;
};
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare type ClinicalimpressionStatusCodingType = typeof ClinicalimpressionStatusCodings;
//# sourceMappingURL=ClinicalimpressionStatusCodings.d.ts.map