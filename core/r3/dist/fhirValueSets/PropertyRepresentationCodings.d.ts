import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a property is represented when serialized.
 */
export declare type PropertyRepresentationCodingType = {
    /**
     * cdaText: Use CDA narrative instead of XHTML
     */
    CDATextFormat: CodingArgs;
    /**
     * typeAttr: The type of this element is indicated using xsi:type
     */
    TypeAttribute: CodingArgs;
    /**
     * xhtml: The property is represented using XHTML
     */
    XHTML: CodingArgs;
    /**
     * xmlAttr: In XML, this property is represented as an attribute not an element.
     */
    XMLAttribute: CodingArgs;
    /**
     * xmlText: This element is represented using the XML text attribute (primitives only)
     */
    XMLText: CodingArgs;
};
/**
 * How a property is represented when serialized.
 */
export declare const PropertyRepresentationCodings: PropertyRepresentationCodingType;
//# sourceMappingURL=PropertyRepresentationCodings.d.ts.map