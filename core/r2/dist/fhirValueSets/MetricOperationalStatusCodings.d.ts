import { CodingArgs } from '../fhir/Coding.js';
/**
 * Describes the operational status of the DeviceMetric.
 */
export declare type MetricOperationalStatusCodingType = {
    /**
     * off: The DeviceMetric is not operating.
     */
    Off: CodingArgs;
    /**
     * on: The DeviceMetric is operating and will generate DeviceObservations.
     */
    On: CodingArgs;
    /**
     * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    Standby: CodingArgs;
};
/**
 * Describes the operational status of the DeviceMetric.
 */
export declare const MetricOperationalStatusCodings: MetricOperationalStatusCodingType;
//# sourceMappingURL=MetricOperationalStatusCodings.d.ts.map