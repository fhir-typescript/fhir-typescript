import * as fhir from '../fhir.js';
import { EncounterParticipantTypeCodingType } from '../fhirValueSets/EncounterParticipantTypeCodings.js';
import { ParticipationstatusCodeType } from '../fhirValueSets/ParticipationstatusCodes.js';
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
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
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
     * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
     */
    participantType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A Person, Location, HealthcareService, or Device that is participating in the appointment.
     */
    actor?: fhir.ReferenceArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
     */
    participantStatus: fhir.FhirCode<ParticipationstatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AppointmentResponse.participantStatus
     */
    _participantStatus?: fhir.FhirElementArgs;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
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
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
     */
    start?: fhir.FhirInstant | undefined;
    /**
     * This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */
    end?: fhir.FhirInstant | undefined;
    /**
     * The role of the participant can be used to declare what the actor will be doing in the scope of the referenced appointment.
     * If the actor is not specified, then it is expected that the actor will be filled in at a later stage of planning.
     * This value SHALL be the same as specified on the referenced Appointment so that they can be matched, and subsequently updated.
     */
    participantType: fhir.CodeableConcept[];
    /**
     * A Person, Location, HealthcareService, or Device that is participating in the appointment.
     */
    actor?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the participant as not currently valid.
     */
    participantStatus: fhir.FhirCode<ParticipationstatusCodeType> | null;
    /**
     * This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for AppointmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AppointmentResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for participantType (AppointmentResponse.participantType)
     */
    static get participantTypeExtensibleCodings(): EncounterParticipantTypeCodingType;
    /**
     * Required-bound Value Set for participantStatus (AppointmentResponse.participantStatus)
     */
    static get participantStatusRequiredCodes(): {
        readonly Accepted: "accepted";
        readonly Declined: "declined";
        readonly NeedsAction: "needs-action";
        readonly Tentative: "tentative";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=AppointmentResponse.d.ts.map