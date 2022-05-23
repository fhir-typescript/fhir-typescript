// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: VerificationResult

import * as fhir from '../fhir.js';

// @ts-ignore
import { VerificationresultPrimarySourceTypeCodings, VerificationresultPrimarySourceTypeCodingType,} from '../fhirValueSets/VerificationresultPrimarySourceTypeCodings.js';
// @ts-ignore
import { VerificationresultPrimarySourceTypeCodes,  VerificationresultPrimarySourceTypeCodeType } from '../fhirValueSets/VerificationresultPrimarySourceTypeCodes.js';
// @ts-ignore
import { VerificationresultCommunicationMethodCodings, VerificationresultCommunicationMethodCodingType,} from '../fhirValueSets/VerificationresultCommunicationMethodCodings.js';
// @ts-ignore
import { VerificationresultCommunicationMethodCodes,  VerificationresultCommunicationMethodCodeType } from '../fhirValueSets/VerificationresultCommunicationMethodCodes.js';
// @ts-ignore
import { VerificationresultValidationStatusCodings, VerificationresultValidationStatusCodingType,} from '../fhirValueSets/VerificationresultValidationStatusCodings.js';
// @ts-ignore
import { VerificationresultValidationStatusCodes,  VerificationresultValidationStatusCodeType } from '../fhirValueSets/VerificationresultValidationStatusCodes.js';
// @ts-ignore
import { VerificationresultCanPushUpdatesCodings, VerificationresultCanPushUpdatesCodingType,} from '../fhirValueSets/VerificationresultCanPushUpdatesCodings.js';
// @ts-ignore
import { VerificationresultCanPushUpdatesCodes,  VerificationresultCanPushUpdatesCodeType } from '../fhirValueSets/VerificationresultCanPushUpdatesCodes.js';
// @ts-ignore
import { VerificationresultPushTypeAvailableCodings, VerificationresultPushTypeAvailableCodingType,} from '../fhirValueSets/VerificationresultPushTypeAvailableCodings.js';
// @ts-ignore
import { VerificationresultPushTypeAvailableCodes,  VerificationresultPushTypeAvailableCodeType } from '../fhirValueSets/VerificationresultPushTypeAvailableCodes.js';
// @ts-ignore
import { VerificationresultNeedCodings, VerificationresultNeedCodingType,} from '../fhirValueSets/VerificationresultNeedCodings.js';
// @ts-ignore
import { VerificationresultNeedCodes,  VerificationresultNeedCodeType } from '../fhirValueSets/VerificationresultNeedCodes.js';
// @ts-ignore
import { VerificationresultStatusCodings, VerificationresultStatusCodingType,} from '../fhirValueSets/VerificationresultStatusCodings.js';
// @ts-ignore
import { VerificationresultStatusCodes,  VerificationresultStatusCodeType } from '../fhirValueSets/VerificationresultStatusCodes.js';
// @ts-ignore
import { VerificationresultValidationTypeCodings, VerificationresultValidationTypeCodingType,} from '../fhirValueSets/VerificationresultValidationTypeCodings.js';
// @ts-ignore
import { VerificationresultValidationTypeCodes,  VerificationresultValidationTypeCodeType } from '../fhirValueSets/VerificationresultValidationTypeCodes.js';
// @ts-ignore
import { VerificationresultValidationProcessCodings, VerificationresultValidationProcessCodingType,} from '../fhirValueSets/VerificationresultValidationProcessCodings.js';
// @ts-ignore
import { VerificationresultValidationProcessCodes,  VerificationresultValidationProcessCodeType } from '../fhirValueSets/VerificationresultValidationProcessCodes.js';
// @ts-ignore
import { VerificationresultFailureActionCodings, VerificationresultFailureActionCodingType,} from '../fhirValueSets/VerificationresultFailureActionCodings.js';
// @ts-ignore
import { VerificationresultFailureActionCodes,  VerificationresultFailureActionCodeType } from '../fhirValueSets/VerificationresultFailureActionCodes.js';
/**
 * Valid arguments for the VerificationResultPrimarySource type.
 */
