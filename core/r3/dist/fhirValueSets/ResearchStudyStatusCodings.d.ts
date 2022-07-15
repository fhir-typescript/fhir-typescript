import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes that convey the current status of the research study
 */
export declare type ResearchStudyStatusCodingType = {
    /**
     * completed: The information sought by the study has been gathered and compiled and no further work is being performed
     */
    Completed: CodingArgs;
    /**
     * draft: The study is undergoing design but the process of selecting study subjects and capturing data has not yet begun.
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: This study never actually existed.  The record is retained for tracking purposes in the event decisions may have been made based on this erroneous information.
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The study is currently being executed
     */
    InProgress: CodingArgs;
    /**
     * stopped: The study was terminated prior to the final determination of results
     */
    Stopped: CodingArgs;
    /**
     * suspended: Execution of the study has been temporarily paused
     */
    Suspended: CodingArgs;
};
/**
 * Codes that convey the current status of the research study
 */
export declare const ResearchStudyStatusCodings: ResearchStudyStatusCodingType;
//# sourceMappingURL=ResearchStudyStatusCodings.d.ts.map