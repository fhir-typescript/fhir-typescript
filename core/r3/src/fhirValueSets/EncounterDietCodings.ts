// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-diet|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export type EncounterDietCodingType = {
  /**
   * dairy-free: Excludes dairy products.
   */
  DairyFree: CodingArgs;
  /**
   * gluten-free: Excludes ingredients containing gluten.
   */
  GlutenFree: CodingArgs;
  /**
   * halal: Foods that conform to Islamic law.
   */
  Halal: CodingArgs;
  /**
   * kosher: Foods that conform to Jewish dietary law.
   */
  Kosher: CodingArgs;
  /**
   * nut-free: Excludes ingredients containing nuts.
   */
  NutFree: CodingArgs;
  /**
   * vegan: Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
   */
  Vegan: CodingArgs;
  /**
   * vegetarian: Food without meat, poultry or seafood.
   */
  Vegetarian: CodingArgs;
}

/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export const EncounterDietCodings:EncounterDietCodingType = {
  /**
   * dairy-free: Excludes dairy products.
   */
  DairyFree: {
    display: "Dairy Free",
    code: "dairy-free",
    system: "http://hl7.org/fhir/diet",
  },
  /**
   * gluten-free: Excludes ingredients containing gluten.
   */
  GlutenFree: {
    display: "Gluten Free",
    code: "gluten-free",
    system: "http://hl7.org/fhir/diet",
  },
  /**
   * halal: Foods that conform to Islamic law.
   */
  Halal: {
    display: "Halal",
    code: "halal",
    system: "http://hl7.org/fhir/diet",
  },
  /**
   * kosher: Foods that conform to Jewish dietary law.
   */
  Kosher: {
    display: "Kosher",
    code: "kosher",
    system: "http://hl7.org/fhir/diet",
  },
  /**
   * nut-free: Excludes ingredients containing nuts.
   */
  NutFree: {
    display: "Nut Free",
    code: "nut-free",
    system: "http://hl7.org/fhir/diet",
  },
  /**
   * vegan: Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
   */
  Vegan: {
    display: "Vegan",
    code: "vegan",
    system: "http://hl7.org/fhir/diet",
  },
  /**
   * vegetarian: Food without meat, poultry or seafood.
   */
  Vegetarian: {
    display: "Vegetarian",
    code: "vegetarian",
    system: "http://hl7.org/fhir/diet",
  },
} as const;
