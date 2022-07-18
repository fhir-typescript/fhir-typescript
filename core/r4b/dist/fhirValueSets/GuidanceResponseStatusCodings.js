// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guidance-response-status|4.3.0
/**
 * The status of a guidance response.
 */
export const GuidanceResponseStatusCodings = {
    /**
     * data-requested: The request was processed successfully, but more data may result in a more complete evaluation.
     */
    DataRequested: {
        display: "Data Requested",
        code: "data-requested",
        system: "http://hl7.org/fhir/guidance-response-status",
    },
    /**
     * data-required: The request was processed, but more data is required to complete the evaluation.
     */
    DataRequired: {
        display: "Data Required",
        code: "data-required",
        system: "http://hl7.org/fhir/guidance-response-status",
    },
    /**
     * entered-in-error: The response was entered in error.
     */
    EnteredInError: {
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/guidance-response-status",
    },
    /**
     * failure: The request was not processed successfully.
     */
    Failure: {
        display: "Failure",
        code: "failure",
        system: "http://hl7.org/fhir/guidance-response-status",
    },
    /**
     * in-progress: The request is currently being processed.
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/guidance-response-status",
    },
    /**
     * success: The request was processed successfully.
     */
    Success: {
        display: "Success",
        code: "success",
        system: "http://hl7.org/fhir/guidance-response-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZGFuY2VSZXNwb25zZVN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0d1aWRhbmNlUmVzcG9uc2VTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQWtDN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZ3VpZGFuY2UtcmVzcG9uc2Utc3RhdHVzfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiBhIGd1aWRhbmNlIHJlc3BvbnNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3VpZGFuY2VSZXNwb25zZVN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZGF0YS1yZXF1ZXN0ZWQ6IFRoZSByZXF1ZXN0IHdhcyBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5LCBidXQgbW9yZSBkYXRhIG1heSByZXN1bHQgaW4gYSBtb3JlIGNvbXBsZXRlIGV2YWx1YXRpb24uXHJcbiAgICovXHJcbiAgRGF0YVJlcXVlc3RlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkYXRhLXJlcXVpcmVkOiBUaGUgcmVxdWVzdCB3YXMgcHJvY2Vzc2VkLCBidXQgbW9yZSBkYXRhIGlzIHJlcXVpcmVkIHRvIGNvbXBsZXRlIHRoZSBldmFsdWF0aW9uLlxyXG4gICAqL1xyXG4gIERhdGFSZXF1aXJlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGUgcmVzcG9uc2Ugd2FzIGVudGVyZWQgaW4gZXJyb3IuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZmFpbHVyZTogVGhlIHJlcXVlc3Qgd2FzIG5vdCBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5LlxyXG4gICAqL1xyXG4gIEZhaWx1cmU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSByZXF1ZXN0IGlzIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdWNjZXNzOiBUaGUgcmVxdWVzdCB3YXMgcHJvY2Vzc2VkIHN1Y2Nlc3NmdWxseS5cclxuICAgKi9cclxuICBTdWNjZXNzOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiBhIGd1aWRhbmNlIHJlc3BvbnNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEd1aWRhbmNlUmVzcG9uc2VTdGF0dXNDb2RpbmdzOkd1aWRhbmNlUmVzcG9uc2VTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGRhdGEtcmVxdWVzdGVkOiBUaGUgcmVxdWVzdCB3YXMgcHJvY2Vzc2VkIHN1Y2Nlc3NmdWxseSwgYnV0IG1vcmUgZGF0YSBtYXkgcmVzdWx0IGluIGEgbW9yZSBjb21wbGV0ZSBldmFsdWF0aW9uLlxyXG4gICAqL1xyXG4gIERhdGFSZXF1ZXN0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRGF0YSBSZXF1ZXN0ZWRcIixcclxuICAgIGNvZGU6IFwiZGF0YS1yZXF1ZXN0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRhbmNlLXJlc3BvbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGF0YS1yZXF1aXJlZDogVGhlIHJlcXVlc3Qgd2FzIHByb2Nlc3NlZCwgYnV0IG1vcmUgZGF0YSBpcyByZXF1aXJlZCB0byBjb21wbGV0ZSB0aGUgZXZhbHVhdGlvbi5cclxuICAgKi9cclxuICBEYXRhUmVxdWlyZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRGF0YSBSZXF1aXJlZFwiLFxyXG4gICAgY29kZTogXCJkYXRhLXJlcXVpcmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ndWlkYW5jZS1yZXNwb25zZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSByZXNwb25zZSB3YXMgZW50ZXJlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIEluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRhbmNlLXJlc3BvbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZmFpbHVyZTogVGhlIHJlcXVlc3Qgd2FzIG5vdCBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5LlxyXG4gICAqL1xyXG4gIEZhaWx1cmU6IHtcclxuICAgIGRpc3BsYXk6IFwiRmFpbHVyZVwiLFxyXG4gICAgY29kZTogXCJmYWlsdXJlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ndWlkYW5jZS1yZXNwb25zZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBUaGUgcmVxdWVzdCBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IHtcclxuICAgIGRpc3BsYXk6IFwiSW4gUHJvZ3Jlc3NcIixcclxuICAgIGNvZGU6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRhbmNlLXJlc3BvbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3VjY2VzczogVGhlIHJlcXVlc3Qgd2FzIHByb2Nlc3NlZCBzdWNjZXNzZnVsbHkuXHJcbiAgICovXHJcbiAgU3VjY2Vzczoge1xyXG4gICAgZGlzcGxheTogXCJTdWNjZXNzXCIsXHJcbiAgICBjb2RlOiBcInN1Y2Nlc3NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2d1aWRhbmNlLXJlc3BvbnNlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==