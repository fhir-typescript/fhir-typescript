// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplyrequest-status|1.0.2
/**
 * Status of the supply request
 */
export const SupplyrequestStatusCodings = {
    /**
     * cancelled: The orderer of the supply cancelled the request.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/supplyrequest-status",
    },
    /**
     * completed: Supply has been received by the requestor.
     */
    Received: {
        display: "Received",
        code: "completed",
        system: "http://hl7.org/fhir/supplyrequest-status",
    },
    /**
     * failed: The supply will not be completed because the supplier was unable or unwilling to supply the item.
     */
    Failed: {
        display: "Failed",
        code: "failed",
        system: "http://hl7.org/fhir/supplyrequest-status",
    },
    /**
     * requested: Supply has been requested, but not dispensed.
     */
    Requested: {
        display: "Requested",
        code: "requested",
        system: "http://hl7.org/fhir/supplyrequest-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1N1cHBseXJlcXVlc3RTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlFQUF5RTtBQTBCekU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIyLmNvcmUgdmVyc2lvbjogMS4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N1cHBseXJlcXVlc3Qtc3RhdHVzfDEuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogU3RhdHVzIG9mIHRoZSBzdXBwbHkgcmVxdWVzdFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgb3JkZXJlciBvZiB0aGUgc3VwcGx5IGNhbmNlbGxlZCB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29tcGxldGVkOiBTdXBwbHkgaGFzIGJlZW4gcmVjZWl2ZWQgYnkgdGhlIHJlcXVlc3Rvci5cclxuICAgKi9cclxuICBSZWNlaXZlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBmYWlsZWQ6IFRoZSBzdXBwbHkgd2lsbCBub3QgYmUgY29tcGxldGVkIGJlY2F1c2UgdGhlIHN1cHBsaWVyIHdhcyB1bmFibGUgb3IgdW53aWxsaW5nIHRvIHN1cHBseSB0aGUgaXRlbS5cclxuICAgKi9cclxuICBGYWlsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVxdWVzdGVkOiBTdXBwbHkgaGFzIGJlZW4gcmVxdWVzdGVkLCBidXQgbm90IGRpc3BlbnNlZC5cclxuICAgKi9cclxuICBSZXF1ZXN0ZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdGF0dXMgb2YgdGhlIHN1cHBseSByZXF1ZXN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3VwcGx5cmVxdWVzdFN0YXR1c0NvZGluZ3M6U3VwcGx5cmVxdWVzdFN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgb3JkZXJlciBvZiB0aGUgc3VwcGx5IGNhbmNlbGxlZCB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2FuY2VsbGVkXCIsXHJcbiAgICBjb2RlOiBcImNhbmNlbGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3VwcGx5cmVxdWVzdC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogU3VwcGx5IGhhcyBiZWVuIHJlY2VpdmVkIGJ5IHRoZSByZXF1ZXN0b3IuXHJcbiAgICovXHJcbiAgUmVjZWl2ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVjZWl2ZWRcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdXBwbHlyZXF1ZXN0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZmFpbGVkOiBUaGUgc3VwcGx5IHdpbGwgbm90IGJlIGNvbXBsZXRlZCBiZWNhdXNlIHRoZSBzdXBwbGllciB3YXMgdW5hYmxlIG9yIHVud2lsbGluZyB0byBzdXBwbHkgdGhlIGl0ZW0uXHJcbiAgICovXHJcbiAgRmFpbGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkZhaWxlZFwiLFxyXG4gICAgY29kZTogXCJmYWlsZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3N1cHBseXJlcXVlc3Qtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZXF1ZXN0ZWQ6IFN1cHBseSBoYXMgYmVlbiByZXF1ZXN0ZWQsIGJ1dCBub3QgZGlzcGVuc2VkLlxyXG4gICAqL1xyXG4gIFJlcXVlc3RlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZXF1ZXN0ZWRcIixcclxuICAgIGNvZGU6IFwicmVxdWVzdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdXBwbHlyZXF1ZXN0LXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==