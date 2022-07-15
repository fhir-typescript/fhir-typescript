// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/forms|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a sample set of Forms codes.
 */
export type FormsCodingType = {
  /**
   * 1: Example: The #1 form to be used when printing this information.
   */
  FormNumber1: CodingArgs;
  /**
   * 2: Example: The #2 form to be used when printing this information.
   */
  FormNumber1_2: CodingArgs;
}

/**
 * This value set includes a sample set of Forms codes.
 */
export const FormsCodings:FormsCodingType = {
  /**
   * 1: Example: The #1 form to be used when printing this information.
   */
  FormNumber1: {
    display: "Form #1",
    code: "1",
    system: "http://terminology.hl7.org/CodeSystem/forms-codes",
  },
  /**
   * 2: Example: The #2 form to be used when printing this information.
   */
  FormNumber1_2: {
    display: "Form #1",
    code: "2",
    system: "http://terminology.hl7.org/CodeSystem/forms-codes",
  },
} as const;
