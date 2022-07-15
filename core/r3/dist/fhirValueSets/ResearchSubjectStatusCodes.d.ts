/**
 * Indicates the progression of a study subject through a study
 */
export declare const ResearchSubjectStatusCodes: {
    /**
     * active: The subject is currently being monitored and/or subject to treatment as part of the study
     */
    readonly Active: "active";
    /**
     * candidate: The subject has been identified as a potential participant in the study but has not yet agreed to participate
     */
    readonly Candidate: "candidate";
    /**
     * completed: All intended monitoring/treatment of the subject has been completed and their engagement with the study is now ended
     */
    readonly Completed: "completed";
    /**
     * enrolled: The subject has agreed to participate in the study but has not yet begun performing any action within the study
     */
    readonly Enrolled: "enrolled";
    /**
     * suspended: The subject has temporarily discontinued monitoring/treatment as part of the study
     */
    readonly Suspended: "suspended";
    /**
     * withdrawn: The subject has permanently ended participation in the study prior to completion of the intended monitoring/treatment
     */
    readonly Withdrawn: "withdrawn";
};
/**
 * Indicates the progression of a study subject through a study
 */
export declare type ResearchSubjectStatusCodeType = typeof ResearchSubjectStatusCodes[keyof typeof ResearchSubjectStatusCodes];
//# sourceMappingURL=ResearchSubjectStatusCodes.d.ts.map