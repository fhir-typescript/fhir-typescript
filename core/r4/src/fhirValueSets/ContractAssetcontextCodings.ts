// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-assetcontext|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set contract specific codes for asset context.
 */
export type ContractAssetcontextCodingType = {
  /**
   * custodian: To be completed
   */
  Custodian: CodingArgs;
}

/**
 * This value set contract specific codes for asset context.
 */
export const ContractAssetcontextCodings:ContractAssetcontextCodingType = {
  /**
   * custodian: To be completed
   */
  Custodian: {
    display: "Custodian",
    code: "custodian",
    system: "http://hl7.org/fhir/contract-asset-context",
  },
} as const;
