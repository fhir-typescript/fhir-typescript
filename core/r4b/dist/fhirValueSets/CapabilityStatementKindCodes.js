// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/capability-statement-kind|4.3.0
/**
 * How a capability statement is intended to be used.
 */
export const CapabilityStatementKindCodes = {
    /**
     * capability: The CapabilityStatement instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    Capability: "capability",
    /**
     * instance: The CapabilityStatement instance represents the present capabilities of a specific system instance.  This is the kind returned by /metadata for a FHIR server end-point.
     */
    Instance: "instance",
    /**
     * requirements: The CapabilityStatement instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    Requirements: "requirements",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwYWJpbGl0eVN0YXRlbWVudEtpbmRDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ2FwYWJpbGl0eVN0YXRlbWVudEtpbmRDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw4RUFBOEU7QUFFOUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQzs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsY0FBYztDQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jYXBhYmlsaXR5LXN0YXRlbWVudC1raW5kfDQuMy4wXHJcblxyXG4vKipcclxuICogSG93IGEgY2FwYWJpbGl0eSBzdGF0ZW1lbnQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDYXBhYmlsaXR5U3RhdGVtZW50S2luZENvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNhcGFiaWxpdHk6IFRoZSBDYXBhYmlsaXR5U3RhdGVtZW50IGluc3RhbmNlIHJlcHJlc2VudHMgdGhlIGNhcGFiaWxpdGllcyBvZiBhIHN5c3RlbSBvciBwaWVjZSBvZiBzb2Z0d2FyZSwgaW5kZXBlbmRlbnQgb2YgYSBwYXJ0aWN1bGFyIGluc3RhbGxhdGlvbi5cclxuICAgKi9cclxuICBDYXBhYmlsaXR5OiBcImNhcGFiaWxpdHlcIixcclxuICAvKipcclxuICAgKiBpbnN0YW5jZTogVGhlIENhcGFiaWxpdHlTdGF0ZW1lbnQgaW5zdGFuY2UgcmVwcmVzZW50cyB0aGUgcHJlc2VudCBjYXBhYmlsaXRpZXMgb2YgYSBzcGVjaWZpYyBzeXN0ZW0gaW5zdGFuY2UuICBUaGlzIGlzIHRoZSBraW5kIHJldHVybmVkIGJ5IC9tZXRhZGF0YSBmb3IgYSBGSElSIHNlcnZlciBlbmQtcG9pbnQuXHJcbiAgICovXHJcbiAgSW5zdGFuY2U6IFwiaW5zdGFuY2VcIixcclxuICAvKipcclxuICAgKiByZXF1aXJlbWVudHM6IFRoZSBDYXBhYmlsaXR5U3RhdGVtZW50IGluc3RhbmNlIHJlcHJlc2VudHMgYSBzZXQgb2YgcmVxdWlyZW1lbnRzIGZvciBvdGhlciBzeXN0ZW1zIHRvIG1lZXQ7IGUuZy4gYXMgcGFydCBvZiBhbiBpbXBsZW1lbnRhdGlvbiBndWlkZSBvciAncmVxdWVzdCBmb3IgcHJvcG9zYWwnLlxyXG4gICAqL1xyXG4gIFJlcXVpcmVtZW50czogXCJyZXF1aXJlbWVudHNcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBIb3cgYSBjYXBhYmlsaXR5IHN0YXRlbWVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FwYWJpbGl0eVN0YXRlbWVudEtpbmRDb2RlVHlwZSA9IHR5cGVvZiBDYXBhYmlsaXR5U3RhdGVtZW50S2luZENvZGVzW2tleW9mIHR5cGVvZiBDYXBhYmlsaXR5U3RhdGVtZW50S2luZENvZGVzXTtcclxuIl19