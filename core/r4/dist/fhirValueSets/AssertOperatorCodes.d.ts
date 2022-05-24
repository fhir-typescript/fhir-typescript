/**
 * The type of operator to use for assertion.
 */
export declare const AssertOperatorCodes: {
    /**
     * contains: Compare value string contains a known value.
     */
    readonly Contains: "contains";
    /**
     * empty: Compare value is empty.
     */
    readonly Empty: "empty";
    /**
     * equals: Default value. Equals comparison.
     */
    readonly Equals: "equals";
    /**
     * eval: Evaluate the FHIRPath expression as a boolean condition.
     */
    readonly Evaluate: "eval";
    /**
     * greaterThan: Compare value to be greater than a known value.
     */
    readonly GreaterThan: "greaterThan";
    /**
     * in: Compare value within a known set of values.
     */
    readonly In: "in";
    /**
     * lessThan: Compare value to be less than a known value.
     */
    readonly LessThan: "lessThan";
    /**
     * notContains: Compare value string does not contain a known value.
     */
    readonly NotContains: "notContains";
    /**
     * notEmpty: Compare value is not empty.
     */
    readonly NotEmpty: "notEmpty";
    /**
     * notEquals: Not equals comparison.
     */
    readonly NotEquals: "notEquals";
    /**
     * notIn: Compare value not within a known set of values.
     */
    readonly NotIn: "notIn";
};
/**
 * The type of operator to use for assertion.
 */
export declare type AssertOperatorCodeType = typeof AssertOperatorCodes[keyof typeof AssertOperatorCodes];
//# sourceMappingURL=AssertOperatorCodes.d.ts.map