// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/resource-type-link|3.0.2

/**
 * The type of payee Resource
 */
export const ResourceTypeLinkCodes = {
  /**
   * organization: Organization resource
   */
  Organization: "organization",
  /**
   * patient: Patient resource
   */
  Patient: "patient",
  /**
   * practitioner: Practitioner resource
   */
  Practitioner: "practitioner",
  /**
   * relatedperson: RelatedPerson resource
   */
  RelatedPerson: "relatedperson",
} as const;

/**
 * The type of payee Resource
 */
export type ResourceTypeLinkCodeType = typeof ResourceTypeLinkCodes[keyof typeof ResourceTypeLinkCodes];
