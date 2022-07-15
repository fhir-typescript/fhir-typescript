// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-modifier-code|4.3.0
/**
 * A supported modifier for a search parameter.
 */
export const SearchModifierCodings = {
    /**
     * above: The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).
     */
    Above: {
        display: "Above",
        code: "above",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * below: The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).
     */
    Below: {
        display: "Below",
        code: "below",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * contains: The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.
     */
    Contains: {
        display: "Contains",
        code: "contains",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * exact: The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).
     */
    Exact: {
        display: "Exact",
        code: "exact",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * identifier: The search parameter applies to the identifier on the resource, not the reference.
     */
    Identifier: {
        display: "Identifier",
        code: "identifier",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.
     */
    In: {
        display: "In",
        code: "in",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * missing: The search parameter returns resources that have a value or not.
     */
    Missing: {
        display: "Missing",
        code: "missing",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * not: The search parameter returns resources that do not contain a match.
     */
    Not: {
        display: "Not",
        code: "not",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * not-in: The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
     */
    NotIn: {
        display: "Not In",
        code: "not-in",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * ofType: The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    OfType: {
        display: "Of Type",
        code: "ofType",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * text: The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.
     */
    Text: {
        display: "Text",
        code: "text",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
    /**
     * type: The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).
     */
    Type: {
        display: "Type",
        code: "type",
        system: "http://hl7.org/fhir/search-modifier-code",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoTW9kaWZpZXJDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TZWFyY2hNb2RpZmllckNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBMER6RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILEVBQUUsRUFBRTtRQUNGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc2VhcmNoLW1vZGlmaWVyLWNvZGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBBIHN1cHBvcnRlZCBtb2RpZmllciBmb3IgYSBzZWFyY2ggcGFyYW1ldGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2VhcmNoTW9kaWZpZXJDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFib3ZlOiBUaGUgc2VhcmNoIHBhcmFtZXRlciB0ZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpbiBhIHJlc291cmNlIHN1YnN1bWVzIHRoZSBzcGVjaWZpZWQgdmFsdWUgKGlzLWEsIG9yIGhpZXJhcmNoaWNhbCByZWxhdGlvbnNoaXBzKS5cclxuICAgKi9cclxuICBBYm92ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBiZWxvdzogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaW4gYSByZXNvdXJjZSBpcyBzdWJzdW1lZCBieSB0aGUgc3BlY2lmaWVkIHZhbHVlIChpcy1hLCBvciBoaWVyYXJjaGljYWwgcmVsYXRpb25zaGlwcykuXHJcbiAgICovXHJcbiAgQmVsb3c6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29udGFpbnM6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgaW5jbHVkZSB0aGUgc3VwcGxpZWQgcGFyYW1ldGVyIHZhbHVlIGFueXdoZXJlIHdpdGhpbiB0aGUgZmllbGQgYmVpbmcgc2VhcmNoZWQuXHJcbiAgICovXHJcbiAgQ29udGFpbnM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXhhY3Q6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgaGF2ZSBhIHZhbHVlIHRoYXQgZXhhY3RseSBtYXRjaGVzIHRoZSBzdXBwbGllZCBwYXJhbWV0ZXIgKHRoZSB3aG9sZSBzdHJpbmcsIGluY2x1ZGluZyBjYXNpbmcgYW5kIGFjY2VudHMpLlxyXG4gICAqL1xyXG4gIEV4YWN0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGlkZW50aWZpZXI6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGFwcGxpZXMgdG8gdGhlIGlkZW50aWZpZXIgb24gdGhlIHJlc291cmNlLCBub3QgdGhlIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICBJZGVudGlmaWVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBhIFVSSSAocmVsYXRpdmUgb3IgYWJzb2x1dGUpIHRoYXQgaWRlbnRpZmllcyBhIHZhbHVlIHNldCwgYW5kIHRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIGNvZGluZyBpcyBpbiB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldC5cclxuICAgKi9cclxuICBJbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtaXNzaW5nOiBUaGUgc2VhcmNoIHBhcmFtZXRlciByZXR1cm5zIHJlc291cmNlcyB0aGF0IGhhdmUgYSB2YWx1ZSBvciBub3QuXHJcbiAgICovXHJcbiAgTWlzc2luZzogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBub3Q6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgZG8gbm90IGNvbnRhaW4gYSBtYXRjaC5cclxuICAgKi9cclxuICBOb3Q6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LWluOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBhIFVSSSAocmVsYXRpdmUgb3IgYWJzb2x1dGUpIHRoYXQgaWRlbnRpZmllcyBhIHZhbHVlIHNldCwgYW5kIHRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIGNvZGluZyBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCB2YWx1ZSBzZXQuXHJcbiAgICovXHJcbiAgTm90SW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb2ZUeXBlOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBoYXMgdGhlIGZvcm1hdCBzeXN0ZW18Y29kZXx2YWx1ZSwgd2hlcmUgdGhlIHN5c3RlbSBhbmQgY29kZSByZWZlciB0byBhbiBJZGVudGlmaWVyLnR5cGUuY29kaW5nLnN5c3RlbSBhbmQgLmNvZGUsIGFuZCBtYXRjaCBpZiBhbnkgb2YgdGhlIHR5cGUgY29kZXMgbWF0Y2guIEFsbCAzIHBhcnRzIG11c3QgYmUgcHJlc2VudC5cclxuICAgKi9cclxuICBPZlR5cGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdGV4dDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgcHJvY2Vzc2VkIGFzIGEgc3RyaW5nIHRoYXQgc2VhcmNoZXMgdGV4dCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvZGUvdmFsdWUgLSBlaXRoZXIgQ29kZWFibGVDb25jZXB0LnRleHQsIENvZGluZy5kaXNwbGF5LCBvciBJZGVudGlmaWVyLnR5cGUudGV4dC5cclxuICAgKi9cclxuICBUZXh0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHR5cGU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIG9ubHkgYXBwbGllcyB0byB0aGUgUmVzb3VyY2UgVHlwZSBzcGVjaWZpZWQgYXMgYSBtb2RpZmllciAoZS5nLiB0aGUgbW9kaWZpZXIgaXMgbm90IGFjdHVhbGx5IDp0eXBlLCBidXQgOlBhdGllbnQgZXRjLikuXHJcbiAgICovXHJcbiAgVHlwZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc3VwcG9ydGVkIG1vZGlmaWVyIGZvciBhIHNlYXJjaCBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2VhcmNoTW9kaWZpZXJDb2RpbmdzOlNlYXJjaE1vZGlmaWVyQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhYm92ZTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaW4gYSByZXNvdXJjZSBzdWJzdW1lcyB0aGUgc3BlY2lmaWVkIHZhbHVlIChpcy1hLCBvciBoaWVyYXJjaGljYWwgcmVsYXRpb25zaGlwcykuXHJcbiAgICovXHJcbiAgQWJvdmU6IHtcclxuICAgIGRpc3BsYXk6IFwiQWJvdmVcIixcclxuICAgIGNvZGU6IFwiYWJvdmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBiZWxvdzogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaW4gYSByZXNvdXJjZSBpcyBzdWJzdW1lZCBieSB0aGUgc3BlY2lmaWVkIHZhbHVlIChpcy1hLCBvciBoaWVyYXJjaGljYWwgcmVsYXRpb25zaGlwcykuXHJcbiAgICovXHJcbiAgQmVsb3c6IHtcclxuICAgIGRpc3BsYXk6IFwiQmVsb3dcIixcclxuICAgIGNvZGU6IFwiYmVsb3dcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb250YWluczogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgcmV0dXJucyByZXNvdXJjZXMgdGhhdCBpbmNsdWRlIHRoZSBzdXBwbGllZCBwYXJhbWV0ZXIgdmFsdWUgYW55d2hlcmUgd2l0aGluIHRoZSBmaWVsZCBiZWluZyBzZWFyY2hlZC5cclxuICAgKi9cclxuICBDb250YWluczoge1xyXG4gICAgZGlzcGxheTogXCJDb250YWluc1wiLFxyXG4gICAgY29kZTogXCJjb250YWluc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGV4YWN0OiBUaGUgc2VhcmNoIHBhcmFtZXRlciByZXR1cm5zIHJlc291cmNlcyB0aGF0IGhhdmUgYSB2YWx1ZSB0aGF0IGV4YWN0bHkgbWF0Y2hlcyB0aGUgc3VwcGxpZWQgcGFyYW1ldGVyICh0aGUgd2hvbGUgc3RyaW5nLCBpbmNsdWRpbmcgY2FzaW5nIGFuZCBhY2NlbnRzKS5cclxuICAgKi9cclxuICBFeGFjdDoge1xyXG4gICAgZGlzcGxheTogXCJFeGFjdFwiLFxyXG4gICAgY29kZTogXCJleGFjdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGlkZW50aWZpZXI6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGFwcGxpZXMgdG8gdGhlIGlkZW50aWZpZXIgb24gdGhlIHJlc291cmNlLCBub3QgdGhlIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICBJZGVudGlmaWVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIklkZW50aWZpZXJcIixcclxuICAgIGNvZGU6IFwiaWRlbnRpZmllclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBhIFVSSSAocmVsYXRpdmUgb3IgYWJzb2x1dGUpIHRoYXQgaWRlbnRpZmllcyBhIHZhbHVlIHNldCwgYW5kIHRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIGNvZGluZyBpcyBpbiB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldC5cclxuICAgKi9cclxuICBJbjoge1xyXG4gICAgZGlzcGxheTogXCJJblwiLFxyXG4gICAgY29kZTogXCJpblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG1pc3Npbmc6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIHJldHVybnMgcmVzb3VyY2VzIHRoYXQgaGF2ZSBhIHZhbHVlIG9yIG5vdC5cclxuICAgKi9cclxuICBNaXNzaW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1pc3NpbmdcIixcclxuICAgIGNvZGU6IFwibWlzc2luZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vdDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgcmV0dXJucyByZXNvdXJjZXMgdGhhdCBkbyBub3QgY29udGFpbiBhIG1hdGNoLlxyXG4gICAqL1xyXG4gIE5vdDoge1xyXG4gICAgZGlzcGxheTogXCJOb3RcIixcclxuICAgIGNvZGU6IFwibm90XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtbW9kaWZpZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LWluOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBhIFVSSSAocmVsYXRpdmUgb3IgYWJzb2x1dGUpIHRoYXQgaWRlbnRpZmllcyBhIHZhbHVlIHNldCwgYW5kIHRoZSBzZWFyY2ggcGFyYW1ldGVyIHRlc3RzIHdoZXRoZXIgdGhlIGNvZGluZyBpcyBub3QgaW4gdGhlIHNwZWNpZmllZCB2YWx1ZSBzZXQuXHJcbiAgICovXHJcbiAgTm90SW46IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IEluXCIsXHJcbiAgICBjb2RlOiBcIm5vdC1pblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9mVHlwZTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaGFzIHRoZSBmb3JtYXQgc3lzdGVtfGNvZGV8dmFsdWUsIHdoZXJlIHRoZSBzeXN0ZW0gYW5kIGNvZGUgcmVmZXIgdG8gYW4gSWRlbnRpZmllci50eXBlLmNvZGluZy5zeXN0ZW0gYW5kIC5jb2RlLCBhbmQgbWF0Y2ggaWYgYW55IG9mIHRoZSB0eXBlIGNvZGVzIG1hdGNoLiBBbGwgMyBwYXJ0cyBtdXN0IGJlIHByZXNlbnQuXHJcbiAgICovXHJcbiAgT2ZUeXBlOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9mIFR5cGVcIixcclxuICAgIGNvZGU6IFwib2ZUeXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zZWFyY2gtbW9kaWZpZXItY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdGV4dDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgcHJvY2Vzc2VkIGFzIGEgc3RyaW5nIHRoYXQgc2VhcmNoZXMgdGV4dCBhc3NvY2lhdGVkIHdpdGggdGhlIGNvZGUvdmFsdWUgLSBlaXRoZXIgQ29kZWFibGVDb25jZXB0LnRleHQsIENvZGluZy5kaXNwbGF5LCBvciBJZGVudGlmaWVyLnR5cGUudGV4dC5cclxuICAgKi9cclxuICBUZXh0OiB7XHJcbiAgICBkaXNwbGF5OiBcIlRleHRcIixcclxuICAgIGNvZGU6IFwidGV4dFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VhcmNoLW1vZGlmaWVyLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHR5cGU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIG9ubHkgYXBwbGllcyB0byB0aGUgUmVzb3VyY2UgVHlwZSBzcGVjaWZpZWQgYXMgYSBtb2RpZmllciAoZS5nLiB0aGUgbW9kaWZpZXIgaXMgbm90IGFjdHVhbGx5IDp0eXBlLCBidXQgOlBhdGllbnQgZXRjLikuXHJcbiAgICovXHJcbiAgVHlwZToge1xyXG4gICAgZGlzcGxheTogXCJUeXBlXCIsXHJcbiAgICBjb2RlOiBcInR5cGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlYXJjaC1tb2RpZmllci1jb2RlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19