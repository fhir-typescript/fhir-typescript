// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/event-status|3.0.2
/**
 * Codes identifying the stage lifecycle stage of a event
 */
export const EventStatusCodes = {
    /**
     * aborted: The event was  prior to the full completion of the intended actions
     */
    Aborted: "aborted",
    /**
     * completed: The event has now concluded
     */
    Completed: "completed",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: The event is currently occurring
     */
    InProgress: "in-progress",
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    Preparation: "preparation",
    /**
     * suspended: The event has been temporarily stopped but is expected to resume in the future
     */
    Suspended: "suspended",
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRXZlbnRTdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLGFBQWE7SUFDekI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2V2ZW50LXN0YXR1c3wzLjAuMlxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGlkZW50aWZ5aW5nIHRoZSBzdGFnZSBsaWZlY3ljbGUgc3RhZ2Ugb2YgYSBldmVudFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50U3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYWJvcnRlZDogVGhlIGV2ZW50IHdhcyAgcHJpb3IgdG8gdGhlIGZ1bGwgY29tcGxldGlvbiBvZiB0aGUgaW50ZW5kZWQgYWN0aW9uc1xyXG4gICAqL1xyXG4gIEFib3J0ZWQ6IFwiYWJvcnRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIGV2ZW50IGhhcyBub3cgY29uY2x1ZGVkXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBcImNvbXBsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgZWxlY3Ryb25pYyByZWNvcmQgc2hvdWxkIG5ldmVyIGhhdmUgZXhpc3RlZCwgdGhvdWdoIGl0IGlzIHBvc3NpYmxlIHRoYXQgcmVhbC13b3JsZCBkZWNpc2lvbnMgd2VyZSBiYXNlZCBvbiBpdC4gIChJZiByZWFsLXdvcmxkIGFjdGl2aXR5IGhhcyBvY2N1cnJlZCwgdGhlIHN0YXR1cyBzaG91bGQgYmUgXCJjYW5jZWxsZWRcIiByYXRoZXIgdGhhbiBcImVudGVyZWQtaW4tZXJyb3JcIi4pXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgZXZlbnQgaXMgY3VycmVudGx5IG9jY3VycmluZ1xyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAvKipcclxuICAgKiBwcmVwYXJhdGlvbjogVGhlIGNvcmUgZXZlbnQgaGFzIG5vdCBzdGFydGVkIHlldCwgYnV0IHNvbWUgc3RhZ2luZyBhY3Rpdml0aWVzIGhhdmUgYmVndW4gKGUuZy4gc3VyZ2ljYWwgc3VpdGUgcHJlcGFyYXRpb24pLiAgUHJlcGFyYXRpb24gc3RhZ2VzIG1heSBiZSB0cmFja2VkIGZvciBiaWxsaW5nIHB1cnBvc2VzLlxyXG4gICAqL1xyXG4gIFByZXBhcmF0aW9uOiBcInByZXBhcmF0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogc3VzcGVuZGVkOiBUaGUgZXZlbnQgaGFzIGJlZW4gdGVtcG9yYXJpbHkgc3RvcHBlZCBidXQgaXMgZXhwZWN0ZWQgdG8gcmVzdW1lIGluIHRoZSBmdXR1cmVcclxuICAgKi9cclxuICBTdXNwZW5kZWQ6IFwic3VzcGVuZGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGF1dGhvcmluZyBzeXN0ZW0gZG9lcyBub3Qga25vdyB3aGljaCBvZiB0aGUgc3RhdHVzIHZhbHVlcyBjdXJyZW50bHkgYXBwbGllcyBmb3IgdGhpcyByZXF1ZXN0LiAgTm90ZTogVGhpcyBjb25jZXB0IGlzIG5vdCB0byBiZSB1c2VkIGZvciBcIm90aGVyXCIgLSBvbmUgb2YgdGhlIGxpc3RlZCBzdGF0dXNlcyBpcyBwcmVzdW1lZCB0byBhcHBseSwgaXQncyBqdXN0IG5vdCBrbm93biB3aGljaCBvbmUuXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgaWRlbnRpZnlpbmcgdGhlIHN0YWdlIGxpZmVjeWNsZSBzdGFnZSBvZiBhIGV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudFN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIEV2ZW50U3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIEV2ZW50U3RhdHVzQ29kZXNdO1xyXG4iXX0=