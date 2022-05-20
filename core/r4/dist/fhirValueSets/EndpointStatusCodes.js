// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/endpoint-status|4.0.1
/**
 * The status of the endpoint.
 */
export const EndpointStatusCodes = {
    /**
     * active: This endpoint is expected to be active and can be used.
     */
    Active: "active",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: "entered-in-error",
    /**
     * error: This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken.
     */
    Error: "error",
    /**
     * off: This endpoint is no longer to be used.
     */
    Off: "off",
    /**
     * suspended: This endpoint is temporarily unavailable.
     */
    Suspended: "suspended",
    /**
     * test: This endpoint is not intended for production usage.
     */
    Test: "test",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnRTdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRW5kcG9pbnRTdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxvRUFBb0U7QUFFcEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxHQUFHLEVBQUUsS0FBSztJQUNWOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZW5kcG9pbnQtc3RhdHVzfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgZW5kcG9pbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRW5kcG9pbnRTdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhY3RpdmU6IFRoaXMgZW5kcG9pbnQgaXMgZXhwZWN0ZWQgdG8gYmUgYWN0aXZlIGFuZCBjYW4gYmUgdXNlZC5cclxuICAgKi9cclxuICBBY3RpdmU6IFwiYWN0aXZlXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhpcyBpbnN0YW5jZSBzaG91bGQgbm90IGhhdmUgYmVlbiBwYXJ0IG9mIHRoaXMgcGF0aWVudCdzIG1lZGljYWwgcmVjb3JkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAvKipcclxuICAgKiBlcnJvcjogVGhpcyBlbmRwb2ludCBoYXMgZXhjZWVkZWQgY29ubmVjdGl2aXR5IHRocmVzaG9sZHMgYW5kIGlzIGNvbnNpZGVyZWQgaW4gYW4gZXJyb3Igc3RhdGUgYW5kIHNob3VsZCBubyBsb25nZXIgYmUgYXR0ZW1wdGVkIHRvIGNvbm5lY3QgdG8gdW50aWwgY29ycmVjdGl2ZSBhY3Rpb24gaXMgdGFrZW4uXHJcbiAgICovXHJcbiAgRXJyb3I6IFwiZXJyb3JcIixcclxuICAvKipcclxuICAgKiBvZmY6IFRoaXMgZW5kcG9pbnQgaXMgbm8gbG9uZ2VyIHRvIGJlIHVzZWQuXHJcbiAgICovXHJcbiAgT2ZmOiBcIm9mZlwiLFxyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmRlZDogVGhpcyBlbmRwb2ludCBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS5cclxuICAgKi9cclxuICBTdXNwZW5kZWQ6IFwic3VzcGVuZGVkXCIsXHJcbiAgLyoqXHJcbiAgICogdGVzdDogVGhpcyBlbmRwb2ludCBpcyBub3QgaW50ZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNhZ2UuXHJcbiAgICovXHJcbiAgVGVzdDogXCJ0ZXN0XCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgZW5kcG9pbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbmRwb2ludFN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIEVuZHBvaW50U3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIEVuZHBvaW50U3RhdHVzQ29kZXNdO1xyXG4iXX0=