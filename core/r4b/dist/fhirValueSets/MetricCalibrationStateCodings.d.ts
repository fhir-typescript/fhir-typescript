import { CodingArgs } from '../fhir/Coding.js';
/**
 * Describes the state of a metric calibration.
 */
export declare type MetricCalibrationStateCodingType = {
    /**
     * calibrated: The metric has been calibrated.
     */
    Calibrated: CodingArgs;
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    CalibrationRequired: CodingArgs;
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    NotCalibrated: CodingArgs;
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    Unspecified: CodingArgs;
};
/**
 * Describes the state of a metric calibration.
 */
export declare const MetricCalibrationStateCodings: MetricCalibrationStateCodingType;
//# sourceMappingURL=MetricCalibrationStateCodings.d.ts.map