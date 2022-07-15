import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Attachment type.
 */
export interface AttachmentArgs extends fhir.FhirElementArgs {
    /**
     * Processors of the data need to be able to know how to interpret the data.
     */
    contentType?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * Users need to be able to choose between the languages in a set of attachments.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * The data needs to able to be transmitted inline.
     */
    data?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.data
     */
    _data?: fhir.FhirElementArgs;
    /**
     * The data needs to be transmitted by reference.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Representing the size allows applications to determine whether they should fetch the content automatically in advance, or refuse to fetch it at all.
     */
    size?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Attachment.size
     */
    _size?: fhir.FhirElementArgs;
    /**
     * Included so that applications can verify that the contents of a location have not changed and so that a signature of the content can implicitly sign the content of an image without having to include the data in the instance or reference the url in the signature.
     */
    hash?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.hash
     */
    _hash?: fhir.FhirElementArgs;
    /**
     * Applications need a label to display to a human user in place of the actual data if the data cannot be rendered or perceived by the viewer.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * This is often tracked as an integrity issue for use of the attachment.
     */
    creation?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.creation
     */
    _creation?: fhir.FhirElementArgs;
}
/**
 * For referring to data content defined in other formats.
 */
export declare class Attachment extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Processors of the data need to be able to know how to interpret the data.
     */
    contentType?: fhir.FhirCode | undefined;
    /**
     * Users need to be able to choose between the languages in a set of attachments.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * The data needs to able to be transmitted inline.
     */
    data?: fhir.FhirBase64Binary | undefined;
    /**
     * The data needs to be transmitted by reference.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Representing the size allows applications to determine whether they should fetch the content automatically in advance, or refuse to fetch it at all.
     */
    size?: fhir.FhirUnsignedInt | undefined;
    /**
     * Included so that applications can verify that the contents of a location have not changed and so that a signature of the content can implicitly sign the content of an image without having to include the data in the instance or reference the url in the signature.
     */
    hash?: fhir.FhirBase64Binary | undefined;
    /**
     * Applications need a label to display to a human user in place of the actual data if the data cannot be rendered or perceived by the viewer.
     */
    title?: fhir.FhirString | undefined;
    /**
     * This is often tracked as an integrity issue for use of the attachment.
     */
    creation?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for Attachment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AttachmentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Attachment.d.ts.map