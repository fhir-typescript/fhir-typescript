// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationdispense-status|4.3.0
/**
 * MedicationDispense Status Codes
 */
export const MedicationdispenseStatusCodes = {
    /**
     * cancelled: The dispensed product was not and will never be picked up by the patient.
     */
    Cancelled: "cancelled",
    /**
     * completed: The dispensed product has been picked up.
     */
    Completed: "completed",
    /**
     * declined: The dispense was declined and not performed.
     */
    Declined: "declined",
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: The dispensed product is ready for pickup.
     */
    InProgress: "in-progress",
    /**
     * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    OnHold: "on-hold",
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    Preparation: "preparation",
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped: "stopped",
    /**
     * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbmRpc3BlbnNlU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lZGljYXRpb25kaXNwZW5zZVN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDhFQUE4RTtBQUU5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHO0lBQzNDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFNBQVM7SUFDakI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWRpY2F0aW9uZGlzcGVuc2Utc3RhdHVzfDQuMy4wXHJcblxyXG4vKipcclxuICogTWVkaWNhdGlvbkRpc3BlbnNlIFN0YXR1cyBDb2Rlc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lZGljYXRpb25kaXNwZW5zZVN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIGRpc3BlbnNlZCBwcm9kdWN0IHdhcyBub3QgYW5kIHdpbGwgbmV2ZXIgYmUgcGlja2VkIHVwIGJ5IHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogXCJjYW5jZWxsZWRcIixcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSBkaXNwZW5zZWQgcHJvZHVjdCBoYXMgYmVlbiBwaWNrZWQgdXAuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBcImNvbXBsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGRlY2xpbmVkOiBUaGUgZGlzcGVuc2Ugd2FzIGRlY2xpbmVkIGFuZCBub3QgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIERlY2xpbmVkOiBcImRlY2xpbmVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGRpc3BlbnNlIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB0aGVyZWZvcmUgbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAvKipcclxuICAgKiBpbi1wcm9ncmVzczogVGhlIGRpc3BlbnNlZCBwcm9kdWN0IGlzIHJlYWR5IGZvciBwaWNrdXAuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczogXCJpbi1wcm9ncmVzc1wiLFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IFRoZSBkaXNwZW5zZSBwcm9jZXNzIGlzIHBhdXNlZCB3aGlsZSB3YWl0aW5nIGZvciBhbiBleHRlcm5hbCBldmVudCB0byByZWFjdGl2YXRlIHRoZSBkaXNwZW5zZS4gIEZvciBleGFtcGxlLCBuZXcgc3RvY2sgaGFzIGFycml2ZWQgb3IgdGhlIHByZXNjcmliZXIgaGFzIGNhbGxlZC5cclxuICAgKi9cclxuICBPbkhvbGQ6IFwib24taG9sZFwiLFxyXG4gIC8qKlxyXG4gICAqIHByZXBhcmF0aW9uOiBUaGUgY29yZSBldmVudCBoYXMgbm90IHN0YXJ0ZWQgeWV0LCBidXQgc29tZSBzdGFnaW5nIGFjdGl2aXRpZXMgaGF2ZSBiZWd1biAoZS5nLiBpbml0aWFsIGNvbXBvdW5kaW5nIG9yIHBhY2thZ2luZyBvZiBtZWRpY2F0aW9uKS4gUHJlcGFyYXRpb24gc3RhZ2VzIG1heSBiZSB0cmFja2VkIGZvciBiaWxsaW5nIHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIFByZXBhcmF0aW9uOiBcInByZXBhcmF0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBkaXNwZW5zZSBoYXZlIGJlZW4gcGVybWFuZW50bHkgaGFsdGVkLCBiZWZvcmUgYWxsIG9mIHRoZW0gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgU3RvcHBlZDogXCJzdG9wcGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBhcHBsaWVzIGZvciB0aGlzIG1lZGljYXRpb24gZGlzcGVuc2UuICBOb3RlOiB0aGlzIGNvbmNlcHQgaXMgbm90IHRvIGJlIHVzZWQgZm9yIG90aGVyIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksIGl0J3MganVzdCBub3cga25vd24gd2hpY2ggb25lLlxyXG4gICAqL1xyXG4gIFVua25vd246IFwidW5rbm93blwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25EaXNwZW5zZSBTdGF0dXMgQ29kZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25kaXNwZW5zZVN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIE1lZGljYXRpb25kaXNwZW5zZVN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBNZWRpY2F0aW9uZGlzcGVuc2VTdGF0dXNDb2Rlc107XHJcbiJdfQ==