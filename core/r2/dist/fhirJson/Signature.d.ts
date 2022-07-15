import * as fhir from '../fhirJson.js';
/**
 * A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different Signature approaches have different utilities.
 */
export interface Signature extends fhir.FhirElement {
    /**
     * An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
     */
    type: (fhir.Coding | null)[] | null;
    /**
     * When the digital signature was signed.
     */
    when: string | null;
    /**
     * Extended properties for primitive element: Signature.when
     */
    _when?: fhir.FhirElement;
    /**
     * A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
    whoUri?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.who[x]
     */
    _whoUri?: fhir.FhirElement;
    /**
     * A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
    whoReference?: fhir.Reference | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature.
     */
    contentType: string | null;
    /**
     * Extended properties for primitive element: Signature.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * The base64 encoding of the Signature content.
     */
    blob: string | null;
    /**
     * Extended properties for primitive element: Signature.blob
     */
    _blob?: fhir.FhirElement;
}
//# sourceMappingURL=Signature.d.ts.map