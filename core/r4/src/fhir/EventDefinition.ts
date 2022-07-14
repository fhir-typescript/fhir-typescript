// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: EventDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { DefinitionTopicCodes,  DefinitionTopicCodeType } from '../fhirValueSets/DefinitionTopicCodes.js';
// @ts-ignore
import { DefinitionTopicVsValidation } from '../fhirValueSets/DefinitionTopicVsValidation.js';
/**
 * Valid arguments for the EventDefinition type.
 */
export interface EventDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "EventDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this event definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different event definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the event definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * An explanatory or alternate title for the event definition giving additional information about its content.
   */
  subtitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.subtitle
   */
  _subtitle?:fhir.FhirElementArgs;
  /**
   * Allows filtering of event definitions that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of event definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * A code or group definition that describes the intended subject of the event definition.
   */
  subject?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * A code or group definition that describes the intended subject of the event definition.
   */
  subjectCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * A code or group definition that describes the intended subject of the event definition.
   */
  subjectReference?: fhir.ReferenceArgs|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the event definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the event definition is the organization or individual primarily responsible for the maintenance and upkeep of the event definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the event definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the event definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the event definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the event definition is presumed to be the predominant language in the place the event definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the event definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the event definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this event definition.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.purpose
   */
  _purpose?:fhir.FhirElementArgs;
  /**
   * A detailed description of how the event definition is used from a clinical perspective.
   */
  usage?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.usage
   */
  _usage?:fhir.FhirElementArgs;
  /**
   * A copyright statement relating to the event definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the event definition.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.approvalDate
   */
  _approvalDate?:fhir.FhirElementArgs;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: EventDefinition.lastReviewDate
   */
  _lastReviewDate?:fhir.FhirElementArgs;
  /**
   * The effective period for a event definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.
   */
  topic?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  author?: fhir.ContactDetailArgs[]|undefined;
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  editor?: fhir.ContactDetailArgs[]|undefined;
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  reviewer?: fhir.ContactDetailArgs[]|undefined;
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  endorser?: fhir.ContactDetailArgs[]|undefined;
  /**
   * Each related resource is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * The trigger element defines when the event occurs. If more than one trigger condition is specified, the event fires whenever any one of the trigger conditions is met.
   */
  trigger: fhir.TriggerDefinitionArgs[]|null;
}

/**
 * The EventDefinition resource provides a reusable description of when a particular event can occur.
 */
