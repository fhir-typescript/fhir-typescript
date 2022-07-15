/**
 * Which compartment a compartment definition describes
 */
export declare const CompartmentTypeCodes: {
    /**
     * Device: The compartment definition is for the device compartment
     */
    readonly Device: "Device";
    /**
     * Encounter: The compartment definition is for the encounter compartment
     */
    readonly Encounter: "Encounter";
    /**
     * Patient: The compartment definition is for the patient compartment
     */
    readonly Patient: "Patient";
    /**
     * Practitioner: The compartment definition is for the practitioner compartment
     */
    readonly Practitioner: "Practitioner";
    /**
     * RelatedPerson: The compartment definition is for the related-person compartment
     */
    readonly RelatedPerson: "RelatedPerson";
};
/**
 * Which compartment a compartment definition describes
 */
export declare type CompartmentTypeCodeType = typeof CompartmentTypeCodes[keyof typeof CompartmentTypeCodes];
//# sourceMappingURL=CompartmentTypeCodes.d.ts.map