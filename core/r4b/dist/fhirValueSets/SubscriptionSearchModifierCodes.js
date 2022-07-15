// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-search-modifier|4.3.0
/**
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 */
export const SubscriptionSearchModifierCodes = {
    /**
     * =: Used to match a value according to FHIR Search rules (e.g., Patient/123, Encounter/2002).
     */
    Equals: "=",
    /**
     * above: The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code.
     */
    Above: "above",
    /**
     * ap: The value for the parameter in the resource is approximately the same to the provided value. Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate.
     */
    Approximately: "ap",
    /**
     * below: The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code.
     */
    Below: "below",
    /**
     * eb: The value for the parameter in the resource ends before the provided value.
     */
    EndsBefore: "eb",
    /**
     * eq: The value for the parameter in the resource is equal to the provided value.
     */
    Equal: "eq",
    /**
     * ge: The value for the parameter in the resource is greater or equal to the provided value.
     */
    GreaterThanOrEqual: "ge",
    /**
     * gt: The value for the parameter in the resource is greater than the provided value.
     */
    GreaterThan: "gt",
    /**
     * in: The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is present in the specified Group, List, or Value Set.
     */
    In: "in",
    /**
     * le: The value for the parameter in the resource is less or equal to the provided value.
     */
    LessThanOrEqual: "le",
    /**
     * lt: The value for the parameter in the resource is less than the provided value.
     */
    LessThan: "lt",
    /**
     * ne: The value for the parameter in the resource is not equal to the provided value.
     */
    NotEqual: "ne",
    /**
     * not-in: The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is NOT present in the specified Group, List, or Value Set.
     */
    NotIn: "not-in",
    /**
     * of-type: The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    OfType: "of-type",
    /**
     * sa: The value for the parameter in the resource starts after the provided value.
     */
    StartsAfter: "sa",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uU2VhcmNoTW9kaWZpZXJDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU3Vic2NyaXB0aW9uU2VhcmNoTW9kaWZpZXJDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxpRkFBaUY7QUFFakY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRztJQUM3Qzs7T0FFRztJQUNILE1BQU0sRUFBRSxHQUFHO0lBQ1g7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsYUFBYSxFQUFFLElBQUk7SUFDbkI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLElBQUk7SUFDaEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsSUFBSTtJQUNYOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsSUFBSTtJQUN4Qjs7T0FFRztJQUNILFdBQVcsRUFBRSxJQUFJO0lBQ2pCOztPQUVHO0lBQ0gsRUFBRSxFQUFFLElBQUk7SUFDUjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJO0lBQ3JCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLElBQUk7SUFDZDs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJO0lBQ2Q7O09BRUc7SUFDSCxLQUFLLEVBQUUsUUFBUTtJQUNmOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFNBQVM7SUFDakI7O09BRUc7SUFDSCxXQUFXLEVBQUUsSUFBSTtDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N1YnNjcmlwdGlvbi1zZWFyY2gtbW9kaWZpZXJ8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBGSElSIHNlYXJjaCBtb2RpZmllcnMgYWxsb3dlZCBmb3IgdXNlIGluIFN1YnNjcmlwdGlvbnMgYW5kIFN1YnNjcmlwdGlvblRvcGljcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdWJzY3JpcHRpb25TZWFyY2hNb2RpZmllckNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqID06IFVzZWQgdG8gbWF0Y2ggYSB2YWx1ZSBhY2NvcmRpbmcgdG8gRkhJUiBTZWFyY2ggcnVsZXMgKGUuZy4sIFBhdGllbnQvMTIzLCBFbmNvdW50ZXIvMjAwMikuXHJcbiAgICovXHJcbiAgRXF1YWxzOiBcIj1cIixcclxuICAvKipcclxuICAgKiBhYm92ZTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYSBjb25jZXB0IHdpdGggdGhlIGZvcm0gW3N5c3RlbV18W2NvZGVdLCBhbmQgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgY29kaW5nIGluIGEgcmVzb3VyY2Ugc3Vic3VtZXMgdGhlIHNwZWNpZmllZCBzZWFyY2ggY29kZS5cclxuICAgKi9cclxuICBBYm92ZTogXCJhYm92ZVwiLFxyXG4gIC8qKlxyXG4gICAqIGFwOiBUaGUgdmFsdWUgZm9yIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIHJlc291cmNlIGlzIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLiBOb3RlIHRoYXQgdGhlIHJlY29tbWVuZGVkIHZhbHVlIGZvciB0aGUgYXBwcm94aW1hdGlvbiBpcyAxMCUgb2YgdGhlIHN0YXRlZCB2YWx1ZSAob3IgZm9yIGEgZGF0ZSwgMTAlIG9mIHRoZSBnYXAgYmV0d2VlbiBub3cgYW5kIHRoZSBkYXRlKSwgYnV0IHN5c3RlbXMgbWF5IGNob29zZSBvdGhlciB2YWx1ZXMgd2hlcmUgYXBwcm9wcmlhdGUuXHJcbiAgICovXHJcbiAgQXBwcm94aW1hdGVseTogXCJhcFwiLFxyXG4gIC8qKlxyXG4gICAqIGJlbG93OiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBhIGNvbmNlcHQgd2l0aCB0aGUgZm9ybSBbc3lzdGVtXXxbY29kZV0sIGFuZCB0aGUgc2VhcmNoIHBhcmFtZXRlciB0ZXN0cyB3aGV0aGVyIHRoZSBjb2RpbmcgaW4gYSByZXNvdXJjZSBpcyBzdWJzdW1lZCBieSB0aGUgc3BlY2lmaWVkIHNlYXJjaCBjb2RlLlxyXG4gICAqL1xyXG4gIEJlbG93OiBcImJlbG93XCIsXHJcbiAgLyoqXHJcbiAgICogZWI6IFRoZSB2YWx1ZSBmb3IgdGhlIHBhcmFtZXRlciBpbiB0aGUgcmVzb3VyY2UgZW5kcyBiZWZvcmUgdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIEVuZHNCZWZvcmU6IFwiZWJcIixcclxuICAvKipcclxuICAgKiBlcTogVGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGluIHRoZSByZXNvdXJjZSBpcyBlcXVhbCB0byB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgRXF1YWw6IFwiZXFcIixcclxuICAvKipcclxuICAgKiBnZTogVGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGluIHRoZSByZXNvdXJjZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICAgKi9cclxuICBHcmVhdGVyVGhhbk9yRXF1YWw6IFwiZ2VcIixcclxuICAvKipcclxuICAgKiBndDogVGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGluIHRoZSByZXNvdXJjZSBpcyBncmVhdGVyIHRoYW4gdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIEdyZWF0ZXJUaGFuOiBcImd0XCIsXHJcbiAgLyoqXHJcbiAgICogaW46IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGEgbWVtYmVyIG9mIGEgR3JvdXAgb3IgTGlzdCwgb3IgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYSBVUkkgKHJlbGF0aXZlIG9yIGFic29sdXRlKSB0aGF0IGlkZW50aWZpZXMgYSB2YWx1ZSBzZXQsIGFuZCB0aGUgc2VhcmNoIHBhcmFtZXRlciB0ZXN0cyB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBwcmVzZW50IGluIHRoZSBzcGVjaWZpZWQgR3JvdXAsIExpc3QsIG9yIFZhbHVlIFNldC5cclxuICAgKi9cclxuICBJbjogXCJpblwiLFxyXG4gIC8qKlxyXG4gICAqIGxlOiBUaGUgdmFsdWUgZm9yIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIHJlc291cmNlIGlzIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIExlc3NUaGFuT3JFcXVhbDogXCJsZVwiLFxyXG4gIC8qKlxyXG4gICAqIGx0OiBUaGUgdmFsdWUgZm9yIHRoZSBwYXJhbWV0ZXIgaW4gdGhlIHJlc291cmNlIGlzIGxlc3MgdGhhbiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAgICovXHJcbiAgTGVzc1RoYW46IFwibHRcIixcclxuICAvKipcclxuICAgKiBuZTogVGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGluIHRoZSByZXNvdXJjZSBpcyBub3QgZXF1YWwgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIE5vdEVxdWFsOiBcIm5lXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LWluOiBUaGUgc2VhcmNoIHBhcmFtZXRlciBpcyBhIG1lbWJlciBvZiBhIEdyb3VwIG9yIExpc3QsIG9yIHRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGEgVVJJIChyZWxhdGl2ZSBvciBhYnNvbHV0ZSkgdGhhdCBpZGVudGlmaWVzIGEgdmFsdWUgc2V0LCBhbmQgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdGVzdHMgd2hldGhlciB0aGUgdmFsdWUgaXMgTk9UIHByZXNlbnQgaW4gdGhlIHNwZWNpZmllZCBHcm91cCwgTGlzdCwgb3IgVmFsdWUgU2V0LlxyXG4gICAqL1xyXG4gIE5vdEluOiBcIm5vdC1pblwiLFxyXG4gIC8qKlxyXG4gICAqIG9mLXR5cGU6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGhhcyB0aGUgZm9ybWF0IHN5c3RlbXxjb2RlfHZhbHVlLCB3aGVyZSB0aGUgc3lzdGVtIGFuZCBjb2RlIHJlZmVyIHRvIGHCoElkZW50aWZpZXIudHlwZS5jb2Rpbmcuc3lzdGVtwqBhbmTCoC5jb2RlLCBhbmQgbWF0Y2ggaWYgYW55IG9mIHRoZSB0eXBlIGNvZGVzIG1hdGNoLiBBbGwgMyBwYXJ0cyBtdXN0IGJlIHByZXNlbnQuXHJcbiAgICovXHJcbiAgT2ZUeXBlOiBcIm9mLXR5cGVcIixcclxuICAvKipcclxuICAgKiBzYTogVGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGluIHRoZSByZXNvdXJjZSBzdGFydHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHZhbHVlLlxyXG4gICAqL1xyXG4gIFN0YXJ0c0FmdGVyOiBcInNhXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogRkhJUiBzZWFyY2ggbW9kaWZpZXJzIGFsbG93ZWQgZm9yIHVzZSBpbiBTdWJzY3JpcHRpb25zIGFuZCBTdWJzY3JpcHRpb25Ub3BpY3MuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25TZWFyY2hNb2RpZmllckNvZGVUeXBlID0gdHlwZW9mIFN1YnNjcmlwdGlvblNlYXJjaE1vZGlmaWVyQ29kZXNba2V5b2YgdHlwZW9mIFN1YnNjcmlwdGlvblNlYXJjaE1vZGlmaWVyQ29kZXNdO1xyXG4iXX0=