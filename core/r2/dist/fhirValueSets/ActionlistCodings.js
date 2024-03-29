// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/actionlist|1.0.2
/**
 * List of allowable action which this resource can request.
 */
export const ActionlistCodings = {
    /**
     * cancel: Cancel, reverse or nullify the target resource.
     */
    CancelReverseOrNullify: {
        display: "Cancel, Reverse or Nullify",
        code: "cancel",
        system: "http://hl7.org/fhir/actionlist",
    },
    /**
     * poll: Check for previously un-read/ not-retrieved resources.
     */
    Poll: {
        display: "Poll",
        code: "poll",
        system: "http://hl7.org/fhir/actionlist",
    },
    /**
     * reprocess: Re-process the target resource.
     */
    ReProcess: {
        display: "Re-Process",
        code: "reprocess",
        system: "http://hl7.org/fhir/actionlist",
    },
    /**
     * status: Retrieve the processing status of the target resource.
     */
    StatusCheck: {
        display: "Status Check",
        code: "status",
        system: "http://hl7.org/fhir/actionlist",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9ubGlzdENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0FjdGlvbmxpc3RDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLCtEQUErRDtBQTBCL0Q7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBd0I7SUFDcEQ7O09BRUc7SUFDSCxzQkFBc0IsRUFBRTtRQUN0QixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxnQ0FBZ0M7S0FDekM7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLGdDQUFnQztLQUN6QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWN0aW9ubGlzdHwxLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIExpc3Qgb2YgYWxsb3dhYmxlIGFjdGlvbiB3aGljaCB0aGlzIHJlc291cmNlIGNhbiByZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9ubGlzdENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2FuY2VsOiBDYW5jZWwsIHJldmVyc2Ugb3IgbnVsbGlmeSB0aGUgdGFyZ2V0IHJlc291cmNlLlxyXG4gICAqL1xyXG4gIENhbmNlbFJldmVyc2VPck51bGxpZnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcG9sbDogQ2hlY2sgZm9yIHByZXZpb3VzbHkgdW4tcmVhZC8gbm90LXJldHJpZXZlZCByZXNvdXJjZXMuXHJcbiAgICovXHJcbiAgUG9sbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXByb2Nlc3M6IFJlLXByb2Nlc3MgdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgKi9cclxuICBSZVByb2Nlc3M6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc3RhdHVzOiBSZXRyaWV2ZSB0aGUgcHJvY2Vzc2luZyBzdGF0dXMgb2YgdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgKi9cclxuICBTdGF0dXNDaGVjazogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3Qgb2YgYWxsb3dhYmxlIGFjdGlvbiB3aGljaCB0aGlzIHJlc291cmNlIGNhbiByZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFjdGlvbmxpc3RDb2RpbmdzOkFjdGlvbmxpc3RDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbDogQ2FuY2VsLCByZXZlcnNlIG9yIG51bGxpZnkgdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgKi9cclxuICBDYW5jZWxSZXZlcnNlT3JOdWxsaWZ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkNhbmNlbCwgUmV2ZXJzZSBvciBOdWxsaWZ5XCIsXHJcbiAgICBjb2RlOiBcImNhbmNlbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWN0aW9ubGlzdFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcG9sbDogQ2hlY2sgZm9yIHByZXZpb3VzbHkgdW4tcmVhZC8gbm90LXJldHJpZXZlZCByZXNvdXJjZXMuXHJcbiAgICovXHJcbiAgUG9sbDoge1xyXG4gICAgZGlzcGxheTogXCJQb2xsXCIsXHJcbiAgICBjb2RlOiBcInBvbGxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2FjdGlvbmxpc3RcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlcHJvY2VzczogUmUtcHJvY2VzcyB0aGUgdGFyZ2V0IHJlc291cmNlLlxyXG4gICAqL1xyXG4gIFJlUHJvY2Vzczoge1xyXG4gICAgZGlzcGxheTogXCJSZS1Qcm9jZXNzXCIsXHJcbiAgICBjb2RlOiBcInJlcHJvY2Vzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYWN0aW9ubGlzdFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3RhdHVzOiBSZXRyaWV2ZSB0aGUgcHJvY2Vzc2luZyBzdGF0dXMgb2YgdGhlIHRhcmdldCByZXNvdXJjZS5cclxuICAgKi9cclxuICBTdGF0dXNDaGVjazoge1xyXG4gICAgZGlzcGxheTogXCJTdGF0dXMgQ2hlY2tcIixcclxuICAgIGNvZGU6IFwic3RhdHVzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hY3Rpb25saXN0XCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19