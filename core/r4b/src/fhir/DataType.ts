// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: DataType

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the DataType type.
 */
export interface DataTypeArgs extends fhir.FhirElementArgs {
}

/**
 * The base class for all re-useable types defined as part of the FHIR Specification.
 */
export class DataType extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DataType';
  /**
   * Default constructor for DataType - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DataTypeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DataType' }
    return iss;
  }
}
