// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Immunization

import * as fhir from '../fhir.js';

// @ts-ignore
import { ImmunizationRoleCodes,  ImmunizationRoleCodeType } from '../fhirValueSets/ImmunizationRoleCodes.js';
// @ts-ignore
import { ImmunizationRoleVsValidation } from '../fhirValueSets/ImmunizationRoleVsValidation.js';
// @ts-ignore
import { ImmunizationReasonCodes,  ImmunizationReasonCodeType } from '../fhirValueSets/ImmunizationReasonCodes.js';
// @ts-ignore
import { ImmunizationReasonVsValidation } from '../fhirValueSets/ImmunizationReasonVsValidation.js';
// @ts-ignore
import { NoImmunizationReasonCodes,  NoImmunizationReasonCodeType } from '../fhirValueSets/NoImmunizationReasonCodes.js';
// @ts-ignore
import { NoImmunizationReasonVsValidation } from '../fhirValueSets/NoImmunizationReasonVsValidation.js';
// @ts-ignore
import { VaccinationProtocolDoseTargetCodes,  VaccinationProtocolDoseTargetCodeType } from '../fhirValueSets/VaccinationProtocolDoseTargetCodes.js';
// @ts-ignore
import { VaccinationProtocolDoseTargetVsValidation } from '../fhirValueSets/VaccinationProtocolDoseTargetVsValidation.js';
// @ts-ignore
import { VaccinationProtocolDoseStatusCodes,  VaccinationProtocolDoseStatusCodeType } from '../fhirValueSets/VaccinationProtocolDoseStatusCodes.js';
// @ts-ignore
import { VaccinationProtocolDoseStatusVsValidation } from '../fhirValueSets/VaccinationProtocolDoseStatusVsValidation.js';
// @ts-ignore
import { VaccinationProtocolDoseStatusReasonCodes,  VaccinationProtocolDoseStatusReasonCodeType } from '../fhirValueSets/VaccinationProtocolDoseStatusReasonCodes.js';
// @ts-ignore
import { VaccinationProtocolDoseStatusReasonVsValidation } from '../fhirValueSets/VaccinationProtocolDoseStatusReasonVsValidation.js';
// @ts-ignore
import { ImmunizationStatusCodes,  ImmunizationStatusCodeType } from '../fhirValueSets/ImmunizationStatusCodes.js';
// @ts-ignore
import { ImmunizationStatusVsValidation } from '../fhirValueSets/ImmunizationStatusVsValidation.js';
// @ts-ignore
import { VaccineCodes,  VaccineCodeType } from '../fhirValueSets/VaccineCodes.js';
// @ts-ignore
import { VaccineVsValidation } from '../fhirValueSets/VaccineVsValidation.js';
// @ts-ignore
import { ImmunizationOriginCodes,  ImmunizationOriginCodeType } from '../fhirValueSets/ImmunizationOriginCodes.js';
// @ts-ignore
import { ImmunizationOriginVsValidation } from '../fhirValueSets/ImmunizationOriginVsValidation.js';
// @ts-ignore
import { ImmunizationSiteCodes,  ImmunizationSiteCodeType } from '../fhirValueSets/ImmunizationSiteCodes.js';
// @ts-ignore
import { ImmunizationSiteVsValidation } from '../fhirValueSets/ImmunizationSiteVsValidation.js';
// @ts-ignore
import { ImmunizationRouteCodes,  ImmunizationRouteCodeType } from '../fhirValueSets/ImmunizationRouteCodes.js';
// @ts-ignore
import { ImmunizationRouteVsValidation } from '../fhirValueSets/ImmunizationRouteVsValidation.js';
/**
 * Valid arguments for the ImmunizationPractitioner type.
 */
export interface ImmunizationPractitionerArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  role?: fhir.CodeableConceptArgs|undefined;
  /**
   * The device, practitioner, etc. who performed the action.
   */
  actor: fhir.ReferenceArgs|null;
}

/**
 * Indicates who or what performed the event.
 */
export class ImmunizationPractitioner extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationPractitioner';
  /**
   * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * The device, practitioner, etc. who performed the action.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for ImmunizationPractitioner - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationPractitionerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    else { this.actor = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Immunization.practitioner' }
    iss.push(...this.vOS('role',exp));
    iss.push(...this.vRS('actor',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImmunizationExplanation type.
 */
