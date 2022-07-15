import * as fhir from '../fhirJson.js';
/**
 * A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different signature approaches have different utilities.
 */
export interface Signature extends fhir.FhirElement {
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type: (fhir.Coding | null)[] | null;
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
    whoUri?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.who[x]
     */
    _whoUri?: fhir.FhirElement;
    /**
     * This should agree with the information in the signature.
     */
    whoReference?: fhir.Reference | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOfUri?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.onBehalfOf[x]
     */
    _onBehalfOfUri?: fhir.FhirElement;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOfReference?: fhir.Reference | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.
     */
    contentType?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.contentType
     */
    _contentType?: fhir.FhirElement;
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    blob?: string | undefined;
    /**
     * Extended properties for primitive element: Signature.blob
     */
    _blob?: fhir.FhirElement;
}
//# sourceMappingURL=Signature.d.ts.map