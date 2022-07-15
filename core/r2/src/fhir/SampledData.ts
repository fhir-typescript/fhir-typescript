// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: SampledData

import * as fhir from '../fhir.js';

/**
 * Valid arguments for the SampledData type.
 */
export interface SampledDataArgs extends fhir.FhirElementArgs {
  /**
   * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
   */
  origin: fhir.QuantityArgs|null;
  /**
   * The length of time between sampling times, measured in milliseconds.
   */
  period: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: SampledData.period
   */
  _period?:fhir.FhirElementArgs;
  /**
   * A correction factor that is applied to the sampled data points before they are added to the origin.
   */
  factor?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: SampledData.factor
   */
  _factor?:fhir.FhirElementArgs;
  /**
   * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
   */
  lowerLimit?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: SampledData.lowerLimit
   */
  _lowerLimit?:fhir.FhirElementArgs;
  /**
   * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
   */
  upperLimit?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: SampledData.upperLimit
   */
  _upperLimit?:fhir.FhirElementArgs;
  /**
   * The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
   */
  dimensions: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: SampledData.dimensions
   */
  _dimensions?:fhir.FhirElementArgs;
  /**
   * A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
   */
  data: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SampledData.data
   */
  _data?:fhir.FhirElementArgs;
}

/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export class SampledData extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SampledData';
  /**
   * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
   */
  public origin: fhir.Quantity|null;
  /**
   * The length of time between sampling times, measured in milliseconds.
   */
  public period: fhir.FhirDecimal|null;
  /**
   * A correction factor that is applied to the sampled data points before they are added to the origin.
   */
  public factor?: fhir.FhirDecimal|undefined;
  /**
   * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
   */
  public lowerLimit?: fhir.FhirDecimal|undefined;
  /**
   * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
   */
  public upperLimit?: fhir.FhirDecimal|undefined;
  /**
   * The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
   */
  public dimensions: fhir.FhirPositiveInt|null;
  /**
   * A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
   */
  public data: fhir.FhirString|null;
  /**
   * Default constructor for SampledData - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SampledDataArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['origin']) { this.origin = new fhir.Quantity(source.origin); }
    else { this.origin = null; }
    if (source['period']) { this.period = new fhir.FhirDecimal({value: source.period}); }
    else { this.period = null; }
    if (source['_period']) {
      if (this.period) { this.period.addExtendedProperties(source._period!); }
      else { this.period = new fhir.FhirDecimal(source._period as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['factor']) { this.factor = new fhir.FhirDecimal({value: source.factor}); }
    if (source['_factor']) {
      if (this.factor) { this.factor.addExtendedProperties(source._factor!); }
      else { this.factor = new fhir.FhirDecimal(source._factor as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['lowerLimit']) { this.lowerLimit = new fhir.FhirDecimal({value: source.lowerLimit}); }
    if (source['_lowerLimit']) {
      if (this.lowerLimit) { this.lowerLimit.addExtendedProperties(source._lowerLimit!); }
      else { this.lowerLimit = new fhir.FhirDecimal(source._lowerLimit as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['upperLimit']) { this.upperLimit = new fhir.FhirDecimal({value: source.upperLimit}); }
    if (source['_upperLimit']) {
      if (this.upperLimit) { this.upperLimit.addExtendedProperties(source._upperLimit!); }
      else { this.upperLimit = new fhir.FhirDecimal(source._upperLimit as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['dimensions']) { this.dimensions = new fhir.FhirPositiveInt({value: source.dimensions}); }
    else { this.dimensions = null; }
    if (source['_dimensions']) {
      if (this.dimensions) { this.dimensions.addExtendedProperties(source._dimensions!); }
      else { this.dimensions = new fhir.FhirPositiveInt(source._dimensions as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['data']) { this.data = new fhir.FhirString({value: source.data}); }
    else { this.data = null; }
    if (source['_data']) {
      if (this.data) { this.data.addExtendedProperties(source._data!); }
      else { this.data = new fhir.FhirString(source._data as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SampledData' }
    this.vRS('origin',exp)
    this.vRS('period',exp)
    this.vOS('factor',exp)
    this.vOS('lowerLimit',exp)
    this.vOS('upperLimit',exp)
    this.vRS('dimensions',exp)
    this.vRS('data',exp)
    return issues;
  }
}
