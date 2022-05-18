import { Coding } from '../fhir/Coding.js';
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export declare const CarePlanActivityStatusCodings: {
    /**
     * cancelled: The planned care plan activity has been withdrawn.
     */
    readonly Cancelled: Coding;
    /**
     * completed: Care plan activity has been completed (more or less) as planned.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: Care plan activity was entered in error and voided.
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: Care plan activity has been started but is not yet complete.
     */
    readonly InProgress: Coding;
    /**
     * not-started: Care plan activity is planned but no action has yet been taken.
     */
    readonly NotStarted: Coding;
    /**
     * on-hold: Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    readonly OnHold: Coding;
    /**
     * scheduled: Appointment or other booking has occurred but activity has not yet begun.
     */
    readonly Scheduled: Coding;
    /**
     * stopped: The planned care plan activity has been ended prior to completion after the activity was started.
     */
    readonly Stopped: Coding;
    /**
     * unknown: The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.
     */
    readonly Unknown: Coding;
};
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export declare type CarePlanActivityStatusCodingType = typeof CarePlanActivityStatusCodings;
//# sourceMappingURL=CarePlanActivityStatusCodings.d.ts.map