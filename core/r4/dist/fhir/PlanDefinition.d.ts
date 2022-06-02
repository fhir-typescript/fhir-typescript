import * as fhir from '../fhir.js';
import { GoalPriorityCodingType } from '../fhirValueSets/GoalPriorityCodings.js';
import { ActionConditionKindCodeType } from '../fhirValueSets/ActionConditionKindCodes.js';
import { ActionRelationshipTypeCodeType } from '../fhirValueSets/ActionRelationshipTypeCodes.js';
import { ActionParticipantTypeCodeType } from '../fhirValueSets/ActionParticipantTypeCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
import { ActionTypeCodingType } from '../fhirValueSets/ActionTypeCodings.js';
import { ActionGroupingBehaviorCodeType } from '../fhirValueSets/ActionGroupingBehaviorCodes.js';
import { ActionSelectionBehaviorCodeType } from '../fhirValueSets/ActionSelectionBehaviorCodes.js';
import { ActionRequiredBehaviorCodeType } from '../fhirValueSets/ActionRequiredBehaviorCodes.js';
import { ActionPrecheckBehaviorCodeType } from '../fhirValueSets/ActionPrecheckBehaviorCodes.js';
import { ActionCardinalityBehaviorCodeType } from '../fhirValueSets/ActionCardinalityBehaviorCodes.js';
import { PlanDefinitionTypeCodingType } from '../fhirValueSets/PlanDefinitionTypeCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the PlanDefinitionGoalTarget type.
 */
