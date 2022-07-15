import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.QuantityArgs {
}
/**
 * There SHALL be a code if there is a value and it SHALL be an expression of currency.  If system is present, it SHALL be ISO 4217 (system = "urn:iso:std:iso:4217" - currency).
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