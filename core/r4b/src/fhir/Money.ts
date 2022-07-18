// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Money

import * as fhir from '../fhir.js';

// @ts-ignore
import { CurrenciesCodes,  CurrenciesCodeType } from '../fhirValueSets/CurrenciesCodes.js';
// @ts-ignore
import { CurrenciesVsValidation } from '../fhirValueSets/CurrenciesVsValidation.js';
/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.FhirElementArgs {
  /**
   * Monetary values have their own rules for handling precision (refer to standard accounting text books).
   */
  value?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Money.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * ISO 4217 Currency Code.
   */
  currency?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Money.currency
   */
  _currency?:fhir.FhirElementArgs;
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
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirDecimal(source._value as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['currency']) { this.currency = new fhir.FhirCode({value: source.currency}); }
    if (source['_currency']) {
      if (this.currency) { this.currency.addExtendedProperties(source._currency!); }
      else { this.currency = new fhir.FhirCode(source._currency as Partial<fhir.FhirCodeArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Money' }
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOSV('currency',exp,'Currencies',CurrenciesVsValidation,'r'));
    return iss;
  }
}