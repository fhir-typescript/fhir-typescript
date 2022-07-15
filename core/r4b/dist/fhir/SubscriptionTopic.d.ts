import * as fhir from '../fhir.js';
import { SubscriptiontopicCrBehaviorCodeType } from '../fhirValueSets/SubscriptiontopicCrBehaviorCodes.js';
import { InteractionTriggerCodeType } from '../fhirValueSets/InteractionTriggerCodes.js';
import { SubscriptionSearchModifierCodeType } from '../fhirValueSets/SubscriptionSearchModifierCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the SubscriptionTopicResourceTriggerQueryCriteria type.
 */
export interface SubscriptionTopicResourceTriggerQueryCriteriaArgs extends fhir.BackboneElementArgs {
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    previous?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.previous
     */
    _previous?: fhir.FhirElementArgs;
    /**
     * For "create" interactions, should the "previous" criteria count as an automatic pass or an automatic fail.
     */
    resultForCreate?: fhir.FhirCode<SubscriptiontopicCrBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate
     */
    _resultForCreate?: fhir.FhirElementArgs;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    current?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.current
     */
    _current?: fhir.FhirElementArgs;
    /**
     * For "delete" interactions, should the "current" criteria count as an automatic pass or an automatic fail.
     */
    resultForDelete?: fhir.FhirCode<SubscriptiontopicCrBehaviorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete
     */
    _resultForDelete?: fhir.FhirElementArgs;
    /**
     * If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true.
     */
    requireBoth?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth
     */
    _requireBoth?: fhir.FhirElementArgs;
}
/**
 * The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
 */
export declare class SubscriptionTopicResourceTriggerQueryCriteria extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    previous?: fhir.FhirString | undefined;
    /**
     * For "create" interactions, should the "previous" criteria count as an automatic pass or an automatic fail.
     */
    resultForCreate?: fhir.FhirCode<SubscriptiontopicCrBehaviorCodeType> | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    current?: fhir.FhirString | undefined;
    /**
     * For "delete" interactions, should the "current" criteria count as an automatic pass or an automatic fail.
     */
    resultForDelete?: fhir.FhirCode<SubscriptiontopicCrBehaviorCodeType> | undefined;
    /**
     * If set to true, both current and previous criteria must evaluate true to  trigger a notification for this topic.  Otherwise a notification for this topic will be triggered if either one evaluates to true.
     */
    requireBoth?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for SubscriptionTopicResourceTriggerQueryCriteria - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionTopicResourceTriggerQueryCriteriaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubscriptionTopicResourceTrigger type.
 */
export interface SubscriptionTopicResourceTriggerArgs extends fhir.BackboneElementArgs {
    /**
     * Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * URL of the Resource that is the type used in this resource trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.resource
     */
    _resource?: fhir.FhirElementArgs;
    /**
     * The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE).
     */
    supportedInteraction?: fhir.FhirCode<InteractionTriggerCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.supportedInteraction
     */
    _supportedInteraction?: (fhir.FhirElementArgs | null)[];
    /**
     * The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
     */
    queryCriteria?: fhir.SubscriptionTopicResourceTriggerQueryCriteriaArgs | undefined;
    /**
     * FHIRPath expression with %previous and %current vars.
     */
    fhirPathCriteria?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.resourceTrigger.fhirPathCriteria
     */
    _fhirPathCriteria?: fhir.FhirElementArgs;
}
/**
 * A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
 */
export declare class SubscriptionTopicResourceTrigger extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * URL of the Resource that is the type used in this resource trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: fhir.FhirUri | null;
    /**
     * The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE).
     */
    supportedInteraction: fhir.FhirCode<InteractionTriggerCodeType>[];
    /**
     * The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
     */
    queryCriteria?: fhir.SubscriptionTopicResourceTriggerQueryCriteria | undefined;
    /**
     * FHIRPath expression with %previous and %current vars.
     */
    fhirPathCriteria?: fhir.FhirString | undefined;
    /**
     * Default constructor for SubscriptionTopicResourceTrigger - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionTopicResourceTriggerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubscriptionTopicEventTrigger type.
 */
export interface SubscriptionTopicEventTriggerArgs extends fhir.BackboneElementArgs {
    /**
     * Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.eventTrigger.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A well-defined event which can be used to trigger notifications from the SubscriptionTopic.
     */
    event: fhir.CodeableConceptArgs | null;
    /**
     * URL of the Resource that is the focus type used in this event trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.eventTrigger.resource
     */
    _resource?: fhir.FhirElementArgs;
}
/**
 * Event definition which can be used to trigger the SubscriptionTopic.
 */
export declare class SubscriptionTopicEventTrigger extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * A well-defined event which can be used to trigger notifications from the SubscriptionTopic.
     */
    event: fhir.CodeableConcept | null;
    /**
     * URL of the Resource that is the focus type used in this event trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: fhir.FhirUri | null;
    /**
     * Default constructor for SubscriptionTopicEventTrigger - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionTopicEventTriggerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubscriptionTopicCanFilterBy type.
 */
