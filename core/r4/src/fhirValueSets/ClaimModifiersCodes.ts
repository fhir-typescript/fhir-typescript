// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-modifiers|4.0.1

/**
 * This value set includes sample Modifier type codes.
 */
export const ClaimModifiersCodes = {
  /**
   * a: Repair of prior service or installation.
   */
  RepairOfPriorServiceOrInstallation: "a",
  /**
   * b: Temporary service or installation.
   */
  TemporaryServiceOrInstallation: "b",
  /**
   * c: Treatment associated with TMJ.
   */
  TMJTreatment: "c",
  /**
   * e: Implant or associated with an implant.
   */
  ImplantOrAssociatedWithAnImplant: "e",
  /**
   * rooh: A Rush service or service performed outside of normal office hours.
   */
  RushOrOutsideOfOfficeHours: "rooh",
  /**
   * x: None.
   */
  None: "x",
} as const;

/**
 * This value set includes sample Modifier type codes.
 */
export type ClaimModifiersCodeType = typeof ClaimModifiersCodes[keyof typeof ClaimModifiersCodes];
