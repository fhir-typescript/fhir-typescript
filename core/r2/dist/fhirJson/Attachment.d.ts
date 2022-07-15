import * as fhir from '../fhirJson.js';
/**
 * For referring to data content defined in other formats.
 */
export interface Attachment extends fhir.FhirElement {
    /**
     * Processors of the data need to be able to know how to interpret the data.
     */
    contentType?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * Users need to be able to choose between the languages in a set of attachments.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.language
     */
    _language?: fhir.FhirElement;
    /**
     * The data needs to able to be transmitted inline.
     */
    data?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.data
     */
    _data?: fhir.FhirElement;
    /**
     * The data needs to be transmitted by reference.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.url
     */
    _url?: fhir.FhirElement;
    /**
     * Representing the size allows applications to determine whether they should fetch the content automatically in advance, or refuse to fetch it at all.
     */
    size?: number | undefined;
    /**
     * Extended properties for primitive element: Attachment.size
     */
    _size?: fhir.FhirElement;
    /**
     * Included so that applications can verify that the contents of a location have not changed and so that a signature of the content can implicitly sign the content of an image without having to include the data in the instance or reference the url in the signature.
     */
    hash?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.hash
     */
    _hash?: fhir.FhirElement;
    /**
     * Applications need a label to display to a human user in place of the actual data if the data cannot be rendered or perceived by the viewer.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.title
     */
    _title?: fhir.FhirElement;
    /**
     * This is often tracked as an integrity issue for use of the attachment.
     */
    creation?: string | undefined;
    /**
     * Extended properties for primitive element: Attachment.creation
     */
    _creation?: fhir.FhirElement;
}
//# sourceMappingURL=Attachment.d.ts.map