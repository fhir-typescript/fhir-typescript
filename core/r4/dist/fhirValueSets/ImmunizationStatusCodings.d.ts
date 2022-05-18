import { Coding } from '../fhir/Coding.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare const ImmunizationStatusCodings: {
    /**
     * completed: The event has now concluded.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    readonly NotDone: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare type ImmunizationStatusCodingType = typeof ImmunizationStatusCodings;
//# sourceMappingURL=ImmunizationStatusCodings.d.ts.map