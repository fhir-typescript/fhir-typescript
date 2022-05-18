// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/med-admin-perform-function|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * MedicationAdministration Performer Function Codes
 */
export const MedAdminPerformFunctionCodings = {
  /**
   * performer: A person, non-person living subject, organization or device that who actually and principally carries out the action
   */
  Performer: new Coding({
    display: "Performer",
    code: "performer",
    system: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
  }),
  /**
   * verifier: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
   */
  Verifier: new Coding({
    display: "Verifier",
    code: "verifier",
    system: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
  }),
  /**
   * witness: A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
   */
  Witness: new Coding({
    display: "Witness",
    code: "witness",
    system: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
  }),
} as const;

/**
 * MedicationAdministration Performer Function Codes
 */
export type MedAdminPerformFunctionCodingType = typeof MedAdminPerformFunctionCodings;