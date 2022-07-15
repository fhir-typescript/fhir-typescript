// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/binding-strength|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export type BindingStrengthCodingType = {
  /**
   * example: Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.
   */
  Example: CodingArgs;
  /**
   * extensible: To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
   */
  Extensible: CodingArgs;
  /**
   * preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
   */
  Preferred: CodingArgs;
  /**
   * required: To be conformant, the concept in this element SHALL be from the specified value set.
   */
  Required: CodingArgs;
}

/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export const BindingStrengthCodings:BindingStrengthCodingType = {
  /**
   * example: Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.
   */
  Example: {
    display: "Example",
    code: "example",
    system: "http://hl7.org/fhir/binding-strength",
  },
  /**
   * extensible: To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
   */
  Extensible: {
    display: "Extensible",
    code: "extensible",
    system: "http://hl7.org/fhir/binding-strength",
  },
  /**
   * preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
   */
  Preferred: {
    display: "Preferred",
    code: "preferred",
    system: "http://hl7.org/fhir/binding-strength",
  },
  /**
   * required: To be conformant, the concept in this element SHALL be from the specified value set.
   */
  Required: {
    display: "Required",
    code: "required",
    system: "http://hl7.org/fhir/binding-strength",
  },
} as const;
