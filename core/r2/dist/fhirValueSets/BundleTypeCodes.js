// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/bundle-type|1.0.2
/**
 * Indicates the purpose of a bundle - how it was intended to be used.
 */
export const BundleTypeCodes = {
    /**
     * batch: The bundle is a transaction - intended to be processed by a server as a group of actions.
     */
    Batch: "batch",
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    BatchResponse: "batch-response",
    /**
     * collection: The bundle is a set of resources collected into a single document for ease of distribution.
     */
    Collection: "collection",
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    Document: "document",
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    HistoryList: "history",
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    Message: "message",
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    SearchResults: "searchset",
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    Transaction: "transaction",
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transactionhas succeeded, and all responses are error free.
     */
    TransactionResponse: "transaction-response",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlVHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9CdW5kbGVUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsZ0VBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0I7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLFNBQVM7SUFDdEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILGFBQWEsRUFBRSxXQUFXO0lBQzFCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7SUFDMUI7O09BRUc7SUFDSCxtQkFBbUIsRUFBRSxzQkFBc0I7Q0FDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9idW5kbGUtdHlwZXwxLjAuMlxyXG5cclxuLyoqXHJcbiAqIEluZGljYXRlcyB0aGUgcHVycG9zZSBvZiBhIGJ1bmRsZSAtIGhvdyBpdCB3YXMgaW50ZW5kZWQgdG8gYmUgdXNlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBCdW5kbGVUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYmF0Y2g6IFRoZSBidW5kbGUgaXMgYSB0cmFuc2FjdGlvbiAtIGludGVuZGVkIHRvIGJlIHByb2Nlc3NlZCBieSBhIHNlcnZlciBhcyBhIGdyb3VwIG9mIGFjdGlvbnMuXHJcbiAgICovXHJcbiAgQmF0Y2g6IFwiYmF0Y2hcIixcclxuICAvKipcclxuICAgKiBiYXRjaC1yZXNwb25zZTogVGhlIGJ1bmRsZSBpcyBhIGJhdGNoIHJlc3BvbnNlLiBOb3RlIHRoYXQgYXMgYSBiYXRjaCwgc29tZSByZXNwb25zZXMgbWF5IGluZGljYXRlIGZhaWx1cmUgYW5kIG90aGVycyBzdWNjZXNzLlxyXG4gICAqL1xyXG4gIEJhdGNoUmVzcG9uc2U6IFwiYmF0Y2gtcmVzcG9uc2VcIixcclxuICAvKipcclxuICAgKiBjb2xsZWN0aW9uOiBUaGUgYnVuZGxlIGlzIGEgc2V0IG9mIHJlc291cmNlcyBjb2xsZWN0ZWQgaW50byBhIHNpbmdsZSBkb2N1bWVudCBmb3IgZWFzZSBvZiBkaXN0cmlidXRpb24uXHJcbiAgICovXHJcbiAgQ29sbGVjdGlvbjogXCJjb2xsZWN0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogZG9jdW1lbnQ6IFRoZSBidW5kbGUgaXMgYSBkb2N1bWVudC4gVGhlIGZpcnN0IHJlc291cmNlIGlzIGEgQ29tcG9zaXRpb24uXHJcbiAgICovXHJcbiAgRG9jdW1lbnQ6IFwiZG9jdW1lbnRcIixcclxuICAvKipcclxuICAgKiBoaXN0b3J5OiBUaGUgYnVuZGxlIGlzIGEgbGlzdCBvZiByZXNvdXJjZXMgZnJvbSBhIGhpc3RvcnkgaW50ZXJhY3Rpb24gb24gYSBzZXJ2ZXIuXHJcbiAgICovXHJcbiAgSGlzdG9yeUxpc3Q6IFwiaGlzdG9yeVwiLFxyXG4gIC8qKlxyXG4gICAqIG1lc3NhZ2U6IFRoZSBidW5kbGUgaXMgYSBtZXNzYWdlLiBUaGUgZmlyc3QgcmVzb3VyY2UgaXMgYSBNZXNzYWdlSGVhZGVyLlxyXG4gICAqL1xyXG4gIE1lc3NhZ2U6IFwibWVzc2FnZVwiLFxyXG4gIC8qKlxyXG4gICAqIHNlYXJjaHNldDogVGhlIGJ1bmRsZSBpcyBhIGxpc3Qgb2YgcmVzb3VyY2VzIHJldHVybmVkIGFzIGEgcmVzdWx0IG9mIGEgc2VhcmNoL3F1ZXJ5IGludGVyYWN0aW9uLCBvcGVyYXRpb24sIG9yIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgU2VhcmNoUmVzdWx0czogXCJzZWFyY2hzZXRcIixcclxuICAvKipcclxuICAgKiB0cmFuc2FjdGlvbjogVGhlIGJ1bmRsZSBpcyBhIHRyYW5zYWN0aW9uIC0gaW50ZW5kZWQgdG8gYmUgcHJvY2Vzc2VkIGJ5IGEgc2VydmVyIGFzIGFuIGF0b21pYyBjb21taXQuXHJcbiAgICovXHJcbiAgVHJhbnNhY3Rpb246IFwidHJhbnNhY3Rpb25cIixcclxuICAvKipcclxuICAgKiB0cmFuc2FjdGlvbi1yZXNwb25zZTogVGhlIGJ1bmRsZSBpcyBhIHRyYW5zYWN0aW9uIHJlc3BvbnNlLiBCZWNhdXNlIHRoZSByZXNwb25zZSBpcyBhIHRyYW5zYWN0aW9uIHJlc3BvbnNlLCB0aGUgdHJhbnNhY3Rpb25oYXMgc3VjY2VlZGVkLCBhbmQgYWxsIHJlc3BvbnNlcyBhcmUgZXJyb3IgZnJlZS5cclxuICAgKi9cclxuICBUcmFuc2FjdGlvblJlc3BvbnNlOiBcInRyYW5zYWN0aW9uLXJlc3BvbnNlXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIHRoZSBwdXJwb3NlIG9mIGEgYnVuZGxlIC0gaG93IGl0IHdhcyBpbnRlbmRlZCB0byBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQnVuZGxlVHlwZUNvZGVUeXBlID0gdHlwZW9mIEJ1bmRsZVR5cGVDb2Rlc1trZXlvZiB0eXBlb2YgQnVuZGxlVHlwZUNvZGVzXTtcclxuIl19