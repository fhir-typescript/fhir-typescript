// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-action|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Contract Action codes.
 */
export type ContractActionCodingType = {
  /**
   * action-a: Definition for Action A
   */
  ActionA: CodingArgs;
  /**
   * action-b: Definition for Action B
   */
  ActionB: CodingArgs;
}

/**
 * This value set includes sample Contract Action codes.
 */
export const ContractActionCodings:ContractActionCodingType = {
  /**
   * action-a: Definition for Action A
   */
  ActionA: {
    display: "Action A",
    code: "action-a",
    system: "http://www.hl7.org/fhir/contractaction",
  },
  /**
   * action-b: Definition for Action B
   */
  ActionB: {
    display: "Action B",
    code: "action-b",
    system: "http://www.hl7.org/fhir/contractaction",
  },
} as const;