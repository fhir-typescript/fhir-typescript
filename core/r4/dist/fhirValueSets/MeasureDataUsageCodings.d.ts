import { CodingArgs } from '../fhir/Coding.js';
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare type MeasureDataUsageCodingType = {
    /**
     * risk-adjustment-factor: The data is intended to be used to calculate and apply a risk adjustment model for the measure.
     */
    RiskAdjustmentFactor: CodingArgs;
    /**
     * supplemental-data: The data is intended to be provided as additional information alongside the measure results.
     */
    SupplementalData: CodingArgs;
};
/**
 * The intended usage for supplemental data elements in the measure.
 */
export declare const MeasureDataUsageCodings: MeasureDataUsageCodingType;
//# sourceMappingURL=MeasureDataUsageCodings.d.ts.map