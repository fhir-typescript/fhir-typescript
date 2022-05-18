import * as fhir from '../fhirJson.js';
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export interface Signature extends fhir.FhirElement {
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type: fhir.Coding[] | null;
    /**
     * This should agree with the information in the signature.
     */
    when: string | null;
    /**
     * Extended properties for primitive element: Signature.when
     */
    _when?: fhir.FhirElement;
    /**
     * This should agree with the information in the signature.
     */
    who: fhir.Reference | null;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    targetFormat?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.targetFormat
     */
    _targetFormat?: fhir.FhirElement;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
     */
    sigFormat?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.sigFormat
     */
    _sigFormat?: fhir.FhirElement;
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    data?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.data
     */
    _data?: fhir.FhirElement;
}
//# sourceMappingURL=Signature.d.ts.map