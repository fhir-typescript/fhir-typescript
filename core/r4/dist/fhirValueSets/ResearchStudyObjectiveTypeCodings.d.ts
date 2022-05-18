import { Coding } from '../fhir/Coding.js';
/**
 * Codes for the kind of study objective.
 */
export declare const ResearchStudyObjectiveTypeCodings: {
    /**
     * exploratory: Exploratory questions to be answered in the study.
     */
    readonly Exploratory: Coding;
    /**
     * primary: The main question to be answered, and the one that drives any statistical planning for the study—e.g., calculation of the sample size to provide the appropriate power for statistical testing.
     */
    readonly Primary: Coding;
    /**
     * secondary: Question to be answered in the study that is of lesser importance than the primary objective.
     */
    readonly Secondary: Coding;
};
/**
 * Codes for the kind of study objective.
 */
export declare type ResearchStudyObjectiveTypeCodingType = typeof ResearchStudyObjectiveTypeCodings;
//# sourceMappingURL=ResearchStudyObjectiveTypeCodings.d.ts.map