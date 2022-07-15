// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-action-result-codes|4.3.0
/**
 * The results of executing an action.
 */
export const ReportActionResultCodings = {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    Error: {
        display: "Error",
        code: "error",
        system: "http://hl7.org/fhir/report-action-result-codes",
    },
    /**
     * fail: The action failed.
     */
    Fail: {
        display: "Fail",
        code: "fail",
        system: "http://hl7.org/fhir/report-action-result-codes",
    },
    /**
     * pass: The action was successful.
     */
    Pass: {
        display: "Pass",
        code: "pass",
        system: "http://hl7.org/fhir/report-action-result-codes",
    },
    /**
     * skip: The action was skipped.
     */
    Skip: {
        display: "Skip",
        code: "skip",
        system: "http://hl7.org/fhir/report-action-result-codes",
    },
    /**
     * warning: The action passed but with warnings.
     */
    Warning: {
        display: "Warning",
        code: "warning",
        system: "http://hl7.org/fhir/report-action-result-codes",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0QWN0aW9uUmVzdWx0Q29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUmVwb3J0QWN0aW9uUmVzdWx0Q29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQywrRUFBK0U7QUE4Qi9FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXBvcnQtYWN0aW9uLXJlc3VsdC1jb2Rlc3w0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSByZXN1bHRzIG9mIGV4ZWN1dGluZyBhbiBhY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXBvcnRBY3Rpb25SZXN1bHRDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGVycm9yOiBUaGUgYWN0aW9uIGVuY291bnRlcmVkIGEgZmF0YWwgZXJyb3IgYW5kIHRoZSBlbmdpbmUgd2FzIHVuYWJsZSB0byBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIEVycm9yOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGZhaWw6IFRoZSBhY3Rpb24gZmFpbGVkLlxyXG4gICAqL1xyXG4gIEZhaWw6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcGFzczogVGhlIGFjdGlvbiB3YXMgc3VjY2Vzc2Z1bC5cclxuICAgKi9cclxuICBQYXNzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNraXA6IFRoZSBhY3Rpb24gd2FzIHNraXBwZWQuXHJcbiAgICovXHJcbiAgU2tpcDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB3YXJuaW5nOiBUaGUgYWN0aW9uIHBhc3NlZCBidXQgd2l0aCB3YXJuaW5ncy5cclxuICAgKi9cclxuICBXYXJuaW5nOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHJlc3VsdHMgb2YgZXhlY3V0aW5nIGFuIGFjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXBvcnRBY3Rpb25SZXN1bHRDb2RpbmdzOlJlcG9ydEFjdGlvblJlc3VsdENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IFRoZSBhY3Rpb24gZW5jb3VudGVyZWQgYSBmYXRhbCBlcnJvciBhbmQgdGhlIGVuZ2luZSB3YXMgdW5hYmxlIHRvIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlcG9ydC1hY3Rpb24tcmVzdWx0LWNvZGVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmYWlsOiBUaGUgYWN0aW9uIGZhaWxlZC5cclxuICAgKi9cclxuICBGYWlsOiB7XHJcbiAgICBkaXNwbGF5OiBcIkZhaWxcIixcclxuICAgIGNvZGU6IFwiZmFpbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVwb3J0LWFjdGlvbi1yZXN1bHQtY29kZXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhc3M6IFRoZSBhY3Rpb24gd2FzIHN1Y2Nlc3NmdWwuXHJcbiAgICovXHJcbiAgUGFzczoge1xyXG4gICAgZGlzcGxheTogXCJQYXNzXCIsXHJcbiAgICBjb2RlOiBcInBhc3NcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlcG9ydC1hY3Rpb24tcmVzdWx0LWNvZGVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBza2lwOiBUaGUgYWN0aW9uIHdhcyBza2lwcGVkLlxyXG4gICAqL1xyXG4gIFNraXA6IHtcclxuICAgIGRpc3BsYXk6IFwiU2tpcFwiLFxyXG4gICAgY29kZTogXCJza2lwXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXBvcnQtYWN0aW9uLXJlc3VsdC1jb2Rlc1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogd2FybmluZzogVGhlIGFjdGlvbiBwYXNzZWQgYnV0IHdpdGggd2FybmluZ3MuXHJcbiAgICovXHJcbiAgV2FybmluZzoge1xyXG4gICAgZGlzcGxheTogXCJXYXJuaW5nXCIsXHJcbiAgICBjb2RlOiBcIndhcm5pbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlcG9ydC1hY3Rpb24tcmVzdWx0LWNvZGVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19