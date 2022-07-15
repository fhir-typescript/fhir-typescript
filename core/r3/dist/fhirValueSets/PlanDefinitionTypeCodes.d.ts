/**
 * The type of PlanDefinition
 */
export declare const PlanDefinitionTypeCodes: {
    /**
     * eca-rule: A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events
     */
    readonly ECARule: "eca-rule";
    /**
     * order-set: A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system
     */
    readonly OrderSet: "order-set";
    /**
     * protocol: A set of activities that can be performed that have relationships in terms of order, pre-conditions, etc.
     */
    readonly Protocol: "protocol";
};
/**
 * The type of PlanDefinition
 */
export declare type PlanDefinitionTypeCodeType = typeof PlanDefinitionTypeCodes[keyof typeof PlanDefinitionTypeCodes];
//# sourceMappingURL=PlanDefinitionTypeCodes.d.ts.map