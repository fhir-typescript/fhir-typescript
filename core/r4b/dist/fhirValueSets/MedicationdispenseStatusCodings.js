// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationdispense-status|4.3.0
/**
 * MedicationDispense Status Codes
 */
export const MedicationdispenseStatusCodings = {
    /**
     * cancelled: The dispensed product was not and will never be picked up by the patient.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * completed: The dispensed product has been picked up.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * declined: The dispense was declined and not performed.
     */
    Declined: {
        display: "Declined",
        code: "declined",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * in-progress: The dispensed product is ready for pickup.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
     */
    Preparation: {
        display: "Preparation",
        code: "preparation",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
    /**
     * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
     */
    Unknown: {
        display: "Unknown",
        code: "unknown",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbmRpc3BlbnNlU3RhdHVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbmRpc3BlbnNlU3RhdHVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw4RUFBOEU7QUE4QzlFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQXNDO0lBQ2hGOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGlFQUFpRTtLQUMxRTtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGlFQUFpRTtLQUMxRTtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLGlFQUFpRTtLQUMxRTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSxpRUFBaUU7S0FDMUU7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxpRUFBaUU7S0FDMUU7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGlFQUFpRTtLQUMxRTtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLGlFQUFpRTtLQUMxRTtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsaUVBQWlFO0tBQzFFO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxpRUFBaUU7S0FDMUU7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWRpY2F0aW9uZGlzcGVuc2Utc3RhdHVzfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogTWVkaWNhdGlvbkRpc3BlbnNlIFN0YXR1cyBDb2Rlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVkaWNhdGlvbmRpc3BlbnNlU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBkaXNwZW5zZWQgcHJvZHVjdCB3YXMgbm90IGFuZCB3aWxsIG5ldmVyIGJlIHBpY2tlZCB1cCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBUaGUgZGlzcGVuc2VkIHByb2R1Y3QgaGFzIGJlZW4gcGlja2VkIHVwLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkZWNsaW5lZDogVGhlIGRpc3BlbnNlIHdhcyBkZWNsaW5lZCBhbmQgbm90IHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBEZWNsaW5lZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgZGlzcGVuc2Ugd2FzIGVudGVyZWQgaW4gZXJyb3IgYW5kIHRoZXJlZm9yZSBudWxsaWZpZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBkaXNwZW5zZWQgcHJvZHVjdCBpcyByZWFkeSBmb3IgcGlja3VwLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogVGhlIGRpc3BlbnNlIHByb2Nlc3MgaXMgcGF1c2VkIHdoaWxlIHdhaXRpbmcgZm9yIGFuIGV4dGVybmFsIGV2ZW50IHRvIHJlYWN0aXZhdGUgdGhlIGRpc3BlbnNlLiAgRm9yIGV4YW1wbGUsIG5ldyBzdG9jayBoYXMgYXJyaXZlZCBvciB0aGUgcHJlc2NyaWJlciBoYXMgY2FsbGVkLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcmVwYXJhdGlvbjogVGhlIGNvcmUgZXZlbnQgaGFzIG5vdCBzdGFydGVkIHlldCwgYnV0IHNvbWUgc3RhZ2luZyBhY3Rpdml0aWVzIGhhdmUgYmVndW4gKGUuZy4gaW5pdGlhbCBjb21wb3VuZGluZyBvciBwYWNrYWdpbmcgb2YgbWVkaWNhdGlvbikuIFByZXBhcmF0aW9uIHN0YWdlcyBtYXkgYmUgdHJhY2tlZCBmb3IgYmlsbGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBQcmVwYXJhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGRpc3BlbnNlIGhhdmUgYmVlbiBwZXJtYW5lbnRseSBoYWx0ZWQsIGJlZm9yZSBhbGwgb2YgdGhlbSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBTdG9wcGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBhdXRob3Jpbmcgc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgYXBwbGllcyBmb3IgdGhpcyBtZWRpY2F0aW9uIGRpc3BlbnNlLiAgTm90ZTogdGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBvdGhlciAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBpdCdzIGp1c3Qgbm93IGtub3duIHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogTWVkaWNhdGlvbkRpc3BlbnNlIFN0YXR1cyBDb2Rlc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lZGljYXRpb25kaXNwZW5zZVN0YXR1c0NvZGluZ3M6TWVkaWNhdGlvbmRpc3BlbnNlU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBkaXNwZW5zZWQgcHJvZHVjdCB3YXMgbm90IGFuZCB3aWxsIG5ldmVyIGJlIHBpY2tlZCB1cCBieSB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2FuY2VsbGVkXCIsXHJcbiAgICBjb2RlOiBcImNhbmNlbGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbmRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBUaGUgZGlzcGVuc2VkIHByb2R1Y3QgaGFzIGJlZW4gcGlja2VkIHVwLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9uZGlzcGVuc2Utc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkZWNsaW5lZDogVGhlIGRpc3BlbnNlIHdhcyBkZWNsaW5lZCBhbmQgbm90IHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBEZWNsaW5lZDoge1xyXG4gICAgZGlzcGxheTogXCJEZWNsaW5lZFwiLFxyXG4gICAgY29kZTogXCJkZWNsaW5lZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbmRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGRpc3BlbnNlIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB0aGVyZWZvcmUgbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbmRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBkaXNwZW5zZWQgcHJvZHVjdCBpcyByZWFkeSBmb3IgcGlja3VwLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IHtcclxuICAgIGRpc3BsYXk6IFwiSW4gUHJvZ3Jlc3NcIixcclxuICAgIGNvZGU6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lZGljYXRpb25kaXNwZW5zZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IFRoZSBkaXNwZW5zZSBwcm9jZXNzIGlzIHBhdXNlZCB3aGlsZSB3YWl0aW5nIGZvciBhbiBleHRlcm5hbCBldmVudCB0byByZWFjdGl2YXRlIHRoZSBkaXNwZW5zZS4gIEZvciBleGFtcGxlLCBuZXcgc3RvY2sgaGFzIGFycml2ZWQgb3IgdGhlIHByZXNjcmliZXIgaGFzIGNhbGxlZC5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbi1ob2xkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9uZGlzcGVuc2Utc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmVwYXJhdGlvbjogVGhlIGNvcmUgZXZlbnQgaGFzIG5vdCBzdGFydGVkIHlldCwgYnV0IHNvbWUgc3RhZ2luZyBhY3Rpdml0aWVzIGhhdmUgYmVndW4gKGUuZy4gaW5pdGlhbCBjb21wb3VuZGluZyBvciBwYWNrYWdpbmcgb2YgbWVkaWNhdGlvbikuIFByZXBhcmF0aW9uIHN0YWdlcyBtYXkgYmUgdHJhY2tlZCBmb3IgYmlsbGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBQcmVwYXJhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJQcmVwYXJhdGlvblwiLFxyXG4gICAgY29kZTogXCJwcmVwYXJhdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbmRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBkaXNwZW5zZSBoYXZlIGJlZW4gcGVybWFuZW50bHkgaGFsdGVkLCBiZWZvcmUgYWxsIG9mIHRoZW0gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgU3RvcHBlZDoge1xyXG4gICAgZGlzcGxheTogXCJTdG9wcGVkXCIsXHJcbiAgICBjb2RlOiBcInN0b3BwZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lZGljYXRpb25kaXNwZW5zZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBhdXRob3Jpbmcgc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgYXBwbGllcyBmb3IgdGhpcyBtZWRpY2F0aW9uIGRpc3BlbnNlLiAgTm90ZTogdGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBvdGhlciAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBpdCdzIGp1c3Qgbm93IGtub3duIHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVua25vd25cIixcclxuICAgIGNvZGU6IFwidW5rbm93blwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbmRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==