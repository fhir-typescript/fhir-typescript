import { CodingArgs } from '../fhir/Coding.js';
/**
 * Types of research studies (types of research methods).
 */
export declare type StudyTypeCodingType = {
    /**
     * case-control: case-control study.
     */
    CaseControlStudy: CodingArgs;
    /**
     * case-report: a single case report.
     */
    CaseReport: CodingArgs;
    /**
     * CCT: controlled (but not randomized) trial.
     */
    ControlledTrialNonRandomized: CodingArgs;
    /**
     * cohort: observational study comparing cohorts.
     */
    ComparativeCohortStudy: CodingArgs;
    /**
     * mixed: a combination of 1 or more types of studies.
     */
    MixedMethods: CodingArgs;
    /**
     * RCT: randomized controlled trial.
     */
    RandomizedTrial: CodingArgs;
    /**
     * series: uncontrolled cohort or case series.
     */
    UncontrolledCohortOrCaseSeries: CodingArgs;
};
/**
 * Types of research studies (types of research methods).
 */
export declare const StudyTypeCodings: StudyTypeCodingType;
//# sourceMappingURL=StudyTypeCodings.d.ts.map