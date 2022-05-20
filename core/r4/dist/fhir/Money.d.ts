import * as fhir from '../fhir.js';
import { CurrenciesCodingType } from '../fhirValueSets/CurrenciesCodings.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.FhirElementArgs {
    /**
     * Monetary values have their own rules for handling precision (refer to standard accounting text books).
     */
    value?: fhir.FhirDecimal | number | undefined;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: fhir.FhirCode | string | undefined;
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
     * Required-bound Value Set for currency (Money.currency)
     */
    static currencyRequiredCoding(): CurrenciesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Money.d.ts.map