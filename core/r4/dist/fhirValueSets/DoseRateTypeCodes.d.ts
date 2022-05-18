/**
 * The kind of dose or rate specified.
 */
export declare const DoseRateTypeCodes: {
    /**
     * calculated: The dose specified is calculated by the prescriber or the system.
     */
    readonly Calculated: "calculated";
    /**
     * ordered: The dose specified is as ordered by the prescriber.
     */
    readonly Ordered: "ordered";
};
/**
 * The kind of dose or rate specified.
 */
export declare type DoseRateTypeCodeType = typeof DoseRateTypeCodes[keyof typeof DoseRateTypeCodes];
//# sourceMappingURL=DoseRateTypeCodes.d.ts.map