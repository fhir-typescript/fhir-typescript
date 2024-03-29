// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-statement-status|4.3.0
/**
 * MedicationStatement Status Codes
 */
export const MedicationStatementStatusCodes = {
    /**
     * active: The medication is still being taken.
     */
    Active: "active",
    /**
     * completed: The medication is no longer being taken.
     */
    Completed: "completed",
    /**
     * entered-in-error: Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    EnteredInError: "entered-in-error",
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended: "intended",
    /**
     * not-taken: The medication was not consumed by the patient
     */
    NotTaken: "not-taken",
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold: "on-hold",
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    Stopped: "stopped",
    /**
     * unknown: The state of the medication use is not currently known.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvblN0YXRlbWVudFN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NZWRpY2F0aW9uU3RhdGVtZW50U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsZ0ZBQWdGO0FBRWhGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQUc7SUFDNUM7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxNQUFNLEVBQUUsU0FBUztJQUNqQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWRpY2F0aW9uLXN0YXRlbWVudC1zdGF0dXN8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBNZWRpY2F0aW9uU3RhdGVtZW50IFN0YXR1cyBDb2Rlc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhY3RpdmU6IFRoZSBtZWRpY2F0aW9uIGlzIHN0aWxsIGJlaW5nIHRha2VuLlxyXG4gICAqL1xyXG4gIEFjdGl2ZTogXCJhY3RpdmVcIixcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSBtZWRpY2F0aW9uIGlzIG5vIGxvbmdlciBiZWluZyB0YWtlbi5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IFwiY29tcGxldGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogU29tZSBvZiB0aGUgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBtZWRpY2F0aW9uIHN0YXRlbWVudCBtYXkgaGF2ZSBvY2N1cnJlZC4gIEZvciBleGFtcGxlLCB0aGUgcGF0aWVudCBtYXkgaGF2ZSB0YWtlbiBzb21lIG9mIHRoZSBtZWRpY2F0aW9uLiAgQ2xpbmljYWwgZGVjaXNpb24gc3VwcG9ydCBzeXN0ZW1zIHNob3VsZCB0YWtlIHRoaXMgc3RhdHVzIGludG8gYWNjb3VudC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogaW50ZW5kZWQ6IFRoZSBtZWRpY2F0aW9uIG1heSBiZSB0YWtlbiBhdCBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cclxuICAgKi9cclxuICBJbnRlbmRlZDogXCJpbnRlbmRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC10YWtlbjogVGhlIG1lZGljYXRpb24gd2FzIG5vdCBjb25zdW1lZCBieSB0aGUgcGF0aWVudFxyXG4gICAqL1xyXG4gIE5vdFRha2VuOiBcIm5vdC10YWtlblwiLFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgc3RhdGVtZW50IGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCAnc3VzcGVuZGVkJy5cclxuICAgKi9cclxuICBPbkhvbGQ6IFwib24taG9sZFwiLFxyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgc3RhdGVtZW50IGhhdmUgYmVlbiBwZXJtYW5lbnRseSBoYWx0ZWQsIGJlZm9yZSBhbGwgb2YgdGhlbSBvY2N1cnJlZC4gVGhpcyBzaG91bGQgbm90IGJlIHVzZWQgaWYgdGhlIHN0YXRlbWVudCB3YXMgZW50ZXJlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBTdG9wcGVkOiBcInN0b3BwZWRcIixcclxuICAvKipcclxuICAgKiB1bmtub3duOiBUaGUgc3RhdGUgb2YgdGhlIG1lZGljYXRpb24gdXNlIGlzIG5vdCBjdXJyZW50bHkga25vd24uXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogTWVkaWNhdGlvblN0YXRlbWVudCBTdGF0dXMgQ29kZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBNZWRpY2F0aW9uU3RhdGVtZW50U3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIE1lZGljYXRpb25TdGF0ZW1lbnRTdGF0dXNDb2Rlc107XHJcbiJdfQ==