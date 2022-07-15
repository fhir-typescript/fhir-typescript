import { CodingArgs } from '../fhir/Coding.js';
/**
 * The Participation status of an appointment.
 */
export declare type ParticipantstatusCodingType = {
    /**
     * accepted: The appointment participant has accepted that they can attend the appointment at the time specified in the AppointmentResponse.
     */
    Accepted: CodingArgs;
    /**
     * completed: The participant has completed the appointment.
     */
    Completed: CodingArgs;
    /**
     * declined: The appointment participant has declined the appointment.
     */
    Declined: CodingArgs;
    /**
     * in-process: The participant has in-process the appointment.
     */
    InProcess: CodingArgs;
    /**
     * needs-action: This is the intitial status of an appointment participant until a participant has replied. It implies that there is no commitment for the appointment.
     */
    NeedsAction: CodingArgs;
    /**
     * tentative: The appointment participant has tentatively accepted the appointment.
     */
    Tentative: CodingArgs;
};
/**
 * The Participation status of an appointment.
 */
export declare const ParticipantstatusCodings: ParticipantstatusCodingType;
//# sourceMappingURL=ParticipantstatusCodings.d.ts.map