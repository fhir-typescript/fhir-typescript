import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes describing the reason why a family member history was not done.
 */
export declare type HistoryNotDoneReasonCodingType = {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    Deferred: CodingArgs;
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    SubjectUnknown: CodingArgs;
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient
     */
    UnableToObtain: CodingArgs;
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    InformationWithheld: CodingArgs;
};
/**
 * Codes describing the reason why a family member history was not done.
 */
export declare const HistoryNotDoneReasonCodings: HistoryNotDoneReasonCodingType;
//# sourceMappingURL=HistoryNotDoneReasonCodings.d.ts.map