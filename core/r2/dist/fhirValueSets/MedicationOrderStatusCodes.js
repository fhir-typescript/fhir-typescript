// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medication-order-status|1.0.2
/**
 * A code specifying the state of the prescribing event. Describes the lifecycle of the prescription.
 */
export const MedicationOrderStatusCodes = {
    /**
     * active: The prescription is 'actionable', but not all actions that are implied by it have occurred yet.
     */
    Active: "active",
    /**
     * completed: All actions that are implied by the prescription have occurred.
     */
    Completed: "completed",
    /**
     * draft: The prescription is not yet 'actionable', i.e. it is a work in progress, requires sign-off or verification, and needs to be run through decision support process.
     */
    Draft: "draft",
    /**
     * entered-in-error: The prescription was entered in error.
     */
    EnteredInError: "entered-in-error",
    /**
     * on-hold: Actions implied by the prescription are to be temporarily halted, but are expected to continue later.  May also be called "suspended".
     */
    OnHold: "on-hold",
    /**
     * stopped: Actions implied by the prescription are to be permanently halted, before all of them occurred.
     */
    Stopped: "stopped",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbk9yZGVyU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lZGljYXRpb25PcmRlclN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFNBQVM7SUFDakI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVkaWNhdGlvbi1vcmRlci1zdGF0dXN8MS4wLjJcclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgc3BlY2lmeWluZyB0aGUgc3RhdGUgb2YgdGhlIHByZXNjcmliaW5nIGV2ZW50LiBEZXNjcmliZXMgdGhlIGxpZmVjeWNsZSBvZiB0aGUgcHJlc2NyaXB0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lZGljYXRpb25PcmRlclN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIHByZXNjcmlwdGlvbiBpcyAnYWN0aW9uYWJsZScsIGJ1dCBub3QgYWxsIGFjdGlvbnMgdGhhdCBhcmUgaW1wbGllZCBieSBpdCBoYXZlIG9jY3VycmVkIHlldC5cclxuICAgKi9cclxuICBBY3RpdmU6IFwiYWN0aXZlXCIsXHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBBbGwgYWN0aW9ucyB0aGF0IGFyZSBpbXBsaWVkIGJ5IHRoZSBwcmVzY3JpcHRpb24gaGF2ZSBvY2N1cnJlZC5cclxuICAgKi9cclxuICBDb21wbGV0ZWQ6IFwiY29tcGxldGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZHJhZnQ6IFRoZSBwcmVzY3JpcHRpb24gaXMgbm90IHlldCAnYWN0aW9uYWJsZScsIGkuZS4gaXQgaXMgYSB3b3JrIGluIHByb2dyZXNzLCByZXF1aXJlcyBzaWduLW9mZiBvciB2ZXJpZmljYXRpb24sIGFuZCBuZWVkcyB0byBiZSBydW4gdGhyb3VnaCBkZWNpc2lvbiBzdXBwb3J0IHByb2Nlc3MuXHJcbiAgICovXHJcbiAgRHJhZnQ6IFwiZHJhZnRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgcHJlc2NyaXB0aW9uIHdhcyBlbnRlcmVkIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIHByZXNjcmlwdGlvbiBhcmUgdG8gYmUgdGVtcG9yYXJpbHkgaGFsdGVkLCBidXQgYXJlIGV4cGVjdGVkIHRvIGNvbnRpbnVlIGxhdGVyLiAgTWF5IGFsc28gYmUgY2FsbGVkIFwic3VzcGVuZGVkXCIuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBcIm9uLWhvbGRcIixcclxuICAvKipcclxuICAgKiBzdG9wcGVkOiBBY3Rpb25zIGltcGxpZWQgYnkgdGhlIHByZXNjcmlwdGlvbiBhcmUgdG8gYmUgcGVybWFuZW50bHkgaGFsdGVkLCBiZWZvcmUgYWxsIG9mIHRoZW0gb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgU3RvcHBlZDogXCJzdG9wcGVkXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHN0YXRlIG9mIHRoZSBwcmVzY3JpYmluZyBldmVudC4gRGVzY3JpYmVzIHRoZSBsaWZlY3ljbGUgb2YgdGhlIHByZXNjcmlwdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lZGljYXRpb25PcmRlclN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIE1lZGljYXRpb25PcmRlclN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBNZWRpY2F0aW9uT3JkZXJTdGF0dXNDb2Rlc107XHJcbiJdfQ==