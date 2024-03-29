// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-admin-status|4.0.1
/**
 * MedicationAdministration Status Codes
 */
export const MedicationAdminStatusCodes = {
    /**
     * completed: All actions that are implied by the administration have occurred.
     */
    Completed: "completed",
    /**
     * entered-in-error: The administration was entered in error and therefore nullified.
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: The administration has started but has not yet completed.
     */
    InProgress: "in-progress",
    /**
     * not-done: The administration was terminated prior to any impact on the subject (though preparatory actions may have been taken)
     */
    NotDone: "not-done",
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold: "on-hold",
    /**
     * stopped: Actions implied by the administration have been permanently halted, before all of them occurred.
     */
    Stopped: "stopped",
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for 'other' - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lZGljYXRpb25BZG1pblN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLGFBQWE7SUFDekI7O09BRUc7SUFDSCxPQUFPLEVBQUUsVUFBVTtJQUNuQjs7T0FFRztJQUNILE1BQU0sRUFBRSxTQUFTO0lBQ2pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVkaWNhdGlvbi1hZG1pbi1zdGF0dXN8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24gU3RhdHVzIENvZGVzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVkaWNhdGlvbkFkbWluU3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBhZG1pbmlzdHJhdGlvbiBoYXZlIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogXCJjb21wbGV0ZWRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgYWRtaW5pc3RyYXRpb24gd2FzIGVudGVyZWQgaW4gZXJyb3IgYW5kIHRoZXJlZm9yZSBudWxsaWZpZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgYWRtaW5pc3RyYXRpb24gaGFzIHN0YXJ0ZWQgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiBcImluLXByb2dyZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LWRvbmU6IFRoZSBhZG1pbmlzdHJhdGlvbiB3YXMgdGVybWluYXRlZCBwcmlvciB0byBhbnkgaW1wYWN0IG9uIHRoZSBzdWJqZWN0ICh0aG91Z2ggcHJlcGFyYXRvcnkgYWN0aW9ucyBtYXkgaGF2ZSBiZWVuIHRha2VuKVxyXG4gICAqL1xyXG4gIE5vdERvbmU6IFwibm90LWRvbmVcIixcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGFkbWluaXN0cmF0aW9uIGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCAnc3VzcGVuZGVkJy5cclxuICAgKi9cclxuICBPbkhvbGQ6IFwib24taG9sZFwiLFxyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgYWRtaW5pc3RyYXRpb24gaGF2ZSBiZWVuIHBlcm1hbmVudGx5IGhhbHRlZCwgYmVmb3JlIGFsbCBvZiB0aGVtIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IFwic3RvcHBlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBhdXRob3Jpbmcgc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgY3VycmVudGx5IGFwcGxpZXMgZm9yIHRoaXMgcmVxdWVzdC4gTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciAnb3RoZXInIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksIGl0J3MganVzdCBub3Qga25vd24gd2hpY2ggb25lLlxyXG4gICAqL1xyXG4gIFVua25vd246IFwidW5rbm93blwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbiBTdGF0dXMgQ29kZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25BZG1pblN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIE1lZGljYXRpb25BZG1pblN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBNZWRpY2F0aW9uQWRtaW5TdGF0dXNDb2Rlc107XHJcbiJdfQ==