// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/entformula-additive|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export type EntformulaAdditiveCodingType = {
  /**
   * carbohydrate: Modular carbohydrate enteral formula component
   */
  Carbohydrate: CodingArgs;
  /**
   * fiber: Modular fiber enteral formula component
   */
  Fiber: CodingArgs;
  /**
   * lipid: Modular lipid enteral formula component
   */
  Lipid: CodingArgs;
  /**
   * protein: Modular protein enteral formula component
   */
  Protein: CodingArgs;
  /**
   * water: Added water
   */
  Water: CodingArgs;
}

/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export const EntformulaAdditiveCodings:EntformulaAdditiveCodingType = {
  /**
   * carbohydrate: Modular carbohydrate enteral formula component
   */
  Carbohydrate: {
    display: "Carbohydrate",
    code: "carbohydrate",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
  },
  /**
   * fiber: Modular fiber enteral formula component
   */
  Fiber: {
    display: "Fiber",
    code: "fiber",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
  },
  /**
   * lipid: Modular lipid enteral formula component
   */
  Lipid: {
    display: "Lipid",
    code: "lipid",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
  },
  /**
   * protein: Modular protein enteral formula component
   */
  Protein: {
    display: "Protein",
    code: "protein",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
  },
  /**
   * water: Added water
   */
  Water: {
    display: "Water",
    code: "water",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
  },
} as const;
