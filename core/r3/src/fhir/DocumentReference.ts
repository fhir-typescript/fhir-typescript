// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentReference

import * as fhir from '../fhir.js';

// @ts-ignore
import { DocumentRelationshipTypeCodes,  DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
// @ts-ignore
import { DocumentRelationshipTypeVsValidation } from '../fhirValueSets/DocumentRelationshipTypeVsValidation.js';
// @ts-ignore
import { V3ActCodes,  V3ActCodeType } from '../fhirValueSets/V3ActCodes.js';
// @ts-ignore
import { V3ActVsValidation } from '../fhirValueSets/V3ActVsValidation.js';
// @ts-ignore
import { C80FacilityCodes,  C80FacilityCodeType } from '../fhirValueSets/C80FacilityCodes.js';
// @ts-ignore
import { C80FacilityVsValidation } from '../fhirValueSets/C80FacilityVsValidation.js';
// @ts-ignore
import { C80PracticeCodes,  C80PracticeCodeType } from '../fhirValueSets/C80PracticeCodes.js';
// @ts-ignore
import { C80PracticeVsValidation } from '../fhirValueSets/C80PracticeVsValidation.js';
// @ts-ignore
import { DocumentReferenceStatusCodes,  DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
// @ts-ignore
import { DocumentReferenceStatusVsValidation } from '../fhirValueSets/DocumentReferenceStatusVsValidation.js';
// @ts-ignore
import { CompositionStatusCodes,  CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
// @ts-ignore
import { CompositionStatusVsValidation } from '../fhirValueSets/CompositionStatusVsValidation.js';
// @ts-ignore
import { C80DocTypeCodes,  C80DocTypeCodeType } from '../fhirValueSets/C80DocTypeCodes.js';
// @ts-ignore
import { C80DocTypeVsValidation } from '../fhirValueSets/C80DocTypeVsValidation.js';
// @ts-ignore
import { C80DocClassCodes,  C80DocClassCodeType } from '../fhirValueSets/C80DocClassCodes.js';
// @ts-ignore
import { C80DocClassVsValidation } from '../fhirValueSets/C80DocClassVsValidation.js';
// @ts-ignore
import { SecurityLabelsCodes,  SecurityLabelsCodeType } from '../fhirValueSets/SecurityLabelsCodes.js';
// @ts-ignore
import { SecurityLabelsVsValidation } from '../fhirValueSets/SecurityLabelsVsValidation.js';
/**
 * Valid arguments for the DocumentReferenceRelatesTo type.
 */
export interface DocumentReferenceRelatesToArgs extends fhir.BackboneElementArgs {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
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
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export class DocumentReferenceRelatesTo extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReferenceRelatesTo';
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
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
   * The document or URL of the document along with critical metadata to prove content has integrity.
   */
  attachment: fhir.AttachmentArgs|null;
  /**
   * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
   */
  format?: fhir.CodingArgs|undefined;
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
   * The document or URL of the document along with critical metadata to prove content has integrity.
   */
  public attachment: fhir.Attachment|null;
  /**
   * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
   */
  public format?: fhir.Coding|undefined;
  /**
   * Default constructor for DocumentReferenceContent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceContentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['attachment']) { this.attachment = new fhir.Attachment(source.attachment); }
    else { this.attachment = null; }
    if (source['format']) { this.format = new fhir.Coding(source.format); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DocumentReference.content' }
    iss.push(...this.vRS('attachment',exp));
    iss.push(...this.vOS('format',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DocumentReferenceContextRelated type.
 */
export interface DocumentReferenceContextRelatedArgs extends fhir.BackboneElementArgs {
  /**
   * Order numbers, accession numbers, XDW workflow numbers.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.
   */
  ref?: fhir.ReferenceArgs|undefined;
}

/**
 * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
 */
export class DocumentReferenceContextRelated extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DocumentReferenceContextRelated';
  /**
   * Order numbers, accession numbers, XDW workflow numbers.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.
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
   * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
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
   * The value set for this content has an example binding because it is a value set decided by community policy. Other examples exist for consideration: * HITSP created the table HITSP/C80 Table 2-148 Clinical Specialty Value Set (a value set based upon SNOMED CT which is referenced by Direct (XDR and XDM for Direct Messaging Specification, Version 1), as well as Nationwide Health Information Network (NHIN).  Query for Documents, Web Service Interface Specification, V 3.0, 07/27/2011 * ELGA (Austria) (ELGA CDA Implementie-rungsleitfäden Registrierung von CDA Dokumenten für ELGA mit IHE Cross-Enterprise Document Sharing: XDS Metadaten (XDSDocumentEntry), [1.2.40.0.34.7.6.3] * XDS Connect-a-thon practiceSettingCode.
   */
  practiceSetting?: fhir.CodeableConceptArgs|undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  sourcePatientInfo?: fhir.ReferenceArgs|undefined;
  /**
   * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
   */
  related?: fhir.DocumentReferenceContextRelatedArgs[]|undefined;
}

/**
 * These values are primarily added to help with searching for interesting/relevant documents.
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
   * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
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
   * The value set for this content has an example binding because it is a value set decided by community policy. Other examples exist for consideration: * HITSP created the table HITSP/C80 Table 2-148 Clinical Specialty Value Set (a value set based upon SNOMED CT which is referenced by Direct (XDR and XDM for Direct Messaging Specification, Version 1), as well as Nationwide Health Information Network (NHIN).  Query for Documents, Web Service Interface Specification, V 3.0, 07/27/2011 * ELGA (Austria) (ELGA CDA Implementie-rungsleitfäden Registrierung von CDA Dokumenten für ELGA mit IHE Cross-Enterprise Document Sharing: XDS Metadaten (XDSDocumentEntry), [1.2.40.0.34.7.6.3] * XDS Connect-a-thon practiceSettingCode.
   */
  public practiceSetting?: fhir.CodeableConcept|undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  public sourcePatientInfo?: fhir.Reference|undefined;
  /**
   * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
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
   * CDA Document Id extension and root.
   */
  masterIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This is the status of the DocumentReference object, which might be independent from the docStatus element.
   * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
   */
  status: fhir.FhirCode<DocumentReferenceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The document that is pointed to might be in various lifecycle states.
   */
  docStatus?: fhir.FhirCode<CompositionStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.docStatus
   */
  _docStatus?:fhir.FhirElementArgs;
  /**
   * Key metadata element describing the document, used in searching/filtering.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  class?: fhir.CodeableConceptArgs|undefined;
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document, not the source material on which it is based.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * Referencing/indexing time is used for tracking, organizing versions and searching.
   */
  indexed: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.indexed
   */
  _indexed?:fhir.FhirElementArgs;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) it in or who was the source (informant).
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
   */
  authenticator?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the logical organization to go to find the current version, where to report issues, etc. This is different from the physical location of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
   */
  custodian?: fhir.ReferenceArgs|undefined;
  /**
   * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   */
  relatesTo?: fhir.DocumentReferenceRelatesToArgs[]|undefined;
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DocumentReference.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.   In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
   */
  securityLabel?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  content: fhir.DocumentReferenceContentArgs[]|null;
  /**
   * These values are primarily added to help with searching for interesting/relevant documents.
   */
  context?: fhir.DocumentReferenceContextArgs|undefined;
}

/**
 * A reference to a document.
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
   * CDA Document Id extension and root.
   */
  public masterIdentifier?: fhir.Identifier|undefined;
  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  public identifier: fhir.Identifier[];
  /**
   * This is the status of the DocumentReference object, which might be independent from the docStatus element.
   * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
   */
  public status: fhir.FhirCode<DocumentReferenceStatusCodeType>|null;
  /**
   * The document that is pointed to might be in various lifecycle states.
   */
  public docStatus?: fhir.FhirCode<CompositionStatusCodeType>|undefined;
  /**
   * Key metadata element describing the document, used in searching/filtering.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  public class?: fhir.CodeableConcept|undefined;
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document, not the source material on which it is based.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * Referencing/indexing time is used for tracking, organizing versions and searching.
   */
  public indexed: fhir.FhirInstant|null;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) it in or who was the source (informant).
   */
  public author: fhir.Reference[];
  /**
   * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
   */
  public authenticator?: fhir.Reference|undefined;
  /**
   * Identifies the logical organization to go to find the current version, where to report issues, etc. This is different from the physical location of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
   */
  public custodian?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   */
  public relatesTo: fhir.DocumentReferenceRelatesTo[];
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.   In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
   */
  public securityLabel: fhir.CodeableConcept[];
  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  public content: fhir.DocumentReferenceContent[];
  /**
   * These values are primarily added to help with searching for interesting/relevant documents.
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
    if (source['status']) { this.status = new fhir.FhirCode<DocumentReferenceStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DocumentReferenceStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['docStatus']) { this.docStatus = new fhir.FhirCode<CompositionStatusCodeType>({value: source.docStatus}); }
    if (source['_docStatus']) {
      if (this.docStatus) { this.docStatus.addExtendedProperties(source._docStatus!); }
      else { this.docStatus = new fhir.FhirCode<CompositionStatusCodeType>(source._docStatus as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['class']) { this.class = new fhir.CodeableConcept(source.class); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
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
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    else { this.author = []; }
    if (source['authenticator']) { this.authenticator = new fhir.Reference(source.authenticator); }
    if (source['custodian']) { this.custodian = new fhir.Reference(source.custodian); }
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
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('masterIdentifier',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'DocumentReferenceStatus',DocumentReferenceStatusVsValidation,'r'));
    iss.push(...this.vOSV('docStatus',exp,'CompositionStatus',CompositionStatusVsValidation,'r'));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('class',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('created',exp));
    iss.push(...this.vRS('indexed',exp));
    iss.push(...this.vOA('author',exp));
    iss.push(...this.vOS('authenticator',exp));
    iss.push(...this.vOS('custodian',exp));
    iss.push(...this.vOA('relatesTo',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('securityLabel',exp));
    iss.push(...this.vRA('content',exp));
    iss.push(...this.vOS('context',exp));
    return iss;
  }
}