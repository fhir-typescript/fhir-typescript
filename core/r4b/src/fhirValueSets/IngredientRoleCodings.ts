// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ingredient-role|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A classification of the ingredient identifying its purpose within the product.
 */
export type IngredientRoleCodingType = {
  /**
   * Code: 100000072072
   */
  Active: CodingArgs;
  /**
   * Code: 100000072073
   */
  Adjuvant: CodingArgs;
  /**
   * Code: 100000072082
   */
  Excipient: CodingArgs;
  /**
   * Code: 100000136065
   */
  StartingMaterialForExcipient: CodingArgs;
  /**
   * Code: 100000136066
   */
  SolventDiluent: CodingArgs;
  /**
   * Code: 100000136178
   */
  RawMaterialsUsedInTheManufactureOfTheProduct: CodingArgs;
  /**
   * Code: 100000136179
   */
  StartingMaterialForActiveSubstance: CodingArgs;
  /**
   * Code: 100000136561
   */
  Overage: CodingArgs;
  /**
   * Code: 200000003427
   */
  Bioenhancer: CodingArgs;
}

/**
 * A classification of the ingredient identifying its purpose within the product.
 */
export const IngredientRoleCodings:IngredientRoleCodingType = {
  /**
   * Code: 100000072072
   */
  Active: {
    display: "Active",
    code: "100000072072",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000072073
   */
  Adjuvant: {
    display: "Adjuvant",
    code: "100000072073",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000072082
   */
  Excipient: {
    display: "Excipient",
    code: "100000072082",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000136065
   */
  StartingMaterialForExcipient: {
    display: "Starting material for excipient",
    code: "100000136065",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000136066
   */
  SolventDiluent: {
    display: "Solvent / Diluent",
    code: "100000136066",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000136178
   */
  RawMaterialsUsedInTheManufactureOfTheProduct: {
    display: "Raw materials used in the manufacture of the product",
    code: "100000136178",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000136179
   */
  StartingMaterialForActiveSubstance: {
    display: "Starting material for active substance",
    code: "100000136179",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 100000136561
   */
  Overage: {
    display: "Overage",
    code: "100000136561",
    system: "http://hl7.org/fhir/ingredient-role",
  },
  /**
   * Code: 200000003427
   */
  Bioenhancer: {
    display: "bioenhancer",
    code: "200000003427",
    system: "http://hl7.org/fhir/ingredient-role",
  },
} as const;
