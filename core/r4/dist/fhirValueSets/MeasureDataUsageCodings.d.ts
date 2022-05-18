import { Coding } from '../fhir/Coding.js';
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare const MeasureDataUsageCodings: {
    /**
     * risk-adjustment-factor: The data is intended to be used to calculate and apply a risk adjustment model for the measure.
     */
    readonly RiskAdjustmentFactor: Coding;
    /**
     * supplemental-data: The data is intended to be provided as additional information alongside the measure results.
     */
    readonly SupplementalData: Coding;
};
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare type MeasureDataUsageCodingType = typeof MeasureDataUsageCodings;
//# sourceMappingURL=MeasureDataUsageCodings.d.ts.map