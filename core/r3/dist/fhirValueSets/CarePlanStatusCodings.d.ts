import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export declare type CarePlanStatusCodingType = {
    /**
     * active: The plan is intended to be followed and used as part of patient care.
     */
    Active: CodingArgs;
    /**
     * cancelled: The plan has been terminated prior to reaching completion (though it may have been replaced by a new plan).
     */
    Cancelled: CodingArgs;
    /**
     * completed: The plan is no longer in use and is not expected to be followed or used in patient care.
     */
    Completed: CodingArgs;
    /**
     * draft: The plan is in development or awaiting use but is not yet intended to be acted upon.
     */
    Pending: CodingArgs;
    /**
     * entered-in-error: The plan was entered in error and voided.
     */
    EnteredInError: CodingArgs;
    /**
     * suspended: The plan has been temporarily stopped but is expected to resume in the future.
     */
    Suspended: CodingArgs;
    /**
     * unknown: The authoring system doesn't know the current state of the care plan.
     */
    Unknown: CodingArgs;
};
/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export declare const CarePlanStatusCodings: CarePlanStatusCodingType;
//# sourceMappingURL=CarePlanStatusCodings.d.ts.map