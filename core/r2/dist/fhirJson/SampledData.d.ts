import * as fhir from '../fhirJson.js';
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export interface SampledData extends fhir.FhirElement {
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.Quantity | null;
    /**
     * The length of time between sampling times, measured in milliseconds.
     */
    period: number | null;
    /**
     * Extended properties for primitive element: SampledData.period
     */
    _period?: fhir.FhirElement;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.factor
     */
    _factor?: fhir.FhirElement;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.lowerLimit
     */
    _lowerLimit?: fhir.FhirElement;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: number | undefined;
    /**
     * Extended properties for primitive element: SampledData.upperLimit
     */
    _upperLimit?: fhir.FhirElement;
    /**
     * The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
     */
    dimensions: number | null;
    /**
     * Extended properties for primitive element: SampledData.dimensions
     */
    _dimensions?: fhir.FhirElement;
    /**
     * A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
     */
    data: string | null;
    /**
     * Extended properties for primitive element: SampledData.data
     */
    _data?: fhir.FhirElement;
}
//# sourceMappingURL=SampledData.d.ts.map