export interface ImmunizationExplanationArgs extends fhir.BackboneElementArgs {
  /**
   * Reasons why a vaccine was administered.
   */
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Reason why a vaccine was not administered.
   */
  reasonNotGiven?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * Reasons why a vaccine was or was not administered.
 */
export class ImmunizationExplanation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationExplanation';
  /**
   * Reasons why a vaccine was administered.
   */
  public reason: fhir.CodeableConcept[];
  /**
   * Reason why a vaccine was not administered.
   */
  public reasonNotGiven: fhir.CodeableConcept[];
  /**
   * Default constructor for ImmunizationExplanation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationExplanationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reason = []; }
    if (source['reasonNotGiven']) { this.reasonNotGiven = source.reasonNotGiven.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonNotGiven = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Immunization.explanation' }
    iss.push(...this.vOA('reason',exp));
    iss.push(...this.vOA('reasonNotGiven',exp));
    return iss;
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
   * Extended properties for primitive element: Immunization.reaction.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Details of the reaction.
   */
  detail?: fhir.ReferenceArgs|undefined;
  /**
   * Self-reported indicator.
   */
  reported?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Immunization.reaction.reported
   */
  _reported?:fhir.FhirElementArgs;
}

/**
 * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
 */
export class ImmunizationReaction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationReaction';
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
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['detail']) { this.detail = new fhir.Reference(source.detail); }
    if (source['reported']) { this.reported = new fhir.FhirBoolean({value: source.reported}); }
    if (source['_reported']) {
      if (this.reported) { this.reported.addExtendedProperties(source._reported!); }
      else { this.reported = new fhir.FhirBoolean(source._reported as Partial<fhir.FhirBooleanArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Immunization.reaction' }
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('detail',exp));
    iss.push(...this.vOS('reported',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ImmunizationVaccinationProtocol type.
 */
export interface ImmunizationVaccinationProtocolArgs extends fhir.BackboneElementArgs {
  /**
   * Nominal position in a series.
   */
  doseSequence?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Immunization.vaccinationProtocol.doseSequence
   */
  _doseSequence?:fhir.FhirElementArgs;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Immunization.vaccinationProtocol.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Indicates the authority who published the protocol.  E.g. ACIP.
   */
  authority?: fhir.ReferenceArgs|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Immunization.vaccinationProtocol.series
   */
  _series?:fhir.FhirElementArgs;
  /**
   * The recommended number of doses to achieve immunity.
   */
  seriesDoses?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Immunization.vaccinationProtocol.seriesDoses
   */
  _seriesDoses?:fhir.FhirElementArgs;
  /**
   * The targeted disease.
   */
  targetDisease: fhir.CodeableConceptArgs[]|null;
  /**
   * May need to differentiate between status declarations by a provider vs. a CDS engine.
   */
  doseStatus: fhir.CodeableConceptArgs|null;
  /**
   * Provides an explanation as to why an immunization event should or should not count against the protocol.
   */
  doseStatusReason?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Contains information about the protocol(s) under which the vaccine was administered.
 */
export class ImmunizationVaccinationProtocol extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ImmunizationVaccinationProtocol';
  /**
   * Nominal position in a series.
   */
  public doseSequence?: fhir.FhirPositiveInt|undefined;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Indicates the authority who published the protocol.  E.g. ACIP.
   */
  public authority?: fhir.Reference|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  public series?: fhir.FhirString|undefined;
  /**
   * The recommended number of doses to achieve immunity.
   */
  public seriesDoses?: fhir.FhirPositiveInt|undefined;
  /**
   * The targeted disease.
   */
  public targetDisease: fhir.CodeableConcept[];
  /**
   * May need to differentiate between status declarations by a provider vs. a CDS engine.
   */
  public doseStatus: fhir.CodeableConcept|null;
  /**
   * Provides an explanation as to why an immunization event should or should not count against the protocol.
   */
  public doseStatusReason?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ImmunizationVaccinationProtocol - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationVaccinationProtocolArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['doseSequence']) { this.doseSequence = new fhir.FhirPositiveInt({value: source.doseSequence}); }
    if (source['_doseSequence']) {
      if (this.doseSequence) { this.doseSequence.addExtendedProperties(source._doseSequence!); }
      else { this.doseSequence = new fhir.FhirPositiveInt(source._doseSequence as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['authority']) { this.authority = new fhir.Reference(source.authority); }
    if (source['series']) { this.series = new fhir.FhirString({value: source.series}); }
    if (source['_series']) {
      if (this.series) { this.series.addExtendedProperties(source._series!); }
      else { this.series = new fhir.FhirString(source._series as Partial<fhir.FhirStringArgs>); }
    }
    if (source['seriesDoses']) { this.seriesDoses = new fhir.FhirPositiveInt({value: source.seriesDoses}); }
    if (source['_seriesDoses']) {
      if (this.seriesDoses) { this.seriesDoses.addExtendedProperties(source._seriesDoses!); }
      else { this.seriesDoses = new fhir.FhirPositiveInt(source._seriesDoses as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['targetDisease']) { this.targetDisease = source.targetDisease.map((x) => new fhir.CodeableConcept(x)); }
    else { this.targetDisease = []; }
    if (source['doseStatus']) { this.doseStatus = new fhir.CodeableConcept(source.doseStatus); }
    else { this.doseStatus = null; }
    if (source['doseStatusReason']) { this.doseStatusReason = new fhir.CodeableConcept(source.doseStatusReason); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Immunization.vaccinationProtocol' }
    iss.push(...this.vOS('doseSequence',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('authority',exp));
    iss.push(...this.vOS('series',exp));
    iss.push(...this.vOS('seriesDoses',exp));
    iss.push(...this.vRA('targetDisease',exp));
    iss.push(...this.vRS('doseStatus',exp));
    iss.push(...this.vOS('doseStatusReason',exp));
    return iss;
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
   * Will generally be set to show that the immunization has been completed.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<ImmunizationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Immunization.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * This element is labeled as a modifier because it indicates that an immunization didn't happen.
   */
  notGiven: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Immunization.notGiven
   */
  _notGiven?:fhir.FhirElementArgs;
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
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Immunization.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Reflects the “reliability” of the content.
   */
  primarySource: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Immunization.primarySource
   */
  _primarySource?:fhir.FhirElementArgs;
  /**
   * Should not be populated if primarySource = True, will not be required even if primarySource = False.
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
   * Extended properties for primitive element: Immunization.lotNumber
   */
  _lotNumber?:fhir.FhirElementArgs;
  /**
   * Date vaccine batch expires.
   */
  expirationDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: Immunization.expirationDate
   */
  _expirationDate?:fhir.FhirElementArgs;
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
   * Indicates who or what performed the event.
   */
  practitioner?: fhir.ImmunizationPractitionerArgs[]|undefined;
  /**
   * Extra information about the immunization that is not conveyed by the other attributes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Reasons why a vaccine was or was not administered.
   */
  explanation?: fhir.ImmunizationExplanationArgs|undefined;
  /**
   * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
   */
  reaction?: fhir.ImmunizationReactionArgs[]|undefined;
  /**
   * Contains information about the protocol(s) under which the vaccine was administered.
   */
  vaccinationProtocol?: fhir.ImmunizationVaccinationProtocolArgs[]|undefined;
}

/**
 * Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
 */
export class Immunization extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Immunization';
  /**
   * Resource Type Name
   */
  public override resourceType: "Immunization";
  /**
   * A unique identifier assigned to this immunization record.
   */
  public identifier: fhir.Identifier[];
  /**
   * Will generally be set to show that the immunization has been completed.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<ImmunizationStatusCodeType>|null;
  /**
   * This element is labeled as a modifier because it indicates that an immunization didn't happen.
   */
  public notGiven: fhir.FhirBoolean|null;
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
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported, a specific date might not be known.  Although partial dates are allowed, an adult patient might not be able to recall the year a childhood immunization was given.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Reflects the “reliability” of the content.
   */
  public primarySource: fhir.FhirBoolean|null;
  /**
   * Should not be populated if primarySource = True, will not be required even if primarySource = False.
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
   * Indicates who or what performed the event.
   */
  public practitioner: fhir.ImmunizationPractitioner[];
  /**
   * Extra information about the immunization that is not conveyed by the other attributes.
   */
  public note: fhir.Annotation[];
  /**
   * Reasons why a vaccine was or was not administered.
   */
  public explanation?: fhir.ImmunizationExplanation|undefined;
  /**
   * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [AllergyIntolerance](allergyintolerance.html) resource instance as most systems will not query against  past Immunization.reaction elements.
   */
  public reaction: fhir.ImmunizationReaction[];
  /**
   * Contains information about the protocol(s) under which the vaccine was administered.
   */
  public vaccinationProtocol: fhir.ImmunizationVaccinationProtocol[];
  /**
   * Default constructor for Immunization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Immunization';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<ImmunizationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ImmunizationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['notGiven']) { this.notGiven = new fhir.FhirBoolean({value: source.notGiven}); }
    else { this.notGiven = null; }
    if (source['_notGiven']) {
      if (this.notGiven) { this.notGiven.addExtendedProperties(source._notGiven!); }
      else { this.notGiven = new fhir.FhirBoolean(source._notGiven as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['vaccineCode']) { this.vaccineCode = new fhir.CodeableConcept(source.vaccineCode); }
    else { this.vaccineCode = null; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['primarySource']) { this.primarySource = new fhir.FhirBoolean({value: source.primarySource}); }
    else { this.primarySource = null; }
    if (source['_primarySource']) {
      if (this.primarySource) { this.primarySource.addExtendedProperties(source._primarySource!); }
      else { this.primarySource = new fhir.FhirBoolean(source._primarySource as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['reportOrigin']) { this.reportOrigin = new fhir.CodeableConcept(source.reportOrigin); }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['manufacturer']) { this.manufacturer = new fhir.Reference(source.manufacturer); }
    if (source['lotNumber']) { this.lotNumber = new fhir.FhirString({value: source.lotNumber}); }
    if (source['_lotNumber']) {
      if (this.lotNumber) { this.lotNumber.addExtendedProperties(source._lotNumber!); }
      else { this.lotNumber = new fhir.FhirString(source._lotNumber as Partial<fhir.FhirStringArgs>); }
    }
    if (source['expirationDate']) { this.expirationDate = new fhir.FhirDate({value: source.expirationDate}); }
    if (source['_expirationDate']) {
      if (this.expirationDate) { this.expirationDate.addExtendedProperties(source._expirationDate!); }
      else { this.expirationDate = new fhir.FhirDate(source._expirationDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['site']) { this.site = new fhir.CodeableConcept(source.site); }
    if (source['route']) { this.route = new fhir.CodeableConcept(source.route); }
    if (source['doseQuantity']) { this.doseQuantity = new fhir.Quantity(source.doseQuantity); }
    if (source['practitioner']) { this.practitioner = source.practitioner.map((x) => new fhir.ImmunizationPractitioner(x)); }
    else { this.practitioner = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['explanation']) { this.explanation = new fhir.ImmunizationExplanation(source.explanation); }
    if (source['reaction']) { this.reaction = source.reaction.map((x) => new fhir.ImmunizationReaction(x)); }
    else { this.reaction = []; }
    if (source['vaccinationProtocol']) { this.vaccinationProtocol = source.vaccinationProtocol.map((x) => new fhir.ImmunizationVaccinationProtocol(x)); }
    else { this.vaccinationProtocol = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Immunization' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'ImmunizationStatus',ImmunizationStatusVsValidation,'r'));
    iss.push(...this.vRS('notGiven',exp));
    iss.push(...this.vRS('vaccineCode',exp));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vRS('primarySource',exp));
    iss.push(...this.vOS('reportOrigin',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOS('manufacturer',exp));
    iss.push(...this.vOS('lotNumber',exp));
    iss.push(...this.vOS('expirationDate',exp));
    iss.push(...this.vOS('site',exp));
    iss.push(...this.vOS('route',exp));
    iss.push(...this.vOS('doseQuantity',exp));
    iss.push(...this.vOA('practitioner',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOS('explanation',exp));
    iss.push(...this.vOA('reaction',exp));
    iss.push(...this.vOA('vaccinationProtocol',exp));
    return iss;
  }
}
