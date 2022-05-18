// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Immunization

import * as fhir from '../fhir.js';

// @ts-ignore
import { ImmunizationFunctionCodings, ImmunizationFunctionCodingType,} from '../fhirValueSets/ImmunizationFunctionCodings.js';
// @ts-ignore
import { ImmunizationFunctionCodes,  ImmunizationFunctionCodeType } from '../fhirValueSets/ImmunizationFunctionCodes.js';
// @ts-ignore
import { ImmunizationTargetDiseaseCodings, ImmunizationTargetDiseaseCodingType,} from '../fhirValueSets/ImmunizationTargetDiseaseCodings.js';
// @ts-ignore
import { ImmunizationTargetDiseaseCodes,  ImmunizationTargetDiseaseCodeType } from '../fhirValueSets/ImmunizationTargetDiseaseCodes.js';
// @ts-ignore
import { ImmunizationStatusCodings, ImmunizationStatusCodingType,} from '../fhirValueSets/ImmunizationStatusCodings.js';
// @ts-ignore
import { ImmunizationStatusCodes,  ImmunizationStatusCodeType } from '../fhirValueSets/ImmunizationStatusCodes.js';
// @ts-ignore
import { ImmunizationStatusReasonCodings, ImmunizationStatusReasonCodingType,} from '../fhirValueSets/ImmunizationStatusReasonCodings.js';
// @ts-ignore
import { ImmunizationStatusReasonCodes,  ImmunizationStatusReasonCodeType } from '../fhirValueSets/ImmunizationStatusReasonCodes.js';
// @ts-ignore
import { VaccineCodeCodings, VaccineCodeCodingType,} from '../fhirValueSets/VaccineCodeCodings.js';
// @ts-ignore
import { VaccineCodeCodes,  VaccineCodeCodeType } from '../fhirValueSets/VaccineCodeCodes.js';
// @ts-ignore
import { ImmunizationOriginCodings, ImmunizationOriginCodingType,} from '../fhirValueSets/ImmunizationOriginCodings.js';
// @ts-ignore
import { ImmunizationOriginCodes,  ImmunizationOriginCodeType } from '../fhirValueSets/ImmunizationOriginCodes.js';
// @ts-ignore
import { ImmunizationSiteCodings, ImmunizationSiteCodingType,} from '../fhirValueSets/ImmunizationSiteCodings.js';
// @ts-ignore
import { ImmunizationSiteCodes,  ImmunizationSiteCodeType } from '../fhirValueSets/ImmunizationSiteCodes.js';
// @ts-ignore
import { ImmunizationRouteCodings, ImmunizationRouteCodingType,} from '../fhirValueSets/ImmunizationRouteCodings.js';
// @ts-ignore
import { ImmunizationRouteCodes,  ImmunizationRouteCodeType } from '../fhirValueSets/ImmunizationRouteCodes.js';
// @ts-ignore
import { ImmunizationReasonCodings, ImmunizationReasonCodingType,} from '../fhirValueSets/ImmunizationReasonCodings.js';
// @ts-ignore
import { ImmunizationReasonCodes,  ImmunizationReasonCodeType } from '../fhirValueSets/ImmunizationReasonCodes.js';
// @ts-ignore
import { ImmunizationSubpotentReasonCodings, ImmunizationSubpotentReasonCodingType,} from '../fhirValueSets/ImmunizationSubpotentReasonCodings.js';
// @ts-ignore
import { ImmunizationSubpotentReasonCodes,  ImmunizationSubpotentReasonCodeType } from '../fhirValueSets/ImmunizationSubpotentReasonCodes.js';
// @ts-ignore
import { ImmunizationProgramEligibilityCodings, ImmunizationProgramEligibilityCodingType,} from '../fhirValueSets/ImmunizationProgramEligibilityCodings.js';
// @ts-ignore
import { ImmunizationProgramEligibilityCodes,  ImmunizationProgramEligibilityCodeType } from '../fhirValueSets/ImmunizationProgramEligibilityCodes.js';
// @ts-ignore
import { ImmunizationFundingSourceCodings, ImmunizationFundingSourceCodingType,} from '../fhirValueSets/ImmunizationFundingSourceCodings.js';
// @ts-ignore
import { ImmunizationFundingSourceCodes,  ImmunizationFundingSourceCodeType } from '../fhirValueSets/ImmunizationFundingSourceCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the ImmunizationPerformer type.
 */
