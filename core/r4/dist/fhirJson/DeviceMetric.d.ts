import * as fhir from '../fhirJson.js';
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export interface DeviceMetricCalibration extends fhir.BackboneElement {
    /**
     * Describes the type of the calibration method.
     */
    type?: 'gain' | 'offset' | 'two-point' | 'unspecified' | undefined;
    /**
     * Describes the state of the calibration.
     */
    state?: 'calibrated' | 'calibration-required' | 'not-calibrated' | 'unspecified' | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.time
     */
    _time?: fhir.FhirElement;
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export interface DeviceMetric extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceMetric";
    /**
     * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
     */
    type: fhir.CodeableConcept | null;
    /**
     * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: fhir.Reference | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhir.Reference | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: 'entered-in-error' | 'off' | 'on' | 'standby' | undefined;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: 'black' | 'blue' | 'cyan' | 'green' | 'magenta' | 'red' | 'white' | 'yellow' | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: 'calculation' | 'measurement' | 'setting' | 'unspecified' | null;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhir.Timing | undefined;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: fhir.DeviceMetricCalibration[] | undefined;
}
//# sourceMappingURL=DeviceMetric.d.ts.map