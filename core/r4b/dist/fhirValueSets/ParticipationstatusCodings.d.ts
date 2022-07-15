import { CodingArgs } from '../fhir/Coding.js';
/**
 * The Participation status of an appointment.
 */
export declare type ParticipationstatusCodingType = {
    /**
     * accepted: The participant has accepted the appointment.
     */
    Accepted: CodingArgs;
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    Declined: CodingArgs;
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    NeedsAction: CodingArgs;
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    Tentative: CodingArgs;
};
/**
 * The Participation status of an appointment.
 */
export declare const ParticipationstatusCodings: ParticipationstatusCodingType;
//# sourceMappingURL=ParticipationstatusCodings.d.ts.map