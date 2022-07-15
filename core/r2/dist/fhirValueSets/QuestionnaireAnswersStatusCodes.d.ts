/**
 * Lifecycle status of the questionnaire response.
 */
export declare const QuestionnaireAnswersStatusCodes: {
    /**
     * amended: This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    readonly Amended: "amended";
    /**
     * completed: This QuestionnaireResponse has been filled out with answers, and the current content is regarded as definitive.
     */
    readonly Completed: "completed";
    /**
     * in-progress: This QuestionnaireResponse has been partially filled out with answers, but changes or additions are still expected to be made to it.
     */
    readonly InProgress: "in-progress";
};
/**
 * Lifecycle status of the questionnaire response.
 */
export declare type QuestionnaireAnswersStatusCodeType = typeof QuestionnaireAnswersStatusCodes[keyof typeof QuestionnaireAnswersStatusCodes];
//# sourceMappingURL=QuestionnaireAnswersStatusCodes.d.ts.map