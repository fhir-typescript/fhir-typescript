// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceMetric

import * as fhir from '../fhir.js';

// @ts-ignore
import { MetricCalibrationTypeCodings, MetricCalibrationTypeCodingType,} from '../fhirValueSets/MetricCalibrationTypeCodings.js';
// @ts-ignore
import { MetricCalibrationTypeCodes,  MetricCalibrationTypeCodeType } from '../fhirValueSets/MetricCalibrationTypeCodes.js';
// @ts-ignore
import { MetricCalibrationStateCodings, MetricCalibrationStateCodingType,} from '../fhirValueSets/MetricCalibrationStateCodings.js';
// @ts-ignore
import { MetricCalibrationStateCodes,  MetricCalibrationStateCodeType } from '../fhirValueSets/MetricCalibrationStateCodes.js';
// @ts-ignore
import { MetricOperationalStatusCodings, MetricOperationalStatusCodingType,} from '../fhirValueSets/MetricOperationalStatusCodings.js';
// @ts-ignore
import { MetricOperationalStatusCodes,  MetricOperationalStatusCodeType } from '../fhirValueSets/MetricOperationalStatusCodes.js';
// @ts-ignore
import { MetricColorCodings, MetricColorCodingType,} from '../fhirValueSets/MetricColorCodings.js';
// @ts-ignore
import { MetricColorCodes,  MetricColorCodeType } from '../fhirValueSets/MetricColorCodes.js';
// @ts-ignore
import { MetricCategoryCodings, MetricCategoryCodingType,} from '../fhirValueSets/MetricCategoryCodings.js';
// @ts-ignore
import { MetricCategoryCodes,  MetricCategoryCodeType } from '../fhirValueSets/MetricCategoryCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the DeviceMetricCalibration type.
 */
export interface DeviceMetricCalibrationArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the type of the calibration method.
   */
  type?: MetricCalibrationTypeCodeType|undefined;
  /**
   * Describes the state of the calibration.
   */
  state?: MetricCalibrationStateCodeType|undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  time?: fhir.FhirInstant|string|undefined;
}

/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
export class DeviceMetricCalibration extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'DeviceMetricCalibration';
  /**
   * Describes the type of the calibration method.
   */
  public type?: MetricCalibrationTypeCodeType|undefined;
  /**
   * Describes the state of the calibration.
   */
  public state?: MetricCalibrationStateCodeType|undefined;
  /**
   * Describes the time last calibration has been performed.
   */
  public time?: fhir.FhirInstant|undefined;
  /**
   * Default constructor for DeviceMetricCalibration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceMetricCalibrationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type; }
    if (source['state']) { this.state = source.state; }
    if (source['time']) { this.time = new fhir.FhirInstant({value: source.time}); }
  }
  /**
   * Required-bound Value Set for type (DeviceMetric.calibration.type)
   */
  public static typeRequiredCoding():MetricCalibrationTypeCodingType {
    return MetricCalibrationTypeCodings;
  }
  /**
   * Required-bound Value Set for state (DeviceMetric.calibration.state)
   */
  public static stateRequiredCoding():MetricCalibrationStateCodingType {
    return MetricCalibrationStateCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["time"]) { outcome.issue!.push(...this.time.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the DeviceMetric type.
 */
export interface DeviceMetricArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceMetric"|undefined;
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  unit?: fhir.CodeableConceptArgs|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  parent?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  operationalStatus?: MetricOperationalStatusCodeType|undefined;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  color?: MetricColorCodeType|undefined;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  category: MetricCategoryCodeType|null;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  measurementPeriod?: fhir.TimingArgs|undefined;
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  calibration?: fhir.DeviceMetricCalibrationArgs[]|undefined;
}

/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
export class DeviceMetric extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'DeviceMetric';
  /**
   * Resource Type Name
   */
  public resourceType: "DeviceMetric";
  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to the unique identifier of the device.
   */
  public identifier?: fhir.Identifier[];
  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  public unit?: fhir.CodeableConcept|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  public operationalStatus?: MetricOperationalStatusCodeType|undefined;
  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
   */
  public color?: MetricColorCodeType|undefined;
  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   */
  public category: MetricCategoryCodeType|null;
  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
   */
  public measurementPeriod?: fhir.Timing|undefined;
  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  public calibration?: fhir.DeviceMetricCalibration[];
  /**
   * Default constructor for DeviceMetric - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceMetricArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceMetric';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['unit']) { this.unit = new fhir.CodeableConcept(source.unit); }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent); }
    if (source['operationalStatus']) { this.operationalStatus = source.operationalStatus; }
    if (source['color']) { this.color = source.color; }
    if (source['category']) { this.category = source.category; }
    else { this.category = null; }
    if (source['measurementPeriod']) { this.measurementPeriod = new fhir.Timing(source.measurementPeriod); }
    if (source['calibration']) { this.calibration = source.calibration.map((x) => new fhir.DeviceMetricCalibration(x)); }
    else { this.calibration = []; }
  }
  /**
   * Required-bound Value Set for operationalStatus (DeviceMetric.operationalStatus)
   */
  public static operationalStatusRequiredCoding():MetricOperationalStatusCodingType {
    return MetricOperationalStatusCodings;
  }
  /**
   * Required-bound Value Set for color (DeviceMetric.color)
   */
  public static colorRequiredCoding():MetricColorCodingType {
    return MetricColorCodings;
  }
  /**
   * Required-bound Value Set for category (DeviceMetric.category)
   */
  public static categoryRequiredCoding():MetricCategoryCodingType {
    return MetricCategoryCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"DeviceMetric" fhir: DeviceMetric.resourceType:"DeviceMetric"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: DeviceMetric.type:CodeableConcept', }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["unit"]) { outcome.issue!.push(...this.unit.doModelValidation().issue!); }
    if (this["source"]) { outcome.issue!.push(...this.source.doModelValidation().issue!); }
    if (this["parent"]) { outcome.issue!.push(...this.parent.doModelValidation().issue!); }
    if (!this['category']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property category:MetricCategoryCodeType fhir: DeviceMetric.category:code', }));
    }
    if (this["measurementPeriod"]) { outcome.issue!.push(...this.measurementPeriod.doModelValidation().issue!); }
    if (this["calibration"]) { this.calibration.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}