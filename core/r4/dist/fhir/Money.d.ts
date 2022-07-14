import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.FhirElementArgs {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Money.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Money.currency
     */
    _currency?: fhir.FhirElementArgs;
}
/**
 * An amount of economic utility in some recognized currency.
 */
export declare class Money extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | undefined;
    /**
     * Default constructor for Money - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MoneyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Money.d.ts.map