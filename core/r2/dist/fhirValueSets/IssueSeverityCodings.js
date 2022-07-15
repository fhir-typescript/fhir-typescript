// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-severity|1.0.2
/**
 * How the issue affects the success of the action.
 */
export const IssueSeverityCodings = {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    Error: {
        display: "Error",
        code: "error",
        system: "http://hl7.org/fhir/issue-severity",
    },
    /**
     * fatal: The issue caused the action to fail, and no further checking could be performed.
     */
    Fatal: {
        display: "Fatal",
        code: "fatal",
        system: "http://hl7.org/fhir/issue-severity",
    },
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    Information: {
        display: "Information",
        code: "information",
        system: "http://hl7.org/fhir/issue-severity",
    },
    /**
     * warning: The issue is not important enough to cause the action to fail, but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    Warning: {
        display: "Warning",
        code: "warning",
        system: "http://hl7.org/fhir/issue-severity",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWVTZXZlcml0eUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0lzc3VlU2V2ZXJpdHlDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQTBCbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9pc3N1ZS1zZXZlcml0eXwxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEhvdyB0aGUgaXNzdWUgYWZmZWN0cyB0aGUgc3VjY2VzcyBvZiB0aGUgYWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSXNzdWVTZXZlcml0eUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IFRoZSBpc3N1ZSBpcyBzdWZmaWNpZW50bHkgaW1wb3J0YW50IHRvIGNhdXNlIHRoZSBhY3Rpb24gdG8gZmFpbC5cclxuICAgKi9cclxuICBFcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBmYXRhbDogVGhlIGlzc3VlIGNhdXNlZCB0aGUgYWN0aW9uIHRvIGZhaWwsIGFuZCBubyBmdXJ0aGVyIGNoZWNraW5nIGNvdWxkIGJlIHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBGYXRhbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpbmZvcm1hdGlvbjogVGhlIGlzc3VlIGhhcyBubyByZWxhdGlvbiB0byB0aGUgZGVncmVlIG9mIHN1Y2Nlc3Mgb2YgdGhlIGFjdGlvbi5cclxuICAgKi9cclxuICBJbmZvcm1hdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB3YXJuaW5nOiBUaGUgaXNzdWUgaXMgbm90IGltcG9ydGFudCBlbm91Z2ggdG8gY2F1c2UgdGhlIGFjdGlvbiB0byBmYWlsLCBidXQgbWF5IGNhdXNlIGl0IHRvIGJlIHBlcmZvcm1lZCBzdWJvcHRpbWFsbHkgb3IgaW4gYSB3YXkgdGhhdCBpcyBub3QgYXMgZGVzaXJlZC5cclxuICAgKi9cclxuICBXYXJuaW5nOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSG93IHRoZSBpc3N1ZSBhZmZlY3RzIHRoZSBzdWNjZXNzIG9mIHRoZSBhY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSXNzdWVTZXZlcml0eUNvZGluZ3M6SXNzdWVTZXZlcml0eUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IFRoZSBpc3N1ZSBpcyBzdWZmaWNpZW50bHkgaW1wb3J0YW50IHRvIGNhdXNlIHRoZSBhY3Rpb24gdG8gZmFpbC5cclxuICAgKi9cclxuICBFcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFcnJvclwiLFxyXG4gICAgY29kZTogXCJlcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtc2V2ZXJpdHlcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGZhdGFsOiBUaGUgaXNzdWUgY2F1c2VkIHRoZSBhY3Rpb24gdG8gZmFpbCwgYW5kIG5vIGZ1cnRoZXIgY2hlY2tpbmcgY291bGQgYmUgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIEZhdGFsOiB7XHJcbiAgICBkaXNwbGF5OiBcIkZhdGFsXCIsXHJcbiAgICBjb2RlOiBcImZhdGFsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pc3N1ZS1zZXZlcml0eVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW5mb3JtYXRpb246IFRoZSBpc3N1ZSBoYXMgbm8gcmVsYXRpb24gdG8gdGhlIGRlZ3JlZSBvZiBzdWNjZXNzIG9mIHRoZSBhY3Rpb24uXHJcbiAgICovXHJcbiAgSW5mb3JtYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiSW5mb3JtYXRpb25cIixcclxuICAgIGNvZGU6IFwiaW5mb3JtYXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2lzc3VlLXNldmVyaXR5XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB3YXJuaW5nOiBUaGUgaXNzdWUgaXMgbm90IGltcG9ydGFudCBlbm91Z2ggdG8gY2F1c2UgdGhlIGFjdGlvbiB0byBmYWlsLCBidXQgbWF5IGNhdXNlIGl0IHRvIGJlIHBlcmZvcm1lZCBzdWJvcHRpbWFsbHkgb3IgaW4gYSB3YXkgdGhhdCBpcyBub3QgYXMgZGVzaXJlZC5cclxuICAgKi9cclxuICBXYXJuaW5nOiB7XHJcbiAgICBkaXNwbGF5OiBcIldhcm5pbmdcIixcclxuICAgIGNvZGU6IFwid2FybmluZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaXNzdWUtc2V2ZXJpdHlcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=