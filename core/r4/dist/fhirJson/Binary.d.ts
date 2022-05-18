import * as fhir from '../fhirJson.js';
/**
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 */
export interface Binary extends fhir.Resource {
    /**
     * Resource Type Name
     */
    resourceType: "Binary";
    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType: string | null;
    /**
     * Extended properties for primitive element: Binary.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * Very often, a server will also know of a resource that references the binary, and can automatically apply the appropriate access rules based on that reference. However, there are some circumstances where this is not appropriate, e.g. the binary is uploaded directly to the server without any linking resource, the binary is referred to from multiple different resources, and/or the binary is content such as an application logo that has less protection than any of the resources that reference it.
     */
    securityContext?: fhir.Reference | undefined;
    /**
     * If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
     */
    data?: string | undefined;
    /**
     * Extended properties for primitive element: Binary.data
     */
    _data?: fhir.FhirElement;
}
//# sourceMappingURL=Binary.d.ts.map