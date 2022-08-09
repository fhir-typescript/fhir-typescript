// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Encounter

import * as fhir from '../fhir.js';

// @ts-ignore
import { EncounterStatusCodes,  EncounterStatusCodeType } from '../fhirValueSets/EncounterStatusCodes.js';
// @ts-ignore
import { EncounterStatusVsValidation } from '../fhirValueSets/EncounterStatusVsValidation.js';
// @ts-ignore
import { V3ActEncounterCodes,  V3ActEncounterCodeType } from '../fhirValueSets/V3ActEncounterCodes.js';
// @ts-ignore
import { V3ActEncounterVsValidation } from '../fhirValueSets/V3ActEncounterVsValidation.js';
// @ts-ignore
import { EncounterParticipantTypeCodes,  EncounterParticipantTypeCodeType } from '../fhirValueSets/EncounterParticipantTypeCodes.js';
// @ts-ignore
import { EncounterParticipantTypeVsValidation } from '../fhirValueSets/EncounterParticipantTypeVsValidation.js';
// @ts-ignore
import { DiagnosisRoleCodes,  DiagnosisRoleCodeType } from '../fhirValueSets/DiagnosisRoleCodes.js';
// @ts-ignore
import { DiagnosisRoleVsValidation } from '../fhirValueSets/DiagnosisRoleVsValidation.js';
// @ts-ignore
import { EncounterAdmitSourceCodes,  EncounterAdmitSourceCodeType } from '../fhirValueSets/EncounterAdmitSourceCodes.js';
// @ts-ignore
import { EncounterAdmitSourceVsValidation } from '../fhirValueSets/EncounterAdmitSourceVsValidation.js';
// @ts-ignore
import { V20092Codes,  V20092CodeType } from '../fhirValueSets/V20092Codes.js';
// @ts-ignore
import { V20092VsValidation } from '../fhirValueSets/V20092VsValidation.js';
// @ts-ignore
import { EncounterDietCodes,  EncounterDietCodeType } from '../fhirValueSets/EncounterDietCodes.js';
// @ts-ignore
import { EncounterDietVsValidation } from '../fhirValueSets/EncounterDietVsValidation.js';
// @ts-ignore
import { EncounterSpecialCourtesyCodes,  EncounterSpecialCourtesyCodeType } from '../fhirValueSets/EncounterSpecialCourtesyCodes.js';
// @ts-ignore
import { EncounterSpecialCourtesyVsValidation } from '../fhirValueSets/EncounterSpecialCourtesyVsValidation.js';
// @ts-ignore
import { EncounterSpecialArrangementsCodes,  EncounterSpecialArrangementsCodeType } from '../fhirValueSets/EncounterSpecialArrangementsCodes.js';
// @ts-ignore
import { EncounterSpecialArrangementsVsValidation } from '../fhirValueSets/EncounterSpecialArrangementsVsValidation.js';
// @ts-ignore
import { EncounterDischargeDispositionCodes,  EncounterDischargeDispositionCodeType } from '../fhirValueSets/EncounterDischargeDispositionCodes.js';
// @ts-ignore
import { EncounterDischargeDispositionVsValidation } from '../fhirValueSets/EncounterDischargeDispositionVsValidation.js';
// @ts-ignore
import { EncounterLocationStatusCodes,  EncounterLocationStatusCodeType } from '../fhirValueSets/EncounterLocationStatusCodes.js';
// @ts-ignore
import { EncounterLocationStatusVsValidation } from '../fhirValueSets/EncounterLocationStatusVsValidation.js';
// @ts-ignore
import { EncounterTypeCodes,  EncounterTypeCodeType } from '../fhirValueSets/EncounterTypeCodes.js';
// @ts-ignore
import { EncounterTypeVsValidation } from '../fhirValueSets/EncounterTypeVsValidation.js';
// @ts-ignore
import { V3ActPriorityCodes,  V3ActPriorityCodeType } from '../fhirValueSets/V3ActPriorityCodes.js';
// @ts-ignore
import { V3ActPriorityVsValidation } from '../fhirValueSets/V3ActPriorityVsValidation.js';
// @ts-ignore
import { EncounterReasonCodes,  EncounterReasonCodeType } from '../fhirValueSets/EncounterReasonCodes.js';
// @ts-ignore
import { EncounterReasonVsValidation } from '../fhirValueSets/EncounterReasonVsValidation.js';
/**
 * Valid arguments for the EncounterStatusHistory type.
 */
