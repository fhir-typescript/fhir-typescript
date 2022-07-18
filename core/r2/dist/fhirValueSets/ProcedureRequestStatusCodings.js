// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/procedure-request-status|1.0.2
/**
 * The status of the request.
 */
export const ProcedureRequestStatusCodings = {
    /**
     * aborted: The request was attempted, but due to some procedural error, it could not be completed.
     */
    Aborted: {
        display: "Aborted",
        code: "aborted",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * accepted: The receiving system has accepted the request, but work has not yet commenced.
     */
    Accepted: {
        display: "Accepted",
        code: "accepted",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * completed: The work has been completed, the report(s) released, and no further work is planned.
     */
    Completed: {
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * draft: The request is in preliminary form, prior to being requested.
     */
    Draft: {
        display: "Draft",
        code: "draft",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * in-progress: The work to fulfill the request is happening.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * proposed: The request has been proposed.
     */
    Proposed: {
        display: "Proposed",
        code: "proposed",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * received: The receiving system has received the request but not yet decided whether it will be performed.
     */
    Received: {
        display: "Received",
        code: "received",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * rejected: The receiving system has declined to fulfill the request.
     */
    Rejected: {
        display: "Rejected",
        code: "rejected",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * requested: The request has been placed.
     */
    Requested: {
        display: "Requested",
        code: "requested",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
    /**
     * suspended: The request has been held by originating system/user request.
     */
    Suspended: {
        display: "Suspended",
        code: "suspended",
        system: "http://hl7.org/fhir/procedure-request-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2VkdXJlUmVxdWVzdFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Byb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQWtEN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcHJvY2VkdXJlLXJlcXVlc3Qtc3RhdHVzfDEuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgcmVxdWVzdC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFByb2NlZHVyZVJlcXVlc3RTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFib3J0ZWQ6IFRoZSByZXF1ZXN0IHdhcyBhdHRlbXB0ZWQsIGJ1dCBkdWUgdG8gc29tZSBwcm9jZWR1cmFsIGVycm9yLCBpdCBjb3VsZCBub3QgYmUgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIEFib3J0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYWNjZXB0ZWQ6IFRoZSByZWNlaXZpbmcgc3lzdGVtIGhhcyBhY2NlcHRlZCB0aGUgcmVxdWVzdCwgYnV0IHdvcmsgaGFzIG5vdCB5ZXQgY29tbWVuY2VkLlxyXG4gICAqL1xyXG4gIEFjY2VwdGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIHdvcmsgaGFzIGJlZW4gY29tcGxldGVkLCB0aGUgcmVwb3J0KHMpIHJlbGVhc2VkLCBhbmQgbm8gZnVydGhlciB3b3JrIGlzIHBsYW5uZWQuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRyYWZ0OiBUaGUgcmVxdWVzdCBpcyBpbiBwcmVsaW1pbmFyeSBmb3JtLCBwcmlvciB0byBiZWluZyByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgRHJhZnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSB3b3JrIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QgaXMgaGFwcGVuaW5nLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJvcG9zZWQ6IFRoZSByZXF1ZXN0IGhhcyBiZWVuIHByb3Bvc2VkLlxyXG4gICAqL1xyXG4gIFByb3Bvc2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlY2VpdmVkOiBUaGUgcmVjZWl2aW5nIHN5c3RlbSBoYXMgcmVjZWl2ZWQgdGhlIHJlcXVlc3QgYnV0IG5vdCB5ZXQgZGVjaWRlZCB3aGV0aGVyIGl0IHdpbGwgYmUgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIFJlY2VpdmVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlamVjdGVkOiBUaGUgcmVjZWl2aW5nIHN5c3RlbSBoYXMgZGVjbGluZWQgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBSZWplY3RlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXF1ZXN0ZWQ6IFRoZSByZXF1ZXN0IGhhcyBiZWVuIHBsYWNlZC5cclxuICAgKi9cclxuICBSZXF1ZXN0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc3VzcGVuZGVkOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBoZWxkIGJ5IG9yaWdpbmF0aW5nIHN5c3RlbS91c2VyIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgU3VzcGVuZGVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgcmVxdWVzdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kaW5nczpQcm9jZWR1cmVSZXF1ZXN0U3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhYm9ydGVkOiBUaGUgcmVxdWVzdCB3YXMgYXR0ZW1wdGVkLCBidXQgZHVlIHRvIHNvbWUgcHJvY2VkdXJhbCBlcnJvciwgaXQgY291bGQgbm90IGJlIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBBYm9ydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFib3J0ZWRcIixcclxuICAgIGNvZGU6IFwiYWJvcnRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcHJvY2VkdXJlLXJlcXVlc3Qtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBhY2NlcHRlZDogVGhlIHJlY2VpdmluZyBzeXN0ZW0gaGFzIGFjY2VwdGVkIHRoZSByZXF1ZXN0LCBidXQgd29yayBoYXMgbm90IHlldCBjb21tZW5jZWQuXHJcbiAgICovXHJcbiAgQWNjZXB0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQWNjZXB0ZWRcIixcclxuICAgIGNvZGU6IFwiYWNjZXB0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb2NlZHVyZS1yZXF1ZXN0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBUaGUgd29yayBoYXMgYmVlbiBjb21wbGV0ZWQsIHRoZSByZXBvcnQocykgcmVsZWFzZWQsIGFuZCBubyBmdXJ0aGVyIHdvcmsgaXMgcGxhbm5lZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBjb2RlOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcHJvY2VkdXJlLXJlcXVlc3Qtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkcmFmdDogVGhlIHJlcXVlc3QgaXMgaW4gcHJlbGltaW5hcnkgZm9ybSwgcHJpb3IgdG8gYmVpbmcgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIERyYWZ0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkRyYWZ0XCIsXHJcbiAgICBjb2RlOiBcImRyYWZ0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9wcm9jZWR1cmUtcmVxdWVzdC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgd29yayB0byBmdWxmaWxsIHRoZSByZXF1ZXN0IGlzIGhhcHBlbmluZy5cclxuICAgKi9cclxuICBJblByb2dyZXNzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgICBjb2RlOiBcImluLXByb2dyZXNzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9wcm9jZWR1cmUtcmVxdWVzdC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBwcm9wb3NlZC5cclxuICAgKi9cclxuICBQcm9wb3NlZDoge1xyXG4gICAgZGlzcGxheTogXCJQcm9wb3NlZFwiLFxyXG4gICAgY29kZTogXCJwcm9wb3NlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcHJvY2VkdXJlLXJlcXVlc3Qtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWNlaXZlZDogVGhlIHJlY2VpdmluZyBzeXN0ZW0gaGFzIHJlY2VpdmVkIHRoZSByZXF1ZXN0IGJ1dCBub3QgeWV0IGRlY2lkZWQgd2hldGhlciBpdCB3aWxsIGJlIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBSZWNlaXZlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZWNlaXZlZFwiLFxyXG4gICAgY29kZTogXCJyZWNlaXZlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcHJvY2VkdXJlLXJlcXVlc3Qtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWplY3RlZDogVGhlIHJlY2VpdmluZyBzeXN0ZW0gaGFzIGRlY2xpbmVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgUmVqZWN0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVqZWN0ZWRcIixcclxuICAgIGNvZGU6IFwicmVqZWN0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb2NlZHVyZS1yZXF1ZXN0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVxdWVzdGVkOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBwbGFjZWQuXHJcbiAgICovXHJcbiAgUmVxdWVzdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlcXVlc3RlZFwiLFxyXG4gICAgY29kZTogXCJyZXF1ZXN0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb2NlZHVyZS1yZXF1ZXN0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3VzcGVuZGVkOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBoZWxkIGJ5IG9yaWdpbmF0aW5nIHN5c3RlbS91c2VyIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgU3VzcGVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN1c3BlbmRlZFwiLFxyXG4gICAgY29kZTogXCJzdXNwZW5kZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Byb2NlZHVyZS1yZXF1ZXN0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==