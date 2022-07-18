// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/filter-operator|4.3.0
/**
 * The kind of operation to perform as a part of a property based filter.
 */
export const FilterOperatorCodings = {
    /**
     * =: The specified property of the code equals the provided value.
     */
    Equals: {
        display: "Equals",
        code: "=",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * descendent-of: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    DescendentOfBySubsumption: {
        display: "Descendent Of (by subsumption)",
        code: "descendent-of",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * exists: The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    Exists: {
        display: "Exists",
        code: "exists",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * generalizes: Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    GeneralizesBySubsumption: {
        display: "Generalizes (by Subsumption)",
        code: "generalizes",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    InSet: {
        display: "In Set",
        code: "in",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    IsABySubsumption: {
        display: "Is A (by subsumption)",
        code: "is-a",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
     */
    NotIsABySubsumption: {
        display: "Not (Is A) (by subsumption)",
        code: "is-not-a",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    NotInSet: {
        display: "Not in Set",
        code: "not-in",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * regex: The specified property of the code  matches the regex specified in the provided value.
     */
    RegularExpression: {
        display: "Regular Expression",
        code: "regex",
        system: "http://hl7.org/fhir/filter-operator",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyT3BlcmF0b3JDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9GaWx0ZXJPcGVyYXRvckNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsb0VBQW9FO0FBOENwRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLHFDQUFxQztLQUM5QztJQUNEOztPQUVHO0lBQ0gseUJBQXlCLEVBQUU7UUFDekIsT0FBTyxFQUFFLGdDQUFnQztRQUN6QyxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxxQ0FBcUM7S0FDOUM7SUFDRDs7T0FFRztJQUNILHdCQUF3QixFQUFFO1FBQ3hCLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHFDQUFxQztLQUM5QztJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHFDQUFxQztLQUM5QztJQUNEOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUU7UUFDbkIsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxxQ0FBcUM7S0FDOUM7SUFDRDs7T0FFRztJQUNILGlCQUFpQixFQUFFO1FBQ2pCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZmlsdGVyLW9wZXJhdG9yfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIGtpbmQgb2Ygb3BlcmF0aW9uIHRvIHBlcmZvcm0gYXMgYSBwYXJ0IG9mIGEgcHJvcGVydHkgYmFzZWQgZmlsdGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3JDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqID06IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgZXF1YWxzIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBFcXVhbHM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZGVzY2VuZGVudC1vZjogSW5jbHVkZXMgYWxsIGNvbmNlcHQgaWRzIHRoYXQgaGF2ZSBhIHRyYW5zaXRpdmUgaXMtYSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgY29uY2VwdCBJZCBwcm92aWRlZCBhcyB0aGUgdmFsdWUsIGV4Y2x1ZGluZyB0aGUgcHJvdmlkZWQgY29uY2VwdCBpdHNlbGYgaS5lLiBpbmNsdWRlIGRlc2NlbmRhbnQgY29kZXMgb25seSkuXHJcbiAgICovXHJcbiAgRGVzY2VuZGVudE9mQnlTdWJzdW1wdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBleGlzdHM6IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSAoaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB0cnVlOyBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGZhbHNlLCB0aGVuIG1hdGNoZXMgd2hlbiB0aGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGhhcyBubyB2YWx1ZXMpLlxyXG4gICAqL1xyXG4gIEV4aXN0czogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBnZW5lcmFsaXplczogSW5jbHVkZXMgYWxsIGNvbmNlcHQgaWRzIHRoYXQgaGF2ZSBhIHRyYW5zaXRpdmUgaXMtYSByZWxhdGlvbnNoaXAgZnJvbSB0aGUgY29uY2VwdCBJZCBwcm92aWRlZCBhcyB0aGUgdmFsdWUsIGluY2x1ZGluZyB0aGUgcHJvdmlkZWQgY29uY2VwdCBpdHNlbGYgKGkuZS4gaW5jbHVkZSBhbmNlc3RvciBjb2RlcyBhbmQgc2VsZikuXHJcbiAgICovXHJcbiAgR2VuZXJhbGl6ZXNCeVN1YnN1bXB0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluOiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGlzIGluIHRoZSBzZXQgb2YgY29kZXMgb3IgY29uY2VwdHMgc3BlY2lmaWVkIGluIHRoZSBwcm92aWRlZCB2YWx1ZSAoY29tbWEgc2VwYXJhdGVkIGxpc3QpLlxyXG4gICAqL1xyXG4gIEluU2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGlzLWE6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIChpbmNsdWRlIGRlc2NlbmRhbnQgY29kZXMgYW5kIHNlbGYpLlxyXG4gICAqL1xyXG4gIElzQUJ5U3Vic3VtcHRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaXMtbm90LWE6IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgZG9lcyBub3QgaGF2ZSBhbiBpcy1hIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBOb3RJc0FCeVN1YnN1bXB0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5vdC1pbjogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBpcyBub3QgaW4gdGhlIHNldCBvZiBjb2RlcyBvciBjb25jZXB0cyBzcGVjaWZpZWQgaW4gdGhlIHByb3ZpZGVkIHZhbHVlIChjb21tYSBzZXBhcmF0ZWQgbGlzdCkuXHJcbiAgICovXHJcbiAgTm90SW5TZXQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVnZXg6IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgIG1hdGNoZXMgdGhlIHJlZ2V4IHNwZWNpZmllZCBpbiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgUmVndWxhckV4cHJlc3Npb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUga2luZCBvZiBvcGVyYXRpb24gdG8gcGVyZm9ybSBhcyBhIHBhcnQgb2YgYSBwcm9wZXJ0eSBiYXNlZCBmaWx0ZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmlsdGVyT3BlcmF0b3JDb2RpbmdzOkZpbHRlck9wZXJhdG9yQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiA9OiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGVxdWFscyB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgRXF1YWxzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVxdWFsc1wiLFxyXG4gICAgY29kZTogXCI9XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRlc2NlbmRlbnQtb2Y6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBleGNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIGkuZS4gaW5jbHVkZSBkZXNjZW5kYW50IGNvZGVzIG9ubHkpLlxyXG4gICAqL1xyXG4gIERlc2NlbmRlbnRPZkJ5U3Vic3VtcHRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiRGVzY2VuZGVudCBPZiAoYnkgc3Vic3VtcHRpb24pXCIsXHJcbiAgICBjb2RlOiBcImRlc2NlbmRlbnQtb2ZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ZpbHRlci1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZXhpc3RzOiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgKGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdHJ1ZTsgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBmYWxzZSwgdGhlbiBtYXRjaGVzIHdoZW4gdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBoYXMgbm8gdmFsdWVzKS5cclxuICAgKi9cclxuICBFeGlzdHM6IHtcclxuICAgIGRpc3BsYXk6IFwiRXhpc3RzXCIsXHJcbiAgICBjb2RlOiBcImV4aXN0c1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZmlsdGVyLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBnZW5lcmFsaXplczogSW5jbHVkZXMgYWxsIGNvbmNlcHQgaWRzIHRoYXQgaGF2ZSBhIHRyYW5zaXRpdmUgaXMtYSByZWxhdGlvbnNoaXAgZnJvbSB0aGUgY29uY2VwdCBJZCBwcm92aWRlZCBhcyB0aGUgdmFsdWUsIGluY2x1ZGluZyB0aGUgcHJvdmlkZWQgY29uY2VwdCBpdHNlbGYgKGkuZS4gaW5jbHVkZSBhbmNlc3RvciBjb2RlcyBhbmQgc2VsZikuXHJcbiAgICovXHJcbiAgR2VuZXJhbGl6ZXNCeVN1YnN1bXB0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkdlbmVyYWxpemVzIChieSBTdWJzdW1wdGlvbilcIixcclxuICAgIGNvZGU6IFwiZ2VuZXJhbGl6ZXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ZpbHRlci1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW46IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgaXMgaW4gdGhlIHNldCBvZiBjb2RlcyBvciBjb25jZXB0cyBzcGVjaWZpZWQgaW4gdGhlIHByb3ZpZGVkIHZhbHVlIChjb21tYSBzZXBhcmF0ZWQgbGlzdCkuXHJcbiAgICovXHJcbiAgSW5TZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiSW4gU2V0XCIsXHJcbiAgICBjb2RlOiBcImluXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGlzLWE6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIChpbmNsdWRlIGRlc2NlbmRhbnQgY29kZXMgYW5kIHNlbGYpLlxyXG4gICAqL1xyXG4gIElzQUJ5U3Vic3VtcHRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiSXMgQSAoYnkgc3Vic3VtcHRpb24pXCIsXHJcbiAgICBjb2RlOiBcImlzLWFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ZpbHRlci1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaXMtbm90LWE6IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgZG9lcyBub3QgaGF2ZSBhbiBpcy1hIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBOb3RJc0FCeVN1YnN1bXB0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCAoSXMgQSkgKGJ5IHN1YnN1bXB0aW9uKVwiLFxyXG4gICAgY29kZTogXCJpcy1ub3QtYVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZmlsdGVyLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBub3QtaW46IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgaXMgbm90IGluIHRoZSBzZXQgb2YgY29kZXMgb3IgY29uY2VwdHMgc3BlY2lmaWVkIGluIHRoZSBwcm92aWRlZCB2YWx1ZSAoY29tbWEgc2VwYXJhdGVkIGxpc3QpLlxyXG4gICAqL1xyXG4gIE5vdEluU2V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBpbiBTZXRcIixcclxuICAgIGNvZGU6IFwibm90LWluXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlZ2V4OiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlICBtYXRjaGVzIHRoZSByZWdleCBzcGVjaWZpZWQgaW4gdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIFJlZ3VsYXJFeHByZXNzaW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlZ3VsYXIgRXhwcmVzc2lvblwiLFxyXG4gICAgY29kZTogXCJyZWdleFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZmlsdGVyLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19