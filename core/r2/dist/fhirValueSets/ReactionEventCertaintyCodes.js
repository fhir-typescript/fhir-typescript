// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reaction-event-certainty|1.0.2
/**
 * Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction event.
 */
export const ReactionEventCertaintyCodes = {
    /**
     * confirmed: There is a very high level of clinical certainty that the reaction was due to the identified Substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: "confirmed",
    /**
     * likely: There is a high level of clinical certainty that the reaction was caused by the identified Substance.
     */
    Likely: "likely",
    /**
     * unlikely: There is a low level of clinical certainty that the reaction was caused by the identified Substance.
     */
    Unlikely: "unlikely",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3Rpb25FdmVudENlcnRhaW50eUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZWFjdGlvbkV2ZW50Q2VydGFpbnR5Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNkVBQTZFO0FBRTdFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7Q0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3JlYWN0aW9uLWV2ZW50LWNlcnRhaW50eXwxLjAuMlxyXG5cclxuLyoqXHJcbiAqIFN0YXRlbWVudCBhYm91dCB0aGUgZGVncmVlIG9mIGNsaW5pY2FsIGNlcnRhaW50eSB0aGF0IGEgU3BlY2lmaWMgU3Vic3RhbmNlIHdhcyB0aGUgY2F1c2Ugb2YgdGhlIE1hbmlmZXN0YXRpb24gaW4gYW4gcmVhY3Rpb24gZXZlbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhY3Rpb25FdmVudENlcnRhaW50eUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbmZpcm1lZDogVGhlcmUgaXMgYSB2ZXJ5IGhpZ2ggbGV2ZWwgb2YgY2xpbmljYWwgY2VydGFpbnR5IHRoYXQgdGhlIHJlYWN0aW9uIHdhcyBkdWUgdG8gdGhlIGlkZW50aWZpZWQgU3Vic3RhbmNlLCB3aGljaCBtYXkgaW5jbHVkZSBjbGluaWNhbCBldmlkZW5jZSBieSB0ZXN0aW5nIG9yIHJlY2hhbGxlbmdlLlxyXG4gICAqL1xyXG4gIENvbmZpcm1lZDogXCJjb25maXJtZWRcIixcclxuICAvKipcclxuICAgKiBsaWtlbHk6IFRoZXJlIGlzIGEgaGlnaCBsZXZlbCBvZiBjbGluaWNhbCBjZXJ0YWludHkgdGhhdCB0aGUgcmVhY3Rpb24gd2FzIGNhdXNlZCBieSB0aGUgaWRlbnRpZmllZCBTdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgTGlrZWx5OiBcImxpa2VseVwiLFxyXG4gIC8qKlxyXG4gICAqIHVubGlrZWx5OiBUaGVyZSBpcyBhIGxvdyBsZXZlbCBvZiBjbGluaWNhbCBjZXJ0YWludHkgdGhhdCB0aGUgcmVhY3Rpb24gd2FzIGNhdXNlZCBieSB0aGUgaWRlbnRpZmllZCBTdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgVW5saWtlbHk6IFwidW5saWtlbHlcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBTdGF0ZW1lbnQgYWJvdXQgdGhlIGRlZ3JlZSBvZiBjbGluaWNhbCBjZXJ0YWludHkgdGhhdCBhIFNwZWNpZmljIFN1YnN0YW5jZSB3YXMgdGhlIGNhdXNlIG9mIHRoZSBNYW5pZmVzdGF0aW9uIGluIGFuIHJlYWN0aW9uIGV2ZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVhY3Rpb25FdmVudENlcnRhaW50eUNvZGVUeXBlID0gdHlwZW9mIFJlYWN0aW9uRXZlbnRDZXJ0YWludHlDb2Rlc1trZXlvZiB0eXBlb2YgUmVhY3Rpb25FdmVudENlcnRhaW50eUNvZGVzXTtcclxuIl19