/**
 * A code describing where the dispensed medication is expected to be consumed or administered
 */
export declare const MedicationDispenseCategoryCodes: {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc)
     */
    readonly Community: "community";
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting
     */
    readonly Inpatient: "inpatient";
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: "outpatient";
};
/**
 * A code describing where the dispensed medication is expected to be consumed or administered
 */
export declare type MedicationDispenseCategoryCodeType = typeof MedicationDispenseCategoryCodes[keyof typeof MedicationDispenseCategoryCodes];
//# sourceMappingURL=MedicationDispenseCategoryCodes.d.ts.map