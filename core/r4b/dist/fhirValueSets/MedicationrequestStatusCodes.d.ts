/**
 * MedicationRequest Status Codes
 */
export declare const MedicationrequestStatusCodes: {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    readonly Active: "active";
    /**
     * cancelled: The prescription has been withdrawn before any administrations have occurred
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: All actions that are implied by the prescription have occurred.
     */
    readonly Completed: "completed";
    /**
     * draft: The prescription is not yet 'actionable', e.g. it is a work in progress, requires sign-off, verification or needs to be run through decision support process.
     */
    readonly Draft: "draft";
    /**
     * entered-in-error: Some of the actions that are implied by the medication request may have occurred.  For example, the medication may have been dispensed and the patient may have taken some of the medication.  Clinical decision support systems should take this status into account
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * on-hold: Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called 'suspended'.
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the prescription are to be permanently halted, before all of the administrations occurred. This should not be used if the original order was entered in error
     */
    readonly Stopped: "stopped";
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    readonly Unknown: "unknown";
};
/**
 * MedicationRequest Status Codes
 */
export declare type MedicationrequestStatusCodeType = typeof MedicationrequestStatusCodes[keyof typeof MedicationrequestStatusCodes];
//# sourceMappingURL=MedicationrequestStatusCodes.d.ts.map