// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/concept-map-equivalence|3.0.2
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
     * narrower: The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Narrower: "narrower",
    /**
     * relatedto: The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known
     */
    RelatedTo: "relatedto",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY2VwdE1hcEVxdWl2YWxlbmNlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbmNlcHRNYXBFcXVpdmFsZW5jZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFlBQVk7SUFDeEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztDQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uY2VwdC1tYXAtZXF1aXZhbGVuY2V8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVncmVlIG9mIGVxdWl2YWxlbmNlIGJldHdlZW4gY29uY2VwdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uY2VwdE1hcEVxdWl2YWxlbmNlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogZGlzam9pbnQ6IFRoaXMgaXMgYW4gZXhwbGljaXQgYXNzZXJ0aW9uIHRoYXQgdGhlcmUgaXMgbm8gbWFwcGluZyBiZXR3ZWVuIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBjb25jZXB0LlxyXG4gICAqL1xyXG4gIERpc2pvaW50OiBcImRpc2pvaW50XCIsXHJcbiAgLyoqXHJcbiAgICogZXF1YWw6IFRoZSBkZWZpbml0aW9ucyBvZiB0aGUgY29uY2VwdHMgYXJlIGV4YWN0bHkgdGhlIHNhbWUgKGkuZS4gb25seSBncmFtbWF0aWNhbCBkaWZmZXJlbmNlcykgYW5kIHN0cnVjdHVyYWwgaW1wbGljYXRpb25zIG9mIG1lYW5pbmcgYXJlIGlkZW50aWNhbCBvciBpcnJlbGV2YW50IChpLmUuIGludGVudGlvbmFsbHkgaWRlbnRpY2FsKS5cclxuICAgKi9cclxuICBFcXVhbDogXCJlcXVhbFwiLFxyXG4gIC8qKlxyXG4gICAqIGVxdWl2YWxlbnQ6IFRoZSBkZWZpbml0aW9ucyBvZiB0aGUgY29uY2VwdHMgbWVhbiB0aGUgc2FtZSB0aGluZyAoaW5jbHVkaW5nIHdoZW4gc3RydWN0dXJhbCBpbXBsaWNhdGlvbnMgb2YgbWVhbmluZyBhcmUgY29uc2lkZXJlZCkgKGkuZS4gZXh0ZW5zaW9uYWxseSBpZGVudGljYWwpLlxyXG4gICAqL1xyXG4gIEVxdWl2YWxlbnQ6IFwiZXF1aXZhbGVudFwiLFxyXG4gIC8qKlxyXG4gICAqIGluZXhhY3Q6IFRoZSB0YXJnZXQgbWFwcGluZyBvdmVybGFwcyB3aXRoIHRoZSBzb3VyY2UgY29uY2VwdCwgYnV0IGJvdGggc291cmNlIGFuZCB0YXJnZXQgY292ZXIgYWRkaXRpb25hbCBtZWFuaW5nLCBvciB0aGUgZGVmaW5pdGlvbnMgYXJlIGltcHJlY2lzZSBhbmQgaXQgaXMgdW5jZXJ0YWluIHdoZXRoZXIgdGhleSBoYXZlIHRoZSBzYW1lIGJvdW5kYXJpZXMgdG8gdGhlaXIgbWVhbmluZy4gVGhlIHNlbnNlIGluIHdoaWNoIHRoZSBtYXBwaW5nIGlzIG5hcnJvd2VyIFNIQUxMIGJlIGRlc2NyaWJlZCBpbiB0aGUgY29tbWVudHMgaW4gdGhpcyBjYXNlLCBhbmQgYXBwbGljYXRpb25zIHNob3VsZCBiZSBjYXJlZnVsIHdoZW4gYXR0ZW1wdGluZyB0byB1c2UgdGhlc2UgbWFwcGluZ3Mgb3BlcmF0aW9uYWxseS5cclxuICAgKi9cclxuICBJbmV4YWN0OiBcImluZXhhY3RcIixcclxuICAvKipcclxuICAgKiBuYXJyb3dlcjogVGhlIHRhcmdldCBtYXBwaW5nIGlzIG5hcnJvd2VyIGluIG1lYW5pbmcgdGhhbiB0aGUgc291cmNlIGNvbmNlcHQuIFRoZSBzZW5zZSBpbiB3aGljaCB0aGUgbWFwcGluZyBpcyBuYXJyb3dlciBTSEFMTCBiZSBkZXNjcmliZWQgaW4gdGhlIGNvbW1lbnRzIGluIHRoaXMgY2FzZSwgYW5kIGFwcGxpY2F0aW9ucyBzaG91bGQgYmUgY2FyZWZ1bCB3aGVuIGF0dGVtcHRpbmcgdG8gdXNlIHRoZXNlIG1hcHBpbmdzIG9wZXJhdGlvbmFsbHkuXHJcbiAgICovXHJcbiAgTmFycm93ZXI6IFwibmFycm93ZXJcIixcclxuICAvKipcclxuICAgKiByZWxhdGVkdG86IFRoZSBjb25jZXB0cyBhcmUgcmVsYXRlZCB0byBlYWNoIG90aGVyLCBhbmQgaGF2ZSBhdCBsZWFzdCBzb21lIG92ZXJsYXAgaW4gbWVhbmluZywgYnV0IHRoZSBleGFjdCByZWxhdGlvbnNoaXAgaXMgbm90IGtub3duXHJcbiAgICovXHJcbiAgUmVsYXRlZFRvOiBcInJlbGF0ZWR0b1wiLFxyXG4gIC8qKlxyXG4gICAqIHNwZWNpYWxpemVzOiBUaGUgdGFyZ2V0IG1hcHBpbmcgc3BlY2lhbGl6ZXMgdGhlIG1lYW5pbmcgb2YgdGhlIHNvdXJjZSBjb25jZXB0IChlLmcuIHRoZSB0YXJnZXQgaXMtYSBzb3VyY2UpLlxyXG4gICAqL1xyXG4gIFNwZWNpYWxpemVzOiBcInNwZWNpYWxpemVzXCIsXHJcbiAgLyoqXHJcbiAgICogc3Vic3VtZXM6IFRoZSB0YXJnZXQgbWFwcGluZyBzdWJzdW1lcyB0aGUgbWVhbmluZyBvZiB0aGUgc291cmNlIGNvbmNlcHQgKGUuZy4gdGhlIHNvdXJjZSBpcy1hIHRhcmdldCkuXHJcbiAgICovXHJcbiAgU3Vic3VtZXM6IFwic3Vic3VtZXNcIixcclxuICAvKipcclxuICAgKiB1bm1hdGNoZWQ6IFRoZXJlIGlzIG5vIG1hdGNoIGZvciB0aGlzIGNvbmNlcHQgaW4gdGhlIGRlc3RpbmF0aW9uIGNvbmNlcHQgc3lzdGVtLlxyXG4gICAqL1xyXG4gIFVubWF0Y2hlZDogXCJ1bm1hdGNoZWRcIixcclxuICAvKipcclxuICAgKiB3aWRlcjogVGhlIHRhcmdldCBtYXBwaW5nIGlzIHdpZGVyIGluIG1lYW5pbmcgdGhhbiB0aGUgc291cmNlIGNvbmNlcHQuXHJcbiAgICovXHJcbiAgV2lkZXI6IFwid2lkZXJcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVncmVlIG9mIGVxdWl2YWxlbmNlIGJldHdlZW4gY29uY2VwdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb25jZXB0TWFwRXF1aXZhbGVuY2VDb2RlVHlwZSA9IHR5cGVvZiBDb25jZXB0TWFwRXF1aXZhbGVuY2VDb2Rlc1trZXlvZiB0eXBlb2YgQ29uY2VwdE1hcEVxdWl2YWxlbmNlQ29kZXNdO1xyXG4iXX0=