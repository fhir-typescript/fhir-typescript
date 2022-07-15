/**
 * How a property is represented when serialized.
 */
export declare const PropertyRepresentationCodes: {
    /**
     * cdaText: Use CDA narrative instead of XHTML.
     */
    readonly CDATextFormat: "cdaText";
    /**
     * typeAttr: The type of this element is indicated using xsi:type.
     */
    readonly TypeAttribute: "typeAttr";
    /**
     * xhtml: The property is represented using XHTML.
     */
    readonly XHTML: "xhtml";
    /**
     * xmlAttr: In XML, this property is represented as an attribute not an element.
     */
    readonly XMLAttribute: "xmlAttr";
    /**
     * xmlText: This element is represented using the XML text attribute (primitives only).
     */
    readonly XMLText: "xmlText";
};
/**
 * How a property is represented when serialized.
 */
export declare type PropertyRepresentationCodeType = typeof PropertyRepresentationCodes[keyof typeof PropertyRepresentationCodes];
//# sourceMappingURL=PropertyRepresentationCodes.d.ts.map