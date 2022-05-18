import { Coding } from '../fhir/Coding.js';
/**
 * The Participation status of an appointment.
 */
export declare const ParticipationstatusCodings: {
    /**
     * accepted: The participant has accepted the appointment.
     */
    readonly Accepted: Coding;
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    readonly Declined: Coding;
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    readonly NeedsAction: Coding;
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    readonly Tentative: Coding;
};
/**
 * The Participation status of an appointment.
 */
export declare type ParticipationstatusCodingType = typeof ParticipationstatusCodings;
//# sourceMappingURL=ParticipationstatusCodings.d.ts.map