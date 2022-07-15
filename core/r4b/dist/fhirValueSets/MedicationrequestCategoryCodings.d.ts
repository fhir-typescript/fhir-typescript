import { CodingArgs } from '../fhir/Coding.js';
/**
 * MedicationRequest Category Codes
 */
export declare type MedicationrequestCategoryCodingType = {
    /**
     * community: Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    Community: CodingArgs;
    /**
     * discharge: Includes requests for medications created when the patient is being released from a facility
     */
    Discharge: CodingArgs;
    /**
     * inpatient: Includes requests for medications to be administered or consumed in an inpatient or acute care setting
     */
    Inpatient: CodingArgs;
    /**
     * outpatient: Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient: CodingArgs;
};
/**
 * MedicationRequest Category Codes
 */
export declare const MedicationrequestCategoryCodings: MedicationrequestCategoryCodingType;
//# sourceMappingURL=MedicationrequestCategoryCodings.d.ts.map