// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-plan-activity-kind|4.3.0
/**
 * Resource types defined as part of FHIR that can be represented as in-line definitions of a care plan activity.
 */
export const CarePlanActivityKindCodes = {
    /**
     * Appointment: A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
    Appointment: "Appointment",
    /**
     * CommunicationRequest: A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
     */
    CommunicationRequest: "CommunicationRequest",
    /**
     * DeviceRequest: Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
     */
    DeviceRequest: "DeviceRequest",
    /**
     * MedicationRequest: An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
     */
    MedicationRequest: "MedicationRequest",
    /**
     * NutritionOrder: A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
    NutritionOrder: "NutritionOrder",
    /**
     * ServiceRequest: A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
     */
    ServiceRequest: "ServiceRequest",
    /**
     * Task: A task to be performed.
     */
    Task: "Task",
    /**
     * VisionPrescription: An authorization for the provision of glasses and/or contact lenses to a patient.
     */
    VisionPrescription: "VisionPrescription",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZVBsYW5BY3Rpdml0eUtpbmRDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2FyZVBsYW5BY3Rpdml0eUtpbmRDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw0RUFBNEU7QUFFNUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2Qzs7T0FFRztJQUNILFdBQVcsRUFBRSxhQUFhO0lBQzFCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGVBQWU7SUFDOUI7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEM7O09BRUc7SUFDSCxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQzs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxvQkFBb0I7Q0FDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY2FyZS1wbGFuLWFjdGl2aXR5LWtpbmR8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBSZXNvdXJjZSB0eXBlcyBkZWZpbmVkIGFzIHBhcnQgb2YgRkhJUiB0aGF0IGNhbiBiZSByZXByZXNlbnRlZCBhcyBpbi1saW5lIGRlZmluaXRpb25zIG9mIGEgY2FyZSBwbGFuIGFjdGl2aXR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENhcmVQbGFuQWN0aXZpdHlLaW5kQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogQXBwb2ludG1lbnQ6IEEgYm9va2luZyBvZiBhIGhlYWx0aGNhcmUgZXZlbnQgYW1vbmcgcGF0aWVudChzKSwgcHJhY3RpdGlvbmVyKHMpLCByZWxhdGVkIHBlcnNvbihzKSBhbmQvb3IgZGV2aWNlKHMpIGZvciBhIHNwZWNpZmljIGRhdGUvdGltZS4gVGhpcyBtYXkgcmVzdWx0IGluIG9uZSBvciBtb3JlIEVuY291bnRlcihzKS5cclxuICAgKi9cclxuICBBcHBvaW50bWVudDogXCJBcHBvaW50bWVudFwiLFxyXG4gIC8qKlxyXG4gICAqIENvbW11bmljYXRpb25SZXF1ZXN0OiBBIHJlcXVlc3QgdG8gY29udmV5IGluZm9ybWF0aW9uOyBlLmcuIHRoZSBDRFMgc3lzdGVtIHByb3Bvc2VzIHRoYXQgYW4gYWxlcnQgYmUgc2VudCB0byBhIHJlc3BvbnNpYmxlIHByb3ZpZGVyLCB0aGUgQ0RTIHN5c3RlbSBwcm9wb3NlcyB0aGF0IHRoZSBwdWJsaWMgaGVhbHRoIGFnZW5jeSBiZSBub3RpZmllZCBhYm91dCBhIHJlcG9ydGFibGUgY29uZGl0aW9uLlxyXG4gICAqL1xyXG4gIENvbW11bmljYXRpb25SZXF1ZXN0OiBcIkNvbW11bmljYXRpb25SZXF1ZXN0XCIsXHJcbiAgLyoqXHJcbiAgICogRGV2aWNlUmVxdWVzdDogUmVwcmVzZW50cyBhIHJlcXVlc3QgZm9yIGEgcGF0aWVudCB0byBlbXBsb3kgYSBtZWRpY2FsIGRldmljZS4gVGhlIGRldmljZSBtYXkgYmUgYW4gaW1wbGFudGFibGUgZGV2aWNlLCBvciBhbiBleHRlcm5hbCBhc3Npc3RpdmUgZGV2aWNlLCBzdWNoIGFzIGEgd2Fsa2VyLlxyXG4gICAqL1xyXG4gIERldmljZVJlcXVlc3Q6IFwiRGV2aWNlUmVxdWVzdFwiLFxyXG4gIC8qKlxyXG4gICAqIE1lZGljYXRpb25SZXF1ZXN0OiBBbiBvcmRlciBvciByZXF1ZXN0IGZvciBib3RoIHN1cHBseSBvZiB0aGUgbWVkaWNhdGlvbiBhbmQgdGhlIGluc3RydWN0aW9ucyBmb3IgYWRtaW5pc3RyYXRpb24gb2YgdGhlIG1lZGljYXRpb24gdG8gYSBwYXRpZW50LiBUaGUgcmVzb3VyY2UgaXMgY2FsbGVkIFwiTWVkaWNhdGlvblJlcXVlc3RcIiByYXRoZXIgdGhhbiBcIk1lZGljYXRpb25QcmVzY3JpcHRpb25cIiBvciBcIk1lZGljYXRpb25PcmRlclwiIHRvIGdlbmVyYWxpemUgdGhlIHVzZSBhY3Jvc3MgaW5wYXRpZW50IGFuZCBvdXRwYXRpZW50IHNldHRpbmdzLCBpbmNsdWRpbmcgY2FyZSBwbGFucywgZXRjLiwgYW5kIHRvIGhhcm1vbml6ZSB3aXRoIHdvcmtmbG93IHBhdHRlcm5zLlxyXG4gICAqL1xyXG4gIE1lZGljYXRpb25SZXF1ZXN0OiBcIk1lZGljYXRpb25SZXF1ZXN0XCIsXHJcbiAgLyoqXHJcbiAgICogTnV0cml0aW9uT3JkZXI6IEEgcmVxdWVzdCB0byBzdXBwbHkgYSBkaWV0LCBmb3JtdWxhIGZlZWRpbmcgKGVudGVyYWwpIG9yIG9yYWwgbnV0cml0aW9uYWwgc3VwcGxlbWVudCB0byBhIHBhdGllbnQvcmVzaWRlbnQuXHJcbiAgICovXHJcbiAgTnV0cml0aW9uT3JkZXI6IFwiTnV0cml0aW9uT3JkZXJcIixcclxuICAvKipcclxuICAgKiBTZXJ2aWNlUmVxdWVzdDogQSByZWNvcmQgb2YgYSByZXF1ZXN0IGZvciBzZXJ2aWNlIHN1Y2ggYXMgZGlhZ25vc3RpYyBpbnZlc3RpZ2F0aW9ucywgdHJlYXRtZW50cywgb3Igb3BlcmF0aW9ucyB0byBiZSBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgU2VydmljZVJlcXVlc3Q6IFwiU2VydmljZVJlcXVlc3RcIixcclxuICAvKipcclxuICAgKiBUYXNrOiBBIHRhc2sgdG8gYmUgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIFRhc2s6IFwiVGFza1wiLFxyXG4gIC8qKlxyXG4gICAqIFZpc2lvblByZXNjcmlwdGlvbjogQW4gYXV0aG9yaXphdGlvbiBmb3IgdGhlIHByb3Zpc2lvbiBvZiBnbGFzc2VzIGFuZC9vciBjb250YWN0IGxlbnNlcyB0byBhIHBhdGllbnQuXHJcbiAgICovXHJcbiAgVmlzaW9uUHJlc2NyaXB0aW9uOiBcIlZpc2lvblByZXNjcmlwdGlvblwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFJlc291cmNlIHR5cGVzIGRlZmluZWQgYXMgcGFydCBvZiBGSElSIHRoYXQgY2FuIGJlIHJlcHJlc2VudGVkIGFzIGluLWxpbmUgZGVmaW5pdGlvbnMgb2YgYSBjYXJlIHBsYW4gYWN0aXZpdHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXJlUGxhbkFjdGl2aXR5S2luZENvZGVUeXBlID0gdHlwZW9mIENhcmVQbGFuQWN0aXZpdHlLaW5kQ29kZXNba2V5b2YgdHlwZW9mIENhcmVQbGFuQWN0aXZpdHlLaW5kQ29kZXNdO1xyXG4iXX0=