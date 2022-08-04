// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Evidence

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
 * Valid arguments for the Evidence type.
 */
export interface EvidenceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Evidence"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different evidence instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.shortTitle
   */
  _shortTitle?:fhir.FhirElementArgs;
  /**
   * An explanatory or alternate title for the Evidence giving additional information about its content.
   */
  subtitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.subtitle
   */
  _subtitle?:fhir.FhirElementArgs;
  /**
   * Allows filtering of evidences that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the evidence to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A copyright statement relating to the evidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.approvalDate
   */
  _approvalDate?:fhir.FhirElementArgs;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Evidence.lastReviewDate
   */
  _lastReviewDate?:fhir.FhirElementArgs;
  /**
   * The effective period for a evidence  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Descriptive topics related to the content of the Evidence. Topics provide a high-level categorization grouping types of Evidences that can be useful for filtering and searching.
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
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  exposureBackground: fhir.ReferenceArgs|null;
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  exposureVariant?: fhir.ReferenceArgs[]|undefined;
  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  outcome?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export class Evidence extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Evidence';
  /**
   * Resource Type Name
   */
  public override resourceType: "Evidence";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this evidence outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be different evidence instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the evidence with the format [url]|[version].
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
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  public shortTitle?: fhir.FhirString|undefined;
  /**
   * An explanatory or alternate title for the Evidence giving additional information about its content.
   */
  public subtitle?: fhir.FhirString|undefined;
  /**
   * Allows filtering of evidences that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the evidence. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  public note: fhir.Annotation[];
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the evidence to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * A copyright statement relating to the evidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence.
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
   * The effective period for a evidence  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the content of the Evidence. Topics provide a high-level categorization grouping types of Evidences that can be useful for filtering and searching.
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
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  public relatedArtifact: fhir.RelatedArtifact[];
  /**
   * A reference to a EvidenceVariable resource that defines the population for the research.
   */
  public exposureBackground: fhir.Reference|null;
  /**
   * A reference to a EvidenceVariable resource that defines the exposure for the research.
   */
  public exposureVariant: fhir.Reference[];
  /**
   * A reference to a EvidenceVariable resomece that defines the outcome for the research.
   */
  public outcome: fhir.Reference[];
  /**
   * Default constructor for Evidence - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EvidenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Evidence';
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['version'] !== undefined) { this.version = new fhir.FhirString({value: source.version}, options); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['title'] !== undefined) { this.title = new fhir.FhirString({value: source.title}, options); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['shortTitle'] !== undefined) { this.shortTitle = new fhir.FhirString({value: source.shortTitle}, options); }
    if (source['_shortTitle']) {
      if (this.shortTitle) { this.shortTitle.addExtendedProperties(source._shortTitle!); }
      else { this.shortTitle = new fhir.FhirString(source._shortTitle as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['subtitle'] !== undefined) { this.subtitle = new fhir.FhirString({value: source.subtitle}, options); }
    if (source['_subtitle']) {
      if (this.subtitle) { this.subtitle.addExtendedProperties(source._subtitle!); }
      else { this.subtitle = new fhir.FhirString(source._subtitle as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['publisher'] !== undefined) { this.publisher = new fhir.FhirString({value: source.publisher}, options); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.contact = []; }
    if (source['description'] !== undefined) { this.description = new fhir.FhirMarkdown({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x, options)); }
    else { this.useContext = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.jurisdiction = []; }
    if (source['copyright'] !== undefined) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}, options); }
    if (source['_copyright']) {
      if (this.copyright) { this.copyright.addExtendedProperties(source._copyright!); }
      else { this.copyright = new fhir.FhirMarkdown(source._copyright as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['approvalDate'] !== undefined) { this.approvalDate = new fhir.FhirDate({value: source.approvalDate}, options); }
    if (source['_approvalDate']) {
      if (this.approvalDate) { this.approvalDate.addExtendedProperties(source._approvalDate!); }
      else { this.approvalDate = new fhir.FhirDate(source._approvalDate as Partial<fhir.FhirDateArgs>, options); }
    }
    if (source['lastReviewDate'] !== undefined) { this.lastReviewDate = new fhir.FhirDate({value: source.lastReviewDate}, options); }
    if (source['_lastReviewDate']) {
      if (this.lastReviewDate) { this.lastReviewDate.addExtendedProperties(source._lastReviewDate!); }
      else { this.lastReviewDate = new fhir.FhirDate(source._lastReviewDate as Partial<fhir.FhirDateArgs>, options); }
    }
    if (source['effectivePeriod']) { this.effectivePeriod = new fhir.Period(source.effectivePeriod, options); }
    if (source['topic']) { this.topic = source.topic.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.topic = []; }
    if (source['author']) { this.author = source.author.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.author = []; }
    if (source['editor']) { this.editor = source.editor.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.editor = []; }
    if (source['reviewer']) { this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.reviewer = []; }
    if (source['endorser']) { this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.endorser = []; }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x, options)); }
    else { this.relatedArtifact = []; }
    if (source['exposureBackground']) { this.exposureBackground = new fhir.Reference(source.exposureBackground, options); }
    else { this.exposureBackground = null; }
    if (source['exposureVariant']) { this.exposureVariant = source.exposureVariant.map((x) => new fhir.Reference(x, options)); }
    else { this.exposureVariant = []; }
    if (source['outcome']) { this.outcome = source.outcome.map((x) => new fhir.Reference(x, options)); }
    else { this.outcome = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Evidence' }
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOS('shortTitle',exp));
    iss.push(...this.vOS('subtitle',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOS('copyright',exp));
    iss.push(...this.vOS('approvalDate',exp));
    iss.push(...this.vOS('lastReviewDate',exp));
    iss.push(...this.vOS('effectivePeriod',exp));
    iss.push(...this.vOA('topic',exp));
    iss.push(...this.vOA('author',exp));
    iss.push(...this.vOA('editor',exp));
    iss.push(...this.vOA('reviewer',exp));
    iss.push(...this.vOA('endorser',exp));
    iss.push(...this.vOA('relatedArtifact',exp));
    iss.push(...this.vRS('exposureBackground',exp));
    iss.push(...this.vOA('exposureVariant',exp));
    iss.push(...this.vOA('outcome',exp));
    return iss;
  }
}
