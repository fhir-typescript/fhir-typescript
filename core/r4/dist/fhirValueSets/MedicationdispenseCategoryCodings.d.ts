import { Coding } from '../fhir/Coding.js';
/**
 * MedicationDispense Category Codes
 */
export declare const MedicationdispenseCategoryCodings: {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    readonly Community: Coding;
    /**
     * discharge: Includes dispenses for medications created when the patient is being released from a facility.
     */
    readonly Discharge: Coding;
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.
     */
    readonly Inpatient: Coding;
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).
     */
    readonly Outpatient: Coding;
};
/**
 * MedicationDispense Category Codes
 */
export declare type MedicationdispenseCategoryCodingType = typeof MedicationdispenseCategoryCodings;
//# sourceMappingURL=MedicationdispenseCategoryCodings.d.ts.map