// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status-reason|4.3.0
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export const ImmunizationEvaluationDoseStatusReasonCodes = {
    /**
     * advstorage: The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    AdverseStorageCondition: "advstorage",
    /**
     * coldchbrk: The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    ColdChainBreak: "coldchbrk",
    /**
     * explot: The product was administered after the expiration date associated with lot of vaccine.
     */
    ExpiredLot: "explot",
    /**
     * outsidesched: The product was administered at a time inconsistent with the documented schedule.
     */
    AdministeredOutsideRecommendedSchedule: "outsidesched",
    /**
     * prodrecall: The product administered has been recalled by the manufacturer.
     */
    ProductRecall: "prodrecall",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwyQ0FBMkMsR0FBRztJQUN6RDs7T0FFRztJQUNILHVCQUF1QixFQUFFLFlBQVk7SUFDckM7O09BRUc7SUFDSCxjQUFjLEVBQUUsV0FBVztJQUMzQjs7T0FFRztJQUNILFVBQVUsRUFBRSxRQUFRO0lBQ3BCOztPQUVHO0lBQ0gsc0NBQXNDLEVBQUUsY0FBYztJQUN0RDs7T0FFRztJQUNILGFBQWEsRUFBRSxZQUFZO0NBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2ltbXVuaXphdGlvbi1ldmFsdWF0aW9uLWRvc2Utc3RhdHVzLXJlYXNvbnw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSB2YWx1ZSBzZXQgdG8gaW5zdGFudGlhdGUgdGhpcyBhdHRyaWJ1dGUgc2hvdWxkIGJlIGRyYXduIGZyb20gYSB0ZXJtaW5vbG9naWNhbGx5IHJvYnVzdCBjb2RlIHN5c3RlbSB0aGF0IGNvbnNpc3RzIG9mIG9yIGNvbnRhaW5zIGNvbmNlcHRzIHRvIHN1cHBvcnQgZGVzY3JpYmluZyB0aGUgcmVhc29uIHdoeSBhbiBhZG1pbmlzdGVyZWQgZG9zZSBoYXMgYmVlbiBhc3NpZ25lZCBhIHBhcnRpY3VsYXIgc3RhdHVzLiBPZnRlbiwgdGhpcyByZWFzb24gZGVzY3JpYmVzIHdoeSBhIGRvc2UgaXMgY29uc2lkZXJlZCBpbnZhbGlkLiBUaGlzIHZhbHVlIHNldCBpcyBwcm92aWRlZCBhcyBhIHN1Z2dlc3RpdmUgZXhhbXBsZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFkdnN0b3JhZ2U6IFRoZSBwcm9kdWN0IHdhcyBzdG9yZWQgaW4gYSBtYW5uZXIgaW5jb25zaXN0ZW50IHdpdGggbWFudWZhY3R1cmVyIGd1aWRlbGluZXMgcG90ZW50aWFsbHkgcmVkdWNpbmcgdGhlIGVmZmVjdGl2ZW5lc3Mgb2YgdGhlIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgQWR2ZXJzZVN0b3JhZ2VDb25kaXRpb246IFwiYWR2c3RvcmFnZVwiLFxyXG4gIC8qKlxyXG4gICAqIGNvbGRjaGJyazogVGhlIHByb2R1Y3Qgd2FzIHN0b3JlZCBhdCBhIHRlbXBlcmF0dXJlIGluY29uc2lzdGVudCB3aXRoIG1hbnVmYWN0dXJlciBndWlkZWxpbmVzIHBvdGVudGlhbGx5IHJlZHVjaW5nIHRoZSBlZmZlY3RpdmVuZXNzIG9mIHRoZSBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIENvbGRDaGFpbkJyZWFrOiBcImNvbGRjaGJya1wiLFxyXG4gIC8qKlxyXG4gICAqIGV4cGxvdDogVGhlIHByb2R1Y3Qgd2FzIGFkbWluaXN0ZXJlZCBhZnRlciB0aGUgZXhwaXJhdGlvbiBkYXRlIGFzc29jaWF0ZWQgd2l0aCBsb3Qgb2YgdmFjY2luZS5cclxuICAgKi9cclxuICBFeHBpcmVkTG90OiBcImV4cGxvdFwiLFxyXG4gIC8qKlxyXG4gICAqIG91dHNpZGVzY2hlZDogVGhlIHByb2R1Y3Qgd2FzIGFkbWluaXN0ZXJlZCBhdCBhIHRpbWUgaW5jb25zaXN0ZW50IHdpdGggdGhlIGRvY3VtZW50ZWQgc2NoZWR1bGUuXHJcbiAgICovXHJcbiAgQWRtaW5pc3RlcmVkT3V0c2lkZVJlY29tbWVuZGVkU2NoZWR1bGU6IFwib3V0c2lkZXNjaGVkXCIsXHJcbiAgLyoqXHJcbiAgICogcHJvZHJlY2FsbDogVGhlIHByb2R1Y3QgYWRtaW5pc3RlcmVkIGhhcyBiZWVuIHJlY2FsbGVkIGJ5IHRoZSBtYW51ZmFjdHVyZXIuXHJcbiAgICovXHJcbiAgUHJvZHVjdFJlY2FsbDogXCJwcm9kcmVjYWxsXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHZhbHVlIHNldCB0byBpbnN0YW50aWF0ZSB0aGlzIGF0dHJpYnV0ZSBzaG91bGQgYmUgZHJhd24gZnJvbSBhIHRlcm1pbm9sb2dpY2FsbHkgcm9idXN0IGNvZGUgc3lzdGVtIHRoYXQgY29uc2lzdHMgb2Ygb3IgY29udGFpbnMgY29uY2VwdHMgdG8gc3VwcG9ydCBkZXNjcmliaW5nIHRoZSByZWFzb24gd2h5IGFuIGFkbWluaXN0ZXJlZCBkb3NlIGhhcyBiZWVuIGFzc2lnbmVkIGEgcGFydGljdWxhciBzdGF0dXMuIE9mdGVuLCB0aGlzIHJlYXNvbiBkZXNjcmliZXMgd2h5IGEgZG9zZSBpcyBjb25zaWRlcmVkIGludmFsaWQuIFRoaXMgdmFsdWUgc2V0IGlzIHByb3ZpZGVkIGFzIGEgc3VnZ2VzdGl2ZSBleGFtcGxlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSW1tdW5pemF0aW9uRXZhbHVhdGlvbkRvc2VTdGF0dXNSZWFzb25Db2RlVHlwZSA9IHR5cGVvZiBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGVzW2tleW9mIHR5cGVvZiBJbW11bml6YXRpb25FdmFsdWF0aW9uRG9zZVN0YXR1c1JlYXNvbkNvZGVzXTtcclxuIl19