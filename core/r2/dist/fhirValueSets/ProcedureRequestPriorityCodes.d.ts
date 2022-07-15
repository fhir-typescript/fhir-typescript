/**
 * The priority of the request.
 */
export declare const ProcedureRequestPriorityCodes: {
    /**
     * asap: The request should be acted on as soon as possible.
     */
    readonly ASAP: "asap";
    /**
     * routine: The request has a normal priority.
     */
    readonly Routine: "routine";
    /**
     * stat: The request is time-critical.
     */
    readonly Stat: "stat";
    /**
     * urgent: The request should be done urgently.
     */
    readonly Urgent: "urgent";
};
/**
 * The priority of the request.
 */
export declare type ProcedureRequestPriorityCodeType = typeof ProcedureRequestPriorityCodes[keyof typeof ProcedureRequestPriorityCodes];
//# sourceMappingURL=ProcedureRequestPriorityCodes.d.ts.map