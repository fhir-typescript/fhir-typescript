import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Attachment type.
 */
export interface AttachmentArgs extends fhir.FhirElementArgs {
    /**
     * Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
     */
    contentType?: fhir.FhirCode | string | undefined;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * The base64-encoded data SHALL be expressed in the same character set as the base resource XML or JSON.
     */
    data?: fhir.FhirBase64Binary | string | undefined;
    /**
     * If both data and url are provided, the url SHALL point to the same content as the data contains. Urls may be relative references or may reference transient locations such as a wrapping envelope using cid: though this has ramifications for using signatures. Relative URLs are interpreted relative to the service url, like a resource reference, rather than relative to the resource itself. If a URL is provided, it SHALL resolve to actual data.
     */
    url?: fhir.FhirUrl | string | undefined;
    /**
     * The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
     */
    size?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The hash is calculated on the data prior to base64 encoding, if the data is based64 encoded. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.
     */
    hash?: fhir.FhirBase64Binary | string | undefined;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The date that the attachment was first created.
     */
    creation?: fhir.FhirDateTime | string | undefined;
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
    static get languagePreferredCodings(): {
        readonly Arabic: fhir.Coding;
        readonly Bengali: fhir.Coding;
        readonly Czech: fhir.Coding;
        readonly Danish: fhir.Coding;
        readonly German: fhir.Coding;
        readonly GermanAustria: fhir.Coding;
        readonly GermanSwitzerland: fhir.Coding;
        readonly GermanGermany: fhir.Coding;
        readonly Greek: fhir.Coding;
        readonly English: fhir.Coding;
        readonly EnglishAustralia: fhir.Coding;
        readonly EnglishCanada: fhir.Coding;
        readonly EnglishGreatBritain: fhir.Coding; /**
         * A label or set of text to display in place of the data.
         */
        readonly EnglishIndia: fhir.Coding;
        readonly EnglishNewZeland: fhir.Coding;
        readonly EnglishSingapore: fhir.Coding;
        readonly EnglishUnitedStates: fhir.Coding;
        readonly Spanish: fhir.Coding;
        readonly SpanishArgentina: fhir.Coding;
        readonly SpanishSpain: fhir.Coding;
        readonly SpanishUruguay: fhir.Coding;
        readonly Finnish: fhir.Coding;
        readonly French: fhir.Coding;
        readonly FrenchBelgium: fhir.Coding;
        readonly FrenchSwitzerland: fhir.Coding;
        readonly FrenchFrance: fhir.Coding;
        readonly Frysian: fhir.Coding;
        readonly FrysianNetherlands: fhir.Coding;
        readonly Hindi: fhir.Coding;
        readonly Croatian: fhir.Coding;
        readonly Italian: fhir.Coding;
        readonly ItalianSwitzerland: fhir.Coding;
        readonly ItalianItaly: fhir.Coding;
        readonly Japanese: fhir.Coding;
        readonly Korean: fhir.Coding;
        readonly Dutch: fhir.Coding;
        readonly DutchBelgium: fhir.Coding;
        readonly DutchNetherlands: fhir.Coding;
        readonly Norwegian: fhir.Coding;
        readonly NorwegianNorway: fhir.Coding;
        readonly Punjabi: fhir.Coding;
        readonly Polish: fhir.Coding;
        readonly Portuguese: fhir.Coding;
        readonly PortugueseBrazil: fhir.Coding;
        readonly Russian: fhir.Coding;
        readonly RussianRussia: fhir.Coding;
        readonly Serbian: fhir.Coding;
        readonly SerbianSerbia: fhir.Coding;
        readonly Swedish: fhir.Coding;
        readonly SwedishSweden: fhir.Coding;
        readonly Telegu: fhir.Coding;
        readonly Chinese: fhir.Coding;
        readonly ChineseChina: fhir.Coding;
        readonly ChineseHongKong: fhir.Coding;
        readonly ChineseSingapore: fhir.Coding;
        readonly ChineseTaiwan: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Attachment.d.ts.map