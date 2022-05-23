import * as fhir from '../fhirJson.js';
/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export interface RequestGroupActionCondition extends fhir.BackboneElement {
    /**
     * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
     */
    kind: 'applicability' | 'start' | 'stop' | null;
    /**
     * Extended properties for primitive element: RequestGroup.action.condition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.Expression | undefined;
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
     * A user-visible prefix for the action.
     */
    prefix?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.prefix
     */
    _prefix?: fhir.FhirElement;
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
     * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
     */
    textEquivalent?: string | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.textEquivalent
     */
    _textEquivalent?: fhir.FhirElement;
    /**
     * Indicates how quickly the action should be addressed with respect to other actions.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.action.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
     */
    documentation?: fhir.RelatedArtifact[] | undefined;
    /**
     * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
     */
    condition?: fhir.RequestGroupActionCondition[] | undefined;
    /**
     * A relationship to another action such as "before" or "30-60 minutes after start of".
     */
    relatedAction?: fhir.RequestGroupActionRelatedAction[] | undefined;
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
    timingAge?: fhir.Age | undefined;
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
    participant?: fhir.Reference[] | undefined;
    /**
     * The type of action to perform (create, update, remove).
     */
    type?: fhir.CodeableConcept | undefined;
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
     * Defines expectations around whether an action is required.
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
    action?: fhir.RequestGroupAction[] | undefined;
}
/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroup extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "RequestGroup";
    /**
     * Allows a service to provide a unique, business identifier for the request.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElement | null)[];
    /**
     * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: RequestGroup.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElement | null)[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.Reference[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
     */
    status: 'active' | 'completed' | 'draft' | 'entered-in-error' | 'on-hold' | 'revoked' | 'unknown' | null;
    /**
     * Extended properties for primitive element: RequestGroup.status
     */
    _status?: fhir.FhirElement;
    /**
     * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
     */
    intent: 'directive' | 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
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
     * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The subject for which the request group was created.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Describes the context of the request group, if any.
     */
    encounter?: fhir.Reference | undefined;
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
     * Describes the reason for the request group in coded or textual form.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request group.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    action?: fhir.RequestGroupAction[] | undefined;
}
//# sourceMappingURL=RequestGroup.d.ts.map