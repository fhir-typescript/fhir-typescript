import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Distance type.
 */
export interface DistanceArgs extends fhir.QuantityArgs {
}
/**
 * A length - a value with a unit that is a physical distance.
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
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Distance.d.ts.map