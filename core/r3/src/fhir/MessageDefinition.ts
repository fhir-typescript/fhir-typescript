// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: MessageDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { ResourceTypesVsValidation } from '../fhirValueSets/ResourceTypesVsValidation.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { JurisdictionCodes,  JurisdictionCodeType } from '../fhirValueSets/JurisdictionCodes.js';
// @ts-ignore
import { JurisdictionVsValidation } from '../fhirValueSets/JurisdictionVsValidation.js';
// @ts-ignore
import { MessageEventsCodes,  MessageEventsCodeType } from '../fhirValueSets/MessageEventsCodes.js';
// @ts-ignore
import { MessageEventsVsValidation } from '../fhirValueSets/MessageEventsVsValidation.js';
// @ts-ignore
import { MessageSignificanceCategoryCodes,  MessageSignificanceCategoryCodeType } from '../fhirValueSets/MessageSignificanceCategoryCodes.js';
// @ts-ignore
import { MessageSignificanceCategoryVsValidation } from '../fhirValueSets/MessageSignificanceCategoryVsValidation.js';
/**
 * Valid arguments for the MessageDefinitionFocus type.
 */
export interface MessageDefinitionFocusArgs extends fhir.BackboneElementArgs {
  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.focus.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   */
  profile?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  min?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.focus.min
   */
  _min?:fhir.FhirElementArgs;
  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  max?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.focus.max
   */
  _max?:fhir.FhirElementArgs;
}

/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export class MessageDefinitionFocus extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageDefinitionFocus';
  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   */
  public code: fhir.FhirCode|null;
  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   */
  public profile?: fhir.Reference|undefined;
  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  public min?: fhir.FhirUnsignedInt|undefined;
  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  public max?: fhir.FhirString|undefined;
  /**
   * Default constructor for MessageDefinitionFocus - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageDefinitionFocusArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['profile']) { this.profile = new fhir.Reference(source.profile); }
    if (source['min']) { this.min = new fhir.FhirUnsignedInt({value: source.min}); }
    if (source['_min']) {
      if (this.min) { this.min.addExtendedProperties(source._min!); }
      else { this.min = new fhir.FhirUnsignedInt(source._min as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['max']) { this.max = new fhir.FhirString({value: source.max}); }
    if (source['_max']) {
      if (this.max) { this.max.addExtendedProperties(source._max!); }
      else { this.max = new fhir.FhirString(source._max as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageDefinition.focus' }
    iss.push(...this.vRSV('code',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    iss.push(...this.vOS('profile',exp));
    iss.push(...this.vOS('min',exp));
    iss.push(...this.vOS('max',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MessageDefinitionAllowedResponse type.
 */
export interface MessageDefinitionAllowedResponseArgs extends fhir.BackboneElementArgs {
  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  message: fhir.ReferenceArgs|null;
  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   */
  situation?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.allowedResponse.situation
   */
  _situation?:fhir.FhirElementArgs;
}

/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export class MessageDefinitionAllowedResponse extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageDefinitionAllowedResponse';
  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  public message: fhir.Reference|null;
  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   */
  public situation?: fhir.FhirMarkdown|undefined;
  /**
   * Default constructor for MessageDefinitionAllowedResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageDefinitionAllowedResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['message']) { this.message = new fhir.Reference(source.message); }
    else { this.message = null; }
    if (source['situation']) { this.situation = new fhir.FhirMarkdown({value: source.situation}); }
    if (source['_situation']) {
      if (this.situation) { this.situation.addExtendedProperties(source._situation!); }
      else { this.situation = new fhir.FhirMarkdown(source._situation as Partial<fhir.FhirMarkdownArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageDefinition.allowedResponse' }
    iss.push(...this.vRS('message',exp));
    iss.push(...this.vOS('situation',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MessageDefinition type.
 */
