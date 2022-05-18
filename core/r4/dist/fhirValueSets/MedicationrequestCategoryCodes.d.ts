/**
 * MedicationRequest Category Codes
 */
export declare const MedicationrequestCategoryCodes: {
    /**
     * community: Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)
     */
    readonly Community: "community";
    /**
     * discharge: Includes requests for medications created when the patient is being released from a facility
     */
    readonly Discharge: "discharge";
    /**
     * inpatient: Includes requests for medications to be administered or consumed in an inpatient or acute care setting
     */
    readonly Inpatient: "inpatient";
    /**
     * outpatient: Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)
     */
    readonly Outpatient: "outpatient";
};
/**
 * MedicationRequest Category Codes
 */
export declare type MedicationrequestCategoryCodeType = typeof MedicationrequestCategoryCodes[keyof typeof MedicationrequestCategoryCodes];
//# sourceMappingURL=MedicationrequestCategoryCodes.d.ts.map