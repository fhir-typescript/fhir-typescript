import * as fhir from '../fhirJson.js';
/**
 * An expression that describes applicability criteria, or start/stop conditions for the action.
 */
export interface RequestGroupActionCondition extends fhir.BackboneElement {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe when enter/exit criteria for an action.
     */
    kind: 'applicability' | 'start' | 'stop' | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.description
     */
    _description?: fhir.FhirElement;
    /**
     * The media type of the language for the expression.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.language
     */
    _language?: fhir.FhirElement;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.expression
     */
    _expression?: fhir.FhirElement;
}
/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export interface RequestGroupActionRelatedAction extends fhir.BackboneElement {
    /**
     * The element id of the action this is related to.
     */
    actionId: string | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.actionId
     */
    _actionId?: fhir.FhirElement;
    /**
     * The relationship of this action to the related action.
     */
    relationship: 'after' | 'after-end' | 'after-start' | 'before' | 'before-end' | 'before-start' | 'concurrent' | 'concurrent-with-end' | 'concurrent-with-start' | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.relatedAction.relationship
     */
    _relationship?: fhir.FhirElement;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetDuration?: fhir.Duration | undefined;
    /**
     * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
     */
    offsetRange?: fhir.Range | undefined;
}
/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export interface RequestGroupAction extends fhir.BackboneElement {
    /**
     * A user-visible label for the action.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.label
     */
    _label?: fhir.FhirElement;
    /**
     * The title of the action displayed to a user.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.title
     */
    _title?: fhir.FhirElement;
    /**
     * A short description of the action used to provide a summary to display to the user.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.description
     */
    _description?: fhir.FhirElement;
    /**
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElement;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
     */
    code?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * An expression that describes applicability criteria, or start/stop conditions for the action.
     */
    condition?: (fhir.RequestGroupActionCondition | null)[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: (fhir.RequestGroupActionRelatedAction | null)[] | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.timing[x]
     */
    _timingDateTime?: fhir.FhirElement;
    /**
     * An optional value describing when the action should be performed.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingDuration?: fhir.Duration | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingRange?: fhir.Range | undefined;
    /**
     * An optional value describing when the action should be performed.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The participant that should perform or be responsible for this action.
     */
    participant?: (fhir.Reference | null)[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.Coding | undefined;
    /**
     * Defines the grouping behavior for the action and its children.
     */
    groupingBehavior?: 'logical-group' | 'sentence-group' | 'visual-group' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.groupingBehavior
     */
    _groupingBehavior?: fhir.FhirElement;
    /**
     * Defines the selection behavior for the action and its children.
     */
    selectionBehavior?: 'all' | 'all-or-none' | 'any' | 'at-most-one' | 'exactly-one' | 'one-or-more' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.selectionBehavior
     */
    _selectionBehavior?: fhir.FhirElement;
    /**
     * Defines the requiredness behavior for the action.
     */
    requiredBehavior?: 'could' | 'must' | 'must-unless-documented' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.requiredBehavior
     */
    _requiredBehavior?: fhir.FhirElement;
    /**
     * Defines whether the action should usually be preselected.
     */
    precheckBehavior?: 'no' | 'yes' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.precheckBehavior
     */
    _precheckBehavior?: fhir.FhirElement;
    /**
     * Defines whether the action can be selected multiple times.
     */
    cardinalityBehavior?: 'multiple' | 'single' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.cardinalityBehavior
     */
    _cardinalityBehavior?: fhir.FhirElement;
    /**
     * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
     */
    resource?: fhir.Reference | undefined;
    /**
     * Sub actions.
     */
    action?: (fhir.RequestGroupAction | null)[] | undefined;
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroup extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup" | null;
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: (fhir.Reference | null)[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'completed' | 'draft' | 'entered-in-error' | 'suspended' | 'unknown' | null;
    /**
     * Extended properties for primitive element: RequestGroup.status
     */
    _status?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
    /**
     * Extended properties for primitive element: RequestGroup.intent
     */
    _intent?: fhir.FhirElement;
    /**
     * Indicates how quickly the request should be addressed with respect to other requests.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.priority
     */
    _priority?: fhir.FhirElement;
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
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
    /**
     * Provides a reference to the author of the request group.
     */
    author?: fhir.Reference | undefined;
    /**
     * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: (fhir.RequestGroupAction | null)[] | undefined;
}
//# sourceMappingURL=RequestGroup.d.ts.map