import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept specifying the state of the prescribing event. Describes the lifecycle of the prescription
 */
export declare type MedicationRequestStatusCodingType = {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    Active: CodingArgs;
    /**
     * cancelled: The prescription has been withdrawn.
     */
    Cancelled: CodingArgs;
    /**
     * completed: All actions that are implied by the prescription have occurred.
     */
    Completed: CodingArgs;
    /**
     * draft: The prescription is not yet 'actionable', i.e. it is a work in progress, requires sign-off or verification, and needs to be run through decision support process.
     */
    Draft: CodingArgs;
    /**
     * entered-in-error: The prescription was entered in error.
     */
    EnteredInError: CodingArgs;
    /**
     * on-hold: Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called "suspended".
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the prescription are to be permanently halted, before all of them occurred.
     */
    Stopped: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request
     */
    Unknown: CodingArgs;
};
/**
 * A coded concept specifying the state of the prescribing event. Describes the lifecycle of the prescription
 */
export declare const MedicationRequestStatusCodings: MedicationRequestStatusCodingType;
//# sourceMappingURL=MedicationRequestStatusCodings.d.ts.map