// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-calibration-type|3.0.2

/**
 * Describes the type of a metric calibration.
 */
export const MetricCalibrationTypeCodes = {
  /**
   * gain: Gain metric calibration method
   */
  Gain: "gain",
  /**
   * offset: Offset metric calibration method
   */
  Offset: "offset",
  /**
   * two-point: Two-point metric calibration method
   */
  TwoPoint: "two-point",
  /**
   * unspecified: Metric calibration method has not been identified.
   */
  Unspecified: "unspecified",
} as const;

/**
 * Describes the type of a metric calibration.
 */
export type MetricCalibrationTypeCodeType = typeof MetricCalibrationTypeCodes[keyof typeof MetricCalibrationTypeCodes];