export class EventDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EventDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "EventDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this event definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be different event definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the event definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * An explanatory or alternate title for the event definition giving additional information about its content.
   */
  public subtitle?: fhir.FhirString|undefined;
  /**
   * Allows filtering of event definitions that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of event definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * A code or group definition that describes the intended subject of the event definition.
   */
  public subject?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element EventDefinition.subject[x]
   */
  protected static readonly _fts_subjectIsChoice:true = true;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the event definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the event definition is the organization or individual primarily responsible for the maintenance and upkeep of the event definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the event definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the event definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the event definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the event definition is presumed to be the predominant language in the place the event definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the event definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * This element does not describe the usage of the event definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this event definition.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * A detailed description of how the event definition is used from a clinical perspective.
   */
  public usage?: fhir.FhirString|undefined;
  /**
   * A copyright statement relating to the event definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the event definition.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  public approvalDate?: fhir.FhirDate|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  public lastReviewDate?: fhir.FhirDate|undefined;
  /**
   * The effective period for a event definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.
   */
  public topic: fhir.CodeableConcept[];
  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  public author: fhir.ContactDetail[];
  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  public editor: fhir.ContactDetail[];
  /**
   * An individual or organization primarily responsible for review of some aspect of the content.
   */
  public reviewer: fhir.ContactDetail[];
  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  public endorser: fhir.ContactDetail[];
  /**
   * Each related resource is either an attachment, or a reference to another resource, but not both.
   */
  public relatedArtifact: fhir.RelatedArtifact[];
  /**
   * The trigger element defines when the event occurs. If more than one trigger condition is specified, the event fires whenever any one of the trigger conditions is met.
   */
  public trigger: fhir.TriggerDefinition[];
  /**
   * Default constructor for EventDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EventDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'EventDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
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
    if (source['subtitle']) { this.subtitle = new fhir.FhirString({value: source.subtitle}); }
    if (source['_subtitle']) {
      if (this.subtitle) { this.subtitle.addExtendedProperties(source._subtitle!); }
      else { this.subtitle = new fhir.FhirString(source._subtitle as Partial<fhir.FhirStringArgs>); }
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
    if (source['subject']) { this.subject = source.subject; }
    else if (source['subjectCodeableConcept']) { this.subject = new fhir.CodeableConcept(source.subjectCodeableConcept); }
    else if (source['subjectReference']) { this.subject = new fhir.Reference(source.subjectReference); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
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
    if (source['usage']) { this.usage = new fhir.FhirString({value: source.usage}); }
    if (source['_usage']) {
      if (this.usage) { this.usage.addExtendedProperties(source._usage!); }
      else { this.usage = new fhir.FhirString(source._usage as Partial<fhir.FhirStringArgs>); }
    }
    if (source['copyright']) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}); }
    if (source['_copyright']) {
      if (this.copyright) { this.copyright.addExtendedProperties(source._copyright!); }
      else { this.copyright = new fhir.FhirMarkdown(source._copyright as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['approvalDate']) { this.approvalDate = new fhir.FhirDate({value: source.approvalDate}); }
    if (source['_approvalDate']) {
      if (this.approvalDate) { this.approvalDate.addExtendedProperties(source._approvalDate!); }
      else { this.approvalDate = new fhir.FhirDate(source._approvalDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['lastReviewDate']) { this.lastReviewDate = new fhir.FhirDate({value: source.lastReviewDate}); }
    if (source['_lastReviewDate']) {
      if (this.lastReviewDate) { this.lastReviewDate.addExtendedProperties(source._lastReviewDate!); }
      else { this.lastReviewDate = new fhir.FhirDate(source._lastReviewDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['effectivePeriod']) { this.effectivePeriod = new fhir.Period(source.effectivePeriod); }
    if (source['topic']) { this.topic = source.topic.map((x) => new fhir.CodeableConcept(x)); }
    else { this.topic = []; }
    if (source['author']) { this.author = source.author.map((x) => new fhir.ContactDetail(x)); }
    else { this.author = []; }
    if (source['editor']) { this.editor = source.editor.map((x) => new fhir.ContactDetail(x)); }
    else { this.editor = []; }
    if (source['reviewer']) { this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x)); }
    else { this.reviewer = []; }
    if (source['endorser']) { this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x)); }
    else { this.endorser = []; }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x)); }
    else { this.relatedArtifact = []; }
    if (source['trigger']) { this.trigger = source.trigger.map((x) => new fhir.TriggerDefinition(x)); }
    else { this.trigger = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'EventDefinition' }
    this.vReqS('resourceType',expression)
    this.vOptS('url',expression)
    this.vOptA('identifier',expression)
    this.vOptS('version',expression)
    this.vOptS('name',expression)
    this.vOptS('title',expression)
    this.vOptS('subtitle',expression)
    this.vReqSV('status',expression,'PublicationStatus',PublicationStatusVsValidation,'r')
    this.vOptS('experimental',expression)
    this.vOptS('subject',expression)
    this.vOptS('date',expression)
    this.vOptS('publisher',expression)
    this.vOptA('contact',expression)
    this.vOptS('description',expression)
    this.vOptA('useContext',expression)
    this.vOptA('jurisdiction',expression)
    this.vOptS('purpose',expression)
    this.vOptS('usage',expression)
    this.vOptS('copyright',expression)
    this.vOptS('approvalDate',expression)
    this.vOptS('lastReviewDate',expression)
    this.vOptS('effectivePeriod',expression)
    this.vOptA('topic',expression)
    this.vOptA('author',expression)
    this.vOptA('editor',expression)
    this.vOptA('reviewer',expression)
    this.vOptA('endorser',expression)
    this.vOptA('relatedArtifact',expression)
    this.vReqA('trigger',expression)
    return issues;
  }
}
