/**
 * Identifies the level of importance to be assigned to actioning the request
 */
export declare const MedicationRequestPriorityCodes: {
    /**
     * asap: The order should be acted on as soon as possible.
     */
    readonly ASAP: "asap";
    /**
     * routine: The order has a normal priority .
     */
    readonly Routine: "routine";
    /**
     * stat: The order is time-critical.
     */
    readonly Stat: "stat";
    /**
     * urgent: The order should be urgently.
     */
    readonly Urgent: "urgent";
};
/**
 * Identifies the level of importance to be assigned to actioning the request
 */
export declare type MedicationRequestPriorityCodeType = typeof MedicationRequestPriorityCodes[keyof typeof MedicationRequestPriorityCodes];
//# sourceMappingURL=MedicationRequestPriorityCodes.d.ts.map