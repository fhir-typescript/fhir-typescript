import * as fhir from '../fhirJson.js';
/**
 * Relationships that this document has with other document references that already exist.
 */
export interface DocumentReferenceRelatesTo extends fhir.BackboneElement {
    /**
     * The type of relationship that this document has with anther document.
     */
    code: 'appends' | 'replaces' | 'signs' | 'transforms' | null;
    /**
     * Extended properties for primitive element: DocumentReference.relatesTo.code
     */
    _code?: fhir.FhirElement;
    /**
     * The target document of this relationship.
     */
    target: fhir.Reference | null;
}
/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export interface DocumentReferenceContent extends fhir.BackboneElement {
    /**
     * The document or url of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.Attachment | null;
    /**
     * An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
     */
    format?: (fhir.Coding | null)[] | undefined;
}
/**
 * Related identifiers or resources associated with the DocumentReference.
 */
export interface DocumentReferenceContextRelated extends fhir.BackboneElement {
    /**
     * Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */
    ref?: fhir.Reference | undefined;
}
/**
 * The clinical context in which the document was prepared.
 */
export interface DocumentReferenceContext extends fhir.BackboneElement {
    /**
     * Describes the clinical encounter or type of care that the document content is associated with.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */
    event?: (fhir.CodeableConcept | null)[] | undefined;
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
    related?: (fhir.DocumentReferenceContextRelated | null)[] | undefined;
}
/**
 * A reference to a document .
 */
export interface DocumentReference extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DocumentReference" | null;
    /**
     * The structure and format of this Id shall be consistent with the specification corresponding to the formatCode attribute. (e.g. for a DICOM standard document a 64 character numeric UID, for an HL7 CDA format a serialization of the CDA Document Id extension and root in the form "oid^extension", where OID is a 64 digits max, and the Id is a 16 UTF-8 char max. If the OID is coded without the extension then the '^' character shall not be included.).
     */
    masterIdentifier?: fhir.Identifier | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
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
    author?: (fhir.Reference | null)[] | undefined;
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
    created?: string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.created
     */
    _created?: fhir.FhirElement;
    /**
     * When the document reference was created.
     */
    indexed: string | null;
    /**
     * Extended properties for primitive element: DocumentReference.indexed
     */
    _indexed?: fhir.FhirElement;
    /**
     * The status of this document reference.
     */
    status: 'current' | 'entered-in-error' | 'superseded' | null;
    /**
     * Extended properties for primitive element: DocumentReference.status
     */
    _status?: fhir.FhirElement;
    /**
     * The status of the underlying document.
     */
    docStatus?: 'amended' | 'entered-in-error' | 'final' | 'preliminary' | undefined;
    /**
     * Relationships that this document has with other document references that already exist.
     */
    relatesTo?: (fhir.DocumentReferenceRelatesTo | null)[] | undefined;
    /**
     * Helps humans to assess whether the document is of interest.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.description
     */
    _description?: fhir.FhirElement;
    /**
     * Use of the Health Care Privacy/Security Classification (HCS) system of security-tag use is recommended.
     */
    securityLabel?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: (fhir.DocumentReferenceContent | null)[] | null;
    /**
     * The clinical context in which the document was prepared.
     */
    context?: fhir.DocumentReferenceContext | undefined;
}
//# sourceMappingURL=DocumentReference.d.ts.map