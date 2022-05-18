import { Coding } from '../fhir/Coding.js';
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare const QuestionnaireEnableBehaviorCodings: {
    /**
     * all: Enable the question when all the enableWhen criteria are satisfied.
     */
    readonly All: Coding;
    /**
     * any: Enable the question when any of the enableWhen criteria are satisfied.
     */
    readonly Any: Coding;
};
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare type QuestionnaireEnableBehaviorCodingType = typeof QuestionnaireEnableBehaviorCodings;
//# sourceMappingURL=QuestionnaireEnableBehaviorCodings.d.ts.map