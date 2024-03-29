// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-status-reason|3.0.2
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 */
export const VaccinationProtocolDoseStatusReasonCodings = {
    /**
     * advstorage: The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    AdverseStorageCondition: {
        display: "Adverse storage condition",
        code: "advstorage",
        system: "http://hl7.org/fhir/vaccination-protocol-dose-status-reason",
    },
    /**
     * coldchbrk: The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.
     */
    ColdChainBreak: {
        display: "Cold chain break",
        code: "coldchbrk",
        system: "http://hl7.org/fhir/vaccination-protocol-dose-status-reason",
    },
    /**
     * explot: The product was administered after the expiration date associated with lot of vaccine.
     */
    ExpiredLot: {
        display: "Expired lot",
        code: "explot",
        system: "http://hl7.org/fhir/vaccination-protocol-dose-status-reason",
    },
    /**
     * outsidesched: The product was administered at a time inconsistent with the documented schedule.
     */
    AdministeredOutsideRecommendedSchedule: {
        display: "Administered outside recommended schedule",
        code: "outsidesched",
        system: "http://hl7.org/fhir/vaccination-protocol-dose-status-reason",
    },
    /**
     * prodrecall: The product administered has been recalled by the manufacturer.
     */
    ProductRecall: {
        display: "Product recall",
        code: "prodrecall",
        system: "http://hl7.org/fhir/vaccination-protocol-dose-status-reason",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFjY2luYXRpb25Qcm90b2NvbERvc2VTdGF0dXNSZWFzb25Db2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9WYWNjaW5hdGlvblByb3RvY29sRG9zZVN0YXR1c1JlYXNvbkNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNEZBQTRGO0FBOEI1Rjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBDQUEwQyxHQUFpRDtJQUN0Rzs7T0FFRztJQUNILHVCQUF1QixFQUFFO1FBQ3ZCLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLDZEQUE2RDtLQUN0RTtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsNkRBQTZEO0tBQ3RFO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw2REFBNkQ7S0FDdEU7SUFDRDs7T0FFRztJQUNILHNDQUFzQyxFQUFFO1FBQ3RDLE9BQU8sRUFBRSwyQ0FBMkM7UUFDcEQsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLDZEQUE2RDtLQUN0RTtJQUNEOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsNkRBQTZEO0tBQ3RFO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC92YWNjaW5hdGlvbi1wcm90b2NvbC1kb3NlLXN0YXR1cy1yZWFzb258My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgc2V0IHRvIGluc3RhbnRpYXRlIHRoaXMgYXR0cmlidXRlIHNob3VsZCBiZSBkcmF3biBmcm9tIGEgdGVybWlub2xvZ2ljYWxseSByb2J1c3QgY29kZSBzeXN0ZW0gdGhhdCBjb25zaXN0cyBvZiBvciBjb250YWlucyBjb25jZXB0cyB0byBzdXBwb3J0IGRlc2NyaWJpbmcgdGhlIHJlYXNvbiB3aHkgYW4gYWRtaW5pc3RlcmVkIGRvc2UgaGFzIGJlZW4gYXNzaWduZWQgYSBwYXJ0aWN1bGFyIHN0YXR1cy4gT2Z0ZW4sIHRoaXMgcmVhc29uIGRlc2NyaWJlcyB3aHkgYSBkb3NlIGlzIGNvbnNpZGVyZWQgaW52YWxpZC4gVGhpcyB2YWx1ZSBzZXQgaXMgcHJvdmlkZWQgYXMgYSBzdWdnZXN0aXZlIGV4YW1wbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYWNjaW5hdGlvblByb3RvY29sRG9zZVN0YXR1c1JlYXNvbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWR2c3RvcmFnZTogVGhlIHByb2R1Y3Qgd2FzIHN0b3JlZCBpbiBhIG1hbm5lciBpbmNvbnNpc3RlbnQgd2l0aCBtYW51ZmFjdHVyZXIgZ3VpZGVsaW5lcyBwb3RlbnRpYWxseSByZWR1Y2luZyB0aGUgZWZmZWN0aXZlbmVzcyBvZiB0aGUgcHJvZHVjdC5cclxuICAgKi9cclxuICBBZHZlcnNlU3RvcmFnZUNvbmRpdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb2xkY2hicms6IFRoZSBwcm9kdWN0IHdhcyBzdG9yZWQgYXQgYSB0ZW1wZXJhdHVyZSBpbmNvbnNpc3RlbnQgd2l0aCBtYW51ZmFjdHVyZXIgZ3VpZGVsaW5lcyBwb3RlbnRpYWxseSByZWR1Y2luZyB0aGUgZWZmZWN0aXZlbmVzcyBvZiB0aGUgcHJvZHVjdC5cclxuICAgKi9cclxuICBDb2xkQ2hhaW5CcmVhazogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBleHBsb3Q6IFRoZSBwcm9kdWN0IHdhcyBhZG1pbmlzdGVyZWQgYWZ0ZXIgdGhlIGV4cGlyYXRpb24gZGF0ZSBhc3NvY2lhdGVkIHdpdGggbG90IG9mIHZhY2NpbmUuXHJcbiAgICovXHJcbiAgRXhwaXJlZExvdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvdXRzaWRlc2NoZWQ6IFRoZSBwcm9kdWN0IHdhcyBhZG1pbmlzdGVyZWQgYXQgYSB0aW1lIGluY29uc2lzdGVudCB3aXRoIHRoZSBkb2N1bWVudGVkIHNjaGVkdWxlLlxyXG4gICAqL1xyXG4gIEFkbWluaXN0ZXJlZE91dHNpZGVSZWNvbW1lbmRlZFNjaGVkdWxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByb2RyZWNhbGw6IFRoZSBwcm9kdWN0IGFkbWluaXN0ZXJlZCBoYXMgYmVlbiByZWNhbGxlZCBieSB0aGUgbWFudWZhY3R1cmVyLlxyXG4gICAqL1xyXG4gIFByb2R1Y3RSZWNhbGw6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgc2V0IHRvIGluc3RhbnRpYXRlIHRoaXMgYXR0cmlidXRlIHNob3VsZCBiZSBkcmF3biBmcm9tIGEgdGVybWlub2xvZ2ljYWxseSByb2J1c3QgY29kZSBzeXN0ZW0gdGhhdCBjb25zaXN0cyBvZiBvciBjb250YWlucyBjb25jZXB0cyB0byBzdXBwb3J0IGRlc2NyaWJpbmcgdGhlIHJlYXNvbiB3aHkgYW4gYWRtaW5pc3RlcmVkIGRvc2UgaGFzIGJlZW4gYXNzaWduZWQgYSBwYXJ0aWN1bGFyIHN0YXR1cy4gT2Z0ZW4sIHRoaXMgcmVhc29uIGRlc2NyaWJlcyB3aHkgYSBkb3NlIGlzIGNvbnNpZGVyZWQgaW52YWxpZC4gVGhpcyB2YWx1ZSBzZXQgaXMgcHJvdmlkZWQgYXMgYSBzdWdnZXN0aXZlIGV4YW1wbGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVmFjY2luYXRpb25Qcm90b2NvbERvc2VTdGF0dXNSZWFzb25Db2RpbmdzOlZhY2NpbmF0aW9uUHJvdG9jb2xEb3NlU3RhdHVzUmVhc29uQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhZHZzdG9yYWdlOiBUaGUgcHJvZHVjdCB3YXMgc3RvcmVkIGluIGEgbWFubmVyIGluY29uc2lzdGVudCB3aXRoIG1hbnVmYWN0dXJlciBndWlkZWxpbmVzIHBvdGVudGlhbGx5IHJlZHVjaW5nIHRoZSBlZmZlY3RpdmVuZXNzIG9mIHRoZSBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIEFkdmVyc2VTdG9yYWdlQ29uZGl0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFkdmVyc2Ugc3RvcmFnZSBjb25kaXRpb25cIixcclxuICAgIGNvZGU6IFwiYWR2c3RvcmFnZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdmFjY2luYXRpb24tcHJvdG9jb2wtZG9zZS1zdGF0dXMtcmVhc29uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb2xkY2hicms6IFRoZSBwcm9kdWN0IHdhcyBzdG9yZWQgYXQgYSB0ZW1wZXJhdHVyZSBpbmNvbnNpc3RlbnQgd2l0aCBtYW51ZmFjdHVyZXIgZ3VpZGVsaW5lcyBwb3RlbnRpYWxseSByZWR1Y2luZyB0aGUgZWZmZWN0aXZlbmVzcyBvZiB0aGUgcHJvZHVjdC5cclxuICAgKi9cclxuICBDb2xkQ2hhaW5CcmVhazoge1xyXG4gICAgZGlzcGxheTogXCJDb2xkIGNoYWluIGJyZWFrXCIsXHJcbiAgICBjb2RlOiBcImNvbGRjaGJya1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvdmFjY2luYXRpb24tcHJvdG9jb2wtZG9zZS1zdGF0dXMtcmVhc29uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleHBsb3Q6IFRoZSBwcm9kdWN0IHdhcyBhZG1pbmlzdGVyZWQgYWZ0ZXIgdGhlIGV4cGlyYXRpb24gZGF0ZSBhc3NvY2lhdGVkIHdpdGggbG90IG9mIHZhY2NpbmUuXHJcbiAgICovXHJcbiAgRXhwaXJlZExvdDoge1xyXG4gICAgZGlzcGxheTogXCJFeHBpcmVkIGxvdFwiLFxyXG4gICAgY29kZTogXCJleHBsb3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3ZhY2NpbmF0aW9uLXByb3RvY29sLWRvc2Utc3RhdHVzLXJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3V0c2lkZXNjaGVkOiBUaGUgcHJvZHVjdCB3YXMgYWRtaW5pc3RlcmVkIGF0IGEgdGltZSBpbmNvbnNpc3RlbnQgd2l0aCB0aGUgZG9jdW1lbnRlZCBzY2hlZHVsZS5cclxuICAgKi9cclxuICBBZG1pbmlzdGVyZWRPdXRzaWRlUmVjb21tZW5kZWRTY2hlZHVsZToge1xyXG4gICAgZGlzcGxheTogXCJBZG1pbmlzdGVyZWQgb3V0c2lkZSByZWNvbW1lbmRlZCBzY2hlZHVsZVwiLFxyXG4gICAgY29kZTogXCJvdXRzaWRlc2NoZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3ZhY2NpbmF0aW9uLXByb3RvY29sLWRvc2Utc3RhdHVzLXJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcHJvZHJlY2FsbDogVGhlIHByb2R1Y3QgYWRtaW5pc3RlcmVkIGhhcyBiZWVuIHJlY2FsbGVkIGJ5IHRoZSBtYW51ZmFjdHVyZXIuXHJcbiAgICovXHJcbiAgUHJvZHVjdFJlY2FsbDoge1xyXG4gICAgZGlzcGxheTogXCJQcm9kdWN0IHJlY2FsbFwiLFxyXG4gICAgY29kZTogXCJwcm9kcmVjYWxsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci92YWNjaW5hdGlvbi1wcm90b2NvbC1kb3NlLXN0YXR1cy1yZWFzb25cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=