export interface MessageDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MessageDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the message definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * Allows filtering of message definitions that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired message definition without due consideration.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of message definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental message definition in production.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the message definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.purpose
   */
  _purpose?:fhir.FhirElementArgs;
  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  base?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies a protocol or workflow that this MessageDefinition represents a step in.
   */
  parent?: fhir.ReferenceArgs[]|undefined;
  /**
   * A MessageDefinition that is superseded by this definition.
   */
  replaces?: fhir.ReferenceArgs[]|undefined;
  /**
   * A coded identifier of a supported messaging event.
   */
  event: fhir.CodingArgs|null;
  /**
   * The impact of the content of the message.
   */
  category?: fhir.FhirCode<MessageSignificanceCategoryCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.category
   */
  _category?:fhir.FhirElementArgs;
  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   */
  focus?: fhir.MessageDefinitionFocusArgs[]|undefined;
  /**
   * Indicates whether a response is required for this message.
   */
  responseRequired?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: MessageDefinition.responseRequired
   */
  _responseRequired?:fhir.FhirElementArgs;
  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   */
  allowedResponse?: fhir.MessageDefinitionAllowedResponseArgs[]|undefined;
}

/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export class MessageDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "MessageDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the message definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * Allows filtering of message definitions that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired message definition without due consideration.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of message definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental message definition in production.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date: fhir.FhirDateTime|null;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * This element does not describe the usage of the message definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  public base?: fhir.Reference|undefined;
  /**
   * Identifies a protocol or workflow that this MessageDefinition represents a step in.
   */
  public parent: fhir.Reference[];
  /**
   * A MessageDefinition that is superseded by this definition.
   */
  public replaces: fhir.Reference[];
  /**
   * A coded identifier of a supported messaging event.
   */
  public event: fhir.Coding|null;
  /**
   * The impact of the content of the message.
   */
  public category?: fhir.FhirCode<MessageSignificanceCategoryCodeType>|undefined;
  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   */
  public focus: fhir.MessageDefinitionFocus[];
  /**
   * Indicates whether a response is required for this message.
   */
  public responseRequired?: fhir.FhirBoolean|undefined;
  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   */
  public allowedResponse: fhir.MessageDefinitionAllowedResponse[];
  /**
   * Default constructor for MessageDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MessageDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['_experimental']) {
      if (this.experimental) { this.experimental.addExtendedProperties(source._experimental!); }
      else { this.experimental = new fhir.FhirBoolean(source._experimental as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    else { this.date = null; }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    else { this.contact = []; }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    else { this.useContext = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.jurisdiction = []; }
    if (source['purpose']) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}); }
    if (source['_purpose']) {
      if (this.purpose) { this.purpose.addExtendedProperties(source._purpose!); }
      else { this.purpose = new fhir.FhirMarkdown(source._purpose as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['copyright']) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}); }
    if (source['_copyright']) {
      if (this.copyright) { this.copyright.addExtendedProperties(source._copyright!); }
      else { this.copyright = new fhir.FhirMarkdown(source._copyright as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['base']) { this.base = new fhir.Reference(source.base); }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.Reference(x)); }
    else { this.parent = []; }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.Reference(x)); }
    else { this.replaces = []; }
    if (source['event']) { this.event = new fhir.Coding(source.event); }
    else { this.event = null; }
    if (source['category']) { this.category = new fhir.FhirCode<MessageSignificanceCategoryCodeType>({value: source.category}); }
    if (source['_category']) {
      if (this.category) { this.category.addExtendedProperties(source._category!); }
      else { this.category = new fhir.FhirCode<MessageSignificanceCategoryCodeType>(source._category as Partial<fhir.FhirCode>); }
    }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.MessageDefinitionFocus(x)); }
    else { this.focus = []; }
    if (source['responseRequired']) { this.responseRequired = new fhir.FhirBoolean({value: source.responseRequired}); }
    if (source['_responseRequired']) {
      if (this.responseRequired) { this.responseRequired.addExtendedProperties(source._responseRequired!); }
      else { this.responseRequired = new fhir.FhirBoolean(source._responseRequired as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['allowedResponse']) { this.allowedResponse = source.allowedResponse.map((x) => new fhir.MessageDefinitionAllowedResponse(x)); }
    else { this.allowedResponse = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageDefinition' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vRS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOS('purpose',exp));
    iss.push(...this.vOS('copyright',exp));
    iss.push(...this.vOS('base',exp));
    iss.push(...this.vOA('parent',exp));
    iss.push(...this.vOA('replaces',exp));
    iss.push(...this.vRS('event',exp));
    iss.push(...this.vOSV('category',exp,'MessageSignificanceCategory',MessageSignificanceCategoryVsValidation,'r'));
    iss.push(...this.vOA('focus',exp));
    iss.push(...this.vOS('responseRequired',exp));
    iss.push(...this.vOA('allowedResponse',exp));
    return iss;
  }
}