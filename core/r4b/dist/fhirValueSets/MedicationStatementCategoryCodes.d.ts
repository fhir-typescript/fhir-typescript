/**
 * Medication Status Codes
 */
export declare const MedicationStatementCategoryCodes: {
    /**
     * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    readonly Community: "community";
    /**
     * inpatient: Includes orders for medications to be administered or consumed in an inpatient or acute care setting
     */
    readonly Inpatient: "inpatient";
    /**
     * outpatient: Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: "outpatient";
    /**
     * patientspecified: Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider
     */
    readonly PatientSpecified: "patientspecified";
};
/**
 * Medication Status Codes
 */
export declare type MedicationStatementCategoryCodeType = typeof MedicationStatementCategoryCodes[keyof typeof MedicationStatementCategoryCodes];
//# sourceMappingURL=MedicationStatementCategoryCodes.d.ts.map