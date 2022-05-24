import { CodingArgs } from '../fhir/Coding.js';
/**
 * Data types allowed to be used for search parameters.
 */
export declare type SearchParamTypeCodingType = {
    /**
     * composite: A composite search parameter that combines a search on two values together.
     */
    Composite: CodingArgs;
    /**
     * date: Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    DateDateTime: CodingArgs;
    /**
     * number: Search parameter SHALL be a number (a whole number, or a decimal).
     */
    Number: CodingArgs;
    /**
     * quantity: A search parameter that searches on a quantity.
     */
    Quantity: CodingArgs;
    /**
     * reference: A reference to another resource (Reference or canonical).
     */
    Reference: CodingArgs;
    /**
     * special: Special logic applies to this parameter per the description of the search parameter.
     */
    Special: CodingArgs;
    /**
     * string: Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    String: CodingArgs;
    /**
     * token: Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    Token: CodingArgs;
    /**
     * uri: A search parameter that searches on a URI (RFC 3986).
     */
    URI: CodingArgs;
};
/**
 * Data types allowed to be used for search parameters.
 */
export declare const SearchParamTypeCodings: SearchParamTypeCodingType;
//# sourceMappingURL=SearchParamTypeCodings.d.ts.map