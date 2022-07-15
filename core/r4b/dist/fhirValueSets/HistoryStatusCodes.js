// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/history-status|4.3.0
/**
 * A code that identifies the status of the family history record.
 */
export const HistoryStatusCodes = {
    /**
     * completed: All available related health information is captured as of the date (and possibly time) when the family member history was taken.
     */
    Completed: "completed",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: "entered-in-error",
    /**
     * health-unknown: Health information for this family member is unavailable/unknown.
     */
    HealthUnknown: "health-unknown",
    /**
     * partial: Some health information is known and captured, but not complete - see notes for details.
     */
    Partial: "partial",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yeVN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9IaXN0b3J5U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9oaXN0b3J5LXN0YXR1c3w0LjMuMFxyXG5cclxuLyoqXHJcbiAqIEEgY29kZSB0aGF0IGlkZW50aWZpZXMgdGhlIHN0YXR1cyBvZiB0aGUgZmFtaWx5IGhpc3RvcnkgcmVjb3JkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEhpc3RvcnlTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IEFsbCBhdmFpbGFibGUgcmVsYXRlZCBoZWFsdGggaW5mb3JtYXRpb24gaXMgY2FwdHVyZWQgYXMgb2YgdGhlIGRhdGUgKGFuZCBwb3NzaWJseSB0aW1lKSB3aGVuIHRoZSBmYW1pbHkgbWVtYmVyIGhpc3Rvcnkgd2FzIHRha2VuLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlZDogXCJjb21wbGV0ZWRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGluc3RhbmNlIHNob3VsZCBub3QgaGF2ZSBiZWVuIHBhcnQgb2YgdGhpcyBwYXRpZW50J3MgbWVkaWNhbCByZWNvcmQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGhlYWx0aC11bmtub3duOiBIZWFsdGggaW5mb3JtYXRpb24gZm9yIHRoaXMgZmFtaWx5IG1lbWJlciBpcyB1bmF2YWlsYWJsZS91bmtub3duLlxyXG4gICAqL1xyXG4gIEhlYWx0aFVua25vd246IFwiaGVhbHRoLXVua25vd25cIixcclxuICAvKipcclxuICAgKiBwYXJ0aWFsOiBTb21lIGhlYWx0aCBpbmZvcm1hdGlvbiBpcyBrbm93biBhbmQgY2FwdHVyZWQsIGJ1dCBub3QgY29tcGxldGUgLSBzZWUgbm90ZXMgZm9yIGRldGFpbHMuXHJcbiAgICovXHJcbiAgUGFydGlhbDogXCJwYXJ0aWFsXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgaWRlbnRpZmllcyB0aGUgc3RhdHVzIG9mIHRoZSBmYW1pbHkgaGlzdG9yeSByZWNvcmQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBIaXN0b3J5U3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgSGlzdG9yeVN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBIaXN0b3J5U3RhdHVzQ29kZXNdO1xyXG4iXX0=