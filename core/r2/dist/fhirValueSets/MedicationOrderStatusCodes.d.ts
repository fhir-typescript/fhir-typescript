/**
 * A code specifying the state of the prescribing event. Describes the lifecycle of the prescription.
 */
export declare const MedicationOrderStatusCodes: {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    readonly Active: "active";
    /**
     * completed: All actions that are implied by the prescription have occurred.
     */
    readonly Completed: "completed";
    /**
     * draft: The prescription is not yet 'actionable', i.e. it is a work in progress, requires sign-off or verification, and needs to be run through decision support process.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: The prescription was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * on-hold: Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called "suspended".
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the prescription are to be permanently halted, before all of them occurred.
     */
    readonly Stopped: "stopped";
};
/**
 * A code specifying the state of the prescribing event. Describes the lifecycle of the prescription.
 */
export declare type MedicationOrderStatusCodeType = typeof MedicationOrderStatusCodes[keyof typeof MedicationOrderStatusCodes];
//# sourceMappingURL=MedicationOrderStatusCodes.d.ts.map