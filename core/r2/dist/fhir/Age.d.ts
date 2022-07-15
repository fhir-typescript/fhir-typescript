import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Age type.
 */
export interface AgeArgs extends fhir.QuantityArgs {
}
/**
 * There SHALL be a code if there is a value and it SHALL be an expression of time.  If system is present, it SHALL be UCUM.  If value is present, it SHALL be positive.
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Age.d.ts.map