/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export declare const CarePlanStatusCodes: {
    /**
     * active: The plan is intended to be followed and used as part of patient care.
     */
    readonly Active: "active";
    /**
     * cancelled: The plan has been terminated prior to reaching completion (though it may have been replaced by a new plan).
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The plan is no longer in use and is not expected to be followed or used in patient care.
     */
    readonly Completed: "completed";
    /**
     * draft: The plan is in development or awaiting use but is not yet intended to be acted upon.
     */
    readonly Pending: "draft";
    /**
     * entered-in-error: The plan was entered in error and voided.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * suspended: The plan has been temporarily stopped but is expected to resume in the future.
     */
    readonly Suspended: "suspended";
    /**
     * unknown: The authoring system doesn't know the current state of the care plan.
     */
    readonly Unknown: "unknown";
};
/**
 * Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.
 */
export declare type CarePlanStatusCodeType = typeof CarePlanStatusCodes[keyof typeof CarePlanStatusCodes];
//# sourceMappingURL=CarePlanStatusCodes.d.ts.map