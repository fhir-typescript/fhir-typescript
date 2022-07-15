import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Signature type.
 */
export interface SignatureArgs extends fhir.FhirElementArgs {
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type: fhir.CodingArgs[] | null;
    /**
     * This should agree with the information in the signature.
     */
    when: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Signature.when
     */
    _when?: fhir.FhirElementArgs;
    /**
     * This should agree with the information in the signature.
     */
    who?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * This should agree with the information in the signature.
     */
    whoUri?: fhir.FhirUri | string | undefined;
    /**
     * This should agree with the information in the signature.
     */
    whoReference?: fhir.ReferenceArgs | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOfUri?: fhir.FhirUri | string | undefined;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOfReference?: fhir.ReferenceArgs | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.
     */
    contentType?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Signature.contentType
     */
    _contentType?: fhir.FhirElementArgs;
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    blob?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Signature.blob
     */
    _blob?: fhir.FhirElementArgs;
}
/**
 * A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different signature approaches have different utilities.
 */
export declare class Signature extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Examples include attesting to: authorship, correct transcription, and witness of specific event. Also known as a &amp;quot;Commitment Type Indication&amp;quot;.
     */
    type: fhir.Coding[];
    /**
     * This should agree with the information in the signature.
     */
    when: fhir.FhirInstant | null;
    /**
     * This should agree with the information in the signature.
     */
    who: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Signature.who[x]
     */
    protected static readonly _fts_whoIsChoice: true;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: (fhir.FhirUri | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Signature.onBehalfOf[x]
     */
    protected static readonly _fts_onBehalfOfIsChoice: true;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.
     */
    contentType?: fhir.FhirCode | undefined;
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    blob?: fhir.FhirBase64Binary | undefined;
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