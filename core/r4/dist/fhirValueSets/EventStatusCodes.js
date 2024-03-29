// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-status|4.0.1
/**
 * Codes identifying the lifecycle stage of an event.
 */
export const EventStatusCodes = {
    /**
     * completed: The event has now concluded.
     */
    Completed: "completed",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: The event is currently occurring.
     */
    InProgress: "in-progress",
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    NotDone: "not-done",
    /**
     * on-hold: The event has been temporarily stopped but is expected to resume in the future.
     */
    OnHold: "on-hold",
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    Preparation: "preparation",
    /**
     * stopped: The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
     */
    Stopped: "stopped",
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRXZlbnRTdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFVBQVU7SUFDbkI7O09BRUc7SUFDSCxNQUFNLEVBQUUsU0FBUztJQUNqQjs7T0FFRztJQUNILFdBQVcsRUFBRSxhQUFhO0lBQzFCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZXZlbnQtc3RhdHVzfDQuMC4xXHJcblxyXG4vKipcclxuICogQ29kZXMgaWRlbnRpZnlpbmcgdGhlIGxpZmVjeWNsZSBzdGFnZSBvZiBhbiBldmVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmVudFN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIGV2ZW50IGhhcyBub3cgY29uY2x1ZGVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogXCJjb21wbGV0ZWRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGVsZWN0cm9uaWMgcmVjb3JkIHNob3VsZCBuZXZlciBoYXZlIGV4aXN0ZWQsIHRob3VnaCBpdCBpcyBwb3NzaWJsZSB0aGF0IHJlYWwtd29ybGQgZGVjaXNpb25zIHdlcmUgYmFzZWQgb24gaXQuICAoSWYgcmVhbC13b3JsZCBhY3Rpdml0eSBoYXMgb2NjdXJyZWQsIHRoZSBzdGF0dXMgc2hvdWxkIGJlIFwic3RvcHBlZFwiIHJhdGhlciB0aGFuIFwiZW50ZXJlZC1pbi1lcnJvclwiLikuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgZXZlbnQgaXMgY3VycmVudGx5IG9jY3VycmluZy5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiBcImluLXByb2dyZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LWRvbmU6IFRoZSBldmVudCB3YXMgdGVybWluYXRlZCBwcmlvciB0byBhbnkgYWN0aXZpdHkgYmV5b25kIHByZXBhcmF0aW9uLiAgSS5lLiBUaGUgJ21haW4nIGFjdGl2aXR5IGhhcyBub3QgeWV0IGJlZ3VuLiAgVGhlIGJvdW5kYXJ5IGJldHdlZW4gcHJlcGFyYXRvcnkgYW5kIHRoZSAnbWFpbicgYWN0aXZpdHkgaXMgY29udGV4dC1zcGVjaWZpYy5cclxuICAgKi9cclxuICBOb3REb25lOiBcIm5vdC1kb25lXCIsXHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogVGhlIGV2ZW50IGhhcyBiZWVuIHRlbXBvcmFyaWx5IHN0b3BwZWQgYnV0IGlzIGV4cGVjdGVkIHRvIHJlc3VtZSBpbiB0aGUgZnV0dXJlLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogXCJvbi1ob2xkXCIsXHJcbiAgLyoqXHJcbiAgICogcHJlcGFyYXRpb246IFRoZSBjb3JlIGV2ZW50IGhhcyBub3Qgc3RhcnRlZCB5ZXQsIGJ1dCBzb21lIHN0YWdpbmcgYWN0aXZpdGllcyBoYXZlIGJlZ3VuIChlLmcuIHN1cmdpY2FsIHN1aXRlIHByZXBhcmF0aW9uKS4gIFByZXBhcmF0aW9uIHN0YWdlcyBtYXkgYmUgdHJhY2tlZCBmb3IgYmlsbGluZyBwdXJwb3Nlcy5cclxuICAgKi9cclxuICBQcmVwYXJhdGlvbjogXCJwcmVwYXJhdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IFRoZSBldmVudCB3YXMgdGVybWluYXRlZCBwcmlvciB0byB0aGUgZnVsbCBjb21wbGV0aW9uIG9mIHRoZSBpbnRlbmRlZCBhY3Rpdml0eSBidXQgYWZ0ZXIgYXQgbGVhc3Qgc29tZSBvZiB0aGUgJ21haW4nIGFjdGl2aXR5IChiZXlvbmQgcHJlcGFyYXRpb24pIGhhcyBvY2N1cnJlZC5cclxuICAgKi9cclxuICBTdG9wcGVkOiBcInN0b3BwZWRcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgYXV0aG9yaW5nL3NvdXJjZSBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyBldmVudC4gIE5vdGU6IFRoaXMgY29uY2VwdCBpcyBub3QgdG8gYmUgdXNlZCBmb3IgXCJvdGhlclwiIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksICBidXQgdGhlIGF1dGhvcmluZy9zb3VyY2Ugc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2guXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgaWRlbnRpZnlpbmcgdGhlIGxpZmVjeWNsZSBzdGFnZSBvZiBhbiBldmVudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50U3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgRXZlbnRTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgRXZlbnRTdGF0dXNDb2Rlc107XHJcbiJdfQ==