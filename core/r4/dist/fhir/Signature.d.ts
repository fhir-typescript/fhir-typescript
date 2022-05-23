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
     * This should agree with the information in the signature.
     */
    who: fhir.ReferenceArgs | null;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    targetFormat?: fhir.FhirCode | string | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
     */
    sigFormat?: fhir.FhirCode | string | undefined;
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    data?: fhir.FhirBase64Binary | string | undefined;
}
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
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
    who: fhir.Reference | null;
    /**
     * The party that can't sign. For example a child.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    targetFormat?: fhir.FhirCode | undefined;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
     */
    sigFormat?: fhir.FhirCode | undefined;
    /**
     * Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
     */
    data?: fhir.FhirBase64Binary | undefined;
    /**
     * Default constructor for Signature - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SignatureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for type (Signature.type)
     */
    static get typePreferredCodings(): {
        readonly AuthorQuoteSSignature: fhir.Coding;
        readonly IdentityWitnessSignature: fhir.Coding;
        readonly ConsentWitnessSignature: fhir.Coding;
        readonly InterpreterSignature: fhir.Coding;
        readonly ReviewSignature: fhir.Coding;
        readonly SourceSignature: fhir.Coding;
        readonly AddendumSignature: fhir.Coding;
        readonly ModificationSignature: fhir.Coding;
        readonly AdministrativeErrorEditSignature: fhir.Coding;
        readonly TimestampSignature: fhir.Coding;
        readonly CoauthorQuoteSSignature: fhir.Coding;
        readonly CoParticipantQuoteSSignature: fhir.Coding;
        readonly TranscriptionistRecorderSignature: fhir.Coding;
        readonly VerificationSignature: fhir.Coding;
        readonly ValidationSignature: fhir.Coding;
        readonly ConsentSignature: fhir.Coding;
        readonly SignatureWitnessSignature: fhir.Coding;
        readonly EventWitnessSignature: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Signature.d.ts.map