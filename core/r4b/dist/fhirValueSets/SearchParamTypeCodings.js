// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-param-type|4.3.0
/**
 * Data types allowed to be used for search parameters.
 */
export const SearchParamTypeCodings = {
    /**
     * composite: A composite search parameter that combines a search on two values together.
     */
    Composite: {
        display: "Composite",
        code: "composite",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * date: Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    DateDateTime: {
        display: "Date/DateTime",
        code: "date",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * number: Search parameter SHALL be a number (a whole number, or a decimal).
     */
    Number: {
        display: "Number",
        code: "number",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * quantity: A search parameter that searches on a quantity.
     */
    Quantity: {
        display: "Quantity",
        code: "quantity",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * reference: A reference to another resource (Reference or canonical).
     */
    Reference: {
        display: "Reference",
        code: "reference",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * special: Special logic applies to this parameter per the description of the search parameter.
     */
    Special: {
        display: "Special",
        code: "special",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * string: Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    String: {
        display: "String",
        code: "string",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * token: Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    Token: {
        display: "Token",
        code: "token",
        system: "http://hl7.org/fhir/search-param-type",
    },
    /**
     * uri: A search parameter that searches on a URI (RFC 3986).
     */
    URI: {
        display: "URI",
        code: "uri",
        system: "http://hl7.org/fhir/search-param-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFyYW1UeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU2VhcmNoUGFyYW1UeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxzRUFBc0U7QUE4Q3RFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTZCO0lBQzlEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc2VhcmNoLXBhcmFtLXR5cGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBEYXRhIHR5cGVzIGFsbG93ZWQgdG8gYmUgdXNlZCBmb3Igc2VhcmNoIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTZWFyY2hQYXJhbVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBvc2l0ZTogQSBjb21wb3NpdGUgc2VhcmNoIHBhcmFtZXRlciB0aGF0IGNvbWJpbmVzIGEgc2VhcmNoIG9uIHR3byB2YWx1ZXMgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgQ29tcG9zaXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRhdGU6IFNlYXJjaCBwYXJhbWV0ZXIgaXMgb24gYSBkYXRlL3RpbWUuIFRoZSBkYXRlIGZvcm1hdCBpcyB0aGUgc3RhbmRhcmQgWE1MIGZvcm1hdCwgdGhvdWdoIG90aGVyIGZvcm1hdHMgbWF5IGJlIHN1cHBvcnRlZC5cclxuICAgKi9cclxuICBEYXRlRGF0ZVRpbWU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbnVtYmVyOiBTZWFyY2ggcGFyYW1ldGVyIFNIQUxMIGJlIGEgbnVtYmVyIChhIHdob2xlIG51bWJlciwgb3IgYSBkZWNpbWFsKS5cclxuICAgKi9cclxuICBOdW1iZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcXVhbnRpdHk6IEEgc2VhcmNoIHBhcmFtZXRlciB0aGF0IHNlYXJjaGVzIG9uIGEgcXVhbnRpdHkuXHJcbiAgICovXHJcbiAgUXVhbnRpdHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVmZXJlbmNlOiBBIHJlZmVyZW5jZSB0byBhbm90aGVyIHJlc291cmNlIChSZWZlcmVuY2Ugb3IgY2Fub25pY2FsKS5cclxuICAgKi9cclxuICBSZWZlcmVuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc3BlY2lhbDogU3BlY2lhbCBsb2dpYyBhcHBsaWVzIHRvIHRoaXMgcGFyYW1ldGVyIHBlciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgU3BlY2lhbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdHJpbmc6IFNlYXJjaCBwYXJhbWV0ZXIgaXMgYSBzaW1wbGUgc3RyaW5nLCBsaWtlIGEgbmFtZSBwYXJ0LiBTZWFyY2ggaXMgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgYWNjZW50LWluc2Vuc2l0aXZlLiBNYXkgbWF0Y2gganVzdCB0aGUgc3RhcnQgb2YgYSBzdHJpbmcuIFN0cmluZyBwYXJhbWV0ZXJzIG1heSBjb250YWluIHNwYWNlcy5cclxuICAgKi9cclxuICBTdHJpbmc6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdG9rZW46IFNlYXJjaCBwYXJhbWV0ZXIgb24gYSBjb2RlZCBlbGVtZW50IG9yIGlkZW50aWZpZXIuIE1heSBiZSB1c2VkIHRvIHNlYXJjaCB0aHJvdWdoIHRoZSB0ZXh0LCBkaXNwbGF5LCBjb2RlIGFuZCBjb2RlL2NvZGVzeXN0ZW0gKGZvciBjb2RlcykgYW5kIGxhYmVsLCBzeXN0ZW0gYW5kIGtleSAoZm9yIGlkZW50aWZpZXIpLiBJdHMgdmFsdWUgaXMgZWl0aGVyIGEgc3RyaW5nIG9yIGEgcGFpciBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBzZXBhcmF0ZWQgYnkgYSBcInxcIiwgZGVwZW5kaW5nIG9uIHRoZSBtb2RpZmllciB1c2VkLlxyXG4gICAqL1xyXG4gIFRva2VuOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVyaTogQSBzZWFyY2ggcGFyYW1ldGVyIHRoYXQgc2VhcmNoZXMgb24gYSBVUkkgKFJGQyAzOTg2KS5cclxuICAgKi9cclxuICBVUkk6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIHR5cGVzIGFsbG93ZWQgdG8gYmUgdXNlZCBmb3Igc2VhcmNoIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2VhcmNoUGFyYW1UeXBlQ29kaW5nczpTZWFyY2hQYXJhbVR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBvc2l0ZTogQSBjb21wb3NpdGUgc2VhcmNoIHBhcmFtZXRlciB0aGF0IGNvbWJpbmVzIGEgc2VhcmNoIG9uIHR3byB2YWx1ZXMgdG9nZXRoZXIuXHJcbiAgICovXHJcbiAgQ29tcG9zaXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbXBvc2l0ZVwiLFxyXG4gICAgY29kZTogXCJjb21wb3NpdGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1wYXJhbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkYXRlOiBTZWFyY2ggcGFyYW1ldGVyIGlzIG9uIGEgZGF0ZS90aW1lLiBUaGUgZGF0ZSBmb3JtYXQgaXMgdGhlIHN0YW5kYXJkIFhNTCBmb3JtYXQsIHRob3VnaCBvdGhlciBmb3JtYXRzIG1heSBiZSBzdXBwb3J0ZWQuXHJcbiAgICovXHJcbiAgRGF0ZURhdGVUaW1lOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRhdGUvRGF0ZVRpbWVcIixcclxuICAgIGNvZGU6IFwiZGF0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLXBhcmFtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG51bWJlcjogU2VhcmNoIHBhcmFtZXRlciBTSEFMTCBiZSBhIG51bWJlciAoYSB3aG9sZSBudW1iZXIsIG9yIGEgZGVjaW1hbCkuXHJcbiAgICovXHJcbiAgTnVtYmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIk51bWJlclwiLFxyXG4gICAgY29kZTogXCJudW1iZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1wYXJhbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBxdWFudGl0eTogQSBzZWFyY2ggcGFyYW1ldGVyIHRoYXQgc2VhcmNoZXMgb24gYSBxdWFudGl0eS5cclxuICAgKi9cclxuICBRdWFudGl0eToge1xyXG4gICAgZGlzcGxheTogXCJRdWFudGl0eVwiLFxyXG4gICAgY29kZTogXCJxdWFudGl0eVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLXBhcmFtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlZmVyZW5jZTogQSByZWZlcmVuY2UgdG8gYW5vdGhlciByZXNvdXJjZSAoUmVmZXJlbmNlIG9yIGNhbm9uaWNhbCkuXHJcbiAgICovXHJcbiAgUmVmZXJlbmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlZmVyZW5jZVwiLFxyXG4gICAgY29kZTogXCJyZWZlcmVuY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1wYXJhbS10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzcGVjaWFsOiBTcGVjaWFsIGxvZ2ljIGFwcGxpZXMgdG8gdGhpcyBwYXJhbWV0ZXIgcGVyIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgc2VhcmNoIHBhcmFtZXRlci5cclxuICAgKi9cclxuICBTcGVjaWFsOiB7XHJcbiAgICBkaXNwbGF5OiBcIlNwZWNpYWxcIixcclxuICAgIGNvZGU6IFwic3BlY2lhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLXBhcmFtLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0cmluZzogU2VhcmNoIHBhcmFtZXRlciBpcyBhIHNpbXBsZSBzdHJpbmcsIGxpa2UgYSBuYW1lIHBhcnQuIFNlYXJjaCBpcyBjYXNlLWluc2Vuc2l0aXZlIGFuZCBhY2NlbnQtaW5zZW5zaXRpdmUuIE1heSBtYXRjaCBqdXN0IHRoZSBzdGFydCBvZiBhIHN0cmluZy4gU3RyaW5nIHBhcmFtZXRlcnMgbWF5IGNvbnRhaW4gc3BhY2VzLlxyXG4gICAqL1xyXG4gIFN0cmluZzoge1xyXG4gICAgZGlzcGxheTogXCJTdHJpbmdcIixcclxuICAgIGNvZGU6IFwic3RyaW5nXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtcGFyYW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdG9rZW46IFNlYXJjaCBwYXJhbWV0ZXIgb24gYSBjb2RlZCBlbGVtZW50IG9yIGlkZW50aWZpZXIuIE1heSBiZSB1c2VkIHRvIHNlYXJjaCB0aHJvdWdoIHRoZSB0ZXh0LCBkaXNwbGF5LCBjb2RlIGFuZCBjb2RlL2NvZGVzeXN0ZW0gKGZvciBjb2RlcykgYW5kIGxhYmVsLCBzeXN0ZW0gYW5kIGtleSAoZm9yIGlkZW50aWZpZXIpLiBJdHMgdmFsdWUgaXMgZWl0aGVyIGEgc3RyaW5nIG9yIGEgcGFpciBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBzZXBhcmF0ZWQgYnkgYSBcInxcIiwgZGVwZW5kaW5nIG9uIHRoZSBtb2RpZmllciB1c2VkLlxyXG4gICAqL1xyXG4gIFRva2VuOiB7XHJcbiAgICBkaXNwbGF5OiBcIlRva2VuXCIsXHJcbiAgICBjb2RlOiBcInRva2VuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtcGFyYW0tdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdXJpOiBBIHNlYXJjaCBwYXJhbWV0ZXIgdGhhdCBzZWFyY2hlcyBvbiBhIFVSSSAoUkZDIDM5ODYpLlxyXG4gICAqL1xyXG4gIFVSSToge1xyXG4gICAgZGlzcGxheTogXCJVUklcIixcclxuICAgIGNvZGU6IFwidXJpXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtcGFyYW0tdHlwZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==