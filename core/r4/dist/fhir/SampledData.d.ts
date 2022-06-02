import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SampledData type.
 */
export interface SampledDataArgs extends fhir.FhirElementArgs {
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.QuantityArgs | null;
    /**
     * This is usually a whole number.
     */
    period: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: SampledData.period
     */
    _period?: fhir.FhirElementArgs;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: SampledData.factor
     */
    _factor?: fhir.FhirElementArgs;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: SampledData.lowerLimit
     */
    _lowerLimit?: fhir.FhirElementArgs;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: SampledData.upperLimit
     */
    _upperLimit?: fhir.FhirElementArgs;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: SampledData.dimensions
     */
    _dimensions?: fhir.FhirElementArgs;
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SampledData.data
     */
    _data?: fhir.FhirElementArgs;
}
/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 */
export declare class SampledData extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */
    origin: fhir.Quantity | null;
    /**
     * This is usually a whole number.
     */
    period: fhir.FhirDecimal | null;
    /**
     * A correction factor that is applied to the sampled data points before they are added to the origin.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */
    lowerLimit?: fhir.FhirDecimal | undefined;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */
    upperLimit?: fhir.FhirDecimal | undefined;
    /**
     * If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
     */
    dimensions: fhir.FhirPositiveInt | null;
    /**
     * Data may be missing if it is omitted for summarization purposes. In general, data is required for any actual use of a SampledData.
     */
    data?: fhir.FhirString | undefined;
    /**
     * Default constructor for SampledData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SampledDataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SampledData.d.ts.map