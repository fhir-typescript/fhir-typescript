// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/filter-operator|3.0.2
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
     * descendent-of: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself (i.e. include child codes)
     */
    DescendentOfBySubsumption: {
        display: "Descendent Of (by subsumption)",
        code: "descendent-of",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * exists: The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values)
     */
    Exists: {
        display: "Exists",
        code: "exists",
        system: "http://hl7.org/fhir/filter-operator",
    },
    /**
     * generalizes: Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (e.g. include parent codes)
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
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (i.e. include child codes)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyT3BlcmF0b3JDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9GaWx0ZXJPcGVyYXRvckNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0VBQW9FO0FBOENwRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLHFDQUFxQztLQUM5QztJQUNEOztPQUVHO0lBQ0gseUJBQXlCLEVBQUU7UUFDekIsT0FBTyxFQUFFLGdDQUFnQztRQUN6QyxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxxQ0FBcUM7S0FDOUM7SUFDRDs7T0FFRztJQUNILHdCQUF3QixFQUFFO1FBQ3hCLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHFDQUFxQztLQUM5QztJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHFDQUFxQztLQUM5QztJQUNEOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUU7UUFDbkIsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxxQ0FBcUM7S0FDOUM7SUFDRDs7T0FFRztJQUNILGlCQUFpQixFQUFFO1FBQ2pCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9maWx0ZXItb3BlcmF0b3J8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUga2luZCBvZiBvcGVyYXRpb24gdG8gcGVyZm9ybSBhcyBhIHBhcnQgb2YgYSBwcm9wZXJ0eSBiYXNlZCBmaWx0ZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvckNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogPTogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBlcXVhbHMgdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIEVxdWFsczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkZXNjZW5kZW50LW9mOiBJbmNsdWRlcyBhbGwgY29uY2VwdCBpZHMgdGhhdCBoYXZlIGEgdHJhbnNpdGl2ZSBpcy1hIHJlbGF0aW9uc2hpcCB3aXRoIHRoZSBjb25jZXB0IElkIHByb3ZpZGVkIGFzIHRoZSB2YWx1ZSwgZXhjbHVkaW5nIHRoZSBwcm92aWRlZCBjb25jZXB0IGl0c2VsZiAoaS5lLiBpbmNsdWRlIGNoaWxkIGNvZGVzKVxyXG4gICAqL1xyXG4gIERlc2NlbmRlbnRPZkJ5U3Vic3VtcHRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXhpc3RzOiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgKGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgdHJ1ZTsgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBmYWxzZSwgdGhlbiBtYXRjaGVzIHdoZW4gdGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBoYXMgbm8gdmFsdWVzKVxyXG4gICAqL1xyXG4gIEV4aXN0czogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBnZW5lcmFsaXplczogSW5jbHVkZXMgYWxsIGNvbmNlcHQgaWRzIHRoYXQgaGF2ZSBhIHRyYW5zaXRpdmUgaXMtYSByZWxhdGlvbnNoaXAgZnJvbSB0aGUgY29uY2VwdCBJZCBwcm92aWRlZCBhcyB0aGUgdmFsdWUsIGluY2x1ZGluZyB0aGUgcHJvdmlkZWQgY29uY2VwdCBpdHNlbGYgKGUuZy4gaW5jbHVkZSBwYXJlbnQgY29kZXMpXHJcbiAgICovXHJcbiAgR2VuZXJhbGl6ZXNCeVN1YnN1bXB0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluOiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGlzIGluIHRoZSBzZXQgb2YgY29kZXMgb3IgY29uY2VwdHMgc3BlY2lmaWVkIGluIHRoZSBwcm92aWRlZCB2YWx1ZSAoY29tbWEgc2VwYXJhdGVkIGxpc3QpLlxyXG4gICAqL1xyXG4gIEluU2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGlzLWE6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIChpLmUuIGluY2x1ZGUgY2hpbGQgY29kZXMpXHJcbiAgICovXHJcbiAgSXNBQnlTdWJzdW1wdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpcy1ub3QtYTogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBkb2VzIG5vdCBoYXZlIGFuIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIE5vdElzQUJ5U3Vic3VtcHRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LWluOiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGlzIG5vdCBpbiB0aGUgc2V0IG9mIGNvZGVzIG9yIGNvbmNlcHRzIHNwZWNpZmllZCBpbiB0aGUgcHJvdmlkZWQgdmFsdWUgKGNvbW1hIHNlcGFyYXRlZCBsaXN0KS5cclxuICAgKi9cclxuICBOb3RJblNldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWdleDogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSAgbWF0Y2hlcyB0aGUgcmVnZXggc3BlY2lmaWVkIGluIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBSZWd1bGFyRXhwcmVzc2lvbjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBraW5kIG9mIG9wZXJhdGlvbiB0byBwZXJmb3JtIGFzIGEgcGFydCBvZiBhIHByb3BlcnR5IGJhc2VkIGZpbHRlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJPcGVyYXRvckNvZGluZ3M6RmlsdGVyT3BlcmF0b3JDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqID06IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgZXF1YWxzIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBFcXVhbHM6IHtcclxuICAgIGRpc3BsYXk6IFwiRXF1YWxzXCIsXHJcbiAgICBjb2RlOiBcIj1cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ZpbHRlci1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGVzY2VuZGVudC1vZjogSW5jbHVkZXMgYWxsIGNvbmNlcHQgaWRzIHRoYXQgaGF2ZSBhIHRyYW5zaXRpdmUgaXMtYSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgY29uY2VwdCBJZCBwcm92aWRlZCBhcyB0aGUgdmFsdWUsIGV4Y2x1ZGluZyB0aGUgcHJvdmlkZWQgY29uY2VwdCBpdHNlbGYgKGkuZS4gaW5jbHVkZSBjaGlsZCBjb2RlcylcclxuICAgKi9cclxuICBEZXNjZW5kZW50T2ZCeVN1YnN1bXB0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRlc2NlbmRlbnQgT2YgKGJ5IHN1YnN1bXB0aW9uKVwiLFxyXG4gICAgY29kZTogXCJkZXNjZW5kZW50LW9mXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGV4aXN0czogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIChpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHRydWU7IGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgZmFsc2UsIHRoZW4gbWF0Y2hlcyB3aGVuIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgaGFzIG5vIHZhbHVlcylcclxuICAgKi9cclxuICBFeGlzdHM6IHtcclxuICAgIGRpc3BsYXk6IFwiRXhpc3RzXCIsXHJcbiAgICBjb2RlOiBcImV4aXN0c1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZmlsdGVyLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBnZW5lcmFsaXplczogSW5jbHVkZXMgYWxsIGNvbmNlcHQgaWRzIHRoYXQgaGF2ZSBhIHRyYW5zaXRpdmUgaXMtYSByZWxhdGlvbnNoaXAgZnJvbSB0aGUgY29uY2VwdCBJZCBwcm92aWRlZCBhcyB0aGUgdmFsdWUsIGluY2x1ZGluZyB0aGUgcHJvdmlkZWQgY29uY2VwdCBpdHNlbGYgKGUuZy4gaW5jbHVkZSBwYXJlbnQgY29kZXMpXHJcbiAgICovXHJcbiAgR2VuZXJhbGl6ZXNCeVN1YnN1bXB0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkdlbmVyYWxpemVzIChieSBTdWJzdW1wdGlvbilcIixcclxuICAgIGNvZGU6IFwiZ2VuZXJhbGl6ZXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ZpbHRlci1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW46IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgaXMgaW4gdGhlIHNldCBvZiBjb2RlcyBvciBjb25jZXB0cyBzcGVjaWZpZWQgaW4gdGhlIHByb3ZpZGVkIHZhbHVlIChjb21tYSBzZXBhcmF0ZWQgbGlzdCkuXHJcbiAgICovXHJcbiAgSW5TZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiSW4gU2V0XCIsXHJcbiAgICBjb2RlOiBcImluXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGlzLWE6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIChpLmUuIGluY2x1ZGUgY2hpbGQgY29kZXMpXHJcbiAgICovXHJcbiAgSXNBQnlTdWJzdW1wdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJJcyBBIChieSBzdWJzdW1wdGlvbilcIixcclxuICAgIGNvZGU6IFwiaXMtYVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZmlsdGVyLW9wZXJhdG9yXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpcy1ub3QtYTogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBkb2VzIG5vdCBoYXZlIGFuIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIE5vdElzQUJ5U3Vic3VtcHRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IChJcyBBKSAoYnkgc3Vic3VtcHRpb24pXCIsXHJcbiAgICBjb2RlOiBcImlzLW5vdC1hXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vdC1pbjogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBpcyBub3QgaW4gdGhlIHNldCBvZiBjb2RlcyBvciBjb25jZXB0cyBzcGVjaWZpZWQgaW4gdGhlIHByb3ZpZGVkIHZhbHVlIChjb21tYSBzZXBhcmF0ZWQgbGlzdCkuXHJcbiAgICovXHJcbiAgTm90SW5TZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IGluIFNldFwiLFxyXG4gICAgY29kZTogXCJub3QtaW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ZpbHRlci1vcGVyYXRvclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVnZXg6IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgIG1hdGNoZXMgdGhlIHJlZ2V4IHNwZWNpZmllZCBpbiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgUmVndWxhckV4cHJlc3Npb246IHtcclxuICAgIGRpc3BsYXk6IFwiUmVndWxhciBFeHByZXNzaW9uXCIsXHJcbiAgICBjb2RlOiBcInJlZ2V4XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9maWx0ZXItb3BlcmF0b3JcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=