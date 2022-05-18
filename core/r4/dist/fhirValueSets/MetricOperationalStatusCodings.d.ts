import { Coding } from '../fhir/Coding.js';
/**
 * Describes the operational status of the DeviceMetric.
 */
export declare const MetricOperationalStatusCodings: {
    /**
     * entered-in-error: The DeviceMetric was entered in error.
     */
    readonly EnteredInError: Coding;
    /**
     * off: The DeviceMetric is not operating.
     */
    readonly Off: Coding;
    /**
     * on: The DeviceMetric is operating and will generate DeviceObservations.
     */
    readonly On: Coding;
    /**
     * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    readonly Standby: Coding;
};
/**
 * Describes the operational status of the DeviceMetric.
 */
export declare type MetricOperationalStatusCodingType = typeof MetricOperationalStatusCodings;
//# sourceMappingURL=MetricOperationalStatusCodings.d.ts.map