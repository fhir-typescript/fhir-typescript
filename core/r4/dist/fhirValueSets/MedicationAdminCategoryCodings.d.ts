import { Coding } from '../fhir/Coding.js';
/**
 * MedicationAdministration Category Codes
 */
export declare const MedicationAdminCategoryCodings: {
    /**
     * community: Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    readonly Community: Coding;
    /**
     * inpatient: Includes administrations in an inpatient or acute care setting
     */
    readonly Inpatient: Coding;
    /**
     * outpatient: Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: Coding;
};
/**
 * MedicationAdministration Category Codes
 */
export declare type MedicationAdminCategoryCodingType = typeof MedicationAdminCategoryCodings;
//# sourceMappingURL=MedicationAdminCategoryCodings.d.ts.map