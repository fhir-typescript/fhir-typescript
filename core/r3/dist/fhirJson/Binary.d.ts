import * as fhir from '../fhirJson.js';
/**
 * A binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export interface Binary extends fhir.Resource {
    /**
     * Resource Type Name
     */
    resourceType: "Binary" | null;
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: string | null;
    /**
     * Extended properties for primitive element: Binary.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * Treat this binary as if it was this other resource for access control purposes.
     */
    securityContext?: fhir.Reference | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    content: string | null;
    /**
     * Extended properties for primitive element: Binary.content
     */
    _content?: fhir.FhirElement;
}
//# sourceMappingURL=Binary.d.ts.map