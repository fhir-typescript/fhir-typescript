// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/content-type|1.0.2

/**
 * The content or mime type.
 * 
 * The content type or mime type to be specified in Accept or Content-Type header.
 */
export const ContentTypeCodes = {
  /**
   * json: JSON content-type corresponding to the application/json+fhir mime-type.
   */
  Json: "json",
  /**
   * xml: XML content-type corresponding to the application/xml+fhir mime-type.
   */
  Xml: "xml",
} as const;

/**
 * The content or mime type.
 * 
 * The content type or mime type to be specified in Accept or Content-Type header.
 */
export type ContentTypeCodeType = typeof ContentTypeCodes[keyof typeof ContentTypeCodes];
