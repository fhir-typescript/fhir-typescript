import * as fhir from '../fhir.js';
import { VerificationresultStatusCodeType } from '../fhirValueSets/VerificationresultStatusCodes.js';
/**
 * Valid arguments for the VerificationResultPrimarySource type.
 */
export interface VerificationResultPrimarySourceArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to the primary source.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.primarySource.validationDate
     */
    _validationDate?: fhir.FhirElementArgs;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.CodeableConceptArgs | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Information about the primary source(s) involved in validation.
 */
export declare class VerificationResultPrimarySource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reference to the primary source.
     */
    who?: fhir.Reference | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type: fhir.CodeableConcept[];
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod: fhir.CodeableConcept[];
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.CodeableConcept | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: fhir.FhirDateTime | undefined;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.CodeableConcept | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable: fhir.CodeableConcept[];
    /**
     * Default constructor for VerificationResultPrimarySource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VerificationResultPrimarySourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the VerificationResultAttestation type.
 */
export interface VerificationResultAttestationArgs extends fhir.BackboneElementArgs {
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date the information was attested to.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.sourceIdentityCertificate
     */
    _sourceIdentityCertificate?: fhir.FhirElementArgs;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.proxyIdentityCertificate
     */
    _proxyIdentityCertificate?: fhir.FhirElementArgs;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.SignatureArgs | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.SignatureArgs | undefined;
}
/**
 * Information about the entity attesting to information.
 */
export declare class VerificationResultAttestation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.Reference | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: fhir.FhirString | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: fhir.FhirString | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.Signature | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.Signature | undefined;
    /**
     * Default constructor for VerificationResultAttestation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VerificationResultAttestationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the VerificationResultValidator type.
 */
export interface VerificationResultValidatorArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.ReferenceArgs | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.validator.identityCertificate
     */
    _identityCertificate?: fhir.FhirElementArgs;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.SignatureArgs | undefined;
}
/**
 * Information about the entity validating information.
 */
export declare class VerificationResultValidator extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.Reference | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: fhir.FhirString | undefined;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.Signature | undefined;
    /**
     * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VerificationResultValidatorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the VerificationResult type.
 */
export interface VerificationResultArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult" | undefined;
    /**
     * A resource that was validated.
     */
    target?: fhir.ReferenceArgs[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.targetLocation
     */
    _targetLocation?: (fhir.FhirElementArgs | null)[];
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConceptArgs | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: fhir.FhirCode<VerificationresultStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * When the validation status was updated.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.TimingArgs | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.lastPerformed
     */
    _lastPerformed?: fhir.FhirElementArgs;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.nextScheduled
     */
    _nextScheduled?: fhir.FhirElementArgs;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.CodeableConceptArgs | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhir.VerificationResultPrimarySourceArgs[] | undefined;
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.VerificationResultAttestationArgs | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhir.VerificationResultValidatorArgs[] | undefined;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export declare class VerificationResult extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult";
    /**
     * A resource that was validated.
     */
    target: fhir.Reference[];
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation: fhir.FhirString[];
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConcept | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: fhir.FhirCode<VerificationresultStatusCodeType> | null;
    /**
     * When the validation status was updated.
     */
    statusDate?: fhir.FhirDateTime | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.CodeableConcept | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess: fhir.CodeableConcept[];
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.Timing | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: fhir.FhirDateTime | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: fhir.FhirDate | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.CodeableConcept | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource: fhir.VerificationResultPrimarySource[];
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.VerificationResultAttestation | undefined;
    /**
     * Information about the entity validating information.
     */
    validator: fhir.VerificationResultValidator[];
    /**
     * Default constructor for VerificationResult - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VerificationResultArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=VerificationResult.d.ts.map