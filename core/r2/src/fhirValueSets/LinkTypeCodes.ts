// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/link-type|1.0.2

/**
 * The type of link between this patient resource and another patient resource.
 */
export const LinkTypeCodes = {
  /**
   * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
   */
  Refer: "refer",
  /**
   * replace: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
   */
  Replace: "replace",
  /**
   * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
   */
  SeeAlso: "seealso",
} as const;

/**
 * The type of link between this patient resource and another patient resource.
 */
export type LinkTypeCodeType = typeof LinkTypeCodes[keyof typeof LinkTypeCodes];