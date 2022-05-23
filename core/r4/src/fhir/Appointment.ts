// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Appointment

import * as fhir from '../fhir.js';

// @ts-ignore
import { EncounterParticipantTypeCodings, EncounterParticipantTypeCodingType,} from '../fhirValueSets/EncounterParticipantTypeCodings.js';
// @ts-ignore
import { EncounterParticipantTypeCodes,  EncounterParticipantTypeCodeType } from '../fhirValueSets/EncounterParticipantTypeCodes.js';
// @ts-ignore
import { ParticipantrequiredCodings, ParticipantrequiredCodingType,} from '../fhirValueSets/ParticipantrequiredCodings.js';
// @ts-ignore
import { ParticipantrequiredCodes,  ParticipantrequiredCodeType } from '../fhirValueSets/ParticipantrequiredCodes.js';
// @ts-ignore
import { ParticipationstatusCodings, ParticipationstatusCodingType,} from '../fhirValueSets/ParticipationstatusCodings.js';
// @ts-ignore
import { ParticipationstatusCodes,  ParticipationstatusCodeType } from '../fhirValueSets/ParticipationstatusCodes.js';
// @ts-ignore
import { AppointmentstatusCodings, AppointmentstatusCodingType,} from '../fhirValueSets/AppointmentstatusCodings.js';
// @ts-ignore
import { AppointmentstatusCodes,  AppointmentstatusCodeType } from '../fhirValueSets/AppointmentstatusCodes.js';
// @ts-ignore
import { AppointmentCancellationReasonCodings, AppointmentCancellationReasonCodingType,} from '../fhirValueSets/AppointmentCancellationReasonCodings.js';
// @ts-ignore
import { AppointmentCancellationReasonCodes,  AppointmentCancellationReasonCodeType } from '../fhirValueSets/AppointmentCancellationReasonCodes.js';
// @ts-ignore
import { ServiceCategoryCodings, ServiceCategoryCodingType,} from '../fhirValueSets/ServiceCategoryCodings.js';
// @ts-ignore
import { ServiceCategoryCodes,  ServiceCategoryCodeType } from '../fhirValueSets/ServiceCategoryCodes.js';
// @ts-ignore
import { ServiceTypeCodings, ServiceTypeCodingType,} from '../fhirValueSets/ServiceTypeCodings.js';
// @ts-ignore
import { ServiceTypeCodes,  ServiceTypeCodeType } from '../fhirValueSets/ServiceTypeCodes.js';
// @ts-ignore
import { C80PracticeCodesCodings, C80PracticeCodesCodingType,} from '../fhirValueSets/C80PracticeCodesCodings.js';
// @ts-ignore
import { C80PracticeCodesCodes,  C80PracticeCodesCodeType } from '../fhirValueSets/C80PracticeCodesCodes.js';
// @ts-ignore
import { V20276Codings, V20276CodingType,} from '../fhirValueSets/V20276Codings.js';
// @ts-ignore
import { V20276Codes,  V20276CodeType } from '../fhirValueSets/V20276Codes.js';
// @ts-ignore
import { EncounterReasonCodings, EncounterReasonCodingType,} from '../fhirValueSets/EncounterReasonCodings.js';
// @ts-ignore
import { EncounterReasonCodes,  EncounterReasonCodeType } from '../fhirValueSets/EncounterReasonCodes.js';
/**
 * Valid arguments for the AppointmentParticipant type.
 */
export interface AppointmentParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
   * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
   * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  actor?: fhir.ReferenceArgs|undefined;
  /**
   * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   */
  required?: fhir.FhirCode<ParticipantrequiredCodeType>|string|undefined;
  /**
   * Participation status of the actor.
   */
  status: fhir.FhirCode<ParticipationstatusCodeType>|string|undefined;
  /**
   * Participation period of the actor.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * List of participants involved in the appointment.
 */
