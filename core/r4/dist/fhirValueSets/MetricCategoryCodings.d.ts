import { CodingArgs } from '../fhir/Coding.js';
/**
 * Describes the category of the metric.
 */
export declare type MetricCategoryCodingType = {
    /**
     * calculation: DeviceObservations generated for this DeviceMetric are calculated.
     */
    Calculation: CodingArgs;
    /**
     * measurement: DeviceObservations generated for this DeviceMetric are measured.
     */
    Measurement: CodingArgs;
    /**
     * setting: DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.
     */
    Setting: CodingArgs;
    /**
     * unspecified: The category of this DeviceMetric is unspecified.
     */
    Unspecified: CodingArgs;
};
/**
 * Describes the category of the metric.
 */
export declare const MetricCategoryCodings: MetricCategoryCodingType;
//# sourceMappingURL=MetricCategoryCodings.d.ts.map