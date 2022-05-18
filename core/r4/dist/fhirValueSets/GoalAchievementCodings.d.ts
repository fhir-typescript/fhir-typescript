import { Coding } from '../fhir/Coding.js';
/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export declare const GoalAchievementCodings: {
    /**
     * achieved: The goal has been met.
     */
    readonly Achieved: Coding;
    /**
     * improving: The goal is being sought, and is progressing.
     */
    readonly Improving: Coding;
    /**
     * in-progress: The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
     */
    readonly InProgress: Coding;
    /**
     * no-change: The goal is being sought, but the trend is flat.
     */
    readonly NoChange: Coding;
    /**
     * no-progress: The goal has not been met and little to no progress towards target.
     */
    readonly NoProgress: Coding;
    /**
     * not-achieved: The goal has not been met and there might or might not have been progress towards target.
     */
    readonly NotAchieved: Coding;
    /**
     * not-attainable: The goal is not possible to be met.
     */
    readonly NotAttainable: Coding;
    /**
     * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective.
     */
    readonly Sustaining: Coding;
    /**
     * worsening: The goal is being sought, but is regressing.
     */
    readonly Worsening: Coding;
};
/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export declare type GoalAchievementCodingType = typeof GoalAchievementCodings;
//# sourceMappingURL=GoalAchievementCodings.d.ts.map