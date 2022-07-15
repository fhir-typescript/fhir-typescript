/**
 * Indicates whether the goal has been met and is still being targeted
 */
export declare const GoalStatusCodes: {
    /**
     * accepted: A proposed goal was accepted
     */
    readonly Accepted: "accepted";
    /**
     * achieved: The goal has been met and no further action is needed
     */
    readonly Achieved: "achieved";
    /**
     * cancelled: The goal is no longer being sought
     */
    readonly Cancelled: "cancelled";
    /**
     * in-progress: The goal is being sought but has not yet been reached.  (Also applies if goal was reached in the past but there has been regression and goal is being sought again)
     */
    readonly InProgress: "in-progress";
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    readonly OnHold: "on-hold";
    /**
     * planned: A goal is planned for this patient
     */
    readonly Planned: "planned";
    /**
     * proposed: A goal is proposed for this patient
     */
    readonly Proposed: "proposed";
    /**
     * rejected: A proposed goal was rejected
     */
    readonly Rejected: "rejected";
    /**
     * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective
     */
    readonly Sustaining: "sustaining";
};
/**
 * Indicates whether the goal has been met and is still being targeted
 */
export declare type GoalStatusCodeType = typeof GoalStatusCodes[keyof typeof GoalStatusCodes];
//# sourceMappingURL=GoalStatusCodes.d.ts.map