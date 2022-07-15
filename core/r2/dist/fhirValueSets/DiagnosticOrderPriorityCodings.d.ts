import { CodingArgs } from '../fhir/Coding.js';
/**
 * The clinical priority of a diagnostic order.
 */
export declare type DiagnosticOrderPriorityCodingType = {
    /**
     * asap: The order should be acted on as soon as possible.
     */
    ASAP: CodingArgs;
    /**
     * routine: The order has a normal priority .
     */
    Routine: CodingArgs;
    /**
     * stat: The order is time-critical.
     */
    Stat: CodingArgs;
    /**
     * urgent: The order should be urgently.
     */
    Urgent: CodingArgs;
};
/**
 * The clinical priority of a diagnostic order.
 */
export declare const DiagnosticOrderPriorityCodings: DiagnosticOrderPriorityCodingType;
//# sourceMappingURL=DiagnosticOrderPriorityCodings.d.ts.map