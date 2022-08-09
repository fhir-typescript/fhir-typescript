// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Encounter

import * as fhir from '../fhir.js';

// @ts-ignore
import { EncounterStateCodes,  EncounterStateCodeType } from '../fhirValueSets/EncounterStateCodes.js';
// @ts-ignore
import { EncounterStateVsValidation } from '../fhirValueSets/EncounterStateVsValidation.js';
// @ts-ignore
import { EncounterLocationStatusCodes,  EncounterLocationStatusCodeType } from '../fhirValueSets/EncounterLocationStatusCodes.js';
// @ts-ignore
import { EncounterLocationStatusVsValidation } from '../fhirValueSets/EncounterLocationStatusVsValidation.js';
// @ts-ignore
import { EncounterClassCodes,  EncounterClassCodeType } from '../fhirValueSets/EncounterClassCodes.js';
// @ts-ignore
import { EncounterClassVsValidation } from '../fhirValueSets/EncounterClassVsValidation.js';
/**
 * Valid arguments for the EncounterStatusHistory type.
 */
export interface EncounterStatusHistoryArgs extends fhir.BackboneElementArgs {
  /**
   * planned | arrived | in-progress | onleave | finished | cancelled.
   */
  status: fhir.FhirCode<EncounterStateCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Encounter.statusHistory.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The time that the episode was in the specified status.
   */
  period: fhir.PeriodArgs|null;
}

/**
 * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
 */
export class EncounterStatusHistory extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterStatusHistory';
  /**
   * planned | arrived | in-progress | onleave | finished | cancelled.
   */
  public status: fhir.FhirCode<EncounterStateCodeType>|null;
  /**
   * The time that the episode was in the specified status.
   */
  public period: fhir.Period|null;
  /**
   * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterStatusHistoryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<EncounterStateCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterStateCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    else { this.period = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.statusHistory' }
    iss.push(...this.vRSV('status',exp,'EncounterState',EncounterStateVsValidation,'r'));
    iss.push(...this.vRS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EncounterParticipant type.
 */
export interface EncounterParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * Role of participant in encounter.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Persons involved in the encounter other than the patient.
   */
  individual?: fhir.ReferenceArgs|undefined;
}

/**
 * The list of people responsible for providing the service.
 */
export class EncounterParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterParticipant';
  /**
   * Role of participant in encounter.
   */
  public type: fhir.CodeableConcept[];
  /**
   * The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
   */
  public period?: fhir.Period|undefined;
  /**
   * Persons involved in the encounter other than the patient.
   */
  public individual?: fhir.Reference|undefined;
  /**
   * Default constructor for EncounterParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterParticipantArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.type = []; }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['individual']) { this.individual = new fhir.Reference(source.individual, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.participant' }
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('individual',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EncounterHospitalization type.
 */
