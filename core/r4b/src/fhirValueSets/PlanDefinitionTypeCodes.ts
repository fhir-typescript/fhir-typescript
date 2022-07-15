// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/plan-definition-type|4.3.0

/**
 * The type of PlanDefinition.
 */
export const PlanDefinitionTypeCodes = {
  /**
   * clinical-protocol: Defines a desired/typical sequence of clinical activities including preconditions, triggers and temporal relationships.
   */
  ClinicalProtocol: "clinical-protocol",
  /**
   * eca-rule: A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events.
   */
  ECARule: "eca-rule",
  /**
   * order-set: A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system.
   */
  OrderSet: "order-set",
  /**
   * workflow-definition: Defines the steps for a group of one or more systems in an event flow process along with the step constraints, sequence, pre-conditions and decision points to complete a particular objective.
   */
  WorkflowDefinition: "workflow-definition",
} as const;

/**
 * The type of PlanDefinition.
 */
export type PlanDefinitionTypeCodeType = typeof PlanDefinitionTypeCodes[keyof typeof PlanDefinitionTypeCodes];
