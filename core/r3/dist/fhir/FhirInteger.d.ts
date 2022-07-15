import * as fhir from '../fhir.js';
/**
 * 32 bit number; for values larger than this, use decimal
 */
export interface FhirIntegerArgs extends fhir.FhirPrimitiveArgs {
    /**
     * 32 bit number; for values larger than this, use decimal
     */
    value?: FhirInteger | number | undefined | null;
}
/**
 * 32 bit number; for values larger than this, use decimal
 */
export declare class FhirInteger extends fhir.FhirPrimitive {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mapping of this datatype to a JSON equivalent
     */
    static readonly _fts_jsonType: string;
    static readonly _fts_regex: RegExp;
    /**
     * A integer value, represented as a JS number
     */
    value?: number | null | undefined;
    /**
       * Create a FhirInteger
       * @param value 32 bit number; for values larger than this, use decimal
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirIntegerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix?: number): string;
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits?: number): string;
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits?: number): string;
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision?: number): string;
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf(): number;
}
//# sourceMappingURL=FhirInteger.d.ts.map