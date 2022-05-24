import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare type ClinicalimpressionStatusCodingType = {
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
};
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare const ClinicalimpressionStatusCodings: ClinicalimpressionStatusCodingType;
//# sourceMappingURL=ClinicalimpressionStatusCodings.d.ts.map