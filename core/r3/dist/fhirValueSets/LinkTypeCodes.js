// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/link-type|3.0.2
/**
 * The type of link between this patient resource and another patient resource.
 */
export const LinkTypeCodes = {
    /**
     * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
     */
    Refer: "refer",
    /**
     * replaced-by: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
     */
    ReplacedBy: "replaced-by",
    /**
     * replaces: The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
     */
    Replaces: "replaces",
    /**
     * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
     */
    SeeAlso: "seealso",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua1R5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTGlua1R5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw4REFBOEQ7QUFFOUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUc7SUFDM0I7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsVUFBVSxFQUFFLGFBQWE7SUFDekI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saW5rLXR5cGV8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBsaW5rIGJldHdlZW4gdGhpcyBwYXRpZW50IHJlc291cmNlIGFuZCBhbm90aGVyIHBhdGllbnQgcmVzb3VyY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTGlua1R5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiByZWZlcjogVGhlIHBhdGllbnQgcmVzb3VyY2UgY29udGFpbmluZyB0aGlzIGxpbmsgaXMgaW4gdXNlIGFuZCB2YWxpZCBidXQgbm90IGNvbnNpZGVyZWQgdGhlIG1haW4gc291cmNlIG9mIGluZm9ybWF0aW9uIGFib3V0IGEgcGF0aWVudC4gVGhlIGxpbmsgcG9pbnRzIGZvcndhcmQgdG8gYW5vdGhlciBwYXRpZW50IHJlc291cmNlIHRoYXQgc2hvdWxkIGJlIGNvbnN1bHRlZCB0byByZXRyaWV2ZSBhZGRpdGlvbmFsIHBhdGllbnQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgUmVmZXI6IFwicmVmZXJcIixcclxuICAvKipcclxuICAgKiByZXBsYWNlZC1ieTogVGhlIHBhdGllbnQgcmVzb3VyY2UgY29udGFpbmluZyB0aGlzIGxpbmsgbXVzdCBubyBsb25nZXIgYmUgdXNlZC4gVGhlIGxpbmsgcG9pbnRzIGZvcndhcmQgdG8gYW5vdGhlciBwYXRpZW50IHJlc291cmNlIHRoYXQgbXVzdCBiZSB1c2VkIGluIGxpZXUgb2YgdGhlIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBjb250YWlucyB0aGlzIGxpbmsuXHJcbiAgICovXHJcbiAgUmVwbGFjZWRCeTogXCJyZXBsYWNlZC1ieVwiLFxyXG4gIC8qKlxyXG4gICAqIHJlcGxhY2VzOiBUaGUgcGF0aWVudCByZXNvdXJjZSBjb250YWluaW5nIHRoaXMgbGluayBpcyB0aGUgY3VycmVudCBhY3RpdmUgcGF0aWVudCByZWNvcmQuIFRoZSBsaW5rIHBvaW50cyBiYWNrIHRvIGFuIGluYWN0aXZlIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBoYXMgYmVlbiBtZXJnZWQgaW50byB0aGlzIHJlc291cmNlLCBhbmQgc2hvdWxkIGJlIGNvbnN1bHRlZCB0byByZXRyaWV2ZSBhZGRpdGlvbmFsIHJlZmVyZW5jZWQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgUmVwbGFjZXM6IFwicmVwbGFjZXNcIixcclxuICAvKipcclxuICAgKiBzZWVhbHNvOiBUaGUgcGF0aWVudCByZXNvdXJjZSBjb250YWluaW5nIHRoaXMgbGluayBpcyBpbiB1c2UgYW5kIHZhbGlkLCBidXQgcG9pbnRzIHRvIGFub3RoZXIgcGF0aWVudCByZXNvdXJjZSB0aGF0IGlzIGtub3duIHRvIGNvbnRhaW4gZGF0YSBhYm91dCB0aGUgc2FtZSBwZXJzb24uIERhdGEgaW4gdGhpcyByZXNvdXJjZSBtaWdodCBvdmVybGFwIG9yIGNvbnRyYWRpY3QgaW5mb3JtYXRpb24gZm91bmQgaW4gdGhlIG90aGVyIHBhdGllbnQgcmVzb3VyY2UuIFRoaXMgbGluayBkb2VzIG5vdCBpbmRpY2F0ZSBhbnkgcmVsYXRpdmUgaW1wb3J0YW5jZSBvZiB0aGUgcmVzb3VyY2VzIGNvbmNlcm5lZCwgYW5kIGJvdGggc2hvdWxkIGJlIHJlZ2FyZGVkIGFzIGVxdWFsbHkgdmFsaWQuXHJcbiAgICovXHJcbiAgU2VlQWxzbzogXCJzZWVhbHNvXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbGluayBiZXR3ZWVuIHRoaXMgcGF0aWVudCByZXNvdXJjZSBhbmQgYW5vdGhlciBwYXRpZW50IHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGlua1R5cGVDb2RlVHlwZSA9IHR5cGVvZiBMaW5rVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBMaW5rVHlwZUNvZGVzXTtcclxuIl19