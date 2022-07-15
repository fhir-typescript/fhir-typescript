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
     * The actual content, base64 encoded.
     */
    content: string | null;
    /**
     * Extended properties for primitive element: Binary.content
     */
    _content?: fhir.FhirElement;
}
//# sourceMappingURL=Binary.d.ts.map