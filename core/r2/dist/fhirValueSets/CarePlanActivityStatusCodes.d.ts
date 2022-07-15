/**
 * Indicates where the activity is at in its overall life cycle.
 */
export declare const CarePlanActivityStatusCodes: {
    /**
     * cancelled: The activities have been ended prior to completion (perhaps even before they were started).
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The activities have been completed (more or less) as planned.
     */
    readonly Completed: "completed";
    /**
     * in-progress: Activity has been started but is not yet complete.
     */
    readonly InProgress: "in-progress";
    /**
     * not-started: Activity is planned but no action has yet been taken.
     */
    readonly NotStarted: "not-started";
    /**
     * on-hold: Activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    readonly OnHold: "on-hold";
    /**
     * scheduled: Appointment or other booking has occurred but activity has not yet begun.
     */
    readonly Scheduled: "scheduled";
};
/**
 * Indicates where the activity is at in its overall life cycle.
 */
export declare type CarePlanActivityStatusCodeType = typeof CarePlanActivityStatusCodes[keyof typeof CarePlanActivityStatusCodes];
//# sourceMappingURL=CarePlanActivityStatusCodes.d.ts.map