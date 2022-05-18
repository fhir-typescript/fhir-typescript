import { Coding } from '../fhir/Coding.js';
/**
 * The type of operator to use for assertion.
 */
export declare const AssertOperatorCodesCodings: {
    /**
     * contains: Compare value string contains a known value.
     */
    readonly Contains: Coding;
    /**
     * empty: Compare value is empty.
     */
    readonly Empty: Coding;
    /**
     * equals: Default value. Equals comparison.
     */
    readonly Equals: Coding;
    /**
     * eval: Evaluate the FHIRPath expression as a boolean condition.
     */
    readonly Evaluate: Coding;
    /**
     * greaterThan: Compare value to be greater than a known value.
     */
    readonly GreaterThan: Coding;
    /**
     * in: Compare value within a known set of values.
     */
    readonly In: Coding;
    /**
     * lessThan: Compare value to be less than a known value.
     */
    readonly LessThan: Coding;
    /**
     * notContains: Compare value string does not contain a known value.
     */
    readonly NotContains: Coding;
    /**
     * notEmpty: Compare value is not empty.
     */
    readonly NotEmpty: Coding;
    /**
     * notEquals: Not equals comparison.
     */
    readonly NotEquals: Coding;
    /**
     * notIn: Compare value not within a known set of values.
     */
    readonly NotIn: Coding;
};
/**
 * The type of operator to use for assertion.
 */
export declare type AssertOperatorCodesCodingType = typeof AssertOperatorCodesCodings;
//# sourceMappingURL=AssertOperatorCodesCodings.d.ts.map