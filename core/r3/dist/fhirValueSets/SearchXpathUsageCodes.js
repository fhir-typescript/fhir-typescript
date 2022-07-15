// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-xpath-usage|3.0.2
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export const SearchXpathUsageCodes = {
    /**
     * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    Distance: "distance",
    /**
     * nearby: The search parameter is based on a spatial transform of the selected nodes.
     */
    Nearby: "nearby",
    /**
     * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    Normal: "normal",
    /**
     * other: The interpretation of the xpath statement is unknown (and can't be automated).
     */
    Other: "other",
    /**
     * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
     */
    Phonetic: "phonetic",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoWHBhdGhVc2FnZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TZWFyY2hYcGF0aFVzYWdlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBRXZFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7Q0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NlYXJjaC14cGF0aC11c2FnZXwzLjAuMlxyXG5cclxuLyoqXHJcbiAqIEhvdyBhIHNlYXJjaCBwYXJhbWV0ZXIgcmVsYXRlcyB0byB0aGUgc2V0IG9mIGVsZW1lbnRzIHJldHVybmVkIGJ5IGV2YWx1YXRpbmcgaXRzIHhwYXRoIHF1ZXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNlYXJjaFhwYXRoVXNhZ2VDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBkaXN0YW5jZTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYmFzZWQgb24gYSBzcGF0aWFsIHRyYW5zZm9ybSBvZiB0aGUgc2VsZWN0ZWQgbm9kZXMsIHVzaW5nIHBoeXNpY2FsIGRpc3RhbmNlIGZyb20gdGhlIG1pZGRsZS5cclxuICAgKi9cclxuICBEaXN0YW5jZTogXCJkaXN0YW5jZVwiLFxyXG4gIC8qKlxyXG4gICAqIG5lYXJieTogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgYmFzZWQgb24gYSBzcGF0aWFsIHRyYW5zZm9ybSBvZiB0aGUgc2VsZWN0ZWQgbm9kZXMuXHJcbiAgICovXHJcbiAgTmVhcmJ5OiBcIm5lYXJieVwiLFxyXG4gIC8qKlxyXG4gICAqIG5vcm1hbDogVGhlIHNlYXJjaCBwYXJhbWV0ZXIgaXMgZGVyaXZlZCBkaXJlY3RseSBmcm9tIHRoZSBzZWxlY3RlZCBub2RlcyBiYXNlZCBvbiB0aGUgdHlwZSBkZWZpbml0aW9ucy5cclxuICAgKi9cclxuICBOb3JtYWw6IFwibm9ybWFsXCIsXHJcbiAgLyoqXHJcbiAgICogb3RoZXI6IFRoZSBpbnRlcnByZXRhdGlvbiBvZiB0aGUgeHBhdGggc3RhdGVtZW50IGlzIHVua25vd24gKGFuZCBjYW4ndCBiZSBhdXRvbWF0ZWQpLlxyXG4gICAqL1xyXG4gIE90aGVyOiBcIm90aGVyXCIsXHJcbiAgLyoqXHJcbiAgICogcGhvbmV0aWM6IFRoZSBzZWFyY2ggcGFyYW1ldGVyIGlzIGRlcml2ZWQgYnkgYSBwaG9uZXRpYyB0cmFuc2Zvcm0gZnJvbSB0aGUgc2VsZWN0ZWQgbm9kZXMuXHJcbiAgICovXHJcbiAgUGhvbmV0aWM6IFwicGhvbmV0aWNcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBIb3cgYSBzZWFyY2ggcGFyYW1ldGVyIHJlbGF0ZXMgdG8gdGhlIHNldCBvZiBlbGVtZW50cyByZXR1cm5lZCBieSBldmFsdWF0aW5nIGl0cyB4cGF0aCBxdWVyeS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNlYXJjaFhwYXRoVXNhZ2VDb2RlVHlwZSA9IHR5cGVvZiBTZWFyY2hYcGF0aFVzYWdlQ29kZXNba2V5b2YgdHlwZW9mIFNlYXJjaFhwYXRoVXNhZ2VDb2Rlc107XHJcbiJdfQ==