// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ingredient-manufacturer-role|4.3.0
/**
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 */
export const IngredientManufacturerRoleCodes = {
    /**
     * Code: actual
     */
    ManufacturerActuallyMakesThisParticularIngredient: "actual",
    /**
     * Code: allowed
     */
    ManufacturerIsSpecificallyAllowedForThisIngredient: "allowed",
    /**
     * Code: possible
     */
    ManufacturerIsKnownToMakeThisIngredientInGeneral: "possible",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5ncmVkaWVudE1hbnVmYWN0dXJlclJvbGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvSW5ncmVkaWVudE1hbnVmYWN0dXJlclJvbGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxpRkFBaUY7QUFFakY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRztJQUM3Qzs7T0FFRztJQUNILGlEQUFpRCxFQUFFLFFBQVE7SUFDM0Q7O09BRUc7SUFDSCxrREFBa0QsRUFBRSxTQUFTO0lBQzdEOztPQUVHO0lBQ0gsZ0RBQWdELEVBQUUsVUFBVTtDQUNwRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pbmdyZWRpZW50LW1hbnVmYWN0dXJlci1yb2xlfDQuMy4wXHJcblxyXG4vKipcclxuICogVGhlIHdheSBpbiB3aGljaCB0aGlzIG1hbnVmYWN0dXJlciBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGluZ3JlZGllbnQuIEZvciBleGFtcGxlIHdoZXRoZXIgaXQgaXMgYSBwb3NzaWJsZSBvbmUgKG90aGVycyBhbGxvd2VkKSwgb3IgYW4gZXhjbHVzaXZlIGF1dGhvcml6ZWQgb25lIGZvciB0aGlzIGluZ3JlZGllbnQuIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCB0aGUgbWFudWZhY3R1cmluZyBwcm9jZXNzIHJvbGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSW5ncmVkaWVudE1hbnVmYWN0dXJlclJvbGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBDb2RlOiBhY3R1YWxcclxuICAgKi9cclxuICBNYW51ZmFjdHVyZXJBY3R1YWxseU1ha2VzVGhpc1BhcnRpY3VsYXJJbmdyZWRpZW50OiBcImFjdHVhbFwiLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IGFsbG93ZWRcclxuICAgKi9cclxuICBNYW51ZmFjdHVyZXJJc1NwZWNpZmljYWxseUFsbG93ZWRGb3JUaGlzSW5ncmVkaWVudDogXCJhbGxvd2VkXCIsXHJcbiAgLyoqXHJcbiAgICogQ29kZTogcG9zc2libGVcclxuICAgKi9cclxuICBNYW51ZmFjdHVyZXJJc0tub3duVG9NYWtlVGhpc0luZ3JlZGllbnRJbkdlbmVyYWw6IFwicG9zc2libGVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgd2F5IGluIHdoaWNoIHRoaXMgbWFudWZhY3R1cmVyIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5ncmVkaWVudC4gRm9yIGV4YW1wbGUgd2hldGhlciBpdCBpcyBhIHBvc3NpYmxlIG9uZSAob3RoZXJzIGFsbG93ZWQpLCBvciBhbiBleGNsdXNpdmUgYXV0aG9yaXplZCBvbmUgZm9yIHRoaXMgaW5ncmVkaWVudC4gTm90ZSB0aGF0IHRoaXMgaXMgbm90IHRoZSBtYW51ZmFjdHVyaW5nIHByb2Nlc3Mgcm9sZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEluZ3JlZGllbnRNYW51ZmFjdHVyZXJSb2xlQ29kZVR5cGUgPSB0eXBlb2YgSW5ncmVkaWVudE1hbnVmYWN0dXJlclJvbGVDb2Rlc1trZXlvZiB0eXBlb2YgSW5ncmVkaWVudE1hbnVmYWN0dXJlclJvbGVDb2Rlc107XHJcbiJdfQ==