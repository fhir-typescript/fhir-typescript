/**
 * A coded concept specifying the state of the prescribing event. Describes the lifecycle of the prescription
 */
export declare const MedicationRequestStatusCodes: {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    readonly Active: "active";
    /**
     * cancelled: The prescription has been withdrawn.
     */
    readonly Cancelled: "cancelled";
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
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request
     */
    readonly Unknown: "unknown";
};
/**
 * A coded concept specifying the state of the prescribing event. Describes the lifecycle of the prescription
 */
export declare type MedicationRequestStatusCodeType = typeof MedicationRequestStatusCodes[keyof typeof MedicationRequestStatusCodes];
//# sourceMappingURL=MedicationRequestStatusCodes.d.ts.map