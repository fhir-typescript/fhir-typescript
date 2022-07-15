import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of operator to use for assertion.
 */
export declare type AssertOperatorCodingType = {
    /**
     * contains: Compare value string contains a known value.
     */
    Contains: CodingArgs;
    /**
     * empty: Compare value is empty.
     */
    Empty: CodingArgs;
    /**
     * equals: Default value. Equals comparison.
     */
    Equals: CodingArgs;
    /**
     * eval: Evaluate the fluentpath expression as a boolean condition.
     */
    Evaluate: CodingArgs;
    /**
     * greaterThan: Compare value to be greater than a known value.
     */
    GreaterThan: CodingArgs;
    /**
     * in: Compare value within a known set of values.
     */
    In: CodingArgs;
    /**
     * lessThan: Compare value to be less than a known value.
     */
    LessThan: CodingArgs;
    /**
     * notContains: Compare value string does not contain a known value.
     */
    NotContains: CodingArgs;
    /**
     * notEmpty: Compare value is not empty.
     */
    NotEmpty: CodingArgs;
    /**
     * notEquals: Not equals comparison.
     */
    NotEquals: CodingArgs;
    /**
     * notIn: Compare value not within a known set of values.
     */
    NotIn: CodingArgs;
};
/**
 * The type of operator to use for assertion.
 */
export declare const AssertOperatorCodings: AssertOperatorCodingType;
//# sourceMappingURL=AssertOperatorCodings.d.ts.map