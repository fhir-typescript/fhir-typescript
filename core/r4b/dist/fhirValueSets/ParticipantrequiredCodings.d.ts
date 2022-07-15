import { CodingArgs } from '../fhir/Coding.js';
/**
 * Is the Participant required to attend the appointment.
 */
export declare type ParticipantrequiredCodingType = {
    /**
     * information-only: The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).
     */
    InformationOnly: CodingArgs;
    /**
     * optional: The participant may optionally attend the appointment.
     */
    Optional: CodingArgs;
    /**
     * required: The participant is required to attend the appointment.
     */
    Required: CodingArgs;
};
/**
 * Is the Participant required to attend the appointment.
 */
export declare const ParticipantrequiredCodings: ParticipantrequiredCodingType;
//# sourceMappingURL=ParticipantrequiredCodings.d.ts.map