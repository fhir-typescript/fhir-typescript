/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare const HistoryAbsentReasonCodes: {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    readonly Deferred: "deferred";
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    readonly SubjectUnknown: "subject-unknown";
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient.
     */
    readonly UnableToObtain: "unable-to-obtain";
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    readonly InformationWithheld: "withheld";
};
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare type HistoryAbsentReasonCodeType = typeof HistoryAbsentReasonCodes[keyof typeof HistoryAbsentReasonCodes];
//# sourceMappingURL=HistoryAbsentReasonCodes.d.ts.map