import * as fhir from '../fhir.js';
import { ParticipantstatusCodeType } from '../fhirValueSets/ParticipantstatusCodes.js';
/**
 * Valid arguments for the AppointmentResponse type.
 */
export interface AppointmentResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AppointmentResponse" | undefined;
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhir.ReferenceArgs | null;
    /**
     * Date/Time that the appointment is to take place, or requested new start time.
     */
    start?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * Role of participant in the appointment.
     */
    participantType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.ReferenceArgs | undefined;
    /**
     * Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
     */
    participantStatus: fhir.FhirCode<ParticipantstatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.participantStatus
     */
    _participantStatus?: fhir.FhirElementArgs;
    /**
     * Additional comments about the appointment.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export declare class AppointmentResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AppointmentResponse";
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier: fhir.Identifier[];
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhir.Reference | null;
    /**
     * Date/Time that the appointment is to take place, or requested new start time.
     */
    start?: fhir.FhirInstant | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: fhir.FhirInstant | undefined;
    /**
     * Role of participant in the appointment.
     */
    participantType: fhir.CodeableConcept[];
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
     */
    participantStatus: fhir.FhirCode<ParticipantstatusCodeType> | null;
    /**
     * Additional comments about the appointment.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AppointmentResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=AppointmentResponse.d.ts.map