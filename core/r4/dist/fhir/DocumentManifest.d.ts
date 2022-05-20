import * as fhir from '../fhir.js';
import { DocumentReferenceStatusCodingType } from '../fhirValueSets/DocumentReferenceStatusCodings.js';
import { DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
/**
 * Valid arguments for the DocumentManifestRelated type.
 */
export interface DocumentManifestRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * If both identifier and ref elements are present they shall refer to the same thing.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * If both identifier and ref elements are present they shall refer to the same thing.
     */
    ref?: fhir.ReferenceArgs | undefined;
}
/**
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
export declare class DocumentManifestRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If both identifier and ref elements are present they shall refer to the same thing.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * If both identifier and ref elements are present they shall refer to the same thing.
     */
    ref?: fhir.Reference | undefined;
    /**
     * Default constructor for DocumentManifestRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentManifestRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
     */
    status: DocumentReferenceStatusCodeType | null;
    /**
     * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: fhir.FhirUri | string | undefined;
    /**
     * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
     */
    content: fhir.ReferenceArgs[] | null;
    /**
     * May be identifiers or resources that caused the DocumentManifest to be created.
     */
    related?: fhir.DocumentManifestRelatedArgs[] | undefined;
}
/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
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
    identifier?: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
     */
    status: DocumentReferenceStatusCodeType | null;
    /**
     * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: fhir.Reference | undefined;
    /**
     * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
     */
    author?: fhir.Reference[];
    /**
     * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
     */
    recipient?: fhir.Reference[];
    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: fhir.FhirUri | undefined;
    /**
     * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
     */
    description?: fhir.FhirString | undefined;
    /**
     * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
     */
    content: fhir.Reference[];
    /**
     * May be identifiers or resources that caused the DocumentManifest to be created.
     */
    related?: fhir.DocumentManifestRelated[];
    /**
     * Default constructor for DocumentManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DocumentManifestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (DocumentManifest.status)
     */
    static statusRequiredCoding(): DocumentReferenceStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=DocumentManifest.d.ts.map