import * as fhir from '../fhir.js';
import { ParticipantrequiredCodeType } from '../fhirValueSets/ParticipantrequiredCodes.js';
import { ParticipationstatusCodeType } from '../fhirValueSets/ParticipationstatusCodes.js';
import { AppointmentstatusCodeType } from '../fhirValueSets/AppointmentstatusCodes.js';
/**
 * Valid arguments for the AppointmentParticipant type.
 */
export interface AppointmentParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.ReferenceArgs | undefined;
    /**
     * Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: fhir.FhirCode<ParticipantrequiredCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.participant.required
     */
    _required?: fhir.FhirElementArgs;
    /**
     * Participation status of the actor.
     */
    status: fhir.FhirCode<ParticipationstatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.participant.status
     */
    _status?: fhir.FhirElementArgs;
}
/**
 * List of participants involved in the appointment.
 */
export declare class AppointmentParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of this appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same when creating an AppointmentResponse so that they can be matched, and subsequently update the Appointment.
     */
    type: fhir.CodeableConcept[];
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: fhir.FhirCode<ParticipantrequiredCodeType> | undefined;
    /**
     * Participation status of the actor.
     */
    status: fhir.FhirCode<ParticipationstatusCodeType> | null;
    /**
     * Default constructor for AppointmentParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AppointmentParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Appointment type.
 */
export interface AppointmentArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Appointment" | undefined;
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
     * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
     */
    status: fhir.FhirCode<AppointmentstatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A broad categorisation of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The style of appointment or patient that has been booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    indication?: fhir.ReferenceArgs[] | undefined;
    /**
     * Seeking implementer feedback on this property and how interoperable it is.
     * Using an extension to record a codeableconcept for named values may be tested at a future connectathon.
     */
    priority?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Appointment.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Additional information to support the appointment provided when making the appointment.
     */
    supportingInformation?: fhir.ReferenceArgs[] | undefined;
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
     */
    minutesDuration?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Appointment.minutesDuration
     */
    _minutesDuration?: fhir.FhirElementArgs;
    /**
     * The slots from the participants' schedules that will be filled by the appointment.
     */
    slot?: fhir.ReferenceArgs[] | undefined;
    /**
     * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
     * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * The referral request this appointment is allocated to assess (incoming referral).
     */
    incomingReferral?: fhir.ReferenceArgs[] | undefined;
    /**
     * List of participants involved in the appointment.
     */
    participant: fhir.AppointmentParticipantArgs[] | null;
    /**
     * This does not introduce a capacity for recurring appointments.
     */
    requestedPeriod?: fhir.PeriodArgs[] | undefined;
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export declare class Appointment extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Appointment";
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * If the Appointment's status is "cancelled" then all participants are expected to have their calendars released for the appointment period, and as such any Slots that were marked as BUSY can be re-set to FREE.
     * This element is labeled as a modifier because the status contains the code entered-in-error that mark the Appointment as not currently valid.
     */
    status: fhir.FhirCode<AppointmentstatusCodeType> | null;
    /**
     * A broad categorisation of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType: fhir.CodeableConcept[];
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty: fhir.CodeableConcept[];
    /**
     * The style of appointment or patient that has been booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConcept | undefined;
    /**
     * The reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reason: fhir.CodeableConcept[];
    /**
     * Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */
    indication: fhir.Reference[];
    /**
     * Seeking implementer feedback on this property and how interoperable it is.
     * Using an extension to record a codeableconcept for named values may be tested at a future connectathon.
     */
    priority?: fhir.FhirUnsignedInt | undefined;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Additional information to support the appointment provided when making the appointment.
     */
    supportingInformation: fhir.Reference[];
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: fhir.FhirInstant | undefined;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: fhir.FhirInstant | undefined;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
     */
    minutesDuration?: fhir.FhirPositiveInt | undefined;
    /**
     * The slots from the participants' schedules that will be filled by the appointment.
     */
    slot: fhir.Reference[];
    /**
     * This property is required for many use cases where the age of an appointment is considered in processing workflows for scheduling and billing of appointments.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"
     * Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * The referral request this appointment is allocated to assess (incoming referral).
     */
    incomingReferral: fhir.Reference[];
    /**
     * List of participants involved in the appointment.
     */
    participant: fhir.AppointmentParticipant[];
    /**
     * This does not introduce a capacity for recurring appointments.
     */
    requestedPeriod: fhir.Period[];
    /**
     * Default constructor for Appointment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AppointmentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Appointment.d.ts.map