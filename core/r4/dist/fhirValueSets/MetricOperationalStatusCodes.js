/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-operational-status|4.0.1
/**
 * Describes the operational status of the DeviceMetric.
 */
var MetricOperationalStatusCodes = {
    /**
     * entered-in-error: The DeviceMetric was entered in error.
     */
    EnteredInError: "entered-in-error",
    /**
     * off: The DeviceMetric is not operating.
     */
    Off: "off",
    /**
     * on: The DeviceMetric is operating and will generate DeviceObservations.
     */
    On: "on",
    /**
     * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
     */
    Standby: "standby",
};

export { MetricOperationalStatusCodes };
//# sourceMappingURL=MetricOperationalStatusCodes.js.map
