/**
 * The type of study the evidence was derived from.
 */
export declare const StudyTypeCodes: {
    /**
     * case-control: case-control study.
     */
    readonly CaseControlStudy: "case-control";
    /**
     * case-report: a single case report.
     */
    readonly CaseReport: "case-report";
    /**
     * CCT: controlled (but not randomized) trial.
     */
    readonly ControlledTrialNonRandomized: "CCT";
    /**
     * cohort: observational study comparing cohorts.
     */
    readonly ComparativeCohortStudy: "cohort";
    /**
     * mixed: a combination of 1 or more types of studies.
     */
    readonly MixedMethods: "mixed";
    /**
     * RCT: randomized controlled trial.
     */
    readonly RandomizedTrial: "RCT";
    /**
     * series: uncontrolled cohort or case series.
     */
    readonly UncontrolledCohortOrCaseSeries: "series";
};
/**
 * The type of study the evidence was derived from.
 */
export declare type StudyTypeCodeType = typeof StudyTypeCodes[keyof typeof StudyTypeCodes];
//# sourceMappingURL=StudyTypeCodes.d.ts.map