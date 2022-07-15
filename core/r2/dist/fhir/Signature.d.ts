import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Signature type.
 */
export interface SignatureArgs extends fhir.FhirElementArgs {
    /**
     * An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
     */
    type: fhir.CodingArgs[] | null;
    /**
     * When the digital signature was signed.
     */
    when: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Signature.when
     */
    _when?: fhir.FhirElementArgs;
    /**
     * A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
    who?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
    whoUri?: fhir.FhirUri | string | undefined;
    /**
     * A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
    whoReference?: fhir.ReferenceArgs | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature.
     */
    contentType: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Signature.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * The base64 encoding of the Signature content.
     */
    blob: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Signature.blob
     */
    _blob?: fhir.FhirElementArgs;
}
/**
 * A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different Signature approaches have different utilities.
 */
export declare class Signature extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
     */
    type: fhir.Coding[];
    /**
     * When the digital signature was signed.
     */
    when: fhir.FhirInstant | null;
    /**
     * A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
    who: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Signature.who[x]
     */
    protected static readonly _fts_whoIsChoice: true;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature.
     */
    contentType: fhir.FhirCode | null;
    /**
     * The base64 encoding of the Signature content.
     */
    blob: fhir.FhirBase64Binary | null;
    /**
     * Default constructor for Signature - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SignatureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Signature.d.ts.map