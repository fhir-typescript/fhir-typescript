import { CodingArgs } from '../fhir/Coding.js';
/**
 * Identifies the level of importance to be assigned to actioning the request
 */
export declare type MedicationRequestPriorityCodingType = {
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
 * Identifies the level of importance to be assigned to actioning the request
 */
export declare const MedicationRequestPriorityCodings: MedicationRequestPriorityCodingType;
//# sourceMappingURL=MedicationRequestPriorityCodings.d.ts.map