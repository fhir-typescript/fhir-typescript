/**
 * Describes the type of a metric calibration.
 */
export declare const MetricCalibrationTypeCodes: {
    /**
     * gain: Gain metric calibration method.
     */
    readonly Gain: "gain";
    /**
     * offset: Offset metric calibration method.
     */
    readonly Offset: "offset";
    /**
     * two-point: Two-point metric calibration method.
     */
    readonly TwoPoint: "two-point";
    /**
     * unspecified: Metric calibration method has not been identified.
     */
    readonly Unspecified: "unspecified";
};
/**
 * Describes the type of a metric calibration.
 */
export declare type MetricCalibrationTypeCodeType = typeof MetricCalibrationTypeCodes[keyof typeof MetricCalibrationTypeCodes];
//# sourceMappingURL=MetricCalibrationTypeCodes.d.ts.map