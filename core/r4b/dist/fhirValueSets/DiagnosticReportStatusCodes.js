// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/diagnostic-report-status|4.3.0
/**
 * The status of the diagnostic report.
 */
export const DiagnosticReportStatusCodes = {
    /**
     * amended: Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
     */
    Amended: "amended",
    /**
     * appended: Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
     */
    Appended: "appended",
    /**
     * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: "cancelled",
    /**
     * corrected: Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
     */
    Corrected: "corrected",
    /**
     * entered-in-error: The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError: "entered-in-error",
    /**
     * final: The report is complete and verified by an authorized person.
     */
    Final: "final",
    /**
     * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
     */
    Partial: "partial",
    /**
     * preliminary: Verified early results are available, but not all  results are final.
     */
    Preliminary: "preliminary",
    /**
     * registered: The existence of the report is registered, but there is nothing yet available.
     */
    Registered: "registered",
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9EaWFnbm9zdGljUmVwb3J0U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsNkVBQTZFO0FBRTdFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9kaWFnbm9zdGljLXJlcG9ydC1zdGF0dXN8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBUaGUgc3RhdHVzIG9mIHRoZSBkaWFnbm9zdGljIHJlcG9ydC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBEaWFnbm9zdGljUmVwb3J0U3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYW1lbmRlZDogU3Vic2VxdWVudCB0byBiZWluZyBmaW5hbCwgdGhlIHJlcG9ydCBoYXMgYmVlbiBtb2RpZmllZC4gIFRoaXMgaW5jbHVkZXMgYW55IGNoYW5nZSBpbiB0aGUgcmVzdWx0cywgZGlhZ25vc2lzLCBuYXJyYXRpdmUgdGV4dCwgb3Igb3RoZXIgY29udGVudCBvZiBhIHJlcG9ydCB0aGF0IGhhcyBiZWVuIGlzc3VlZC5cclxuICAgKi9cclxuICBBbWVuZGVkOiBcImFtZW5kZWRcIixcclxuICAvKipcclxuICAgKiBhcHBlbmRlZDogU3Vic2VxdWVudCB0byBiZWluZyBmaW5hbCwgdGhlIHJlcG9ydCBoYXMgYmVlbiBtb2RpZmllZCBieSBhZGRpbmcgbmV3IGNvbnRlbnQuIFRoZSBleGlzdGluZyBjb250ZW50IGlzIHVuY2hhbmdlZC5cclxuICAgKi9cclxuICBBcHBlbmRlZDogXCJhcHBlbmRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIHJlcG9ydCBpcyB1bmF2YWlsYWJsZSBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudCB3YXMgbm90IHN0YXJ0ZWQgb3Igbm90IGNvbXBsZXRlZCAoYWxzbyBzb21ldGltZXMgY2FsbGVkIFwiYWJvcnRlZFwiKS5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IFwiY2FuY2VsbGVkXCIsXHJcbiAgLyoqXHJcbiAgICogY29ycmVjdGVkOiBTdWJzZXF1ZW50IHRvIGJlaW5nIGZpbmFsLCB0aGUgcmVwb3J0IGhhcyBiZWVuIG1vZGlmaWVkICB0byBjb3JyZWN0IGFuIGVycm9yIGluIHRoZSByZXBvcnQgb3IgcmVmZXJlbmNlZCByZXN1bHRzLlxyXG4gICAqL1xyXG4gIENvcnJlY3RlZDogXCJjb3JyZWN0ZWRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgcmVwb3J0IGhhcyBiZWVuIHdpdGhkcmF3biBmb2xsb3dpbmcgYSBwcmV2aW91cyBmaW5hbCByZWxlYXNlLiAgVGhpcyBlbGVjdHJvbmljIHJlY29yZCBzaG91bGQgbmV2ZXIgaGF2ZSBleGlzdGVkLCB0aG91Z2ggaXQgaXMgcG9zc2libGUgdGhhdCByZWFsLXdvcmxkIGRlY2lzaW9ucyB3ZXJlIGJhc2VkIG9uIGl0LiAoSWYgcmVhbC13b3JsZCBhY3Rpdml0eSBoYXMgb2NjdXJyZWQsIHRoZSBzdGF0dXMgc2hvdWxkIGJlIFwiY2FuY2VsbGVkXCIgcmF0aGVyIHRoYW4gXCJlbnRlcmVkLWluLWVycm9yXCIuKS5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogZmluYWw6IFRoZSByZXBvcnQgaXMgY29tcGxldGUgYW5kIHZlcmlmaWVkIGJ5IGFuIGF1dGhvcml6ZWQgcGVyc29uLlxyXG4gICAqL1xyXG4gIEZpbmFsOiBcImZpbmFsXCIsXHJcbiAgLyoqXHJcbiAgICogcGFydGlhbDogVGhpcyBpcyBhIHBhcnRpYWwgKGUuZy4gaW5pdGlhbCwgaW50ZXJpbSBvciBwcmVsaW1pbmFyeSkgcmVwb3J0OiBkYXRhIGluIHRoZSByZXBvcnQgbWF5IGJlIGluY29tcGxldGUgb3IgdW52ZXJpZmllZC5cclxuICAgKi9cclxuICBQYXJ0aWFsOiBcInBhcnRpYWxcIixcclxuICAvKipcclxuICAgKiBwcmVsaW1pbmFyeTogVmVyaWZpZWQgZWFybHkgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLCBidXQgbm90IGFsbCAgcmVzdWx0cyBhcmUgZmluYWwuXHJcbiAgICovXHJcbiAgUHJlbGltaW5hcnk6IFwicHJlbGltaW5hcnlcIixcclxuICAvKipcclxuICAgKiByZWdpc3RlcmVkOiBUaGUgZXhpc3RlbmNlIG9mIHRoZSByZXBvcnQgaXMgcmVnaXN0ZXJlZCwgYnV0IHRoZXJlIGlzIG5vdGhpbmcgeWV0IGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBSZWdpc3RlcmVkOiBcInJlZ2lzdGVyZWRcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgYXV0aG9yaW5nL3NvdXJjZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyBvYnNlcnZhdGlvbi4gTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBcIm90aGVyXCIgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgYnV0IHRoZSBhdXRob3Jpbmcvc291cmNlIHN5c3RlbSBkb2VzIG5vdCBrbm93IHdoaWNoLlxyXG4gICAqL1xyXG4gIFVua25vd246IFwidW5rbm93blwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBzdGF0dXMgb2YgdGhlIGRpYWdub3N0aWMgcmVwb3J0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIERpYWdub3N0aWNSZXBvcnRTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgRGlhZ25vc3RpY1JlcG9ydFN0YXR1c0NvZGVzXTtcclxuIl19