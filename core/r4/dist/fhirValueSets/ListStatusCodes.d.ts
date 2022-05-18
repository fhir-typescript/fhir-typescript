/**
 * The current state of the list.
 */
export declare const ListStatusCodes: {
    /**
     * current: The list is considered to be an active part of the patient's record.
     */
    readonly Current: "current";
    /**
     * entered-in-error: The list was never accurate.  It is retained for medico-legal purposes only.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * retired: The list is "old" and should no longer be considered accurate or relevant.
     */
    readonly Retired: "retired";
};
/**
 * The current state of the list.
 */
export declare type ListStatusCodeType = typeof ListStatusCodes[keyof typeof ListStatusCodes];
//# sourceMappingURL=ListStatusCodes.d.ts.map