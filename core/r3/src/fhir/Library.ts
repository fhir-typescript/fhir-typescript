// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Library

import * as fhir from '../fhir.js';

// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { LibraryTypeCodes,  LibraryTypeCodeType } from '../fhirValueSets/LibraryTypeCodes.js';
// @ts-ignore
import { LibraryTypeVsValidation } from '../fhirValueSets/LibraryTypeVsValidation.js';
// @ts-ignore
import { JurisdictionCodes,  JurisdictionCodeType } from '../fhirValueSets/JurisdictionCodes.js';
// @ts-ignore
import { JurisdictionVsValidation } from '../fhirValueSets/JurisdictionVsValidation.js';
// @ts-ignore
import { DefinitionTopicCodes,  DefinitionTopicCodeType } from '../fhirValueSets/DefinitionTopicCodes.js';
// @ts-ignore
import { DefinitionTopicVsValidation } from '../fhirValueSets/DefinitionTopicVsValidation.js';
/**
 * Valid arguments for the Library type.
 */
export interface LibraryArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Library"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Library.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the library with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Library.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Library.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Library.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * Allows filtering of librarys that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired library without due consideration.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Library.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of library that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental library in production.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Library.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Library.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Library.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: Library.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * This element does not describe the usage of the library Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: Library.purpose
   */
  _purpose?:fhir.FhirElementArgs;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  usage?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Library.usage
   */
  _usage?:fhir.FhirElementArgs;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Library.approvalDate
   */
  _approvalDate?:fhir.FhirElementArgs;
  /**
   * If specified, this is usually after the approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Library.lastReviewDate
   */
  _lastReviewDate?:fhir.FhirElementArgs;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  topic?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A contributor to the content of the library, including authors, editors, reviewers, and endorsers.
   */
  contributor?: fhir.ContributorArgs[]|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: Library.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  relatedArtifact?: fhir.RelatedArtifactArgs[]|undefined;
  /**
   * The parameter element defines parameters used by the library.
   */
  parameter?: fhir.ParameterDefinitionArgs[]|undefined;
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  dataRequirement?: fhir.DataRequirementArgs[]|undefined;
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  content?: fhir.AttachmentArgs[]|undefined;
}

/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export class Library extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Library';
  /**
   * Resource Type Name
   */
  public override resourceType: "Library";
  /**
   * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this library outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the library with the format [url]|[version].
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
   * Allows filtering of librarys that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired library without due consideration.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of library that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental library in production.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * This element does not describe the usage of the library Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * A detailed description of how the library is used from a clinical perspective.
   */
  public usage?: fhir.FhirString|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
   */
  public approvalDate?: fhir.FhirDate|undefined;
  /**
   * If specified, this is usually after the approval date.
   */
  public lastReviewDate?: fhir.FhirDate|undefined;
  /**
   * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
   */
  public topic: fhir.CodeableConcept[];
  /**
   * A contributor to the content of the library, including authors, editors, reviewers, and endorsers.
   */
  public contributor: fhir.Contributor[];
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * Each related artifact is either an attachment, or a reference to another resource, but not both.
   */
  public relatedArtifact: fhir.RelatedArtifact[];
  /**
   * The parameter element defines parameters used by the library.
   */
  public parameter: fhir.ParameterDefinition[];
  /**
   * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
   */
  public dataRequirement: fhir.DataRequirement[];
  /**
   * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
   */
  public content: fhir.Attachment[];
  /**
   * Default constructor for Library - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<LibraryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Library';
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
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['experimental'] !== undefined) { this.experimental = new fhir.FhirBoolean({value: source.experimental}, options); }
    if (source['_experimental']) {
      if (this.experimental) { this.experimental.addExtendedProperties(source._experimental!); }
      else { this.experimental = new fhir.FhirBoolean(source._experimental as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
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
    if (source['description'] !== undefined) { this.description = new fhir.FhirMarkdown({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['purpose'] !== undefined) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}, options); }
    if (source['_purpose']) {
      if (this.purpose) { this.purpose.addExtendedProperties(source._purpose!); }
      else { this.purpose = new fhir.FhirMarkdown(source._purpose as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['usage'] !== undefined) { this.usage = new fhir.FhirString({value: source.usage}, options); }
    if (source['_usage']) {
      if (this.usage) { this.usage.addExtendedProperties(source._usage!); }
      else { this.usage = new fhir.FhirString(source._usage as Partial<fhir.FhirStringArgs>, options); }
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
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x, options)); }
    else { this.useContext = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.jurisdiction = []; }
    if (source['topic']) { this.topic = source.topic.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.topic = []; }
    if (source['contributor']) { this.contributor = source.contributor.map((x) => new fhir.Contributor(x, options)); }
    else { this.contributor = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x, options)); }
    else { this.contact = []; }
    if (source['copyright'] !== undefined) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}, options); }
    if (source['_copyright']) {
      if (this.copyright) { this.copyright.addExtendedProperties(source._copyright!); }
      else { this.copyright = new fhir.FhirMarkdown(source._copyright as Partial<fhir.FhirMarkdownArgs>, options); }
    }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x, options)); }
    else { this.relatedArtifact = []; }
    if (source['parameter']) { this.parameter = source.parameter.map((x) => new fhir.ParameterDefinition(x, options)); }
    else { this.parameter = []; }
    if (source['dataRequirement']) { this.dataRequirement = source.dataRequirement.map((x) => new fhir.DataRequirement(x, options)); }
    else { this.dataRequirement = []; }
    if (source['content']) { this.content = source.content.map((x) => new fhir.Attachment(x, options)); }
    else { this.content = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Library' }
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('purpose',exp));
    iss.push(...this.vOS('usage',exp));
    iss.push(...this.vOS('approvalDate',exp));
    iss.push(...this.vOS('lastReviewDate',exp));
    iss.push(...this.vOS('effectivePeriod',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOA('topic',exp));
    iss.push(...this.vOA('contributor',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('copyright',exp));
    iss.push(...this.vOA('relatedArtifact',exp));
    iss.push(...this.vOA('parameter',exp));
    iss.push(...this.vOA('dataRequirement',exp));
    iss.push(...this.vOA('content',exp));
    return iss;
  }
}
