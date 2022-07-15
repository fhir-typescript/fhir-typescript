/**
 * The intended usage for supplemental data elements in the measure
 */
export declare const MeasureDataUsageCodes: {
    /**
     * risk-adjustment-factor: The data is intended to be used to calculate and apply a risk adjustment model for the measure
     */
    readonly RiskAdjustmentFactor: "risk-adjustment-factor";
    /**
     * supplemental-data: The data is intended to be provided as additional information alongside the measure results
     */
    readonly SupplementalData: "supplemental-data";
};
/**
 * The intended usage for supplemental data elements in the measure
 */
export declare type MeasureDataUsageCodeType = typeof MeasureDataUsageCodes[keyof typeof MeasureDataUsageCodes];
//# sourceMappingURL=MeasureDataUsageCodes.d.ts.map