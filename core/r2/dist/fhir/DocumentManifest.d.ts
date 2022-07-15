import * as fhir from '../fhir.js';
import { DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
/**
 * Valid arguments for the DocumentManifestContent type.
 */
export interface DocumentManifestContentArgs extends fhir.BackboneElementArgs {
    /**
     * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
    p?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
    pAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
    pReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The list of Documents included in the manifest.
 */
export declare class DocumentManifestContent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
    p: (fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element DocumentManifest.content.p[x]
     */
    protected static readonly _fts_pIsChoice: true;
    /**
     * Default constructor for DocumentManifestContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentManifestContentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DocumentManifestRelated type.
 */
export interface DocumentManifestRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Related Resource to this DocumentManifest. For example, Order, DiagnosticOrder,  Procedure, EligibilityRequest, etc.
     */
    ref?: fhir.ReferenceArgs | undefined;
}
/**
 * Related identifiers or resources associated with the DocumentManifest.
 */
export declare class DocumentManifestRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Related Resource to this DocumentManifest. For example, Order, DiagnosticOrder,  Procedure, EligibilityRequest, etc.
     */
    ref?: fhir.Reference | undefined;
    /**
     * Default constructor for DocumentManifestRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentManifestRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DocumentManifest type.
 */
export interface DocumentManifestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DocumentManifest" | undefined;
    /**
     * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
     */
    masterIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Other identifiers associated with the document manifest, including version independent  identifiers.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * A patient, practitioner, or organization for which this set of documents is intended.
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies who is responsible for creating the manifest, and adding  documents to it.
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.source
     */
    _source?: fhir.FhirElementArgs;
    /**
     * The status of this document manifest.
     */
    status: fhir.FhirCode<DocumentReferenceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Helps humans to assess whether the document is of interest.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The list of Documents included in the manifest.
     */
    content: fhir.DocumentManifestContentArgs[] | null;
    /**
     * Related identifiers or resources associated with the DocumentManifest.
     */
    related?: fhir.DocumentManifestRelatedArgs[] | undefined;
}
/**
 * A manifest that defines a set of documents.
 */
export declare class DocumentManifest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DocumentManifest";
    /**
     * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
     */
    masterIdentifier?: fhir.Identifier | undefined;
    /**
     * Other identifiers associated with the document manifest, including version independent  identifiers.
     */
    identifier: fhir.Identifier[];
    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: fhir.Reference | undefined;
    /**
     * A patient, practitioner, or organization for which this set of documents is intended.
     */
    recipient: fhir.Reference[];
    /**
     * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Identifies who is responsible for creating the manifest, and adding  documents to it.
     */
    author: fhir.Reference[];
    /**
     * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: fhir.FhirUri | undefined;
    /**
     * The status of this document manifest.
     */
    status: fhir.FhirCode<DocumentReferenceStatusCodeType> | null;
    /**
     * Helps humans to assess whether the document is of interest.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The list of Documents included in the manifest.
     */
    content: fhir.DocumentManifestContent[];
    /**
     * Related identifiers or resources associated with the DocumentManifest.
     */
    related: fhir.DocumentManifestRelated[];
    /**
     * Default constructor for DocumentManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentManifestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DocumentManifest.d.ts.map