// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Quantity

import * as fhir from '../fhirJson.js';


/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export interface Quantity extends fhir.FhirElement { 
  /**
   * Precision is handled implicitly in almost all cases of measurement.
   */
  value?: number|undefined;
  /**
   * Extended properties for primitive element: Quantity.value
   */
  _value?:fhir.FhirElement;
  /**
   * Need a framework for handling measures where the value is &lt;5ug/L or &gt;400mg/L due to the limitations of measuring methodology.
   */
  comparator?: '<'|'<='|'>'|'>='|undefined;
  /**
   * Extended properties for primitive element: Quantity.comparator
   */
  _comparator?:fhir.FhirElement;
  /**
   * There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.
   */
  unit?: string|undefined;
  /**
   * Extended properties for primitive element: Quantity.unit
   */
  _unit?:fhir.FhirElement;
  /**
   * Need to know the system that defines the coded form of the unit.
   */
  system?: string|undefined;
  /**
   * Extended properties for primitive element: Quantity.system
   */
  _system?:fhir.FhirElement;
  /**
   * Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.
   */
  code?: string|undefined;
  /**
   * Extended properties for primitive element: Quantity.code
   */
  _code?:fhir.FhirElement;
}
