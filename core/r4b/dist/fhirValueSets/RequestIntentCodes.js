// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/request-intent|4.3.0
/**
 * Codes indicating the degree of authority/intentionality associated with a request.
 */
export const RequestIntentCodes = {
    /**
     * directive: The request represents a legally binding instruction authored by a Patient or RelatedPerson.
     */
    Directive: "directive",
    /**
     * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    FillerOrder: "filler-order",
    /**
     * instance-order: An order created in fulfillment of a broader order that represents the authorization for a single activity occurrence.  E.g. The administration of a single dose of a drug.
     */
    InstanceOrder: "instance-order",
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or other constraints among a set of requests.  Refer to [[[RequestGroup]]] for additional information on how this status is used.
     */
    Option: "option",
    /**
     * order: The request represents a request/demand and authorization for action by a Practitioner.
     */
    Order: "order",
    /**
     * original-order: The request represents an original authorization for action.
     */
    OriginalOrder: "original-order",
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    Plan: "plan",
    /**
     * proposal: The request is a suggestion made by someone/something that does not have an intention to ensure it occurs and without providing an authorization to act.
     */
    Proposal: "proposal",
    /**
     * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization.
     */
    ReflexOrder: "reflex-order",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdEludGVudENvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZXF1ZXN0SW50ZW50Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFdBQVcsRUFBRSxjQUFjO0lBQzNCOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0I7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsY0FBYztDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXF1ZXN0LWludGVudHw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGluZGljYXRpbmcgdGhlIGRlZ3JlZSBvZiBhdXRob3JpdHkvaW50ZW50aW9uYWxpdHkgYXNzb2NpYXRlZCB3aXRoIGEgcmVxdWVzdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0SW50ZW50Q29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogZGlyZWN0aXZlOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgbGVnYWxseSBiaW5kaW5nIGluc3RydWN0aW9uIGF1dGhvcmVkIGJ5IGEgUGF0aWVudCBvciBSZWxhdGVkUGVyc29uLlxyXG4gICAqL1xyXG4gIERpcmVjdGl2ZTogXCJkaXJlY3RpdmVcIixcclxuICAvKipcclxuICAgKiBmaWxsZXItb3JkZXI6IFRoZSByZXF1ZXN0IHJlcHJlc2VudHMgdGhlIHZpZXcgb2YgYW4gYXV0aG9yaXphdGlvbiBpbnN0YW50aWF0ZWQgYnkgYSBmdWxmaWxsaW5nIHN5c3RlbSByZXByZXNlbnRpbmcgdGhlIGRldGFpbHMgb2YgdGhlIGZ1bGZpbGxlcidzIGludGVudGlvbiB0byBhY3QgdXBvbiBhIHN1Ym1pdHRlZCBvcmRlci5cclxuICAgKi9cclxuICBGaWxsZXJPcmRlcjogXCJmaWxsZXItb3JkZXJcIixcclxuICAvKipcclxuICAgKiBpbnN0YW5jZS1vcmRlcjogQW4gb3JkZXIgY3JlYXRlZCBpbiBmdWxmaWxsbWVudCBvZiBhIGJyb2FkZXIgb3JkZXIgdGhhdCByZXByZXNlbnRzIHRoZSBhdXRob3JpemF0aW9uIGZvciBhIHNpbmdsZSBhY3Rpdml0eSBvY2N1cnJlbmNlLiAgRS5nLiBUaGUgYWRtaW5pc3RyYXRpb24gb2YgYSBzaW5nbGUgZG9zZSBvZiBhIGRydWcuXHJcbiAgICovXHJcbiAgSW5zdGFuY2VPcmRlcjogXCJpbnN0YW5jZS1vcmRlclwiLFxyXG4gIC8qKlxyXG4gICAqIG9wdGlvbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhIGNvbXBvbmVudCBvciBvcHRpb24gZm9yIGEgUmVxdWVzdEdyb3VwIHRoYXQgZXN0YWJsaXNoZXMgdGltaW5nLCBjb25kaXRpb25hbGl0eSBhbmQvb3Igb3RoZXIgY29uc3RyYWludHMgYW1vbmcgYSBzZXQgb2YgcmVxdWVzdHMuICBSZWZlciB0byBbW1tSZXF1ZXN0R3JvdXBdXV0gZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb24gaG93IHRoaXMgc3RhdHVzIGlzIHVzZWQuXHJcbiAgICovXHJcbiAgT3B0aW9uOiBcIm9wdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIG9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGEgcmVxdWVzdC9kZW1hbmQgYW5kIGF1dGhvcml6YXRpb24gZm9yIGFjdGlvbiBieSBhIFByYWN0aXRpb25lci5cclxuICAgKi9cclxuICBPcmRlcjogXCJvcmRlclwiLFxyXG4gIC8qKlxyXG4gICAqIG9yaWdpbmFsLW9yZGVyOiBUaGUgcmVxdWVzdCByZXByZXNlbnRzIGFuIG9yaWdpbmFsIGF1dGhvcml6YXRpb24gZm9yIGFjdGlvbi5cclxuICAgKi9cclxuICBPcmlnaW5hbE9yZGVyOiBcIm9yaWdpbmFsLW9yZGVyXCIsXHJcbiAgLyoqXHJcbiAgICogcGxhbjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhbiBpbnRlbnRpb24gdG8gZW5zdXJlIHNvbWV0aGluZyBvY2N1cnMgd2l0aG91dCBwcm92aWRpbmcgYW4gYXV0aG9yaXphdGlvbiBmb3Igb3RoZXJzIHRvIGFjdC5cclxuICAgKi9cclxuICBQbGFuOiBcInBsYW5cIixcclxuICAvKipcclxuICAgKiBwcm9wb3NhbDogVGhlIHJlcXVlc3QgaXMgYSBzdWdnZXN0aW9uIG1hZGUgYnkgc29tZW9uZS9zb21ldGhpbmcgdGhhdCBkb2VzIG5vdCBoYXZlIGFuIGludGVudGlvbiB0byBlbnN1cmUgaXQgb2NjdXJzIGFuZCB3aXRob3V0IHByb3ZpZGluZyBhbiBhdXRob3JpemF0aW9uIHRvIGFjdC5cclxuICAgKi9cclxuICBQcm9wb3NhbDogXCJwcm9wb3NhbFwiLFxyXG4gIC8qKlxyXG4gICAqIHJlZmxleC1vcmRlcjogVGhlIHJlcXVlc3QgcmVwcmVzZW50cyBhbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBzdXBwbGVtZW50YWwgYXV0aG9yaXphdGlvbiBmb3IgYWN0aW9uIGJhc2VkIG9uIGEgcGFyZW50IGF1dGhvcml6YXRpb24gdG9nZXRoZXIgd2l0aCBpbml0aWFsIHJlc3VsdHMgb2YgdGhlIGFjdGlvbiB0YWtlbiBhZ2FpbnN0IHRoYXQgcGFyZW50IGF1dGhvcml6YXRpb24uXHJcbiAgICovXHJcbiAgUmVmbGV4T3JkZXI6IFwicmVmbGV4LW9yZGVyXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgaW5kaWNhdGluZyB0aGUgZGVncmVlIG9mIGF1dGhvcml0eS9pbnRlbnRpb25hbGl0eSBhc3NvY2lhdGVkIHdpdGggYSByZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVxdWVzdEludGVudENvZGVUeXBlID0gdHlwZW9mIFJlcXVlc3RJbnRlbnRDb2Rlc1trZXlvZiB0eXBlb2YgUmVxdWVzdEludGVudENvZGVzXTtcclxuIl19