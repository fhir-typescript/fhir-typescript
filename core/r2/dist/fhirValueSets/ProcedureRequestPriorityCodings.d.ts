import { CodingArgs } from '../fhir/Coding.js';
/**
 * The priority of the request.
 */
export declare type ProcedureRequestPriorityCodingType = {
    /**
     * asap: The request should be acted on as soon as possible.
     */
    ASAP: CodingArgs;
    /**
     * routine: The request has a normal priority.
     */
    Routine: CodingArgs;
    /**
     * stat: The request is time-critical.
     */
    Stat: CodingArgs;
    /**
     * urgent: The request should be done urgently.
     */
    Urgent: CodingArgs;
};
/**
 * The priority of the request.
 */
export declare const ProcedureRequestPriorityCodings: ProcedureRequestPriorityCodingType;
//# sourceMappingURL=ProcedureRequestPriorityCodings.d.ts.map