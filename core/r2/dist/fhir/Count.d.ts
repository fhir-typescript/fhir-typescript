import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Count type.
 */
export interface CountArgs extends fhir.QuantityArgs {
}
/**
 * There SHALL be a code with a value of "1" if there is a value and it SHALL be an expression of length.  If system is present, it SHALL be UCUM.  If present, the value SHALL a whole number.
 */
export declare class Count extends fhir.Quantity {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for Count - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CountArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Count.d.ts.map