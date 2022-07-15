/**
 * A coded concept identifying where the medication ordered is expected to be consumed or administered
 */
export declare const MedicationRequestCategoryCodes: {
    /**
     * community: Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc)
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
};
/**
 * A coded concept identifying where the medication ordered is expected to be consumed or administered
 */
export declare type MedicationRequestCategoryCodeType = typeof MedicationRequestCategoryCodes[keyof typeof MedicationRequestCategoryCodes];
//# sourceMappingURL=MedicationRequestCategoryCodes.d.ts.map