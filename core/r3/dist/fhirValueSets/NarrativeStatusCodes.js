// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/narrative-status|3.0.2
/**
 * The status of a resource narrative
 */
export const NarrativeStatusCodes = {
    /**
     * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection
     */
    Additional: "additional",
    /**
     * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case"
     */
    Empty: "empty",
    /**
     * extensions: The contents of the narrative are entirely generated from the structured data in the content and some of the content is generated from extensions
     */
    Extensions: "extensions",
    /**
     * generated: The contents of the narrative are entirely generated from the structured data in the content.
     */
    Generated: "generated",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmFycmF0aXZlU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL05hcnJhdGl2ZVN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHFFQUFxRTtBQUVyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbmFycmF0aXZlLXN0YXR1c3wzLjAuMlxyXG5cclxuLyoqXHJcbiAqIFRoZSBzdGF0dXMgb2YgYSByZXNvdXJjZSBuYXJyYXRpdmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBOYXJyYXRpdmVTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsOiBUaGUgY29udGVudHMgb2YgdGhlIG5hcnJhdGl2ZSBtYXkgY29udGFpbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIG5vdCBmb3VuZCBpbiB0aGUgc3RydWN0dXJlZCBkYXRhLiBOb3RlIHRoYXQgdGhlcmUgaXMgbm8gY29tcHV0YWJsZSB3YXkgdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGV4dHJhIGluZm9ybWF0aW9uIGlzLCBvdGhlciB0aGFuIGJ5IGh1bWFuIGluc3BlY3Rpb25cclxuICAgKi9cclxuICBBZGRpdGlvbmFsOiBcImFkZGl0aW9uYWxcIixcclxuICAvKipcclxuICAgKiBlbXB0eTogVGhlIGNvbnRlbnRzIG9mIHRoZSBuYXJyYXRpdmUgYXJlIHNvbWUgZXF1aXZhbGVudCBvZiBcIk5vIGh1bWFuLXJlYWRhYmxlIHRleHQgcHJvdmlkZWQgaW4gdGhpcyBjYXNlXCJcclxuICAgKi9cclxuICBFbXB0eTogXCJlbXB0eVwiLFxyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2lvbnM6IFRoZSBjb250ZW50cyBvZiB0aGUgbmFycmF0aXZlIGFyZSBlbnRpcmVseSBnZW5lcmF0ZWQgZnJvbSB0aGUgc3RydWN0dXJlZCBkYXRhIGluIHRoZSBjb250ZW50IGFuZCBzb21lIG9mIHRoZSBjb250ZW50IGlzIGdlbmVyYXRlZCBmcm9tIGV4dGVuc2lvbnNcclxuICAgKi9cclxuICBFeHRlbnNpb25zOiBcImV4dGVuc2lvbnNcIixcclxuICAvKipcclxuICAgKiBnZW5lcmF0ZWQ6IFRoZSBjb250ZW50cyBvZiB0aGUgbmFycmF0aXZlIGFyZSBlbnRpcmVseSBnZW5lcmF0ZWQgZnJvbSB0aGUgc3RydWN0dXJlZCBkYXRhIGluIHRoZSBjb250ZW50LlxyXG4gICAqL1xyXG4gIEdlbmVyYXRlZDogXCJnZW5lcmF0ZWRcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgc3RhdHVzIG9mIGEgcmVzb3VyY2UgbmFycmF0aXZlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOYXJyYXRpdmVTdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBOYXJyYXRpdmVTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgTmFycmF0aXZlU3RhdHVzQ29kZXNdO1xyXG4iXX0=