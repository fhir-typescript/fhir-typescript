import { Coding } from '../fhir/Coding.js';
/**
 * How a property is represented when serialized.
 */
export declare const PropertyRepresentationCodings: {
    /**
     * cdaText: Use CDA narrative instead of XHTML.
     */
    readonly CDATextFormat: Coding;
    /**
     * typeAttr: The type of this element is indicated using xsi:type.
     */
    readonly TypeAttribute: Coding;
    /**
     * xhtml: The property is represented using XHTML.
     */
    readonly XHTML: Coding;
    /**
     * xmlAttr: In XML, this property is represented as an attribute not an element.
     */
    readonly XMLAttribute: Coding;
    /**
     * xmlText: This element is represented using the XML text attribute (primitives only).
     */
    readonly XMLText: Coding;
};
/**
 * How a property is represented when serialized.
 */
export declare type PropertyRepresentationCodingType = typeof PropertyRepresentationCodings;
//# sourceMappingURL=PropertyRepresentationCodings.d.ts.map