import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes the financial processing priority codes.
 */
export declare const ProcessPriorityCodings: {
    /**
     * deferred: Later, when possible.
     */
    readonly Deferred: Coding;
    /**
     * normal: With best effort.
     */
    readonly Normal: Coding;
    /**
     * stat: Immediately in real time.
     */
    readonly Immediate: Coding;
};
/**
 * This value set includes the financial processing priority codes.
 */
export declare type ProcessPriorityCodingType = typeof ProcessPriorityCodings;
//# sourceMappingURL=ProcessPriorityCodings.d.ts.map