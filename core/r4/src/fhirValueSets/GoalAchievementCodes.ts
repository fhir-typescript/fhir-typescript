// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-achievement|4.0.1

/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export const GoalAchievementCodes = {
  /**
   * achieved: The goal has been met.
   */
  Achieved: "achieved",
  /**
   * improving: The goal is being sought, and is progressing.
   */
  Improving: "improving",
  /**
   * in-progress: The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
   */
  InProgress: "in-progress",
  /**
   * no-change: The goal is being sought, but the trend is flat.
   */
  NoChange: "no-change",
  /**
   * no-progress: The goal has not been met and little to no progress towards target.
   */
  NoProgress: "no-progress",
  /**
   * not-achieved: The goal has not been met and there might or might not have been progress towards target.
   */
  NotAchieved: "not-achieved",
  /**
   * not-attainable: The goal is not possible to be met.
   */
  NotAttainable: "not-attainable",
  /**
   * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective.
   */
  Sustaining: "sustaining",
  /**
   * worsening: The goal is being sought, but is regressing.
   */
  Worsening: "worsening",
} as const;

/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export type GoalAchievementCodeType = typeof GoalAchievementCodes[keyof typeof GoalAchievementCodes];
