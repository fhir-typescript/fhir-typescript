import { Coding } from '../fhir/Coding.js';
/**
 * The type of participant for the action.
 */
export declare const ActionParticipantTypeCodings: {
    /**
     * device: The participant is a system or device used in the care of the patient.
     */
    readonly Device: Coding;
    /**
     * patient: The participant is the patient under evaluation.
     */
    readonly Patient: Coding;
    /**
     * practitioner: The participant is a practitioner involved in the patient's care.
     */
    readonly Practitioner: Coding;
    /**
     * related-person: The participant is a person related to the patient.
     */
    readonly RelatedPerson: Coding;
};
/**
 * The type of participant for the action.
 */
export declare type ActionParticipantTypeCodingType = typeof ActionParticipantTypeCodings;
//# sourceMappingURL=ActionParticipantTypeCodings.d.ts.map