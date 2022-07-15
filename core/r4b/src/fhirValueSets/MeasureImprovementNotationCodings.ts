// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-improvement-notation|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export type MeasureImprovementNotationCodingType = {
  /**
   * decrease: Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).
   */
  DecreasedScoreIndicatesImprovement: CodingArgs;
  /**
   * increase: Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).
   */
  IncreasedScoreIndicatesImprovement: CodingArgs;
}

/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export const MeasureImprovementNotationCodings:MeasureImprovementNotationCodingType = {
  /**
   * decrease: Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).
   */
  DecreasedScoreIndicatesImprovement: {
    display: "Decreased score indicates improvement",
    code: "decrease",
    system: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
  },
  /**
   * increase: Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).
   */
  IncreasedScoreIndicatesImprovement: {
    display: "Increased score indicates improvement",
    code: "increase",
    system: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
  },
} as const;
