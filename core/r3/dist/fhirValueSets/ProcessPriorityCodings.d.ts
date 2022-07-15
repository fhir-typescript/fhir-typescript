import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes the financial processing priority codes.
 */
export declare type ProcessPriorityCodingType = {
    /**
     * deferred: Later, when possible.
     */
    Deferred: CodingArgs;
    /**
     * normal: With best effort.
     */
    Normal: CodingArgs;
    /**
     * stat: Immediately in real time.
     */
    Immediate: CodingArgs;
};
/**
 * This value set includes the financial processing priority codes.
 */
export declare const ProcessPriorityCodings: ProcessPriorityCodingType;
//# sourceMappingURL=ProcessPriorityCodings.d.ts.map