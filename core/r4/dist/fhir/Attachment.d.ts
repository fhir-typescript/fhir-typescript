import * as fhir from '../fhir.js';
import { LanguagesCodingType } from '../fhirValueSets/LanguagesCodings.js';
/**
 * Valid arguments for the Attachment type.
 */
export interface AttachmentArgs extends fhir.FhirElementArgs {
    /**
     * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
     */
    contentType?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
     */
    data?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.data
     */
    _data?: fhir.FhirElementArgs;
    /**
     * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
     */
    url?: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
     */
    size?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Attachment.size
     */
    _size?: fhir.FhirElementArgs;
    /**
     * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
     */
    hash?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.hash
     */
    _hash?: fhir.FhirElementArgs;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Attachment.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The date that the attachment was first created.
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
     * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
     */
    contentType?: fhir.FhirCode | undefined;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
     */
    data?: fhir.FhirBase64Binary | undefined;
    /**
     * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
     */
    url?: fhir.FhirUrl | undefined;
    /**
     * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
     */
    size?: fhir.FhirUnsignedInt | undefined;
    /**
     * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
     */
    hash?: fhir.FhirBase64Binary | undefined;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The date that the attachment was first created.
     */
    creation?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for Attachment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AttachmentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for language (Attachment.language)
     */
    static get languagePreferredCodings(): LanguagesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Attachment.d.ts.map