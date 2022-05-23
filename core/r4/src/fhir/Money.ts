// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Money

import * as fhir from '../fhir.js';

// @ts-ignore
import { CurrenciesCodings, CurrenciesCodingType,} from '../fhirValueSets/CurrenciesCodings.js';
// @ts-ignore
import { CurrenciesCodes,  CurrenciesCodeType } from '../fhirValueSets/CurrenciesCodes.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.FhirElementArgs {
  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: fhir.FhirDecimal|number|undefined;
  /**
   * ISO 4217 Currency Code.
   */
  currency?: fhir.FhirCode|string|undefined;
}

/**
 * An amount of economic utility in some recognized currency.
 */
export class Money extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Money';
  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  public value?: fhir.FhirDecimal|undefined;
  /**
   * ISO 4217 Currency Code.
   */
  public currency?: fhir.FhirCode|undefined;
  /**
   * Default constructor for Money - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MoneyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['value']) { this.value = new fhir.FhirDecimal({value: source.value}); }
    if (source['currency']) { this.currency = new fhir.FhirCode({value: source.currency}); }
  }
  /**
   * Required-bound Value Set for currency (Money.currency)
   */
  public static get currencyRequiredCodes() {
    return CurrenciesCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["value"]) { issues.push(...this.value.doModelValidation()); }
    if (this['currency'] && (!Object.values(CurrenciesCodes).includes(this.currency as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property currency?:fhir.FhirCode fhir: Money.currency:code Required binding to: Currencies' });
    }
    if (this["currency"]) { issues.push(...this.currency.doModelValidation()); }
    return issues;
  }
}
