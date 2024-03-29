// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/request-intent|3.0.2
/**
 * Codes indicating the degree of authority/intentionality associated with a request
 */
export const RequestIntentCodings = {
    /**
     * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order
     */
    FillerOrder: {
        display: "Filler Order",
        code: "filler-order",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * instance-order: An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.
     */
    InstanceOrder: {
        display: "Instance Order",
        code: "instance-order",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.
     * Refer to [[[RequestGroup]]] for additional information on how this status is used
     */
    Option: {
        display: "Option",
        code: "option",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * order: The request represents a request/demand and authorization for action
     */
    Order: {
        display: "Order",
        code: "order",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * original-order: The request represents an original authorization for action
     */
    OriginalOrder: {
        display: "Original Order",
        code: "original-order",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * plan: The request represents an intension to ensure something occurs without providing an authorization for others to act
     */
    Plan: {
        display: "Plan",
        code: "plan",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    Proposal: {
        display: "Proposal",
        code: "proposal",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization
     */
    ReflexOrder: {
        display: "Reflex Order",
        code: "reflex-order",
        system: "http://hl7.org/fhir/request-intent",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdEludGVudENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1JlcXVlc3RJbnRlbnRDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQTJDbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOzs7T0FHRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlcXVlc3QtaW50ZW50fDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ29kZXMgaW5kaWNhdGluZyB0aGUgZGVncmVlIG9mIGF1dGhvcml0eS9pbnRlbnRpb25hbGl0eSBhc3NvY2lhdGVkIHdpdGggYSByZXF1ZXN0XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXF1ZXN0SW50ZW50Q29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBmaWxsZXItb3JkZXI6IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgdGhlIHZpZXcgb2YgYW4gYXV0aG9yaXphdGlvbiBpbnN0YW50aWF0ZWQgYnkgYSBmdWxmaWxsaW5nIHN5c3RlbSByZXByZXNlbnRpbmcgdGhlIGRldGFpbHMgb2YgdGhlIGZ1bGZpbGxlcidzIGludGVudGlvbiB0byBhY3QgdXBvbiBhIHN1Ym1pdHRlZCBvcmRlclxyXG4gICAqL1xyXG4gIEZpbGxlck9yZGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluc3RhbmNlLW9yZGVyOiBBbiBvcmRlciBjcmVhdGVkIGluIGZ1bGZpbGxtZW50IG9mIGEgYnJvYWRlciBvcmRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGF1dGhvcml6YXRpb24gZm9yIGEgc2luZ2xlIGFjdGl2aXR5IG9jY3VycmVuY2UuICBFLmcuIFRoZSBhZG1pbmlzdHJhdGlvbiBvZiBhIHNpbmdsZSBkb3NlIG9mIGEgZHJ1Zy5cclxuICAgKi9cclxuICBJbnN0YW5jZU9yZGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhIGNvbXBvbmVudCBvciBvcHRpb24gZm9yIGEgUmVxdWVzdEdyb3VwIHRoYXQgZXN0YWJsaXNoZXMgdGltaW5nLCBjb25kaXRpb25hbGl0eSBhbmQvb3Igb3RoZXIgY29uc3RyYWludHMgYW1vbmcgYSBzZXQgb2YgcmVxdWVzdHMuXHJcbiAgICogUmVmZXIgdG8gW1tbUmVxdWVzdEdyb3VwXV1dIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIG9uIGhvdyB0aGlzIHN0YXR1cyBpcyB1c2VkXHJcbiAgICovXHJcbiAgT3B0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgcmVxdWVzdC9kZW1hbmQgYW5kIGF1dGhvcml6YXRpb24gZm9yIGFjdGlvblxyXG4gICAqL1xyXG4gIE9yZGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9yaWdpbmFsLW9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGFuIG9yaWdpbmFsIGF1dGhvcml6YXRpb24gZm9yIGFjdGlvblxyXG4gICAqL1xyXG4gIE9yaWdpbmFsT3JkZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcGxhbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhbiBpbnRlbnNpb24gdG8gZW5zdXJlIHNvbWV0aGluZyBvY2N1cnMgd2l0aG91dCBwcm92aWRpbmcgYW4gYXV0aG9yaXphdGlvbiBmb3Igb3RoZXJzIHRvIGFjdFxyXG4gICAqL1xyXG4gIFBsYW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJvcG9zYWw6IFRoZSByZXF1ZXN0IGlzIGEgc3VnZ2VzdGlvbiBtYWRlIGJ5IHNvbWVvbmUvc29tZXRoaW5nIHRoYXQgZG9lc24ndCBoYXZlIGFuIGludGVudGlvbiB0byBlbnN1cmUgaXQgb2NjdXJzIGFuZCB3aXRob3V0IHByb3ZpZGluZyBhbiBhdXRob3JpemF0aW9uIHRvIGFjdFxyXG4gICAqL1xyXG4gIFByb3Bvc2FsOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlZmxleC1vcmRlcjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBzdXBwbGVtZW50YWwgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uIGJhc2VkIG9uIGEgcGFyZW50IGF1dGhvcml6YXRpb24gdG9nZXRoZXIgd2l0aCBpbml0aWFsIHJlc3VsdHMgb2YgdGhlIGFjdGlvbiB0YWtlbiBhZ2FpbnN0IHRoYXQgcGFyZW50IGF1dGhvcml6YXRpb25cclxuICAgKi9cclxuICBSZWZsZXhPcmRlcjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGluZGljYXRpbmcgdGhlIGRlZ3JlZSBvZiBhdXRob3JpdHkvaW50ZW50aW9uYWxpdHkgYXNzb2NpYXRlZCB3aXRoIGEgcmVxdWVzdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RJbnRlbnRDb2RpbmdzOlJlcXVlc3RJbnRlbnRDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGZpbGxlci1vcmRlcjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyB0aGUgdmlldyBvZiBhbiBhdXRob3JpemF0aW9uIGluc3RhbnRpYXRlZCBieSBhIGZ1bGZpbGxpbmcgc3lzdGVtIHJlcHJlc2VudGluZyB0aGUgZGV0YWlscyBvZiB0aGUgZnVsZmlsbGVyJ3MgaW50ZW50aW9uIHRvIGFjdCB1cG9uIGEgc3VibWl0dGVkIG9yZGVyXHJcbiAgICovXHJcbiAgRmlsbGVyT3JkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiRmlsbGVyIE9yZGVyXCIsXHJcbiAgICBjb2RlOiBcImZpbGxlci1vcmRlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVxdWVzdC1pbnRlbnRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluc3RhbmNlLW9yZGVyOiBBbiBvcmRlciBjcmVhdGVkIGluIGZ1bGZpbGxtZW50IG9mIGEgYnJvYWRlciBvcmRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGF1dGhvcml6YXRpb24gZm9yIGEgc2luZ2xlIGFjdGl2aXR5IG9jY3VycmVuY2UuICBFLmcuIFRoZSBhZG1pbmlzdHJhdGlvbiBvZiBhIHNpbmdsZSBkb3NlIG9mIGEgZHJ1Zy5cclxuICAgKi9cclxuICBJbnN0YW5jZU9yZGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluc3RhbmNlIE9yZGVyXCIsXHJcbiAgICBjb2RlOiBcImluc3RhbmNlLW9yZGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXF1ZXN0LWludGVudFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3B0aW9uOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgY29tcG9uZW50IG9yIG9wdGlvbiBmb3IgYSBSZXF1ZXN0R3JvdXAgdGhhdCBlc3RhYmxpc2hlcyB0aW1pbmcsIGNvbmRpdGlvbmFsaXR5IGFuZC9vciBvdGhlciBjb25zdHJhaW50cyBhbW9uZyBhIHNldCBvZiByZXF1ZXN0cy5cclxuICAgKiBSZWZlciB0byBbW1tSZXF1ZXN0R3JvdXBdXV0gZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb24gaG93IHRoaXMgc3RhdHVzIGlzIHVzZWRcclxuICAgKi9cclxuICBPcHRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiT3B0aW9uXCIsXHJcbiAgICBjb2RlOiBcIm9wdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVxdWVzdC1pbnRlbnRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgcmVxdWVzdC9kZW1hbmQgYW5kIGF1dGhvcml6YXRpb24gZm9yIGFjdGlvblxyXG4gICAqL1xyXG4gIE9yZGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9yZGVyXCIsXHJcbiAgICBjb2RlOiBcIm9yZGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXF1ZXN0LWludGVudFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3JpZ2luYWwtb3JkZXI6IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgYW4gb3JpZ2luYWwgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uXHJcbiAgICovXHJcbiAgT3JpZ2luYWxPcmRlcjoge1xyXG4gICAgZGlzcGxheTogXCJPcmlnaW5hbCBPcmRlclwiLFxyXG4gICAgY29kZTogXCJvcmlnaW5hbC1vcmRlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVxdWVzdC1pbnRlbnRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBsYW46IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgYW4gaW50ZW5zaW9uIHRvIGVuc3VyZSBzb21ldGhpbmcgb2NjdXJzIHdpdGhvdXQgcHJvdmlkaW5nIGFuIGF1dGhvcml6YXRpb24gZm9yIG90aGVycyB0byBhY3RcclxuICAgKi9cclxuICBQbGFuOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBsYW5cIixcclxuICAgIGNvZGU6IFwicGxhblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVxdWVzdC1pbnRlbnRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2FsOiBUaGUgcmVxdWVzdCBpcyBhIHN1Z2dlc3Rpb24gbWFkZSBieSBzb21lb25lL3NvbWV0aGluZyB0aGF0IGRvZXNuJ3QgaGF2ZSBhbiBpbnRlbnRpb24gdG8gZW5zdXJlIGl0IG9jY3VycyBhbmQgd2l0aG91dCBwcm92aWRpbmcgYW4gYXV0aG9yaXphdGlvbiB0byBhY3RcclxuICAgKi9cclxuICBQcm9wb3NhbDoge1xyXG4gICAgZGlzcGxheTogXCJQcm9wb3NhbFwiLFxyXG4gICAgY29kZTogXCJwcm9wb3NhbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVxdWVzdC1pbnRlbnRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlZmxleC1vcmRlcjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBzdXBwbGVtZW50YWwgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uIGJhc2VkIG9uIGEgcGFyZW50IGF1dGhvcml6YXRpb24gdG9nZXRoZXIgd2l0aCBpbml0aWFsIHJlc3VsdHMgb2YgdGhlIGFjdGlvbiB0YWtlbiBhZ2FpbnN0IHRoYXQgcGFyZW50IGF1dGhvcml6YXRpb25cclxuICAgKi9cclxuICBSZWZsZXhPcmRlcjoge1xyXG4gICAgZGlzcGxheTogXCJSZWZsZXggT3JkZXJcIixcclxuICAgIGNvZGU6IFwicmVmbGV4LW9yZGVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXF1ZXN0LWludGVudFwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==