export class AppointmentParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AppointmentParticipant';
  /**
   * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
   * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
   * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
   */
  public type: fhir.CodeableConcept[];
  /**
   * A Person, Location/HealthcareService or Device that is participating in the appointment.
   */
  public actor?: fhir.Reference|undefined;
  /**
   * Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
   */
  public required?: fhir.FhirCode<ParticipantrequiredCodeType>|undefined;
  /**
   * Participation status of the actor.
   */
  public status: fhir.FhirCode<ParticipationstatusCodeType>|null;
  /**
   * Participation period of the actor.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for AppointmentParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AppointmentParticipantArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor); }
    if (source['required']) { this.required = new fhir.FhirCode<ParticipantrequiredCodeType>({value: source.required}); }
    if (source['status']) { this.status = new fhir.FhirCode<ParticipationstatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Extensible-bound Value Set for type (Appointment.participant.type)
   */
  public static get typeExtensibleCodings() {
    return EncounterParticipantTypeCodings;
  }
  /**
   * Required-bound Value Set for required (Appointment.participant.required)
   */
  public static get requiredRequiredCodes() {
    return ParticipantrequiredCodes;
  }
  /**
   * Required-bound Value Set for status (Appointment.participant.status)
   */
  public static get statusRequiredCodes() {
    return ParticipationstatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["type"]) { this.type.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["actor"]) { issues.push(...this.actor.doModelValidation()); }
    if (this['required'] && (!Object.values(ParticipantrequiredCodes).includes(this.required as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property required?:fhir.FhirCode<ParticipantrequiredCodeType> fhir: Appointment.participant.required:code Required binding to: Participantrequired' });
    }
    if (this["required"]) { issues.push(...this.required.doModelValidation()); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<ParticipationstatusCodeType> fhir: Appointment.participant.status:code' });
    }
    if (this['status'] && (!Object.values(ParticipationstatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<ParticipationstatusCodeType> fhir: Appointment.participant.status:code Required binding to: Participationstatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the Appointment type.
 */
export interface AppointmentArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Appointment"|undefined;
  /**
   * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
   * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
   */
  status: fhir.FhirCode<AppointmentstatusCodeType>|string|undefined;
  /**
   * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   */
  cancelationReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
   */
  serviceType?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The style of appointment or patient that has been booked in the slot (not service type).
   */
  appointmentType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Seeking implementer feedback on this property and how interoperable it is.
   * Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
   */
  priority?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Additional information to support the appointment provided when making the appointment.
   */
  supportingInformation?: fhir.ReferenceArgs[]|undefined;
  /**
   * Date/Time that the appointment is to take place.
   */
  start?: fhir.FhirInstant|string|undefined;
  /**
   * Date/Time that the appointment is to conclude.
   */
  end?: fhir.FhirInstant|string|undefined;
  /**
   * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   */
  minutesDuration?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The slots from the participants' schedules that will be filled by the appointment.
   */
  slot?: fhir.ReferenceArgs[]|undefined;
  /**
   * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
   * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   */
  patientInstruction?: fhir.FhirString|string|undefined;
  /**
   * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * List of participants involved in the appointment.
   */
  participant: fhir.AppointmentParticipantArgs[]|null;
  /**
   * This does not introduce a capacity for recurring appointments.
   */
  requestedPeriod?: fhir.PeriodArgs[]|undefined;
}

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export class Appointment extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Appointment';
  /**
   * Resource Type Name
   */
  public override resourceType: "Appointment";
  /**
   * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  public identifier: fhir.Identifier[];
  /**
   * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
   * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
   */
  public status: fhir.FhirCode<AppointmentstatusCodeType>|null;
  /**
   * The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply.
   */
  public cancelationReason?: fhir.CodeableConcept|undefined;
  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  public serviceCategory: fhir.CodeableConcept[];
  /**
   * For a provider to provider appointment the code "FOLLOWUP" may be appropriate, as this is expected to be discussing some patient that was seen in the past.
   */
  public serviceType: fhir.CodeableConcept[];
  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  public specialty: fhir.CodeableConcept[];
  /**
   * The style of appointment or patient that has been booked in the slot (not service type).
   */
  public appointmentType?: fhir.CodeableConcept|undefined;
  /**
   * The coded reason that this appointment is being scheduled. This is more clinical than administrative.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Seeking implementer feedback on this property and how interoperable it is.
   * Using an extension to record a CodeableConcept for named values may be tested at a future connectathon.
   */
  public priority?: fhir.FhirUnsignedInt|undefined;
  /**
   * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Additional information to support the appointment provided when making the appointment.
   */
  public supportingInformation: fhir.Reference[];
  /**
   * Date/Time that the appointment is to take place.
   */
  public start?: fhir.FhirInstant|undefined;
  /**
   * Date/Time that the appointment is to conclude.
   */
  public end?: fhir.FhirInstant|undefined;
  /**
   * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end.
   */
  public minutesDuration?: fhir.FhirPositiveInt|undefined;
  /**
   * The slots from the participants' schedules that will be filled by the appointment.
   */
  public slot: fhir.Reference[];
  /**
   * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
   * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before).
   */
  public patientInstruction?: fhir.FhirString|undefined;
  /**
   * The service request this appointment is allocated to assess (e.g. incoming referral or procedure request).
   */
  public basedOn: fhir.Reference[];
  /**
   * List of participants involved in the appointment.
   */
  public participant: fhir.AppointmentParticipant[];
  /**
   * This does not introduce a capacity for recurring appointments.
   */
  public requestedPeriod: fhir.Period[];
  /**
   * Default constructor for Appointment - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AppointmentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Appointment';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<AppointmentstatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['cancelationReason']) { this.cancelationReason = new fhir.CodeableConcept(source.cancelationReason); }
    if (source['serviceCategory']) { this.serviceCategory = source.serviceCategory.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceCategory = []; }
    if (source['serviceType']) { this.serviceType = source.serviceType.map((x) => new fhir.CodeableConcept(x)); }
    else { this.serviceType = []; }
    if (source['specialty']) { this.specialty = source.specialty.map((x) => new fhir.CodeableConcept(x)); }
    else { this.specialty = []; }
    if (source['appointmentType']) { this.appointmentType = new fhir.CodeableConcept(source.appointmentType); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['priority']) { this.priority = new fhir.FhirUnsignedInt({value: source.priority}); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['supportingInformation']) { this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x)); }
    else { this.supportingInformation = []; }
    if (source['start']) { this.start = new fhir.FhirInstant({value: source.start}); }
    if (source['end']) { this.end = new fhir.FhirInstant({value: source.end}); }
    if (source['minutesDuration']) { this.minutesDuration = new fhir.FhirPositiveInt({value: source.minutesDuration}); }
    if (source['slot']) { this.slot = source.slot.map((x) => new fhir.Reference(x)); }
    else { this.slot = []; }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['patientInstruction']) { this.patientInstruction = new fhir.FhirString({value: source.patientInstruction}); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.AppointmentParticipant(x)); }
    else { this.participant = []; }
    if (source['requestedPeriod']) { this.requestedPeriod = source.requestedPeriod.map((x) => new fhir.Period(x)); }
    else { this.requestedPeriod = []; }
  }
  /**
   * Required-bound Value Set for status (Appointment.status)
   */
  public static get statusRequiredCodes() {
    return AppointmentstatusCodes;
  }
  /**
   * Preferred-bound Value Set for specialty (Appointment.specialty)
   */
  public static get specialtyPreferredCodings() {
    return C80PracticeCodesCodings;
  }
  /**
   * Preferred-bound Value Set for appointmentType (Appointment.appointmentType)
   */
  public static get appointmentTypePreferredCodings() {
    return V20276Codings;
  }
  /**
   * Preferred-bound Value Set for reasonCode (Appointment.reasonCode)
   */
  public static get reasonCodePreferredCodings() {
    return EncounterReasonCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Appointment" fhir: Appointment.resourceType:"Appointment"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<AppointmentstatusCodeType> fhir: Appointment.status:code' });
    }
    if (this['status'] && (!Object.values(AppointmentstatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<AppointmentstatusCodeType> fhir: Appointment.status:code Required binding to: Appointmentstatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["cancelationReason"]) { issues.push(...this.cancelationReason.doModelValidation()); }
    if (this["serviceCategory"]) { this.serviceCategory.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["serviceType"]) { this.serviceType.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["specialty"]) { this.specialty.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["appointmentType"]) { issues.push(...this.appointmentType.doModelValidation()); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["priority"]) { issues.push(...this.priority.doModelValidation()); }
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (this["supportingInformation"]) { this.supportingInformation.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["start"]) { issues.push(...this.start.doModelValidation()); }
    if (this["end"]) { issues.push(...this.end.doModelValidation()); }
    if (this["minutesDuration"]) { issues.push(...this.minutesDuration.doModelValidation()); }
    if (this["slot"]) { this.slot.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["created"]) { issues.push(...this.created.doModelValidation()); }
    if (this["comment"]) { issues.push(...this.comment.doModelValidation()); }
    if (this["patientInstruction"]) { issues.push(...this.patientInstruction.doModelValidation()); }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['participant']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property participant:fhir.AppointmentParticipant[] fhir: Appointment.participant:participant' });
    } else if (!Array.isArray(this.participant)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property participant:fhir.AppointmentParticipant[] fhir: Appointment.participant:participant' });
    } else if (this.participant.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property participant:fhir.AppointmentParticipant[] fhir: Appointment.participant:participant' });
    }
    if (this["participant"]) { this.participant.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["requestedPeriod"]) { this.requestedPeriod.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
