import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Range type.
 */
export interface RangeArgs extends fhir.FhirElementArgs {
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.QuantityArgs | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.QuantityArgs | undefined;
}
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare class Range extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.Quantity | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.Quantity | undefined;
    /**
     * Default constructor for Range - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Range.d.ts.map