import { CodingArgs } from '../fhir/Coding.js';
/**
 * How the Quantity should be understood and represented.
 */
export declare type QuantityComparatorCodingType = {
    /**
     * &lt;: The actual value is less than the given value.
     */
    LessThan: CodingArgs;
    /**
     * &lt;=: The actual value is less than or equal to the given value.
     */
    LessOrEqualTo: CodingArgs;
    /**
     * &gt;: The actual value is greater than the given value.
     */
    GreaterThan: CodingArgs;
    /**
     * &gt;=: The actual value is greater than or equal to the given value.
     */
    GreaterOrEqualTo: CodingArgs;
};
/**
 * How the Quantity should be understood and represented.
 */
export declare const QuantityComparatorCodings: QuantityComparatorCodingType;
//# sourceMappingURL=QuantityComparatorCodings.d.ts.map