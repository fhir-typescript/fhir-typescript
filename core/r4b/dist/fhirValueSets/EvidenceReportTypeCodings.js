// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/evidence-report-type|4.3.0
/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export const EvidenceReportTypeCodings = {
    /**
     * classification: The report is primarily a listing of classifiers about the report subject.
     */
    Classification: {
        display: "Classification",
        code: "classification",
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
    },
    /**
     * resources-compiled: The report is a composition containing one or more FHIR resources in the content.
     */
    ResourceCompilation: {
        display: "Resource Compilation",
        code: "resources-compiled",
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
    },
    /**
     * search-results: The report is a composition of results generated in response to a search query.
     */
    SearchResults: {
        display: "Search Results",
        code: "search-results",
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
    },
    /**
     * text-structured: The report is a structured representation of text.
     */
    StructuredText: {
        display: "Structured Text",
        code: "text-structured",
        system: "http://terminology.hl7.org/CodeSystem/evidence-report-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZpZGVuY2VSZXBvcnRUeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRXZpZGVuY2VSZXBvcnRUeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx5RUFBeUU7QUEwQnpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9ldmlkZW5jZS1yZXBvcnQtdHlwZXw0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBraW5kIG9mIHJlcG9ydCwgc3VjaCBhcyBncm91cGluZyBvZiBjbGFzc2lmaWVycywgc2VhcmNoIHJlc3VsdHMsIG9yIGh1bWFuLWNvbXBpbGVkIGV4cHJlc3Npb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmlkZW5jZVJlcG9ydFR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNsYXNzaWZpY2F0aW9uOiBUaGUgcmVwb3J0IGlzIHByaW1hcmlseSBhIGxpc3Rpbmcgb2YgY2xhc3NpZmllcnMgYWJvdXQgdGhlIHJlcG9ydCBzdWJqZWN0LlxyXG4gICAqL1xyXG4gIENsYXNzaWZpY2F0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlc291cmNlcy1jb21waWxlZDogVGhlIHJlcG9ydCBpcyBhIGNvbXBvc2l0aW9uIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgRkhJUiByZXNvdXJjZXMgaW4gdGhlIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgUmVzb3VyY2VDb21waWxhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZWFyY2gtcmVzdWx0czogVGhlIHJlcG9ydCBpcyBhIGNvbXBvc2l0aW9uIG9mIHJlc3VsdHMgZ2VuZXJhdGVkIGluIHJlc3BvbnNlIHRvIGEgc2VhcmNoIHF1ZXJ5LlxyXG4gICAqL1xyXG4gIFNlYXJjaFJlc3VsdHM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdGV4dC1zdHJ1Y3R1cmVkOiBUaGUgcmVwb3J0IGlzIGEgc3RydWN0dXJlZCByZXByZXNlbnRhdGlvbiBvZiB0ZXh0LlxyXG4gICAqL1xyXG4gIFN0cnVjdHVyZWRUZXh0OiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGtpbmQgb2YgcmVwb3J0LCBzdWNoIGFzIGdyb3VwaW5nIG9mIGNsYXNzaWZpZXJzLCBzZWFyY2ggcmVzdWx0cywgb3IgaHVtYW4tY29tcGlsZWQgZXhwcmVzc2lvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmlkZW5jZVJlcG9ydFR5cGVDb2RpbmdzOkV2aWRlbmNlUmVwb3J0VHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2xhc3NpZmljYXRpb246IFRoZSByZXBvcnQgaXMgcHJpbWFyaWx5IGEgbGlzdGluZyBvZiBjbGFzc2lmaWVycyBhYm91dCB0aGUgcmVwb3J0IHN1YmplY3QuXHJcbiAgICovXHJcbiAgQ2xhc3NpZmljYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiQ2xhc3NpZmljYXRpb25cIixcclxuICAgIGNvZGU6IFwiY2xhc3NpZmljYXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2V2aWRlbmNlLXJlcG9ydC10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXNvdXJjZXMtY29tcGlsZWQ6IFRoZSByZXBvcnQgaXMgYSBjb21wb3NpdGlvbiBjb250YWluaW5nIG9uZSBvciBtb3JlIEZISVIgcmVzb3VyY2VzIGluIHRoZSBjb250ZW50LlxyXG4gICAqL1xyXG4gIFJlc291cmNlQ29tcGlsYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiUmVzb3VyY2UgQ29tcGlsYXRpb25cIixcclxuICAgIGNvZGU6IFwicmVzb3VyY2VzLWNvbXBpbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9ldmlkZW5jZS1yZXBvcnQtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoLXJlc3VsdHM6IFRoZSByZXBvcnQgaXMgYSBjb21wb3NpdGlvbiBvZiByZXN1bHRzIGdlbmVyYXRlZCBpbiByZXNwb25zZSB0byBhIHNlYXJjaCBxdWVyeS5cclxuICAgKi9cclxuICBTZWFyY2hSZXN1bHRzOiB7XHJcbiAgICBkaXNwbGF5OiBcIlNlYXJjaCBSZXN1bHRzXCIsXHJcbiAgICBjb2RlOiBcInNlYXJjaC1yZXN1bHRzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9ldmlkZW5jZS1yZXBvcnQtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdGV4dC1zdHJ1Y3R1cmVkOiBUaGUgcmVwb3J0IGlzIGEgc3RydWN0dXJlZCByZXByZXNlbnRhdGlvbiBvZiB0ZXh0LlxyXG4gICAqL1xyXG4gIFN0cnVjdHVyZWRUZXh0OiB7XHJcbiAgICBkaXNwbGF5OiBcIlN0cnVjdHVyZWQgVGV4dFwiLFxyXG4gICAgY29kZTogXCJ0ZXh0LXN0cnVjdHVyZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2V2aWRlbmNlLXJlcG9ydC10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19