// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchDefinition

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
 * Valid arguments for the ResearchDefinition type.
 */
export interface ResearchDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ResearchDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different research definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.shortTitle
   */
  _shortTitle?:fhir.FhirElementArgs;
  /**
   * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
   */
  subtitle?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.subtitle
   */
  _subtitle?:fhir.FhirElementArgs;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subject?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  subjectReference?: fhir.ReferenceArgs|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the research definition is the organization or individual primarily responsible for the maintenance and upkeep of the research definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the research definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research definition is presumed to be the predominant language in the place the research definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  comment?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.comment
   */
  _comment?:(fhir.FhirElementArgs|null)[];
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the research definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research definition.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.purpose
   */
  _purpose?:fhir.FhirElementArgs;
  /**
   * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
   */
  usage?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.usage
   */
  _usage?:fhir.FhirElementArgs;
  /**
   * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.approvalDate
   */
  _approvalDate?:fhir.FhirElementArgs;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.lastReviewDate
   */
  _lastReviewDate?:fhir.FhirElementArgs;
  /**
   * The effective period for a research definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
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
   * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
   */
  library?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ResearchDefinition.library
   */
  _library?:(fhir.FhirElementArgs|null)[];
  /**
   * A reference to a ResearchElementDefinition resource that defines the population for the research.
   */
  population: fhir.ReferenceArgs|null;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
   */
  exposure?: fhir.ReferenceArgs|undefined;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
   */
  exposureAlternative?: fhir.ReferenceArgs|undefined;
  /**
   * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
   */
  outcome?: fhir.ReferenceArgs|undefined;
}

/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export class ResearchDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ResearchDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "ResearchDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be different research definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research definition with the format [url]|[version].
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
   * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
   */
  public subtitle?: fhir.FhirString|undefined;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of research definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   */
  public subject?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ResearchDefinition.subject[x]
   */
  protected static readonly _fts_subjectIsChoice:true = true;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the research definition is the organization or individual primarily responsible for the maintenance and upkeep of the research definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the research definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research definition is presumed to be the predominant language in the place the research definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  public comment: fhir.FhirString[];
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * This element does not describe the usage of the research definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research definition.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
   */
  public usage?: fhir.FhirString|undefined;
  /**
   * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
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
   * The effective period for a research definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
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
   * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
   */
  public library: fhir.FhirCanonical[];
  /**
   * A reference to a ResearchElementDefinition resource that defines the population for the research.
   */
  public population: fhir.Reference|null;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
   */
  public exposure?: fhir.Reference|undefined;
  /**
   * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
   */
  public exposureAlternative?: fhir.Reference|undefined;
  /**
   * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
   */
  public outcome?: fhir.Reference|undefined;
  /**
   * Default constructor for ResearchDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ResearchDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ResearchDefinition';
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
    if (source['shortTitle']) { this.shortTitle = new fhir.FhirString({value: source.shortTitle}); }
    if (source['_shortTitle']) {
      if (this.shortTitle) { this.shortTitle.addExtendedProperties(source._shortTitle!); }
      else { this.shortTitle = new fhir.FhirString(source._shortTitle as Partial<fhir.FhirStringArgs>); }
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
    if (source['comment']) { this.comment = source.comment.map((x) => new fhir.FhirString({value: x})); }
    else { this.comment = []; }
    if (source['_comment']) {
      source._comment.forEach((x,i) => {
        if (this.comment.length >= i) { if (x) { this.comment[i].addExtendedProperties(x); } }
        else { if (x) { this.comment.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
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
    if (source['library']) { this.library = source.library.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.library = []; }
    if (source['_library']) {
      source._library.forEach((x,i) => {
        if (this.library.length >= i) { if (x) { this.library[i].addExtendedProperties(x); } }
        else { if (x) { this.library.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['population']) { this.population = new fhir.Reference(source.population); }
    else { this.population = null; }
    if (source['exposure']) { this.exposure = new fhir.Reference(source.exposure); }
    if (source['exposureAlternative']) { this.exposureAlternative = new fhir.Reference(source.exposureAlternative); }
    if (source['outcome']) { this.outcome = new fhir.Reference(source.outcome); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ResearchDefinition' }
    this.vReqS('resourceType',expression)
    this.vOptS('url',expression)
    this.vOptA('identifier',expression)
    this.vOptS('version',expression)
    this.vOptS('name',expression)
    this.vOptS('title',expression)
    this.vOptS('shortTitle',expression)
    this.vOptS('subtitle',expression)
    this.vReqSV('status',expression,'PublicationStatus',PublicationStatusVsValidation,'r')
    this.vOptS('experimental',expression)
    this.vOptS('subject',expression)
    this.vOptS('date',expression)
    this.vOptS('publisher',expression)
    this.vOptA('contact',expression)
    this.vOptS('description',expression)
    this.vOptA('comment',expression)
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
    this.vOptA('library',expression)
    this.vReqS('population',expression)
    this.vOptS('exposure',expression)
    this.vOptS('exposureAlternative',expression)
    this.vOptS('outcome',expression)
    return issues;
  }
}
