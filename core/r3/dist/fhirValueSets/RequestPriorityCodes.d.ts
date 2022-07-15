/**
 * The clinical priority of a diagnostic order.
 */
export declare const RequestPriorityCodes: {
    /**
     * asap: The request should be actioned as soon as possible - higher priority than urgent
     */
    readonly ASAP: "asap";
    /**
     * routine: The request has normal priority
     */
    readonly Routine: "routine";
    /**
     * stat: The request should be actioned immediately - highest possible priority.  E.g. an emergency
     */
    readonly STAT: "stat";
    /**
     * urgent: The request should be actioned promptly - higher priority than routine
     */
    readonly Urgent: "urgent";
};
/**
 * The clinical priority of a diagnostic order.
 */
export declare type RequestPriorityCodeType = typeof RequestPriorityCodes[keyof typeof RequestPriorityCodes];
//# sourceMappingURL=RequestPriorityCodes.d.ts.map