export interface PlanDefinitionGoalTargetArgs extends fhir.BackboneElementArgs {
    /**
     * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConceptArgs | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detail?: fhir.Quantity | fhir.Range | fhir.CodeableConcept | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
     */
    detailRange?: fhir.RangeArgs | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
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
     * The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
     */
    measure?: fhir.CodeableConcept | undefined;
    /**
     * The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Preferred-bound Value Set for priority (PlanDefinition.goal.priority)
     */
    static get priorityPreferredCodings(): GoalPriorityCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionActionCondition type.
 */
export interface PlanDefinitionActionConditionArgs extends fhir.BackboneElementArgs {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.condition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.ExpressionArgs | undefined;
}
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
 */
export declare class PlanDefinitionActionCondition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | null;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for PlanDefinitionActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for kind (PlanDefinition.action.condition.kind)
     */
    static get kindRequiredCodes(): {
        readonly Applicability: "applicability";
        readonly Start: "start";
        readonly Stop: "stop";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Required-bound Value Set for relationship (PlanDefinition.action.relatedAction.relationship)
     */
    static get relationshipRequiredCodes(): {
        readonly After: "after";
        readonly AfterEnd: "after-end";
        readonly AfterStart: "after-start";
        readonly Before: "before";
        readonly BeforeEnd: "before-end";
        readonly BeforeStart: "before-start";
        readonly Concurrent: "concurrent";
        readonly ConcurrentWithEnd: "concurrent-with-end";
        readonly ConcurrentWithStart: "concurrent-with-start";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Required-bound Value Set for type (PlanDefinition.action.participant.type)
     */
    static get typeRequiredCodes(): {
        readonly Device: "device";
        readonly Patient: "patient";
        readonly Practitioner: "practitioner";
        readonly RelatedPerson: "related-person";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionActionDynamicValue type.
 */
export interface PlanDefinitionActionDynamicValueArgs extends fhir.BackboneElementArgs {
    /**
     * To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.dynamicValue.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.ExpressionArgs | undefined;
}
/**
 * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 */
export declare class PlanDefinitionActionDynamicValue extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | undefined;
    /**
     * The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
    /**
     * Default constructor for PlanDefinitionActionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionActionDynamicValueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PlanDefinitionAction type.
 */
export interface PlanDefinitionActionArgs extends fhir.BackboneElementArgs {
    /**
     * A user-visible prefix for the action.
     */
    prefix?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.prefix
     */
    _prefix?: fhir.FhirElementArgs;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
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
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * A description of when the action should be triggered.
     */
    trigger?: fhir.TriggerDefinitionArgs[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
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
    timing?: fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingAge?: fhir.AgeArgs | undefined;
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
    type?: fhir.CodeableConceptArgs | undefined;
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
     * Defines the required behavior for the action.
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
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definition?: fhir.FhirCanonical | fhir.FhirUri | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definitionUri?: fhir.FhirUri | string | undefined;
    /**
     * Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    transform?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.action.transform
     */
    _transform?: fhir.FhirElementArgs;
    /**
     * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    dynamicValue?: fhir.PlanDefinitionActionDynamicValueArgs[] | undefined;
    /**
     * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
     */
    action?: fhir.PlanDefinitionActionArgs[] | undefined;
}
/**
 * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
 */
export declare class PlanDefinitionAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A user-visible prefix for the action.
     */
    prefix?: fhir.FhirString | undefined;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | undefined;
    /**
     * A brief description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | undefined;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
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
     * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
     * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PlanDefinition.action.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * A description of when the action should be triggered.
     */
    trigger: fhir.TriggerDefinition[];
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
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
    timing?: (fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing) | undefined;
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
    type?: fhir.CodeableConcept | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType> | undefined;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType> | undefined;
    /**
     * Defines the required behavior for the action.
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
     * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
     */
    definition?: (fhir.FhirCanonical | fhir.FhirUri) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PlanDefinition.action.definition[x]
     */
    protected static readonly _fts_definitionIsChoice: true;
    /**
     * Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
     */
    transform?: fhir.FhirCanonical | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
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
     * Required-bound Value Set for priority (PlanDefinition.action.priority)
     */
    static get priorityRequiredCodes(): {
        readonly ASAP: "asap";
        readonly Routine: "routine";
        readonly STAT: "stat";
        readonly Urgent: "urgent";
    };
    /**
     * Extensible-bound Value Set for type (PlanDefinition.action.type)
     */
    static get typeExtensibleCodings(): ActionTypeCodingType;
    /**
     * Required-bound Value Set for groupingBehavior (PlanDefinition.action.groupingBehavior)
     */
    static get groupingBehaviorRequiredCodes(): {
        readonly LogicalGroup: "logical-group";
        readonly SentenceGroup: "sentence-group";
        readonly VisualGroup: "visual-group";
    };
    /**
     * Required-bound Value Set for selectionBehavior (PlanDefinition.action.selectionBehavior)
     */
    static get selectionBehaviorRequiredCodes(): {
        readonly All: "all";
        readonly AllOrNone: "all-or-none";
        readonly Any: "any";
        readonly AtMostOne: "at-most-one";
        readonly ExactlyOne: "exactly-one";
        readonly OneOrMore: "one-or-more";
    };
    /**
     * Required-bound Value Set for requiredBehavior (PlanDefinition.action.requiredBehavior)
     */
    static get requiredBehaviorRequiredCodes(): {
        readonly Could: "could";
        readonly Must: "must";
        readonly MustUnlessDocumented: "must-unless-documented";
    };
    /**
     * Required-bound Value Set for precheckBehavior (PlanDefinition.action.precheckBehavior)
     */
    static get precheckBehaviorRequiredCodes(): {
        readonly No: "no";
        readonly Yes: "yes";
    };
    /**
     * Required-bound Value Set for cardinalityBehavior (PlanDefinition.action.cardinalityBehavior)
     */
    static get cardinalityBehaviorRequiredCodes(): {
        readonly Multiple: "multiple";
        readonly Single: "single";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
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
     * An explanatory or alternate title for the plan definition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.subtitle
     */
    _subtitle?: fhir.FhirElementArgs;
    /**
     * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the plan definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A detailed description of how the plan definition is used from a clinical perspective.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this date follows the original approval date.
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
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetailArgs[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: PlanDefinition.library
     */
    _library?: (fhir.FhirElementArgs | null)[];
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal?: fhir.PlanDefinitionGoalArgs[] | undefined;
    /**
     * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * An explanatory or alternate title for the plan definition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of plan definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * A code or group definition that describes the intended subject of the plan definition.
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PlanDefinition.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the plan definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A detailed description of how the plan definition is used from a clinical perspective.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
     */
    topic: fhir.CodeableConcept[];
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author: fhir.ContactDetail[];
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor: fhir.ContactDetail[];
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer: fhir.ContactDetail[];
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser: fhir.ContactDetail[];
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * A reference to a Library resource containing any formal logic used by the plan definition.
     */
    library: fhir.FhirCanonical[];
    /**
     * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
     */
    goal: fhir.PlanDefinitionGoal[];
    /**
     * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
     */
    action: fhir.PlanDefinitionAction[];
    /**
     * Default constructor for PlanDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PlanDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (PlanDefinition.type)
     */
    static get typeExtensibleCodings(): PlanDefinitionTypeCodingType;
    /**
     * Required-bound Value Set for status (PlanDefinition.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=PlanDefinition.d.ts.map