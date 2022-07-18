// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-need|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The frequency with which the target must be validated
 */
export type VerificationresultNeedCodingType = {
  /**
   * Code: initial
   */
  Initial: CodingArgs;
  /**
   * Code: none
   */
  None: CodingArgs;
  /**
   * Code: periodic
   */
  Periodic: CodingArgs;
}

/**
 * The frequency with which the target must be validated
 */
export const VerificationresultNeedCodings:VerificationresultNeedCodingType = {
  /**
   * Code: initial
   */
  Initial: {
    display: "Initial",
    code: "initial",
    system: "http://terminology.hl7.org/CodeSystem/need",
  },
  /**
   * Code: none
   */
  None: {
    display: "None",
    code: "none",
    system: "http://terminology.hl7.org/CodeSystem/need",
  },
  /**
   * Code: periodic
   */
  Periodic: {
    display: "Periodic",
    code: "periodic",
    system: "http://terminology.hl7.org/CodeSystem/need",
  },
} as const;