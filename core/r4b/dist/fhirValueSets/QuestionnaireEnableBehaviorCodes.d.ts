/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare const QuestionnaireEnableBehaviorCodes: {
    /**
     * all: Enable the question when all the enableWhen criteria are satisfied.
     */
    readonly All: "all";
    /**
     * any: Enable the question when any of the enableWhen criteria are satisfied.
     */
    readonly Any: "any";
};
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare type QuestionnaireEnableBehaviorCodeType = typeof QuestionnaireEnableBehaviorCodes[keyof typeof QuestionnaireEnableBehaviorCodes];
//# sourceMappingURL=QuestionnaireEnableBehaviorCodes.d.ts.map