export interface ImmunizationPerformerArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  function?: fhir.CodeableConceptArgs|undefined;
  /**
   * When the individual practitioner who performed the action is known, it is best to send.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * Indicates who performed the immunization event.
 */
export class ImmunizationPerformer extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationPerformer';
  /**
   * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * When the individual practitioner who performed the action is known, it is best to send.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for ImmunizationPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationPerformerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Extensible-bound Value Set for function (Immunization.performer.function)
   */
  public static functionExtensibleCoding():ImmunizationFunctionCodingType {
    return ImmunizationFunctionCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["function"]) { outcome.issue!.push(...this.function.doModelValidation().issue!); }
    if (!this['actor']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property actor:fhir.Reference fhir: Immunization.performer.actor:Reference', }));
    }
    if (this["actor"]) { outcome.issue!.push(...this.actor.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the ImmunizationEducation type.
 */
export interface ImmunizationEducationArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier of the material presented to the patient.
   */
  documentType?: fhir.FhirString|string|undefined;
  /**
   * Reference pointer to the educational material given to the patient if the information was on line.
   */
  reference?: fhir.FhirUri|string|undefined;
  /**
   * Date the educational material was published.
   */
  publicationDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Date the educational material was given to the patient.
   */
  presentationDate?: fhir.FhirDateTime|string|undefined;
}

/**
 * Educational material presented to the patient (or guardian) at the time of vaccine administration.
 */
export class ImmunizationEducation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationEducation';
  /**
   * Identifier of the material presented to the patient.
   */
  public documentType?: fhir.FhirString|undefined;
  /**
   * Reference pointer to the educational material given to the patient if the information was on line.
   */
  public reference?: fhir.FhirUri|undefined;
  /**
   * Date the educational material was published.
   */
  public publicationDate?: fhir.FhirDateTime|undefined;
  /**
   * Date the educational material was given to the patient.
   */
  public presentationDate?: fhir.FhirDateTime|undefined;
  /**
   * Default constructor for ImmunizationEducation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationEducationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['documentType']) { this.documentType = new fhir.FhirString({value: source.documentType}); }
    if (source['reference']) { this.reference = new fhir.FhirUri({value: source.reference}); }
    if (source['publicationDate']) { this.publicationDate = new fhir.FhirDateTime({value: source.publicationDate}); }
    if (source['presentationDate']) { this.presentationDate = new fhir.FhirDateTime({value: source.presentationDate}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["documentType"]) { outcome.issue!.push(...this.documentType.doModelValidation().issue!); }
    if (this["reference"]) { outcome.issue!.push(...this.reference.doModelValidation().issue!); }
    if (this["publicationDate"]) { outcome.issue!.push(...this.publicationDate.doModelValidation().issue!); }
    if (this["presentationDate"]) { outcome.issue!.push(...this.presentationDate.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the ImmunizationReaction type.
 */
export interface ImmunizationReactionArgs extends fhir.BackboneElementArgs {
  /**
   * Date of reaction to the immunization.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Details of the reaction.
   */
  detail?: fhir.ReferenceArgs|undefined;
  /**
   * Self-reported indicator.
   */
  reported?: fhir.FhirBoolean|boolean|undefined;
}

/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
 */
export class ImmunizationReaction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationReaction';
  /**
   * Date of reaction to the immunization.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Details of the reaction.
   */
  public detail?: fhir.Reference|undefined;
  /**
   * Self-reported indicator.
   */
  public reported?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for ImmunizationReaction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationReactionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['detail']) { this.detail = new fhir.Reference(source.detail); }
    if (source['reported']) { this.reported = new fhir.FhirBoolean({value: source.reported}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["detail"]) { outcome.issue!.push(...this.detail.doModelValidation().issue!); }
    if (this["reported"]) { outcome.issue!.push(...this.reported.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the ImmunizationProtocolApplied type.
 */
export interface ImmunizationProtocolAppliedArgs extends fhir.BackboneElementArgs {
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: fhir.FhirString|string|undefined;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   */
  authority?: fhir.ReferenceArgs|undefined;
  /**
   * The vaccine preventable disease the dose is being administered against.
   */
  targetDisease?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumber?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: fhir.FhirString|string|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDoses?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: fhir.FhirString|string|undefined;
}

/**
 * The protocol (set of recommendations) being followed by the provider who administered the dose.
 */
export class ImmunizationProtocolApplied extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationProtocolApplied';
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  public series?: fhir.FhirString|undefined;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   */
  public authority?: fhir.Reference|undefined;
  /**
   * The vaccine preventable disease the dose is being administered against.
   */
  public targetDisease?: fhir.CodeableConcept[];
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  public doseNumber: (fhir.FhirPositiveInt|fhir.FhirString)|null;
  /**
   * Internal flag to properly serialize choice-type element Immunization.protocolApplied.doseNumber[x]
   */
  protected static readonly _fts_doseNumberIsChoice:true = true;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  public seriesDoses?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Immunization.protocolApplied.seriesDoses[x]
   */
  protected static readonly _fts_seriesDosesIsChoice:true = true;
  /**
   * Default constructor for ImmunizationProtocolApplied - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationProtocolAppliedArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['series']) { this.series = new fhir.FhirString({value: source.series}); }
    if (source['authority']) { this.authority = new fhir.Reference(source.authority); }
    if (source['targetDisease']) { this.targetDisease = source.targetDisease.map((x) => new fhir.CodeableConcept(x)); }
    else { this.targetDisease = []; }
    if (source['doseNumber']) { this.doseNumber = source.doseNumber; }
    else if (source['doseNumberPositiveInt']) { this.doseNumber = new fhir.FhirPositiveInt({value: source.doseNumberPositiveInt}); }
    else if (source['doseNumberString']) { this.doseNumber = new fhir.FhirString({value: source.doseNumberString}); }
    else { this.doseNumber = null; }
    if (source['seriesDoses']) { this.seriesDoses = source.seriesDoses; }
    else if (source['seriesDosesPositiveInt']) { this.seriesDoses = new fhir.FhirPositiveInt({value: source.seriesDosesPositiveInt}); }
    else if (source['seriesDosesString']) { this.seriesDoses = new fhir.FhirString({value: source.seriesDosesString}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["series"]) { outcome.issue!.push(...this.series.doModelValidation().issue!); }
    if (this["authority"]) { outcome.issue!.push(...this.authority.doModelValidation().issue!); }
    if (this["targetDisease"]) { this.targetDisease.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['doseNumber']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property doseNumber: fhir: Immunization.protocolApplied.doseNumber[x]:', }));
    }
    return outcome;
  }
}
/**
 * Valid arguments for the Immunization type.
 */
export interface ImmunizationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Immunization"|undefined;
  /**
   * A unique identifier assigned to this immunization record.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ImmunizationStatusCodeType|null;
  /**
   * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
   */
  statusReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * Vaccine that was administered or was to be administered.
   */
  vaccineCode: fhir.CodeableConceptArgs|null;
  /**
   * The patient who either received or did not receive the immunization.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   */
  occurrence?: fhir.FhirDateTime|fhir.FhirString|undefined;
  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   */
  occurrenceString?: fhir.FhirString|string|undefined;
  /**
   * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
   */
  recorded?: fhir.FhirDateTime|string|undefined;
  /**
   * Reflects the “reliability” of the content.
   */
  primarySource?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Should not be populated if primarySource = True, not required even if primarySource = False.
   */
  reportOrigin?: fhir.CodeableConceptArgs|undefined;
  /**
   * The service delivery location where the vaccine administration occurred.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Name of vaccine manufacturer.
   */
  manufacturer?: fhir.ReferenceArgs|undefined;
  /**
   * Lot number of the  vaccine product.
   */
  lotNumber?: fhir.FhirString|string|undefined;
  /**
   * Date vaccine batch expires.
   */
  expirationDate?: fhir.FhirDate|string|undefined;
  /**
   * Body site where vaccine was administered.
   */
  site?: fhir.CodeableConceptArgs|undefined;
  /**
   * The path by which the vaccine product is taken into the body.
   */
  route?: fhir.CodeableConceptArgs|undefined;
  /**
   * The quantity of vaccine product that was administered.
   */
  doseQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Indicates who performed the immunization event.
   */
  performer?: fhir.ImmunizationPerformerArgs[]|undefined;
  /**
   * Extra information about the immunization that is not conveyed by the other attributes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Reasons why the vaccine was administered.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
   */
  isSubpotent?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Reason why a dose is considered to be subpotent.
   */
  subpotentReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Educational material presented to the patient (or guardian) at the time of vaccine administration.
   */
  education?: fhir.ImmunizationEducationArgs[]|undefined;
  /**
   * Indicates a patient's eligibility for a funding program.
   */
  programEligibility?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
   */
  fundingSource?: fhir.CodeableConceptArgs|undefined;
  /**
   * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
   */
  reaction?: fhir.ImmunizationReactionArgs[]|undefined;
  /**
   * The protocol (set of recommendations) being followed by the provider who administered the dose.
   */
  protocolApplied?: fhir.ImmunizationProtocolAppliedArgs[]|undefined;
}

/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export class Immunization extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'Immunization';
  /**
   * Resource Type Name
   */
  public resourceType: "Immunization";
  /**
   * A unique identifier assigned to this immunization record.
   */
  public identifier?: fhir.Identifier[];
  /**
   * Will generally be set to show that the immunization has been completed or not done.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: ImmunizationStatusCodeType|null;
  /**
   * This is generally only used for the status of "not-done". The reason for performing the immunization event is captured in reasonCode, not here.
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * Vaccine that was administered or was to be administered.
   */
  public vaccineCode: fhir.CodeableConcept|null;
  /**
   * The patient who either received or did not receive the immunization.
   */
  public patient: fhir.Reference|null;
  /**
   * The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given. An exact date is always preferable, but the use of the String data type is acceptable when an exact date is not known. A small number of vaccines (e.g. live oral typhoid vaccine) are given as a series of patient self-administered dose over a span of time. In cases like this, often, only the first dose (typically a provider supervised dose) is recorded with the occurrence indicating the date/time of the first dose.
   */
  public occurrence: (fhir.FhirDateTime|fhir.FhirString)|null;
  /**
   * Internal flag to properly serialize choice-type element Immunization.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event.
   */
  public recorded?: fhir.FhirDateTime|undefined;
  /**
   * Reflects the “reliability” of the content.
   */
  public primarySource?: fhir.FhirBoolean|undefined;
  /**
   * Should not be populated if primarySource = True, not required even if primarySource = False.
   */
  public reportOrigin?: fhir.CodeableConcept|undefined;
  /**
   * The service delivery location where the vaccine administration occurred.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Name of vaccine manufacturer.
   */
  public manufacturer?: fhir.Reference|undefined;
  /**
   * Lot number of the  vaccine product.
   */
  public lotNumber?: fhir.FhirString|undefined;
  /**
   * Date vaccine batch expires.
   */
  public expirationDate?: fhir.FhirDate|undefined;
  /**
   * Body site where vaccine was administered.
   */
  public site?: fhir.CodeableConcept|undefined;
  /**
   * The path by which the vaccine product is taken into the body.
   */
  public route?: fhir.CodeableConcept|undefined;
  /**
   * The quantity of vaccine product that was administered.
   */
  public doseQuantity?: fhir.Quantity|undefined;
  /**
   * Indicates who performed the immunization event.
   */
  public performer?: fhir.ImmunizationPerformer[];
  /**
   * Extra information about the immunization that is not conveyed by the other attributes.
   */
  public note?: fhir.Annotation[];
  /**
   * Reasons why the vaccine was administered.
   */
  public reasonCode?: fhir.CodeableConcept[];
  /**
   * Condition, Observation or DiagnosticReport that supports why the immunization was administered.
   */
  public reasonReference?: fhir.Reference[];
  /**
   * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of a manufacturer recall after administration). However, in the case of a partial administration (the patient moves unexpectedly and only some of the dose is actually administered), subpotency may be recognized immediately, but it is still important to record the event.
   */
  public isSubpotent?: fhir.FhirBoolean|undefined;
  /**
   * Reason why a dose is considered to be subpotent.
   */
  public subpotentReason?: fhir.CodeableConcept[];
  /**
   * Educational material presented to the patient (or guardian) at the time of vaccine administration.
   */
  public education?: fhir.ImmunizationEducation[];
  /**
   * Indicates a patient's eligibility for a funding program.
   */
  public programEligibility?: fhir.CodeableConcept[];
  /**
   * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered).
   */
  public fundingSource?: fhir.CodeableConcept|undefined;
  /**
   * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be recorded as a new AllergyIntolerance resource instance as most systems will not query against past Immunization.reaction elements.
   */
  public reaction?: fhir.ImmunizationReaction[];
  /**
   * The protocol (set of recommendations) being followed by the provider who administered the dose.
   */
  public protocolApplied?: fhir.ImmunizationProtocolApplied[];
  /**
   * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Immunization';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['statusReason']) { this.statusReason = new fhir.CodeableConcept(source.statusReason); }
    if (source['vaccineCode']) { this.vaccineCode = new fhir.CodeableConcept(source.vaccineCode); }
    else { this.vaccineCode = null; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrenceString']) { this.occurrence = new fhir.FhirString({value: source.occurrenceString}); }
    else { this.occurrence = null; }
    if (source['recorded']) { this.recorded = new fhir.FhirDateTime({value: source.recorded}); }
    if (source['primarySource']) { this.primarySource = new fhir.FhirBoolean({value: source.primarySource}); }
    if (source['reportOrigin']) { this.reportOrigin = new fhir.CodeableConcept(source.reportOrigin); }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['manufacturer']) { this.manufacturer = new fhir.Reference(source.manufacturer); }
    if (source['lotNumber']) { this.lotNumber = new fhir.FhirString({value: source.lotNumber}); }
    if (source['expirationDate']) { this.expirationDate = new fhir.FhirDate({value: source.expirationDate}); }
    if (source['site']) { this.site = new fhir.CodeableConcept(source.site); }
    if (source['route']) { this.route = new fhir.CodeableConcept(source.route); }
    if (source['doseQuantity']) { this.doseQuantity = new fhir.Quantity(source.doseQuantity); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ImmunizationPerformer(x)); }
    else { this.performer = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['isSubpotent']) { this.isSubpotent = new fhir.FhirBoolean({value: source.isSubpotent}); }
    if (source['subpotentReason']) { this.subpotentReason = source.subpotentReason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.subpotentReason = []; }
    if (source['education']) { this.education = source.education.map((x) => new fhir.ImmunizationEducation(x)); }
    else { this.education = []; }
    if (source['programEligibility']) { this.programEligibility = source.programEligibility.map((x) => new fhir.CodeableConcept(x)); }
    else { this.programEligibility = []; }
    if (source['fundingSource']) { this.fundingSource = new fhir.CodeableConcept(source.fundingSource); }
    if (source['reaction']) { this.reaction = source.reaction.map((x) => new fhir.ImmunizationReaction(x)); }
    else { this.reaction = []; }
    if (source['protocolApplied']) { this.protocolApplied = source.protocolApplied.map((x) => new fhir.ImmunizationProtocolApplied(x)); }
    else { this.protocolApplied = []; }
  }
  /**
   * Required-bound Value Set for status (Immunization.status)
   */
  public static statusRequiredCoding():ImmunizationStatusCodingType {
    return ImmunizationStatusCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"Immunization" fhir: Immunization.resourceType:"Immunization"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:ImmunizationStatusCodeType fhir: Immunization.status:code', }));
    }
    if (this["statusReason"]) { outcome.issue!.push(...this.statusReason.doModelValidation().issue!); }
    if (!this['vaccineCode']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property vaccineCode:fhir.CodeableConcept fhir: Immunization.vaccineCode:CodeableConcept', }));
    }
    if (this["vaccineCode"]) { outcome.issue!.push(...this.vaccineCode.doModelValidation().issue!); }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property patient:fhir.Reference fhir: Immunization.patient:Reference', }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (!this['occurrence']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property occurrence: fhir: Immunization.occurrence[x]:', }));
    }
    if (this["recorded"]) { outcome.issue!.push(...this.recorded.doModelValidation().issue!); }
    if (this["primarySource"]) { outcome.issue!.push(...this.primarySource.doModelValidation().issue!); }
    if (this["reportOrigin"]) { outcome.issue!.push(...this.reportOrigin.doModelValidation().issue!); }
    if (this["location"]) { outcome.issue!.push(...this.location.doModelValidation().issue!); }
    if (this["manufacturer"]) { outcome.issue!.push(...this.manufacturer.doModelValidation().issue!); }
    if (this["lotNumber"]) { outcome.issue!.push(...this.lotNumber.doModelValidation().issue!); }
    if (this["expirationDate"]) { outcome.issue!.push(...this.expirationDate.doModelValidation().issue!); }
    if (this["site"]) { outcome.issue!.push(...this.site.doModelValidation().issue!); }
    if (this["route"]) { outcome.issue!.push(...this.route.doModelValidation().issue!); }
    if (this["doseQuantity"]) { outcome.issue!.push(...this.doseQuantity.doModelValidation().issue!); }
    if (this["performer"]) { this.performer.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["isSubpotent"]) { outcome.issue!.push(...this.isSubpotent.doModelValidation().issue!); }
    if (this["subpotentReason"]) { this.subpotentReason.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["education"]) { this.education.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["programEligibility"]) { this.programEligibility.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["fundingSource"]) { outcome.issue!.push(...this.fundingSource.doModelValidation().issue!); }
    if (this["reaction"]) { this.reaction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["protocolApplied"]) { this.protocolApplied.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
