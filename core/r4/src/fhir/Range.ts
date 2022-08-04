// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Range

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the Range type.
 */
export interface RangeArgs extends fhir.FhirElementArgs {
  /**
   * If the low element is missing, the low boundary is not known.
   */
  low?: fhir.QuantityArgs|undefined;
  /**
   * If the high element is missing, the high boundary is not known.
   */
  high?: fhir.QuantityArgs|undefined;
}

/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export class Range extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Range';
  /**
   * If the low element is missing, the low boundary is not known.
   */
  public low?: fhir.Quantity|undefined;
  /**
   * If the high element is missing, the high boundary is not known.
   */
  public high?: fhir.Quantity|undefined;
  /**
   * Default constructor for Range - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RangeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['low']) { this.low = new fhir.Quantity(source.low, options); }
    if (source['high']) { this.high = new fhir.Quantity(source.high, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Range' }
    iss.push(...this.vOS('low',exp));
    iss.push(...this.vOS('high',exp));
    return iss;
  }
}
