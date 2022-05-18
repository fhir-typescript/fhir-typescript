import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Ratio type.
 */
export interface RatioArgs extends fhir.FhirElementArgs {
    /**
     * The value of the numerator.
     */
    numerator?: fhir.QuantityArgs | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.QuantityArgs | undefined;
}
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export declare class Ratio extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The value of the numerator.
     */
    numerator?: fhir.Quantity | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.Quantity | undefined;
    /**
     * Default constructor for Ratio - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RatioArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Ratio.d.ts.map