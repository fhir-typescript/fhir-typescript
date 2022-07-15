import * as fhir from '../fhirJson.js';
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 */
export interface AppointmentResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "AppointmentResponse" | null;
    /**
     * This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Appointment that this response is replying to.
     */
    appointment: fhir.Reference | null;
    /**
     * Date/Time that the appointment is to take place, or requested new start time.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.start
     */
    _start?: fhir.FhirElement;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.end
     */
    _end?: fhir.FhirElement;
    /**
     * Role of participant in the appointment.
     */
    participantType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
     */
    participantStatus: 'accepted' | 'completed' | 'declined' | 'in-process' | 'needs-action' | 'tentative' | null;
    /**
     * Extended properties for primitive element: AppointmentResponse.participantStatus
     */
    _participantStatus?: fhir.FhirElement;
    /**
     * Additional comments about the appointment.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.comment
     */
    _comment?: fhir.FhirElement;
}
//# sourceMappingURL=AppointmentResponse.d.ts.map