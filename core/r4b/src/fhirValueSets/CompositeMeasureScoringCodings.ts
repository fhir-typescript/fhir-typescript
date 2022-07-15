// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/composite-measure-scoring|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The composite scoring method of the measure.
 */
export type CompositeMeasureScoringCodingType = {
  /**
   * all-or-nothing: All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator.
   */
  AllOrNothing: CodingArgs;
  /**
   * linear: Linear scoring gives an individual a score based on the number of numerators in which they appear.
   */
  Linear: CodingArgs;
  /**
   * opportunity: Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component.
   */
  Opportunity: CodingArgs;
  /**
   * weighted: Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear.
   */
  Weighted: CodingArgs;
}

/**
 * The composite scoring method of the measure.
 */
export const CompositeMeasureScoringCodings:CompositeMeasureScoringCodingType = {
  /**
   * all-or-nothing: All-or-nothing scoring includes an individual in the numerator of the composite measure if they are in the numerators of all of the component measures in which they are in the denominator.
   */
  AllOrNothing: {
    display: "All-or-nothing",
    code: "all-or-nothing",
    system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring",
  },
  /**
   * linear: Linear scoring gives an individual a score based on the number of numerators in which they appear.
   */
  Linear: {
    display: "Linear",
    code: "linear",
    system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring",
  },
  /**
   * opportunity: Opportunity scoring combines the scores from component measures by combining the numerators and denominators for each component.
   */
  Opportunity: {
    display: "Opportunity",
    code: "opportunity",
    system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring",
  },
  /**
   * weighted: Weighted scoring gives an individual a score based on a weighted factor for each component numerator in which they appear.
   */
  Weighted: {
    display: "Weighted",
    code: "weighted",
    system: "http://terminology.hl7.org/CodeSystem/composite-measure-scoring",
  },
} as const;
