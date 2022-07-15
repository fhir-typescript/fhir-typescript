/**
 * Codes identifying the category of observation range.
 */
export declare const ObservationRangeCategoryCodes: {
    /**
     * absolute: Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
     */
    readonly AbsoluteRange: "absolute";
    /**
     * critical: Critical Range for Ordinal and Continuous Observations.
     */
    readonly CriticalRange: "critical";
    /**
     * reference: Reference (Normal) Range for Ordinal and Continuous Observations.
     */
    readonly ReferenceRange: "reference";
};
/**
 * Codes identifying the category of observation range.
 */
export declare type ObservationRangeCategoryCodeType = typeof ObservationRangeCategoryCodes[keyof typeof ObservationRangeCategoryCodes];
//# sourceMappingURL=ObservationRangeCategoryCodes.d.ts.map