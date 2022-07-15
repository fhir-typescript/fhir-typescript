import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code specifying the state of the prescribing event. Describes the lifecycle of the prescription.
 */
export declare type MedicationOrderStatusCodingType = {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    Active: CodingArgs;
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
};
/**
 * A code specifying the state of the prescribing event. Describes the lifecycle of the prescription.
 */
export declare const MedicationOrderStatusCodings: MedicationOrderStatusCodingType;
//# sourceMappingURL=MedicationOrderStatusCodings.d.ts.map