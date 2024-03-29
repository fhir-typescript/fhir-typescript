// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/appointmentstatus|1.0.2
/**
 * The free/busy status of an appointment.
 */
export const AppointmentstatusCodings = {
    /**
     * arrived: Some of the patients have arrived.
     */
    Arrived: {
        display: "Arrived",
        code: "arrived",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
    /**
     * booked: All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.
     */
    Booked: {
        display: "Booked",
        code: "booked",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
    /**
     * cancelled: The appointment has been cancelled.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
    /**
     * fulfilled: This appointment has completed and may have resulted in an encounter.
     */
    Fulfilled: {
        display: "Fulfilled",
        code: "fulfilled",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
    /**
     * noshow: Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).
     */
    NoShow: {
        display: "No Show",
        code: "noshow",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
    /**
     * pending: Some or all of the participant(s) have not finalized their acceptance of the appointment request.
     */
    Pending: {
        display: "Pending",
        code: "pending",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
    /**
     * proposed: None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time may not be set yet.
     */
    Proposed: {
        display: "Proposed",
        code: "proposed",
        system: "http://hl7.org/fhir/appointmentstatus",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwb2ludG1lbnRzdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BcHBvaW50bWVudHN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsc0VBQXNFO0FBc0N0RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsdUNBQXVDO0tBQ2hEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx1Q0FBdUM7S0FDaEQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLHVDQUF1QztLQUNoRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYXBwb2ludG1lbnRzdGF0dXN8MS4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgZnJlZS9idXN5IHN0YXR1cyBvZiBhbiBhcHBvaW50bWVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFwcG9pbnRtZW50c3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhcnJpdmVkOiBTb21lIG9mIHRoZSBwYXRpZW50cyBoYXZlIGFycml2ZWQuXHJcbiAgICovXHJcbiAgQXJyaXZlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBib29rZWQ6IEFsbCBwYXJ0aWNpcGFudChzKSBoYXZlIGJlZW4gY29uc2lkZXJlZCBhbmQgdGhlIGFwcG9pbnRtZW50IGlzIGNvbmZpcm1lZCB0byBnbyBhaGVhZCBhdCB0aGUgZGF0ZS90aW1lcyBzcGVjaWZpZWQuXHJcbiAgICovXHJcbiAgQm9va2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIGFwcG9pbnRtZW50IGhhcyBiZWVuIGNhbmNlbGxlZC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZnVsZmlsbGVkOiBUaGlzIGFwcG9pbnRtZW50IGhhcyBjb21wbGV0ZWQgYW5kIG1heSBoYXZlIHJlc3VsdGVkIGluIGFuIGVuY291bnRlci5cclxuICAgKi9cclxuICBGdWxmaWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm9zaG93OiBTb21lIG9yIGFsbCBvZiB0aGUgcGFydGljaXBhbnQocykgaGF2ZSBub3QvZGlkIG5vdCBhcHBlYXIgZm9yIHRoZSBhcHBvaW50bWVudCAodXN1YWxseSB0aGUgcGF0aWVudCkuXHJcbiAgICovXHJcbiAgTm9TaG93OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBlbmRpbmc6IFNvbWUgb3IgYWxsIG9mIHRoZSBwYXJ0aWNpcGFudChzKSBoYXZlIG5vdCBmaW5hbGl6ZWQgdGhlaXIgYWNjZXB0YW5jZSBvZiB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdC5cclxuICAgKi9cclxuICBQZW5kaW5nOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBOb25lIG9mIHRoZSBwYXJ0aWNpcGFudChzKSBoYXZlIGZpbmFsaXplZCB0aGVpciBhY2NlcHRhbmNlIG9mIHRoZSBhcHBvaW50bWVudCByZXF1ZXN0LCBhbmQgdGhlIHN0YXJ0L2VuZCB0aW1lIG1heSBub3QgYmUgc2V0IHlldC5cclxuICAgKi9cclxuICBQcm9wb3NlZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBmcmVlL2J1c3kgc3RhdHVzIG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFwcG9pbnRtZW50c3RhdHVzQ29kaW5nczpBcHBvaW50bWVudHN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYXJyaXZlZDogU29tZSBvZiB0aGUgcGF0aWVudHMgaGF2ZSBhcnJpdmVkLlxyXG4gICAqL1xyXG4gIEFycml2ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQXJyaXZlZFwiLFxyXG4gICAgY29kZTogXCJhcnJpdmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hcHBvaW50bWVudHN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogYm9va2VkOiBBbGwgcGFydGljaXBhbnQocykgaGF2ZSBiZWVuIGNvbnNpZGVyZWQgYW5kIHRoZSBhcHBvaW50bWVudCBpcyBjb25maXJtZWQgdG8gZ28gYWhlYWQgYXQgdGhlIGRhdGUvdGltZXMgc3BlY2lmaWVkLlxyXG4gICAqL1xyXG4gIEJvb2tlZDoge1xyXG4gICAgZGlzcGxheTogXCJCb29rZWRcIixcclxuICAgIGNvZGU6IFwiYm9va2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hcHBvaW50bWVudHN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgYXBwb2ludG1lbnQgaGFzIGJlZW4gY2FuY2VsbGVkLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDoge1xyXG4gICAgZGlzcGxheTogXCJDYW5jZWxsZWRcIixcclxuICAgIGNvZGU6IFwiY2FuY2VsbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hcHBvaW50bWVudHN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZnVsZmlsbGVkOiBUaGlzIGFwcG9pbnRtZW50IGhhcyBjb21wbGV0ZWQgYW5kIG1heSBoYXZlIHJlc3VsdGVkIGluIGFuIGVuY291bnRlci5cclxuICAgKi9cclxuICBGdWxmaWxsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRnVsZmlsbGVkXCIsXHJcbiAgICBjb2RlOiBcImZ1bGZpbGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXBwb2ludG1lbnRzdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG5vc2hvdzogU29tZSBvciBhbGwgb2YgdGhlIHBhcnRpY2lwYW50KHMpIGhhdmUgbm90L2RpZCBub3QgYXBwZWFyIGZvciB0aGUgYXBwb2ludG1lbnQgKHVzdWFsbHkgdGhlIHBhdGllbnQpLlxyXG4gICAqL1xyXG4gIE5vU2hvdzoge1xyXG4gICAgZGlzcGxheTogXCJObyBTaG93XCIsXHJcbiAgICBjb2RlOiBcIm5vc2hvd1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXBwb2ludG1lbnRzdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBlbmRpbmc6IFNvbWUgb3IgYWxsIG9mIHRoZSBwYXJ0aWNpcGFudChzKSBoYXZlIG5vdCBmaW5hbGl6ZWQgdGhlaXIgYWNjZXB0YW5jZSBvZiB0aGUgYXBwb2ludG1lbnQgcmVxdWVzdC5cclxuICAgKi9cclxuICBQZW5kaW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBlbmRpbmdcIixcclxuICAgIGNvZGU6IFwicGVuZGluZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXBwb2ludG1lbnRzdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBOb25lIG9mIHRoZSBwYXJ0aWNpcGFudChzKSBoYXZlIGZpbmFsaXplZCB0aGVpciBhY2NlcHRhbmNlIG9mIHRoZSBhcHBvaW50bWVudCByZXF1ZXN0LCBhbmQgdGhlIHN0YXJ0L2VuZCB0aW1lIG1heSBub3QgYmUgc2V0IHlldC5cclxuICAgKi9cclxuICBQcm9wb3NlZDoge1xyXG4gICAgZGlzcGxheTogXCJQcm9wb3NlZFwiLFxyXG4gICAgY29kZTogXCJwcm9wb3NlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXBwb2ludG1lbnRzdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=