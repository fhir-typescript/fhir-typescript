import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type(s) of task performers allowed
 */
export declare type TaskPerformerTypeCodingType = {
    /**
     * acquirer: A workflow participant that acquires resources (specimens, images, etc) necessary to perform the task.
     */
    Acquirer: CodingArgs;
    /**
     * dispatcher: A workflow participant that dispatches services (assigns another task to a participant).
     */
    Dispatcher: CodingArgs;
    /**
     * manager: A workflow participant that manages task activity.
     */
    Manager: CodingArgs;
    /**
     * monitor: A workflow participant that monitors task activity.
     */
    Monitor: CodingArgs;
    /**
     * performer: A workflow participant that performs services.
     */
    Performer: CodingArgs;
    /**
     * requester: A workflow participant that requests services.
     */
    Requester: CodingArgs;
    /**
     * reviewer: A workflow participant that reviews task inputs or outputs.
     */
    Reviewer: CodingArgs;
    /**
     * scheduler: A workflow participant that schedules (dispatches and sets the time or date for performance of) services.
     */
    Scheduler: CodingArgs;
};
/**
 * The type(s) of task performers allowed
 */
export declare const TaskPerformerTypeCodings: TaskPerformerTypeCodingType;
//# sourceMappingURL=TaskPerformerTypeCodings.d.ts.map