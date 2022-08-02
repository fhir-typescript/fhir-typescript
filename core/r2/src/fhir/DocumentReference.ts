// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentReference

import * as fhir from '../fhir.js';

// @ts-ignore
import { DocumentRelationshipTypeCodes,  DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
// @ts-ignore
import { DocumentRelationshipTypeVsValidation } from '../fhirValueSets/DocumentRelationshipTypeVsValidation.js';
// @ts-ignore
import { DocumentReferenceStatusCodes,  DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
// @ts-ignore
import { DocumentReferenceStatusVsValidation } from '../fhirValueSets/DocumentReferenceStatusVsValidation.js';
// @ts-ignore
import { CompositionStatusCodes,  CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
// @ts-ignore
import { CompositionStatusVsValidation } from '../fhirValueSets/CompositionStatusVsValidation.js';
/**
 * Valid arguments for the DocumentReferenceRelatesTo type.
 */
export interface DocumentReferenceRelatesToArgs extends fhir.BackboneElementArgs {
  /**
   * The type of relationship that this document has with anther document.
   */
  code: fhir.FhirCode<DocumentRelationshipTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.relatesTo.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * The target document of this relationship.
   */
  target: fhir.ReferenceArgs|null;
}

/**
 * Relationships that this document has with other document references that already exist.
 */
export class DocumentReferenceRelatesTo extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReferenceRelatesTo';
  /**
   * The type of relationship that this document has with anther document.
   */
  public code: fhir.FhirCode<DocumentRelationshipTypeCodeType>|null;
  /**
   * The target document of this relationship.
   */
  public target: fhir.Reference|null;
  /**
   * Default constructor for DocumentReferenceRelatesTo - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceRelatesToArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.FhirCode<DocumentRelationshipTypeCodeType>({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode<DocumentRelationshipTypeCodeType>(source._code as Partial<fhir.FhirCode>); }
    }
    if (source['target']) { this.target = new fhir.Reference(source.target); }
    else { this.target = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentReference.relatesTo' }
    iss.push(...this.vRSV('code',exp,'DocumentRelationshipType',DocumentRelationshipTypeVsValidation,'r'));
    iss.push(...this.vRS('target',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DocumentReferenceContent type.
 */
export interface DocumentReferenceContentArgs extends fhir.BackboneElementArgs {
  /**
   * The document or url of the document along with critical metadata to prove content has integrity.
   */
  attachment: fhir.AttachmentArgs|null;
  /**
   * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
   */
  format?: fhir.CodingArgs[]|undefined;
}

/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export class DocumentReferenceContent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReferenceContent';
  /**
   * The document or url of the document along with critical metadata to prove content has integrity.
   */
  public attachment: fhir.Attachment|null;
  /**
   * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
   */
  public format: fhir.Coding[];
  /**
   * Default constructor for DocumentReferenceContent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceContentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['attachment']) { this.attachment = new fhir.Attachment(source.attachment); }
    else { this.attachment = null; }
    if (source['format']) { this.format = source.format.map((x) => new fhir.Coding(x)); }
    else { this.format = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentReference.content' }
    iss.push(...this.vRS('attachment',exp));
    iss.push(...this.vOA('format',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DocumentReferenceContextRelated type.
 */
export interface DocumentReferenceContextRelatedArgs extends fhir.BackboneElementArgs {
  /**
   * Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
   */
  ref?: fhir.ReferenceArgs|undefined;
}

/**
 * Related identifiers or resources associated with the DocumentReference.
 */
export class DocumentReferenceContextRelated extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReferenceContextRelated';
  /**
   * Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
   */
  public ref?: fhir.Reference|undefined;
  /**
   * Default constructor for DocumentReferenceContextRelated - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceContextRelatedArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['ref']) { this.ref = new fhir.Reference(source.ref); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentReference.context.related' }
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('ref',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DocumentReferenceContext type.
 */
export interface DocumentReferenceContextArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
   */
  event?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The time period over which the service that is described by the document was provided.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The kind of facility where the patient was seen.
   */
  facilityType?: fhir.CodeableConceptArgs|undefined;
  /**
   * This is an important piece of metadata that providers often rely upon to quickly sort and/or filter out to find specific content.
   */
  practiceSetting?: fhir.CodeableConceptArgs|undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  sourcePatientInfo?: fhir.ReferenceArgs|undefined;
  /**
   * Related identifiers or resources associated with the DocumentReference.
   */
  related?: fhir.DocumentReferenceContextRelatedArgs[]|undefined;
}

/**
 * The clinical context in which the document was prepared.
 */
export class DocumentReferenceContext extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReferenceContext';
  /**
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
   */
  public event: fhir.CodeableConcept[];
  /**
   * The time period over which the service that is described by the document was provided.
   */
  public period?: fhir.Period|undefined;
  /**
   * The kind of facility where the patient was seen.
   */
  public facilityType?: fhir.CodeableConcept|undefined;
  /**
   * This is an important piece of metadata that providers often rely upon to quickly sort and/or filter out to find specific content.
   */
  public practiceSetting?: fhir.CodeableConcept|undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  public sourcePatientInfo?: fhir.Reference|undefined;
  /**
   * Related identifiers or resources associated with the DocumentReference.
   */
  public related: fhir.DocumentReferenceContextRelated[];
  /**
   * Default constructor for DocumentReferenceContext - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceContextArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['event']) { this.event = source.event.map((x) => new fhir.CodeableConcept(x)); }
    else { this.event = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['facilityType']) { this.facilityType = new fhir.CodeableConcept(source.facilityType); }
    if (source['practiceSetting']) { this.practiceSetting = new fhir.CodeableConcept(source.practiceSetting); }
    if (source['sourcePatientInfo']) { this.sourcePatientInfo = new fhir.Reference(source.sourcePatientInfo); }
    if (source['related']) { this.related = source.related.map((x) => new fhir.DocumentReferenceContextRelated(x)); }
    else { this.related = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentReference.context' }
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOA('event',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('facilityType',exp));
    iss.push(...this.vOS('practiceSetting',exp));
    iss.push(...this.vOS('sourcePatientInfo',exp));
    iss.push(...this.vOA('related',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DocumentReference type.
 */
export interface DocumentReferenceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DocumentReference"|undefined;
  /**
   * The structure and format of this Id shall be consistent with the specification corresponding to the formatCode attribute. (e.g. for a DICOM standard document a 64 character numeric UID, for an HL7 CDA format a serialization of the CDA Document Id extension and root in the form "oid^extension", where OID is a 64 digits max, and the Id is a 16 UTF-8 char max. If the OID is coded without the extension then the '^' character shall not be included.).
   */
  masterIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Helps humans to assess whether the document is of interest when viewing a list of documents.
   */
  class?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies who is responsible for adding the information to the document.
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
   */
  custodian?: fhir.ReferenceArgs|undefined;
  /**
   * Which person or organization authenticates that this document is valid.
   */
  authenticator?: fhir.ReferenceArgs|undefined;
  /**
   * When the document was created.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * When the document reference was created.
   */
  indexed: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.indexed
   */
  _indexed?:fhir.FhirElementArgs;
  /**
   * The status of this document reference.
   */
  status: fhir.FhirCode<DocumentReferenceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The status of the underlying document.
   */
  docStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * Relationships that this document has with other document references that already exist.
   */
  relatesTo?: fhir.DocumentReferenceRelatesToArgs[]|undefined;
  /**
   * Helps humans to assess whether the document is of interest.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Use of the Health Care Privacy/Security Classification (HCS) system of security-tag use is recommended.
   */
  securityLabel?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  content: fhir.DocumentReferenceContentArgs[]|null;
  /**
   * The clinical context in which the document was prepared.
   */
  context?: fhir.DocumentReferenceContextArgs|undefined;
}

/**
 * A reference to a document .
 */
export class DocumentReference extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReference';
  /**
   * Resource Type Name
   */
  public override resourceType: "DocumentReference";
  /**
   * The structure and format of this Id shall be consistent with the specification corresponding to the formatCode attribute. (e.g. for a DICOM standard document a 64 character numeric UID, for an HL7 CDA format a serialization of the CDA Document Id extension and root in the form "oid^extension", where OID is a 64 digits max, and the Id is a 16 UTF-8 char max. If the OID is coded without the extension then the '^' character shall not be included.).
   */
  public masterIdentifier?: fhir.Identifier|undefined;
  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  public identifier: fhir.Identifier[];
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Helps humans to assess whether the document is of interest when viewing a list of documents.
   */
  public class?: fhir.CodeableConcept|undefined;
  /**
   * Identifies who is responsible for adding the information to the document.
   */
  public author: fhir.Reference[];
  /**
   * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
   */
  public custodian?: fhir.Reference|undefined;
  /**
   * Which person or organization authenticates that this document is valid.
   */
  public authenticator?: fhir.Reference|undefined;
  /**
   * When the document was created.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * When the document reference was created.
   */
  public indexed: fhir.FhirInstant|null;
  /**
   * The status of this document reference.
   */
  public status: fhir.FhirCode<DocumentReferenceStatusCodeType>|null;
  /**
   * The status of the underlying document.
   */
  public docStatus?: fhir.CodeableConcept|undefined;
  /**
   * Relationships that this document has with other document references that already exist.
   */
  public relatesTo: fhir.DocumentReferenceRelatesTo[];
  /**
   * Helps humans to assess whether the document is of interest.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Use of the Health Care Privacy/Security Classification (HCS) system of security-tag use is recommended.
   */
  public securityLabel: fhir.CodeableConcept[];
  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  public content: fhir.DocumentReferenceContent[];
  /**
   * The clinical context in which the document was prepared.
   */
  public context?: fhir.DocumentReferenceContext|undefined;
  /**
   * Default constructor for DocumentReference - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DocumentReference';
    if (source['masterIdentifier']) { this.masterIdentifier = new fhir.Identifier(source.masterIdentifier); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['class']) { this.class = new fhir.CodeableConcept(source.class); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    else { this.author = []; }
    if (source['custodian']) { this.custodian = new fhir.Reference(source.custodian); }
    if (source['authenticator']) { this.authenticator = new fhir.Reference(source.authenticator); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['indexed']) { this.indexed = new fhir.FhirInstant({value: source.indexed}); }
    else { this.indexed = null; }
    if (source['_indexed']) {
      if (this.indexed) { this.indexed.addExtendedProperties(source._indexed!); }
      else { this.indexed = new fhir.FhirInstant(source._indexed as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['status']) { this.status = new fhir.FhirCode<DocumentReferenceStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DocumentReferenceStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['docStatus']) { this.docStatus = new fhir.CodeableConcept(source.docStatus); }
    if (source['relatesTo']) { this.relatesTo = source.relatesTo.map((x) => new fhir.DocumentReferenceRelatesTo(x)); }
    else { this.relatesTo = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['securityLabel']) { this.securityLabel = source.securityLabel.map((x) => new fhir.CodeableConcept(x)); }
    else { this.securityLabel = []; }
    if (source['content']) { this.content = source.content.map((x) => new fhir.DocumentReferenceContent(x)); }
    else { this.content = []; }
    if (source['context']) { this.context = new fhir.DocumentReferenceContext(source.context); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentReference' }
    iss.push(...this.vOS('masterIdentifier',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('class',exp));
    iss.push(...this.vOA('author',exp));
    iss.push(...this.vOS('custodian',exp));
    iss.push(...this.vOS('authenticator',exp));
    iss.push(...this.vOS('created',exp));
    iss.push(...this.vRS('indexed',exp));
    iss.push(...this.vRSV('status',exp,'DocumentReferenceStatus',DocumentReferenceStatusVsValidation,'r'));
    iss.push(...this.vOSV('docStatus',exp,'CompositionStatus',CompositionStatusVsValidation,'r'));
    iss.push(...this.vOA('relatesTo',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('securityLabel',exp));
    iss.push(...this.vRA('content',exp));
    iss.push(...this.vOS('context',exp));
    return iss;
  }
}
