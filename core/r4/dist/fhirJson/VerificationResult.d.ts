import * as fhir from '../fhirJson.js';
/**
 * Information about the primary source(s) involved in validation.
 */
export interface VerificationResultPrimarySource extends fhir.BackboneElement {
    /**
     * Reference to the primary source.
     */
    who?: fhir.Reference | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.CodeableConcept | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.primarySource.validationDate
     */
    _validationDate?: fhir.FhirElement;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.CodeableConcept | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * Information about the entity attesting to information.
 */
export interface VerificationResultAttestation extends fhir.BackboneElement {
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.date
     */
    _date?: fhir.FhirElement;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.sourceIdentityCertificate
     */
    _sourceIdentityCertificate?: fhir.FhirElement;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.proxyIdentityCertificate
     */
    _proxyIdentityCertificate?: fhir.FhirElement;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.Signature | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.Signature | undefined;
}
/**
 * Information about the entity validating information.
 */
export interface VerificationResultValidator extends fhir.BackboneElement {
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.Reference | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.validator.identityCertificate
     */
    _identityCertificate?: fhir.FhirElement;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.Signature | undefined;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface VerificationResult extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult" | null;
    /**
     * A resource that was validated.
     */
    target?: (fhir.Reference | null)[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.targetLocation
     */
    _targetLocation?: (fhir.FhirElement | null)[];
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConcept | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: 'attested' | 'in-process' | 'req-revalid' | 'reval-fail' | 'val-fail' | 'validated' | null;
    /**
     * Extended properties for primitive element: VerificationResult.status
     */
    _status?: fhir.FhirElement;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.CodeableConcept | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.Timing | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.lastPerformed
     */
    _lastPerformed?: fhir.FhirElement;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.nextScheduled
     */
    _nextScheduled?: fhir.FhirElement;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.CodeableConcept | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: (fhir.VerificationResultPrimarySource | null)[] | undefined;
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.VerificationResultAttestation | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: (fhir.VerificationResultValidator | null)[] | undefined;
}
//# sourceMappingURL=VerificationResult.d.ts.map