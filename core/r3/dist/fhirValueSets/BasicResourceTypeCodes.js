// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/basic-resource-type|3.0.2
/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export const BasicResourceTypeCodes = {
    /**
     * account: A financial instrument used to track costs, charges or other amounts.
     */
    Account: "account",
    /**
     * adjudicat: The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.
     */
    InvoiceAdjudication: "adjudicat",
    /**
     * adminact: An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.
     */
    AdministrativeActivity: "adminact",
    /**
     * advevent: An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).
     */
    AdverseEvent: "advevent",
    /**
     * aptmtreq: A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints
     */
    AppointmentRequest: "aptmtreq",
    /**
     * consent: An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.
     */
    Consent: "consent",
    /**
     * diet: The specification of a set of food and/or other nutritional material to be delivered to a patient.
     */
    Diet: "diet",
    /**
     * exposure: Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.
     */
    Exposure: "exposure",
    /**
     * investigation: A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event
     */
    Investigation: "investigation",
    /**
     * invoice: A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.
     */
    Invoice: "invoice",
    /**
     * predetermine: An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services
     */
    Predetermination: "predetermine",
    /**
     * predetreq: A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services
     */
    PreDeterminationRequest: "predetreq",
    /**
     * protocol: A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.
     */
    Protocol: "protocol",
    /**
     * referral: A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.
     */
    Referral: "referral",
    /**
     * study: An investigation to determine information about a particular therapy or product
     */
    Study: "study",
    /**
     * transfer: The transition of a patient or set of material from one location to another
     */
    Transfer: "transfer",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNSZXNvdXJjZVR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQmFzaWNSZXNvdXJjZVR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3RUFBd0U7QUFFeEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsV0FBVztJQUNoQzs7T0FFRztJQUNILHNCQUFzQixFQUFFLFVBQVU7SUFDbEM7O09BRUc7SUFDSCxZQUFZLEVBQUUsVUFBVTtJQUN4Qjs7T0FFRztJQUNILGtCQUFrQixFQUFFLFVBQVU7SUFDOUI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILGFBQWEsRUFBRSxlQUFlO0lBQzlCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRSxjQUFjO0lBQ2hDOztPQUVHO0lBQ0gsdUJBQXVCLEVBQUUsV0FBVztJQUNwQzs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7Q0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2Jhc2ljLXJlc291cmNlLXR5cGV8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIGNvZGVzIGZvciByZXNvdXJjZXMgbm90IHlldCBzdXBwb3J0ZWQgYnkgKG9yIHdoaWNoIHdpbGwgbmV2ZXIgYmUgc3VwcG9ydGVkIGJ5KSBGSElSLiAgTWFueSBvZiB0aGUgY29kZXMgbGlzdGVkIGhlcmUgd2lsbCBldmVudHVhbGx5IGJlIHR1cm5lZCBpbnRvIG9mZmljaWFsIHJlc291cmNlcy4gIEhvd2V2ZXIsIHRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGFueSBwYXJ0aWN1bGFyIHJlc291cmNlIHdpbGwgYmUgY3JlYXRlZCBub3IgdGhhdCB0aGUgc2NvcGUgd2lsbCBiZSBleGFjdGx5IGFzIGRlZmluZWQgYnkgdGhlIGNvZGVzIHByZXNlbnRlZCBoZXJlLiAgQ29kZXMgaW4gdGhpcyBzZXQgd2lsbCBiZSBkZXByZWNhdGVkIGlmL3doZW4gZm9ybWFsIHJlc291cmNlcyBhcmUgZGVmaW5lZCB0aGF0IGVuY29tcGFzcyB0aGVzZSBjb25jZXB0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBCYXNpY1Jlc291cmNlVHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY291bnQ6IEEgZmluYW5jaWFsIGluc3RydW1lbnQgdXNlZCB0byB0cmFjayBjb3N0cywgY2hhcmdlcyBvciBvdGhlciBhbW91bnRzLlxyXG4gICAqL1xyXG4gIEFjY291bnQ6IFwiYWNjb3VudFwiLFxyXG4gIC8qKlxyXG4gICAqIGFkanVkaWNhdDogVGhlIGRldGVybWluYXRpb24gb2Ygd2hhdCB3aWxsIGJlIHBhaWQgYWdhaW5zdCBhIHBhcnRpY3VsYXIgaW52b2ljZSBiYXNlZCBvbiBjb3ZlcmFnZSwgcGxhbiBydWxlcywgZXRjLlxyXG4gICAqL1xyXG4gIEludm9pY2VBZGp1ZGljYXRpb246IFwiYWRqdWRpY2F0XCIsXHJcbiAgLyoqXHJcbiAgICogYWRtaW5hY3Q6IEFuIG9jY3VycmVuY2Ugb2YgYSBub24tY2FyZS1yZWxhdGVkIGV2ZW50IGluIHRoZSBoZWFsdGhjYXJlIGRvbWFpbiwgc3VjaCBhcyBhcHByb3ZhbHMsIHJldmlld3MsIGV0Yy5cclxuICAgKi9cclxuICBBZG1pbmlzdHJhdGl2ZUFjdGl2aXR5OiBcImFkbWluYWN0XCIsXHJcbiAgLyoqXHJcbiAgICogYWR2ZXZlbnQ6IEFuIHVuZGVzaXJlZCByZWFjdGlvbiBjYXVzZWQgYnkgZXhwb3N1cmUgdG8gc29tZSBhZ2VudCAoZS5nLiBhIG1lZGljYXRpb24sIGltbXVuaXphdGlvbiwgZm9vZCwgb3IgZW52aXJvbm1lbnRhbCBhZ2VudCkuXHJcbiAgICovXHJcbiAgQWR2ZXJzZUV2ZW50OiBcImFkdmV2ZW50XCIsXHJcbiAgLyoqXHJcbiAgICogYXB0bXRyZXE6IEEgcmVxdWVzdCB0aGF0IGEgdGltZSBiZSBzY2hlZHVsZWQgZm9yIGEgdHlwZSBvZiBzZXJ2aWNlIGZvciBhIHNwZWNpZmllZCBwYXRpZW50LCBwb3RlbnRpYWxseSBzdWJqZWN0IHRvIG90aGVyIGNvbnN0cmFpbnRzXHJcbiAgICovXHJcbiAgQXBwb2ludG1lbnRSZXF1ZXN0OiBcImFwdG10cmVxXCIsXHJcbiAgLyoqXHJcbiAgICogY29uc2VudDogQW4gYXNzZXJ0aW9uIG9mIHBlcm1pc3Npb24gZm9yIGFuIGFjdGl2aXR5IG9yIHNldCBvZiBhY3Rpdml0aWVzIHRvIG9jY3VyLCBwb3NzaWJseSBzdWJqZWN0IHRvIHBhcnRpY3VsYXIgbGltaXRhdGlvbnM7IGUuZy4gc3VyZ2ljYWwgY29uc2VudCwgaW5mb3JtYXRpb24gZGlzY2xvc3VyZSBjb25zZW50LCBldGMuXHJcbiAgICovXHJcbiAgQ29uc2VudDogXCJjb25zZW50XCIsXHJcbiAgLyoqXHJcbiAgICogZGlldDogVGhlIHNwZWNpZmljYXRpb24gb2YgYSBzZXQgb2YgZm9vZCBhbmQvb3Igb3RoZXIgbnV0cml0aW9uYWwgbWF0ZXJpYWwgdG8gYmUgZGVsaXZlcmVkIHRvIGEgcGF0aWVudC5cclxuICAgKi9cclxuICBEaWV0OiBcImRpZXRcIixcclxuICAvKipcclxuICAgKiBleHBvc3VyZTogUmVjb3JkIG9mIGEgc2l0dWF0aW9uIHdoZXJlIGEgc3ViamVjdCB3YXMgZXhwb3NlZCB0byBhIHN1YnN0YW5jZS4gIFVzdWFsbHkgb2YgaW50ZXJlc3QgdG8gcHVibGljIGhlYWx0aC5cclxuICAgKi9cclxuICBFeHBvc3VyZTogXCJleHBvc3VyZVwiLFxyXG4gIC8qKlxyXG4gICAqIGludmVzdGlnYXRpb246IEEgZm9ybWFsaXplZCBpbnF1aXJ5IGludG8gdGhlIGNpcmN1bXN0YW5jZXMgc3Vycm91bmRpbmcgYSBwYXJ0aWN1bGFyIHVucGxhbm5lZCBldmVudCBvciBwb3RlbnRpYWwgZXZlbnQgZm9yIHRoZSBwdXJwb3NlcyBvZiBpZGVudGlmeWluZyBwb3NzaWJsZSBjYXVzZXMgYW5kIGNvbnRyaWJ1dGluZyBmYWN0b3JzIGZvciB0aGUgZXZlbnRcclxuICAgKi9cclxuICBJbnZlc3RpZ2F0aW9uOiBcImludmVzdGlnYXRpb25cIixcclxuICAvKipcclxuICAgKiBpbnZvaWNlOiBBIHJlcXVlc3QgZm9yIHBheW1lbnQgZm9yIGdvb2RzIGFuZC9vciBzZXJ2aWNlcy4gIEluY2x1ZGVzIHRoZSBpZGVhIG9mIGEgaGVhbHRoY2FyZSBpbnN1cmFuY2UgY2xhaW0uXHJcbiAgICovXHJcbiAgSW52b2ljZTogXCJpbnZvaWNlXCIsXHJcbiAgLyoqXHJcbiAgICogcHJlZGV0ZXJtaW5lOiBBbiBhZGp1ZGljYXRpb24gb2Ygd2hhdCB3b3VsZCBiZSBwYWlkIHVuZGVyIGFuIGluc3VyYW5jZSBwbGFuIGZvciBhIGh5cG90aGV0aWNhbCBjbGFpbSBmb3IgZ29vZHMgb3Igc2VydmljZXNcclxuICAgKi9cclxuICBQcmVkZXRlcm1pbmF0aW9uOiBcInByZWRldGVybWluZVwiLFxyXG4gIC8qKlxyXG4gICAqIHByZWRldHJlcTogQSByZXF1ZXN0IGZvciBhIHByZS1kZXRlcm1pbmF0aW9uIG9mIHRoZSBjb3N0IHRoYXQgd291bGQgYmUgcGFpZCB1bmRlciBhbiBpbnN1cmFuY2UgcGxhbiBmb3IgYSBoeXBvdGhldGljYWwgY2xhaW0gZm9yIGdvb2RzIG9yIHNlcnZpY2VzXHJcbiAgICovXHJcbiAgUHJlRGV0ZXJtaW5hdGlvblJlcXVlc3Q6IFwicHJlZGV0cmVxXCIsXHJcbiAgLyoqXHJcbiAgICogcHJvdG9jb2w6IEEgc2V0IG9mIChwb3NzaWJseSBjb25kaXRpb25hbCkgc3RlcHMgdG8gYmUgdGFrZW4gdG8gYWNoaWV2ZSBzb21lIGFpbS4gIEluY2x1ZGVzIHN0dWR5IHByb3RvY29scywgdHJlYXRtZW50IHByb3RvY29scywgZW1lcmdlbmN5IHByb3RvY29scywgZXRjLlxyXG4gICAqL1xyXG4gIFByb3RvY29sOiBcInByb3RvY29sXCIsXHJcbiAgLyoqXHJcbiAgICogcmVmZXJyYWw6IEEgcmVxdWVzdCB0aGF0IGNhcmUgb2YgYSBwYXJ0aWN1bGFyIHR5cGUgYmUgcHJvdmlkZWQgdG8gYSBwYXRpZW50LiAgQ291bGQgaW52b2x2ZSB0aGUgdHJhbnNmZXIgb2YgY2FyZSwgYSBjb25zdWx0LCBldGMuXHJcbiAgICovXHJcbiAgUmVmZXJyYWw6IFwicmVmZXJyYWxcIixcclxuICAvKipcclxuICAgKiBzdHVkeTogQW4gaW52ZXN0aWdhdGlvbiB0byBkZXRlcm1pbmUgaW5mb3JtYXRpb24gYWJvdXQgYSBwYXJ0aWN1bGFyIHRoZXJhcHkgb3IgcHJvZHVjdFxyXG4gICAqL1xyXG4gIFN0dWR5OiBcInN0dWR5XCIsXHJcbiAgLyoqXHJcbiAgICogdHJhbnNmZXI6IFRoZSB0cmFuc2l0aW9uIG9mIGEgcGF0aWVudCBvciBzZXQgb2YgbWF0ZXJpYWwgZnJvbSBvbmUgbG9jYXRpb24gdG8gYW5vdGhlclxyXG4gICAqL1xyXG4gIFRyYW5zZmVyOiBcInRyYW5zZmVyXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyB2YWx1ZSBzZXQgZGVmaW5lcyBjb2RlcyBmb3IgcmVzb3VyY2VzIG5vdCB5ZXQgc3VwcG9ydGVkIGJ5IChvciB3aGljaCB3aWxsIG5ldmVyIGJlIHN1cHBvcnRlZCBieSkgRkhJUi4gIE1hbnkgb2YgdGhlIGNvZGVzIGxpc3RlZCBoZXJlIHdpbGwgZXZlbnR1YWxseSBiZSB0dXJuZWQgaW50byBvZmZpY2lhbCByZXNvdXJjZXMuICBIb3dldmVyLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBhbnkgcGFydGljdWxhciByZXNvdXJjZSB3aWxsIGJlIGNyZWF0ZWQgbm9yIHRoYXQgdGhlIHNjb3BlIHdpbGwgYmUgZXhhY3RseSBhcyBkZWZpbmVkIGJ5IHRoZSBjb2RlcyBwcmVzZW50ZWQgaGVyZS4gIENvZGVzIGluIHRoaXMgc2V0IHdpbGwgYmUgZGVwcmVjYXRlZCBpZi93aGVuIGZvcm1hbCByZXNvdXJjZXMgYXJlIGRlZmluZWQgdGhhdCBlbmNvbXBhc3MgdGhlc2UgY29uY2VwdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCYXNpY1Jlc291cmNlVHlwZUNvZGVUeXBlID0gdHlwZW9mIEJhc2ljUmVzb3VyY2VUeXBlQ29kZXNba2V5b2YgdHlwZW9mIEJhc2ljUmVzb3VyY2VUeXBlQ29kZXNdO1xyXG4iXX0=