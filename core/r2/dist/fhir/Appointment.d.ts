import * as fhir from '../fhir.js';
import { ParticipantrequiredCodeType } from '../fhirValueSets/ParticipantrequiredCodes.js';
import { ParticipationstatusCodeType } from '../fhirValueSets/ParticipationstatusCodes.js';
import { AppointmentstatusCodeType } from '../fhirValueSets/AppointmentstatusCodes.js';
/**
 * Valid arguments for the AppointmentParticipant type.
 */
export interface AppointmentParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * Role of participant in the appointment.
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
     * Participation status of the Patient.
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
     * Role of participant in the appointment.
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
     * Participation status of the Patient.
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
     * The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
     */
    status: fhir.FhirCode<AppointmentstatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The type of appointment that is being booked (This may also be associated with participants for location, and/or a HealthcareService).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
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
     * The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot.
     */
    slot?: fhir.ReferenceArgs[] | undefined;
    /**
     * Additional comments about the appointment.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Appointment.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * List of participants involved in the appointment.
     */
    participant: fhir.AppointmentParticipantArgs[] | null;
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
     * The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
     */
    status: fhir.FhirCode<AppointmentstatusCodeType> | null;
    /**
     * The type of appointment that is being booked (This may also be associated with participants for location, and/or a HealthcareService).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The reason that this appointment is being scheduled. This is more clinical than administrative.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
     */
    priority?: fhir.FhirUnsignedInt | undefined;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: fhir.FhirString | undefined;
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
     * The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot.
     */
    slot: fhir.Reference[];
    /**
     * Additional comments about the appointment.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * List of participants involved in the appointment.
     */
    participant: fhir.AppointmentParticipant[];
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