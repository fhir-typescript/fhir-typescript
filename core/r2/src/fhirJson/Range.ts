// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Range

import * as fhir from '../fhirJson.js';


/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface Range extends fhir.FhirElement { 
  /**
   * The low limit. The boundary is inclusive.
   */
  low?: fhir.Quantity|undefined;
  /**
   * The high limit. The boundary is inclusive.
   */
  high?: fhir.Quantity|undefined;
}
