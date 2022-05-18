import { Coding } from '../fhir/Coding.js';
/**
 * Describes the state of a metric calibration.
 */
export declare const MetricCalibrationStateCodings: {
    /**
     * calibrated: The metric has been calibrated.
     */
    readonly Calibrated: Coding;
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    readonly CalibrationRequired: Coding;
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    readonly NotCalibrated: Coding;
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    readonly Unspecified: Coding;
};
/**
 * Describes the state of a metric calibration.
 */
export declare type MetricCalibrationStateCodingType = typeof MetricCalibrationStateCodings;
//# sourceMappingURL=MetricCalibrationStateCodings.d.ts.map