/**
 * The clinical priority of a diagnostic order.
 */
export declare const DiagnosticOrderPriorityCodes: {
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
 * The clinical priority of a diagnostic order.
 */
export declare type DiagnosticOrderPriorityCodeType = typeof DiagnosticOrderPriorityCodes[keyof typeof DiagnosticOrderPriorityCodes];
//# sourceMappingURL=DiagnosticOrderPriorityCodes.d.ts.map