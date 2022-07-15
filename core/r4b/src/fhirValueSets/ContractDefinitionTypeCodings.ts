// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-definition-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set contract specific codes for status.
 */
export type ContractDefinitionTypeCodingType = {
  /**
   * temp: To be completed
   */
  TemporaryValue: CodingArgs;
}

/**
 * This value set contract specific codes for status.
 */
export const ContractDefinitionTypeCodings:ContractDefinitionTypeCodingType = {
  /**
   * temp: To be completed
   */
  TemporaryValue: {
    display: "Temporary Value",
    code: "temp",
    system: "http://hl7.org/fhir/contract-definition-type",
  },
} as const;
