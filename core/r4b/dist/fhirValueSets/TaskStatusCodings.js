// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-status|4.3.0
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
     * in-progress: The task has been started but is not yet complete.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * on-hold: The task has been started but work has been paused.
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/task-status",
    },
    /**
     * ready: The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza1N0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Rhc2tTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQTBEaEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBd0I7SUFDcEQ7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdGFzay1zdGF0dXN8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHRhc2suXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUYXNrU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhY2NlcHRlZDogVGhlIHBvdGVudGlhbCBwZXJmb3JtZXIgaGFzIGFncmVlZCB0byBleGVjdXRlIHRoZSB0YXNrIGJ1dCBoYXMgbm90IHlldCBzdGFydGVkIHdvcmsuXHJcbiAgICovXHJcbiAgQWNjZXB0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgdGFzayB3YXMgbm90IGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBUaGUgdGFzayBoYXMgYmVlbiBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRyYWZ0OiBUaGUgdGFzayBpcyBub3QgeWV0IHJlYWR5IHRvIGJlIGFjdGVkIHVwb24uXHJcbiAgICovXHJcbiAgRHJhZnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIHRhc2sgc2hvdWxkIG5ldmVyIGhhdmUgZXhpc3RlZCBhbmQgaXMgcmV0YWluZWQgb25seSBiZWNhdXNlIG9mIHRoZSBwb3NzaWJpbGl0eSBpdCBtYXkgaGF2ZSB1c2VkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGZhaWxlZDogVGhlIHRhc2sgd2FzIGF0dGVtcHRlZCBidXQgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gc29tZSBlcnJvci5cclxuICAgKi9cclxuICBGYWlsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSB0YXNrIGhhcyBiZWVuIHN0YXJ0ZWQgYnV0IGlzIG5vdCB5ZXQgY29tcGxldGUuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBUaGUgdGFzayBoYXMgYmVlbiBzdGFydGVkIGJ1dCB3b3JrIGhhcyBiZWVuIHBhdXNlZC5cclxuICAgKi9cclxuICBPbkhvbGQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVhZHk6IFRoZSB0YXNrIGlzIHJlYWR5IHRvIGJlIHBlcmZvcm1lZCwgYnV0IG5vIGFjdGlvbiBoYXMgeWV0IGJlZW4gdGFrZW4uICBVc2VkIGluIHBsYWNlIG9mIHJlcXVlc3RlZC9yZWNlaXZlZC9hY2NlcHRlZC9yZWplY3RlZCB3aGVuIHJlcXVlc3QgYXNzaWdubWVudCBhbmQgYWNjZXB0YW5jZSBpcyBhIGdpdmVuLlxyXG4gICAqL1xyXG4gIFJlYWR5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlY2VpdmVkOiBBIHBvdGVudGlhbCBwZXJmb3JtZXIgaGFzIGNsYWltZWQgb3duZXJzaGlwIG9mIHRoZSB0YXNrIGFuZCBpcyBldmFsdWF0aW5nIHdoZXRoZXIgdG8gcGVyZm9ybSBpdC5cclxuICAgKi9cclxuICBSZWNlaXZlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWplY3RlZDogVGhlIHBvdGVudGlhbCBwZXJmb3JtZXIgd2hvIGNsYWltZWQgb3duZXJzaGlwIG9mIHRoZSB0YXNrIGhhcyBkZWNpZGVkIG5vdCB0byBleGVjdXRlIGl0IHByaW9yIHRvIHBlcmZvcm1pbmcgYW55IGFjdGlvbi5cclxuICAgKi9cclxuICBSZWplY3RlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXF1ZXN0ZWQ6IFRoZSB0YXNrIGlzIHJlYWR5IHRvIGJlIGFjdGVkIHVwb24gYW5kIGFjdGlvbiBpcyBzb3VnaHQuXHJcbiAgICovXHJcbiAgUmVxdWVzdGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSB0YXNrLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhc2tTdGF0dXNDb2RpbmdzOlRhc2tTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY2VwdGVkOiBUaGUgcG90ZW50aWFsIHBlcmZvcm1lciBoYXMgYWdyZWVkIHRvIGV4ZWN1dGUgdGhlIHRhc2sgYnV0IGhhcyBub3QgeWV0IHN0YXJ0ZWQgd29yay5cclxuICAgKi9cclxuICBBY2NlcHRlZDoge1xyXG4gICAgZGlzcGxheTogXCJBY2NlcHRlZFwiLFxyXG4gICAgY29kZTogXCJhY2NlcHRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIHRhc2sgd2FzIG5vdCBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNhbmNlbGxlZFwiLFxyXG4gICAgY29kZTogXCJjYW5jZWxsZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSB0YXNrIGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBjb2RlOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRyYWZ0OiBUaGUgdGFzayBpcyBub3QgeWV0IHJlYWR5IHRvIGJlIGFjdGVkIHVwb24uXHJcbiAgICovXHJcbiAgRHJhZnQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRHJhZnRcIixcclxuICAgIGNvZGU6IFwiZHJhZnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgdGFzayBzaG91bGQgbmV2ZXIgaGF2ZSBleGlzdGVkIGFuZCBpcyByZXRhaW5lZCBvbmx5IGJlY2F1c2Ugb2YgdGhlIHBvc3NpYmlsaXR5IGl0IG1heSBoYXZlIHVzZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRW50ZXJlZCBpbiBFcnJvclwiLFxyXG4gICAgY29kZTogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci90YXNrLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZmFpbGVkOiBUaGUgdGFzayB3YXMgYXR0ZW1wdGVkIGJ1dCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBzb21lIGVycm9yLlxyXG4gICAqL1xyXG4gIEZhaWxlZDoge1xyXG4gICAgZGlzcGxheTogXCJGYWlsZWRcIixcclxuICAgIGNvZGU6IFwiZmFpbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci90YXNrLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSB0YXNrIGhhcyBiZWVuIHN0YXJ0ZWQgYnV0IGlzIG5vdCB5ZXQgY29tcGxldGUuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczoge1xyXG4gICAgZGlzcGxheTogXCJJbiBQcm9ncmVzc1wiLFxyXG4gICAgY29kZTogXCJpbi1wcm9ncmVzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IFRoZSB0YXNrIGhhcyBiZWVuIHN0YXJ0ZWQgYnV0IHdvcmsgaGFzIGJlZW4gcGF1c2VkLlxyXG4gICAqL1xyXG4gIE9uSG9sZDoge1xyXG4gICAgZGlzcGxheTogXCJPbiBIb2xkXCIsXHJcbiAgICBjb2RlOiBcIm9uLWhvbGRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWFkeTogVGhlIHRhc2sgaXMgcmVhZHkgdG8gYmUgcGVyZm9ybWVkLCBidXQgbm8gYWN0aW9uIGhhcyB5ZXQgYmVlbiB0YWtlbi4gIFVzZWQgaW4gcGxhY2Ugb2YgcmVxdWVzdGVkL3JlY2VpdmVkL2FjY2VwdGVkL3JlamVjdGVkIHdoZW4gcmVxdWVzdCBhc3NpZ25tZW50IGFuZCBhY2NlcHRhbmNlIGlzIGEgZ2l2ZW4uXHJcbiAgICovXHJcbiAgUmVhZHk6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVhZHlcIixcclxuICAgIGNvZGU6IFwicmVhZHlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWNlaXZlZDogQSBwb3RlbnRpYWwgcGVyZm9ybWVyIGhhcyBjbGFpbWVkIG93bmVyc2hpcCBvZiB0aGUgdGFzayBhbmQgaXMgZXZhbHVhdGluZyB3aGV0aGVyIHRvIHBlcmZvcm0gaXQuXHJcbiAgICovXHJcbiAgUmVjZWl2ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVjZWl2ZWRcIixcclxuICAgIGNvZGU6IFwicmVjZWl2ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Rhc2stc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWplY3RlZDogVGhlIHBvdGVudGlhbCBwZXJmb3JtZXIgd2hvIGNsYWltZWQgb3duZXJzaGlwIG9mIHRoZSB0YXNrIGhhcyBkZWNpZGVkIG5vdCB0byBleGVjdXRlIGl0IHByaW9yIHRvIHBlcmZvcm1pbmcgYW55IGFjdGlvbi5cclxuICAgKi9cclxuICBSZWplY3RlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZWplY3RlZFwiLFxyXG4gICAgY29kZTogXCJyZWplY3RlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlcXVlc3RlZDogVGhlIHRhc2sgaXMgcmVhZHkgdG8gYmUgYWN0ZWQgdXBvbiBhbmQgYWN0aW9uIGlzIHNvdWdodC5cclxuICAgKi9cclxuICBSZXF1ZXN0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVxdWVzdGVkXCIsXHJcbiAgICBjb2RlOiBcInJlcXVlc3RlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdGFzay1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=