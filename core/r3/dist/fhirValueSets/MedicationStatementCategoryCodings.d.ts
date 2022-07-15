import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept identifying where the medication included in the medicationstatement is expected to be consumed or administered
 */
export declare type MedicationStatementCategoryCodingType = {
    /**
     * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc)
     */
    Community: CodingArgs;
    /**
     * inpatient: Includes orders for medications to be administered or consumed in an inpatient or acute care setting
     */
    Inpatient: CodingArgs;
    /**
     * outpatient: Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    Outpatient: CodingArgs;
    /**
     * patientspecified: Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
     */
    PatientSpecified: CodingArgs;
};
/**
 * A coded concept identifying where the medication included in the medicationstatement is expected to be consumed or administered
 */
export declare const MedicationStatementCategoryCodings: MedicationStatementCategoryCodingType;
//# sourceMappingURL=MedicationStatementCategoryCodings.d.ts.map