import * as fhir from '../fhirJson.js';
/**
 * The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
 */
export interface SubscriptionTopicResourceTriggerQueryCriteria extends fhir.BackboneElement {
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    previous?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.previous
     */
    _previous?: fhir.FhirElement;
    /**
     * For "create" interactions, should the "previous" criteria count as an automatic pass or an automatic fail.
     */
    resultForCreate?: 'test-fails' | 'test-passes' | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate
     */
    _resultForCreate?: fhir.FhirElement;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    current?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.current
     */
    _current?: fhir.FhirElement;
    /**
     * For "delete" interactions, should the "current" criteria count as an automatic pass or an automatic fail.
     */
    resultForDelete?: 'test-fails' | 'test-passes' | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete
     */
    _resultForDelete?: fhir.FhirElement;
    /**
     * If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true.
     */
    requireBoth?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth
     */
    _requireBoth?: fhir.FhirElement;
}
/**
 * A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
 */
export interface SubscriptionTopicResourceTrigger extends fhir.BackboneElement {
    /**
     * Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.description
     */
    _description?: fhir.FhirElement;
    /**
     * URL of the Resource that is the type used in this resource trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: string | null;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE).
     */
    supportedInteraction?: (('create' | 'delete' | 'update') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.supportedInteraction
     */
    _supportedInteraction?: (fhir.FhirElement | null)[];
    /**
     * The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
     */
    queryCriteria?: fhir.SubscriptionTopicResourceTriggerQueryCriteria | undefined;
    /**
     * FHIRPath expression with %previous and %current vars.
     */
    fhirPathCriteria?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.fhirPathCriteria
     */
    _fhirPathCriteria?: fhir.FhirElement;
}
/**
 * Event definition which can be used to trigger the SubscriptionTopic.
 */
export interface SubscriptionTopicEventTrigger extends fhir.BackboneElement {
    /**
     * Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.eventTrigger.description
     */
    _description?: fhir.FhirElement;
    /**
     * A well-defined event which can be used to trigger notifications from the SubscriptionTopic.
     */
    event: fhir.CodeableConcept | null;
    /**
     * URL of the Resource that is the focus type used in this event trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: string | null;
    /**
     * Extended properties for primitive element: SubscriptionTopic.eventTrigger.resource
     */
    _resource?: fhir.FhirElement;
}
/**
 * List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
 */
export interface SubscriptionTopicCanFilterBy extends fhir.BackboneElement {
    /**
     * Description of how this filtering parameter is intended to be used.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.description
     */
    _description?: fhir.FhirElement;
    /**
     * URL of the Resource that is the type used in this filter. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
     */
    filterParameter: string | null;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.filterParameter
     */
    _filterParameter?: fhir.FhirElement;
    /**
     * Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
     */
    filterDefinition?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.filterDefinition
     */
    _filterDefinition?: fhir.FhirElement;
    /**
     * Allowable operators to apply when determining matches (Search Modifiers).  If the filterParameter is a SearchParameter, this list of modifiers SHALL be a strict subset of the modifiers defined on that SearchParameter.
     */
    modifier?: (('=' | 'above' | 'ap' | 'below' | 'eb' | 'eq' | 'ge' | 'gt' | 'in' | 'le' | 'lt' | 'ne' | 'not-in' | 'of-type' | 'sa') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.modifier
     */
    _modifier?: (fhir.FhirElement | null)[];
}
/**
 * List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
 */
export interface SubscriptionTopicNotificationShape extends fhir.BackboneElement {
    /**
     * URL of the Resource that is the type used in this shape. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: string | null;
    /**
     * Extended properties for primitive element: SubscriptionTopic.notificationShape.resource
     */
    _resource?: fhir.FhirElement;
    /**
     * Search-style _include directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
     */
    include?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.notificationShape.include
     */
    _include?: (fhir.FhirElement | null)[];
    /**
     * Search-style _revinclude directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
     */
    revInclude?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.notificationShape.revInclude
     */
    _revInclude?: (fhir.FhirElement | null)[];
}
/**
 * Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic.
 */
export interface SubscriptionTopic extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SubscriptionTopic" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: SubscriptionTopic.url
     */
    _url?: fhir.FhirElement;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be multiple different instances of a subscription topic that have the same identifier but different versions.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.version
     */
    _version?: fhir.FhirElement;
    /**
     * A short, descriptive, user-friendly title for the SubscriptionTopic, for example, "admission".
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.title
     */
    _title?: fhir.FhirElement;
    /**
     * The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic.
     */
    derivedFrom?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.derivedFrom
     */
    _derivedFrom?: (fhir.FhirElement | null)[];
    /**
     * A nominal state-transition diagram can be found in the [[definition.html#statemachine | Definition pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: SubscriptionTopic.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of SubscriptionTopic that are appropriate for use vs. not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * For draft definitions, indicates the date of initial creation.  For active definitions, represents the date of activation.  For withdrawn definitions, indicates the date of withdrawal.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.date
     */
    _date?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the Topic was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple usageContexts are specified, there is no expectation for whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * A jurisdiction in which the Topic is intended to be used.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the Topic.  Rather it is for traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this Topic.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The date may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a SubscriptionTopic  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 would be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
     */
    resourceTrigger?: (fhir.SubscriptionTopicResourceTrigger | null)[] | undefined;
    /**
     * Event definition which can be used to trigger the SubscriptionTopic.
     */
    eventTrigger?: (fhir.SubscriptionTopicEventTrigger | null)[] | undefined;
    /**
     * List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
     */
    canFilterBy?: (fhir.SubscriptionTopicCanFilterBy | null)[] | undefined;
    /**
     * List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
     */
    notificationShape?: (fhir.SubscriptionTopicNotificationShape | null)[] | undefined;
}
//# sourceMappingURL=SubscriptionTopic.d.ts.map