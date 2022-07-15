// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-scoring|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The scoring type of the measure.
 */
export type MeasureScoringCodingType = {
  /**
   * cohort: The measure is a cohort definition.
   */
  Cohort: CodingArgs;
  /**
   * continuous-variable: The score is defined by a calculation of some quantity.
   */
  ContinuousVariable: CodingArgs;
  /**
   * proportion: The measure score is defined using a proportion.
   */
  Proportion: CodingArgs;
  /**
   * ratio: The measure score is defined using a ratio.
   */
  Ratio: CodingArgs;
}

/**
 * The scoring type of the measure.
 */
export const MeasureScoringCodings:MeasureScoringCodingType = {
  /**
   * cohort: The measure is a cohort definition.
   */
  Cohort: {
    display: "Cohort",
    code: "cohort",
    system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
  },
  /**
   * continuous-variable: The score is defined by a calculation of some quantity.
   */
  ContinuousVariable: {
    display: "Continuous Variable",
    code: "continuous-variable",
    system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
  },
  /**
   * proportion: The measure score is defined using a proportion.
   */
  Proportion: {
    display: "Proportion",
    code: "proportion",
    system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
  },
  /**
   * ratio: The measure score is defined using a ratio.
   */
  Ratio: {
    display: "Ratio",
    code: "ratio",
    system: "http://terminology.hl7.org/CodeSystem/measure-scoring",
  },
} as const;
