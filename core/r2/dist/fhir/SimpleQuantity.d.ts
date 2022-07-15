import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SimpleQuantity type.
 */
export interface SimpleQuantityArgs extends fhir.QuantityArgs {
}
/**
 * The comparator is not used on a SimpleQuantity
 */
export declare class SimpleQuantity extends fhir.Quantity {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for SimpleQuantity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SimpleQuantityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SimpleQuantity.d.ts.map