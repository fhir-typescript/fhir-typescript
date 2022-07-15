// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplyrequest-reason|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Why the supply item was requested
 */
export type SupplyrequestReasonCodingType = {
  /**
   * patient-care: The supply has been requested for use in direct patient care.
   */
  PatientCare: CodingArgs;
  /**
   * ward-stock: The supply has been requested for for creating or replenishing ward stock.
   */
  WardStock: CodingArgs;
}

/**
 * Why the supply item was requested
 */
export const SupplyrequestReasonCodings:SupplyrequestReasonCodingType = {
  /**
   * patient-care: The supply has been requested for use in direct patient care.
   */
  PatientCare: {
    display: "Patient Care",
    code: "patient-care",
    system: "http://hl7.org/fhir/supplyrequest-reason",
  },
  /**
   * ward-stock: The supply has been requested for for creating or replenishing ward stock.
   */
  WardStock: {
    display: "Ward Stock",
    code: "ward-stock",
    system: "http://hl7.org/fhir/supplyrequest-reason",
  },
} as const;
