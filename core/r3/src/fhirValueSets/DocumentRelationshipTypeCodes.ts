// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/document-relationship-type|3.0.2

/**
 * The type of relationship between documents.
 */
export const DocumentRelationshipTypeCodes = {
  /**
   * appends: This document adds additional information to the target document.
   */
  Appends: "appends",
  /**
   * replaces: This document logically replaces or supersedes the target document.
   */
  Replaces: "replaces",
  /**
   * signs: This document is a signature of the target document.
   */
  Signs: "signs",
  /**
   * transforms: This document was generated by transforming the target document (e.g. format or language conversion).
   */
  Transforms: "transforms",
} as const;

/**
 * The type of relationship between documents.
 */
export type DocumentRelationshipTypeCodeType = typeof DocumentRelationshipTypeCodes[keyof typeof DocumentRelationshipTypeCodes];