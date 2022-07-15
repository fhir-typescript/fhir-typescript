/**
 * A coded concept specifying the state of the dispense event.
 */
export declare const MedicationDispenseStatusCodes: {
    /**
     * completed: All actions that are implied by the dispense have occurred.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * in-progress: The dispense has started but has not yet completed.
     */
    readonly InProgress: "in-progress";
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended"
     */
    readonly OnHold: "on-hold";
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    readonly Preparation: "preparation";
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    readonly Stopped: "stopped";
};
/**
 * A coded concept specifying the state of the dispense event.
 */
export declare type MedicationDispenseStatusCodeType = typeof MedicationDispenseStatusCodes[keyof typeof MedicationDispenseStatusCodes];
//# sourceMappingURL=MedicationDispenseStatusCodes.d.ts.map