/**
 * The criteria by which a question is enabled.
 */
export declare const QuestionnaireEnableOperatorCodes: {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    readonly NotEquals: "!=";
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    readonly LessThan: "<";
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    readonly LessOrEquals: "<=";
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    readonly Equals: "=";
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    readonly GreaterThan: ">";
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    readonly GreaterOrEquals: ">=";
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    readonly Exists: "exists";
};
/**
 * The criteria by which a question is enabled.
 */
export declare type QuestionnaireEnableOperatorCodeType = typeof QuestionnaireEnableOperatorCodes[keyof typeof QuestionnaireEnableOperatorCodes];
//# sourceMappingURL=QuestionnaireEnableOperatorCodes.d.ts.map