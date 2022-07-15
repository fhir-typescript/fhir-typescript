import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code describing where the dispensed medication is expected to be consumed or administered
 */
export declare type MedicationDispenseCategoryCodingType = {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc)
     */
    Community: CodingArgs;
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting
     */
    Inpatient: CodingArgs;
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient: CodingArgs;
};
/**
 * A code describing where the dispensed medication is expected to be consumed or administered
 */
export declare const MedicationDispenseCategoryCodings: MedicationDispenseCategoryCodingType;
//# sourceMappingURL=MedicationDispenseCategoryCodings.d.ts.map