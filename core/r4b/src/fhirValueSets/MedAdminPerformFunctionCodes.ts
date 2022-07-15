// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/med-admin-perform-function|4.3.0

/**
 * MedicationAdministration Performer Function Codes
 */
export const MedAdminPerformFunctionCodes = {
  /**
   * performer: A person, non-person living subject, organization or device that who actually and principally carries out the action
   */
  Performer: "performer",
  /**
   * verifier: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
   */
  Verifier: "verifier",
  /**
   * witness: A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
   */
  Witness: "witness",
} as const;

/**
 * MedicationAdministration Performer Function Codes
 */
export type MedAdminPerformFunctionCodeType = typeof MedAdminPerformFunctionCodes[keyof typeof MedAdminPerformFunctionCodes];
