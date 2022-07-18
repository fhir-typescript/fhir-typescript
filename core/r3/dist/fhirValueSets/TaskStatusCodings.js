// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-status|3.0.2
/**
 * The current status of the task.
 */
export const TaskStatusCodings = {
    /**
     * accepted: The potential performer has agreed to execute the task but has not yet started work.
     */
    Accepted: {
        display: "Accepted",
        code: "accepted",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * cancelled: The task was not completed.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * completed: The task has been completed.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * draft: The task is not yet ready to be acted upon.
     */
    Draft: {
        display: "Draft",
        code: "draft",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * entered-in-error: The task should never have existed and is retained only because of the possibility it may have used.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * failed: The task was attempted but could not be completed due to some error.
     */
    Failed: {
        display: "Failed",
        code: "failed",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * in-progress: Task has been started but is not yet complete.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * on-hold: Task has been started but work has been paused.
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * ready: Task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
     */
    Ready: {
        display: "Ready",
        code: "ready",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * received: A potential performer has claimed ownership of the task and is evaluating whether to perform it.
     */
    Received: {
        display: "Received",
        code: "received",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * rejected: The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.
     */
    Rejected: {
        display: "Rejected",
        code: "rejected",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * requested: The task is ready to be acted upon and action is sought.
     */
    Requested: {
        display: "Requested",
        code: "requested",
        system: "http://hl7.org/fhir/task-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza1N0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Rhc2tTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQTBEaEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBd0I7SUFDcEQ7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC90YXNrLXN0YXR1c3wzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgdGFzay5cclxuICovXHJcbmV4cG9ydCB0eXBlIFRhc2tTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY2VwdGVkOiBUaGUgcG90ZW50aWFsIHBlcmZvcm1lciBoYXMgYWdyZWVkIHRvIGV4ZWN1dGUgdGhlIHRhc2sgYnV0IGhhcyBub3QgeWV0IHN0YXJ0ZWQgd29yay5cclxuICAgKi9cclxuICBBY2NlcHRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSB0YXNrIHdhcyBub3QgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSB0YXNrIGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZHJhZnQ6IFRoZSB0YXNrIGlzIG5vdCB5ZXQgcmVhZHkgdG8gYmUgYWN0ZWQgdXBvbi5cclxuICAgKi9cclxuICBEcmFmdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgdGFzayBzaG91bGQgbmV2ZXIgaGF2ZSBleGlzdGVkIGFuZCBpcyByZXRhaW5lZCBvbmx5IGJlY2F1c2Ugb2YgdGhlIHBvc3NpYmlsaXR5IGl0IG1heSBoYXZlIHVzZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZmFpbGVkOiBUaGUgdGFzayB3YXMgYXR0ZW1wdGVkIGJ1dCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBzb21lIGVycm9yLlxyXG4gICAqL1xyXG4gIEZhaWxlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpbi1wcm9ncmVzczogVGFzayBoYXMgYmVlbiBzdGFydGVkIGJ1dCBpcyBub3QgeWV0IGNvbXBsZXRlLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogVGFzayBoYXMgYmVlbiBzdGFydGVkIGJ1dCB3b3JrIGhhcyBiZWVuIHBhdXNlZC5cclxuICAgKi9cclxuICBPbkhvbGQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVhZHk6IFRhc2sgaXMgcmVhZHkgdG8gYmUgcGVyZm9ybWVkLCBidXQgbm8gYWN0aW9uIGhhcyB5ZXQgYmVlbiB0YWtlbi4gIFVzZWQgaW4gcGxhY2Ugb2YgcmVxdWVzdGVkL3JlY2VpdmVkL2FjY2VwdGVkL3JlamVjdGVkIHdoZW4gcmVxdWVzdCBhc3NpZ25tZW50IGFuZCBhY2NlcHRhbmNlIGlzIGEgZ2l2ZW4uXHJcbiAgICovXHJcbiAgUmVhZHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVjZWl2ZWQ6IEEgcG90ZW50aWFsIHBlcmZvcm1lciBoYXMgY2xhaW1lZCBvd25lcnNoaXAgb2YgdGhlIHRhc2sgYW5kIGlzIGV2YWx1YXRpbmcgd2hldGhlciB0byBwZXJmb3JtIGl0LlxyXG4gICAqL1xyXG4gIFJlY2VpdmVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlamVjdGVkOiBUaGUgcG90ZW50aWFsIHBlcmZvcm1lciB3aG8gY2xhaW1lZCBvd25lcnNoaXAgb2YgdGhlIHRhc2sgaGFzIGRlY2lkZWQgbm90IHRvIGV4ZWN1dGUgaXQgcHJpb3IgdG8gcGVyZm9ybWluZyBhbnkgYWN0aW9uLlxyXG4gICAqL1xyXG4gIFJlamVjdGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlcXVlc3RlZDogVGhlIHRhc2sgaXMgcmVhZHkgdG8gYmUgYWN0ZWQgdXBvbiBhbmQgYWN0aW9uIGlzIHNvdWdodC5cclxuICAgKi9cclxuICBSZXF1ZXN0ZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHRhc2suXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFza1N0YXR1c0NvZGluZ3M6VGFza1N0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWNjZXB0ZWQ6IFRoZSBwb3RlbnRpYWwgcGVyZm9ybWVyIGhhcyBhZ3JlZWQgdG8gZXhlY3V0ZSB0aGUgdGFzayBidXQgaGFzIG5vdCB5ZXQgc3RhcnRlZCB3b3JrLlxyXG4gICAqL1xyXG4gIEFjY2VwdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFjY2VwdGVkXCIsXHJcbiAgICBjb2RlOiBcImFjY2VwdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci90YXNrLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgdGFzayB3YXMgbm90IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2FuY2VsbGVkXCIsXHJcbiAgICBjb2RlOiBcImNhbmNlbGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIHRhc2sgaGFzIGJlZW4gY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDoge1xyXG4gICAgZGlzcGxheTogXCJDb21wbGV0ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci90YXNrLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZHJhZnQ6IFRoZSB0YXNrIGlzIG5vdCB5ZXQgcmVhZHkgdG8gYmUgYWN0ZWQgdXBvbi5cclxuICAgKi9cclxuICBEcmFmdDoge1xyXG4gICAgZGlzcGxheTogXCJEcmFmdFwiLFxyXG4gICAgY29kZTogXCJkcmFmdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSB0YXNrIHNob3VsZCBuZXZlciBoYXZlIGV4aXN0ZWQgYW5kIGlzIHJldGFpbmVkIG9ubHkgYmVjYXVzZSBvZiB0aGUgcG9zc2liaWxpdHkgaXQgbWF5IGhhdmUgdXNlZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmYWlsZWQ6IFRoZSB0YXNrIHdhcyBhdHRlbXB0ZWQgYnV0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIHNvbWUgZXJyb3IuXHJcbiAgICovXHJcbiAgRmFpbGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkZhaWxlZFwiLFxyXG4gICAgY29kZTogXCJmYWlsZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbi1wcm9ncmVzczogVGFzayBoYXMgYmVlbiBzdGFydGVkIGJ1dCBpcyBub3QgeWV0IGNvbXBsZXRlLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IHtcclxuICAgIGRpc3BsYXk6IFwiSW4gUHJvZ3Jlc3NcIixcclxuICAgIGNvZGU6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBUYXNrIGhhcyBiZWVuIHN0YXJ0ZWQgYnV0IHdvcmsgaGFzIGJlZW4gcGF1c2VkLlxyXG4gICAqL1xyXG4gIE9uSG9sZDoge1xyXG4gICAgZGlzcGxheTogXCJPbiBIb2xkXCIsXHJcbiAgICBjb2RlOiBcIm9uLWhvbGRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWFkeTogVGFzayBpcyByZWFkeSB0byBiZSBwZXJmb3JtZWQsIGJ1dCBubyBhY3Rpb24gaGFzIHlldCBiZWVuIHRha2VuLiAgVXNlZCBpbiBwbGFjZSBvZiByZXF1ZXN0ZWQvcmVjZWl2ZWQvYWNjZXB0ZWQvcmVqZWN0ZWQgd2hlbiByZXF1ZXN0IGFzc2lnbm1lbnQgYW5kIGFjY2VwdGFuY2UgaXMgYSBnaXZlbi5cclxuICAgKi9cclxuICBSZWFkeToge1xyXG4gICAgZGlzcGxheTogXCJSZWFkeVwiLFxyXG4gICAgY29kZTogXCJyZWFkeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlY2VpdmVkOiBBIHBvdGVudGlhbCBwZXJmb3JtZXIgaGFzIGNsYWltZWQgb3duZXJzaGlwIG9mIHRoZSB0YXNrIGFuZCBpcyBldmFsdWF0aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSBpdC5cclxuICAgKi9cclxuICBSZWNlaXZlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZWNlaXZlZFwiLFxyXG4gICAgY29kZTogXCJyZWNlaXZlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlamVjdGVkOiBUaGUgcG90ZW50aWFsIHBlcmZvcm1lciB3aG8gY2xhaW1lZCBvd25lcnNoaXAgb2YgdGhlIHRhc2sgaGFzIGRlY2lkZWQgbm90IHRvIGV4ZWN1dGUgaXQgcHJpb3IgdG8gcGVyZm9ybWluZyBhbnkgYWN0aW9uLlxyXG4gICAqL1xyXG4gIFJlamVjdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlamVjdGVkXCIsXHJcbiAgICBjb2RlOiBcInJlamVjdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci90YXNrLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVxdWVzdGVkOiBUaGUgdGFzayBpcyByZWFkeSB0byBiZSBhY3RlZCB1cG9uIGFuZCBhY3Rpb24gaXMgc291Z2h0LlxyXG4gICAqL1xyXG4gIFJlcXVlc3RlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZXF1ZXN0ZWRcIixcclxuICAgIGNvZGU6IFwicmVxdWVzdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci90YXNrLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==