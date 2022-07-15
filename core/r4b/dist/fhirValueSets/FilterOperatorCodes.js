// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/filter-operator|4.3.0
/**
 * The kind of operation to perform as a part of a property based filter.
 */
export const FilterOperatorCodes = {
    /**
     * =: The specified property of the code equals the provided value.
     */
    Equals: "=",
    /**
     * descendent-of: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    DescendentOfBySubsumption: "descendent-of",
    /**
     * exists: The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    Exists: "exists",
    /**
     * generalizes: Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    GeneralizesBySubsumption: "generalizes",
    /**
     * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    InSet: "in",
    /**
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    IsABySubsumption: "is-a",
    /**
     * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
     */
    NotIsABySubsumption: "is-not-a",
    /**
     * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    NotInSet: "not-in",
    /**
     * regex: The specified property of the code  matches the regex specified in the provided value.
     */
    RegularExpression: "regex",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyT3BlcmF0b3JDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRmlsdGVyT3BlcmF0b3JDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxvRUFBb0U7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILE1BQU0sRUFBRSxHQUFHO0lBQ1g7O09BRUc7SUFDSCx5QkFBeUIsRUFBRSxlQUFlO0lBQzFDOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSxhQUFhO0lBQ3ZDOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUk7SUFDWDs7T0FFRztJQUNILGdCQUFnQixFQUFFLE1BQU07SUFDeEI7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxVQUFVO0lBQy9COztPQUVHO0lBQ0gsUUFBUSxFQUFFLFFBQVE7SUFDbEI7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxPQUFPO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2ZpbHRlci1vcGVyYXRvcnw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSBraW5kIG9mIG9wZXJhdGlvbiB0byBwZXJmb3JtIGFzIGEgcGFydCBvZiBhIHByb3BlcnR5IGJhc2VkIGZpbHRlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJPcGVyYXRvckNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqID06IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgZXF1YWxzIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBFcXVhbHM6IFwiPVwiLFxyXG4gIC8qKlxyXG4gICAqIGRlc2NlbmRlbnQtb2Y6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBleGNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIGkuZS4gaW5jbHVkZSBkZXNjZW5kYW50IGNvZGVzIG9ubHkpLlxyXG4gICAqL1xyXG4gIERlc2NlbmRlbnRPZkJ5U3Vic3VtcHRpb246IFwiZGVzY2VuZGVudC1vZlwiLFxyXG4gIC8qKlxyXG4gICAqIGV4aXN0czogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBoYXMgYXQgbGVhc3Qgb25lIHZhbHVlIChpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIHRydWU7IGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgZmFsc2UsIHRoZW4gbWF0Y2hlcyB3aGVuIHRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgaGFzIG5vIHZhbHVlcykuXHJcbiAgICovXHJcbiAgRXhpc3RzOiBcImV4aXN0c1wiLFxyXG4gIC8qKlxyXG4gICAqIGdlbmVyYWxpemVzOiBJbmNsdWRlcyBhbGwgY29uY2VwdCBpZHMgdGhhdCBoYXZlIGEgdHJhbnNpdGl2ZSBpcy1hIHJlbGF0aW9uc2hpcCBmcm9tIHRoZSBjb25jZXB0IElkIHByb3ZpZGVkIGFzIHRoZSB2YWx1ZSwgaW5jbHVkaW5nIHRoZSBwcm92aWRlZCBjb25jZXB0IGl0c2VsZiAoaS5lLiBpbmNsdWRlIGFuY2VzdG9yIGNvZGVzIGFuZCBzZWxmKS5cclxuICAgKi9cclxuICBHZW5lcmFsaXplc0J5U3Vic3VtcHRpb246IFwiZ2VuZXJhbGl6ZXNcIixcclxuICAvKipcclxuICAgKiBpbjogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBpcyBpbiB0aGUgc2V0IG9mIGNvZGVzIG9yIGNvbmNlcHRzIHNwZWNpZmllZCBpbiB0aGUgcHJvdmlkZWQgdmFsdWUgKGNvbW1hIHNlcGFyYXRlZCBsaXN0KS5cclxuICAgKi9cclxuICBJblNldDogXCJpblwiLFxyXG4gIC8qKlxyXG4gICAqIGlzLWE6IEluY2x1ZGVzIGFsbCBjb25jZXB0IGlkcyB0aGF0IGhhdmUgYSB0cmFuc2l0aXZlIGlzLWEgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNvbmNlcHQgSWQgcHJvdmlkZWQgYXMgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIHByb3ZpZGVkIGNvbmNlcHQgaXRzZWxmIChpbmNsdWRlIGRlc2NlbmRhbnQgY29kZXMgYW5kIHNlbGYpLlxyXG4gICAqL1xyXG4gIElzQUJ5U3Vic3VtcHRpb246IFwiaXMtYVwiLFxyXG4gIC8qKlxyXG4gICAqIGlzLW5vdC1hOiBUaGUgc3BlY2lmaWVkIHByb3BlcnR5IG9mIHRoZSBjb2RlIGRvZXMgbm90IGhhdmUgYW4gaXMtYSByZWxhdGlvbnNoaXAgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgTm90SXNBQnlTdWJzdW1wdGlvbjogXCJpcy1ub3QtYVwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1pbjogVGhlIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY29kZSBpcyBub3QgaW4gdGhlIHNldCBvZiBjb2RlcyBvciBjb25jZXB0cyBzcGVjaWZpZWQgaW4gdGhlIHByb3ZpZGVkIHZhbHVlIChjb21tYSBzZXBhcmF0ZWQgbGlzdCkuXHJcbiAgICovXHJcbiAgTm90SW5TZXQ6IFwibm90LWluXCIsXHJcbiAgLyoqXHJcbiAgICogcmVnZXg6IFRoZSBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGNvZGUgIG1hdGNoZXMgdGhlIHJlZ2V4IHNwZWNpZmllZCBpbiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgUmVndWxhckV4cHJlc3Npb246IFwicmVnZXhcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUga2luZCBvZiBvcGVyYXRpb24gdG8gcGVyZm9ybSBhcyBhIHBhcnQgb2YgYSBwcm9wZXJ0eSBiYXNlZCBmaWx0ZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWx0ZXJPcGVyYXRvckNvZGVUeXBlID0gdHlwZW9mIEZpbHRlck9wZXJhdG9yQ29kZXNba2V5b2YgdHlwZW9mIEZpbHRlck9wZXJhdG9yQ29kZXNdO1xyXG4iXX0=