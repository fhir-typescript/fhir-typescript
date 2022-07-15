import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code specifying the state of the dispense event.
 *
 * Describes the lifecycle of the dispense.
 */
export declare type MedicationDispenseStatusCodingType = {
    /**
     * completed: All actions that are implied by the dispense have occurred.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The dispense has started but has not yet completed.
     */
    InProgress: CodingArgs;
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended"
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped: CodingArgs;
};
/**
 * A code specifying the state of the dispense event.
 *
 * Describes the lifecycle of the dispense.
 */
export declare const MedicationDispenseStatusCodings: MedicationDispenseStatusCodingType;
//# sourceMappingURL=MedicationDispenseStatusCodings.d.ts.map