// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-action|1.0.2
/**
 * Indicator for type of action performed during the event that generated the audit.
 */
export const AuditEventActionCodings = {
    /**
     * C: Create a new database object, such as placing an order.
     */
    Create: {
        display: "Create",
        code: "C",
        system: "http://hl7.org/fhir/audit-event-action",
    },
    /**
     * D: Delete items, such as a doctor master file record.
     */
    Delete: {
        display: "Delete",
        code: "D",
        system: "http://hl7.org/fhir/audit-event-action",
    },
    /**
     * E: Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    Execute: {
        display: "Execute",
        code: "E",
        system: "http://hl7.org/fhir/audit-event-action",
    },
    /**
     * R: Display or print data, such as a doctor census.
     */
    ReadViewPrint: {
        display: "Read/View/Print",
        code: "R",
        system: "http://hl7.org/fhir/audit-event-action",
    },
    /**
     * U: Update data, such as revise patient information.
     */
    Update: {
        display: "Update",
        code: "U",
        system: "http://hl7.org/fhir/audit-event-action",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRFdmVudEFjdGlvbkNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0F1ZGl0RXZlbnRBY3Rpb25Db2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHVFQUF1RTtBQThCdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBOEI7SUFDaEU7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMi5jb3JlIHZlcnNpb246IDEuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hdWRpdC1ldmVudC1hY3Rpb258MS4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0b3IgZm9yIHR5cGUgb2YgYWN0aW9uIHBlcmZvcm1lZCBkdXJpbmcgdGhlIGV2ZW50IHRoYXQgZ2VuZXJhdGVkIHRoZSBhdWRpdC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEF1ZGl0RXZlbnRBY3Rpb25Db2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIEM6IENyZWF0ZSBhIG5ldyBkYXRhYmFzZSBvYmplY3QsIHN1Y2ggYXMgcGxhY2luZyBhbiBvcmRlci5cclxuICAgKi9cclxuICBDcmVhdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogRDogRGVsZXRlIGl0ZW1zLCBzdWNoIGFzIGEgZG9jdG9yIG1hc3RlciBmaWxlIHJlY29yZC5cclxuICAgKi9cclxuICBEZWxldGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogRTogUGVyZm9ybSBhIHN5c3RlbSBvciBhcHBsaWNhdGlvbiBmdW5jdGlvbiBzdWNoIGFzIGxvZy1vbiwgcHJvZ3JhbSBleGVjdXRpb24gb3IgdXNlIG9mIGFuIG9iamVjdCdzIG1ldGhvZCwgb3IgcGVyZm9ybSBhIHF1ZXJ5L3NlYXJjaCBvcGVyYXRpb24uXHJcbiAgICovXHJcbiAgRXhlY3V0ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBSOiBEaXNwbGF5IG9yIHByaW50IGRhdGEsIHN1Y2ggYXMgYSBkb2N0b3IgY2Vuc3VzLlxyXG4gICAqL1xyXG4gIFJlYWRWaWV3UHJpbnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogVTogVXBkYXRlIGRhdGEsIHN1Y2ggYXMgcmV2aXNlIHBhdGllbnQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgVXBkYXRlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSW5kaWNhdG9yIGZvciB0eXBlIG9mIGFjdGlvbiBwZXJmb3JtZWQgZHVyaW5nIHRoZSBldmVudCB0aGF0IGdlbmVyYXRlZCB0aGUgYXVkaXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQXVkaXRFdmVudEFjdGlvbkNvZGluZ3M6QXVkaXRFdmVudEFjdGlvbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogQzogQ3JlYXRlIGEgbmV3IGRhdGFiYXNlIG9iamVjdCwgc3VjaCBhcyBwbGFjaW5nIGFuIG9yZGVyLlxyXG4gICAqL1xyXG4gIENyZWF0ZToge1xyXG4gICAgZGlzcGxheTogXCJDcmVhdGVcIixcclxuICAgIGNvZGU6IFwiQ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXVkaXQtZXZlbnQtYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBEOiBEZWxldGUgaXRlbXMsIHN1Y2ggYXMgYSBkb2N0b3IgbWFzdGVyIGZpbGUgcmVjb3JkLlxyXG4gICAqL1xyXG4gIERlbGV0ZToge1xyXG4gICAgZGlzcGxheTogXCJEZWxldGVcIixcclxuICAgIGNvZGU6IFwiRFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXVkaXQtZXZlbnQtYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBFOiBQZXJmb3JtIGEgc3lzdGVtIG9yIGFwcGxpY2F0aW9uIGZ1bmN0aW9uIHN1Y2ggYXMgbG9nLW9uLCBwcm9ncmFtIGV4ZWN1dGlvbiBvciB1c2Ugb2YgYW4gb2JqZWN0J3MgbWV0aG9kLCBvciBwZXJmb3JtIGEgcXVlcnkvc2VhcmNoIG9wZXJhdGlvbi5cclxuICAgKi9cclxuICBFeGVjdXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkV4ZWN1dGVcIixcclxuICAgIGNvZGU6IFwiRVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYXVkaXQtZXZlbnQtYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBSOiBEaXNwbGF5IG9yIHByaW50IGRhdGEsIHN1Y2ggYXMgYSBkb2N0b3IgY2Vuc3VzLlxyXG4gICAqL1xyXG4gIFJlYWRWaWV3UHJpbnQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVhZC9WaWV3L1ByaW50XCIsXHJcbiAgICBjb2RlOiBcIlJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2F1ZGl0LWV2ZW50LWFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogVTogVXBkYXRlIGRhdGEsIHN1Y2ggYXMgcmV2aXNlIHBhdGllbnQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgVXBkYXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVwZGF0ZVwiLFxyXG4gICAgY29kZTogXCJVXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hdWRpdC1ldmVudC1hY3Rpb25cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=