import * as fhir from '../fhir.js';
import { ActionParticipantTypeCodeType } from '../fhirValueSets/ActionParticipantTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the ActivityDefinitionParticipant type.
 */
export interface ActivityDefinitionParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * The type of participant in the action.
     */
    type: fhir.FhirCode<ActionParticipantTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.participant.type
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
export declare class ActivityDefinitionParticipant extends fhir.BackboneElement {
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
     * Default constructor for ActivityDefinitionParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ActivityDefinitionParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ActivityDefinitionDynamicValue type.
 */
export interface ActivityDefinitionDynamicValueArgs extends fhir.BackboneElementArgs {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.ExpressionArgs | null;
}
/**
 * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 */
export declare class ActivityDefinitionDynamicValue extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path: fhir.FhirString | null;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression: fhir.Expression | null;
    /**
     * Default constructor for ActivityDefinitionDynamicValue - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ActivityDefinitionDynamicValueArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ActivityDefinition type.
 */
export interface ActivityDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.subtitle
     */
    _subtitle?: fhir.FhirElementArgs;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
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
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library?: fhir.FhirCanonical[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.library
     */
    _library?: (fhir.FhirElementArgs | null)[];
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.profile
     */
    _profile?: fhir.FhirElementArgs;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.doNotPerform
     */
    _doNotPerform?: fhir.FhirElementArgs;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timing?: fhir.Timing | fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.Duration | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingAge?: fhir.AgeArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: fhir.RangeArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingDuration?: fhir.DurationArgs | undefined;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant?: fhir.ActivityDefinitionParticipantArgs[] | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    product?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productReference?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    productCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage?: fhir.DosageArgs[] | undefined;
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement?: fhir.ReferenceArgs[] | undefined;
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement?: fhir.ReferenceArgs[] | undefined;
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement?: fhir.ReferenceArgs[] | undefined;
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.transform
     */
    _transform?: fhir.FhirElementArgs;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue?: fhir.ActivityDefinitionDynamicValueArgs[] | undefined;
}
/**
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 */
export declare class ActivityDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ActivityDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
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
     * An explanatory or alternate title for the activity definition giving additional information about its content.
     */
    subtitle?: fhir.FhirString | undefined;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of activity definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * A code or group definition that describes the intended subject of the activity being defined.
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ActivityDefinition.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the activity definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A detailed description of how the activity definition is used from a clinical perspective.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
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
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
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
     * A reference to a Library resource containing any formal logic used by the activity definition.
     */
    library: fhir.FhirCanonical[];
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: fhir.FhirCode | undefined;
    /**
     * A profile to which the target of the activity definition is expected to conform.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
     */
    intent?: fhir.FhirCode<RequestIntentCodeType> | undefined;
    /**
     * Indicates how quickly the activity  should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timing?: (fhir.Timing | fhir.FhirDateTime | fhir.Age | fhir.Period | fhir.Range | fhir.Duration) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ActivityDefinition.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * May reference a specific clinical location or may just identify a type of location.
     */
    location?: fhir.Reference | undefined;
    /**
     * Indicates who should participate in performing the action described.
     */
    participant: fhir.ActivityDefinitionParticipant[];
    /**
     * Identifies the food, drug or other product being consumed or supplied in the activity.
     */
    product?: (fhir.Reference | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ActivityDefinition.product[x]
     */
    protected static readonly _fts_productIsChoice: true;
    /**
     * Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If a dosage instruction is used, the definition should not specify timing or quantity.
     */
    dosage: fhir.Dosage[];
    /**
     * Only used if not implicit in the code found in ServiceRequest.type.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
     */
    specimenRequirement: fhir.Reference[];
    /**
     * Defines observation requirements for the action to be performed, such as body weight or surface area.
     */
    observationRequirement: fhir.Reference[];
    /**
     * Defines the observations that are expected to be produced by the action.
     */
    observationResultRequirement: fhir.Reference[];
    /**
     * Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    transform?: fhir.FhirCanonical | undefined;
    /**
     * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
     */
    dynamicValue: fhir.ActivityDefinitionDynamicValue[];
    /**
     * Default constructor for ActivityDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ActivityDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ActivityDefinition.d.ts.map