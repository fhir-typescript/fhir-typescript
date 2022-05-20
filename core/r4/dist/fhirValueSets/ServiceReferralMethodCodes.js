// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-referral-method|4.0.1
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export const ServiceReferralMethodCodes = {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    SecureMessaging: "elec",
    /**
     * fax: Referrals may be accepted by fax.
     */
    Fax: "fax",
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    Mail: "mail",
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    Phone: "phone",
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    SecureEmail: "semail",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVJlZmVycmFsTWV0aG9kQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1NlcnZpY2VSZWZlcnJhbE1ldGhvZENvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsZUFBZSxFQUFFLE1BQU07SUFDdkI7O09BRUc7SUFDSCxHQUFHLEVBQUUsS0FBSztJQUNWOztPQUVHO0lBQ0gsSUFBSSxFQUFFLE1BQU07SUFDWjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxXQUFXLEVBQUUsUUFBUTtDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc2VydmljZS1yZWZlcnJhbC1tZXRob2R8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWV0aG9kcyBvZiByZWZlcnJhbCBjYW4gYmUgdXNlZCB3aGVuIHJlZmVycmluZyB0byBhIHNwZWNpZmljIEhlYWx0aENhcmVTZXJ2aWNlIHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNlcnZpY2VSZWZlcnJhbE1ldGhvZENvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGVsZWM6IFJlZmVycmFscyBtYXkgYmUgYWNjZXB0ZWQgdmlhIGEgc2VjdXJlIG1lc3NhZ2luZyBzeXN0ZW0uIFRvIGRldGVybWluZSB0aGUgdHlwZXMgb2Ygc2VjdXJlIG1lc3NhZ2luZyBzeXN0ZW1zIHN1cHBvcnRlZCwgcmVmZXIgdG8gdGhlIGlkZW50aWZpZXJzIGNvbGxlY3Rpb24uIENhbGxlcnMgd2lsbCBuZWVkIHRvIHVuZGVyc3RhbmQgdGhlIHNwZWNpZmljIGlkZW50aWZpZXIgc3lzdGVtIHVzZWQgdG8ga25vdyB0aGF0IHRoZXkgYXJlIGFibGUgdG8gdHJhbnNtaXQgbWVzc2FnZXMuXHJcbiAgICovXHJcbiAgU2VjdXJlTWVzc2FnaW5nOiBcImVsZWNcIixcclxuICAvKipcclxuICAgKiBmYXg6IFJlZmVycmFscyBtYXkgYmUgYWNjZXB0ZWQgYnkgZmF4LlxyXG4gICAqL1xyXG4gIEZheDogXCJmYXhcIixcclxuICAvKipcclxuICAgKiBtYWlsOiBSZWZlcnJhbHMgbWF5IGJlIGFjY2VwdGVkIHZpYSByZWd1bGFyIHBvc3RhZ2UgKG9yIGhhbmQgZGVsaXZlcmVkKS5cclxuICAgKi9cclxuICBNYWlsOiBcIm1haWxcIixcclxuICAvKipcclxuICAgKiBwaG9uZTogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCBvdmVyIHRoZSBwaG9uZSBmcm9tIGEgcHJhY3RpdGlvbmVyLlxyXG4gICAqL1xyXG4gIFBob25lOiBcInBob25lXCIsXHJcbiAgLyoqXHJcbiAgICogc2VtYWlsOiBSZWZlcnJhbHMgbWF5IGJlIGFjY2VwdGVkIHZpYSBhIHNlY3VyZSBlbWFpbC4gVG8gc2VuZCBwbGVhc2UgZW5jcnlwdCB3aXRoIHRoZSBzZXJ2aWNlcyBwdWJsaWMga2V5LlxyXG4gICAqL1xyXG4gIFNlY3VyZUVtYWlsOiBcInNlbWFpbFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2RzIG9mIHJlZmVycmFsIGNhbiBiZSB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGEgc3BlY2lmaWMgSGVhbHRoQ2FyZVNlcnZpY2UgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTZXJ2aWNlUmVmZXJyYWxNZXRob2RDb2RlVHlwZSA9IHR5cGVvZiBTZXJ2aWNlUmVmZXJyYWxNZXRob2RDb2Rlc1trZXlvZiB0eXBlb2YgU2VydmljZVJlZmVycmFsTWV0aG9kQ29kZXNdO1xyXG4iXX0=