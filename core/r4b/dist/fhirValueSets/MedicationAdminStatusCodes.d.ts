/**
 * MedicationAdministration Status Codes
 */
export declare const MedicationAdminStatusCodes: {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: The administration has started but has not yet completed.
     */
    readonly InProgress: "in-progress";
    /**
     * not-done: The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    readonly NotDone: "not-done";
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    readonly Stopped: "stopped";
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: "unknown";
};
/**
 * MedicationAdministration Status Codes
 */
export declare type MedicationAdminStatusCodeType = typeof MedicationAdminStatusCodes[keyof typeof MedicationAdminStatusCodes];
//# sourceMappingURL=MedicationAdminStatusCodes.d.ts.map