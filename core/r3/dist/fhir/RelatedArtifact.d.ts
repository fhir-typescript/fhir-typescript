import * as fhir from '../fhir.js';
import { RelatedArtifactTypeCodeType } from '../fhirValueSets/RelatedArtifactTypeCodes.js';
/**
 * Valid arguments for the RelatedArtifact type.
 */
export interface RelatedArtifactArgs extends fhir.FhirElementArgs {
    /**
     * The type of relationship to the related artifact.
     */
    type: fhir.FhirCode<RelatedArtifactTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.citation
     */
    _citation?: fhir.FhirElementArgs;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.AttachmentArgs | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: fhir.ReferenceArgs | undefined;
}
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare class RelatedArtifact extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of relationship to the related artifact.
     */
    type: fhir.FhirCode<RelatedArtifactTypeCodeType> | null;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: fhir.FhirString | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: fhir.FhirUri | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.Attachment | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: fhir.Reference | undefined;
    /**
     * Default constructor for RelatedArtifact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RelatedArtifactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=RelatedArtifact.d.ts.map