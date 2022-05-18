import * as fhir from '../fhir.js';
import { ResourceTypesCodingType } from '../fhirValueSets/ResourceTypesCodings.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { MessageSignificanceCategoryCodingType } from '../fhirValueSets/MessageSignificanceCategoryCodings.js';
import { MessageSignificanceCategoryCodeType } from '../fhirValueSets/MessageSignificanceCategoryCodes.js';
import { MessageheaderResponseRequestCodingType } from '../fhirValueSets/MessageheaderResponseRequestCodings.js';
import { MessageheaderResponseRequestCodeType } from '../fhirValueSets/MessageheaderResponseRequestCodes.js';
/**
 * Valid arguments for the MessageDefinitionFocus type.
 */
export interface MessageDefinitionFocusArgs extends fhir.BackboneElementArgs {
    /**
     * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    min: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    max?: fhir.FhirString | string | undefined;
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
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    min: fhir.FhirUnsignedInt | null;
    /**
     * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
     */
    max?: fhir.FhirString | undefined;
    /**
     * Default constructor for MessageDefinitionFocus - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageDefinitionFocusArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (MessageDefinition.focus.code)
     */
    static codeRequiredCoding(): ResourceTypesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the MessageDefinitionAllowedResponse type.
 */
export interface MessageDefinitionAllowedResponseArgs extends fhir.BackboneElementArgs {
    /**
     * A reference to the message definition that must be adhered to by this supported response.
     */
    message: fhir.FhirCanonical | string | undefined;
    /**
     * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
     */
    situation?: fhir.FhirMarkdown | string | undefined;
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
    message: fhir.FhirCanonical | null;
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
    doModelValidation(): fhir.OperationOutcome;
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * A MessageDefinition that is superseded by this definition.
     */
    replaces?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Allows filtering of message definitions that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of message definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The MessageDefinition that is the basis for the contents of this resource.
     */
    base?: fhir.FhirCanonical | string | undefined;
    /**
     * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
     */
    parent?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Event code or link to the EventDefinition.
     */
    event?: fhir.Coding | fhir.FhirUri | undefined;
    /**
     * Event code or link to the EventDefinition.
     */
    eventCoding?: fhir.CodingArgs | undefined;
    /**
     * Event code or link to the EventDefinition.
     */
    eventUri?: fhir.FhirUri | string | undefined;
    /**
     * The impact of the content of the message.
     */
    category?: MessageSignificanceCategoryCodeType | undefined;
    /**
     * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
     */
    focus?: fhir.MessageDefinitionFocusArgs[] | undefined;
    /**
     * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
     */
    responseRequired?: MessageheaderResponseRequestCodeType | undefined;
    /**
     * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
     */
    allowedResponse?: fhir.MessageDefinitionAllowedResponseArgs[] | undefined;
    /**
     * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
     */
    graph?: fhir.FhirCanonical[] | string[] | undefined;
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[];
    /**
     * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
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
     * A MessageDefinition that is superseded by this definition.
     */
    replaces?: fhir.FhirCanonical[];
    /**
     * Allows filtering of message definitions that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of message definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The MessageDefinition that is the basis for the contents of this resource.
     */
    base?: fhir.FhirCanonical | undefined;
    /**
     * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
     */
    parent?: fhir.FhirCanonical[];
    /**
     * Event code or link to the EventDefinition.
     */
    event: (fhir.Coding | fhir.FhirUri) | null;
    /**
     * Internal flag to properly serialize choice-type element MessageDefinition.event[x]
     */
    protected static readonly _fts_eventIsChoice: true;
    /**
     * The impact of the content of the message.
     */
    category?: MessageSignificanceCategoryCodeType | undefined;
    /**
     * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
     */
    focus?: fhir.MessageDefinitionFocus[];
    /**
     * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
     */
    responseRequired?: MessageheaderResponseRequestCodeType | undefined;
    /**
     * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
     */
    allowedResponse?: fhir.MessageDefinitionAllowedResponse[];
    /**
     * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
     */
    graph?: fhir.FhirCanonical[];
    /**
     * Default constructor for MessageDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (MessageDefinition.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Required-bound Value Set for category (MessageDefinition.category)
     */
    static categoryRequiredCoding(): MessageSignificanceCategoryCodingType;
    /**
     * Required-bound Value Set for responseRequired (MessageDefinition.responseRequired)
     */
    static responseRequiredRequiredCoding(): MessageheaderResponseRequestCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=MessageDefinition.d.ts.map