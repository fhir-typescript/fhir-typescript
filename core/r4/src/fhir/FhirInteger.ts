// Minimum TypeScript Version: 3.7
// FHIR Primitive: integer

import * as fhir from '../fhir.js';

import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';

/**
 * 32 bit number; for values larger than this, use decimal
 */
export interface FhirIntegerArgs extends fhir.FhirPrimitiveArgs {
  /**
   * 32 bit number; for values larger than this, use decimal
   */
  value?:FhirInteger|number|undefined;
}

/**
 * 32 bit number; for values larger than this, use decimal
 */
export class FhirInteger extends fhir.FhirPrimitive {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'Integer';
  /**
   * Mapping of this datatype to a JSON equivalent
   */
  public static readonly _fts_jsonType:string = 'number';
  // published regex: -?([0]|([1-9][0-9]*))
  public static readonly _fts_regex:RegExp = /^-?([0]|([1-9][0-9]*))$/
  /**
   * A integer value, represented as a JS number
   */
  declare value?:number|null|undefined;
  /**
     * Create a FhirInteger
     * @param value 32 bit number; for values larger than this, use decimal
     * @param id Unique id for inter-element referencing (uncommon on primitives)
     * @param extension Additional content defined by implementations
     * @param options Options to pass to extension constructors
  */
  constructor(source:Partial<FhirIntegerArgs> = {}, options:fhir.FhirConstructorOptions = { } ) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if ((this.value) && (!FhirInteger._fts_regex.test(this.value.toString()))) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.InvalidContent,  diagnostics: "Invalid value in primitive type integer", }));
    }
    return outcome;
  }
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  public toString(radix?:number):string { return (this.value ?? NaN).toString(radix); }
  /**
   * Returns a string representing a number in fixed-point notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  public toFixed(fractionDigits?:number):string { return (this.value ?? NaN).toFixed(fractionDigits); }
  /**
   * Returns a string containing a number represented in exponential notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  public toExponential(fractionDigits?:number):string { return (this.value ?? NaN).toExponential(fractionDigits); }
  /**
   * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
   */
  public toPrecision(precision?:number):string { return (this.value ?? NaN).toPrecision(precision); }
  /**
   * Returns the primitive value of the specified object.
   */
  public valueOf():number { return (this.value ?? NaN); }
}
