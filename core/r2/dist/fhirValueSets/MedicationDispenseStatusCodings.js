// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-dispense-status|1.0.2
/**
 * A code specifying the state of the dispense event.
 *
 * Describes the lifecycle of the dispense.
 */
export const MedicationDispenseStatusCodings = {
    /**
     * completed: All actions that are implied by the dispense have occurred.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/medication-dispense-status",
    },
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError: {
        display: "Entered in-Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/medication-dispense-status",
    },
    /**
     * in-progress: The dispense has started but has not yet completed.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/medication-dispense-status",
    },
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended"
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/medication-dispense-status",
    },
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/medication-dispense-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbkRpc3BlbnNlU3RhdHVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbkRpc3BlbnNlU3RhdHVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrRUFBK0U7QUFnQy9FOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBc0M7SUFDaEY7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lZGljYXRpb24tZGlzcGVuc2Utc3RhdHVzfDEuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHN0YXRlIG9mIHRoZSBkaXNwZW5zZSBldmVudC5cclxuICogXHJcbiAqIERlc2NyaWJlcyB0aGUgbGlmZWN5Y2xlIG9mIHRoZSBkaXNwZW5zZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25EaXNwZW5zZVN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBkaXNwZW5zZSBoYXZlIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgZGlzcGVuc2Ugd2FzIGVudGVyZWQgaW4gZXJyb3IgYW5kIHRoZXJlZm9yZSBudWxsaWZpZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBkaXNwZW5zZSBoYXMgc3RhcnRlZCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIGJlZW4gdGVtcG9yYXJpbHkgaGFsdGVkLCBidXQgYXJlIGV4cGVjdGVkIHRvIGNvbnRpbnVlIGxhdGVyLiBNYXkgYWxzbyBiZSBjYWxsZWQgXCJzdXNwZW5kZWRcIlxyXG4gICAqL1xyXG4gIE9uSG9sZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGRpc3BlbnNlIGhhdmUgYmVlbiBwZXJtYW5lbnRseSBoYWx0ZWQsIGJlZm9yZSBhbGwgb2YgdGhlbSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBTdG9wcGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHN0YXRlIG9mIHRoZSBkaXNwZW5zZSBldmVudC5cclxuICogXHJcbiAqIERlc2NyaWJlcyB0aGUgbGlmZWN5Y2xlIG9mIHRoZSBkaXNwZW5zZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNZWRpY2F0aW9uRGlzcGVuc2VTdGF0dXNDb2RpbmdzOk1lZGljYXRpb25EaXNwZW5zZVN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBkaXNwZW5zZSBoYXZlIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZWRpY2F0aW9uLWRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGRpc3BlbnNlIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB0aGVyZWZvcmUgbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4tRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1kaXNwZW5zZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgZGlzcGVuc2UgaGFzIHN0YXJ0ZWQgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgICBjb2RlOiBcImluLXByb2dyZXNzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZWRpY2F0aW9uLWRpc3BlbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIGJlZW4gdGVtcG9yYXJpbHkgaGFsdGVkLCBidXQgYXJlIGV4cGVjdGVkIHRvIGNvbnRpbnVlIGxhdGVyLiBNYXkgYWxzbyBiZSBjYWxsZWQgXCJzdXNwZW5kZWRcIlxyXG4gICAqL1xyXG4gIE9uSG9sZDoge1xyXG4gICAgZGlzcGxheTogXCJPbiBIb2xkXCIsXHJcbiAgICBjb2RlOiBcIm9uLWhvbGRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lZGljYXRpb24tZGlzcGVuc2Utc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGRpc3BlbnNlIGhhdmUgYmVlbiBwZXJtYW5lbnRseSBoYWx0ZWQsIGJlZm9yZSBhbGwgb2YgdGhlbSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBTdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN0b3BwZWRcIixcclxuICAgIGNvZGU6IFwic3RvcHBlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1kaXNwZW5zZS1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=