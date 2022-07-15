/**
 * The type(s) of task performers allowed
 */
export declare const TaskPerformerTypeCodes: {
    /**
     * acquirer: A workflow participant that acquires resources (specimens, images, etc) necessary to perform the task.
     */
    readonly Acquirer: "acquirer";
    /**
     * dispatcher: A workflow participant that dispatches services (assigns another task to a participant).
     */
    readonly Dispatcher: "dispatcher";
    /**
     * manager: A workflow participant that manages task activity.
     */
    readonly Manager: "manager";
    /**
     * monitor: A workflow participant that monitors task activity.
     */
    readonly Monitor: "monitor";
    /**
     * performer: A workflow participant that performs services.
     */
    readonly Performer: "performer";
    /**
     * requester: A workflow participant that requests services.
     */
    readonly Requester: "requester";
    /**
     * reviewer: A workflow participant that reviews task inputs or outputs.
     */
    readonly Reviewer: "reviewer";
    /**
     * scheduler: A workflow participant that schedules (dispatches and sets the time or date for performance of) services.
     */
    readonly Scheduler: "scheduler";
};
/**
 * The type(s) of task performers allowed
 */
export declare type TaskPerformerTypeCodeType = typeof TaskPerformerTypeCodes[keyof typeof TaskPerformerTypeCodes];
//# sourceMappingURL=TaskPerformerTypeCodes.d.ts.map