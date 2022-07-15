import * as fhir from '../fhirJson.js';
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export interface RelatedArtifact extends fhir.FhirElement {
    /**
     * The type of relationship to the related artifact.
     */
    type: 'citation' | 'composed-of' | 'depends-on' | 'derived-from' | 'documentation' | 'justification' | 'predecessor' | 'successor' | null;
    /**
     * Extended properties for primitive element: RelatedArtifact.type
     */
    _type?: fhir.FhirElement;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.display
     */
    _display?: fhir.FhirElement;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.citation
     */
    _citation?: fhir.FhirElement;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.url
     */
    _url?: fhir.FhirElement;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.Attachment | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: fhir.Reference | undefined;
}
//# sourceMappingURL=RelatedArtifact.d.ts.map