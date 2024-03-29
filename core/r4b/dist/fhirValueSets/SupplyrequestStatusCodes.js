// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplyrequest-status|4.3.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdXBwbHlyZXF1ZXN0U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBRXpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdXBwbHlyZXF1ZXN0LXN0YXR1c3w0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFN0YXR1cyBvZiB0aGUgc3VwcGx5IHJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIHJlcXVlc3QgaXMgcmVhZHkgdG8gYmUgYWN0ZWQgdXBvbi5cclxuICAgKi9cclxuICBBY3RpdmU6IFwiYWN0aXZlXCIsXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgYXV0aG9yaXphdGlvbi9yZXF1ZXN0IHRvIGFjdCBoYXMgYmVlbiB0ZXJtaW5hdGVkIHByaW9yIHRvIHRoZSBmdWxsIGNvbXBsZXRpb24gb2YgdGhlIGludGVuZGVkIGFjdGlvbnMuICBObyBmdXJ0aGVyIGFjdGl2aXR5IHNob3VsZCBvY2N1ci5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IFwiY2FuY2VsbGVkXCIsXHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBY3Rpdml0eSBhZ2FpbnN0IHRoZSByZXF1ZXN0IGhhcyBiZWVuIHN1ZmZpY2llbnRseSBjb21wbGV0ZWQgdG8gdGhlIHNhdGlzZmFjdGlvbiBvZiB0aGUgcmVxdWVzdGVyLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogXCJjb21wbGV0ZWRcIixcclxuICAvKipcclxuICAgKiBkcmFmdDogVGhlIHJlcXVlc3QgaGFzIGJlZW4gY3JlYXRlZCBidXQgaXMgbm90IHlldCBjb21wbGV0ZSBvciByZWFkeSBmb3IgYWN0aW9uLlxyXG4gICAqL1xyXG4gIERyYWZ0OiBcImRyYWZ0XCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhpcyBlbGVjdHJvbmljIHJlY29yZCBzaG91bGQgbmV2ZXIgaGF2ZSBleGlzdGVkLCB0aG91Z2ggaXQgaXMgcG9zc2libGUgdGhhdCByZWFsLXdvcmxkIGRlY2lzaW9ucyB3ZXJlIGJhc2VkIG9uIGl0LiAgKElmIHJlYWwtd29ybGQgYWN0aXZpdHkgaGFzIG9jY3VycmVkLCB0aGUgc3RhdHVzIHNob3VsZCBiZSBcImNhbmNlbGxlZFwiIHJhdGhlciB0aGFuIFwiZW50ZXJlZC1pbi1lcnJvclwiLikuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmRlZDogVGhlIGF1dGhvcml6YXRpb24vcmVxdWVzdCB0byBhY3QgaGFzIGJlZW4gdGVtcG9yYXJpbHkgd2l0aGRyYXduIGJ1dCBpcyBleHBlY3RlZCB0byByZXN1bWUgaW4gdGhlIGZ1dHVyZS5cclxuICAgKi9cclxuICBTdXNwZW5kZWQ6IFwic3VzcGVuZGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZy9zb3VyY2Ugc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgY3VycmVudGx5IGFwcGxpZXMgZm9yIHRoaXMgb2JzZXJ2YXRpb24uIE5vdGU6IFRoaXMgY29uY2VwdCBpcyBub3QgdG8gYmUgdXNlZCBmb3IgXCJvdGhlclwiIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksIGJ1dCB0aGUgYXV0aG9yaW5nL3NvdXJjZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaC5cclxuICAgKi9cclxuICBVbmtub3duOiBcInVua25vd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBTdGF0dXMgb2YgdGhlIHN1cHBseSByZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIFN1cHBseXJlcXVlc3RTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGVzXTtcclxuIl19