// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
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
import { LocationPhysicalTypeCodes,  LocationPhysicalTypeCodeType } from '../fhirValueSets/LocationPhysicalTypeCodes.js';
// @ts-ignore
import { LocationPhysicalTypeVsValidation } from '../fhirValueSets/LocationPhysicalTypeVsValidation.js';
// @ts-ignore
import { EncounterTypeCodes,  EncounterTypeCodeType } from '../fhirValueSets/EncounterTypeCodes.js';
// @ts-ignore
import { EncounterTypeVsValidation } from '../fhirValueSets/EncounterTypeVsValidation.js';
// @ts-ignore
import { ServiceTypeCodes,  ServiceTypeCodeType } from '../fhirValueSets/ServiceTypeCodes.js';
// @ts-ignore
import { ServiceTypeVsValidation } from '../fhirValueSets/ServiceTypeVsValidation.js';
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
    if (source['status']) { this.status = new fhir.FhirCode<EncounterStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    else { this.period = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.statusHistory' }
    this.vRSV('status',exp,'EncounterStatus',EncounterStatusVsValidation,'r')
    this.vRS('period',exp)
    return issues;
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
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
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
    if (source['class']) { this.class = new fhir.Coding(source.class); }
    else { this.class = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    else { this.period = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.classHistory' }
    this.vRS('class',exp)
    this.vRS('period',exp)
    return issues;
  }
}
/**
 * Valid arguments for the EncounterParticipant type.
 */
export interface EncounterParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
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
 * The list of people responsible for providing the service.
 */
export class EncounterParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'EncounterParticipant';
  /**
   * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants, and for practitioners this is to describe the action type in the context of this encounter (e.g. Admitting Dr, Attending Dr, Translator, Consulting Dr). This is different to the practitioner roles which are functional roles, derived from terms of employment, education, licensing, etc.
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
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['individual']) { this.individual = new fhir.Reference(source.individual); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.participant' }
    this.vOA('type',exp)
    this.vOS('period',exp)
    this.vOS('individual',exp)
    return issues;
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
  use?: fhir.CodeableConceptArgs|undefined;
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
  public use?: fhir.CodeableConcept|undefined;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  public rank?: fhir.FhirPositiveInt|undefined;
  /**
   * Default constructor for EncounterDiagnosis - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterDiagnosisArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['condition']) { this.condition = new fhir.Reference(source.condition); }
    else { this.condition = null; }
    if (source['use']) { this.use = new fhir.CodeableConcept(source.use); }
    if (source['rank']) { this.rank = new fhir.FhirPositiveInt({value: source.rank}); }
    if (source['_rank']) {
      if (this.rank) { this.rank.addExtendedProperties(source._rank!); }
      else { this.rank = new fhir.FhirPositiveInt(source._rank as Partial<fhir.FhirPositiveIntArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.diagnosis' }
    this.vRS('condition',exp)
    this.vOS('use',exp)
    this.vOS('rank',exp)
    return issues;
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
   * The location/organization from which the patient came before admission.
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
   * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
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
   * Location/organization to which the patient is discharged.
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
   * The location/organization from which the patient came before admission.
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
   * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
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
   * Location/organization to which the patient is discharged.
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
    if (source['preAdmissionIdentifier']) { this.preAdmissionIdentifier = new fhir.Identifier(source.preAdmissionIdentifier); }
    if (source['origin']) { this.origin = new fhir.Reference(source.origin); }
    if (source['admitSource']) { this.admitSource = new fhir.CodeableConcept(source.admitSource); }
    if (source['reAdmission']) { this.reAdmission = new fhir.CodeableConcept(source.reAdmission); }
    if (source['dietPreference']) { this.dietPreference = source.dietPreference.map((x) => new fhir.CodeableConcept(x)); }
    else { this.dietPreference = []; }
    if (source['specialCourtesy']) { this.specialCourtesy = source.specialCourtesy.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialCourtesy = []; }
    if (source['specialArrangement']) { this.specialArrangement = source.specialArrangement.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialArrangement = []; }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination); }
    if (source['dischargeDisposition']) { this.dischargeDisposition = new fhir.CodeableConcept(source.dischargeDisposition); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.hospitalization' }
    this.vOS('preAdmissionIdentifier',exp)
    this.vOS('origin',exp)
    this.vOS('admitSource',exp)
    this.vOS('reAdmission',exp)
    this.vOA('dietPreference',exp)
    this.vOA('specialCourtesy',exp)
    this.vOA('specialArrangement',exp)
    this.vOS('destination',exp)
    this.vOS('dischargeDisposition',exp)
    return issues;
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
   * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
   * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
   */
  physicalType?: fhir.CodeableConceptArgs|undefined;
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
   * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
   * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
   */
  public physicalType?: fhir.CodeableConcept|undefined;
  /**
   * Time period during which the patient was present at the location.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EncounterLocationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    else { this.location = null; }
    if (source['status']) { this.status = new fhir.FhirCode<EncounterLocationStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterLocationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['physicalType']) { this.physicalType = new fhir.CodeableConcept(source.physicalType); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter.location' }
    this.vRS('location',exp)
    this.vOSV('status',exp,'EncounterLocationStatus',EncounterLocationStatusVsValidation,'r')
    this.vOS('physicalType',exp)
    this.vOS('period',exp)
    return issues;
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
   * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
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
   * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   */
  class: fhir.CodingArgs|null;
  /**
   * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
   */
  classHistory?: fhir.EncounterClassHistoryArgs[]|undefined;
  /**
   * Since there are many ways to further classify encounters, this element is 0..*.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Broad categorization of the service that is to be provided (e.g. cardiology).
   */
  serviceType?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the urgency of the encounter.
   */
  priority?: fhir.CodeableConceptArgs|undefined;
  /**
   * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   */
  episodeOfCare?: fhir.ReferenceArgs[]|undefined;
  /**
   * The request this encounter satisfies (e.g. incoming referral or procedure request).
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The list of people responsible for providing the service.
   */
  participant?: fhir.EncounterParticipantArgs[]|undefined;
  /**
   * The appointment that scheduled this encounter.
   */
  appointment?: fhir.ReferenceArgs[]|undefined;
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
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
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
   * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
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
   * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also classes).
   */
  public status: fhir.FhirCode<EncounterStatusCodeType>|null;
  /**
   * The current status is always found in the current version of the resource, not the status history.
   */
  public statusHistory: fhir.EncounterStatusHistory[];
  /**
   * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.
   */
  public class: fhir.Coding|null;
  /**
   * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
   */
  public classHistory: fhir.EncounterClassHistory[];
  /**
   * Since there are many ways to further classify encounters, this element is 0..*.
   */
  public type: fhir.CodeableConcept[];
  /**
   * Broad categorization of the service that is to be provided (e.g. cardiology).
   */
  public serviceType?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the urgency of the encounter.
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and there may be a group of patients that could be anonymous (such as in a group therapy for Alcoholics Anonymous - where the recording of the encounter could be used for billing on the number of people/staff and not important to the context of the specific patients) or alternately in veterinary care a herd of sheep receiving treatment (where the animals are not individually tracked).
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
   */
  public episodeOfCare: fhir.Reference[];
  /**
   * The request this encounter satisfies (e.g. incoming referral or procedure request).
   */
  public basedOn: fhir.Reference[];
  /**
   * The list of people responsible for providing the service.
   */
  public participant: fhir.EncounterParticipant[];
  /**
   * The appointment that scheduled this encounter.
   */
  public appointment: fhir.Reference[];
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
  public reasonCode: fhir.CodeableConcept[];
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  public reasonReference: fhir.Reference[];
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
   * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.
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
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<EncounterStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EncounterStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusHistory']) { this.statusHistory = source.statusHistory.map((x) => new fhir.EncounterStatusHistory(x)); }
    else { this.statusHistory = []; }
    if (source['class']) { this.class = new fhir.Coding(source.class); }
    else { this.class = null; }
    if (source['classHistory']) { this.classHistory = source.classHistory.map((x) => new fhir.EncounterClassHistory(x)); }
    else { this.classHistory = []; }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['serviceType']) { this.serviceType = new fhir.CodeableConcept(source.serviceType); }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['episodeOfCare']) { this.episodeOfCare = source.episodeOfCare.map((x) => new fhir.Reference(x)); }
    else { this.episodeOfCare = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.EncounterParticipant(x)); }
    else { this.participant = []; }
    if (source['appointment']) { this.appointment = source.appointment.map((x) => new fhir.Reference(x)); }
    else { this.appointment = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['length']) { this.length = new fhir.Duration(source.length); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['diagnosis']) { this.diagnosis = source.diagnosis.map((x) => new fhir.EncounterDiagnosis(x)); }
    else { this.diagnosis = []; }
    if (source['account']) { this.account = source.account.map((x) => new fhir.Reference(x)); }
    else { this.account = []; }
    if (source['hospitalization']) { this.hospitalization = new fhir.EncounterHospitalization(source.hospitalization); }
    if (source['location']) { this.location = source.location.map((x) => new fhir.EncounterLocation(x)); }
    else { this.location = []; }
    if (source['serviceProvider']) { this.serviceProvider = new fhir.Reference(source.serviceProvider); }
    if (source['partOf']) { this.partOf = new fhir.Reference(source.partOf); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Encounter' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vRSV('status',exp,'EncounterStatus',EncounterStatusVsValidation,'r')
    this.vOA('statusHistory',exp)
    this.vRS('class',exp)
    this.vOA('classHistory',exp)
    this.vOA('type',exp)
    this.vOS('serviceType',exp)
    this.vOS('priority',exp)
    this.vOS('subject',exp)
    this.vOA('episodeOfCare',exp)
    this.vOA('basedOn',exp)
    this.vOA('participant',exp)
    this.vOA('appointment',exp)
    this.vOS('period',exp)
    this.vOS('length',exp)
    this.vOA('reasonCode',exp)
    this.vOA('reasonReference',exp)
    this.vOA('diagnosis',exp)
    this.vOA('account',exp)
    this.vOS('hospitalization',exp)
    this.vOA('location',exp)
    this.vOS('serviceProvider',exp)
    this.vOS('partOf',exp)
    return issues;
  }
}
