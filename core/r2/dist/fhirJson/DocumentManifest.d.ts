import * as fhir from '../fhirJson.js';
/**
 * The list of Documents included in the manifest.
 */
export interface DocumentManifestContent extends fhir.BackboneElement {
    /**
     * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
    pAttachment?: fhir.Attachment | undefined;
    /**
     * The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
    pReference?: fhir.Reference | undefined;
}
/**
 * Related identifiers or resources associated with the DocumentManifest.
 */
export interface DocumentManifestRelated extends fhir.BackboneElement {
    /**
     * Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Related Resource to this DocumentManifest. For example, Order, DiagnosticOrder,  Procedure, EligibilityRequest, etc.
     */
    ref?: fhir.Reference | undefined;
}
/**
 * A manifest that defines a set of documents.
 */
export interface DocumentManifest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DocumentManifest" | null;
    /**
     * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
     */
    masterIdentifier?: fhir.Identifier | undefined;
    /**
     * Other identifiers associated with the document manifest, including version independent  identifiers.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: fhir.Reference | undefined;
    /**
     * A patient, practitioner, or organization for which this set of documents is intended.
     */
    recipient?: (fhir.Reference | null)[] | undefined;
    /**
     * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Identifies who is responsible for creating the manifest, and adding  documents to it.
     */
    author?: (fhir.Reference | null)[] | undefined;
    /**
     * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.created
     */
    _created?: fhir.FhirElement;
    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.source
     */
    _source?: fhir.FhirElement;
    /**
     * The status of this document manifest.
     */
    status: 'current' | 'entered-in-error' | 'superseded' | null;
    /**
     * Extended properties for primitive element: DocumentManifest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Helps humans to assess whether the document is of interest.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: DocumentManifest.description
     */
    _description?: fhir.FhirElement;
    /**
     * The list of Documents included in the manifest.
     */
    content: (fhir.DocumentManifestContent | null)[] | null;
    /**
     * Related identifiers or resources associated with the DocumentManifest.
     */
    related?: (fhir.DocumentManifestRelated | null)[] | undefined;
}
//# sourceMappingURL=DocumentManifest.d.ts.map