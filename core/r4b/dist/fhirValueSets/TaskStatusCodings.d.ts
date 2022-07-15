import { CodingArgs } from '../fhir/Coding.js';
/**
 * The current status of the task.
 */
export declare type TaskStatusCodingType = {
    /**
     * accepted: The potential performer has agreed to execute the task but has not yet started work.
     */
    Accepted: CodingArgs;
    /**
     * cancelled: The task was not completed.
     */
    Cancelled: CodingArgs;
    /**
     * completed: The task has been completed.
     */
    Completed: CodingArgs;
    /**
     * draft: The task is not yet ready to be acted upon.
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: The task should never have existed and is retained only because of the possibility it may have used.
     */
    EnteredInError: CodingArgs;
    /**
     * failed: The task was attempted but could not be completed due to some error.
     */
    Failed: CodingArgs;
    /**
     * in-progress: The task has been started but is not yet complete.
     */
    InProgress: CodingArgs;
    /**
     * on-hold: The task has been started but work has been paused.
     */
    OnHold: CodingArgs;
    /**
     * ready: The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    Ready: CodingArgs;
    /**
     * received: A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    Received: CodingArgs;
    /**
     * rejected: The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    Rejected: CodingArgs;
    /**
     * requested: The task is ready to be acted upon and action is sought.
     */
    Requested: CodingArgs;
};
/**
 * The current status of the task.
 */
export declare const TaskStatusCodings: TaskStatusCodingType;
//# sourceMappingURL=TaskStatusCodings.d.ts.map