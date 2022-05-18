import { Coding } from '../fhir/Coding.js';
/**
 * The type of PlanDefinition.
 */
export declare const PlanDefinitionTypeCodings: {
    /**
     * clinical-protocol: Defines a desired/typical sequence of clinical activities including preconditions, triggers and temporal relationships.
     */
    readonly ClinicalProtocol: Coding;
    /**
     * eca-rule: A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events.
     */
    readonly ECARule: Coding;
    /**
     * order-set: A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system.
     */
    readonly OrderSet: Coding;
    /**
     * workflow-definition: Defines the steps for a group of one or more systems in an event flow process along with the step constraints, sequence, pre-conditions and decision points to complete a particular objective.
     */
    readonly WorkflowDefinition: Coding;
};
/**
 * The type of PlanDefinition.
 */
export declare type PlanDefinitionTypeCodingType = typeof PlanDefinitionTypeCodings;
//# sourceMappingURL=PlanDefinitionTypeCodings.d.ts.map