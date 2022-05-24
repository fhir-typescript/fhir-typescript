import { CodingArgs } from '../fhir/Coding.js';
/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export declare type GoalAchievementCodingType = {
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
};
/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export declare const GoalAchievementCodings: GoalAchievementCodingType;
//# sourceMappingURL=GoalAchievementCodings.d.ts.map