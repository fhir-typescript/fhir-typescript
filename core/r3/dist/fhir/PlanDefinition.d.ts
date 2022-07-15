import * as fhir from '../fhir.js';
import { ActionConditionKindCodeType } from '../fhirValueSets/ActionConditionKindCodes.js';
import { ActionRelationshipTypeCodeType } from '../fhirValueSets/ActionRelationshipTypeCodes.js';
import { ActionParticipantTypeCodeType } from '../fhirValueSets/ActionParticipantTypeCodes.js';
import { ActionGroupingBehaviorCodeType } from '../fhirValueSets/ActionGroupingBehaviorCodes.js';
import { ActionSelectionBehaviorCodeType } from '../fhirValueSets/ActionSelectionBehaviorCodes.js';
import { ActionRequiredBehaviorCodeType } from '../fhirValueSets/ActionRequiredBehaviorCodes.js';
import { ActionPrecheckBehaviorCodeType } from '../fhirValueSets/ActionPrecheckBehaviorCodes.js';
import { ActionCardinalityBehaviorCodeType } from '../fhirValueSets/ActionCardinalityBehaviorCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the PlanDefinitionGoalTarget type.
 */
export interface PlanDefinitionGoalTargetArgs extends fhir.BackboneElementArgs {
    /**
     * The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConceptArgs | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detail?: fhir.Quantity | fhir.Range | fhir.CodeableConcept | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailRange?: fhir.RangeArgs | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the timeframe after the start of the goal in which the goal should be met.
     */
    due?: fhir.DurationArgs | undefined;
}
/**
 * Indicates what should be done and within what timeframe.
 */
export declare class PlanDefinitionGoalTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detail?: (fhir.Quantity | fhir.Range | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PlanDefinition.goal.target.detail[x]
     */
    protected static readonly _fts_detailIsChoice: true;
    /**
     * Indicates the timeframe after the start of the goal in which the goal should be met.
     */
    due?: fhir.Duration | undefined;
    /**
     * Default constructor for PlanDefinitionGoalTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionGoalTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionGoal type.
 */
export interface PlanDefinitionGoalArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConceptArgs | null;
    /**
     * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * The event after which the goal should begin being pursued.
     */
    start?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies problems, conditions, issues, or concerns the goal is intended to address.
     */
    addresses?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * Indicates what should be done and within what timeframe.
     */
    target?: fhir.PlanDefinitionGoalTargetArgs[] | undefined;
}
/**
 * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export declare class PlanDefinitionGoal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates a category the goal falls within.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * If no code is available, use CodeableConcept.text.
     */
    description: fhir.CodeableConcept | null;
    /**
     * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * The event after which the goal should begin being pursued.
     */
    start?: fhir.CodeableConcept | undefined;
    /**
     * Identifies problems, conditions, issues, or concerns the goal is intended to address.
     */
    addresses: fhir.CodeableConcept[];
    /**
     * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
     */
    documentation: fhir.RelatedArtifact[];
    /**
     * Indicates what should be done and within what timeframe.
     */
    target: fhir.PlanDefinitionGoalTarget[];
    /**
     * Default constructor for PlanDefinitionGoal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionGoalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionActionCondition type.
 */
export interface PlanDefinitionActionConditionArgs extends fhir.BackboneElementArgs {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe when enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The media type of the language for the expression.
     */
    language?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.expression
     */
    _expression?: fhir.FhirElementArgs;
}
/**
 * An expression that describes applicability criteria, or start/stop conditions for the action.
 */
export declare class PlanDefinitionActionCondition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe when enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | null;
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The media type of the language for the expression.
     */
    language?: fhir.FhirString | undefined;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Default constructor for PlanDefinitionActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionActionRelatedAction type.
 */
export interface PlanDefinitionActionRelatedActionArgs extends fhir.BackboneElementArgs {
    /**
     * The element id of the related action.
     */
    actionId: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.relatedAction.actionId
     */
    _actionId?: fhir.FhirElementArgs;
    /**
     * The relationship of this action to the related action.
     */
    relationship: fhir.FhirCode<ActionRelationshipTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.relatedAction.relationship
     */
    _relationship?: fhir.FhirElementArgs;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offset?: fhir.Duration | fhir.Range | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.DurationArgs | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.RangeArgs | undefined;
}
/**
 * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
 */
export declare class PlanDefinitionActionRelatedAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The element id of the related action.
     */
    actionId: fhir.FhirId | null;
    /**
     * The relationship of this action to the related action.
     */
    relationship: fhir.FhirCode<ActionRelationshipTypeCodeType> | null;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offset?: (fhir.Duration | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PlanDefinition.action.relatedAction.offset[x]
     */
    protected static readonly _fts_offsetIsChoice: true;
    /**
     * Default constructor for PlanDefinitionActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionRelatedActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionActionParticipant type.
 */
export interface PlanDefinitionActionParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * The type of participant in the action.
     */
    type: fhir.FhirCode<ActionParticipantTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.participant.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Indicates who should participate in performing the action described.
 */
export declare class PlanDefinitionActionParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of participant in the action.
     */
    type: fhir.FhirCode<ActionParticipantTypeCodeType> | null;
    /**
     * The role the participant should play in performing the described action.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for PlanDefinitionActionParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionActionDynamicValue type.
 */
export interface PlanDefinitionActionDynamicValueArgs extends fhir.BackboneElementArgs {
    /**
     * A brief, natural language description of the intended semantics of the dynamic value.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The media type of the language for the expression.
     */
    language?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.expression
     */
    _expression?: fhir.FhirElementArgs;
}
/**
 * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
 */
export declare class PlanDefinitionActionDynamicValue extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A brief, natural language description of the intended semantics of the dynamic value.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
     */
    path?: fhir.FhirString | undefined;
    /**
     * The media type of the language for the expression.
     */
    language?: fhir.FhirString | undefined;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Default constructor for PlanDefinitionActionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionDynamicValueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionAction type.
 */
export interface PlanDefinitionActionArgs extends fhir.BackboneElementArgs {
    /**
     * A user-visible label for the action.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElementArgs;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This is different than the clinical evidence documentation, it's an actual business description of the reason for performing the action.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
     */
    goalId?: fhir.FhirId[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.goalId
     */
    _goalId?: (fhir.FhirElementArgs | null)[];
    /**
     * A description of when the action should be triggered.
     */
    triggerDefinition?: fhir.TriggerDefinitionArgs[] | undefined;
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the action.
     */
    condition?: fhir.PlanDefinitionActionConditionArgs[] | undefined;
    /**
     * Defines input data requirements for the action.
     */
    input?: fhir.DataRequirementArgs[] | undefined;
    /**
     * Defines the outputs of the action, if any.
     */
    output?: fhir.DataRequirementArgs[] | undefined;
    /**
     * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
     */
    relatedAction?: fhir.PlanDefinitionActionRelatedActionArgs[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timing?: fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhir.DurationArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhir.RangeArgs | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.PlanDefinitionActionParticipantArgs[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.groupingBehavior
     */
    _groupingBehavior?: fhir.FhirElementArgs;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.selectionBehavior
     */
    _selectionBehavior?: fhir.FhirElementArgs;
    /**
     * Defines the requiredness behavior for the action.
     */
    requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.requiredBehavior
     */
    _requiredBehavior?: fhir.FhirElementArgs;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.precheckBehavior
     */
    _precheckBehavior?: fhir.FhirElementArgs;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.FhirElementArgs;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root (~) path can be used to define the entire resource dynamically.
     */
    definition?: fhir.ReferenceArgs | undefined;
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: fhir.ReferenceArgs | undefined;
    /**
     * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
     */
    dynamicValue?: fhir.PlanDefinitionActionDynamicValueArgs[] | undefined;
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action?: fhir.PlanDefinitionActionArgs[] | undefined;
}
/**
 * An action to be taken as part of the plan.
 */
export declare class PlanDefinitionAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A user-visible label for the action.
     */
    label?: fhir.FhirString | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | undefined;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
     */
    code: fhir.CodeableConcept[];
    /**
     * This is different than the clinical evidence documentation, it's an actual business description of the reason for performing the action.
     */
    reason: fhir.CodeableConcept[];
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation: fhir.RelatedArtifact[];
    /**
     * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
     */
    goalId: fhir.FhirId[];
    /**
     * A description of when the action should be triggered.
     */
    triggerDefinition: fhir.TriggerDefinition[];
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the action.
     */
    condition: fhir.PlanDefinitionActionCondition[];
    /**
     * Defines input data requirements for the action.
     */
    input: fhir.DataRequirement[];
    /**
     * Defines the outputs of the action, if any.
     */
    output: fhir.DataRequirement[];
    /**
     * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
     */
    relatedAction: fhir.PlanDefinitionActionRelatedAction[];
    /**
     * An optional value describing when the action should be performed.
     */
    timing?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PlanDefinition.action.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant: fhir.PlanDefinitionActionParticipant[];
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.Coding | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType> | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType> | undefined;
    /**
     * Defines the requiredness behavior for the action.
     */
    requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType> | undefined;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType> | undefined;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType> | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root (~) path can be used to define the entire resource dynamically.
     */
    definition?: fhir.Reference | undefined;
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: fhir.Reference | undefined;
    /**
     * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
     */
    dynamicValue: fhir.PlanDefinitionActionDynamicValue[];
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action: fhir.PlanDefinitionAction[];
    /**
     * Default constructor for PlanDefinitionAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinition type.
 */
export interface PlanDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PlanDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The type of asset the plan definition represents, e.g. an order set, protocol, or event-condition-action rule.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired plan definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of plan definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental plan definition in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the plan definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A detailed description of how the asset is used from a clinical perspective.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.
     */
    contributor?: fhir.ContributorArgs[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library?: fhir.ReferenceArgs[] | undefined;
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal?: fhir.PlanDefinitionGoalArgs[] | undefined;
    /**
     * An action to be taken as part of the plan.
     */
    action?: fhir.PlanDefinitionActionArgs[] | undefined;
}
/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 */
export declare class PlanDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "PlanDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The type of asset the plan definition represents, e.g. an order set, protocol, or event-condition-action rule.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired plan definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of plan definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental plan definition in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the plan definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A detailed description of how the asset is used from a clinical perspective.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic: fhir.CodeableConcept[];
    /**
     * A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.
     */
    contributor: fhir.Contributor[];
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library: fhir.Reference[];
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal: fhir.PlanDefinitionGoal[];
    /**
     * An action to be taken as part of the plan.
     */
    action: fhir.PlanDefinitionAction[];
    /**
     * Default constructor for PlanDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=PlanDefinition.d.ts.map