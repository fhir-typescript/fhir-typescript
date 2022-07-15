/**
 * Describes the state of a metric calibration.
 */
export declare const MetricCalibrationStateCodes: {
    /**
     * calibrated: The metric has been calibrated.
     */
    readonly Calibrated: "calibrated";
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    readonly CalibrationRequired: "calibration-required";
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    readonly NotCalibrated: "not-calibrated";
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    readonly Unspecified: "unspecified";
};
/**
 * Describes the state of a metric calibration.
 */
export declare type MetricCalibrationStateCodeType = typeof MetricCalibrationStateCodes[keyof typeof MetricCalibrationStateCodes];
//# sourceMappingURL=MetricCalibrationStateCodes.d.ts.map