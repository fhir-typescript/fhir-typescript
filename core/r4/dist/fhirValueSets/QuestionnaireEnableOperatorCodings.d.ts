import { Coding } from '../fhir/Coding.js';
/**
 * The criteria by which a question is enabled.
 */
export declare const QuestionnaireEnableOperatorCodings: {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    readonly NotEquals: Coding;
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    readonly LessThan: Coding;
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    readonly LessOrEquals: Coding;
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    readonly Equals: Coding;
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    readonly GreaterThan: Coding;
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    readonly GreaterOrEquals: Coding;
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    readonly Exists: Coding;
};
/**
 * The criteria by which a question is enabled.
 */
export declare type QuestionnaireEnableOperatorCodingType = typeof QuestionnaireEnableOperatorCodings;
//# sourceMappingURL=QuestionnaireEnableOperatorCodings.d.ts.map