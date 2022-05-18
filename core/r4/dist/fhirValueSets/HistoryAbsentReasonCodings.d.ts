import { Coding } from '../fhir/Coding.js';
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare const HistoryAbsentReasonCodings: {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    readonly Deferred: Coding;
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    readonly SubjectUnknown: Coding;
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient.
     */
    readonly UnableToObtain: Coding;
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    readonly InformationWithheld: Coding;
};
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare type HistoryAbsentReasonCodingType = typeof HistoryAbsentReasonCodings;
//# sourceMappingURL=HistoryAbsentReasonCodings.d.ts.map