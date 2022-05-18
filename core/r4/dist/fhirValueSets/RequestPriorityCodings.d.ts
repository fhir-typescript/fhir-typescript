import { Coding } from '../fhir/Coding.js';
/**
 * The clinical priority of a diagnostic order.
 */
export declare const RequestPriorityCodings: {
    /**
     * asap: The request should be actioned as soon as possible - higher priority than urgent.
     */
    readonly ASAP: Coding;
    /**
     * routine: The request has normal priority.
     */
    readonly Routine: Coding;
    /**
     * stat: The request should be actioned immediately - highest possible priority.  E.g. an emergency.
     */
    readonly STAT: Coding;
    /**
     * urgent: The request should be actioned promptly - higher priority than routine.
     */
    readonly Urgent: Coding;
};
/**
 * The clinical priority of a diagnostic order.
 */
export declare type RequestPriorityCodingType = typeof RequestPriorityCodings;
//# sourceMappingURL=RequestPriorityCodings.d.ts.map