// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointmentstatus|4.3.0
/**
 * The free/busy status of an appointment.
 */
export const AppointmentstatusCodes = {
    /**
     * arrived: The patient/patients has/have arrived and is/are waiting to be seen.
     */
    Arrived: "arrived",
    /**
     * booked: All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
     */
    Booked: "booked",
    /**
     * cancelled: The appointment has been cancelled.
     */
    Cancelled: "cancelled",
    /**
     * checked-in: When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).
     */
    CheckedIn: "checked-in",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: "entered-in-error",
    /**
     * fulfilled: The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.
     */
    Fulfilled: "fulfilled",
    /**
     * noshow: Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
     */
    NoShow: "noshow",
    /**
     * pending: Some or all of the participant(s) have not finalized their acceptance of the appointment request.
     */
    Pending: "pending",
    /**
     * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.
     */
    Proposed: "proposed",
    /**
     * waitlist: The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.
     * A specific time might or might not be pre-allocated.
     */
    Waitlisted: "waitlist",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRzdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQXBwb2ludG1lbnRzdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxzRUFBc0U7QUFFdEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxZQUFZO0lBQ3ZCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOzs7T0FHRztJQUNILFVBQVUsRUFBRSxVQUFVO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYXBwb2ludG1lbnRzdGF0dXN8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBUaGUgZnJlZS9idXN5IHN0YXR1cyBvZiBhbiBhcHBvaW50bWVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBcHBvaW50bWVudHN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFycml2ZWQ6IFRoZSBwYXRpZW50L3BhdGllbnRzIGhhcy9oYXZlIGFycml2ZWQgYW5kIGlzL2FyZSB3YWl0aW5nIHRvIGJlIHNlZW4uXHJcbiAgICovXHJcbiAgQXJyaXZlZDogXCJhcnJpdmVkXCIsXHJcbiAgLyoqXHJcbiAgICogYm9va2VkOiBBbGwgcGFydGljaXBhbnQocykgaGF2ZSBiZWVuIGNvbnNpZGVyZWQgYW5kIHRoZSBhcHBvaW50bWVudCBpcyBjb25maXJtZWQgdG8gZ28gYWhlYWQgYXQgdGhlIGRhdGUvdGltZXMgc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIEJvb2tlZDogXCJib29rZWRcIixcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBhcHBvaW50bWVudCBoYXMgYmVlbiBjYW5jZWxsZWQuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiBcImNhbmNlbGxlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGNoZWNrZWQtaW46IFdoZW4gY2hlY2tlZCBpbiwgYWxsIHByZS1lbmNvdW50ZXIgYWRtaW5pc3RyYXRpdmUgd29yayBpcyBjb21wbGV0ZSwgYW5kIHRoZSBlbmNvdW50ZXIgbWF5IGJlZ2luLiAod2hlcmUgbXVsdGlwbGUgcGF0aWVudHMgYXJlIGludm9sdmVkLCB0aGV5IGFyZSBhbGwgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgQ2hlY2tlZEluOiBcImNoZWNrZWQtaW5cIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGluc3RhbmNlIHNob3VsZCBub3QgaGF2ZSBiZWVuIHBhcnQgb2YgdGhpcyBwYXRpZW50J3MgbWVkaWNhbCByZWNvcmQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGZ1bGZpbGxlZDogVGhlIHBsYW5uaW5nIHN0YWdlcyBvZiB0aGUgYXBwb2ludG1lbnQgYXJlIG5vdyBjb21wbGV0ZSwgdGhlIGVuY291bnRlciByZXNvdXJjZSB3aWxsIGV4aXN0IGFuZCB3aWxsIHRyYWNrIGZ1cnRoZXIgc3RhdHVzIGNoYW5nZXMuIE5vdGUgdGhhdCBhbiBlbmNvdW50ZXIgbWF5IGV4aXN0IGJlZm9yZSB0aGUgYXBwb2ludG1lbnQgc3RhdHVzIGlzIGZ1bGZpbGxlZCBmb3IgbWFueSByZWFzb25zLlxyXG4gICAqL1xyXG4gIEZ1bGZpbGxlZDogXCJmdWxmaWxsZWRcIixcclxuICAvKipcclxuICAgKiBub3Nob3c6IFNvbWUgb3IgYWxsIG9mIHRoZSBwYXJ0aWNpcGFudChzKSBoYXZlIG5vdC9kaWQgbm90IGFwcGVhciBmb3IgdGhlIGFwcG9pbnRtZW50ICh1c3VhbGx5IHRoZSBwYXRpZW50KS5cclxuICAgKi9cclxuICBOb1Nob3c6IFwibm9zaG93XCIsXHJcbiAgLyoqXHJcbiAgICogcGVuZGluZzogU29tZSBvciBhbGwgb2YgdGhlIHBhcnRpY2lwYW50KHMpIGhhdmUgbm90IGZpbmFsaXplZCB0aGVpciBhY2NlcHRhbmNlIG9mIHRoZSBhcHBvaW50bWVudCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIFBlbmRpbmc6IFwicGVuZGluZ1wiLFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBOb25lIG9mIHRoZSBwYXJ0aWNpcGFudChzKSBoYXZlIGZpbmFsaXplZCB0aGVpciBhY2NlcHRhbmNlIG9mIHRoZSBhcHBvaW50bWVudCByZXF1ZXN0LCBhbmQgdGhlIHN0YXJ0L2VuZCB0aW1lIG1pZ2h0IG5vdCBiZSBzZXQgeWV0LlxyXG4gICAqL1xyXG4gIFByb3Bvc2VkOiBcInByb3Bvc2VkXCIsXHJcbiAgLyoqXHJcbiAgICogd2FpdGxpc3Q6IFRoZSBhcHBvaW50bWVudCBoYXMgYmVlbiBwbGFjZWQgb24gYSB3YWl0bGlzdCwgdG8gYmUgc2NoZWR1bGVkL2NvbmZpcm1lZCBpbiB0aGUgZnV0dXJlIHdoZW4gYSBzbG90L3NlcnZpY2UgaXMgYXZhaWxhYmxlLlxyXG4gICAqIEEgc3BlY2lmaWMgdGltZSBtaWdodCBvciBtaWdodCBub3QgYmUgcHJlLWFsbG9jYXRlZC5cclxuICAgKi9cclxuICBXYWl0bGlzdGVkOiBcIndhaXRsaXN0XCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIGZyZWUvYnVzeSBzdGF0dXMgb2YgYW4gYXBwb2ludG1lbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBcHBvaW50bWVudHN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIEFwcG9pbnRtZW50c3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIEFwcG9pbnRtZW50c3RhdHVzQ29kZXNdO1xyXG4iXX0=