import { CodingArgs } from '../fhir/Coding.js';
/**
 * Lifecycle status of the questionnaire.
 */
export declare type QuestionnaireStatusCodingType = {
    /**
     * draft: This Questionnaire is not ready for official use.
     */
    Draft: CodingArgs;
    /**
     * published: This Questionnaire is ready for use.
     */
    Published: CodingArgs;
    /**
     * retired: This Questionnaire should no longer be used to gather data.
     */
    Retired: CodingArgs;
};
/**
 * Lifecycle status of the questionnaire.
 */
export declare const QuestionnaireStatusCodings: QuestionnaireStatusCodingType;
//# sourceMappingURL=QuestionnaireStatusCodings.d.ts.map