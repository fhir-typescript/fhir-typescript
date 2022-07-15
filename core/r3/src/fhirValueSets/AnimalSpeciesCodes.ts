// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/animal-species|3.0.2

/**
 * This example value set defines a set of codes that can be used to indicate species of animal patients.
 */
export const AnimalSpeciesCodes = {
  /**
   * Code: 125097000
   */
  Goat: "125097000",
  /**
   * Code: 125099002
   */
  Sheep: "125099002",
  /**
   * Code: 132950000
   */
  Mule: "132950000",
  /**
   * Code: 15778005
   */
  Goose: "15778005",
  /**
   * Code: 34618005
   */
  Cow: "34618005",
  /**
   * Code: 388445009
   */
  Horse: "388445009",
  /**
   * Code: 396620009
   */
  Duck: "396620009",
  /**
   * Code: 425134008
   */
  Turkey: "425134008",
  /**
   * Code: 47290002
   */
  Chicken: "47290002",
  /**
   * Code: 85626006
   */
  Donkey: "85626006",
} as const;

/**
 * This example value set defines a set of codes that can be used to indicate species of animal patients.
 */
export type AnimalSpeciesCodeType = typeof AnimalSpeciesCodes[keyof typeof AnimalSpeciesCodes];
