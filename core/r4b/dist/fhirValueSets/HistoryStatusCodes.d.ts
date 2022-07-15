/**
 * A code that identifies the status of the family history record.
 */
export declare const HistoryStatusCodes: {
    /**
     * completed: All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * health-unknown: Health information for this family member is unavailable/unknown.
     */
    readonly HealthUnknown: "health-unknown";
    /**
     * partial: Some health information is known and captured, but not complete - see notes for details.
     */
    readonly Partial: "partial";
};
/**
 * A code that identifies the status of the family history record.
 */
export declare type HistoryStatusCodeType = typeof HistoryStatusCodes[keyof typeof HistoryStatusCodes];
//# sourceMappingURL=HistoryStatusCodes.d.ts.map