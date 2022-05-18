/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare const SpecialValuesCodes: {
    /**
     * false: Boolean false.
     */
    readonly False: "false";
    /**
     * nil-known: The are no known applicable values in this context.
     */
    readonly NilKnown: "nil-known";
    /**
     * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
     */
    readonly SufficientQuantity: "sufficient";
    /**
     * trace: The content is greater than zero, but too small to be quantified.
     */
    readonly TraceAmountDetected: "trace";
    /**
     * true: Boolean true.
     */
    readonly True: "true";
    /**
     * withdrawn: The value is no longer available.
     */
    readonly ValueWithdrawn: "withdrawn";
};
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare type SpecialValuesCodeType = typeof SpecialValuesCodes[keyof typeof SpecialValuesCodes];
//# sourceMappingURL=SpecialValuesCodes.d.ts.map