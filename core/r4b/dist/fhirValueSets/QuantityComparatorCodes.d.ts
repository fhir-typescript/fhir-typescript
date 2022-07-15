/**
 * How the Quantity should be understood and represented.
 */
export declare const QuantityComparatorCodes: {
    /**
     * &lt;: The actual value is less than the given value.
     */
    readonly LessThan: "<";
    /**
     * &lt;=: The actual value is less than or equal to the given value.
     */
    readonly LessOrEqualTo: "<=";
    /**
     * &gt;: The actual value is greater than the given value.
     */
    readonly GreaterThan: ">";
    /**
     * &gt;=: The actual value is greater than or equal to the given value.
     */
    readonly GreaterOrEqualTo: ">=";
};
/**
 * How the Quantity should be understood and represented.
 */
export declare type QuantityComparatorCodeType = typeof QuantityComparatorCodes[keyof typeof QuantityComparatorCodes];
//# sourceMappingURL=QuantityComparatorCodes.d.ts.map