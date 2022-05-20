// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointmentstatus|4.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRzdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQXBwb2ludG1lbnRzdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzRUFBc0U7QUFFdEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxZQUFZO0lBQ3ZCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOzs7T0FHRztJQUNILFVBQVUsRUFBRSxVQUFVO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hcHBvaW50bWVudHN0YXR1c3w0LjAuMVxyXG5cclxuLyoqXHJcbiAqIFRoZSBmcmVlL2J1c3kgc3RhdHVzIG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFwcG9pbnRtZW50c3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYXJyaXZlZDogVGhlIHBhdGllbnQvcGF0aWVudHMgaGFzL2hhdmUgYXJyaXZlZCBhbmQgaXMvYXJlIHdhaXRpbmcgdG8gYmUgc2Vlbi5cclxuICAgKi9cclxuICBBcnJpdmVkOiBcImFycml2ZWRcIixcclxuICAvKipcclxuICAgKiBib29rZWQ6IEFsbCBwYXJ0aWNpcGFudChzKSBoYXZlIGJlZW4gY29uc2lkZXJlZCBhbmQgdGhlIGFwcG9pbnRtZW50IGlzIGNvbmZpcm1lZCB0byBnbyBhaGVhZCBhdCB0aGUgZGF0ZS90aW1lcyBzcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgQm9va2VkOiBcImJvb2tlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIGFwcG9pbnRtZW50IGhhcyBiZWVuIGNhbmNlbGxlZC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IFwiY2FuY2VsbGVkXCIsXHJcbiAgLyoqXHJcbiAgICogY2hlY2tlZC1pbjogV2hlbiBjaGVja2VkIGluLCBhbGwgcHJlLWVuY291bnRlciBhZG1pbmlzdHJhdGl2ZSB3b3JrIGlzIGNvbXBsZXRlLCBhbmQgdGhlIGVuY291bnRlciBtYXkgYmVnaW4uICh3aGVyZSBtdWx0aXBsZSBwYXRpZW50cyBhcmUgaW52b2x2ZWQsIHRoZXkgYXJlIGFsbCBwcmVzZW50KS5cclxuICAgKi9cclxuICBDaGVja2VkSW46IFwiY2hlY2tlZC1pblwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgaW5zdGFuY2Ugc2hvdWxkIG5vdCBoYXZlIGJlZW4gcGFydCBvZiB0aGlzIHBhdGllbnQncyBtZWRpY2FsIHJlY29yZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogZnVsZmlsbGVkOiBUaGUgcGxhbm5pbmcgc3RhZ2VzIG9mIHRoZSBhcHBvaW50bWVudCBhcmUgbm93IGNvbXBsZXRlLCB0aGUgZW5jb3VudGVyIHJlc291cmNlIHdpbGwgZXhpc3QgYW5kIHdpbGwgdHJhY2sgZnVydGhlciBzdGF0dXMgY2hhbmdlcy4gTm90ZSB0aGF0IGFuIGVuY291bnRlciBtYXkgZXhpc3QgYmVmb3JlIHRoZSBhcHBvaW50bWVudCBzdGF0dXMgaXMgZnVsZmlsbGVkIGZvciBtYW55IHJlYXNvbnMuXHJcbiAgICovXHJcbiAgRnVsZmlsbGVkOiBcImZ1bGZpbGxlZFwiLFxyXG4gIC8qKlxyXG4gICAqIG5vc2hvdzogU29tZSBvciBhbGwgb2YgdGhlIHBhcnRpY2lwYW50KHMpIGhhdmUgbm90L2RpZCBub3QgYXBwZWFyIGZvciB0aGUgYXBwb2ludG1lbnQgKHVzdWFsbHkgdGhlIHBhdGllbnQpLlxyXG4gICAqL1xyXG4gIE5vU2hvdzogXCJub3Nob3dcIixcclxuICAvKipcclxuICAgKiBwZW5kaW5nOiBTb21lIG9yIGFsbCBvZiB0aGUgcGFydGljaXBhbnQocykgaGF2ZSBub3QgZmluYWxpemVkIHRoZWlyIGFjY2VwdGFuY2Ugb2YgdGhlIGFwcG9pbnRtZW50IHJlcXVlc3QuXHJcbiAgICovXHJcbiAgUGVuZGluZzogXCJwZW5kaW5nXCIsXHJcbiAgLyoqXHJcbiAgICogcHJvcG9zZWQ6IE5vbmUgb2YgdGhlIHBhcnRpY2lwYW50KHMpIGhhdmUgZmluYWxpemVkIHRoZWlyIGFjY2VwdGFuY2Ugb2YgdGhlIGFwcG9pbnRtZW50IHJlcXVlc3QsIGFuZCB0aGUgc3RhcnQvZW5kIHRpbWUgbWlnaHQgbm90IGJlIHNldCB5ZXQuXHJcbiAgICovXHJcbiAgUHJvcG9zZWQ6IFwicHJvcG9zZWRcIixcclxuICAvKipcclxuICAgKiB3YWl0bGlzdDogVGhlIGFwcG9pbnRtZW50IGhhcyBiZWVuIHBsYWNlZCBvbiBhIHdhaXRsaXN0LCB0byBiZSBzY2hlZHVsZWQvY29uZmlybWVkIGluIHRoZSBmdXR1cmUgd2hlbiBhIHNsb3Qvc2VydmljZSBpcyBhdmFpbGFibGUuXHJcbiAgICogQSBzcGVjaWZpYyB0aW1lIG1pZ2h0IG9yIG1pZ2h0IG5vdCBiZSBwcmUtYWxsb2NhdGVkLlxyXG4gICAqL1xyXG4gIFdhaXRsaXN0ZWQ6IFwid2FpdGxpc3RcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZnJlZS9idXN5IHN0YXR1cyBvZiBhbiBhcHBvaW50bWVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFwcG9pbnRtZW50c3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgQXBwb2ludG1lbnRzdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgQXBwb2ludG1lbnRzdGF0dXNDb2Rlc107XHJcbiJdfQ==