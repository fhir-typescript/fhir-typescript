import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of participant for the action
 */
export declare type ActionParticipantTypeCodingType = {
    /**
     * patient: The participant is the patient under evaluation
     */
    Patient: CodingArgs;
    /**
     * practitioner: The participant is a practitioner involved in the patient's care
     */
    Practitioner: CodingArgs;
    /**
     * related-person: The participant is a person related to the patient
     */
    RelatedPerson: CodingArgs;
};
/**
 * The type of participant for the action
 */
export declare const ActionParticipantTypeCodings: ActionParticipantTypeCodingType;
//# sourceMappingURL=ActionParticipantTypeCodings.d.ts.map