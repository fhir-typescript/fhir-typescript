import * as fhir from '../fhir.js';
/**
 * Valid arguments for the RatioRange type.
 */
export interface RatioRangeArgs extends fhir.FhirElementArgs {
    /**
     * If the low element is missing, the low boundary is not known.
     */
    lowNumerator?: fhir.QuantityArgs | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    highNumerator?: fhir.QuantityArgs | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.QuantityArgs | undefined;
}
/**
 * A range of ratios expressed as a low and high numerator and a denominator.
 */
export declare class RatioRange extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    lowNumerator?: fhir.Quantity | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    highNumerator?: fhir.Quantity | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.Quantity | undefined;
    /**
     * Default constructor for RatioRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RatioRangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=RatioRange.d.ts.map