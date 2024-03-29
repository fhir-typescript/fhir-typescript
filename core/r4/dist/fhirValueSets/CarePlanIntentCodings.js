// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-intent|4.0.1
/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export const CarePlanIntentCodings = {
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    Option: {
        display: "Option",
        code: "option",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    Order: {
        display: "Order",
        code: "order",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: {
        display: "Plan",
        code: "plan",
        system: "http://hl7.org/fhir/request-intent",
    },
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    Proposal: {
        display: "Proposal",
        code: "proposal",
        system: "http://hl7.org/fhir/request-intent",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZVBsYW5JbnRlbnRDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DYXJlUGxhbkludGVudENvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMscUVBQXFFO0FBMEJyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY2FyZS1wbGFuLWludGVudHw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIGluZGljYXRpbmcgdGhlIGRlZ3JlZSBvZiBhdXRob3JpdHkvaW50ZW50aW9uYWxpdHkgYXNzb2NpYXRlZCB3aXRoIGEgY2FyZSBwbGFuLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FyZVBsYW5JbnRlbnRDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhIGNvbXBvbmVudCBvciBvcHRpb24gZm9yIGEgUmVxdWVzdEdyb3VwIHRoYXQgZXN0YWJsaXNoZXMgdGltaW5nLCBjb25kaXRpb25hbGl0eSBhbmQvb3Igb3RoZXIgY29uc3RyYWludHMgYW1vbmcgYSBzZXQgb2YgcmVxdWVzdHMuICBSZWZlciB0byBbW1tSZXF1ZXN0R3JvdXBdXV0gZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb24gaG93IHRoaXMgc3RhdHVzIGlzIHVzZWQuXHJcbiAgICovXHJcbiAgT3B0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgcmVxdWVzdC9kZW1hbmQgYW5kIGF1dGhvcml6YXRpb24gZm9yIGFjdGlvbiBieSBhIFByYWN0aXRpb25lci5cclxuICAgKi9cclxuICBPcmRlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwbGFuOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGFuIGludGVudGlvbiB0byBlbnN1cmUgc29tZXRoaW5nIG9jY3VycyB3aXRob3V0IHByb3ZpZGluZyBhbiBhdXRob3JpemF0aW9uIGZvciBvdGhlcnMgdG8gYWN0LlxyXG4gICAqL1xyXG4gIFBsYW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJvcG9zYWw6IFRoZSByZXF1ZXN0IGlzIGEgc3VnZ2VzdGlvbiBtYWRlIGJ5IHNvbWVvbmUvc29tZXRoaW5nIHRoYXQgZG9lcyBub3QgaGF2ZSBhbiBpbnRlbnRpb24gdG8gZW5zdXJlIGl0IG9jY3VycyBhbmQgd2l0aG91dCBwcm92aWRpbmcgYW4gYXV0aG9yaXphdGlvbiB0byBhY3QuXHJcbiAgICovXHJcbiAgUHJvcG9zYWw6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpbmRpY2F0aW5nIHRoZSBkZWdyZWUgb2YgYXV0aG9yaXR5L2ludGVudGlvbmFsaXR5IGFzc29jaWF0ZWQgd2l0aCBhIGNhcmUgcGxhbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDYXJlUGxhbkludGVudENvZGluZ3M6Q2FyZVBsYW5JbnRlbnRDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIG9wdGlvbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhIGNvbXBvbmVudCBvciBvcHRpb24gZm9yIGEgUmVxdWVzdEdyb3VwIHRoYXQgZXN0YWJsaXNoZXMgdGltaW5nLCBjb25kaXRpb25hbGl0eSBhbmQvb3Igb3RoZXIgY29uc3RyYWludHMgYW1vbmcgYSBzZXQgb2YgcmVxdWVzdHMuICBSZWZlciB0byBbW1tSZXF1ZXN0R3JvdXBdXV0gZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb24gaG93IHRoaXMgc3RhdHVzIGlzIHVzZWQuXHJcbiAgICovXHJcbiAgT3B0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9wdGlvblwiLFxyXG4gICAgY29kZTogXCJvcHRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlcXVlc3QtaW50ZW50XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvcmRlcjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhIHJlcXVlc3QvZGVtYW5kIGFuZCBhdXRob3JpemF0aW9uIGZvciBhY3Rpb24gYnkgYSBQcmFjdGl0aW9uZXIuXHJcbiAgICovXHJcbiAgT3JkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiT3JkZXJcIixcclxuICAgIGNvZGU6IFwib3JkZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlcXVlc3QtaW50ZW50XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwbGFuOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGFuIGludGVudGlvbiB0byBlbnN1cmUgc29tZXRoaW5nIG9jY3VycyB3aXRob3V0IHByb3ZpZGluZyBhbiBhdXRob3JpemF0aW9uIGZvciBvdGhlcnMgdG8gYWN0LlxyXG4gICAqL1xyXG4gIFBsYW46IHtcclxuICAgIGRpc3BsYXk6IFwiUGxhblwiLFxyXG4gICAgY29kZTogXCJwbGFuXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXF1ZXN0LWludGVudFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcHJvcG9zYWw6IFRoZSByZXF1ZXN0IGlzIGEgc3VnZ2VzdGlvbiBtYWRlIGJ5IHNvbWVvbmUvc29tZXRoaW5nIHRoYXQgZG9lcyBub3QgaGF2ZSBhbiBpbnRlbnRpb24gdG8gZW5zdXJlIGl0IG9jY3VycyBhbmQgd2l0aG91dCBwcm92aWRpbmcgYW4gYXV0aG9yaXphdGlvbiB0byBhY3QuXHJcbiAgICovXHJcbiAgUHJvcG9zYWw6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJvcG9zYWxcIixcclxuICAgIGNvZGU6IFwicHJvcG9zYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlcXVlc3QtaW50ZW50XCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19