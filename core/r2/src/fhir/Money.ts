// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Money

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Money type.
 */
export interface MoneyArgs extends fhir.QuantityArgs {
}

/**
 * There SHALL be a code if there is a value and it SHALL be an expression of currency.  If system is present, it SHALL be ISO 4217 (system = "urn:iso:std:iso:4217" - currency).
 */
export class Money extends fhir.Quantity {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Money';
  /**
   * Default constructor for Money - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MoneyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Money' }
    return iss;
  }
}