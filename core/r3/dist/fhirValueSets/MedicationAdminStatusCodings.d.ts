import { CodingArgs } from '../fhir/Coding.js';
/**
 * A set of codes indicating the current status of a MedicationAdministration.
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
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    Stopped: CodingArgs;
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: CodingArgs;
};
/**
 * A set of codes indicating the current status of a MedicationAdministration.
 */
export declare const MedicationAdminStatusCodings: MedicationAdminStatusCodingType;
//# sourceMappingURL=MedicationAdminStatusCodings.d.ts.map