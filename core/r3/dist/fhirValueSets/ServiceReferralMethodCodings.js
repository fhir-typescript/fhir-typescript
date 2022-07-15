// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-referral-method|3.0.2
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export const ServiceReferralMethodCodings = {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    SecureMessaging: {
        display: "Secure Messaging",
        code: "elec",
        system: "http://hl7.org/fhir/service-referral-method",
    },
    /**
     * fax: Referrals may be accepted by fax.
     */
    Fax: {
        display: "Fax",
        code: "fax",
        system: "http://hl7.org/fhir/service-referral-method",
    },
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    Mail: {
        display: "Mail",
        code: "mail",
        system: "http://hl7.org/fhir/service-referral-method",
    },
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    Phone: {
        display: "Phone",
        code: "phone",
        system: "http://hl7.org/fhir/service-referral-method",
    },
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    SecureEmail: {
        display: "Secure Email",
        code: "semail",
        system: "http://hl7.org/fhir/service-referral-method",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVJlZmVycmFsTWV0aG9kQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU2VydmljZVJlZmVycmFsTWV0aG9kQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0RUFBNEU7QUE4QjVFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQW1DO0lBQzFFOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsNkNBQTZDO0tBQ3REO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLDZDQUE2QztLQUN0RDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsNkNBQTZDO0tBQ3REO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIG1ldGhvZHMgb2YgcmVmZXJyYWwgY2FuIGJlIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gYSBzcGVjaWZpYyBIZWFsdGhDYXJlU2VydmljZSByZXNvdXJjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNlcnZpY2VSZWZlcnJhbE1ldGhvZENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZWxlYzogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCB2aWEgYSBzZWN1cmUgbWVzc2FnaW5nIHN5c3RlbS4gVG8gZGV0ZXJtaW5lIHRoZSB0eXBlcyBvZiBzZWN1cmUgbWVzc2FnaW5nIHN5c3RlbXMgc3VwcG9ydGVkLCByZWZlciB0byB0aGUgaWRlbnRpZmllcnMgY29sbGVjdGlvbi4gQ2FsbGVycyB3aWxsIG5lZWQgdG8gdW5kZXJzdGFuZCB0aGUgc3BlY2lmaWMgaWRlbnRpZmllciBzeXN0ZW0gdXNlZCB0byBrbm93IHRoYXQgdGhleSBhcmUgYWJsZSB0byB0cmFuc21pdCBtZXNzYWdlcy5cclxuICAgKi9cclxuICBTZWN1cmVNZXNzYWdpbmc6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZmF4OiBSZWZlcnJhbHMgbWF5IGJlIGFjY2VwdGVkIGJ5IGZheC5cclxuICAgKi9cclxuICBGYXg6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbWFpbDogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCB2aWEgcmVndWxhciBwb3N0YWdlIChvciBoYW5kIGRlbGl2ZXJlZCkuXHJcbiAgICovXHJcbiAgTWFpbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwaG9uZTogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCBvdmVyIHRoZSBwaG9uZSBmcm9tIGEgcHJhY3RpdGlvbmVyLlxyXG4gICAqL1xyXG4gIFBob25lOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNlbWFpbDogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCB2aWEgYSBzZWN1cmUgZW1haWwuIFRvIHNlbmQgcGxlYXNlIGVuY3J5cHQgd2l0aCB0aGUgc2VydmljZXMgcHVibGljIGtleS5cclxuICAgKi9cclxuICBTZWN1cmVFbWFpbDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2RzIG9mIHJlZmVycmFsIGNhbiBiZSB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGEgc3BlY2lmaWMgSGVhbHRoQ2FyZVNlcnZpY2UgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2VydmljZVJlZmVycmFsTWV0aG9kQ29kaW5nczpTZXJ2aWNlUmVmZXJyYWxNZXRob2RDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGVsZWM6IFJlZmVycmFscyBtYXkgYmUgYWNjZXB0ZWQgdmlhIGEgc2VjdXJlIG1lc3NhZ2luZyBzeXN0ZW0uIFRvIGRldGVybWluZSB0aGUgdHlwZXMgb2Ygc2VjdXJlIG1lc3NhZ2luZyBzeXN0ZW1zIHN1cHBvcnRlZCwgcmVmZXIgdG8gdGhlIGlkZW50aWZpZXJzIGNvbGxlY3Rpb24uIENhbGxlcnMgd2lsbCBuZWVkIHRvIHVuZGVyc3RhbmQgdGhlIHNwZWNpZmljIGlkZW50aWZpZXIgc3lzdGVtIHVzZWQgdG8ga25vdyB0aGF0IHRoZXkgYXJlIGFibGUgdG8gdHJhbnNtaXQgbWVzc2FnZXMuXHJcbiAgICovXHJcbiAgU2VjdXJlTWVzc2FnaW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIlNlY3VyZSBNZXNzYWdpbmdcIixcclxuICAgIGNvZGU6IFwiZWxlY1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VydmljZS1yZWZlcnJhbC1tZXRob2RcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGZheDogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCBieSBmYXguXHJcbiAgICovXHJcbiAgRmF4OiB7XHJcbiAgICBkaXNwbGF5OiBcIkZheFwiLFxyXG4gICAgY29kZTogXCJmYXhcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtYWlsOiBSZWZlcnJhbHMgbWF5IGJlIGFjY2VwdGVkIHZpYSByZWd1bGFyIHBvc3RhZ2UgKG9yIGhhbmQgZGVsaXZlcmVkKS5cclxuICAgKi9cclxuICBNYWlsOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1haWxcIixcclxuICAgIGNvZGU6IFwibWFpbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VydmljZS1yZWZlcnJhbC1tZXRob2RcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBob25lOiBSZWZlcnJhbHMgbWF5IGJlIGFjY2VwdGVkIG92ZXIgdGhlIHBob25lIGZyb20gYSBwcmFjdGl0aW9uZXIuXHJcbiAgICovXHJcbiAgUGhvbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiUGhvbmVcIixcclxuICAgIGNvZGU6IFwicGhvbmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzZW1haWw6IFJlZmVycmFscyBtYXkgYmUgYWNjZXB0ZWQgdmlhIGEgc2VjdXJlIGVtYWlsLiBUbyBzZW5kIHBsZWFzZSBlbmNyeXB0IHdpdGggdGhlIHNlcnZpY2VzIHB1YmxpYyBrZXkuXHJcbiAgICovXHJcbiAgU2VjdXJlRW1haWw6IHtcclxuICAgIGRpc3BsYXk6IFwiU2VjdXJlIEVtYWlsXCIsXHJcbiAgICBjb2RlOiBcInNlbWFpbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc2VydmljZS1yZWZlcnJhbC1tZXRob2RcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=