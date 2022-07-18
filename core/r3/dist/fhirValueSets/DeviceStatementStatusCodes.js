// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/device-statement-status|3.0.2
/**
 * A coded concept indicating the current status of a the Device Usage
 */
export const DeviceStatementStatusCodes = {
    /**
     * active: The device is still being used.
     */
    Active: "active",
    /**
     * completed: The device is no longer being used.
     */
    Completed: "completed",
    /**
     * entered-in-error: The statement was recorded incorrectly.
     */
    EnteredInError: "entered-in-error",
    /**
     * intended: The device may be used at some time in the future.
     */
    Intended: "intended",
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: "on-hold",
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    Stopped: "stopped",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlU3RhdGVtZW50U3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0RldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDRFQUE0RTtBQUU1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFHO0lBQ3hDOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILE1BQU0sRUFBRSxTQUFTO0lBQ2pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RldmljZS1zdGF0ZW1lbnQtc3RhdHVzfDMuMC4yXHJcblxyXG4vKipcclxuICogQSBjb2RlZCBjb25jZXB0IGluZGljYXRpbmcgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIGEgdGhlIERldmljZSBVc2FnZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhlIGRldmljZSBpcyBzdGlsbCBiZWluZyB1c2VkLlxyXG4gICAqL1xyXG4gIEFjdGl2ZTogXCJhY3RpdmVcIixcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IFRoZSBkZXZpY2UgaXMgbm8gbG9uZ2VyIGJlaW5nIHVzZWQuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBcImNvbXBsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBzdGF0ZW1lbnQgd2FzIHJlY29yZGVkIGluY29ycmVjdGx5LlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAvKipcclxuICAgKiBpbnRlbmRlZDogVGhlIGRldmljZSBtYXkgYmUgdXNlZCBhdCBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cclxuICAgKi9cclxuICBJbnRlbmRlZDogXCJpbnRlbmRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IEFjdGlvbnMgaW1wbGllZCBieSB0aGUgc3RhdGVtZW50IGhhdmUgYmVlbiB0ZW1wb3JhcmlseSBoYWx0ZWQsIGJ1dCBhcmUgZXhwZWN0ZWQgdG8gY29udGludWUgbGF0ZXIuIE1heSBhbHNvIGJlIGNhbGxlZCBcInN1c3BlbmRlZFwiLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogXCJvbi1ob2xkXCIsXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogQWN0aW9ucyBpbXBsaWVkIGJ5IHRoZSBzdGF0ZW1lbnQgaGF2ZSBiZWVuIHBlcm1hbmVudGx5IGhhbHRlZCwgYmVmb3JlIGFsbCBvZiB0aGVtIG9jY3VycmVkLlxyXG4gICAqL1xyXG4gIFN0b3BwZWQ6IFwic3RvcHBlZFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEEgY29kZWQgY29uY2VwdCBpbmRpY2F0aW5nIHRoZSBjdXJyZW50IHN0YXR1cyBvZiBhIHRoZSBEZXZpY2UgVXNhZ2VcclxuICovXHJcbmV4cG9ydCB0eXBlIERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIERldmljZVN0YXRlbWVudFN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBEZXZpY2VTdGF0ZW1lbnRTdGF0dXNDb2Rlc107XHJcbiJdfQ==