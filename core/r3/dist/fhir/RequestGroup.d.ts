import * as fhir from '../fhir.js';
import { ActionConditionKindCodeType } from '../fhirValueSets/ActionConditionKindCodes.js';
import { ActionRelationshipTypeCodeType } from '../fhirValueSets/ActionRelationshipTypeCodes.js';
import { ActionGroupingBehaviorCodeType } from '../fhirValueSets/ActionGroupingBehaviorCodes.js';
import { ActionSelectionBehaviorCodeType } from '../fhirValueSets/ActionSelectionBehaviorCodes.js';
import { ActionRequiredBehaviorCodeType } from '../fhirValueSets/ActionRequiredBehaviorCodes.js';
import { ActionPrecheckBehaviorCodeType } from '../fhirValueSets/ActionPrecheckBehaviorCodes.js';
import { ActionCardinalityBehaviorCodeType } from '../fhirValueSets/ActionCardinalityBehaviorCodes.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the RequestGroupActionCondition type.
 */
export interface RequestGroupActionConditionArgs extends fhir.BackboneElementArgs {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe when enter/exit criteria for an action.
     */
    kind: fhir.FhirCode<ActionConditionKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The media type of the language for the expression.
     */
    language?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.expression
     */
    _expression?: fhir.FhirElementArgs;
}
/**
 * An expression that describes applicability criteria, or start/stop conditions for the action.
 */
export declare class RequestGroupActionCondition extends fhir.BackboneElement {
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
     * Default constructor for RequestGroupActionCondition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionConditionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RequestGroupActionRelatedAction type.
 */
export interface RequestGroupActionRelatedActionArgs extends fhir.BackboneElementArgs {
    /**
     * The element id of the action this is related to.
     */
    actionId: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.actionId
     */
    _actionId?: fhir.FhirElementArgs;
    /**
     * The relationship of this action to the related action.
     */
    relationship: fhir.FhirCode<ActionRelationshipTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.relationship
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
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export declare class RequestGroupActionRelatedAction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The element id of the action this is related to.
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
     * Internal flag to properly serialize choice-type element RequestGroup.action.relatedAction.offset[x]
     */
    protected static readonly _fts_offsetIsChoice: true;
    /**
     * Default constructor for RequestGroupActionRelatedAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionRelatedActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RequestGroupAction type.
 */
export interface RequestGroupActionArgs extends fhir.BackboneElementArgs {
    /**
     * A user-visible label for the action.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * The title of the action displayed to a user.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
     */
    textEquivalent?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElementArgs;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the action.
     */
    condition?: fhir.RequestGroupActionConditionArgs[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.RequestGroupActionRelatedActionArgs[] | undefined;
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
     * The participant that should perform or be responsible for this action.
     */
    participant?: fhir.ReferenceArgs[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: fhir.FhirCode<ActionGroupingBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.groupingBehavior
     */
    _groupingBehavior?: fhir.FhirElementArgs;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: fhir.FhirCode<ActionSelectionBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.selectionBehavior
     */
    _selectionBehavior?: fhir.FhirElementArgs;
    /**
     * Defines the requiredness behavior for the action.
     */
    requiredBehavior?: fhir.FhirCode<ActionRequiredBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.requiredBehavior
     */
    _requiredBehavior?: fhir.FhirElementArgs;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: fhir.FhirCode<ActionPrecheckBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.precheckBehavior
     */
    _precheckBehavior?: fhir.FhirElementArgs;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: fhir.FhirCode<ActionCardinalityBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.FhirElementArgs;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.ReferenceArgs | undefined;
    /**
     * Sub actions.
     */
    action?: fhir.RequestGroupActionArgs[] | undefined;
}
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export declare class RequestGroupAction extends fhir.BackboneElement {
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
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation: fhir.RelatedArtifact[];
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the action.
     */
    condition: fhir.RequestGroupActionCondition[];
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction: fhir.RequestGroupActionRelatedAction[];
    /**
     * An optional value describing when the action should be performed.
     */
    timing?: (fhir.FhirDateTime | fhir.Period | fhir.Duration | fhir.Range | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RequestGroup.action.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant: fhir.Reference[];
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
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.Reference | undefined;
    /**
     * Sub actions.
     */
    action: fhir.RequestGroupAction[];
    /**
     * Default constructor for RequestGroupAction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupActionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RequestGroup type.
 */
export interface RequestGroupArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup" | undefined;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.RequestGroupActionArgs[] | undefined;
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export declare class RequestGroup extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup";
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier: fhir.Identifier[];
    /**
     * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    definition: fhir.Reference[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces: fhir.Reference[];
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    context?: fhir.Reference | undefined;
    /**
     * Indicates when the request group was created.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.Reference | undefined;
    /**
     * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RequestGroup.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note: fhir.Annotation[];
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action: fhir.RequestGroupAction[];
    /**
     * Default constructor for RequestGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RequestGroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=RequestGroup.d.ts.map