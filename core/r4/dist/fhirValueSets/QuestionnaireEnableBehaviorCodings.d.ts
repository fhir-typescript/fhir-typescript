import { CodingArgs } from '../fhir/Coding.js';
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare type QuestionnaireEnableBehaviorCodingType = {
    /**
     * all: Enable the question when all the enableWhen criteria are satisfied.
     */
    All: CodingArgs;
    /**
     * any: Enable the question when any of the enableWhen criteria are satisfied.
     */
    Any: CodingArgs;
};
/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 */
export declare const QuestionnaireEnableBehaviorCodings: QuestionnaireEnableBehaviorCodingType;
//# sourceMappingURL=QuestionnaireEnableBehaviorCodings.d.ts.map