import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates where the activity is at in its overall life cycle.
 */
export declare type CarePlanActivityStatusCodingType = {
    /**
     * cancelled: The activities have been ended prior to completion (perhaps even before they were started).
     */
    Cancelled: CodingArgs;
    /**
     * completed: The activities have been completed (more or less) as planned.
     */
    Completed: CodingArgs;
    /**
     * in-progress: Activity has been started but is not yet complete.
     */
    InProgress: CodingArgs;
    /**
     * not-started: Activity is planned but no action has yet been taken.
     */
    NotStarted: CodingArgs;
    /**
     * on-hold: Activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    OnHold: CodingArgs;
    /**
     * scheduled: Appointment or other booking has occurred but activity has not yet begun.
     */
    Scheduled: CodingArgs;
    /**
     * unknown: The authoring system doesn't know the current state of the activity.
     */
    Unknown: CodingArgs;
};
/**
 * Indicates where the activity is at in its overall life cycle.
 */
export declare const CarePlanActivityStatusCodings: CarePlanActivityStatusCodingType;
//# sourceMappingURL=CarePlanActivityStatusCodings.d.ts.map