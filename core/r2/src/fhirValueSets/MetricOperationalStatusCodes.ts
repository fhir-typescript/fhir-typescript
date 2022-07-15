// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-operational-status|1.0.2

/**
 * Describes the operational status of the DeviceMetric.
 */
export const MetricOperationalStatusCodes = {
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
} as const;

/**
 * Describes the operational status of the DeviceMetric.
 */
export type MetricOperationalStatusCodeType = typeof MetricOperationalStatusCodes[keyof typeof MetricOperationalStatusCodes];
