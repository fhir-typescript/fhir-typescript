/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export declare const NamingsystemIdentifierTypeCodes: {
    /**
     * oid: An ISO object identifier; e.g. 1.2.3.4.5.
     */
    readonly OID: "oid";
    /**
     * other: Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
     */
    readonly Other: "other";
    /**
     * uri: A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
     */
    readonly URI: "uri";
    /**
     * uuid: A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
     */
    readonly UUID: "uuid";
};
/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export declare type NamingsystemIdentifierTypeCodeType = typeof NamingsystemIdentifierTypeCodes[keyof typeof NamingsystemIdentifierTypeCodes];
//# sourceMappingURL=NamingsystemIdentifierTypeCodes.d.ts.map