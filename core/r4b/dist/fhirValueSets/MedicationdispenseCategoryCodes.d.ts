/**
 * MedicationDispense Category Codes
 */
export declare const MedicationdispenseCategoryCodes: {
    /**
     * community: Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).
     */
    readonly Community: "community";
    /**
     * discharge: Includes dispenses for medications created when the patient is being released from a facility.
     */
    readonly Discharge: "discharge";
    /**
     * inpatient: Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.
     */
    readonly Inpatient: "inpatient";
    /**
     * outpatient: Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).
     */
    readonly Outpatient: "outpatient";
};
/**
 * MedicationDispense Category Codes
 */
export declare type MedicationdispenseCategoryCodeType = typeof MedicationdispenseCategoryCodes[keyof typeof MedicationdispenseCategoryCodes];
//# sourceMappingURL=MedicationdispenseCategoryCodes.d.ts.map