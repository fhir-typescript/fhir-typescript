import { Coding } from '../fhir/Coding.js';
/**
 * MedicationRequest Status Codes
 */
export declare const MedicationrequestStatusCodings: {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    readonly Active: Coding;
    /**
     * cancelled: The prescription has been withdrawn before any administrations have occurred
     */
    readonly Cancelled: Coding;
    /**
     * completed: All actions that are implied by the prescription have occurred.
     */
    readonly Completed: Coding;
    /**
     * draft: The prescription is not yet 'actionable', e.g. it is a work in progress, requires sign-off, verification or needs to be run through decision support process.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: Some of the actions that are implied by the medication request may have occurred.  For example, the medication may have been dispensed and the patient may have taken some of the medication.  Clinical decision support systems should take this status into account
     */
    readonly EnteredInError: Coding;
    /**
     * on-hold: Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called 'suspended'.
     */
    readonly OnHold: Coding;
    /**
     * stopped: Actions implied by the prescription are to be permanently halted, before all of the administrations occurred. This should not be used if the original order was entered in error
     */
    readonly Stopped: Coding;
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    readonly Unknown: Coding;
};
/**
 * MedicationRequest Status Codes
 */
export declare type MedicationrequestStatusCodingType = typeof MedicationrequestStatusCodings;
//# sourceMappingURL=MedicationrequestStatusCodings.d.ts.map