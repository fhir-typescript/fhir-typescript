// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplydelivery-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Status of the supply delivery.
 */
export type SupplydeliveryStatusCodingType = {
  /**
   * abandoned: Dispensing was not completed.
   */
  Abandoned: CodingArgs;
  /**
   * completed: Supply has been delivered ("completed").
   */
  Delivered: CodingArgs;
  /**
   * in-progress: Supply has been requested, but not delivered.
   */
  InProgress: CodingArgs;
}

/**
 * Status of the supply delivery.
 */
export const SupplydeliveryStatusCodings:SupplydeliveryStatusCodingType = {
  /**
   * abandoned: Dispensing was not completed.
   */
  Abandoned: {
    display: "Abandoned",
    code: "abandoned",
    system: "http://hl7.org/fhir/supplydelivery-status",
  },
  /**
   * completed: Supply has been delivered ("completed").
   */
  Delivered: {
    display: "Delivered",
    code: "completed",
    system: "http://hl7.org/fhir/supplydelivery-status",
  },
  /**
   * in-progress: Supply has been requested, but not delivered.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/supplydelivery-status",
  },
} as const;