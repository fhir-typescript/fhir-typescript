import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates whether the goal has been met and is still being targeted
 */
export declare type GoalStatusCodingType = {
    /**
     * accepted: A proposed goal was accepted or acknowledged
     */
    Accepted: CodingArgs;
    /**
     * achieved: The goal has been met and no further action is needed
     */
    Achieved: CodingArgs;
    /**
     * ahead-of-target: The goal is ahead of the planned timelines
     */
    AheadOfTarget: CodingArgs;
    /**
     * behind-target: The goal is behind the planned timelines
     */
    BehindTarget: CodingArgs;
    /**
     * cancelled: The previously accepted goal is no longer being sought
     */
    Cancelled: CodingArgs;
    /**
     * entered-in-error: The goal was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The goal is being sought but has not yet been reached.  (Also applies if goal was reached in the past but there has been regression and goal is being sought again)
     */
    InProgress: CodingArgs;
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    OnHold: CodingArgs;
    /**
     * on-target: The goal is on schedule for the planned timelines
     */
    OnTarget: CodingArgs;
    /**
     * planned: A goal is planned for this patient
     */
    Planned: CodingArgs;
    /**
     * proposed: A goal is proposed for this patient
     */
    Proposed: CodingArgs;
    /**
     * rejected: A proposed goal was rejected
     */
    Rejected: CodingArgs;
    /**
     * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective
     */
    Sustaining: CodingArgs;
};
/**
 * Indicates whether the goal has been met and is still being targeted
 */
export declare const GoalStatusCodings: GoalStatusCodingType;
//# sourceMappingURL=GoalStatusCodings.d.ts.map