export interface SubscriptionTopicCanFilterByArgs extends fhir.BackboneElementArgs {
    /**
     * Description of how this filtering parameter is intended to be used.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * URL of the Resource that is the type used in this filter. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.resource
     */
    _resource?: fhir.FhirElementArgs;
    /**
     * Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
     */
    filterParameter: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.filterParameter
     */
    _filterParameter?: fhir.FhirElementArgs;
    /**
     * Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
     */
    filterDefinition?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.filterDefinition
     */
    _filterDefinition?: fhir.FhirElementArgs;
    /**
     * Allowable operators to apply when determining matches (Search Modifiers).  If the filterParameter is a SearchParameter, this list of modifiers SHALL be a strict subset of the modifiers defined on that SearchParameter.
     */
    modifier?: fhir.FhirCode<SubscriptionSearchModifierCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.canFilterBy.modifier
     */
    _modifier?: (fhir.FhirElementArgs | null)[];
}
/**
 * List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
 */
export declare class SubscriptionTopicCanFilterBy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Description of how this filtering parameter is intended to be used.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * URL of the Resource that is the type used in this filter. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource?: fhir.FhirUri | undefined;
    /**
     * Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
     */
    filterParameter: fhir.FhirString | null;
    /**
     * Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
     */
    filterDefinition?: fhir.FhirUri | undefined;
    /**
     * Allowable operators to apply when determining matches (Search Modifiers).  If the filterParameter is a SearchParameter, this list of modifiers SHALL be a strict subset of the modifiers defined on that SearchParameter.
     */
    modifier: fhir.FhirCode<SubscriptionSearchModifierCodeType>[];
    /**
     * Default constructor for SubscriptionTopicCanFilterBy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionTopicCanFilterByArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubscriptionTopicNotificationShape type.
 */
export interface SubscriptionTopicNotificationShapeArgs extends fhir.BackboneElementArgs {
    /**
     * URL of the Resource that is the type used in this shape. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.notificationShape.resource
     */
    _resource?: fhir.FhirElementArgs;
    /**
     * Search-style _include directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
     */
    include?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.notificationShape.include
     */
    _include?: (fhir.FhirElementArgs | null)[];
    /**
     * Search-style _revinclude directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
     */
    revInclude?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.notificationShape.revInclude
     */
    _revInclude?: (fhir.FhirElementArgs | null)[];
}
/**
 * List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
 */
export declare class SubscriptionTopicNotificationShape extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * URL of the Resource that is the type used in this shape. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see &lt;a href="elementdefinition-definitions.html#ElementDefinition.type.code"&gt;ElementDefinition.type.code&lt;/a&gt;.
     */
    resource: fhir.FhirUri | null;
    /**
     * Search-style _include directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
     */
    include: fhir.FhirString[];
    /**
     * Search-style _revinclude directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
     */
    revInclude: fhir.FhirString[];
    /**
     * Default constructor for SubscriptionTopicNotificationShape - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionTopicNotificationShapeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubscriptionTopic type.
 */
export interface SubscriptionTopicArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubscriptionTopic" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be multiple different instances of a subscription topic that have the same identifier but different versions.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A short, descriptive, user-friendly title for the SubscriptionTopic, for example, "admission".
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic.
     */
    derivedFrom?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.derivedFrom
     */
    _derivedFrom?: (fhir.FhirElementArgs | null)[];
    /**
     * A nominal state-transition diagram can be found in the [[definition.html#statemachine | Definition pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of SubscriptionTopic that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * For draft definitions, indicates the date of initial creation.  For active definitions, represents the date of activation.  For withdrawn definitions, indicates the date of withdrawal.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the Topic was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple usageContexts are specified, there is no expectation for whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * A jurisdiction in which the Topic is intended to be used.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the Topic.  Rather it is for traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this Topic.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The date may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionTopic.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a SubscriptionTopic  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 would be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
     */
    resourceTrigger?: fhir.SubscriptionTopicResourceTriggerArgs[] | undefined;
    /**
     * Event definition which can be used to trigger the SubscriptionTopic.
     */
    eventTrigger?: fhir.SubscriptionTopicEventTriggerArgs[] | undefined;
    /**
     * List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
     */
    canFilterBy?: fhir.SubscriptionTopicCanFilterByArgs[] | undefined;
    /**
     * List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
     */
    notificationShape?: fhir.SubscriptionTopicNotificationShapeArgs[] | undefined;
}
/**
 * Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic.
 */
export declare class SubscriptionTopic extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubscriptionTopic";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be multiple different instances of a subscription topic that have the same identifier but different versions.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A short, descriptive, user-friendly title for the SubscriptionTopic, for example, "admission".
     */
    title?: fhir.FhirString | undefined;
    /**
     * The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic.
     */
    derivedFrom: fhir.FhirCanonical[];
    /**
     * A nominal state-transition diagram can be found in the [[definition.html#statemachine | Definition pattern]] documentation
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of SubscriptionTopic that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * For draft definitions, indicates the date of initial creation.  For active definitions, represents the date of activation.  For withdrawn definitions, indicates the date of withdrawal.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the Topic was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple usageContexts are specified, there is no expectation for whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * A jurisdiction in which the Topic is intended to be used.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the Topic.  Rather it is for traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this Topic.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The date may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a SubscriptionTopic  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 would be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
     */
    resourceTrigger: fhir.SubscriptionTopicResourceTrigger[];
    /**
     * Event definition which can be used to trigger the SubscriptionTopic.
     */
    eventTrigger: fhir.SubscriptionTopicEventTrigger[];
    /**
     * List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
     */
    canFilterBy: fhir.SubscriptionTopicCanFilterBy[];
    /**
     * List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
     */
    notificationShape: fhir.SubscriptionTopicNotificationShape[];
    /**
     * Default constructor for SubscriptionTopic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionTopicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SubscriptionTopic.d.ts.map