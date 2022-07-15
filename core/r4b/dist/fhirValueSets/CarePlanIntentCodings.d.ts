import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export declare type CarePlanIntentCodingType = {
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    Option: CodingArgs;
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    Order: CodingArgs;
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: CodingArgs;
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    Proposal: CodingArgs;
};
/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export declare const CarePlanIntentCodings: CarePlanIntentCodingType;
//# sourceMappingURL=CarePlanIntentCodings.d.ts.map