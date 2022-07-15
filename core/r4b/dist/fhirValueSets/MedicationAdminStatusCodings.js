// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-admin-status|4.3.0
/**
 * MedicationAdministration Status Codes
 */
export const MedicationAdminStatusCodings = {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
    /**
     * in-progress: The administration has started but has not yet completed.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
    /**
     * not-done: The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    NotDone: {
        display: "Not Done",
        code: "not-done",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    Stopped: {
        display: "Stopped",
        code: "stopped",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: {
        display: "Unknown",
        code: "unknown",
        system: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw0RUFBNEU7QUFzQzVFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQW1DO0lBQzFFOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLCtEQUErRDtLQUN4RTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEU7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEU7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEU7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtEQUErRDtLQUN4RTtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsK0RBQStEO0tBQ3hFO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEU7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWRpY2F0aW9uLWFkbWluLXN0YXR1c3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbiBTdGF0dXMgQ29kZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25BZG1pblN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgYWRtaW5pc3RyYXRpb24gd2FzIGVudGVyZWQgaW4gZXJyb3IgYW5kIHRoZXJlZm9yZSBudWxsaWZpZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBhZG1pbmlzdHJhdGlvbiBoYXMgc3RhcnRlZCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LWRvbmU6IFRoZSBhZG1pbmlzdHJhdGlvbiB3YXMgdGVybWluYXRlZCBwcmlvciB0byBhbnkgaW1wYWN0IG9uIHRoZSBzdWJqZWN0ICh0aG91Z2ggcHJlcGFyYXRvcnkgYWN0aW9ucyBtYXkgaGF2ZSBiZWVuIHRha2VuKVxyXG4gICAqL1xyXG4gIE5vdERvbmU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIGJlZW4gdGVtcG9yYXJpbHkgaGFsdGVkLCBidXQgYXJlIGV4cGVjdGVkIHRvIGNvbnRpbnVlIGxhdGVyLiBNYXkgYWxzbyBiZSBjYWxsZWQgJ3N1c3BlbmRlZCcuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBiZWVuIHBlcm1hbmVudGx5IGhhbHRlZCwgYmVmb3JlIGFsbCBvZiB0aGVtIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyByZXF1ZXN0LiBOb3RlOiBUaGlzIGNvbmNlcHQgaXMgbm90IHRvIGJlIHVzZWQgZm9yICdvdGhlcicgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgaXQncyBqdXN0IG5vdCBrbm93biB3aGljaCBvbmUuXHJcbiAgICovXHJcbiAgVW5rbm93bjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbiBTdGF0dXMgQ29kZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBNZWRpY2F0aW9uQWRtaW5TdGF0dXNDb2RpbmdzOk1lZGljYXRpb25BZG1pblN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9uLWFkbWluLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIGFkbWluaXN0cmF0aW9uIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB0aGVyZWZvcmUgbnVsbGlmaWVkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgaW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgYWRtaW5pc3RyYXRpb24gaGFzIHN0YXJ0ZWQgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgICBjb2RlOiBcImluLXByb2dyZXNzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9uLWFkbWluLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LWRvbmU6IFRoZSBhZG1pbmlzdHJhdGlvbiB3YXMgdGVybWluYXRlZCBwcmlvciB0byBhbnkgaW1wYWN0IG9uIHRoZSBzdWJqZWN0ICh0aG91Z2ggcHJlcGFyYXRvcnkgYWN0aW9ucyBtYXkgaGF2ZSBiZWVuIHRha2VuKVxyXG4gICAqL1xyXG4gIE5vdERvbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IERvbmVcIixcclxuICAgIGNvZGU6IFwibm90LWRvbmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lZGljYXRpb24tYWRtaW4tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGFkbWluaXN0cmF0aW9uIGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCAnc3VzcGVuZGVkJy5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbi1ob2xkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9tZWRpY2F0aW9uLWFkbWluLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIGJlZW4gcGVybWFuZW50bHkgaGFsdGVkLCBiZWZvcmUgYWxsIG9mIHRoZW0gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgU3RvcHBlZDoge1xyXG4gICAgZGlzcGxheTogXCJTdG9wcGVkXCIsXHJcbiAgICBjb2RlOiBcInN0b3BwZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lZGljYXRpb24tYWRtaW4tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgYXV0aG9yaW5nIHN5c3RlbSBkb2VzIG5vdCBrbm93IHdoaWNoIG9mIHRoZSBzdGF0dXMgdmFsdWVzIGN1cnJlbnRseSBhcHBsaWVzIGZvciB0aGlzIHJlcXVlc3QuIE5vdGU6IFRoaXMgY29uY2VwdCBpcyBub3QgdG8gYmUgdXNlZCBmb3IgJ290aGVyJyAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBpdCdzIGp1c3Qgbm90IGtub3duIHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVua25vd25cIixcclxuICAgIGNvZGU6IFwidW5rbm93blwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=