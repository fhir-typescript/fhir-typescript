// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/property-representation|1.0.2

/**
 * How a property is represented on the wire.
 */
export const PropertyRepresentationCodes = {
  /**
   * xmlAttr: In XML, this property is represented as an attribute not an element.
   */
  XMLAttribute: "xmlAttr",
} as const;

/**
 * How a property is represented on the wire.
 */
export type PropertyRepresentationCodeType = typeof PropertyRepresentationCodes[keyof typeof PropertyRepresentationCodes];
