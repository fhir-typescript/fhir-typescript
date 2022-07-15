/**
 * The current status of the task.
 */
export declare const TaskStatusCodes: {
    /**
     * accepted: The potential performer has agreed to execute the task but has not yet started work.
     */
    readonly Accepted: "accepted";
    /**
     * cancelled: The task was not completed.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The task has been completed.
     */
    readonly Completed: "completed";
    /**
     * draft: The task is not yet ready to be acted upon.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: The task should never have existed and is retained only because of the possibility it may have used.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * failed: The task was attempted but could not be completed due to some error.
     */
    readonly Failed: "failed";
    /**
     * in-progress: Task has been started but is not yet complete.
     */
    readonly InProgress: "in-progress";
    /**
     * on-hold: Task has been started but work has been paused.
     */
    readonly OnHold: "on-hold";
    /**
     * ready: Task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    readonly Ready: "ready";
    /**
     * received: A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    readonly Received: "received";
    /**
     * rejected: The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    readonly Rejected: "rejected";
    /**
     * requested: The task is ready to be acted upon and action is sought.
     */
    readonly Requested: "requested";
};
/**
 * The current status of the task.
 */
export declare type TaskStatusCodeType = typeof TaskStatusCodes[keyof typeof TaskStatusCodes];
//# sourceMappingURL=TaskStatusCodes.d.ts.map