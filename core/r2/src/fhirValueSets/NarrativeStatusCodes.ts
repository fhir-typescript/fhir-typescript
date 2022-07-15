// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/narrative-status|1.0.2

/**
 * The status of a resource narrative
 */
export const NarrativeStatusCodes = {
  /**
   * additional: The contents of the narrative contain additional information not found in the structured data
   */
  Additional: "additional",
  /**
   * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case"
   */
  Empty: "empty",
  /**
   * extensions: The contents of the narrative are entirely generated from the structured data in the content and some of the content is generated from extensions
   */
  Extensions: "extensions",
  /**
   * generated: The contents of the narrative are entirely generated from the structured data in the content.
   */
  Generated: "generated",
} as const;

/**
 * The status of a resource narrative
 */
export type NarrativeStatusCodeType = typeof NarrativeStatusCodes[keyof typeof NarrativeStatusCodes];
