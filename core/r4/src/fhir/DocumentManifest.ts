// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentManifest

import * as fhir from '../fhir.js';

// @ts-ignore
import { DocumentReferenceStatusCodings, DocumentReferenceStatusCodingType,} from '../fhirValueSets/DocumentReferenceStatusCodings.js';
// @ts-ignore
import { DocumentReferenceStatusCodes,  DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
// @ts-ignore
import { V3ActCodeCodings, V3ActCodeCodingType,} from '../fhirValueSets/V3ActCodeCodings.js';
// @ts-ignore
import { V3ActCodeCodes,  V3ActCodeCodeType } from '../fhirValueSets/V3ActCodeCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the DocumentManifestRelated type.
 */
export interface DocumentManifestRelatedArgs extends fhir.BackboneElementArgs {
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  ref?: fhir.ReferenceArgs|undefined;
}

/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
export class DocumentManifestRelated extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'DocumentManifestRelated';
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * If both identifier and ref elements are present they shall refer to the same thing.
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
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["identifier"]) { outcome.issue!.push(...this.identifier.doModelValidation().issue!); }
    if (this["ref"]) { outcome.issue!.push(...this.ref.doModelValidation().issue!); }
    return outcome;
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
   * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
   */
  status: DocumentReferenceStatusCodeType|null;
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  author?: fhir.ReferenceArgs[]|undefined;
  /**
   * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
   */
  recipient?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  source?: fhir.FhirUri|string|undefined;
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
   */
  content: fhir.ReferenceArgs[]|null;
  /**
   * May be identifiers or resources that caused the DocumentManifest to be created.
   */
  related?: fhir.DocumentManifestRelatedArgs[]|undefined;
}

/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export class DocumentManifest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'DocumentManifest';
  /**
   * Resource Type Name
   */
  public resourceType: "DocumentManifest";
  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   */
  public masterIdentifier?: fhir.Identifier|undefined;
  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  public identifier?: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
   */
  public status: DocumentReferenceStatusCodeType|null;
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  public author?: fhir.Reference[];
  /**
   * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
   */
  public recipient?: fhir.Reference[];
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  public source?: fhir.FhirUri|undefined;
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  public description?: fhir.FhirString|undefined;
  /**
   * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
   */
  public content: fhir.Reference[];
  /**
   * May be identifiers or resources that caused the DocumentManifest to be created.
   */
  public related?: fhir.DocumentManifestRelated[];
  /**
   * Default constructor for DocumentManifest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DocumentManifestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DocumentManifest';
    if (source['masterIdentifier']) { this.masterIdentifier = new fhir.Identifier(source.masterIdentifier); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['author']) { this.author = source.author.map((x) => new fhir.Reference(x)); }
    else { this.author = []; }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x)); }
    else { this.recipient = []; }
    if (source['source']) { this.source = new fhir.FhirUri({value: source.source}); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['content']) { this.content = source.content.map((x) => new fhir.Reference(x)); }
    else { this.content = []; }
    if (source['related']) { this.related = source.related.map((x) => new fhir.DocumentManifestRelated(x)); }
    else { this.related = []; }
  }
  /**
   * Required-bound Value Set for status (DocumentManifest.status)
   */
  public static statusRequiredCoding():DocumentReferenceStatusCodingType {
    return DocumentReferenceStatusCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"DocumentManifest" fhir: DocumentManifest.resourceType:"DocumentManifest"', }));
    }
    if (this["masterIdentifier"]) { outcome.issue!.push(...this.masterIdentifier.doModelValidation().issue!); }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:DocumentReferenceStatusCodeType fhir: DocumentManifest.status:code', }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["created"]) { outcome.issue!.push(...this.created.doModelValidation().issue!); }
    if (this["author"]) { this.author.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["recipient"]) { this.recipient.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["source"]) { outcome.issue!.push(...this.source.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (!this['content']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property content:fhir.Reference[] fhir: DocumentManifest.content:Reference', }));
    } else if (!Array.isArray(this.content)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue,  diagnostics: 'Found scalar in array property content:fhir.Reference[] fhir: DocumentManifest.content:Reference', }));
    } else if (this.content.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property content:fhir.Reference[] fhir: DocumentManifest.content:Reference', }));
    }
    if (this["content"]) { this.content.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["related"]) { this.related.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}