import { CodingArgs } from '../fhir/Coding.js';
/**
 * Describes the type of a metric calibration.
 */
export declare type MetricCalibrationTypeCodingType = {
    /**
     * gain: Gain metric calibration method
     */
    Gain: CodingArgs;
    /**
     * offset: Offset metric calibration method
     */
    Offset: CodingArgs;
    /**
     * two-point: Two-point metric calibration method
     */
    TwoPoint: CodingArgs;
    /**
     * unspecified: Metric calibration method has not been identified.
     */
    Unspecified: CodingArgs;
};
/**
 * Describes the type of a metric calibration.
 */
export declare const MetricCalibrationTypeCodings: MetricCalibrationTypeCodingType;
//# sourceMappingURL=MetricCalibrationTypeCodings.d.ts.map