// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-recommendation-status|4.0.1
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 */
export const ImmunizationRecommendationStatusCodes = {
    /**
     * complete: The patient is fully protected and no further doses are recommended.
     */
    Complete: "complete",
    /**
     * contraindicated: The patient is contraindicated for futher doses.
     */
    Contraindicated: "contraindicated",
    /**
     * due: The patient is due for their next vaccination.
     */
    Due: "due",
    /**
     * immune: The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.
     */
    Immune: "immune",
    /**
     * overdue: The patient is considered overdue for their next vaccination.
     */
    Overdue: "overdue",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb25TdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb25TdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx1RkFBdUY7QUFFdkY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FBRztJQUNuRDs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQzs7T0FFRztJQUNILEdBQUcsRUFBRSxLQUFLO0lBQ1Y7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pbW11bml6YXRpb24tcmVjb21tZW5kYXRpb24tc3RhdHVzfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhlIHZhbHVlIHNldCB0byBpbnN0YW50aWF0ZSB0aGlzIGF0dHJpYnV0ZSBzaG91bGQgYmUgZHJhd24gZnJvbSBhIHRlcm1pbm9sb2dpY2FsbHkgcm9idXN0IGNvZGUgc3lzdGVtIHRoYXQgY29uc2lzdHMgb2Ygb3IgY29udGFpbnMgY29uY2VwdHMgdG8gc3VwcG9ydCBkZXNjcmliaW5nIHRoZSBzdGF0dXMgb2YgdGhlIHBhdGllbnQgdG93YXJkcyBwZXJjZWl2ZWQgaW1tdW5pdHkgYWdhaW5zdCBhIHZhY2NpbmUgcHJldmVudGFibGUgZGlzZWFzZS4gVGhpcyB2YWx1ZSBzZXQgaXMgcHJvdmlkZWQgYXMgYSBzdWdnZXN0aXZlIGV4YW1wbGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb25TdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZTogVGhlIHBhdGllbnQgaXMgZnVsbHkgcHJvdGVjdGVkIGFuZCBubyBmdXJ0aGVyIGRvc2VzIGFyZSByZWNvbW1lbmRlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZTogXCJjb21wbGV0ZVwiLFxyXG4gIC8qKlxyXG4gICAqIGNvbnRyYWluZGljYXRlZDogVGhlIHBhdGllbnQgaXMgY29udHJhaW5kaWNhdGVkIGZvciBmdXRoZXIgZG9zZXMuXHJcbiAgICovXHJcbiAgQ29udHJhaW5kaWNhdGVkOiBcImNvbnRyYWluZGljYXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGR1ZTogVGhlIHBhdGllbnQgaXMgZHVlIGZvciB0aGVpciBuZXh0IHZhY2NpbmF0aW9uLlxyXG4gICAqL1xyXG4gIER1ZTogXCJkdWVcIixcclxuICAvKipcclxuICAgKiBpbW11bmU6IFRoZSBwYXRpZW50IGlzIGltbXVuZSB0byB0aGUgdGFyZ2V0IGRpc2Vhc2UgYW5kIGZ1cnRoZXIgaW1tdW5pemF0aW9uIGFnYWluc3QgdGhlIGRpc2Vhc2UgaXMgbm90IGxpa2VseSB0byBwcm92aWRlIGJlbmVmaXQuXHJcbiAgICovXHJcbiAgSW1tdW5lOiBcImltbXVuZVwiLFxyXG4gIC8qKlxyXG4gICAqIG92ZXJkdWU6IFRoZSBwYXRpZW50IGlzIGNvbnNpZGVyZWQgb3ZlcmR1ZSBmb3IgdGhlaXIgbmV4dCB2YWNjaW5hdGlvbi5cclxuICAgKi9cclxuICBPdmVyZHVlOiBcIm92ZXJkdWVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgc2V0IHRvIGluc3RhbnRpYXRlIHRoaXMgYXR0cmlidXRlIHNob3VsZCBiZSBkcmF3biBmcm9tIGEgdGVybWlub2xvZ2ljYWxseSByb2J1c3QgY29kZSBzeXN0ZW0gdGhhdCBjb25zaXN0cyBvZiBvciBjb250YWlucyBjb25jZXB0cyB0byBzdXBwb3J0IGRlc2NyaWJpbmcgdGhlIHN0YXR1cyBvZiB0aGUgcGF0aWVudCB0b3dhcmRzIHBlcmNlaXZlZCBpbW11bml0eSBhZ2FpbnN0IGEgdmFjY2luZSBwcmV2ZW50YWJsZSBkaXNlYXNlLiBUaGlzIHZhbHVlIHNldCBpcyBwcm92aWRlZCBhcyBhIHN1Z2dlc3RpdmUgZXhhbXBsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEltbXVuaXphdGlvblJlY29tbWVuZGF0aW9uU3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb25TdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb25TdGF0dXNDb2Rlc107XHJcbiJdfQ==