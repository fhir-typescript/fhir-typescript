// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: SimpleQuantity

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SimpleQuantity type.
 */
export interface SimpleQuantityArgs extends fhir.QuantityArgs {
}

/**
 * The comparator is not used on a SimpleQuantity
 */
export class SimpleQuantity extends fhir.Quantity {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SimpleQuantity';
  /**
   * Default constructor for SimpleQuantity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SimpleQuantityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SimpleQuantity' }
    return iss;
  }
}
