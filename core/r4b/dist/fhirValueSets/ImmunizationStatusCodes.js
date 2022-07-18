// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-status|4.3.0
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.
 */
export const ImmunizationStatusCodes = {
    /**
     * completed: The event has now concluded.
     */
    Completed: "completed",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    EnteredInError: "entered-in-error",
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    NotDone: "not-done",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0ltbXVuaXphdGlvblN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHdFQUF3RTtBQUV4RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFVBQVU7Q0FDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pbW11bml6YXRpb24tc3RhdHVzfDQuMy4wXHJcblxyXG4vKipcclxuICogVGhlIHZhbHVlIHNldCB0byBpbnN0YW50aWF0ZSB0aGlzIGF0dHJpYnV0ZSBzaG91bGQgYmUgZHJhd24gZnJvbSBhIHRlcm1pbm9sb2dpY2FsbHkgcm9idXN0IGNvZGUgc3lzdGVtIHRoYXQgY29uc2lzdHMgb2Ygb3IgY29udGFpbnMgY29uY2VwdHMgdG8gc3VwcG9ydCBkZXNjcmliaW5nIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgYWRtaW5pc3RlcmVkIGRvc2Ugb2YgdmFjY2luZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbW11bml6YXRpb25TdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSBldmVudCBoYXMgbm93IGNvbmNsdWRlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IFwiY29tcGxldGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhpcyBlbGVjdHJvbmljIHJlY29yZCBzaG91bGQgbmV2ZXIgaGF2ZSBleGlzdGVkLCB0aG91Z2ggaXQgaXMgcG9zc2libGUgdGhhdCByZWFsLXdvcmxkIGRlY2lzaW9ucyB3ZXJlIGJhc2VkIG9uIGl0LiAgKElmIHJlYWwtd29ybGQgYWN0aXZpdHkgaGFzIG9jY3VycmVkLCB0aGUgc3RhdHVzIHNob3VsZCBiZSBcInN0b3BwZWRcIiByYXRoZXIgdGhhbiBcImVudGVyZWQtaW4tZXJyb3JcIi4pLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAvKipcclxuICAgKiBub3QtZG9uZTogVGhlIGV2ZW50IHdhcyB0ZXJtaW5hdGVkIHByaW9yIHRvIGFueSBhY3Rpdml0eSBiZXlvbmQgcHJlcGFyYXRpb24uICBJLmUuIFRoZSAnbWFpbicgYWN0aXZpdHkgaGFzIG5vdCB5ZXQgYmVndW4uICBUaGUgYm91bmRhcnkgYmV0d2VlbiBwcmVwYXJhdG9yeSBhbmQgdGhlICdtYWluJyBhY3Rpdml0eSBpcyBjb250ZXh0LXNwZWNpZmljLlxyXG4gICAqL1xyXG4gIE5vdERvbmU6IFwibm90LWRvbmVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdmFsdWUgc2V0IHRvIGluc3RhbnRpYXRlIHRoaXMgYXR0cmlidXRlIHNob3VsZCBiZSBkcmF3biBmcm9tIGEgdGVybWlub2xvZ2ljYWxseSByb2J1c3QgY29kZSBzeXN0ZW0gdGhhdCBjb25zaXN0cyBvZiBvciBjb250YWlucyBjb25jZXB0cyB0byBzdXBwb3J0IGRlc2NyaWJpbmcgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBhZG1pbmlzdGVyZWQgZG9zZSBvZiB2YWNjaW5lLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSW1tdW5pemF0aW9uU3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgSW1tdW5pemF0aW9uU3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIEltbXVuaXphdGlvblN0YXR1c0NvZGVzXTtcclxuIl19