export interface EncounterHospitalizationArgs extends fhir.BackboneElementArgs {
  /**
   * Pre-admission identifier.
   */
  preAdmissionIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * The location from which the patient came before admission.
   */
  origin?: fhir.ReferenceArgs|undefined;
  /**
   * From where patient was admitted (physician referral, transfer).
   */
  admitSource?: fhir.CodeableConceptArgs|undefined;
  /**
   * The admitting diagnosis field is used to record the diagnosis codes as reported by admitting practitioner. This could be different or in addition to the conditions reported as reason-condition(s) for the encounter.
   */
  admittingDiagnosis?: fhir.ReferenceArgs[]|undefined;
  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: fhir.CodeableConceptArgs|undefined;
  /**
   * Used to track patient's diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.
   */
  dietPreference?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Special courtesies (VIP, board member).
   */
  specialCourtesy?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Wheelchair, translator, stretcher, etc.
   */
  specialArrangement?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Location to which the patient is discharged.
   */
  destination?: fhir.ReferenceArgs|undefined;
  /**
   * Category or kind of location after discharge.
   */
  dischargeDisposition?: fhir.CodeableConceptArgs|undefined;
  /**
   * The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete.
   */
  dischargeDiagnosis?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Details about the admission to a healthcare service.
 */
export class EncounterHospitalization extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterHospitalization';
  /**
   * Pre-admission identifier.
   */
  public preAdmissionIdentifier?: fhir.Identifier|undefined;
  /**
   * The location from which the patient came before admission.
   */
  public origin?: fhir.Reference|undefined;
  /**
   * From where patient was admitted (physician referral, transfer).
   */
  public admitSource?: fhir.CodeableConcept|undefined;
  /**
   * The admitting diagnosis field is used to record the diagnosis codes as reported by admitting practitioner. This could be different or in addition to the conditions reported as reason-condition(s) for the encounter.
   */
  public admittingDiagnosis: fhir.Reference[];
  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  public reAdmission?: fhir.CodeableConcept|undefined;
  /**
   * Used to track patient's diet restrictions and/or preference. For a complete description of the nutrition needs of a patient during their stay, one should use the nutritionOrder resource which links to Encounter.
   */
  public dietPreference: fhir.CodeableConcept[];
  /**
   * Special courtesies (VIP, board member).
   */
  public specialCourtesy: fhir.CodeableConcept[];
  /**
   * Wheelchair, translator, stretcher, etc.
   */
  public specialArrangement: fhir.CodeableConcept[];
  /**
   * Location to which the patient is discharged.
   */
  public destination?: fhir.Reference|undefined;
  /**
   * Category or kind of location after discharge.
   */
  public dischargeDisposition?: fhir.CodeableConcept|undefined;
  /**
   * The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete.
   */
  public dischargeDiagnosis: fhir.Reference[];
  /**
   * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterHospitalizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['preAdmissionIdentifier']) { this.preAdmissionIdentifier = new fhir.Identifier(source.preAdmissionIdentifier, options); }
    if (source['origin']) { this.origin = new fhir.Reference(source.origin, options); }
    if (source['admitSource']) { this.admitSource = new fhir.CodeableConcept(source.admitSource, options); }
    if (source['admittingDiagnosis']) { this.admittingDiagnosis = source.admittingDiagnosis.map((x) => new fhir.Reference(x, options)); }
    else { this.admittingDiagnosis = []; }
    if (source['reAdmission']) { this.reAdmission = new fhir.CodeableConcept(source.reAdmission, options); }
    if (source['dietPreference']) { this.dietPreference = source.dietPreference.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.dietPreference = []; }
    if (source['specialCourtesy']) { this.specialCourtesy = source.specialCourtesy.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.specialCourtesy = []; }
    if (source['specialArrangement']) { this.specialArrangement = source.specialArrangement.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.specialArrangement = []; }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination, options); }
    if (source['dischargeDisposition']) { this.dischargeDisposition = new fhir.CodeableConcept(source.dischargeDisposition, options); }
    if (source['dischargeDiagnosis']) { this.dischargeDiagnosis = source.dischargeDiagnosis.map((x) => new fhir.Reference(x, options)); }
    else { this.dischargeDiagnosis = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.hospitalization' }
    iss.push(...this.vOS('preAdmissionIdentifier',exp));
    iss.push(...this.vOS('origin',exp));
    iss.push(...this.vOS('admitSource',exp));
    iss.push(...this.vOA('admittingDiagnosis',exp));
    iss.push(...this.vOS('reAdmission',exp));
    iss.push(...this.vOA('dietPreference',exp));
    iss.push(...this.vOA('specialCourtesy',exp));
    iss.push(...this.vOA('specialArrangement',exp));
    iss.push(...this.vOS('destination',exp));
    iss.push(...this.vOS('dischargeDisposition',exp));
    iss.push(...this.vOA('dischargeDiagnosis',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EncounterLocation type.
 */
export interface EncounterLocationArgs extends fhir.BackboneElementArgs {
  /**
   * The location where the encounter takes place.
   */
  location: fhir.ReferenceArgs|null;
  /**
   * The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
   */
  status?: fhir.FhirCode<EncounterLocationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Encounter.location.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Time period during which the patient was present at the location.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * List of locations where  the patient has been during this encounter.
 */
export class EncounterLocation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterLocation';
  /**
   * The location where the encounter takes place.
   */
  public location: fhir.Reference|null;
  /**
   * The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
   */
  public status?: fhir.FhirCode<EncounterLocationStatusCodeType>|undefined;
  /**
   * Time period during which the patient was present at the location.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterLocationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['location']) { this.location = new fhir.Reference(source.location, options); }
    else { this.location = null; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<EncounterLocationStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterLocationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.location' }
    iss.push(...this.vRS('location',exp));
    iss.push(...this.vOSV('status',exp,'EncounterLocationStatus',EncounterLocationStatusVsValidation,'r'));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Encounter type.
 */
export interface EncounterArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Encounter"|undefined;
  /**
   * Identifier(s) by which this encounter is known.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * planned | arrived | in-progress | onleave | finished | cancelled.
   */
  status: fhir.FhirCode<EncounterStateCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Encounter.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
   */
  statusHistory?: fhir.EncounterStatusHistoryArgs[]|undefined;
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  class?: fhir.FhirCode<EncounterClassCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Encounter.class
   */
  _class?:fhir.FhirElementArgs;
  /**
   * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the urgency of the encounter.
   */
  priority?: fhir.CodeableConceptArgs|undefined;
  /**
   * The patient present at the encounter.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   */
  episodeOfCare?: fhir.ReferenceArgs[]|undefined;
  /**
   * The referral request this encounter satisfies (incoming referral).
   */
  incomingReferral?: fhir.ReferenceArgs[]|undefined;
  /**
   * The list of people responsible for providing the service.
   */
  participant?: fhir.EncounterParticipantArgs[]|undefined;
  /**
   * The appointment that scheduled this encounter.
   */
  appointment?: fhir.ReferenceArgs|undefined;
  /**
   * The start and end time of the encounter.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Quantity of time the encounter lasted. This excludes the time during leaves of absence.
   */
  length?: fhir.QuantityArgs|undefined;
  /**
   * Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   */
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  indication?: fhir.ReferenceArgs[]|undefined;
  /**
   * Details about the admission to a healthcare service.
   */
  hospitalization?: fhir.EncounterHospitalizationArgs|undefined;
  /**
   * List of locations where  the patient has been during this encounter.
   */
  location?: fhir.EncounterLocationArgs[]|undefined;
  /**
   * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
   */
  serviceProvider?: fhir.ReferenceArgs|undefined;
  /**
   * Another Encounter of which this encounter is a part of (administratively or in time).
   */
  partOf?: fhir.ReferenceArgs|undefined;
}

/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export class Encounter extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Encounter';
  /**
   * Resource Type Name
   */
  public override resourceType: "Encounter";
  /**
   * Identifier(s) by which this encounter is known.
   */
  public identifier: fhir.Identifier[];
  /**
   * planned | arrived | in-progress | onleave | finished | cancelled.
   */
  public status: fhir.FhirCode<EncounterStateCodeType>|null;
  /**
   * The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.
   */
  public statusHistory: fhir.EncounterStatusHistory[];
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  public class?: fhir.FhirCode<EncounterClassCodeType>|undefined;
  /**
   * Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
   */
  public type: fhir.CodeableConcept[];
  /**
   * Indicates the urgency of the encounter.
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * The patient present at the encounter.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   */
  public episodeOfCare: fhir.Reference[];
  /**
   * The referral request this encounter satisfies (incoming referral).
   */
  public incomingReferral: fhir.Reference[];
  /**
   * The list of people responsible for providing the service.
   */
  public participant: fhir.EncounterParticipant[];
  /**
   * The appointment that scheduled this encounter.
   */
  public appointment?: fhir.Reference|undefined;
  /**
   * The start and end time of the encounter.
   */
  public period?: fhir.Period|undefined;
  /**
   * Quantity of time the encounter lasted. This excludes the time during leaves of absence.
   */
  public length?: fhir.Quantity|undefined;
  /**
   * Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
   */
  public reason: fhir.CodeableConcept[];
  /**
   * Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  public indication: fhir.Reference[];
  /**
   * Details about the admission to a healthcare service.
   */
  public hospitalization?: fhir.EncounterHospitalization|undefined;
  /**
   * List of locations where  the patient has been during this encounter.
   */
  public location: fhir.EncounterLocation[];
  /**
   * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
   */
  public serviceProvider?: fhir.Reference|undefined;
  /**
   * Another Encounter of which this encounter is a part of (administratively or in time).
   */
  public partOf?: fhir.Reference|undefined;
  /**
   * Default constructor for Encounter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Encounter';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<EncounterStateCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterStateCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['statusHistory']) { this.statusHistory = source.statusHistory.map((x) => new fhir.EncounterStatusHistory(x, options)); }
    else { this.statusHistory = []; }
    if (source['class'] !== undefined) { this.class = new fhir.FhirCode<EncounterClassCodeType>({value: source.class}, options); }
    if (source['_class']) {
      if (this.class) { this.class.addExtendedProperties(source._class!); }
      else { this.class = new fhir.FhirCode<EncounterClassCodeType>(source._class as Partial<fhir.FhirCode>, options); }
    }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.type = []; }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority, options); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    if (source['episodeOfCare']) { this.episodeOfCare = source.episodeOfCare.map((x) => new fhir.Reference(x, options)); }
    else { this.episodeOfCare = []; }
    if (source['incomingReferral']) { this.incomingReferral = source.incomingReferral.map((x) => new fhir.Reference(x, options)); }
    else { this.incomingReferral = []; }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.EncounterParticipant(x, options)); }
    else { this.participant = []; }
    if (source['appointment']) { this.appointment = new fhir.Reference(source.appointment, options); }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['length']) { this.length = new fhir.Quantity(source.length, options); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reason = []; }
    if (source['indication']) { this.indication = source.indication.map((x) => new fhir.Reference(x, options)); }
    else { this.indication = []; }
    if (source['hospitalization']) { this.hospitalization = new fhir.EncounterHospitalization(source.hospitalization, options); }
    if (source['location']) { this.location = source.location.map((x) => new fhir.EncounterLocation(x, options)); }
    else { this.location = []; }
    if (source['serviceProvider']) { this.serviceProvider = new fhir.Reference(source.serviceProvider, options); }
    if (source['partOf']) { this.partOf = new fhir.Reference(source.partOf, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'EncounterState',EncounterStateVsValidation,'r'));
    iss.push(...this.vOA('statusHistory',exp));
    iss.push(...this.vOSV('class',exp,'EncounterClass',EncounterClassVsValidation,'r'));
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOS('priority',exp));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOA('episodeOfCare',exp));
    iss.push(...this.vOA('incomingReferral',exp));
    iss.push(...this.vOA('participant',exp));
    iss.push(...this.vOS('appointment',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('length',exp));
    iss.push(...this.vOA('reason',exp));
    iss.push(...this.vOA('indication',exp));
    iss.push(...this.vOS('hospitalization',exp));
    iss.push(...this.vOA('location',exp));
    iss.push(...this.vOS('serviceProvider',exp));
    iss.push(...this.vOS('partOf',exp));
    return iss;
  }
}
