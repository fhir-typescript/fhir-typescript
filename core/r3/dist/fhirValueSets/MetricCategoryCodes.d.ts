/**
 * Describes the category of the metric.
 */
export declare const MetricCategoryCodes: {
    /**
     * calculation: DeviceObservations generated for this DeviceMetric are calculated.
     */
    readonly Calculation: "calculation";
    /**
     * measurement: DeviceObservations generated for this DeviceMetric are measured.
     */
    readonly Measurement: "measurement";
    /**
     * setting: DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.
     */
    readonly Setting: "setting";
    /**
     * unspecified: The category of this DeviceMetric is unspecified.
     */
    readonly Unspecified: "unspecified";
};
/**
 * Describes the category of the metric.
 */
export declare type MetricCategoryCodeType = typeof MetricCategoryCodes[keyof typeof MetricCategoryCodes];
//# sourceMappingURL=MetricCategoryCodes.d.ts.map