export interface VerificationResultPrimarySourceArgs extends fhir.BackboneElementArgs {
  /**
   * Reference to the primary source.
   */
  who?: fhir.ReferenceArgs|undefined;
  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  communicationMethod?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  validationStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * When the target was validated against the primary source.
   */
  validationDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  canPushUpdates?: fhir.CodeableConceptArgs|undefined;
  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  pushTypeAvailable?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * Information about the primary source(s) involved in validation.
 */
export class VerificationResultPrimarySource extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VerificationResultPrimarySource';
  /**
   * Reference to the primary source.
   */
  public who?: fhir.Reference|undefined;
  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  public type: fhir.CodeableConcept[];
  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  public communicationMethod: fhir.CodeableConcept[];
  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  public validationStatus?: fhir.CodeableConcept|undefined;
  /**
   * When the target was validated against the primary source.
   */
  public validationDate?: fhir.FhirDateTime|undefined;
  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  public canPushUpdates?: fhir.CodeableConcept|undefined;
  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  public pushTypeAvailable: fhir.CodeableConcept[];
  /**
   * Default constructor for VerificationResultPrimarySource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VerificationResultPrimarySourceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['who']) { this.who = new fhir.Reference(source.who); }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['communicationMethod']) { this.communicationMethod = source.communicationMethod.map((x) => new fhir.CodeableConcept(x)); }
    else { this.communicationMethod = []; }
    if (source['validationStatus']) { this.validationStatus = new fhir.CodeableConcept(source.validationStatus); }
    if (source['validationDate']) { this.validationDate = new fhir.FhirDateTime({value: source.validationDate}); }
    if (source['canPushUpdates']) { this.canPushUpdates = new fhir.CodeableConcept(source.canPushUpdates); }
    if (source['pushTypeAvailable']) { this.pushTypeAvailable = source.pushTypeAvailable.map((x) => new fhir.CodeableConcept(x)); }
    else { this.pushTypeAvailable = []; }
  }
  /**
   * Preferred-bound Value Set for validationStatus (VerificationResult.primarySource.validationStatus)
   */
  public static get validationStatusPreferredCodings() {
    return VerificationresultValidationStatusCodings;
  }
  /**
   * Preferred-bound Value Set for canPushUpdates (VerificationResult.primarySource.canPushUpdates)
   */
  public static get canPushUpdatesPreferredCodings() {
    return VerificationresultCanPushUpdatesCodings;
  }
  /**
   * Preferred-bound Value Set for pushTypeAvailable (VerificationResult.primarySource.pushTypeAvailable)
   */
  public static get pushTypeAvailablePreferredCodings() {
    return VerificationresultPushTypeAvailableCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["who"]) { issues.push(...this.who.doModelValidation()); }
    if (this["type"]) { this.type.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["communicationMethod"]) { this.communicationMethod.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["validationStatus"]) { issues.push(...this.validationStatus.doModelValidation()); }
    if (this["validationDate"]) { issues.push(...this.validationDate.doModelValidation()); }
    if (this["canPushUpdates"]) { issues.push(...this.canPushUpdates.doModelValidation()); }
    if (this["pushTypeAvailable"]) { this.pushTypeAvailable.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the VerificationResultAttestation type.
 */
export interface VerificationResultAttestationArgs extends fhir.BackboneElementArgs {
  /**
   * The individual or organization attesting to information.
   */
  who?: fhir.ReferenceArgs|undefined;
  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  onBehalfOf?: fhir.ReferenceArgs|undefined;
  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  communicationMethod?: fhir.CodeableConceptArgs|undefined;
  /**
   * The date the information was attested to.
   */
  date?: fhir.FhirDate|string|undefined;
  /**
   * A digital identity certificate associated with the attestation source.
   */
  sourceIdentityCertificate?: fhir.FhirString|string|undefined;
  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  proxyIdentityCertificate?: fhir.FhirString|string|undefined;
  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  proxySignature?: fhir.SignatureArgs|undefined;
  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  sourceSignature?: fhir.SignatureArgs|undefined;
}

/**
 * Information about the entity attesting to information.
 */
export class VerificationResultAttestation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VerificationResultAttestation';
  /**
   * The individual or organization attesting to information.
   */
  public who?: fhir.Reference|undefined;
  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  public communicationMethod?: fhir.CodeableConcept|undefined;
  /**
   * The date the information was attested to.
   */
  public date?: fhir.FhirDate|undefined;
  /**
   * A digital identity certificate associated with the attestation source.
   */
  public sourceIdentityCertificate?: fhir.FhirString|undefined;
  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  public proxyIdentityCertificate?: fhir.FhirString|undefined;
  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  public proxySignature?: fhir.Signature|undefined;
  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  public sourceSignature?: fhir.Signature|undefined;
  /**
   * Default constructor for VerificationResultAttestation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VerificationResultAttestationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['who']) { this.who = new fhir.Reference(source.who); }
    if (source['onBehalfOf']) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf); }
    if (source['communicationMethod']) { this.communicationMethod = new fhir.CodeableConcept(source.communicationMethod); }
    if (source['date']) { this.date = new fhir.FhirDate({value: source.date}); }
    if (source['sourceIdentityCertificate']) { this.sourceIdentityCertificate = new fhir.FhirString({value: source.sourceIdentityCertificate}); }
    if (source['proxyIdentityCertificate']) { this.proxyIdentityCertificate = new fhir.FhirString({value: source.proxyIdentityCertificate}); }
    if (source['proxySignature']) { this.proxySignature = new fhir.Signature(source.proxySignature); }
    if (source['sourceSignature']) { this.sourceSignature = new fhir.Signature(source.sourceSignature); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["who"]) { issues.push(...this.who.doModelValidation()); }
    if (this["onBehalfOf"]) { issues.push(...this.onBehalfOf.doModelValidation()); }
    if (this["communicationMethod"]) { issues.push(...this.communicationMethod.doModelValidation()); }
    if (this["date"]) { issues.push(...this.date.doModelValidation()); }
    if (this["sourceIdentityCertificate"]) { issues.push(...this.sourceIdentityCertificate.doModelValidation()); }
    if (this["proxyIdentityCertificate"]) { issues.push(...this.proxyIdentityCertificate.doModelValidation()); }
    if (this["proxySignature"]) { issues.push(...this.proxySignature.doModelValidation()); }
    if (this["sourceSignature"]) { issues.push(...this.sourceSignature.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the VerificationResultValidator type.
 */
export interface VerificationResultValidatorArgs extends fhir.BackboneElementArgs {
  /**
   * Reference to the organization validating information.
   */
  organization: fhir.ReferenceArgs|null;
  /**
   * A digital identity certificate associated with the validator.
   */
  identityCertificate?: fhir.FhirString|string|undefined;
  /**
   * Signed assertion by the validator that they have validated the information.
   */
  attestationSignature?: fhir.SignatureArgs|undefined;
}

/**
 * Information about the entity validating information.
 */
export class VerificationResultValidator extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VerificationResultValidator';
  /**
   * Reference to the organization validating information.
   */
  public organization: fhir.Reference|null;
  /**
   * A digital identity certificate associated with the validator.
   */
  public identityCertificate?: fhir.FhirString|undefined;
  /**
   * Signed assertion by the validator that they have validated the information.
   */
  public attestationSignature?: fhir.Signature|undefined;
  /**
   * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VerificationResultValidatorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['organization']) { this.organization = new fhir.Reference(source.organization); }
    else { this.organization = null; }
    if (source['identityCertificate']) { this.identityCertificate = new fhir.FhirString({value: source.identityCertificate}); }
    if (source['attestationSignature']) { this.attestationSignature = new fhir.Signature(source.attestationSignature); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['organization']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property organization:fhir.Reference fhir: VerificationResult.validator.organization:Reference' });
    }
    if (this["organization"]) { issues.push(...this.organization.doModelValidation()); }
    if (this["identityCertificate"]) { issues.push(...this.identityCertificate.doModelValidation()); }
    if (this["attestationSignature"]) { issues.push(...this.attestationSignature.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the VerificationResult type.
 */
export interface VerificationResultArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "VerificationResult"|undefined;
  /**
   * A resource that was validated.
   */
  target?: fhir.ReferenceArgs[]|undefined;
  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  targetLocation?: fhir.FhirString[]|string[]|undefined;
  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  need?: fhir.CodeableConceptArgs|undefined;
  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  status: fhir.FhirCode<VerificationresultStatusCodeType>|string|undefined;
  /**
   * When the validation status was updated.
   */
  statusDate?: fhir.FhirDateTime|string|undefined;
  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  validationType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  validationProcess?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Frequency of revalidation.
   */
  frequency?: fhir.TimingArgs|undefined;
  /**
   * The date/time validation was last completed (including failed validations).
   */
  lastPerformed?: fhir.FhirDateTime|string|undefined;
  /**
   * The date when target is next validated, if appropriate.
   */
  nextScheduled?: fhir.FhirDate|string|undefined;
  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  failureAction?: fhir.CodeableConceptArgs|undefined;
  /**
   * Information about the primary source(s) involved in validation.
   */
  primarySource?: fhir.VerificationResultPrimarySourceArgs[]|undefined;
  /**
   * Information about the entity attesting to information.
   */
  attestation?: fhir.VerificationResultAttestationArgs|undefined;
  /**
   * Information about the entity validating information.
   */
  validator?: fhir.VerificationResultValidatorArgs[]|undefined;
}

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export class VerificationResult extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'VerificationResult';
  /**
   * Resource Type Name
   */
  public override resourceType: "VerificationResult";
  /**
   * A resource that was validated.
   */
  public target: fhir.Reference[];
  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  public targetLocation: fhir.FhirString[];
  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  public need?: fhir.CodeableConcept|undefined;
  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  public status: fhir.FhirCode<VerificationresultStatusCodeType>|null;
  /**
   * When the validation status was updated.
   */
  public statusDate?: fhir.FhirDateTime|undefined;
  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  public validationType?: fhir.CodeableConcept|undefined;
  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  public validationProcess: fhir.CodeableConcept[];
  /**
   * Frequency of revalidation.
   */
  public frequency?: fhir.Timing|undefined;
  /**
   * The date/time validation was last completed (including failed validations).
   */
  public lastPerformed?: fhir.FhirDateTime|undefined;
  /**
   * The date when target is next validated, if appropriate.
   */
  public nextScheduled?: fhir.FhirDate|undefined;
  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  public failureAction?: fhir.CodeableConcept|undefined;
  /**
   * Information about the primary source(s) involved in validation.
   */
  public primarySource: fhir.VerificationResultPrimarySource[];
  /**
   * Information about the entity attesting to information.
   */
  public attestation?: fhir.VerificationResultAttestation|undefined;
  /**
   * Information about the entity validating information.
   */
  public validator: fhir.VerificationResultValidator[];
  /**
   * Default constructor for VerificationResult - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<VerificationResultArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'VerificationResult';
    if (source['target']) { this.target = source.target.map((x) => new fhir.Reference(x)); }
    else { this.target = []; }
    if (source['targetLocation']) { this.targetLocation = source.targetLocation.map((x) => new fhir.FhirString({value: x})); }
    else { this.targetLocation = []; }
    if (source['need']) { this.need = new fhir.CodeableConcept(source.need); }
    if (source['status']) { this.status = new fhir.FhirCode<VerificationresultStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['statusDate']) { this.statusDate = new fhir.FhirDateTime({value: source.statusDate}); }
    if (source['validationType']) { this.validationType = new fhir.CodeableConcept(source.validationType); }
    if (source['validationProcess']) { this.validationProcess = source.validationProcess.map((x) => new fhir.CodeableConcept(x)); }
    else { this.validationProcess = []; }
    if (source['frequency']) { this.frequency = new fhir.Timing(source.frequency); }
    if (source['lastPerformed']) { this.lastPerformed = new fhir.FhirDateTime({value: source.lastPerformed}); }
    if (source['nextScheduled']) { this.nextScheduled = new fhir.FhirDate({value: source.nextScheduled}); }
    if (source['failureAction']) { this.failureAction = new fhir.CodeableConcept(source.failureAction); }
    if (source['primarySource']) { this.primarySource = source.primarySource.map((x) => new fhir.VerificationResultPrimarySource(x)); }
    else { this.primarySource = []; }
    if (source['attestation']) { this.attestation = new fhir.VerificationResultAttestation(source.attestation); }
    if (source['validator']) { this.validator = source.validator.map((x) => new fhir.VerificationResultValidator(x)); }
    else { this.validator = []; }
  }
  /**
   * Preferred-bound Value Set for need (VerificationResult.need)
   */
  public static get needPreferredCodings() {
    return VerificationresultNeedCodings;
  }
  /**
   * Required-bound Value Set for status (VerificationResult.status)
   */
  public static get statusRequiredCodes() {
    return VerificationresultStatusCodes;
  }
  /**
   * Preferred-bound Value Set for validationType (VerificationResult.validationType)
   */
  public static get validationTypePreferredCodings() {
    return VerificationresultValidationTypeCodings;
  }
  /**
   * Preferred-bound Value Set for failureAction (VerificationResult.failureAction)
   */
  public static get failureActionPreferredCodings() {
    return VerificationresultFailureActionCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"VerificationResult" fhir: VerificationResult.resourceType:"VerificationResult"' });
    }
    if (this["target"]) { this.target.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["targetLocation"]) { this.targetLocation.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["need"]) { issues.push(...this.need.doModelValidation()); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<VerificationresultStatusCodeType> fhir: VerificationResult.status:code' });
    }
    if (this['status'] && (!Object.values(VerificationresultStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<VerificationresultStatusCodeType> fhir: VerificationResult.status:code Required binding to: VerificationresultStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["statusDate"]) { issues.push(...this.statusDate.doModelValidation()); }
    if (this["validationType"]) { issues.push(...this.validationType.doModelValidation()); }
    if (this["validationProcess"]) { this.validationProcess.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["frequency"]) { issues.push(...this.frequency.doModelValidation()); }
    if (this["lastPerformed"]) { issues.push(...this.lastPerformed.doModelValidation()); }
    if (this["nextScheduled"]) { issues.push(...this.nextScheduled.doModelValidation()); }
    if (this["failureAction"]) { issues.push(...this.failureAction.doModelValidation()); }
    if (this["primarySource"]) { this.primarySource.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["attestation"]) { issues.push(...this.attestation.doModelValidation()); }
    if (this["validator"]) { this.validator.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
