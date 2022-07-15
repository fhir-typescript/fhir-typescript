/**
 * Codes representing the priority of the request.
 */
export declare const DeviceUseRequestPriorityCodes: {
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
 * Codes representing the priority of the request.
 */
export declare type DeviceUseRequestPriorityCodeType = typeof DeviceUseRequestPriorityCodes[keyof typeof DeviceUseRequestPriorityCodes];
//# sourceMappingURL=DeviceUseRequestPriorityCodes.d.ts.map