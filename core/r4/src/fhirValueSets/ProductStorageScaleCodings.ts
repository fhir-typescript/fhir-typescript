// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/product-storage-scale|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * BiologicallyDerived Product Storage Scale.
 */
export type ProductStorageScaleCodingType = {
  /**
   * celsius: Celsius or centigrade temperature scale.
   */
  Celsius: CodingArgs;
  /**
   * farenheit: Fahrenheit temperature scale.
   */
  Fahrenheit: CodingArgs;
  /**
   * kelvin: Kelvin absolute thermodynamic temperature scale.
   */
  Kelvin: CodingArgs;
}

/**
 * BiologicallyDerived Product Storage Scale.
 */
export const ProductStorageScaleCodings:ProductStorageScaleCodingType = {
  /**
   * celsius: Celsius or centigrade temperature scale.
   */
  Celsius: {
    display: "Celsius",
    code: "celsius",
    system: "http://hl7.org/fhir/product-storage-scale",
  },
  /**
   * farenheit: Fahrenheit temperature scale.
   */
  Fahrenheit: {
    display: "Fahrenheit",
    code: "farenheit",
    system: "http://hl7.org/fhir/product-storage-scale",
  },
  /**
   * kelvin: Kelvin absolute thermodynamic temperature scale.
   */
  Kelvin: {
    display: "Kelvin",
    code: "kelvin",
    system: "http://hl7.org/fhir/product-storage-scale",
  },
} as const;
