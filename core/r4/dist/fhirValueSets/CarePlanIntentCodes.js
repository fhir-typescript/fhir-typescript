// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-intent|4.0.1
/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 */
export const CarePlanIntentCodes = {
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    Option: "option",
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    Order: "order",
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: "plan",
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    Proposal: "proposal",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZVBsYW5JbnRlbnRDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2FyZVBsYW5JbnRlbnRDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxxRUFBcUU7QUFFckU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtDQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY2FyZS1wbGFuLWludGVudHw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGluZGljYXRpbmcgdGhlIGRlZ3JlZSBvZiBhdXRob3JpdHkvaW50ZW50aW9uYWxpdHkgYXNzb2NpYXRlZCB3aXRoIGEgY2FyZSBwbGFuLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENhcmVQbGFuSW50ZW50Q29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogb3B0aW9uOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgY29tcG9uZW50IG9yIG9wdGlvbiBmb3IgYSBSZXF1ZXN0R3JvdXAgdGhhdCBlc3RhYmxpc2hlcyB0aW1pbmcsIGNvbmRpdGlvbmFsaXR5IGFuZC9vciBvdGhlciBjb25zdHJhaW50cyBhbW9uZyBhIHNldCBvZiByZXF1ZXN0cy4gIFJlZmVyIHRvIFtbW1JlcXVlc3RHcm91cF1dXSBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvbiBob3cgdGhpcyBzdGF0dXMgaXMgdXNlZC5cclxuICAgKi9cclxuICBPcHRpb246IFwib3B0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogb3JkZXI6IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgYSByZXF1ZXN0L2RlbWFuZCBhbmQgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uIGJ5IGEgUHJhY3RpdGlvbmVyLlxyXG4gICAqL1xyXG4gIE9yZGVyOiBcIm9yZGVyXCIsXHJcbiAgLyoqXHJcbiAgICogcGxhbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhbiBpbnRlbnRpb24gdG8gZW5zdXJlIHNvbWV0aGluZyBvY2N1cnMgd2l0aG91dCBwcm92aWRpbmcgYW4gYXV0aG9yaXphdGlvbiBmb3Igb3RoZXJzIHRvIGFjdC5cclxuICAgKi9cclxuICBQbGFuOiBcInBsYW5cIixcclxuICAvKipcclxuICAgKiBwcm9wb3NhbDogVGhlIHJlcXVlc3QgaXMgYSBzdWdnZXN0aW9uIG1hZGUgYnkgc29tZW9uZS9zb21ldGhpbmcgdGhhdCBkb2VzIG5vdCBoYXZlIGFuIGludGVudGlvbiB0byBlbnN1cmUgaXQgb2NjdXJzIGFuZCB3aXRob3V0IHByb3ZpZGluZyBhbiBhdXRob3JpemF0aW9uIHRvIGFjdC5cclxuICAgKi9cclxuICBQcm9wb3NhbDogXCJwcm9wb3NhbFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIGluZGljYXRpbmcgdGhlIGRlZ3JlZSBvZiBhdXRob3JpdHkvaW50ZW50aW9uYWxpdHkgYXNzb2NpYXRlZCB3aXRoIGEgY2FyZSBwbGFuLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FyZVBsYW5JbnRlbnRDb2RlVHlwZSA9IHR5cGVvZiBDYXJlUGxhbkludGVudENvZGVzW2tleW9mIHR5cGVvZiBDYXJlUGxhbkludGVudENvZGVzXTtcclxuIl19