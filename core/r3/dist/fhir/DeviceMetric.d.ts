import * as fhir from '../fhir.js';
import { MetricCalibrationTypeCodeType } from '../fhirValueSets/MetricCalibrationTypeCodes.js';
import { MetricCalibrationStateCodeType } from '../fhirValueSets/MetricCalibrationStateCodes.js';
import { MetricOperationalStatusCodeType } from '../fhirValueSets/MetricOperationalStatusCodes.js';
import { MetricColorCodeType } from '../fhirValueSets/MetricColorCodes.js';
import { MetricCategoryCodeType } from '../fhirValueSets/MetricCategoryCodes.js';
/**
 * Valid arguments for the DeviceMetricCalibration type.
 */
export interface DeviceMetricCalibrationArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of the calibration method.
     */
    type?: fhir.FhirCode<MetricCalibrationTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Describes the state of the calibration.
     */
    state?: fhir.FhirCode<MetricCalibrationStateCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.state
     */
    _state?: fhir.FhirElementArgs;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.calibration.time
     */
    _time?: fhir.FhirElementArgs;
}
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export declare class DeviceMetricCalibration extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the type of the calibration method.
     */
    type?: fhir.FhirCode<MetricCalibrationTypeCodeType> | undefined;
    /**
     * Describes the state of the calibration.
     */
    state?: fhir.FhirCode<MetricCalibrationStateCodeType> | undefined;
    /**
     * Describes the time last calibration has been performed.
     */
    time?: fhir.FhirInstant | undefined;
    /**
     * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceMetricCalibrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DeviceMetric type.
 */
export interface DeviceMetricArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceMetric" | undefined;
    /**
     * Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID.  It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.
     */
    identifier: fhir.IdentifierArgs | null;
    /**
     * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: fhir.FhirCode<MetricOperationalStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.operationalStatus
     */
    _operationalStatus?: fhir.FhirElementArgs;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: fhir.FhirCode<MetricColorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.color
     */
    _color?: fhir.FhirElementArgs;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: fhir.FhirCode<MetricCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceMetric.category
     */
    _category?: fhir.FhirElementArgs;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhir.TimingArgs | undefined;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: fhir.DeviceMetricCalibrationArgs[] | undefined;
}
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export declare class DeviceMetric extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DeviceMetric";
    /**
     * Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID.  It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.
     */
    identifier: fhir.Identifier | null;
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
     * Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: fhir.Reference | undefined;
    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: fhir.FhirCode<MetricOperationalStatusCodeType> | undefined;
    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: fhir.FhirCode<MetricColorCodeType> | undefined;
    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category: fhir.FhirCode<MetricCategoryCodeType> | null;
    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: fhir.Timing | undefined;
    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration: fhir.DeviceMetricCalibration[];
    /**
     * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceMetricArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DeviceMetric.d.ts.map