/**
 * Codes describing the reason why a family member history was not done.
 */
export declare const HistoryNotDoneReasonCodes: {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    readonly Deferred: "deferred";
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    readonly SubjectUnknown: "subject-unknown";
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient
     */
    readonly UnableToObtain: "unable-to-obtain";
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    readonly InformationWithheld: "withheld";
};
/**
 * Codes describing the reason why a family member history was not done.
 */
export declare type HistoryNotDoneReasonCodeType = typeof HistoryNotDoneReasonCodes[keyof typeof HistoryNotDoneReasonCodes];
//# sourceMappingURL=HistoryNotDoneReasonCodes.d.ts.map