export interface EncounterStatusHistoryArgs extends fhir.BackboneElementArgs {
  /**
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   */
  status: fhir.FhirCode<EncounterStatusCodeType>|string|undefined;
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
 * The current status is always found in the current version of the resource, not the status history.
 */
export class EncounterStatusHistory extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterStatusHistory';
  /**
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   */
  public status: fhir.FhirCode<EncounterStatusCodeType>|null;
  /**
   * The time that the episode was in the specified status.
   */
  public period: fhir.Period|null;
  /**
   * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterStatusHistoryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<EncounterStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
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
    iss.push(...this.vRSV('status',exp,'EncounterStatus',EncounterStatusVsValidation,'r'));
    iss.push(...this.vRS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EncounterClassHistory type.
 */
export interface EncounterClassHistoryArgs extends fhir.BackboneElementArgs {
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  class: fhir.CodingArgs|null;
  /**
   * The time that the episode was in the specified class.
   */
  period: fhir.PeriodArgs|null;
}

/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.
 * This would be used for a case where an admission starts of as an emergency encounter, then transisions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kindof discharge from emergency to inpatient.
 */
export class EncounterClassHistory extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterClassHistory';
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  public class: fhir.Coding|null;
  /**
   * The time that the episode was in the specified class.
   */
  public period: fhir.Period|null;
  /**
   * Default constructor for EncounterClassHistory - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterClassHistoryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['class']) { this.class = new fhir.Coding(source.class, options); }
    else { this.class = null; }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    else { this.period = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.classHistory' }
    iss.push(...this.vRS('class',exp));
    iss.push(...this.vRS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the EncounterParticipant type.
 */
export interface EncounterParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * The participant type indicates how an individual partitipates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
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
   * The participant type indicates how an individual partitipates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
   */
  public type: fhir.CodeableConcept[];
  /**
   * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.
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
 * Valid arguments for the EncounterDiagnosis type.
 */
export interface EncounterDiagnosisArgs extends fhir.BackboneElementArgs {
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  condition: fhir.ReferenceArgs|null;
  /**
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
   */
  role?: fhir.CodeableConceptArgs|undefined;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  rank?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Encounter.diagnosis.rank
   */
  _rank?:fhir.FhirElementArgs;
}

/**
 * The list of diagnosis relevant to this encounter.
 */
export class EncounterDiagnosis extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterDiagnosis';
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  public condition: fhir.Reference|null;
  /**
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
   */
  public role?: fhir.CodeableConcept|undefined;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  public rank?: fhir.FhirPositiveInt|undefined;
  /**
   * Default constructor for EncounterDiagnosis - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterDiagnosisArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['condition']) { this.condition = new fhir.Reference(source.condition, options); }
    else { this.condition = null; }
    if (source['role']) { this.role = new fhir.CodeableConcept(source.role, options); }
    if (source['rank'] !== undefined) { this.rank = new fhir.FhirPositiveInt({value: source.rank}, options); }
    if (source['_rank']) {
      if (this.rank) { this.rank.addExtendedProperties(source._rank!); }
      else { this.rank = new fhir.FhirPositiveInt(source._rank as Partial<fhir.FhirPositiveIntArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.diagnosis' }
    iss.push(...this.vRS('condition',exp));
    iss.push(...this.vOS('role',exp));
    iss.push(...this.vOS('rank',exp));
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
   * Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
   */
  dietPreference?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Special courtesies (VIP, board member).
   */
  specialCourtesy?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
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
}

/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
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
   * Whether this hospitalization is a readmission and why if known.
   */
  public reAdmission?: fhir.CodeableConcept|undefined;
  /**
   * For example a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
   */
  public dietPreference: fhir.CodeableConcept[];
  /**
   * Special courtesies (VIP, board member).
   */
  public specialCourtesy: fhir.CodeableConcept[];
  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
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
   * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterHospitalizationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['preAdmissionIdentifier']) { this.preAdmissionIdentifier = new fhir.Identifier(source.preAdmissionIdentifier, options); }
    if (source['origin']) { this.origin = new fhir.Reference(source.origin, options); }
    if (source['admitSource']) { this.admitSource = new fhir.CodeableConcept(source.admitSource, options); }
    if (source['reAdmission']) { this.reAdmission = new fhir.CodeableConcept(source.reAdmission, options); }
    if (source['dietPreference']) { this.dietPreference = source.dietPreference.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.dietPreference = []; }
    if (source['specialCourtesy']) { this.specialCourtesy = source.specialCourtesy.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.specialCourtesy = []; }
    if (source['specialArrangement']) { this.specialArrangement = source.specialArrangement.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.specialArrangement = []; }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination, options); }
    if (source['dischargeDisposition']) { this.dischargeDisposition = new fhir.CodeableConcept(source.dischargeDisposition, options); }
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
    iss.push(...this.vOS('reAdmission',exp));
    iss.push(...this.vOA('dietPreference',exp));
    iss.push(...this.vOA('specialCourtesy',exp));
    iss.push(...this.vOA('specialArrangement',exp));
    iss.push(...this.vOS('destination',exp));
    iss.push(...this.vOS('dischargeDisposition',exp));
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
   * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
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
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
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
   * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
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
   * Note that internal business rules will detemine the appropraite transitions that may occur between statuses (and also classes).
   * This element is labeled as a modifier because the status contains codes that mark the encounter as not currently valid.
   */
  status: fhir.FhirCode<EncounterStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Encounter.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The current status is always found in the current version of the resource, not the status history.
   */
  statusHistory?: fhir.EncounterStatusHistoryArgs[]|undefined;
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  class?: fhir.CodingArgs|undefined;
  /**
   * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.
   * This would be used for a case where an admission starts of as an emergency encounter, then transisions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kindof discharge from emergency to inpatient.
   */
  classHistory?: fhir.EncounterClassHistoryArgs[]|undefined;
  /**
   * Since there are many ways to further classify encounters, this element is 0..*.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the urgency of the encounter.
   */
  priority?: fhir.CodeableConceptArgs|undefined;
  /**
   * While the encounter is always about the patient, the patient may not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
   */
  subject?: fhir.ReferenceArgs|undefined;
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
   * If not (yet) known, the end of the Period may be omitted.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * May differ from the time the Encounter.period lasted because of leave of absence.
   */
  length?: fhir.DurationArgs|undefined;
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The list of diagnosis relevant to this encounter.
   */
  diagnosis?: fhir.EncounterDiagnosisArgs[]|undefined;
  /**
   * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
   */
  account?: fhir.ReferenceArgs[]|undefined;
  /**
   * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
   * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
   */
  hospitalization?: fhir.EncounterHospitalizationArgs|undefined;
  /**
   * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
   */
  location?: fhir.EncounterLocationArgs[]|undefined;
  /**
   * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
   */
  serviceProvider?: fhir.ReferenceArgs|undefined;
  /**
   * This is also used for associating a child's encounter back to the mother's encounter.
   * Refer to the Notes section in the Patient resource for further details.
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
   * Note that internal business rules will detemine the appropraite transitions that may occur between statuses (and also classes).
   * This element is labeled as a modifier because the status contains codes that mark the encounter as not currently valid.
   */
  public status: fhir.FhirCode<EncounterStatusCodeType>|null;
  /**
   * The current status is always found in the current version of the resource, not the status history.
   */
  public statusHistory: fhir.EncounterStatusHistory[];
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  public class?: fhir.Coding|undefined;
  /**
   * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.
   * This would be used for a case where an admission starts of as an emergency encounter, then transisions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kindof discharge from emergency to inpatient.
   */
  public classHistory: fhir.EncounterClassHistory[];
  /**
   * Since there are many ways to further classify encounters, this element is 0..*.
   */
  public type: fhir.CodeableConcept[];
  /**
   * Indicates the urgency of the encounter.
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * While the encounter is always about the patient, the patient may not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
   */
  public subject?: fhir.Reference|undefined;
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
   * If not (yet) known, the end of the Period may be omitted.
   */
  public period?: fhir.Period|undefined;
  /**
   * May differ from the time the Encounter.period lasted because of leave of absence.
   */
  public length?: fhir.Duration|undefined;
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  public reason: fhir.CodeableConcept[];
  /**
   * The list of diagnosis relevant to this encounter.
   */
  public diagnosis: fhir.EncounterDiagnosis[];
  /**
   * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts based on internal business rules.
   */
  public account: fhir.Reference[];
  /**
   * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
   * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
   */
  public hospitalization?: fhir.EncounterHospitalization|undefined;
  /**
   * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
   */
  public location: fhir.EncounterLocation[];
  /**
   * An organization that is in charge of maintaining the information of this Encounter (e.g. who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
   */
  public serviceProvider?: fhir.Reference|undefined;
  /**
   * This is also used for associating a child's encounter back to the mother's encounter.
   * Refer to the Notes section in the Patient resource for further details.
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
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<EncounterStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['statusHistory']) { this.statusHistory = source.statusHistory.map((x) => new fhir.EncounterStatusHistory(x, options)); }
    else { this.statusHistory = []; }
    if (source['class']) { this.class = new fhir.Coding(source.class, options); }
    if (source['classHistory']) { this.classHistory = source.classHistory.map((x) => new fhir.EncounterClassHistory(x, options)); }
    else { this.classHistory = []; }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.type = []; }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority, options); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    if (source['episodeOfCare']) { this.episodeOfCare = source.episodeOfCare.map((x) => new fhir.Reference(x, options)); }
    else { this.episodeOfCare = []; }
    if (source['incomingReferral']) { this.incomingReferral = source.incomingReferral.map((x) => new fhir.Reference(x, options)); }
    else { this.incomingReferral = []; }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.EncounterParticipant(x, options)); }
    else { this.participant = []; }
    if (source['appointment']) { this.appointment = new fhir.Reference(source.appointment, options); }
    if (source['period']) { this.period = new fhir.Period(source.period, options); }
    if (source['length']) { this.length = new fhir.Duration(source.length, options); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reason = []; }
    if (source['diagnosis']) { this.diagnosis = source.diagnosis.map((x) => new fhir.EncounterDiagnosis(x, options)); }
    else { this.diagnosis = []; }
    if (source['account']) { this.account = source.account.map((x) => new fhir.Reference(x, options)); }
    else { this.account = []; }
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
    iss.push(...this.vRSV('status',exp,'EncounterStatus',EncounterStatusVsValidation,'r'));
    iss.push(...this.vOA('statusHistory',exp));
    iss.push(...this.vOS('class',exp));
    iss.push(...this.vOA('classHistory',exp));
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOS('priority',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOA('episodeOfCare',exp));
    iss.push(...this.vOA('incomingReferral',exp));
    iss.push(...this.vOA('participant',exp));
    iss.push(...this.vOS('appointment',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('length',exp));
    iss.push(...this.vOA('reason',exp));
    iss.push(...this.vOA('diagnosis',exp));
    iss.push(...this.vOA('account',exp));
    iss.push(...this.vOS('hospitalization',exp));
    iss.push(...this.vOA('location',exp));
    iss.push(...this.vOS('serviceProvider',exp));
    iss.push(...this.vOS('partOf',exp));
    return iss;
  }
}
