// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-entry-mode|4.3.0
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export const SearchEntryModeCodes = {
    /**
     * include: This resource is returned because it is referred to from another resource in the search set.
     */
    Include: "include",
    /**
     * match: This resource matched the search specification.
     */
    Match: "match",
    /**
     * outcome: An OperationOutcome that provides additional information about the processing of a search.
     */
    Outcome: "outcome",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRW50cnlNb2RlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1NlYXJjaEVudHJ5TW9kZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHNFQUFzRTtBQUV0RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zZWFyY2gtZW50cnktbW9kZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFdoeSBhbiBlbnRyeSBpcyBpbiB0aGUgcmVzdWx0IHNldCAtIHdoZXRoZXIgaXQncyBpbmNsdWRlZCBhcyBhIG1hdGNoIG9yIGJlY2F1c2Ugb2YgYW4gX2luY2x1ZGUgcmVxdWlyZW1lbnQsIG9yIHRvIGNvbnZleSBpbmZvcm1hdGlvbiBvciB3YXJuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzZWFyY2ggcHJvY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hFbnRyeU1vZGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBpbmNsdWRlOiBUaGlzIHJlc291cmNlIGlzIHJldHVybmVkIGJlY2F1c2UgaXQgaXMgcmVmZXJyZWQgdG8gZnJvbSBhbm90aGVyIHJlc291cmNlIGluIHRoZSBzZWFyY2ggc2V0LlxyXG4gICAqL1xyXG4gIEluY2x1ZGU6IFwiaW5jbHVkZVwiLFxyXG4gIC8qKlxyXG4gICAqIG1hdGNoOiBUaGlzIHJlc291cmNlIG1hdGNoZWQgdGhlIHNlYXJjaCBzcGVjaWZpY2F0aW9uLlxyXG4gICAqL1xyXG4gIE1hdGNoOiBcIm1hdGNoXCIsXHJcbiAgLyoqXHJcbiAgICogb3V0Y29tZTogQW4gT3BlcmF0aW9uT3V0Y29tZSB0aGF0IHByb3ZpZGVzIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb2Nlc3Npbmcgb2YgYSBzZWFyY2guXHJcbiAgICovXHJcbiAgT3V0Y29tZTogXCJvdXRjb21lXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogV2h5IGFuIGVudHJ5IGlzIGluIHRoZSByZXN1bHQgc2V0IC0gd2hldGhlciBpdCdzIGluY2x1ZGVkIGFzIGEgbWF0Y2ggb3IgYmVjYXVzZSBvZiBhbiBfaW5jbHVkZSByZXF1aXJlbWVudCwgb3IgdG8gY29udmV5IGluZm9ybWF0aW9uIG9yIHdhcm5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNlYXJjaCBwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2VhcmNoRW50cnlNb2RlQ29kZVR5cGUgPSB0eXBlb2YgU2VhcmNoRW50cnlNb2RlQ29kZXNba2V5b2YgdHlwZW9mIFNlYXJjaEVudHJ5TW9kZUNvZGVzXTtcclxuIl19