// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/concept-map-equivalence|1.0.2
/**
 * The degree of equivalence between concepts.
 */
export const ConceptMapEquivalenceCodes = {
    /**
     * disjoint: This is an explicit assertion that there is no mapping between the source and target concept.
     */
    Disjoint: "disjoint",
    /**
     * equal: The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).
     */
    Equal: "equal",
    /**
     * equivalent: The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).
     */
    Equivalent: "equivalent",
    /**
     * inexact: The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Inexact: "inexact",
    /**
     * narrower: The target mapping is narrower in meaning that the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Narrower: "narrower",
    /**
     * specializes: The target mapping specializes the meaning of the source concept (e.g. the target is-a source).
     */
    Specializes: "specializes",
    /**
     * subsumes: The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).
     */
    Subsumes: "subsumes",
    /**
     * unmatched: There is no match for this concept in the destination concept system.
     */
    Unmatched: "unmatched",
    /**
     * wider: The target mapping is wider in meaning than the source concept.
     */
    Wider: "wider",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY2VwdE1hcEVxdWl2YWxlbmNlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbmNlcHRNYXBFcXVpdmFsZW5jZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7SUFDMUI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87Q0FDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmNlcHQtbWFwLWVxdWl2YWxlbmNlfDEuMC4yXHJcblxyXG4vKipcclxuICogVGhlIGRlZ3JlZSBvZiBlcXVpdmFsZW5jZSBiZXR3ZWVuIGNvbmNlcHRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbmNlcHRNYXBFcXVpdmFsZW5jZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGRpc2pvaW50OiBUaGlzIGlzIGFuIGV4cGxpY2l0IGFzc2VydGlvbiB0aGF0IHRoZXJlIGlzIG5vIG1hcHBpbmcgYmV0d2VlbiB0aGUgc291cmNlIGFuZCB0YXJnZXQgY29uY2VwdC5cclxuICAgKi9cclxuICBEaXNqb2ludDogXCJkaXNqb2ludFwiLFxyXG4gIC8qKlxyXG4gICAqIGVxdWFsOiBUaGUgZGVmaW5pdGlvbnMgb2YgdGhlIGNvbmNlcHRzIGFyZSBleGFjdGx5IHRoZSBzYW1lIChpLmUuIG9ubHkgZ3JhbW1hdGljYWwgZGlmZmVyZW5jZXMpIGFuZCBzdHJ1Y3R1cmFsIGltcGxpY2F0aW9ucyBvZiBtZWFuaW5nIGFyZSBpZGVudGljYWwgb3IgaXJyZWxldmFudCAoaS5lLiBpbnRlbnRpb25hbGx5IGlkZW50aWNhbCkuXHJcbiAgICovXHJcbiAgRXF1YWw6IFwiZXF1YWxcIixcclxuICAvKipcclxuICAgKiBlcXVpdmFsZW50OiBUaGUgZGVmaW5pdGlvbnMgb2YgdGhlIGNvbmNlcHRzIG1lYW4gdGhlIHNhbWUgdGhpbmcgKGluY2x1ZGluZyB3aGVuIHN0cnVjdHVyYWwgaW1wbGljYXRpb25zIG9mIG1lYW5pbmcgYXJlIGNvbnNpZGVyZWQpIChpLmUuIGV4dGVuc2lvbmFsbHkgaWRlbnRpY2FsKS5cclxuICAgKi9cclxuICBFcXVpdmFsZW50OiBcImVxdWl2YWxlbnRcIixcclxuICAvKipcclxuICAgKiBpbmV4YWN0OiBUaGUgdGFyZ2V0IG1hcHBpbmcgb3ZlcmxhcHMgd2l0aCB0aGUgc291cmNlIGNvbmNlcHQsIGJ1dCBib3RoIHNvdXJjZSBhbmQgdGFyZ2V0IGNvdmVyIGFkZGl0aW9uYWwgbWVhbmluZywgb3IgdGhlIGRlZmluaXRpb25zIGFyZSBpbXByZWNpc2UgYW5kIGl0IGlzIHVuY2VydGFpbiB3aGV0aGVyIHRoZXkgaGF2ZSB0aGUgc2FtZSBib3VuZGFyaWVzIHRvIHRoZWlyIG1lYW5pbmcuIFRoZSBzZW5zZSBpbiB3aGljaCB0aGUgbWFwcGluZyBpcyBuYXJyb3dlciBTSEFMTCBiZSBkZXNjcmliZWQgaW4gdGhlIGNvbW1lbnRzIGluIHRoaXMgY2FzZSwgYW5kIGFwcGxpY2F0aW9ucyBzaG91bGQgYmUgY2FyZWZ1bCB3aGVuIGF0dGVtcHRpbmcgdG8gdXNlIHRoZXNlIG1hcHBpbmdzIG9wZXJhdGlvbmFsbHkuXHJcbiAgICovXHJcbiAgSW5leGFjdDogXCJpbmV4YWN0XCIsXHJcbiAgLyoqXHJcbiAgICogbmFycm93ZXI6IFRoZSB0YXJnZXQgbWFwcGluZyBpcyBuYXJyb3dlciBpbiBtZWFuaW5nIHRoYXQgdGhlIHNvdXJjZSBjb25jZXB0LiBUaGUgc2Vuc2UgaW4gd2hpY2ggdGhlIG1hcHBpbmcgaXMgbmFycm93ZXIgU0hBTEwgYmUgZGVzY3JpYmVkIGluIHRoZSBjb21tZW50cyBpbiB0aGlzIGNhc2UsIGFuZCBhcHBsaWNhdGlvbnMgc2hvdWxkIGJlIGNhcmVmdWwgd2hlbiBhdHRlbXB0aW5nIHRvIHVzZSB0aGVzZSBtYXBwaW5ncyBvcGVyYXRpb25hbGx5LlxyXG4gICAqL1xyXG4gIE5hcnJvd2VyOiBcIm5hcnJvd2VyXCIsXHJcbiAgLyoqXHJcbiAgICogc3BlY2lhbGl6ZXM6IFRoZSB0YXJnZXQgbWFwcGluZyBzcGVjaWFsaXplcyB0aGUgbWVhbmluZyBvZiB0aGUgc291cmNlIGNvbmNlcHQgKGUuZy4gdGhlIHRhcmdldCBpcy1hIHNvdXJjZSkuXHJcbiAgICovXHJcbiAgU3BlY2lhbGl6ZXM6IFwic3BlY2lhbGl6ZXNcIixcclxuICAvKipcclxuICAgKiBzdWJzdW1lczogVGhlIHRhcmdldCBtYXBwaW5nIHN1YnN1bWVzIHRoZSBtZWFuaW5nIG9mIHRoZSBzb3VyY2UgY29uY2VwdCAoZS5nLiB0aGUgc291cmNlIGlzLWEgdGFyZ2V0KS5cclxuICAgKi9cclxuICBTdWJzdW1lczogXCJzdWJzdW1lc1wiLFxyXG4gIC8qKlxyXG4gICAqIHVubWF0Y2hlZDogVGhlcmUgaXMgbm8gbWF0Y2ggZm9yIHRoaXMgY29uY2VwdCBpbiB0aGUgZGVzdGluYXRpb24gY29uY2VwdCBzeXN0ZW0uXHJcbiAgICovXHJcbiAgVW5tYXRjaGVkOiBcInVubWF0Y2hlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHdpZGVyOiBUaGUgdGFyZ2V0IG1hcHBpbmcgaXMgd2lkZXIgaW4gbWVhbmluZyB0aGFuIHRoZSBzb3VyY2UgY29uY2VwdC5cclxuICAgKi9cclxuICBXaWRlcjogXCJ3aWRlclwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWdyZWUgb2YgZXF1aXZhbGVuY2UgYmV0d2VlbiBjb25jZXB0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmNlcHRNYXBFcXVpdmFsZW5jZUNvZGVUeXBlID0gdHlwZW9mIENvbmNlcHRNYXBFcXVpdmFsZW5jZUNvZGVzW2tleW9mIHR5cGVvZiBDb25jZXB0TWFwRXF1aXZhbGVuY2VDb2Rlc107XHJcbiJdfQ==