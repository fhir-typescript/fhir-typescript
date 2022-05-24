import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export declare type CarePlanActivityStatusCodingType = {
    /**
     * cancelled: The planned care plan activity has been withdrawn.
     */
    Cancelled: CodingArgs;
    /**
     * completed: Care plan activity has been completed (more or less) as planned.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: Care plan activity was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: Care plan activity has been started but is not yet complete.
     */
    InProgress: CodingArgs;
    /**
     * not-started: Care plan activity is planned but no action has yet been taken.
     */
    NotStarted: CodingArgs;
    /**
     * on-hold: Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    OnHold: CodingArgs;
    /**
     * scheduled: Appointment or other booking has occurred but activity has not yet begun.
     */
    Scheduled: CodingArgs;
    /**
     * stopped: The planned care plan activity has been ended prior to completion after the activity was started.
     */
    Stopped: CodingArgs;
    /**
     * unknown: The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.
     */
    Unknown: CodingArgs;
};
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export declare const CarePlanActivityStatusCodings: CarePlanActivityStatusCodingType;
//# sourceMappingURL=CarePlanActivityStatusCodings.d.ts.map