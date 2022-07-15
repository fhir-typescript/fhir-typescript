/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare const ReasonMedicationGivenCodes: {
    /**
     * a: No reason known.
     */
    readonly None: "a";
    /**
     * b: The administration was following an ordered protocol.
     */
    readonly GivenAsOrdered: "b";
    /**
     * c: The administration was needed to treat an emergency.
     */
    readonly Emergency: "c";
};
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare type ReasonMedicationGivenCodeType = typeof ReasonMedicationGivenCodes[keyof typeof ReasonMedicationGivenCodes];
//# sourceMappingURL=ReasonMedicationGivenCodes.d.ts.map