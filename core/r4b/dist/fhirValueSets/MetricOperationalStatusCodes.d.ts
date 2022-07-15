/**
 * Describes the operational status of the DeviceMetric.
 */
export declare const MetricOperationalStatusCodes: {
    /**
     * entered-in-error: The DeviceMetric was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * off: The DeviceMetric is not operating.
     */
    readonly Off: "off";
    /**
     * on: The DeviceMetric is operating and will generate DeviceObservations.
     */
    readonly On: "on";
    /**
     * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    readonly Standby: "standby";
};
/**
 * Describes the operational status of the DeviceMetric.
 */
export declare type MetricOperationalStatusCodeType = typeof MetricOperationalStatusCodes[keyof typeof MetricOperationalStatusCodes];
//# sourceMappingURL=MetricOperationalStatusCodes.d.ts.map