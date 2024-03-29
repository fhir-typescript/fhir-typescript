// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-element-type|4.3.0

/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export const ResearchElementTypeCodes = {
  /**
   * exposure: The element defines an exposure within the population that is being researched.
   */
  Exposure: "exposure",
  /**
   * outcome: The element defines an outcome within the population that is being researched.
   */
  Outcome: "outcome",
  /**
   * population: The element defines the population that forms the basis for research.
   */
  Population: "population",
} as const;

/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export type ResearchElementTypeCodeType = typeof ResearchElementTypeCodes[keyof typeof ResearchElementTypeCodes];
