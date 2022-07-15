import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.QuantityArgs {
}
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhir.Quantity {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MoneyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Money.d.ts.map