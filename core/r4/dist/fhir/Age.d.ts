import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Age type.
 */
export interface AgeArgs extends fhir.QuantityArgs {
}
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export declare class Age extends fhir.Quantity {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for Age - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AgeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Age.d.ts.map