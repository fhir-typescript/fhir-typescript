import { CodingArgs } from '../fhir/Coding.js';
/**
 * The clinical priority of a diagnostic order.
 */
export declare type RequestPriorityCodingType = {
    /**
     * asap: The request should be actioned as soon as possible - higher priority than urgent.
     */
    ASAP: CodingArgs;
    /**
     * routine: The request has normal priority.
     */
    Routine: CodingArgs;
    /**
     * stat: The request should be actioned immediately - highest possible priority.  E.g. an emergency.
     */
    STAT: CodingArgs;
    /**
     * urgent: The request should be actioned promptly - higher priority than routine.
     */
    Urgent: CodingArgs;
};
/**
 * The clinical priority of a diagnostic order.
 */
export declare const RequestPriorityCodings: RequestPriorityCodingType;
//# sourceMappingURL=RequestPriorityCodings.d.ts.map