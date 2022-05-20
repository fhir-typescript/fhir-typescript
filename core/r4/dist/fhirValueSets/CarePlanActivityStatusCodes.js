// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-status|4.0.1
/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 */
export const CarePlanActivityStatusCodes = {
    /**
     * cancelled: The planned care plan activity has been withdrawn.
     */
    Cancelled: "cancelled",
    /**
     * completed: Care plan activity has been completed (more or less) as planned.
     */
    Completed: "completed",
    /**
     * entered-in-error: Care plan activity was entered in error and voided.
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: Care plan activity has been started but is not yet complete.
     */
    InProgress: "in-progress",
    /**
     * not-started: Care plan activity is planned but no action has yet been taken.
     */
    NotStarted: "not-started",
    /**
     * on-hold: Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.
     */
    OnHold: "on-hold",
    /**
     * scheduled: Appointment or other booking has occurred but activity has not yet begun.
     */
    Scheduled: "scheduled",
    /**
     * stopped: The planned care plan activity has been ended prior to completion after the activity was started.
     */
    Stopped: "stopped",
    /**
     * unknown: The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZVBsYW5BY3Rpdml0eVN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DYXJlUGxhbkFjdGl2aXR5U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBRTlFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLGFBQWE7SUFDekI7O09BRUc7SUFDSCxNQUFNLEVBQUUsU0FBUztJQUNqQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY2FyZS1wbGFuLWFjdGl2aXR5LXN0YXR1c3w0LjAuMVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIHRoYXQgcmVmbGVjdCB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIGNhcmUgcGxhbiBhY3Rpdml0eSB3aXRoaW4gaXRzIG92ZXJhbGwgbGlmZSBjeWNsZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDYXJlUGxhbkFjdGl2aXR5U3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgcGxhbm5lZCBjYXJlIHBsYW4gYWN0aXZpdHkgaGFzIGJlZW4gd2l0aGRyYXduLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogXCJjYW5jZWxsZWRcIixcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IENhcmUgcGxhbiBhY3Rpdml0eSBoYXMgYmVlbiBjb21wbGV0ZWQgKG1vcmUgb3IgbGVzcykgYXMgcGxhbm5lZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IFwiY29tcGxldGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogQ2FyZSBwbGFuIGFjdGl2aXR5IHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB2b2lkZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBDYXJlIHBsYW4gYWN0aXZpdHkgaGFzIGJlZW4gc3RhcnRlZCBidXQgaXMgbm90IHlldCBjb21wbGV0ZS5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiBcImluLXByb2dyZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LXN0YXJ0ZWQ6IENhcmUgcGxhbiBhY3Rpdml0eSBpcyBwbGFubmVkIGJ1dCBubyBhY3Rpb24gaGFzIHlldCBiZWVuIHRha2VuLlxyXG4gICAqL1xyXG4gIE5vdFN0YXJ0ZWQ6IFwibm90LXN0YXJ0ZWRcIixcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBDYXJlIHBsYW4gYWN0aXZpdHkgd2FzIHN0YXJ0ZWQgYnV0IGhhcyB0ZW1wb3JhcmlseSBjZWFzZWQgd2l0aCBhbiBleHBlY3RhdGlvbiBvZiByZXN1bXB0aW9uIGF0IGEgZnV0dXJlIHRpbWUuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBcIm9uLWhvbGRcIixcclxuICAvKipcclxuICAgKiBzY2hlZHVsZWQ6IEFwcG9pbnRtZW50IG9yIG90aGVyIGJvb2tpbmcgaGFzIG9jY3VycmVkIGJ1dCBhY3Rpdml0eSBoYXMgbm90IHlldCBiZWd1bi5cclxuICAgKi9cclxuICBTY2hlZHVsZWQ6IFwic2NoZWR1bGVkXCIsXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogVGhlIHBsYW5uZWQgY2FyZSBwbGFuIGFjdGl2aXR5IGhhcyBiZWVuIGVuZGVkIHByaW9yIHRvIGNvbXBsZXRpb24gYWZ0ZXIgdGhlIGFjdGl2aXR5IHdhcyBzdGFydGVkLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IFwic3RvcHBlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYXJlIHBsYW4gYWN0aXZpdHkgaXMgbm90IGtub3duLiAgTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBcIm90aGVyXCIgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgYnV0IHRoZSBhdXRob3Jpbmcvc291cmNlIHN5c3RlbSBkb2VzIG5vdCBrbm93IHdoaWNoIG9uZS5cclxuICAgKi9cclxuICBVbmtub3duOiBcInVua25vd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyB0aGF0IHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBjYXJlIHBsYW4gYWN0aXZpdHkgd2l0aGluIGl0cyBvdmVyYWxsIGxpZmUgY3ljbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXJlUGxhbkFjdGl2aXR5U3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgQ2FyZVBsYW5BY3Rpdml0eVN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBDYXJlUGxhbkFjdGl2aXR5U3RhdHVzQ29kZXNdO1xyXG4iXX0=