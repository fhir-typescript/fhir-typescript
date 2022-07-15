import * as fhir from '../fhir.js';
import { DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
import { DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
/**
 * Valid arguments for the DocumentReferenceRelatesTo type.
 */
export interface DocumentReferenceRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * The type of relationship that this document has with anther document.
     */
    code: fhir.FhirCode<DocumentRelationshipTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.relatesTo.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The target document of this relationship.
     */
    target: fhir.ReferenceArgs | null;
}
/**
 * Relationships that this document has with other document references that already exist.
 */
export declare class DocumentReferenceRelatesTo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of relationship that this document has with anther document.
     */
    code: fhir.FhirCode<DocumentRelationshipTypeCodeType> | null;
    /**
     * The target document of this relationship.
     */
    target: fhir.Reference | null;
    /**
     * Default constructor for DocumentReferenceRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceRelatesToArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DocumentReferenceContent type.
 */
export interface DocumentReferenceContentArgs extends fhir.BackboneElementArgs {
    /**
     * The document or url of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.AttachmentArgs | null;
    /**
     * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
     */
    format?: fhir.CodingArgs[] | undefined;
}
/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export declare class DocumentReferenceContent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The document or url of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.Attachment | null;
    /**
     * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
     */
    format: fhir.Coding[];
    /**
     * Default constructor for DocumentReferenceContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceContentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DocumentReferenceContextRelated type.
 */
export interface DocumentReferenceContextRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */
    ref?: fhir.ReferenceArgs | undefined;
}
/**
 * Related identifiers or resources associated with the DocumentReference.
 */
export declare class DocumentReferenceContextRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */
    ref?: fhir.Reference | undefined;
    /**
     * Default constructor for DocumentReferenceContextRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceContextRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DocumentReferenceContext type.
 */
export interface DocumentReferenceContextArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the clinical encounter or type of care that the document content is associated with.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */
    event?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The time period over which the service that is described by the document was provided.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: fhir.CodeableConceptArgs | undefined;
    /**
     * This is an important piece of metadata that providers often rely upon to quickly sort and/or filter out to find specific content.
     */
    practiceSetting?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhir.ReferenceArgs | undefined;
    /**
     * Related identifiers or resources associated with the DocumentReference.
     */
    related?: fhir.DocumentReferenceContextRelatedArgs[] | undefined;
}
/**
 * The clinical context in which the document was prepared.
 */
export declare class DocumentReferenceContext extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the clinical encounter or type of care that the document content is associated with.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */
    event: fhir.CodeableConcept[];
    /**
     * The time period over which the service that is described by the document was provided.
     */
    period?: fhir.Period | undefined;
    /**
     * The kind of facility where the patient was seen.
     */
    facilityType?: fhir.CodeableConcept | undefined;
    /**
     * This is an important piece of metadata that providers often rely upon to quickly sort and/or filter out to find specific content.
     */
    practiceSetting?: fhir.CodeableConcept | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhir.Reference | undefined;
    /**
     * Related identifiers or resources associated with the DocumentReference.
     */
    related: fhir.DocumentReferenceContextRelated[];
    /**
     * Default constructor for DocumentReferenceContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceContextArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DocumentReference type.
 */
export interface DocumentReferenceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DocumentReference" | undefined;
    /**
     * The structure and format of this Id shall be consistent with the specification corresponding to the formatCode attribute. (e.g. for a DICOM standard document a 64 character numeric UID, for an HL7 CDA format a serialization of the CDA Document Id extension and root in the form "oid^extension", where OID is a 64 digits max, and the Id is a 16 UTF-8 char max. If the OID is coded without the extension then the '^' character shall not be included.).
     */
    masterIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Helps humans to assess whether the document is of interest when viewing a list of documents.
     */
    class?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies who is responsible for adding the information to the document.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
     */
    custodian?: fhir.ReferenceArgs | undefined;
    /**
     * Which person or organization authenticates that this document is valid.
     */
    authenticator?: fhir.ReferenceArgs | undefined;
    /**
     * When the document was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * When the document reference was created.
     */
    indexed: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.indexed
     */
    _indexed?: fhir.FhirElementArgs;
    /**
     * The status of this document reference.
     */
    status: fhir.FhirCode<DocumentReferenceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The status of the underlying document.
     */
    docStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * Relationships that this document has with other document references that already exist.
     */
    relatesTo?: fhir.DocumentReferenceRelatesToArgs[] | undefined;
    /**
     * Helps humans to assess whether the document is of interest.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Use of the Health Care Privacy/Security Classification (HCS) system of security-tag use is recommended.
     */
    securityLabel?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhir.DocumentReferenceContentArgs[] | null;
    /**
     * The clinical context in which the document was prepared.
     */
    context?: fhir.DocumentReferenceContextArgs | undefined;
}
/**
 * A reference to a document .
 */
export declare class DocumentReference extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DocumentReference";
    /**
     * The structure and format of this Id shall be consistent with the specification corresponding to the formatCode attribute. (e.g. for a DICOM standard document a 64 character numeric UID, for an HL7 CDA format a serialization of the CDA Document Id extension and root in the form "oid^extension", where OID is a 64 digits max, and the Id is a 16 UTF-8 char max. If the OID is coded without the extension then the '^' character shall not be included.).
     */
    masterIdentifier?: fhir.Identifier | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier: fhir.Identifier[];
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhir.Reference | undefined;
    /**
     * Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Helps humans to assess whether the document is of interest when viewing a list of documents.
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * Identifies who is responsible for adding the information to the document.
     */
    author: fhir.Reference[];
    /**
     * Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * Which person or organization authenticates that this document is valid.
     */
    authenticator?: fhir.Reference | undefined;
    /**
     * When the document was created.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * When the document reference was created.
     */
    indexed: fhir.FhirInstant | null;
    /**
     * The status of this document reference.
     */
    status: fhir.FhirCode<DocumentReferenceStatusCodeType> | null;
    /**
     * The status of the underlying document.
     */
    docStatus?: fhir.CodeableConcept | undefined;
    /**
     * Relationships that this document has with other document references that already exist.
     */
    relatesTo: fhir.DocumentReferenceRelatesTo[];
    /**
     * Helps humans to assess whether the document is of interest.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Use of the Health Care Privacy/Security Classification (HCS) system of security-tag use is recommended.
     */
    securityLabel: fhir.CodeableConcept[];
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhir.DocumentReferenceContent[];
    /**
     * The clinical context in which the document was prepared.
     */
    context?: fhir.DocumentReferenceContext | undefined;
    /**
     * Default constructor for DocumentReference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentReferenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DocumentReference.d.ts.map