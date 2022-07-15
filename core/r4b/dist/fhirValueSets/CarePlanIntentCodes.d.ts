/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export declare const CarePlanIntentCodes: {
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    readonly Option: "option";
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    readonly Order: "order";
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    readonly Plan: "plan";
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    readonly Proposal: "proposal";
};
/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export declare type CarePlanIntentCodeType = typeof CarePlanIntentCodes[keyof typeof CarePlanIntentCodes];
//# sourceMappingURL=CarePlanIntentCodes.d.ts.map