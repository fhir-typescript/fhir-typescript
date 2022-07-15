import { CodingArgs } from '../fhir/Coding.js';
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare type SpecialValuesCodingType = {
    /**
     * false: Boolean false.
     */
    False: CodingArgs;
    /**
     * nil-known: The are no known applicable values in this context.
     */
    NilKnown: CodingArgs;
    /**
     * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
     */
    SufficientQuantity: CodingArgs;
    /**
     * trace: The content is greater than zero, but too small to be quantified.
     */
    TraceAmountDetected: CodingArgs;
    /**
     * true: Boolean true.
     */
    True: CodingArgs;
    /**
     * withdrawn: The value is no longer available.
     */
    ValueWithdrawn: CodingArgs;
};
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export declare const SpecialValuesCodings: SpecialValuesCodingType;
//# sourceMappingURL=SpecialValuesCodings.d.ts.map