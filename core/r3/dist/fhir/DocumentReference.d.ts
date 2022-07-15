import * as fhir from '../fhir.js';
import { DocumentRelationshipTypeCodeType } from '../fhirValueSets/DocumentRelationshipTypeCodes.js';
import { DocumentReferenceStatusCodeType } from '../fhirValueSets/DocumentReferenceStatusCodes.js';
import { CompositionStatusCodeType } from '../fhirValueSets/CompositionStatusCodes.js';
/**
 * Valid arguments for the DocumentReferenceRelatesTo type.
 */
export interface DocumentReferenceRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
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
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export declare class DocumentReferenceRelatesTo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If this document appends another document, then the document cannot be fully understood without also accessing the referenced document.
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
     * The document or URL of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.AttachmentArgs | null;
    /**
     * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
     */
    format?: fhir.CodingArgs | undefined;
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
     * The document or URL of the document along with critical metadata to prove content has integrity.
     */
    attachment: fhir.Attachment | null;
    /**
     * Note that while IHE mostly issues URNs for format types, not all documents can be identified by a URI.
     */
    format?: fhir.Coding | undefined;
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
     * Order numbers, accession numbers, XDW workflow numbers.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.
     */
    ref?: fhir.ReferenceArgs | undefined;
}
/**
 * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
 */
export declare class DocumentReferenceContextRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Order numbers, accession numbers, XDW workflow numbers.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.
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
     * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
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
     * The value set for this content has an example binding because it is a value set decided by community policy. Other examples exist for consideration: * HITSP created the table HITSP/C80 Table 2-148 Clinical Specialty Value Set (a value set based upon SNOMED CT which is referenced by Direct (XDR and XDM for Direct Messaging Specification, Version 1), as well as Nationwide Health Information Network (NHIN).  Query for Documents, Web Service Interface Specification, V 3.0, 07/27/2011 * ELGA (Austria) (ELGA CDA Implementie-rungsleitfäden Registrierung von CDA Dokumenten für ELGA mit IHE Cross-Enterprise Document Sharing: XDS Metadaten (XDSDocumentEntry), [1.2.40.0.34.7.6.3] * XDS Connect-a-thon practiceSettingCode.
     */
    practiceSetting?: fhir.CodeableConceptArgs | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhir.ReferenceArgs | undefined;
    /**
     * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
     */
    related?: fhir.DocumentReferenceContextRelatedArgs[] | undefined;
}
/**
 * These values are primarily added to help with searching for interesting/relevant documents.
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
     * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
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
     * The value set for this content has an example binding because it is a value set decided by community policy. Other examples exist for consideration: * HITSP created the table HITSP/C80 Table 2-148 Clinical Specialty Value Set (a value set based upon SNOMED CT which is referenced by Direct (XDR and XDM for Direct Messaging Specification, Version 1), as well as Nationwide Health Information Network (NHIN).  Query for Documents, Web Service Interface Specification, V 3.0, 07/27/2011 * ELGA (Austria) (ELGA CDA Implementie-rungsleitfäden Registrierung von CDA Dokumenten für ELGA mit IHE Cross-Enterprise Document Sharing: XDS Metadaten (XDSDocumentEntry), [1.2.40.0.34.7.6.3] * XDS Connect-a-thon practiceSettingCode.
     */
    practiceSetting?: fhir.CodeableConcept | undefined;
    /**
     * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */
    sourcePatientInfo?: fhir.Reference | undefined;
    /**
     * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
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
     * CDA Document Id extension and root.
     */
    masterIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This is the status of the DocumentReference object, which might be independent from the docStatus element.
     * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
     */
    status: fhir.FhirCode<DocumentReferenceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The document that is pointed to might be in various lifecycle states.
     */
    docStatus?: fhir.FhirCode<CompositionStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.docStatus
     */
    _docStatus?: fhir.FhirElementArgs;
    /**
     * Key metadata element describing the document, used in searching/filtering.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    class?: fhir.CodeableConceptArgs | undefined;
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document, not the source material on which it is based.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Referencing/indexing time is used for tracking, organizing versions and searching.
     */
    indexed: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.indexed
     */
    _indexed?: fhir.FhirElementArgs;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) it in or who was the source (informant).
     */
    author?: fhir.ReferenceArgs[] | undefined;
    /**
     * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
     */
    authenticator?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies the logical organization to go to find the current version, where to report issues, etc. This is different from the physical location of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
     */
    custodian?: fhir.ReferenceArgs | undefined;
    /**
     * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
     */
    relatesTo?: fhir.DocumentReferenceRelatesToArgs[] | undefined;
    /**
     * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DocumentReference.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.   In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
     */
    securityLabel?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhir.DocumentReferenceContentArgs[] | null;
    /**
     * These values are primarily added to help with searching for interesting/relevant documents.
     */
    context?: fhir.DocumentReferenceContextArgs | undefined;
}
/**
 * A reference to a document.
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
     * CDA Document Id extension and root.
     */
    masterIdentifier?: fhir.Identifier | undefined;
    /**
     * Other identifiers associated with the document, including version independent identifiers.
     */
    identifier: fhir.Identifier[];
    /**
     * This is the status of the DocumentReference object, which might be independent from the docStatus element.
     * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
     */
    status: fhir.FhirCode<DocumentReferenceStatusCodeType> | null;
    /**
     * The document that is pointed to might be in various lifecycle states.
     */
    docStatus?: fhir.FhirCode<CompositionStatusCodeType> | undefined;
    /**
     * Key metadata element describing the document, used in searching/filtering.
     */
    type: fhir.CodeableConcept | null;
    /**
     * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
     */
    class?: fhir.CodeableConcept | undefined;
    /**
     * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */
    subject?: fhir.Reference | undefined;
    /**
     * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document, not the source material on which it is based.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * Referencing/indexing time is used for tracking, organizing versions and searching.
     */
    indexed: fhir.FhirInstant | null;
    /**
     * Not necessarily who did the actual data entry (i.e. typist) it in or who was the source (informant).
     */
    author: fhir.Reference[];
    /**
     * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
     */
    authenticator?: fhir.Reference | undefined;
    /**
     * Identifies the logical organization to go to find the current version, where to report issues, etc. This is different from the physical location of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
     */
    relatesTo: fhir.DocumentReferenceRelatesTo[];
    /**
     * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
     */
    description?: fhir.FhirString | undefined;
    /**
     * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.   In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
     */
    securityLabel: fhir.CodeableConcept[];
    /**
     * The document and format referenced. There may be multiple content element repetitions, each with a different format.
     */
    content: fhir.DocumentReferenceContent[];
    /**
     * These values are primarily added to help with searching for interesting/relevant documents.
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