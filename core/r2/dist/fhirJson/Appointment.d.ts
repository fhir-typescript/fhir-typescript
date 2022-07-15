import * as fhir from '../fhirJson.js';
/**
 * List of participants involved in the appointment.
 */
export interface AppointmentParticipant extends fhir.BackboneElement {
    /**
     * Role of participant in the appointment.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A Person, Location/HealthcareService or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */
    required?: 'information-only' | 'optional' | 'required' | undefined;
    /**
     * Extended properties for primitive element: Appointment.participant.required
     */
    _required?: fhir.FhirElement;
    /**
     * Participation status of the Patient.
     */
    status: 'accepted' | 'declined' | 'needs-action' | 'tentative' | null;
    /**
     * Extended properties for primitive element: Appointment.participant.status
     */
    _status?: fhir.FhirElement;
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export interface Appointment extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Appointment" | null;
    /**
     * This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
     */
    status: 'arrived' | 'booked' | 'cancelled' | 'fulfilled' | 'noshow' | 'pending' | 'proposed' | null;
    /**
     * Extended properties for primitive element: Appointment.status
     */
    _status?: fhir.FhirElement;
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
    priority?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.description
     */
    _description?: fhir.FhirElement;
    /**
     * Date/Time that the appointment is to take place.
     */
    start?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.start
     */
    _start?: fhir.FhirElement;
    /**
     * Date/Time that the appointment is to conclude.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.end
     */
    _end?: fhir.FhirElement;
    /**
     * Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
     */
    minutesDuration?: number | undefined;
    /**
     * Extended properties for primitive element: Appointment.minutesDuration
     */
    _minutesDuration?: fhir.FhirElement;
    /**
     * The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot.
     */
    slot?: (fhir.Reference | null)[] | undefined;
    /**
     * Additional comments about the appointment.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Appointment.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * List of participants involved in the appointment.
     */
    participant: (fhir.AppointmentParticipant | null)[] | null;
}
//# sourceMappingURL=Appointment.d.ts.map