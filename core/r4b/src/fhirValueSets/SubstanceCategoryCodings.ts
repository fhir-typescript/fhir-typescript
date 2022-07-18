// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-category|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Substance category codes
 */
export type SubstanceCategoryCodingType = {
  /**
   * Code: allergen
   */
  Allergen: CodingArgs;
  /**
   * Code: biological
   */
  BiologicalSubstance: CodingArgs;
  /**
   * Code: body
   */
  BodySubstance: CodingArgs;
  /**
   * Code: chemical
   */
  Chemical: CodingArgs;
  /**
   * Code: drug
   */
  DrugOrMedicament: CodingArgs;
  /**
   * Code: food
   */
  DietarySubstance: CodingArgs;
  /**
   * Code: material
   */
  Material: CodingArgs;
}

/**
 * Substance category codes
 */
export const SubstanceCategoryCodings:SubstanceCategoryCodingType = {
  /**
   * Code: allergen
   */
  Allergen: {
    display: "Allergen",
    code: "allergen",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
  /**
   * Code: biological
   */
  BiologicalSubstance: {
    display: "Biological Substance",
    code: "biological",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
  /**
   * Code: body
   */
  BodySubstance: {
    display: "Body Substance",
    code: "body",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
  /**
   * Code: chemical
   */
  Chemical: {
    display: "Chemical",
    code: "chemical",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
  /**
   * Code: drug
   */
  DrugOrMedicament: {
    display: "Drug or Medicament",
    code: "drug",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
  /**
   * Code: food
   */
  DietarySubstance: {
    display: "Dietary Substance",
    code: "food",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
  /**
   * Code: material
   */
  Material: {
    display: "Material",
    code: "material",
    system: "http://terminology.hl7.org/CodeSystem/substance-category",
  },
} as const;