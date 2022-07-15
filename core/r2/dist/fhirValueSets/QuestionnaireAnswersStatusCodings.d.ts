import { CodingArgs } from '../fhir/Coding.js';
/**
 * Lifecycle status of the questionnaire response.
 */
export declare type QuestionnaireAnswersStatusCodingType = {
    /**
     * amended: This QuestionnaireResponse has been filled out with answers, then marked as complete, yet changes or additions have been made to it afterwards.
     */
    Amended: CodingArgs;
    /**
     * completed: This QuestionnaireResponse has been filled out with answers, and the current content is regarded as definitive.
     */
    Completed: CodingArgs;
    /**
     * in-progress: This QuestionnaireResponse has been partially filled out with answers, but changes or additions are still expected to be made to it.
     */
    InProgress: CodingArgs;
};
/**
 * Lifecycle status of the questionnaire response.
 */
export declare const QuestionnaireAnswersStatusCodings: QuestionnaireAnswersStatusCodingType;
//# sourceMappingURL=QuestionnaireAnswersStatusCodings.d.ts.map