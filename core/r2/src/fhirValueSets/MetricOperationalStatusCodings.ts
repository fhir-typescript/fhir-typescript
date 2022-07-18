// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/metric-operational-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Describes the operational status of the DeviceMetric.
 */
export type MetricOperationalStatusCodingType = {
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
}

/**
 * Describes the operational status of the DeviceMetric.
 */
export const MetricOperationalStatusCodings:MetricOperationalStatusCodingType = {
  /**
   * off: The DeviceMetric is not operating.
   */
  Off: {
    display: "Off",
    code: "off",
    system: "http://hl7.org/fhir/metric-operational-status",
  },
  /**
   * on: The DeviceMetric is operating and will generate DeviceObservations.
   */
  On: {
    display: "On",
    code: "on",
    system: "http://hl7.org/fhir/metric-operational-status",
  },
  /**
   * standby: The DeviceMetric is operating, but will not generate any DeviceObservations.
   */
  Standby: {
    display: "Standby",
    code: "standby",
    system: "http://hl7.org/fhir/metric-operational-status",
  },
} as const;