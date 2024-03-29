// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplyrequest-status|4.0.1
/**
 * Status of the supply request.
 */
export const SupplyrequestStatusCodes = {
    /**
     * active: The request is ready to be acted upon.
     */
    Active: "active",
    /**
     * cancelled: The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
     */
    Cancelled: "cancelled",
    /**
     * completed: Activity against the request has been sufficiently completed to the satisfaction of the requester.
     */
    Completed: "completed",
    /**
     * draft: The request has been created but is not yet complete or ready for action.
     */
    Draft: "draft",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError: "entered-in-error",
    /**
     * suspended: The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.
     */
    Suspended: "suspended",
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBRXpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N1cHBseXJlcXVlc3Qtc3RhdHVzfDQuMC4xXHJcblxyXG4vKipcclxuICogU3RhdHVzIG9mIHRoZSBzdXBwbHkgcmVxdWVzdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlOiBUaGUgcmVxdWVzdCBpcyByZWFkeSB0byBiZSBhY3RlZCB1cG9uLlxyXG4gICAqL1xyXG4gIEFjdGl2ZTogXCJhY3RpdmVcIixcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBhdXRob3JpemF0aW9uL3JlcXVlc3QgdG8gYWN0IGhhcyBiZWVuIHRlcm1pbmF0ZWQgcHJpb3IgdG8gdGhlIGZ1bGwgY29tcGxldGlvbiBvZiB0aGUgaW50ZW5kZWQgYWN0aW9ucy4gIE5vIGZ1cnRoZXIgYWN0aXZpdHkgc2hvdWxkIG9jY3VyLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogXCJjYW5jZWxsZWRcIixcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IEFjdGl2aXR5IGFnYWluc3QgdGhlIHJlcXVlc3QgaGFzIGJlZW4gc3VmZmljaWVudGx5IGNvbXBsZXRlZCB0byB0aGUgc2F0aXNmYWN0aW9uIG9mIHRoZSByZXF1ZXN0ZXIuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBcImNvbXBsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGRyYWZ0OiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBjcmVhdGVkIGJ1dCBpcyBub3QgeWV0IGNvbXBsZXRlIG9yIHJlYWR5IGZvciBhY3Rpb24uXHJcbiAgICovXHJcbiAgRHJhZnQ6IFwiZHJhZnRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGVsZWN0cm9uaWMgcmVjb3JkIHNob3VsZCBuZXZlciBoYXZlIGV4aXN0ZWQsIHRob3VnaCBpdCBpcyBwb3NzaWJsZSB0aGF0IHJlYWwtd29ybGQgZGVjaXNpb25zIHdlcmUgYmFzZWQgb24gaXQuICAoSWYgcmVhbC13b3JsZCBhY3Rpdml0eSBoYXMgb2NjdXJyZWQsIHRoZSBzdGF0dXMgc2hvdWxkIGJlIFwiY2FuY2VsbGVkXCIgcmF0aGVyIHRoYW4gXCJlbnRlcmVkLWluLWVycm9yXCIuKS5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogc3VzcGVuZGVkOiBUaGUgYXV0aG9yaXphdGlvbi9yZXF1ZXN0IHRvIGFjdCBoYXMgYmVlbiB0ZW1wb3JhcmlseSB3aXRoZHJhd24gYnV0IGlzIGV4cGVjdGVkIHRvIHJlc3VtZSBpbiB0aGUgZnV0dXJlLlxyXG4gICAqL1xyXG4gIFN1c3BlbmRlZDogXCJzdXNwZW5kZWRcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgYXV0aG9yaW5nL3NvdXJjZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyBvYnNlcnZhdGlvbi4gTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBcIm90aGVyXCIgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgYnV0IHRoZSBhdXRob3Jpbmcvc291cmNlIHN5c3RlbSBkb2VzIG5vdCBrbm93IHdoaWNoLlxyXG4gICAqL1xyXG4gIFVua25vd246IFwidW5rbm93blwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFN0YXR1cyBvZiB0aGUgc3VwcGx5IHJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBTdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZXNdO1xyXG4iXX0=