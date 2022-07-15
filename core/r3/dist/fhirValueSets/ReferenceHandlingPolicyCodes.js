// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-handling-policy|3.0.2
/**
 * A set of flags that defines how references are supported.
 */
export const ReferenceHandlingPolicyCodes = {
    /**
     * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems
     */
    ReferenceIntegrityEnforced: "enforced",
    /**
     * literal: The server supports and populates Literal references where they are known (this code does not guarantee that all references are literal; see 'enforced')
     */
    LiteralReferences: "literal",
    /**
     * local: The server does not support references that point to other servers
     */
    LocalReferencesOnly: "local",
    /**
     * logical: The server allows logical references
     */
    LogicalReferences: "logical",
    /**
     * resolves: The server will attempt to resolve logical references to literal references (if resolution fails, the server may still accept resources; see logical)
     */
    ResolvesReferences: "resolves",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmZXJlbmNlSGFuZGxpbmdQb2xpY3lDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUmVmZXJlbmNlSGFuZGxpbmdQb2xpY3lDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw4RUFBOEU7QUFFOUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQzs7T0FFRztJQUNILDBCQUEwQixFQUFFLFVBQVU7SUFDdEM7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxTQUFTO0lBQzVCOztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsT0FBTztJQUM1Qjs7T0FFRztJQUNILGlCQUFpQixFQUFFLFNBQVM7SUFDNUI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxVQUFVO0NBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVmZXJlbmNlLWhhbmRsaW5nLXBvbGljeXwzLjAuMlxyXG5cclxuLyoqXHJcbiAqIEEgc2V0IG9mIGZsYWdzIHRoYXQgZGVmaW5lcyBob3cgcmVmZXJlbmNlcyBhcmUgc3VwcG9ydGVkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlZmVyZW5jZUhhbmRsaW5nUG9saWN5Q29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogZW5mb3JjZWQ6IFRoZSBzZXJ2ZXIgZW5mb3JjZXMgdGhhdCByZWZlcmVuY2VzIGhhdmUgaW50ZWdyaXR5IC0gZS5nLiBpdCBlbnN1cmVzIHRoYXQgcmVmZXJlbmNlcyBjYW4gYWx3YXlzIGJlIHJlc29sdmVkLiBUaGlzIGlzIHR5cGljYWxseSB0aGUgY2FzZSBmb3IgY2xpbmljYWwgcmVjb3JkIHN5c3RlbXMsIGJ1dCBvZnRlbiBub3QgdGhlIGNhc2UgZm9yIG1pZGRsZXdhcmUvcHJveHkgc3lzdGVtc1xyXG4gICAqL1xyXG4gIFJlZmVyZW5jZUludGVncml0eUVuZm9yY2VkOiBcImVuZm9yY2VkXCIsXHJcbiAgLyoqXHJcbiAgICogbGl0ZXJhbDogVGhlIHNlcnZlciBzdXBwb3J0cyBhbmQgcG9wdWxhdGVzIExpdGVyYWwgcmVmZXJlbmNlcyB3aGVyZSB0aGV5IGFyZSBrbm93biAodGhpcyBjb2RlIGRvZXMgbm90IGd1YXJhbnRlZSB0aGF0IGFsbCByZWZlcmVuY2VzIGFyZSBsaXRlcmFsOyBzZWUgJ2VuZm9yY2VkJylcclxuICAgKi9cclxuICBMaXRlcmFsUmVmZXJlbmNlczogXCJsaXRlcmFsXCIsXHJcbiAgLyoqXHJcbiAgICogbG9jYWw6IFRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCByZWZlcmVuY2VzIHRoYXQgcG9pbnQgdG8gb3RoZXIgc2VydmVyc1xyXG4gICAqL1xyXG4gIExvY2FsUmVmZXJlbmNlc09ubHk6IFwibG9jYWxcIixcclxuICAvKipcclxuICAgKiBsb2dpY2FsOiBUaGUgc2VydmVyIGFsbG93cyBsb2dpY2FsIHJlZmVyZW5jZXNcclxuICAgKi9cclxuICBMb2dpY2FsUmVmZXJlbmNlczogXCJsb2dpY2FsXCIsXHJcbiAgLyoqXHJcbiAgICogcmVzb2x2ZXM6IFRoZSBzZXJ2ZXIgd2lsbCBhdHRlbXB0IHRvIHJlc29sdmUgbG9naWNhbCByZWZlcmVuY2VzIHRvIGxpdGVyYWwgcmVmZXJlbmNlcyAoaWYgcmVzb2x1dGlvbiBmYWlscywgdGhlIHNlcnZlciBtYXkgc3RpbGwgYWNjZXB0IHJlc291cmNlczsgc2VlIGxvZ2ljYWwpXHJcbiAgICovXHJcbiAgUmVzb2x2ZXNSZWZlcmVuY2VzOiBcInJlc29sdmVzXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgZmxhZ3MgdGhhdCBkZWZpbmVzIGhvdyByZWZlcmVuY2VzIGFyZSBzdXBwb3J0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZlcmVuY2VIYW5kbGluZ1BvbGljeUNvZGVUeXBlID0gdHlwZW9mIFJlZmVyZW5jZUhhbmRsaW5nUG9saWN5Q29kZXNba2V5b2YgdHlwZW9mIFJlZmVyZW5jZUhhbmRsaW5nUG9saWN5Q29kZXNdO1xyXG4iXX0=