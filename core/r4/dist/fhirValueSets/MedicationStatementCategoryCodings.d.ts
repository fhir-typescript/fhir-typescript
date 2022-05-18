import { Coding } from '../fhir/Coding.js';
/**
 * Medication Status Codes
 */
export declare const MedicationStatementCategoryCodings: {
    /**
     * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    readonly Community: Coding;
    /**
     * inpatient: Includes orders for medications to be administered or consumed in an inpatient or acute care setting
     */
    readonly Inpatient: Coding;
    /**
     * outpatient: Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: Coding;
    /**
     * patientspecified: Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
     */
    readonly PatientSpecified: Coding;
};
/**
 * Medication Status Codes
 */
export declare type MedicationStatementCategoryCodingType = typeof MedicationStatementCategoryCodings;
//# sourceMappingURL=MedicationStatementCategoryCodings.d.ts.map