// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/variable-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export const VariableTypeCodings = {
  /**
   * continuous: The variable is a continuous result such as a quantity.
   */
  Continuous: new Coding({
    display: "Continuous",
    code: "continuous",
    system: "http://hl7.org/fhir/variable-type",
  }),
  /**
   * descriptive: The variable is described narratively rather than quantitatively.
   */
  Descriptive: new Coding({
    display: "Descriptive",
    code: "descriptive",
    system: "http://hl7.org/fhir/variable-type",
  }),
  /**
   * dichotomous: The variable is dichotomous, such as present or absent.
   */
  Dichotomous: new Coding({
    display: "Dichotomous",
    code: "dichotomous",
    system: "http://hl7.org/fhir/variable-type",
  }),
} as const;

/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export type VariableTypeCodingType = typeof VariableTypeCodings;
