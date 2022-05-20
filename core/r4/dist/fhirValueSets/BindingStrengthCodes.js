// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/binding-strength|4.0.1
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export const BindingStrengthCodes = {
    /**
     * example: Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.
     */
    Example: "example",
    /**
     * extensible: To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
     */
    Extensible: "extensible",
    /**
     * preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
     */
    Preferred: "preferred",
    /**
     * required: To be conformant, the concept in this element SHALL be from the specified value set.
     */
    Required: "required",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZ1N0cmVuZ3RoQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0JpbmRpbmdTdHJlbmd0aENvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHFFQUFxRTtBQUVyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7Q0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2JpbmRpbmctc3RyZW5ndGh8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0aW9uIG9mIHRoZSBkZWdyZWUgb2YgY29uZm9ybWFuY2UgZXhwZWN0YXRpb25zIGFzc29jaWF0ZWQgd2l0aCBhIGJpbmRpbmcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmluZGluZ1N0cmVuZ3RoQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogZXhhbXBsZTogSW5zdGFuY2VzIGFyZSBub3QgZXhwZWN0ZWQgb3IgZXZlbiBlbmNvdXJhZ2VkIHRvIGRyYXcgZnJvbSB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldC4gIFRoZSB2YWx1ZSBzZXQgbWVyZWx5IHByb3ZpZGVzIGV4YW1wbGVzIG9mIHRoZSB0eXBlcyBvZiBjb25jZXB0cyBpbnRlbmRlZCB0byBiZSBpbmNsdWRlZC5cclxuICAgKi9cclxuICBFeGFtcGxlOiBcImV4YW1wbGVcIixcclxuICAvKipcclxuICAgKiBleHRlbnNpYmxlOiBUbyBiZSBjb25mb3JtYW50LCB0aGUgY29uY2VwdCBpbiB0aGlzIGVsZW1lbnQgU0hBTEwgYmUgZnJvbSB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldCBpZiBhbnkgb2YgdGhlIGNvZGVzIHdpdGhpbiB0aGUgdmFsdWUgc2V0IGNhbiBhcHBseSB0byB0aGUgY29uY2VwdCBiZWluZyBjb21tdW5pY2F0ZWQuICBJZiB0aGUgdmFsdWUgc2V0IGRvZXMgbm90IGNvdmVyIHRoZSBjb25jZXB0IChiYXNlZCBvbiBodW1hbiByZXZpZXcpLCBhbHRlcm5hdGUgY29kaW5ncyAob3IsIGRhdGEgdHlwZSBhbGxvd2luZywgdGV4dCkgbWF5IGJlIGluY2x1ZGVkIGluc3RlYWQuXHJcbiAgICovXHJcbiAgRXh0ZW5zaWJsZTogXCJleHRlbnNpYmxlXCIsXHJcbiAgLyoqXHJcbiAgICogcHJlZmVycmVkOiBJbnN0YW5jZXMgYXJlIGVuY291cmFnZWQgdG8gZHJhdyBmcm9tIHRoZSBzcGVjaWZpZWQgY29kZXMgZm9yIGludGVyb3BlcmFiaWxpdHkgcHVycG9zZXMgYnV0IGFyZSBub3QgcmVxdWlyZWQgdG8gZG8gc28gdG8gYmUgY29uc2lkZXJlZCBjb25mb3JtYW50LlxyXG4gICAqL1xyXG4gIFByZWZlcnJlZDogXCJwcmVmZXJyZWRcIixcclxuICAvKipcclxuICAgKiByZXF1aXJlZDogVG8gYmUgY29uZm9ybWFudCwgdGhlIGNvbmNlcHQgaW4gdGhpcyBlbGVtZW50IFNIQUxMIGJlIGZyb20gdGhlIHNwZWNpZmllZCB2YWx1ZSBzZXQuXHJcbiAgICovXHJcbiAgUmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0aW9uIG9mIHRoZSBkZWdyZWUgb2YgY29uZm9ybWFuY2UgZXhwZWN0YXRpb25zIGFzc29jaWF0ZWQgd2l0aCBhIGJpbmRpbmcuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCaW5kaW5nU3RyZW5ndGhDb2RlVHlwZSA9IHR5cGVvZiBCaW5kaW5nU3RyZW5ndGhDb2Rlc1trZXlvZiB0eXBlb2YgQmluZGluZ1N0cmVuZ3RoQ29kZXNdO1xyXG4iXX0=