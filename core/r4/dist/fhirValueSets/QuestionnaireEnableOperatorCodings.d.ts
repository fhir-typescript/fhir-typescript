import { CodingArgs } from '../fhir/Coding.js';
/**
 * The criteria by which a question is enabled.
 */
export declare type QuestionnaireEnableOperatorCodingType = {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    NotEquals: CodingArgs;
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    LessThan: CodingArgs;
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    LessOrEquals: CodingArgs;
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    Equals: CodingArgs;
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    GreaterThan: CodingArgs;
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    GreaterOrEquals: CodingArgs;
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    Exists: CodingArgs;
};
/**
 * The criteria by which a question is enabled.
 */
export declare const QuestionnaireEnableOperatorCodings: QuestionnaireEnableOperatorCodingType;
//# sourceMappingURL=QuestionnaireEnableOperatorCodings.d.ts.map