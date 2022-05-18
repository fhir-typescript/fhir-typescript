// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentReference

import * as fhir from '../fhir.js';

// @ts-ignore
import { DocumentRelationshipTypeCodings, DocumentRelationshipTypeCodingType,} from '../fhirValueSets/DocumentRelationshipTypeCodings.js';
// @ts-ignore
import { DocumentRelationshipTypeCodes,  DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
// @ts-ignore
import { FormatcodesCodings, FormatcodesCodingType,} from '../fhirValueSets/FormatcodesCodings.js';
// @ts-ignore
import { FormatcodesCodes,  FormatcodesCodeType } from '../fhirValueSets/FormatcodesCodes.js';
// @ts-ignore
import { V3ActCodeCodings, V3ActCodeCodingType,} from '../fhirValueSets/V3ActCodeCodings.js';
// @ts-ignore
import { V3ActCodeCodes,  V3ActCodeCodeType } from '../fhirValueSets/V3ActCodeCodes.js';
// @ts-ignore
import { C80FacilitycodesCodings, C80FacilitycodesCodingType,} from '../fhirValueSets/C80FacilitycodesCodings.js';
// @ts-ignore
import { C80FacilitycodesCodes,  C80FacilitycodesCodeType } from '../fhirValueSets/C80FacilitycodesCodes.js';
// @ts-ignore
import { C80PracticeCodesCodings, C80PracticeCodesCodingType,} from '../fhirValueSets/C80PracticeCodesCodings.js';
// @ts-ignore
import { C80PracticeCodesCodes,  C80PracticeCodesCodeType } from '../fhirValueSets/C80PracticeCodesCodes.js';
// @ts-ignore
import { DocumentReferenceStatusCodings, DocumentReferenceStatusCodingType,} from '../fhirValueSets/DocumentReferenceStatusCodings.js';
// @ts-ignore
import { DocumentReferenceStatusCodes,  DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
// @ts-ignore
import { CompositionStatusCodings, CompositionStatusCodingType,} from '../fhirValueSets/CompositionStatusCodings.js';
// @ts-ignore
import { CompositionStatusCodes,  CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
// @ts-ignore
import { C80DocTypecodesCodings, C80DocTypecodesCodingType,} from '../fhirValueSets/C80DocTypecodesCodings.js';
// @ts-ignore
import { C80DocTypecodesCodes,  C80DocTypecodesCodeType } from '../fhirValueSets/C80DocTypecodesCodes.js';
// @ts-ignore
import { DocumentClasscodesCodings, DocumentClasscodesCodingType,} from '../fhirValueSets/DocumentClasscodesCodings.js';
// @ts-ignore
import { DocumentClasscodesCodes,  DocumentClasscodesCodeType } from '../fhirValueSets/DocumentClasscodesCodes.js';
// @ts-ignore
import { SecurityLabelsCodings, SecurityLabelsCodingType,} from '../fhirValueSets/SecurityLabelsCodings.js';
// @ts-ignore
import { SecurityLabelsCodes,  SecurityLabelsCodeType } from '../fhirValueSets/SecurityLabelsCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the DocumentReferenceRelatesTo type.
 */
export interface DocumentReferenceRelatesToArgs extends fhir.BackboneElementArgs {
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  code: DocumentRelationshipTypeCodeType|null;
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
  public static readonly _fts_dataType:string = 'DocumentReferenceRelatesTo';
  /**
   * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
   */
  public code: DocumentRelationshipTypeCodeType|null;
  /**
   * The target document of this relationship.
   */
  public target: fhir.Reference|null;
  /**
   * Default constructor for DocumentReferenceRelatesTo - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceRelatesToArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = source.code; }
    else { this.code = null; }
    if (source['target']) { this.target = new fhir.Reference(source.target); }
    else { this.target = null; }
  }
  /**
   * Required-bound Value Set for code (DocumentReference.relatesTo.code)
   */
  public static codeRequiredCoding():DocumentRelationshipTypeCodingType {
    return DocumentRelationshipTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property code:DocumentRelationshipTypeCodeType fhir: DocumentReference.relatesTo.code:code', }));
    }
    if (!this['target']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property target:fhir.Reference fhir: DocumentReference.relatesTo.target:Reference', }));
    }
    if (this["target"]) { outcome.issue!.push(...this.target.doModelValidation().issue!); }
    return outcome;
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
  public static readonly _fts_dataType:string = 'DocumentReferenceContent';
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
   * Preferred-bound Value Set for format (DocumentReference.content.format)
   */
  public static formatPreferredCoding():FormatcodesCodingType {
    return FormatcodesCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['attachment']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property attachment:fhir.Attachment fhir: DocumentReference.content.attachment:Attachment', }));
    }
    if (this["attachment"]) { outcome.issue!.push(...this.attachment.doModelValidation().issue!); }
    if (this["format"]) { outcome.issue!.push(...this.format.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the DocumentReferenceContext type.
 */
export interface DocumentReferenceContextArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  encounter?: fhir.ReferenceArgs[]|undefined;
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
   * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
   */
  practiceSetting?: fhir.CodeableConceptArgs|undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  sourcePatientInfo?: fhir.ReferenceArgs|undefined;
  /**
   * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
   */
  related?: fhir.ReferenceArgs[]|undefined;
}

/**
 * These values are primarily added to help with searching for interesting/relevant documents.
 */
export class DocumentReferenceContext extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'DocumentReferenceContext';
  /**
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  public encounter?: fhir.Reference[];
  /**
   * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
   */
  public event?: fhir.CodeableConcept[];
  /**
   * The time period over which the service that is described by the document was provided.
   */
  public period?: fhir.Period|undefined;
  /**
   * The kind of facility where the patient was seen.
   */
  public facilityType?: fhir.CodeableConcept|undefined;
  /**
   * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
   */
  public practiceSetting?: fhir.CodeableConcept|undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  public sourcePatientInfo?: fhir.Reference|undefined;
  /**
   * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
   */
  public related?: fhir.Reference[];
  /**
   * Default constructor for DocumentReferenceContext - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentReferenceContextArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['encounter']) { this.encounter = source.encounter.map((x) => new fhir.Reference(x)); }
    else { this.encounter = []; }
    if (source['event']) { this.event = source.event.map((x) => new fhir.CodeableConcept(x)); }
    else { this.event = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['facilityType']) { this.facilityType = new fhir.CodeableConcept(source.facilityType); }
    if (source['practiceSetting']) { this.practiceSetting = new fhir.CodeableConcept(source.practiceSetting); }
    if (source['sourcePatientInfo']) { this.sourcePatientInfo = new fhir.Reference(source.sourcePatientInfo); }
    if (source['related']) { this.related = source.related.map((x) => new fhir.Reference(x)); }
    else { this.related = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["encounter"]) { this.encounter.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["event"]) { this.event.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    if (this["facilityType"]) { outcome.issue!.push(...this.facilityType.doModelValidation().issue!); }
    if (this["practiceSetting"]) { outcome.issue!.push(...this.practiceSetting.doModelValidation().issue!); }
    if (this["sourcePatientInfo"]) { outcome.issue!.push(...this.sourcePatientInfo.doModelValidation().issue!); }
    if (this["related"]) { this.related.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
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
  status: DocumentReferenceStatusCodeType|null;
  /**
   * The document that is pointed to might be in various lifecycle states.
   */
  docStatus?: CompositionStatusCodeType|undefined;
  /**
   * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Referencing/indexing time is used for tracking, organizing versions and searching.
   */
  date?: fhir.FhirInstant|string|undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
   */
  authenticator?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
   */
  custodian?: fhir.ReferenceArgs|undefined;
  /**
   * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   */
  relatesTo?: fhir.DocumentReferenceRelatesToArgs[]|undefined;
  /**
   * What the document is about,  a terse summary of the document.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.   
   * In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
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
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export class DocumentReference extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'DocumentReference';
  /**
   * Resource Type Name
   */
  public resourceType: "DocumentReference";
  /**
   * CDA Document Id extension and root.
   */
  public masterIdentifier?: fhir.Identifier|undefined;
  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  public identifier?: fhir.Identifier[];
  /**
   * This is the status of the DocumentReference object, which might be independent from the docStatus element.
   * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
   */
  public status: DocumentReferenceStatusCodeType|null;
  /**
   * The document that is pointed to might be in various lifecycle states.
   */
  public docStatus?: CompositionStatusCodeType|undefined;
  /**
   * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
   */
  public category?: fhir.CodeableConcept[];
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Referencing/indexing time is used for tracking, organizing versions and searching.
   */
  public date?: fhir.FhirInstant|undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  public author?: fhir.Reference[];
  /**
   * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
   */
  public authenticator?: fhir.Reference|undefined;
  /**
   * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
   */
  public custodian?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   */
  public relatesTo?: fhir.DocumentReferenceRelatesTo[];
  /**
   * What the document is about,  a terse summary of the document.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.   
   * In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
   */
  public securityLabel?: fhir.CodeableConcept[];
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
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['docStatus']) { this.docStatus = source.docStatus; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['date']) { this.date = new fhir.FhirInstant({value: source.date}); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    else { this.author = []; }
    if (source['authenticator']) { this.authenticator = new fhir.Reference(source.authenticator); }
    if (source['custodian']) { this.custodian = new fhir.Reference(source.custodian); }
    if (source['relatesTo']) { this.relatesTo = source.relatesTo.map((x) => new fhir.DocumentReferenceRelatesTo(x)); }
    else { this.relatesTo = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['securityLabel']) { this.securityLabel = source.securityLabel.map((x) => new fhir.CodeableConcept(x)); }
    else { this.securityLabel = []; }
    if (source['content']) { this.content = source.content.map((x) => new fhir.DocumentReferenceContent(x)); }
    else { this.content = []; }
    if (source['context']) { this.context = new fhir.DocumentReferenceContext(source.context); }
  }
  /**
   * Required-bound Value Set for status (DocumentReference.status)
   */
  public static statusRequiredCoding():DocumentReferenceStatusCodingType {
    return DocumentReferenceStatusCodings;
  }
  /**
   * Required-bound Value Set for docStatus (DocumentReference.docStatus)
   */
  public static docStatusRequiredCoding():CompositionStatusCodingType {
    return CompositionStatusCodings;
  }
  /**
   * Preferred-bound Value Set for type (DocumentReference.type)
   */
  public static typePreferredCoding():C80DocTypecodesCodingType {
    return C80DocTypecodesCodings;
  }
  /**
   * Extensible-bound Value Set for securityLabel (DocumentReference.securityLabel)
   */
  public static securityLabelExtensibleCoding():SecurityLabelsCodingType {
    return SecurityLabelsCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"DocumentReference" fhir: DocumentReference.resourceType:"DocumentReference"', }));
    }
    if (this["masterIdentifier"]) { outcome.issue!.push(...this.masterIdentifier.doModelValidation().issue!); }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:DocumentReferenceStatusCodeType fhir: DocumentReference.status:code', }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["category"]) { this.category.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["author"]) { this.author.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["authenticator"]) { outcome.issue!.push(...this.authenticator.doModelValidation().issue!); }
    if (this["custodian"]) { outcome.issue!.push(...this.custodian.doModelValidation().issue!); }
    if (this["relatesTo"]) { this.relatesTo.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["securityLabel"]) { this.securityLabel.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['content']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property content:fhir.DocumentReferenceContent[] fhir: DocumentReference.content:content', }));
    } else if (!Array.isArray(this.content)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue,  diagnostics: 'Found scalar in array property content:fhir.DocumentReferenceContent[] fhir: DocumentReference.content:content', }));
    } else if (this.content.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property content:fhir.DocumentReferenceContent[] fhir: DocumentReference.content:content', }));
    }
    if (this["content"]) { this.content.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["context"]) { outcome.issue!.push(...this.context.doModelValidation().issue!); }
    return outcome;
  }
}