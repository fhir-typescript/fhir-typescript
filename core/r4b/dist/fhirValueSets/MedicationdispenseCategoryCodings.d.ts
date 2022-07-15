import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationDispense Category Codes
 */
export declare type MedicationdispenseCategoryCodingType = {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    Community: CodingArgs;
    /**
     * discharge: Includes dispenses for medications created when the patient is being released from a facility.
     */
    Discharge: CodingArgs;
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.
     */
    Inpatient: CodingArgs;
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).
     */
    Outpatient: CodingArgs;
};
/**
 * MedicationDispense Category Codes
 */
export declare const MedicationdispenseCategoryCodings: MedicationdispenseCategoryCodingType;
//# sourceMappingURL=MedicationdispenseCategoryCodings.d.ts.map