// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-statement-status|3.0.2
/**
 * A coded concept indicating the current status of a MedicationStatement.
 */
export const MedicationStatementStatusCodings = {
    /**
     * active: The medication is still being taken.
     */
    Active: {
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/medication-statement-status",
    },
    /**
     * completed: The medication is no longer being taken.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/medication-statement-status",
    },
    /**
     * entered-in-error: The statement was recorded incorrectly.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/medication-statement-status",
    },
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended: {
        display: "Intended",
        code: "intended",
        system: "http://hl7.org/fhir/medication-statement-status",
    },
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/medication-statement-status",
    },
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/medication-statement-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdGQUFnRjtBQWtDaEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBdUM7SUFDbEY7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxpREFBaUQ7S0FDMUQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxpREFBaUQ7S0FDMUQ7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxpREFBaUQ7S0FDMUQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGlEQUFpRDtLQUMxRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlZCBjb25jZXB0IGluZGljYXRpbmcgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIGEgTWVkaWNhdGlvblN0YXRlbWVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIG1lZGljYXRpb24gaXMgc3RpbGwgYmVpbmcgdGFrZW4uXHJcbiAgICovXHJcbiAgQWN0aXZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIG1lZGljYXRpb24gaXMgbm8gbG9uZ2VyIGJlaW5nIHRha2VuLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgc3RhdGVtZW50IHdhcyByZWNvcmRlZCBpbmNvcnJlY3RseS5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpbnRlbmRlZDogVGhlIG1lZGljYXRpb24gbWF5IGJlIHRha2VuIGF0IHNvbWUgdGltZSBpbiB0aGUgZnV0dXJlLlxyXG4gICAqL1xyXG4gIEludGVuZGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgc3RhdGVtZW50IGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCBcInN1c3BlbmRlZFwiLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIHN0YXRlbWVudCBoYXZlIGJlZW4gcGVybWFuZW50bHkgaGFsdGVkLCBiZWZvcmUgYWxsIG9mIHRoZW0gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgU3RvcHBlZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29kZWQgY29uY2VwdCBpbmRpY2F0aW5nIHRoZSBjdXJyZW50IHN0YXR1cyBvZiBhIE1lZGljYXRpb25TdGF0ZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGluZ3M6TWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlOiBUaGUgbWVkaWNhdGlvbiBpcyBzdGlsbCBiZWluZyB0YWtlbi5cclxuICAgKi9cclxuICBBY3RpdmU6IHtcclxuICAgIGRpc3BsYXk6IFwiQWN0aXZlXCIsXHJcbiAgICBjb2RlOiBcImFjdGl2ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSBtZWRpY2F0aW9uIGlzIG5vIGxvbmdlciBiZWluZyB0YWtlbi5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBjb2RlOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgc3RhdGVtZW50IHdhcyByZWNvcmRlZCBpbmNvcnJlY3RseS5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lZGljYXRpb24tc3RhdGVtZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW50ZW5kZWQ6IFRoZSBtZWRpY2F0aW9uIG1heSBiZSB0YWtlbiBhdCBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cclxuICAgKi9cclxuICBJbnRlbmRlZDoge1xyXG4gICAgZGlzcGxheTogXCJJbnRlbmRlZFwiLFxyXG4gICAgY29kZTogXCJpbnRlbmRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIHN0YXRlbWVudCBoYXZlIGJlZW4gdGVtcG9yYXJpbHkgaGFsdGVkLCBidXQgYXJlIGV4cGVjdGVkIHRvIGNvbnRpbnVlIGxhdGVyLiBNYXkgYWxzbyBiZSBjYWxsZWQgXCJzdXNwZW5kZWRcIi5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbi1ob2xkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZWRpY2F0aW9uLXN0YXRlbWVudC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgc3RhdGVtZW50IGhhdmUgYmVlbiBwZXJtYW5lbnRseSBoYWx0ZWQsIGJlZm9yZSBhbGwgb2YgdGhlbSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBTdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN0b3BwZWRcIixcclxuICAgIGNvZGU6IFwic3RvcHBlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19