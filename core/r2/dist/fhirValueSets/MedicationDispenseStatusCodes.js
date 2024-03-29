// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-dispense-status|1.0.2
/**
 * A code specifying the state of the dispense event.
 *
 * Describes the lifecycle of the dispense.
 */
export const MedicationDispenseStatusCodes = {
    /**
     * completed: All actions that are implied by the dispense have occurred.
     */
    Completed: "completed",
    /**
     * entered-in-error: The dispense was entered in error and therefore nullified.
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: The dispense has started but has not yet completed.
     */
    InProgress: "in-progress",
    /**
     * on-hold: Actions implied by the administration have been temporarily halted, but are expected to continue later. May also be called "suspended"
     */
    OnHold: "on-hold",
    /**
     * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
     */
    Stopped: "stopped",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbkRpc3BlbnNlU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lZGljYXRpb25EaXNwZW5zZVN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtFQUErRTtBQUUvRTs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUc7SUFDM0M7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxVQUFVLEVBQUUsYUFBYTtJQUN6Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxTQUFTO0lBQ2pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L21lZGljYXRpb24tZGlzcGVuc2Utc3RhdHVzfDEuMC4yXHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHN0YXRlIG9mIHRoZSBkaXNwZW5zZSBldmVudC5cclxuICogXHJcbiAqIERlc2NyaWJlcyB0aGUgbGlmZWN5Y2xlIG9mIHRoZSBkaXNwZW5zZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNZWRpY2F0aW9uRGlzcGVuc2VTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IEFsbCBhY3Rpb25zIHRoYXQgYXJlIGltcGxpZWQgYnkgdGhlIGRpc3BlbnNlIGhhdmUgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBcImNvbXBsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBkaXNwZW5zZSB3YXMgZW50ZXJlZCBpbiBlcnJvciBhbmQgdGhlcmVmb3JlIG51bGxpZmllZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBkaXNwZW5zZSBoYXMgc3RhcnRlZCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGFkbWluaXN0cmF0aW9uIGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCBcInN1c3BlbmRlZFwiXHJcbiAgICovXHJcbiAgT25Ib2xkOiBcIm9uLWhvbGRcIixcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIGRpc3BlbnNlIGhhdmUgYmVlbiBwZXJtYW5lbnRseSBoYWx0ZWQsIGJlZm9yZSBhbGwgb2YgdGhlbSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBTdG9wcGVkOiBcInN0b3BwZWRcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgc3BlY2lmeWluZyB0aGUgc3RhdGUgb2YgdGhlIGRpc3BlbnNlIGV2ZW50LlxyXG4gKiBcclxuICogRGVzY3JpYmVzIHRoZSBsaWZlY3ljbGUgb2YgdGhlIGRpc3BlbnNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVkaWNhdGlvbkRpc3BlbnNlU3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgTWVkaWNhdGlvbkRpc3BlbnNlU3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIE1lZGljYXRpb25EaXNwZW5zZVN0YXR1c0NvZGVzXTtcclxuIl19