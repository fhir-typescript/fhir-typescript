/**
 * A set of codes indicating the current status of a MedicationAdministration.
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
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    readonly Stopped: "stopped";
};
/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export declare type MedicationAdminStatusCodeType = typeof MedicationAdminStatusCodes[keyof typeof MedicationAdminStatusCodes];
//# sourceMappingURL=MedicationAdminStatusCodes.d.ts.map