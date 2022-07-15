// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentManifest

import * as fhir from '../fhir.js';

// @ts-ignore
import { DocumentReferenceStatusCodes,  DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
// @ts-ignore
import { DocumentReferenceStatusVsValidation } from '../fhirValueSets/DocumentReferenceStatusVsValidation.js';
/**
 * Valid arguments for the DocumentManifestContent type.
 */
export interface DocumentManifestContentArgs extends fhir.BackboneElementArgs {
  /**
   * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
   */
  p?: fhir.Attachment|fhir.Reference|undefined;
  /**
   * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
   */
  pAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
   */
  pReference?: fhir.ReferenceArgs|undefined;
}

/**
 * The list of Documents included in the manifest.
 */
export class DocumentManifestContent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentManifestContent';
  /**
   * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
   */
  public p: (fhir.Attachment|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element DocumentManifest.content.p[x]
   */
  protected static readonly _fts_pIsChoice:true = true;
  /**
   * Default constructor for DocumentManifestContent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentManifestContentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['p']) { this.p = source.p; }
    else if (source['pAttachment']) { this.p = new fhir.Attachment(source.pAttachment); }
    else if (source['pReference']) { this.p = new fhir.Reference(source.pReference); }
    else { this.p = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentManifest.content' }
    this.vRS('p',exp)
    return issues;
  }
}
/**
 * Valid arguments for the DocumentManifestRelated type.
 */
export interface DocumentManifestRelatedArgs extends fhir.BackboneElementArgs {
  /**
   * Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Related Resource to this DocumentManifest. For example, Order, DiagnosticOrder,  Procedure, EligibilityRequest, etc.
   */
  ref?: fhir.ReferenceArgs|undefined;
}

/**
 * Related identifiers or resources associated with the DocumentManifest.
 */
export class DocumentManifestRelated extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentManifestRelated';
  /**
   * Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Related Resource to this DocumentManifest. For example, Order, DiagnosticOrder,  Procedure, EligibilityRequest, etc.
   */
  public ref?: fhir.Reference|undefined;
  /**
   * Default constructor for DocumentManifestRelated - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentManifestRelatedArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['ref']) { this.ref = new fhir.Reference(source.ref); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentManifest.related' }
    this.vOS('identifier',exp)
    this.vOS('ref',exp)
    return issues;
  }
}
/**
 * Valid arguments for the DocumentManifest type.
 */
export interface DocumentManifestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DocumentManifest"|undefined;
  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   */
  masterIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * A patient, practitioner, or organization for which this set of documents is intended.
   */
  recipient?: fhir.ReferenceArgs[]|undefined;
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies who is responsible for creating the manifest, and adding  documents to it.
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  source?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.source
   */
  _source?:fhir.FhirElementArgs;
  /**
   * The status of this document manifest.
   */
  status: fhir.FhirCode<DocumentReferenceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Helps humans to assess whether the document is of interest.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DocumentManifest.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The list of Documents included in the manifest.
   */
  content: fhir.DocumentManifestContentArgs[]|null;
  /**
   * Related identifiers or resources associated with the DocumentManifest.
   */
  related?: fhir.DocumentManifestRelatedArgs[]|undefined;
}

/**
 * A manifest that defines a set of documents.
 */
export class DocumentManifest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentManifest';
  /**
   * Resource Type Name
   */
  public override resourceType: "DocumentManifest";
  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   */
  public masterIdentifier?: fhir.Identifier|undefined;
  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  public identifier: fhir.Identifier[];
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * A patient, practitioner, or organization for which this set of documents is intended.
   */
  public recipient: fhir.Reference[];
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Identifies who is responsible for creating the manifest, and adding  documents to it.
   */
  public author: fhir.Reference[];
  /**
   * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  public source?: fhir.FhirUri|undefined;
  /**
   * The status of this document manifest.
   */
  public status: fhir.FhirCode<DocumentReferenceStatusCodeType>|null;
  /**
   * Helps humans to assess whether the document is of interest.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The list of Documents included in the manifest.
   */
  public content: fhir.DocumentManifestContent[];
  /**
   * Related identifiers or resources associated with the DocumentManifest.
   */
  public related: fhir.DocumentManifestRelated[];
  /**
   * Default constructor for DocumentManifest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentManifestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DocumentManifest';
    if (source['masterIdentifier']) { this.masterIdentifier = new fhir.Identifier(source.masterIdentifier); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x)); }
    else { this.recipient = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    else { this.author = []; }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['source']) { this.source = new fhir.FhirUri({value: source.source}); }
    if (source['_source']) {
      if (this.source) { this.source.addExtendedProperties(source._source!); }
      else { this.source = new fhir.FhirUri(source._source as Partial<fhir.FhirUriArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<DocumentReferenceStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DocumentReferenceStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['content']) { this.content = source.content.map((x) => new fhir.DocumentManifestContent(x)); }
    else { this.content = []; }
    if (source['related']) { this.related = source.related.map((x) => new fhir.DocumentManifestRelated(x)); }
    else { this.related = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentManifest' }
    this.vRS('resourceType',exp)
    this.vOS('masterIdentifier',exp)
    this.vOA('identifier',exp)
    this.vOS('subject',exp)
    this.vOA('recipient',exp)
    this.vOS('type',exp)
    this.vOA('author',exp)
    this.vOS('created',exp)
    this.vOS('source',exp)
    this.vRSV('status',exp,'DocumentReferenceStatus',DocumentReferenceStatusVsValidation,'r')
    this.vOS('description',exp)
    this.vRA('content',exp)
    this.vOA('related',exp)
    return issues;
  }
}
