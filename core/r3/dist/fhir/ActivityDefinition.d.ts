import * as fhir from '../fhir.js';
import { ActionParticipantTypeCodeType } from '../fhirValueSets/ActionParticipantTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
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
     * A brief, natural language description of the intended semantics of the dynamic value.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The media type of the language for the expression.
     */
    language?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.dynamicValue.expression
     */
    _expression?: fhir.FhirElementArgs;
}
/**
 * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
 */
export declare class ActivityDefinitionDynamicValue extends fhir.BackboneElement {
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the activity definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
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
     * Allows filtering of activity definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired activity definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of activity definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental activity definition in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the activity definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A detailed description of how the asset is used from a clinical perspective.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this is usually after the approval date.
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
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
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
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * A reference to a Library resource containing any formal logic used by the asset.
     */
    library?: fhir.ReferenceArgs[] | undefined;
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ActivityDefinition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timing?: fhir.Timing | fhir.FhirDateTime | fhir.Period | fhir.Range | undefined;
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
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timingRange?: fhir.RangeArgs | undefined;
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
     * Only used if not implicit in the code found in ProcedureRequest.type.
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: fhir.ReferenceArgs | undefined;
    /**
     * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the activity definition with the format [url]|[version].
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
     * Allows filtering of activity definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired activity definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of activity definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental activity definition in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the activity definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
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
     * The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
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
     * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * A reference to a Library resource containing any formal logic used by the asset.
     */
    library: fhir.Reference[];
    /**
     * May determine what types of extensions are permitted.
     */
    kind?: fhir.FhirCode | undefined;
    /**
     * Tends to be less relevant for activities involving particular products.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The period, timing or frequency upon which the described activity is to occur.
     */
    timing?: (fhir.Timing | fhir.FhirDateTime | fhir.Period | fhir.Range) | undefined;
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
     * Only used if not implicit in the code found in ProcedureRequest.type.
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
     */
    transform?: fhir.Reference | undefined;
    /**
     * Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
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