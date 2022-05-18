/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare const GoalStatusCodes: {
    /**
     * accepted: A proposed goal was accepted or acknowledged.
     */
    readonly Accepted: "accepted";
    /**
     * active: The goal is being sought actively.
     */
    readonly Active: "active";
    /**
     * cancelled: The goal has been abandoned.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The goal is no longer being sought.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: The goal was entered in error and voided.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    readonly OnHold: "on-hold";
    /**
     * planned: A goal is planned for this patient.
     */
    readonly Planned: "planned";
    /**
     * proposed: A goal is proposed for this patient.
     */
    readonly Proposed: "proposed";
    /**
     * rejected: A proposed goal was rejected.
     */
    readonly Rejected: "rejected";
};
/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export declare type GoalStatusCodeType = typeof GoalStatusCodes[keyof typeof GoalStatusCodes];
//# sourceMappingURL=GoalStatusCodes.d.ts.map