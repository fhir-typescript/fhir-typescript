// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Duration

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Duration type.
 */
export interface DurationArgs extends fhir.QuantityArgs {
}

/**
 * A length of time.
 */
export class Duration extends fhir.Quantity {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Duration';
  /**
   * Default constructor for Duration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DurationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    return issues;
  }
}
