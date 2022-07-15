import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates the progression of a study subject through a study
 */
export declare type ResearchSubjectStatusCodingType = {
    /**
     * active: The subject is currently being monitored and/or subject to treatment as part of the study
     */
    Active: CodingArgs;
    /**
     * candidate: The subject has been identified as a potential participant in the study but has not yet agreed to participate
     */
    Candidate: CodingArgs;
    /**
     * completed: All intended monitoring/treatment of the subject has been completed and their engagement with the study is now ended
     */
    Completed: CodingArgs;
    /**
     * enrolled: The subject has agreed to participate in the study but has not yet begun performing any action within the study
     */
    Enrolled: CodingArgs;
    /**
     * suspended: The subject has temporarily discontinued monitoring/treatment as part of the study
     */
    Suspended: CodingArgs;
    /**
     * withdrawn: The subject has permanently ended participation in the study prior to completion of the intended monitoring/treatment
     */
    Withdrawn: CodingArgs;
};
/**
 * Indicates the progression of a study subject through a study
 */
export declare const ResearchSubjectStatusCodings: ResearchSubjectStatusCodingType;
//# sourceMappingURL=ResearchSubjectStatusCodings.d.ts.map