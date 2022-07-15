/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare const ClinicalimpressionStatusCodes: {
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
};
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export declare type ClinicalimpressionStatusCodeType = typeof ClinicalimpressionStatusCodes[keyof typeof ClinicalimpressionStatusCodes];
//# sourceMappingURL=ClinicalimpressionStatusCodes.d.ts.map