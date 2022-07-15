import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { MessageSignificanceCategoryCodeType } from '../fhirValueSets/MessageSignificanceCategoryCodes.js';
/**
 * Valid arguments for the MessageDefinitionFocus type.
 */
export interface MessageDefinitionFocusArgs extends fhir.BackboneElementArgs {
    /**
     * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
     */
    profile?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    min?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.focus.max
     */
    _max?: fhir.FhirElementArgs;
}
/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export declare class MessageDefinitionFocus extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
     */
    code: fhir.FhirCode | null;
    /**
     * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    min?: fhir.FhirUnsignedInt | undefined;
    /**
     * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    max?: fhir.FhirString | undefined;
    /**
     * Default constructor for MessageDefinitionFocus - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageDefinitionFocusArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageDefinitionAllowedResponse type.
 */
export interface MessageDefinitionAllowedResponseArgs extends fhir.BackboneElementArgs {
    /**
     * A reference to the message definition that must be adhered to by this supported response.
     */
    message: fhir.ReferenceArgs | null;
    /**
     * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
     */
    situation?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.allowedResponse.situation
     */
    _situation?: fhir.FhirElementArgs;
}
/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export declare class MessageDefinitionAllowedResponse extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A reference to the message definition that must be adhered to by this supported response.
     */
    message: fhir.Reference | null;
    /**
     * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
     */
    situation?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for MessageDefinitionAllowedResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageDefinitionAllowedResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageDefinition type.
 */
export interface MessageDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MessageDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this message definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the message definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of message definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired message definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of message definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental message definition in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the message definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The MessageDefinition that is the basis for the contents of this resource.
     */
    base?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies a protocol or workflow that this MessageDefinition represents a step in.
     */
    parent?: fhir.ReferenceArgs[] | undefined;
    /**
     * A MessageDefinition that is superseded by this definition.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * A coded identifier of a supported messaging event.
     */
    event: fhir.CodingArgs | null;
    /**
     * The impact of the content of the message.
     */
    category?: fhir.FhirCode<MessageSignificanceCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.category
     */
    _category?: fhir.FhirElementArgs;
    /**
     * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
     */
    focus?: fhir.MessageDefinitionFocusArgs[] | undefined;
    /**
     * Indicates whether a response is required for this message.
     */
    responseRequired?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MessageDefinition.responseRequired
     */
    _responseRequired?: fhir.FhirElementArgs;
    /**
     * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
     */
    allowedResponse?: fhir.MessageDefinitionAllowedResponseArgs[] | undefined;
}
/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export declare class MessageDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MessageDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this message definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the message definition with the format [url]|[version].
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
     * Allows filtering of message definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired message definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of message definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental message definition in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the message definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The MessageDefinition that is the basis for the contents of this resource.
     */
    base?: fhir.Reference | undefined;
    /**
     * Identifies a protocol or workflow that this MessageDefinition represents a step in.
     */
    parent: fhir.Reference[];
    /**
     * A MessageDefinition that is superseded by this definition.
     */
    replaces: fhir.Reference[];
    /**
     * A coded identifier of a supported messaging event.
     */
    event: fhir.Coding | null;
    /**
     * The impact of the content of the message.
     */
    category?: fhir.FhirCode<MessageSignificanceCategoryCodeType> | undefined;
    /**
     * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
     */
    focus: fhir.MessageDefinitionFocus[];
    /**
     * Indicates whether a response is required for this message.
     */
    responseRequired?: fhir.FhirBoolean | undefined;
    /**
     * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
     */
    allowedResponse: fhir.MessageDefinitionAllowedResponse[];
    /**
     * Default constructor for MessageDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MessageDefinition.d.ts.map