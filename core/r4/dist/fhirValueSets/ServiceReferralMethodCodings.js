// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/service-referral-method|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export const ServiceReferralMethodCodings = {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    SecureMessaging: new Coding({
        display: "Secure Messaging",
        code: "elec",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method",
    }),
    /**
     * fax: Referrals may be accepted by fax.
     */
    Fax: new Coding({
        display: "Fax",
        code: "fax",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method",
    }),
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    Mail: new Coding({
        display: "Mail",
        code: "mail",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method",
    }),
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    Phone: new Coding({
        display: "Phone",
        code: "phone",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method",
    }),
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    SecureEmail: new Coding({
        display: "Secure Email",
        code: "semail",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVJlZmVycmFsTWV0aG9kQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU2VydmljZVJlZmVycmFsTWV0aG9kQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0RUFBNEU7QUFFNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUc7SUFDMUM7O09BRUc7SUFDSCxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDMUIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2YsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwrREFBK0Q7S0FDeEUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLCtEQUErRDtLQUN4RSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxXQUFXLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsK0RBQStEO0tBQ3hFLENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWV0aG9kcyBvZiByZWZlcnJhbCBjYW4gYmUgdXNlZCB3aGVuIHJlZmVycmluZyB0byBhIHNwZWNpZmljIEhlYWx0aENhcmVTZXJ2aWNlIHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNlcnZpY2VSZWZlcnJhbE1ldGhvZENvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogZWxlYzogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCB2aWEgYSBzZWN1cmUgbWVzc2FnaW5nIHN5c3RlbS4gVG8gZGV0ZXJtaW5lIHRoZSB0eXBlcyBvZiBzZWN1cmUgbWVzc2FnaW5nIHN5c3RlbXMgc3VwcG9ydGVkLCByZWZlciB0byB0aGUgaWRlbnRpZmllcnMgY29sbGVjdGlvbi4gQ2FsbGVycyB3aWxsIG5lZWQgdG8gdW5kZXJzdGFuZCB0aGUgc3BlY2lmaWMgaWRlbnRpZmllciBzeXN0ZW0gdXNlZCB0byBrbm93IHRoYXQgdGhleSBhcmUgYWJsZSB0byB0cmFuc21pdCBtZXNzYWdlcy5cclxuICAgKi9cclxuICBTZWN1cmVNZXNzYWdpbmc6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJTZWN1cmUgTWVzc2FnaW5nXCIsXHJcbiAgICBjb2RlOiBcImVsZWNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogZmF4OiBSZWZlcnJhbHMgbWF5IGJlIGFjY2VwdGVkIGJ5IGZheC5cclxuICAgKi9cclxuICBGYXg6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJGYXhcIixcclxuICAgIGNvZGU6IFwiZmF4XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zZXJ2aWNlLXJlZmVycmFsLW1ldGhvZFwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG1haWw6IFJlZmVycmFscyBtYXkgYmUgYWNjZXB0ZWQgdmlhIHJlZ3VsYXIgcG9zdGFnZSAob3IgaGFuZCBkZWxpdmVyZWQpLlxyXG4gICAqL1xyXG4gIE1haWw6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJNYWlsXCIsXHJcbiAgICBjb2RlOiBcIm1haWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcGhvbmU6IFJlZmVycmFscyBtYXkgYmUgYWNjZXB0ZWQgb3ZlciB0aGUgcGhvbmUgZnJvbSBhIHByYWN0aXRpb25lci5cclxuICAgKi9cclxuICBQaG9uZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlBob25lXCIsXHJcbiAgICBjb2RlOiBcInBob25lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zZXJ2aWNlLXJlZmVycmFsLW1ldGhvZFwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHNlbWFpbDogUmVmZXJyYWxzIG1heSBiZSBhY2NlcHRlZCB2aWEgYSBzZWN1cmUgZW1haWwuIFRvIHNlbmQgcGxlYXNlIGVuY3J5cHQgd2l0aCB0aGUgc2VydmljZXMgcHVibGljIGtleS5cclxuICAgKi9cclxuICBTZWN1cmVFbWFpbDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlNlY3VyZSBFbWFpbFwiLFxyXG4gICAgY29kZTogXCJzZW1haWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3NlcnZpY2UtcmVmZXJyYWwtbWV0aG9kXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIG1ldGhvZHMgb2YgcmVmZXJyYWwgY2FuIGJlIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gYSBzcGVjaWZpYyBIZWFsdGhDYXJlU2VydmljZSByZXNvdXJjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNlcnZpY2VSZWZlcnJhbE1ldGhvZENvZGluZ1R5cGUgPSB0eXBlb2YgU2VydmljZVJlZmVycmFsTWV0aG9kQ29kaW5ncztcclxuIl19