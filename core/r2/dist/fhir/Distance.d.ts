import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Distance type.
 */
export interface DistanceArgs extends fhir.QuantityArgs {
}
/**
 * There SHALL be a code if there is a value and it SHALL be an expression of length.  If system is present, it SHALL be UCUM.
 */
export declare class Distance extends fhir.Quantity {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for Distance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DistanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Distance.d.ts.map