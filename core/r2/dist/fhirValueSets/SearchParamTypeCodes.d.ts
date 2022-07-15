/**
 * Data types allowed to be used for search parameters.
 */
export declare const SearchParamTypeCodes: {
    /**
     * composite: A composite search parameter that combines a search on two values together.
     */
    readonly Composite: "composite";
    /**
     * date: Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    readonly DateDateTime: "date";
    /**
     * number: Search parameter SHALL be a number (a whole number, or a decimal).
     */
    readonly Number: "number";
    /**
     * quantity: A search parameter that searches on a quantity.
     */
    readonly Quantity: "quantity";
    /**
     * reference: A reference to another resource.
     */
    readonly Reference: "reference";
    /**
     * string: Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    readonly String: "string";
    /**
     * token: Search parameter on a coded element or identifier. May be used to search through the text, displayname, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    readonly Token: "token";
    /**
     * uri: A search parameter that searches on a URI (RFC 3986).
     */
    readonly URI: "uri";
};
/**
 * Data types allowed to be used for search parameters.
 */
export declare type SearchParamTypeCodeType = typeof SearchParamTypeCodes[keyof typeof SearchParamTypeCodes];
//# sourceMappingURL=SearchParamTypeCodes.d.ts.map