// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-param-type|1.0.2
/**
 * Data types allowed to be used for search parameters.
 */
export const SearchParamTypeCodes = {
    /**
     * composite: A composite search parameter that combines a search on two values together.
     */
    Composite: "composite",
    /**
     * date: Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    DateDateTime: "date",
    /**
     * number: Search parameter SHALL be a number (a whole number, or a decimal).
     */
    Number: "number",
    /**
     * quantity: A search parameter that searches on a quantity.
     */
    Quantity: "quantity",
    /**
     * reference: A reference to another resource.
     */
    Reference: "reference",
    /**
     * string: Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    String: "string",
    /**
     * token: Search parameter on a coded element or identifier. May be used to search through the text, displayname, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    Token: "token",
    /**
     * uri: A search parameter that searches on a URI (RFC 3986).
     */
    URI: "uri",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUGFyYW1UeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1NlYXJjaFBhcmFtVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQUV0RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsTUFBTTtJQUNwQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILEdBQUcsRUFBRSxLQUFLO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zZWFyY2gtcGFyYW0tdHlwZXwxLjAuMlxyXG5cclxuLyoqXHJcbiAqIERhdGEgdHlwZXMgYWxsb3dlZCB0byBiZSB1c2VkIGZvciBzZWFyY2ggcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hQYXJhbVR5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBjb21wb3NpdGU6IEEgY29tcG9zaXRlIHNlYXJjaCBwYXJhbWV0ZXIgdGhhdCBjb21iaW5lcyBhIHNlYXJjaCBvbiB0d28gdmFsdWVzIHRvZ2V0aGVyLlxyXG4gICAqL1xyXG4gIENvbXBvc2l0ZTogXCJjb21wb3NpdGVcIixcclxuICAvKipcclxuICAgKiBkYXRlOiBTZWFyY2ggcGFyYW1ldGVyIGlzIG9uIGEgZGF0ZS90aW1lLiBUaGUgZGF0ZSBmb3JtYXQgaXMgdGhlIHN0YW5kYXJkIFhNTCBmb3JtYXQsIHRob3VnaCBvdGhlciBmb3JtYXRzIG1heSBiZSBzdXBwb3J0ZWQuXHJcbiAgICovXHJcbiAgRGF0ZURhdGVUaW1lOiBcImRhdGVcIixcclxuICAvKipcclxuICAgKiBudW1iZXI6IFNlYXJjaCBwYXJhbWV0ZXIgU0hBTEwgYmUgYSBudW1iZXIgKGEgd2hvbGUgbnVtYmVyLCBvciBhIGRlY2ltYWwpLlxyXG4gICAqL1xyXG4gIE51bWJlcjogXCJudW1iZXJcIixcclxuICAvKipcclxuICAgKiBxdWFudGl0eTogQSBzZWFyY2ggcGFyYW1ldGVyIHRoYXQgc2VhcmNoZXMgb24gYSBxdWFudGl0eS5cclxuICAgKi9cclxuICBRdWFudGl0eTogXCJxdWFudGl0eVwiLFxyXG4gIC8qKlxyXG4gICAqIHJlZmVyZW5jZTogQSByZWZlcmVuY2UgdG8gYW5vdGhlciByZXNvdXJjZS5cclxuICAgKi9cclxuICBSZWZlcmVuY2U6IFwicmVmZXJlbmNlXCIsXHJcbiAgLyoqXHJcbiAgICogc3RyaW5nOiBTZWFyY2ggcGFyYW1ldGVyIGlzIGEgc2ltcGxlIHN0cmluZywgbGlrZSBhIG5hbWUgcGFydC4gU2VhcmNoIGlzIGNhc2UtaW5zZW5zaXRpdmUgYW5kIGFjY2VudC1pbnNlbnNpdGl2ZS4gTWF5IG1hdGNoIGp1c3QgdGhlIHN0YXJ0IG9mIGEgc3RyaW5nLiBTdHJpbmcgcGFyYW1ldGVycyBtYXkgY29udGFpbiBzcGFjZXMuXHJcbiAgICovXHJcbiAgU3RyaW5nOiBcInN0cmluZ1wiLFxyXG4gIC8qKlxyXG4gICAqIHRva2VuOiBTZWFyY2ggcGFyYW1ldGVyIG9uIGEgY29kZWQgZWxlbWVudCBvciBpZGVudGlmaWVyLiBNYXkgYmUgdXNlZCB0byBzZWFyY2ggdGhyb3VnaCB0aGUgdGV4dCwgZGlzcGxheW5hbWUsIGNvZGUgYW5kIGNvZGUvY29kZXN5c3RlbSAoZm9yIGNvZGVzKSBhbmQgbGFiZWwsIHN5c3RlbSBhbmQga2V5IChmb3IgaWRlbnRpZmllcikuIEl0cyB2YWx1ZSBpcyBlaXRoZXIgYSBzdHJpbmcgb3IgYSBwYWlyIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIHNlcGFyYXRlZCBieSBhIFwifFwiLCBkZXBlbmRpbmcgb24gdGhlIG1vZGlmaWVyIHVzZWQuXHJcbiAgICovXHJcbiAgVG9rZW46IFwidG9rZW5cIixcclxuICAvKipcclxuICAgKiB1cmk6IEEgc2VhcmNoIHBhcmFtZXRlciB0aGF0IHNlYXJjaGVzIG9uIGEgVVJJIChSRkMgMzk4NikuXHJcbiAgICovXHJcbiAgVVJJOiBcInVyaVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIERhdGEgdHlwZXMgYWxsb3dlZCB0byBiZSB1c2VkIGZvciBzZWFyY2ggcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNlYXJjaFBhcmFtVHlwZUNvZGVUeXBlID0gdHlwZW9mIFNlYXJjaFBhcmFtVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBTZWFyY2hQYXJhbVR5cGVDb2Rlc107XHJcbiJdfQ==