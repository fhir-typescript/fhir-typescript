// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/property-representation|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How a property is represented on the wire.
 */
export type PropertyRepresentationCodingType = {
  /**
   * xmlAttr: In XML, this property is represented as an attribute not an element.
   */
  XMLAttribute: CodingArgs;
}

/**
 * How a property is represented on the wire.
 */
export const PropertyRepresentationCodings:PropertyRepresentationCodingType = {
  /**
   * xmlAttr: In XML, this property is represented as an attribute not an element.
   */
  XMLAttribute: {
    display: "XML Attribute",
    code: "xmlAttr",
    system: "http://hl7.org/fhir/property-representation",
  },
} as const;