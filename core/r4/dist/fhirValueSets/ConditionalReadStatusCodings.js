// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-read-status|4.0.1
/**
 * A code that indicates how the server supports conditional read.
 */
export const ConditionalReadStatusCodings = {
    /**
     * full-support: Conditional reads are supported, with both If-Modified-Since and If-None-Match HTTP Headers.
     */
    FullSupport: {
        display: "Full Support",
        code: "full-support",
        system: "http://hl7.org/fhir/conditional-read-status",
    },
    /**
     * modified-since: Conditional reads are supported, but only with the If-Modified-Since HTTP Header.
     */
    IfModifiedSince: {
        display: "If-Modified-Since",
        code: "modified-since",
        system: "http://hl7.org/fhir/conditional-read-status",
    },
    /**
     * not-match: Conditional reads are supported, but only with the If-None-Match HTTP Header.
     */
    IfNoneMatch: {
        display: "If-None-Match",
        code: "not-match",
        system: "http://hl7.org/fhir/conditional-read-status",
    },
    /**
     * not-supported: No support for conditional reads.
     */
    NotSupported: {
        display: "Not Supported",
        code: "not-supported",
        system: "http://hl7.org/fhir/conditional-read-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uYWxSZWFkU3RhdHVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQ29uZGl0aW9uYWxSZWFkU3RhdHVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw0RUFBNEU7QUEwQjVFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQW1DO0lBQzFFOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLDZDQUE2QztLQUN0RDtJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2NvbmRpdGlvbmFsLXJlYWQtc3RhdHVzfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgaW5kaWNhdGVzIGhvdyB0aGUgc2VydmVyIHN1cHBvcnRzIGNvbmRpdGlvbmFsIHJlYWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb25kaXRpb25hbFJlYWRTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGZ1bGwtc3VwcG9ydDogQ29uZGl0aW9uYWwgcmVhZHMgYXJlIHN1cHBvcnRlZCwgd2l0aCBib3RoIElmLU1vZGlmaWVkLVNpbmNlIGFuZCBJZi1Ob25lLU1hdGNoIEhUVFAgSGVhZGVycy5cclxuICAgKi9cclxuICBGdWxsU3VwcG9ydDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtb2RpZmllZC1zaW5jZTogQ29uZGl0aW9uYWwgcmVhZHMgYXJlIHN1cHBvcnRlZCwgYnV0IG9ubHkgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgSFRUUCBIZWFkZXIuXHJcbiAgICovXHJcbiAgSWZNb2RpZmllZFNpbmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5vdC1tYXRjaDogQ29uZGl0aW9uYWwgcmVhZHMgYXJlIHN1cHBvcnRlZCwgYnV0IG9ubHkgd2l0aCB0aGUgSWYtTm9uZS1NYXRjaCBIVFRQIEhlYWRlci5cclxuICAgKi9cclxuICBJZk5vbmVNYXRjaDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBub3Qtc3VwcG9ydGVkOiBObyBzdXBwb3J0IGZvciBjb25kaXRpb25hbCByZWFkcy5cclxuICAgKi9cclxuICBOb3RTdXBwb3J0ZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgdGhhdCBpbmRpY2F0ZXMgaG93IHRoZSBzZXJ2ZXIgc3VwcG9ydHMgY29uZGl0aW9uYWwgcmVhZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25kaXRpb25hbFJlYWRTdGF0dXNDb2RpbmdzOkNvbmRpdGlvbmFsUmVhZFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZnVsbC1zdXBwb3J0OiBDb25kaXRpb25hbCByZWFkcyBhcmUgc3VwcG9ydGVkLCB3aXRoIGJvdGggSWYtTW9kaWZpZWQtU2luY2UgYW5kIElmLU5vbmUtTWF0Y2ggSFRUUCBIZWFkZXJzLlxyXG4gICAqL1xyXG4gIEZ1bGxTdXBwb3J0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkZ1bGwgU3VwcG9ydFwiLFxyXG4gICAgY29kZTogXCJmdWxsLXN1cHBvcnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbmRpdGlvbmFsLXJlYWQtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtb2RpZmllZC1zaW5jZTogQ29uZGl0aW9uYWwgcmVhZHMgYXJlIHN1cHBvcnRlZCwgYnV0IG9ubHkgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgSFRUUCBIZWFkZXIuXHJcbiAgICovXHJcbiAgSWZNb2RpZmllZFNpbmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIklmLU1vZGlmaWVkLVNpbmNlXCIsXHJcbiAgICBjb2RlOiBcIm1vZGlmaWVkLXNpbmNlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25kaXRpb25hbC1yZWFkLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LW1hdGNoOiBDb25kaXRpb25hbCByZWFkcyBhcmUgc3VwcG9ydGVkLCBidXQgb25seSB3aXRoIHRoZSBJZi1Ob25lLU1hdGNoIEhUVFAgSGVhZGVyLlxyXG4gICAqL1xyXG4gIElmTm9uZU1hdGNoOiB7XHJcbiAgICBkaXNwbGF5OiBcIklmLU5vbmUtTWF0Y2hcIixcclxuICAgIGNvZGU6IFwibm90LW1hdGNoXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25kaXRpb25hbC1yZWFkLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LXN1cHBvcnRlZDogTm8gc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgcmVhZHMuXHJcbiAgICovXHJcbiAgTm90U3VwcG9ydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBTdXBwb3J0ZWRcIixcclxuICAgIGNvZGU6IFwibm90LXN1cHBvcnRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29uZGl0aW9uYWwtcmVhZC1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=