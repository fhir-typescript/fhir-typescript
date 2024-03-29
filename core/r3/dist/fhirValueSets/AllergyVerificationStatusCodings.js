// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-verification-status|3.0.2
/**
 * Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified substance.
 */
export const AllergyVerificationStatusCodings = {
    /**
     * confirmed: A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.
     */
    Confirmed: {
        display: "Confirmed",
        code: "confirmed",
        system: "http://hl7.org/fhir/allergy-verification-status",
    },
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError: {
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/allergy-verification-status",
    },
    /**
     * refuted: A propensity for a reaction to the identified substance has been disproven with a high level of clinical certainty, which may include testing or rechallenge, and is refuted.
     */
    Refuted: {
        display: "Refuted",
        code: "refuted",
        system: "http://hl7.org/fhir/allergy-verification-status",
    },
    /**
     * unconfirmed: A low level of certainty about the propensity for a reaction to the identified substance.
     */
    Unconfirmed: {
        display: "Unconfirmed",
        code: "unconfirmed",
        system: "http://hl7.org/fhir/allergy-verification-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneVZlcmlmaWNhdGlvblN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FsbGVyZ3lWZXJpZmljYXRpb25TdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdGQUFnRjtBQTBCaEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBdUM7SUFDbEY7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsTUFBTSxFQUFFLGlEQUFpRDtLQUMxRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hbGxlcmd5LXZlcmlmaWNhdGlvbi1zdGF0dXN8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBBc3NlcnRpb24gYWJvdXQgY2VydGFpbnR5IGFzc29jaWF0ZWQgd2l0aCBhIHByb3BlbnNpdHksIG9yIHBvdGVudGlhbCByaXNrLCBvZiBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFsbGVyZ3lWZXJpZmljYXRpb25TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbmZpcm1lZDogQSBoaWdoIGxldmVsIG9mIGNlcnRhaW50eSBhYm91dCB0aGUgcHJvcGVuc2l0eSBmb3IgYSByZWFjdGlvbiB0byB0aGUgaWRlbnRpZmllZCBzdWJzdGFuY2UsIHdoaWNoIG1heSBpbmNsdWRlIGNsaW5pY2FsIGV2aWRlbmNlIGJ5IHRlc3Rpbmcgb3IgcmVjaGFsbGVuZ2UuXHJcbiAgICovXHJcbiAgQ29uZmlybWVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBzdGF0ZW1lbnQgd2FzIGVudGVyZWQgaW4gZXJyb3IgYW5kIGlzIG5vdCB2YWxpZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWZ1dGVkOiBBIHByb3BlbnNpdHkgZm9yIGEgcmVhY3Rpb24gdG8gdGhlIGlkZW50aWZpZWQgc3Vic3RhbmNlIGhhcyBiZWVuIGRpc3Byb3ZlbiB3aXRoIGEgaGlnaCBsZXZlbCBvZiBjbGluaWNhbCBjZXJ0YWludHksIHdoaWNoIG1heSBpbmNsdWRlIHRlc3Rpbmcgb3IgcmVjaGFsbGVuZ2UsIGFuZCBpcyByZWZ1dGVkLlxyXG4gICAqL1xyXG4gIFJlZnV0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdW5jb25maXJtZWQ6IEEgbG93IGxldmVsIG9mIGNlcnRhaW50eSBhYm91dCB0aGUgcHJvcGVuc2l0eSBmb3IgYSByZWFjdGlvbiB0byB0aGUgaWRlbnRpZmllZCBzdWJzdGFuY2UuXHJcbiAgICovXHJcbiAgVW5jb25maXJtZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBc3NlcnRpb24gYWJvdXQgY2VydGFpbnR5IGFzc29jaWF0ZWQgd2l0aCBhIHByb3BlbnNpdHksIG9yIHBvdGVudGlhbCByaXNrLCBvZiBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBBbGxlcmd5VmVyaWZpY2F0aW9uU3RhdHVzQ29kaW5nczpBbGxlcmd5VmVyaWZpY2F0aW9uU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb25maXJtZWQ6IEEgaGlnaCBsZXZlbCBvZiBjZXJ0YWludHkgYWJvdXQgdGhlIHByb3BlbnNpdHkgZm9yIGEgcmVhY3Rpb24gdG8gdGhlIGlkZW50aWZpZWQgc3Vic3RhbmNlLCB3aGljaCBtYXkgaW5jbHVkZSBjbGluaWNhbCBldmlkZW5jZSBieSB0ZXN0aW5nIG9yIHJlY2hhbGxlbmdlLlxyXG4gICAqL1xyXG4gIENvbmZpcm1lZDoge1xyXG4gICAgZGlzcGxheTogXCJDb25maXJtZWRcIixcclxuICAgIGNvZGU6IFwiY29uZmlybWVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hbGxlcmd5LXZlcmlmaWNhdGlvbi1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBzdGF0ZW1lbnQgd2FzIGVudGVyZWQgaW4gZXJyb3IgYW5kIGlzIG5vdCB2YWxpZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIEluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FsbGVyZ3ktdmVyaWZpY2F0aW9uLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVmdXRlZDogQSBwcm9wZW5zaXR5IGZvciBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZSBoYXMgYmVlbiBkaXNwcm92ZW4gd2l0aCBhIGhpZ2ggbGV2ZWwgb2YgY2xpbmljYWwgY2VydGFpbnR5LCB3aGljaCBtYXkgaW5jbHVkZSB0ZXN0aW5nIG9yIHJlY2hhbGxlbmdlLCBhbmQgaXMgcmVmdXRlZC5cclxuICAgKi9cclxuICBSZWZ1dGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlZnV0ZWRcIixcclxuICAgIGNvZGU6IFwicmVmdXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS12ZXJpZmljYXRpb24tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1bmNvbmZpcm1lZDogQSBsb3cgbGV2ZWwgb2YgY2VydGFpbnR5IGFib3V0IHRoZSBwcm9wZW5zaXR5IGZvciBhIHJlYWN0aW9uIHRvIHRoZSBpZGVudGlmaWVkIHN1YnN0YW5jZS5cclxuICAgKi9cclxuICBVbmNvbmZpcm1lZDoge1xyXG4gICAgZGlzcGxheTogXCJVbmNvbmZpcm1lZFwiLFxyXG4gICAgY29kZTogXCJ1bmNvbmZpcm1lZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWxsZXJneS12ZXJpZmljYXRpb24tc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19