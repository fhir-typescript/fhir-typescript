// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/rejection-criteria|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Criterion for rejection of the specimen by laboratory.
 */
export const RejectionCriteriaCodings = {
  /**
   * broken: specimen container broken.
   */
  BrokenSpecimenContainer: new Coding({
    display: "broken specimen container",
    code: "broken",
    system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
  }),
  /**
   * clotted: specimen clotted.
   */
  SpecimenClotted: new Coding({
    display: "specimen clotted",
    code: "clotted",
    system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
  }),
  /**
   * hemolized: blood specimen hemolized.
   */
  HemolizedSpecimen: new Coding({
    display: "hemolized specimen",
    code: "hemolized",
    system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
  }),
  /**
   * insufficient: insufficient quantity of specimen.
   */
  InsufficientSpecimenVolume: new Coding({
    display: "insufficient specimen volume",
    code: "insufficient",
    system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
  }),
  /**
   * wrong-temperature: specimen temperature inappropriate.
   */
  SpecimenTemperatureInappropriate: new Coding({
    display: "specimen temperature inappropriate",
    code: "wrong-temperature",
    system: "http://terminology.hl7.org/CodeSystem/rejection-criteria",
  }),
} as const;

/**
 * Criterion for rejection of the specimen by laboratory.
 */
export type RejectionCriteriaCodingType = typeof RejectionCriteriaCodings;
