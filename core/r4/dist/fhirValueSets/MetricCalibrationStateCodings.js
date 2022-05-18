/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * Describes the state of a metric calibration.
 */
var MetricCalibrationStateCodings = {
    /**
     * calibrated: The metric has been calibrated.
     */
    Calibrated: new Coding({
        display: "Calibrated",
        code: "calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * calibration-required: The metric needs to be calibrated.
     */
    CalibrationRequired: new Coding({
        display: "Calibration Required",
        code: "calibration-required",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * not-calibrated: The metric has not been calibrated.
     */
    NotCalibrated: new Coding({
        display: "Not Calibrated",
        code: "not-calibrated",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
    /**
     * unspecified: The state of calibration of this metric is unspecified.
     */
    Unspecified: new Coding({
        display: "Unspecified",
        code: "unspecified",
        system: "http://hl7.org/fhir/metric-calibration-state",
    }),
};

export { MetricCalibrationStateCodings };
//# sourceMappingURL=MetricCalibrationStateCodings.js.map