/**
 * This value set includes the financial processing priority codes.
 */
export declare const ProcessPriorityCodes: {
    /**
     * deferred: Later, when possible.
     */
    readonly Deferred: "deferred";
    /**
     * normal: With best effort.
     */
    readonly Normal: "normal";
    /**
     * stat: Immediately in real time.
     */
    readonly Immediate: "stat";
};
/**
 * This value set includes the financial processing priority codes.
 */
export declare type ProcessPriorityCodeType = typeof ProcessPriorityCodes[keyof typeof ProcessPriorityCodes];
//# sourceMappingURL=ProcessPriorityCodes.d.ts.map