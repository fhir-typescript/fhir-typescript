/**
 * MedicationAdministration Category Codes
 */
export declare const MedicationAdminCategoryCodes: {
    /**
     * community: Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    readonly Community: "community";
    /**
     * inpatient: Includes administrations in an inpatient or acute care setting
     */
    readonly Inpatient: "inpatient";
    /**
     * outpatient: Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: "outpatient";
};
/**
 * MedicationAdministration Category Codes
 */
export declare type MedicationAdminCategoryCodeType = typeof MedicationAdminCategoryCodes[keyof typeof MedicationAdminCategoryCodes];
//# sourceMappingURL=MedicationAdminCategoryCodes.d.ts.map