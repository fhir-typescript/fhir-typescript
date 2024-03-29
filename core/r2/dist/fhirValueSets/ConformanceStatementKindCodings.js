// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conformance-statement-kind|1.0.2
/**
 * How a conformance statement is intended to be used.
 */
export const ConformanceStatementKindCodings = {
    /**
     * capability: The Conformance instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    Capability: {
        display: "Capability",
        code: "capability",
        system: "http://hl7.org/fhir/conformance-statement-kind",
    },
    /**
     * instance: The Conformance instance represents the present capabilities of a specific system instance.  This is the kind returned by OPTIONS for a FHIR server end-point.
     */
    Instance: {
        display: "Instance",
        code: "instance",
        system: "http://hl7.org/fhir/conformance-statement-kind",
    },
    /**
     * requirements: The Conformance instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    Requirements: {
        display: "Requirements",
        code: "requirements",
        system: "http://hl7.org/fhir/conformance-statement-kind",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZm9ybWFuY2VTdGF0ZW1lbnRLaW5kQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29uZm9ybWFuY2VTdGF0ZW1lbnRLaW5kQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywrRUFBK0U7QUFzQi9FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQXNDO0lBQ2hGOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvY29uZm9ybWFuY2Utc3RhdGVtZW50LWtpbmR8MS4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBIb3cgYSBjb25mb3JtYW5jZSBzdGF0ZW1lbnQgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmZvcm1hbmNlU3RhdGVtZW50S2luZENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2FwYWJpbGl0eTogVGhlIENvbmZvcm1hbmNlIGluc3RhbmNlIHJlcHJlc2VudHMgdGhlIGNhcGFiaWxpdGllcyBvZiBhIHN5c3RlbSBvciBwaWVjZSBvZiBzb2Z0d2FyZSwgaW5kZXBlbmRlbnQgb2YgYSBwYXJ0aWN1bGFyIGluc3RhbGxhdGlvbi5cclxuICAgKi9cclxuICBDYXBhYmlsaXR5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGluc3RhbmNlOiBUaGUgQ29uZm9ybWFuY2UgaW5zdGFuY2UgcmVwcmVzZW50cyB0aGUgcHJlc2VudCBjYXBhYmlsaXRpZXMgb2YgYSBzcGVjaWZpYyBzeXN0ZW0gaW5zdGFuY2UuICBUaGlzIGlzIHRoZSBraW5kIHJldHVybmVkIGJ5IE9QVElPTlMgZm9yIGEgRkhJUiBzZXJ2ZXIgZW5kLXBvaW50LlxyXG4gICAqL1xyXG4gIEluc3RhbmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlcXVpcmVtZW50czogVGhlIENvbmZvcm1hbmNlIGluc3RhbmNlIHJlcHJlc2VudHMgYSBzZXQgb2YgcmVxdWlyZW1lbnRzIGZvciBvdGhlciBzeXN0ZW1zIHRvIG1lZXQ7IGUuZy4gYXMgcGFydCBvZiBhbiBpbXBsZW1lbnRhdGlvbiBndWlkZSBvciAncmVxdWVzdCBmb3IgcHJvcG9zYWwnLlxyXG4gICAqL1xyXG4gIFJlcXVpcmVtZW50czogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEhvdyBhIGNvbmZvcm1hbmNlIHN0YXRlbWVudCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbmZvcm1hbmNlU3RhdGVtZW50S2luZENvZGluZ3M6Q29uZm9ybWFuY2VTdGF0ZW1lbnRLaW5kQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjYXBhYmlsaXR5OiBUaGUgQ29uZm9ybWFuY2UgaW5zdGFuY2UgcmVwcmVzZW50cyB0aGUgY2FwYWJpbGl0aWVzIG9mIGEgc3lzdGVtIG9yIHBpZWNlIG9mIHNvZnR3YXJlLCBpbmRlcGVuZGVudCBvZiBhIHBhcnRpY3VsYXIgaW5zdGFsbGF0aW9uLlxyXG4gICAqL1xyXG4gIENhcGFiaWxpdHk6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2FwYWJpbGl0eVwiLFxyXG4gICAgY29kZTogXCJjYXBhYmlsaXR5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25mb3JtYW5jZS1zdGF0ZW1lbnQta2luZFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW5zdGFuY2U6IFRoZSBDb25mb3JtYW5jZSBpbnN0YW5jZSByZXByZXNlbnRzIHRoZSBwcmVzZW50IGNhcGFiaWxpdGllcyBvZiBhIHNwZWNpZmljIHN5c3RlbSBpbnN0YW5jZS4gIFRoaXMgaXMgdGhlIGtpbmQgcmV0dXJuZWQgYnkgT1BUSU9OUyBmb3IgYSBGSElSIHNlcnZlciBlbmQtcG9pbnQuXHJcbiAgICovXHJcbiAgSW5zdGFuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiSW5zdGFuY2VcIixcclxuICAgIGNvZGU6IFwiaW5zdGFuY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbmZvcm1hbmNlLXN0YXRlbWVudC1raW5kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXF1aXJlbWVudHM6IFRoZSBDb25mb3JtYW5jZSBpbnN0YW5jZSByZXByZXNlbnRzIGEgc2V0IG9mIHJlcXVpcmVtZW50cyBmb3Igb3RoZXIgc3lzdGVtcyB0byBtZWV0OyBlLmcuIGFzIHBhcnQgb2YgYW4gaW1wbGVtZW50YXRpb24gZ3VpZGUgb3IgJ3JlcXVlc3QgZm9yIHByb3Bvc2FsJy5cclxuICAgKi9cclxuICBSZXF1aXJlbWVudHM6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVxdWlyZW1lbnRzXCIsXHJcbiAgICBjb2RlOiBcInJlcXVpcmVtZW50c1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29uZm9ybWFuY2Utc3RhdGVtZW50LWtpbmRcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=