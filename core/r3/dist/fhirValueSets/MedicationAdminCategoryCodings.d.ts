import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept describing where the medication administered is expected to occur
 */
export declare type MedicationAdminCategoryCodingType = {
    /**
     * community: Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc)
     */
    Community: CodingArgs;
    /**
     * inpatient: Includes administrations in an inpatient or acute care setting
     */
    Inpatient: CodingArgs;
    /**
     * outpatient: Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient: CodingArgs;
};
/**
 * A coded concept describing where the medication administered is expected to occur
 */
export declare const MedicationAdminCategoryCodings: MedicationAdminCategoryCodingType;
//# sourceMappingURL=MedicationAdminCategoryCodings.d.ts.map