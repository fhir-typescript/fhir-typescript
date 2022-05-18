import { Coding } from '../fhir/Coding.js';
/**
 * Describes the type of a metric calibration.
 */
export declare const MetricCalibrationTypeCodings: {
    /**
     * gain: Gain metric calibration method.
     */
    readonly Gain: Coding;
    /**
     * offset: Offset metric calibration method.
     */
    readonly Offset: Coding;
    /**
     * two-point: Two-point metric calibration method.
     */
    readonly TwoPoint: Coding;
    /**
     * unspecified: Metric calibration method has not been identified.
     */
    readonly Unspecified: Coding;
};
/**
 * Describes the type of a metric calibration.
 */
export declare type MetricCalibrationTypeCodingType = typeof MetricCalibrationTypeCodings;
//# sourceMappingURL=MetricCalibrationTypeCodings.d.ts.map