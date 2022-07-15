// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-statement-status|4.3.0
/**
 * MedicationStatement Status Codes
 */
export const MedicationStatementStatusCodings = {
    /**
     * active: The medication is still being taken.
     */
    Active: {
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * completed: The medication is no longer being taken.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * entered-in-error: Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended: {
        display: "Intended",
        code: "intended",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * not-taken: The medication was not consumed by the patient
     */
    NotTaken: {
        display: "Not Taken",
        code: "not-taken",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
    /**
     * unknown: The state of the medication use is not currently known.
     */
    Unknown: {
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGdGQUFnRjtBQTBDaEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBdUM7SUFDbEY7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsNERBQTREO0tBQ3JFO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDREQUE0RDtLQUNyRTtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsNERBQTREO0tBQ3JFO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogTWVkaWNhdGlvblN0YXRlbWVudCBTdGF0dXMgQ29kZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIG1lZGljYXRpb24gaXMgc3RpbGwgYmVpbmcgdGFrZW4uXHJcbiAgICovXHJcbiAgQWN0aXZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIG1lZGljYXRpb24gaXMgbm8gbG9uZ2VyIGJlaW5nIHRha2VuLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBTb21lIG9mIHRoZSBhY3Rpb25zIHRoYXQgYXJlIGltcGxpZWQgYnkgdGhlIG1lZGljYXRpb24gc3RhdGVtZW50IG1heSBoYXZlIG9jY3VycmVkLiAgRm9yIGV4YW1wbGUsIHRoZSBwYXRpZW50IG1heSBoYXZlIHRha2VuIHNvbWUgb2YgdGhlIG1lZGljYXRpb24uICBDbGluaWNhbCBkZWNpc2lvbiBzdXBwb3J0IHN5c3RlbXMgc2hvdWxkIHRha2UgdGhpcyBzdGF0dXMgaW50byBhY2NvdW50LlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGludGVuZGVkOiBUaGUgbWVkaWNhdGlvbiBtYXkgYmUgdGFrZW4gYXQgc29tZSB0aW1lIGluIHRoZSBmdXR1cmUuXHJcbiAgICovXHJcbiAgSW50ZW5kZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LXRha2VuOiBUaGUgbWVkaWNhdGlvbiB3YXMgbm90IGNvbnN1bWVkIGJ5IHRoZSBwYXRpZW50XHJcbiAgICovXHJcbiAgTm90VGFrZW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBzdGF0ZW1lbnQgaGF2ZSBiZWVuIHRlbXBvcmFyaWx5IGhhbHRlZCwgYnV0IGFyZSBleHBlY3RlZCB0byBjb250aW51ZSBsYXRlci4gTWF5IGFsc28gYmUgY2FsbGVkICdzdXNwZW5kZWQnLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIHN0YXRlbWVudCBoYXZlIGJlZW4gcGVybWFuZW50bHkgaGFsdGVkLCBiZWZvcmUgYWxsIG9mIHRoZW0gb2NjdXJyZWQuIFRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIGlmIHRoZSBzdGF0ZW1lbnQgd2FzIGVudGVyZWQgaW4gZXJyb3IuXHJcbiAgICovXHJcbiAgU3RvcHBlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgc3RhdGUgb2YgdGhlIG1lZGljYXRpb24gdXNlIGlzIG5vdCBjdXJyZW50bHkga25vd24uXHJcbiAgICovXHJcbiAgVW5rbm93bjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25TdGF0ZW1lbnQgU3RhdHVzIENvZGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGluZ3M6TWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlOiBUaGUgbWVkaWNhdGlvbiBpcyBzdGlsbCBiZWluZyB0YWtlbi5cclxuICAgKi9cclxuICBBY3RpdmU6IHtcclxuICAgIGRpc3BsYXk6IFwiQWN0aXZlXCIsXHJcbiAgICBjb2RlOiBcImFjdGl2ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS9tZWRpY2F0aW9uLXN0YXRlbWVudC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIG1lZGljYXRpb24gaXMgbm8gbG9uZ2VyIGJlaW5nIHRha2VuLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL21lZGljYXRpb24tc3RhdGVtZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogU29tZSBvZiB0aGUgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBtZWRpY2F0aW9uIHN0YXRlbWVudCBtYXkgaGF2ZSBvY2N1cnJlZC4gIEZvciBleGFtcGxlLCB0aGUgcGF0aWVudCBtYXkgaGF2ZSB0YWtlbiBzb21lIG9mIHRoZSBtZWRpY2F0aW9uLiAgQ2xpbmljYWwgZGVjaXNpb24gc3VwcG9ydCBzeXN0ZW1zIHNob3VsZCB0YWtlIHRoaXMgc3RhdHVzIGludG8gYWNjb3VudC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbi1zdGF0ZW1lbnQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbnRlbmRlZDogVGhlIG1lZGljYXRpb24gbWF5IGJlIHRha2VuIGF0IHNvbWUgdGltZSBpbiB0aGUgZnV0dXJlLlxyXG4gICAqL1xyXG4gIEludGVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkludGVuZGVkXCIsXHJcbiAgICBjb2RlOiBcImludGVuZGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL21lZGljYXRpb24tc3RhdGVtZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LXRha2VuOiBUaGUgbWVkaWNhdGlvbiB3YXMgbm90IGNvbnN1bWVkIGJ5IHRoZSBwYXRpZW50XHJcbiAgICovXHJcbiAgTm90VGFrZW46IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IFRha2VuXCIsXHJcbiAgICBjb2RlOiBcIm5vdC10YWtlblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS9tZWRpY2F0aW9uLXN0YXRlbWVudC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgc3RhdGVtZW50IGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCAnc3VzcGVuZGVkJy5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbi1ob2xkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL21lZGljYXRpb24tc3RhdGVtZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBzdGF0ZW1lbnQgaGF2ZSBiZWVuIHBlcm1hbmVudGx5IGhhbHRlZCwgYmVmb3JlIGFsbCBvZiB0aGVtIG9jY3VycmVkLiBUaGlzIHNob3VsZCBub3QgYmUgdXNlZCBpZiB0aGUgc3RhdGVtZW50IHdhcyBlbnRlcmVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU3RvcHBlZFwiLFxyXG4gICAgY29kZTogXCJzdG9wcGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL21lZGljYXRpb24tc3RhdGVtZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIHN0YXRlIG9mIHRoZSBtZWRpY2F0aW9uIHVzZSBpcyBub3QgY3VycmVudGx5IGtub3duLlxyXG4gICAqL1xyXG4gIFVua25vd246IHtcclxuICAgIGRpc3BsYXk6IFwiVW5rbm93blwiLFxyXG4gICAgY29kZTogXCJ1bmtub3duXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL21lZGljYXRpb24tc3RhdGVtZW50LXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==