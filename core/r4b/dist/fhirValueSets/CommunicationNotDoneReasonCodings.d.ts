import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes for the reason why a communication did not happen.
 */
export declare type CommunicationNotDoneReasonCodingType = {
    /**
     * family-objection: The communication was not done due to a family objection.
     */
    FamilyObjection: CodingArgs;
    /**
     * invalid-phone-number: The communication was not done due to an invalid phone number.
     */
    InvalidPhoneNumber: CodingArgs;
    /**
     * patient-objection: The communication was not done due to a patient objection.
     */
    PatientObjection: CodingArgs;
    /**
     * recipient-unavailable: The communication was not done due to the recipient being unavailable.
     */
    RecipientUnavailable: CodingArgs;
    /**
     * system-error: The communication was not done due to a system error.
     */
    SystemError: CodingArgs;
    /**
     * unknown: The communication was not done due to an unknown reason.
     */
    Unknown: CodingArgs;
};
/**
 * Codes for the reason why a communication did not happen.
 */
export declare const CommunicationNotDoneReasonCodings: CommunicationNotDoneReasonCodingType;
//# sourceMappingURL=CommunicationNotDoneReasonCodings.d.ts.map