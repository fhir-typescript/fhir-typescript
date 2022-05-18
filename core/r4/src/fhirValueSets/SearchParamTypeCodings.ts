// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-param-type|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Data types allowed to be used for search parameters.
 */
export const SearchParamTypeCodings = {
  /**
   * composite: A composite search parameter that combines a search on two values together.
   */
  Composite: new Coding({
    display: "Composite",
    code: "composite",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * date: Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
   */
  DateDateTime: new Coding({
    display: "Date/DateTime",
    code: "date",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * number: Search parameter SHALL be a number (a whole number, or a decimal).
   */
  Number: new Coding({
    display: "Number",
    code: "number",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * quantity: A search parameter that searches on a quantity.
   */
  Quantity: new Coding({
    display: "Quantity",
    code: "quantity",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * reference: A reference to another resource (Reference or canonical).
   */
  Reference: new Coding({
    display: "Reference",
    code: "reference",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * special: Special logic applies to this parameter per the description of the search parameter.
   */
  Special: new Coding({
    display: "Special",
    code: "special",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * string: Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
   */
  String: new Coding({
    display: "String",
    code: "string",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * token: Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
   */
  Token: new Coding({
    display: "Token",
    code: "token",
    system: "http://hl7.org/fhir/search-param-type",
  }),
  /**
   * uri: A search parameter that searches on a URI (RFC 3986).
   */
  URI: new Coding({
    display: "URI",
    code: "uri",
    system: "http://hl7.org/fhir/search-param-type",
  }),
} as const;

/**
 * Data types allowed to be used for search parameters.
 */
export type SearchParamTypeCodingType = typeof SearchParamTypeCodings;