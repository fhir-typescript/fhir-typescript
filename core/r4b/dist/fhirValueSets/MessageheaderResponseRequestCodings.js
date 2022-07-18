// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/messageheader-response-request|4.3.0
/**
 * HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.
 */
export const MessageheaderResponseRequestCodings = {
    /**
     * always: initiator expects a response for this message.
     */
    Always: {
        display: "Always",
        code: "always",
        system: "http://hl7.org/fhir/messageheader-response-request",
    },
    /**
     * never: initiator does not expect a response.
     */
    Never: {
        display: "Never",
        code: "never",
        system: "http://hl7.org/fhir/messageheader-response-request",
    },
    /**
     * on-error: initiator expects a response only if in error.
     */
    ErrorRejectConditionsOnly: {
        display: "Error/reject conditions only",
        code: "on-error",
        system: "http://hl7.org/fhir/messageheader-response-request",
    },
    /**
     * on-success: initiator expects a response only if successful.
     */
    SuccessfulCompletionOnly: {
        display: "Successful completion only",
        code: "on-success",
        system: "http://hl7.org/fhir/messageheader-response-request",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZWhlYWRlclJlc3BvbnNlUmVxdWVzdENvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lc3NhZ2VoZWFkZXJSZXNwb25zZVJlcXVlc3RDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLG1GQUFtRjtBQTBCbkY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBMEM7SUFDeEY7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0Q7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLG9EQUFvRDtLQUM3RDtJQUNEOztPQUVHO0lBQ0gseUJBQXlCLEVBQUU7UUFDekIsT0FBTyxFQUFFLDhCQUE4QjtRQUN2QyxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsb0RBQW9EO0tBQzdEO0lBQ0Q7O09BRUc7SUFDSCx3QkFBd0IsRUFBRTtRQUN4QixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxvREFBb0Q7S0FDN0Q7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZXNzYWdlaGVhZGVyLXJlc3BvbnNlLXJlcXVlc3R8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBITDctZGVmaW5lZCB0YWJsZSBvZiBjb2RlcyB3aGljaCBpZGVudGlmeSBjb25kaXRpb25zIHVuZGVyIHdoaWNoIGFja25vd2xlZGdtZW50cyBhcmUgcmVxdWlyZWQgdG8gYmUgcmV0dXJuZWQgaW4gcmVzcG9uc2UgdG8gYSBtZXNzYWdlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVzc2FnZWhlYWRlclJlc3BvbnNlUmVxdWVzdENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWx3YXlzOiBpbml0aWF0b3IgZXhwZWN0cyBhIHJlc3BvbnNlIGZvciB0aGlzIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgQWx3YXlzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG5ldmVyOiBpbml0aWF0b3IgZG9lcyBub3QgZXhwZWN0IGEgcmVzcG9uc2UuXHJcbiAgICovXHJcbiAgTmV2ZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogb24tZXJyb3I6IGluaXRpYXRvciBleHBlY3RzIGEgcmVzcG9uc2Ugb25seSBpZiBpbiBlcnJvci5cclxuICAgKi9cclxuICBFcnJvclJlamVjdENvbmRpdGlvbnNPbmx5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9uLXN1Y2Nlc3M6IGluaXRpYXRvciBleHBlY3RzIGEgcmVzcG9uc2Ugb25seSBpZiBzdWNjZXNzZnVsLlxyXG4gICAqL1xyXG4gIFN1Y2Nlc3NmdWxDb21wbGV0aW9uT25seTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEhMNy1kZWZpbmVkIHRhYmxlIG9mIGNvZGVzIHdoaWNoIGlkZW50aWZ5IGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggYWNrbm93bGVkZ21lbnRzIGFyZSByZXF1aXJlZCB0byBiZSByZXR1cm5lZCBpbiByZXNwb25zZSB0byBhIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVzc2FnZWhlYWRlclJlc3BvbnNlUmVxdWVzdENvZGluZ3M6TWVzc2FnZWhlYWRlclJlc3BvbnNlUmVxdWVzdENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWx3YXlzOiBpbml0aWF0b3IgZXhwZWN0cyBhIHJlc3BvbnNlIGZvciB0aGlzIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgQWx3YXlzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFsd2F5c1wiLFxyXG4gICAgY29kZTogXCJhbHdheXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2VoZWFkZXItcmVzcG9uc2UtcmVxdWVzdFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbmV2ZXI6IGluaXRpYXRvciBkb2VzIG5vdCBleHBlY3QgYSByZXNwb25zZS5cclxuICAgKi9cclxuICBOZXZlcjoge1xyXG4gICAgZGlzcGxheTogXCJOZXZlclwiLFxyXG4gICAgY29kZTogXCJuZXZlclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZWhlYWRlci1yZXNwb25zZS1yZXF1ZXN0XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvbi1lcnJvcjogaW5pdGlhdG9yIGV4cGVjdHMgYSByZXNwb25zZSBvbmx5IGlmIGluIGVycm9yLlxyXG4gICAqL1xyXG4gIEVycm9yUmVqZWN0Q29uZGl0aW9uc09ubHk6IHtcclxuICAgIGRpc3BsYXk6IFwiRXJyb3IvcmVqZWN0IGNvbmRpdGlvbnMgb25seVwiLFxyXG4gICAgY29kZTogXCJvbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZWhlYWRlci1yZXNwb25zZS1yZXF1ZXN0XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvbi1zdWNjZXNzOiBpbml0aWF0b3IgZXhwZWN0cyBhIHJlc3BvbnNlIG9ubHkgaWYgc3VjY2Vzc2Z1bC5cclxuICAgKi9cclxuICBTdWNjZXNzZnVsQ29tcGxldGlvbk9ubHk6IHtcclxuICAgIGRpc3BsYXk6IFwiU3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9ubHlcIixcclxuICAgIGNvZGU6IFwib24tc3VjY2Vzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZWhlYWRlci1yZXNwb25zZS1yZXF1ZXN0XCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19