import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationAdministration Status Codes
 */
export declare type MedicationAdminStatusCodingType = {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: The administration has started but has not yet completed.
     */
    InProgress: CodingArgs;
    /**
     * not-done: The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    NotDone: CodingArgs;
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    Stopped: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: CodingArgs;
};
/**
 * MedicationAdministration Status Codes
 */
export declare const MedicationAdminStatusCodings: MedicationAdminStatusCodingType;
//# sourceMappingURL=MedicationAdminStatusCodings.d.ts.map