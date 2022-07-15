// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ingredient-function|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A classification of the ingredient identifying its precise purpose(s) in the drug product (beyond e.g. active/inactive).
 */
export type IngredientFunctionCodingType = {
  /**
   * Code: AlkalizingAgent
   */
  AlkalizingAgent: CodingArgs;
  /**
   * Code: Antioxidant
   */
  Antioxidant: CodingArgs;
}

/**
 * A classification of the ingredient identifying its precise purpose(s) in the drug product (beyond e.g. active/inactive).
 */
export const IngredientFunctionCodings:IngredientFunctionCodingType = {
  /**
   * Code: AlkalizingAgent
   */
  AlkalizingAgent: {
    display: "Alkalizing Agent",
    code: "AlkalizingAgent",
    system: "http://hl7.org/fhir/ingredient-function",
  },
  /**
   * Code: Antioxidant
   */
  Antioxidant: {
    display: "Antioxidant",
    code: "Antioxidant",
    system: "http://hl7.org/fhir/ingredient-function",
  },
} as const;
