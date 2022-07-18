// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-achievement|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export type GoalAchievementCodingType = {
  /**
   * achieved: The goal has been met.
   */
  Achieved: CodingArgs;
  /**
   * improving: The goal is being sought, and is progressing.
   */
  Improving: CodingArgs;
  /**
   * in-progress: The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
   */
  InProgress: CodingArgs;
  /**
   * no-change: The goal is being sought, but the trend is flat.
   */
  NoChange: CodingArgs;
  /**
   * no-progress: The goal has not been met and little to no progress towards target.
   */
  NoProgress: CodingArgs;
  /**
   * not-achieved: The goal has not been met and there might or might not have been progress towards target.
   */
  NotAchieved: CodingArgs;
  /**
   * not-attainable: The goal is not possible to be met.
   */
  NotAttainable: CodingArgs;
  /**
   * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective.
   */
  Sustaining: CodingArgs;
  /**
   * worsening: The goal is being sought, but is regressing.
   */
  Worsening: CodingArgs;
}

/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export const GoalAchievementCodings:GoalAchievementCodingType = {
  /**
   * achieved: The goal has been met.
   */
  Achieved: {
    display: "Achieved",
    code: "achieved",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * improving: The goal is being sought, and is progressing.
   */
  Improving: {
    display: "Improving",
    code: "improving",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * in-progress: The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * no-change: The goal is being sought, but the trend is flat.
   */
  NoChange: {
    display: "No Change",
    code: "no-change",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * no-progress: The goal has not been met and little to no progress towards target.
   */
  NoProgress: {
    display: "No Progress",
    code: "no-progress",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * not-achieved: The goal has not been met and there might or might not have been progress towards target.
   */
  NotAchieved: {
    display: "Not Achieved",
    code: "not-achieved",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * not-attainable: The goal is not possible to be met.
   */
  NotAttainable: {
    display: "Not Attainable",
    code: "not-attainable",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective.
   */
  Sustaining: {
    display: "Sustaining",
    code: "sustaining",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
  /**
   * worsening: The goal is being sought, but is regressing.
   */
  Worsening: {
    display: "Worsening",
    code: "worsening",
    system: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  },
} as const;