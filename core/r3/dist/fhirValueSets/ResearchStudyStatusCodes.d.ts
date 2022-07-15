/**
 * Codes that convey the current status of the research study
 */
export declare const ResearchStudyStatusCodes: {
    /**
     * completed: The information sought by the study has been gathered and compiled and no further work is being performed
     */
    readonly Completed: "completed";
    /**
     * draft: The study is undergoing design but the process of selecting study subjects and capturing data has not yet begun.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: This study never actually existed.  The record is retained for tracking purposes in the event decisions may have been made based on this erroneous information.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: The study is currently being executed
     */
    readonly InProgress: "in-progress";
    /**
     * stopped: The study was terminated prior to the final determination of results
     */
    readonly Stopped: "stopped";
    /**
     * suspended: Execution of the study has been temporarily paused
     */
    readonly Suspended: "suspended";
};
/**
 * Codes that convey the current status of the research study
 */
export declare type ResearchStudyStatusCodeType = typeof ResearchStudyStatusCodes[keyof typeof ResearchStudyStatusCodes];
//# sourceMappingURL=ResearchStudyStatusCodes.d.ts.map