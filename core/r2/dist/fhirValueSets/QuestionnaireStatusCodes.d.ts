/**
 * Lifecycle status of the questionnaire.
 */
export declare const QuestionnaireStatusCodes: {
    /**
     * draft: This Questionnaire is not ready for official use.
     */
    readonly Draft: "draft";
    /**
     * published: This Questionnaire is ready for use.
     */
    readonly Published: "published";
    /**
     * retired: This Questionnaire should no longer be used to gather data.
     */
    readonly Retired: "retired";
};
/**
 * Lifecycle status of the questionnaire.
 */
export declare type QuestionnaireStatusCodeType = typeof QuestionnaireStatusCodes[keyof typeof QuestionnaireStatusCodes];
//# sourceMappingURL=QuestionnaireStatusCodes.d.ts.map