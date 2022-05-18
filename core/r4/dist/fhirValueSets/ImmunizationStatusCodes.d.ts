/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare const ImmunizationStatusCodes: {
    /**
     * completed: The event has now concluded.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    readonly NotDone: "not-done";
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export declare type ImmunizationStatusCodeType = typeof ImmunizationStatusCodes[keyof typeof ImmunizationStatusCodes];
//# sourceMappingURL=ImmunizationStatusCodes.d.ts.map