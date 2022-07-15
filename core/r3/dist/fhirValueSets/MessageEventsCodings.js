// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-events|3.0.2
/**
 * One of the message events defined as part of FHIR.
 */
export const MessageEventsCodings = {
    /**
     * admin-notify: Notification of a change to an administrative resource (either create or update). Note that there is no delete, though some administrative resources have status or period elements for this use.
     */
    AdminNotify: {
        display: "admin-notify",
        code: "admin-notify",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * CodeSystem-expand: The definition of a code system is used to create a simple collection of codes suitable for use for data entry or validation. An expanded code system will be returned, or an error message.
     */
    CodeSystemExpand: {
        display: "CodeSystem-expand",
        code: "CodeSystem-expand",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * communication-request: Notification to convey information.
     */
    CommunicationRequest: {
        display: "communication-request",
        code: "communication-request",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * diagnosticreport-provide: Provide a diagnostic report, or update a previously provided diagnostic report.
     */
    DiagnosticreportProvide: {
        display: "diagnosticreport-provide",
        code: "diagnosticreport-provide",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * MedicationAdministration-Complete: Change the status of a Medication Administration to show that it is complete.
     */
    MedicationAdministrationComplete: {
        display: "MedicationAdministration-Complete",
        code: "MedicationAdministration-Complete",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * MedicationAdministration-Nullification: Someone wishes to record that the record of administration of a medication is in error and should be ignored.
     */
    MedicationAdministrationNullification: {
        display: "MedicationAdministration-Nullification",
        code: "MedicationAdministration-Nullification",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * MedicationAdministration-Recording: Indicates that a medication has been recorded against the patient's record.
     */
    MedicationAdministrationRecording: {
        display: "MedicationAdministration-Recording",
        code: "MedicationAdministration-Recording",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * MedicationAdministration-Update: Update a Medication Administration record.
     */
    MedicationAdministrationUpdate: {
        display: "MedicationAdministration-Update",
        code: "MedicationAdministration-Update",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * observation-provide: Provide a simple observation or update a previously provided simple observation.
     */
    ObservationProvide: {
        display: "observation-provide",
        code: "observation-provide",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * patient-link: Notification that two patient records actually identify the same patient.
     */
    PatientLink: {
        display: "patient-link",
        code: "patient-link",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * patient-unlink: Notification that previous advice that two patient records concern the same patient is now considered incorrect.
     */
    PatientUnlink: {
        display: "patient-unlink",
        code: "patient-unlink",
        system: "http://hl7.org/fhir/message-events",
    },
    /**
     * valueset-expand: The definition of a value set is used to create a simple collection of codes suitable for use for data entry or validation. An expanded value set will be returned, or an error message.
     */
    ValuesetExpand: {
        display: "valueset-expand",
        code: "valueset-expand",
        system: "http://hl7.org/fhir/message-events",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUV2ZW50c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lc3NhZ2VFdmVudHNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQTBEbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxtQkFBbUI7UUFDekIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUU7UUFDcEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILHVCQUF1QixFQUFFO1FBQ3ZCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxnQ0FBZ0MsRUFBRTtRQUNoQyxPQUFPLEVBQUUsbUNBQW1DO1FBQzVDLElBQUksRUFBRSxtQ0FBbUM7UUFDekMsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gscUNBQXFDLEVBQUU7UUFDckMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxJQUFJLEVBQUUsd0NBQXdDO1FBQzlDLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILGlDQUFpQyxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsSUFBSSxFQUFFLG9DQUFvQztRQUMxQyxNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCw4QkFBOEIsRUFBRTtRQUM5QixPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLElBQUksRUFBRSxpQ0FBaUM7UUFDdkMsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztJQUNEOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUU7UUFDbEIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSxvQ0FBb0M7S0FDN0M7SUFDRDs7T0FFRztJQUNILGFBQWEsRUFBRTtRQUNiLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixNQUFNLEVBQUUsb0NBQW9DO0tBQzdDO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLG9DQUFvQztLQUM3QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVzc2FnZS1ldmVudHN8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBPbmUgb2YgdGhlIG1lc3NhZ2UgZXZlbnRzIGRlZmluZWQgYXMgcGFydCBvZiBGSElSLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVzc2FnZUV2ZW50c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWRtaW4tbm90aWZ5OiBOb3RpZmljYXRpb24gb2YgYSBjaGFuZ2UgdG8gYW4gYWRtaW5pc3RyYXRpdmUgcmVzb3VyY2UgKGVpdGhlciBjcmVhdGUgb3IgdXBkYXRlKS4gTm90ZSB0aGF0IHRoZXJlIGlzIG5vIGRlbGV0ZSwgdGhvdWdoIHNvbWUgYWRtaW5pc3RyYXRpdmUgcmVzb3VyY2VzIGhhdmUgc3RhdHVzIG9yIHBlcmlvZCBlbGVtZW50cyBmb3IgdGhpcyB1c2UuXHJcbiAgICovXHJcbiAgQWRtaW5Ob3RpZnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZVN5c3RlbS1leHBhbmQ6IFRoZSBkZWZpbml0aW9uIG9mIGEgY29kZSBzeXN0ZW0gaXMgdXNlZCB0byBjcmVhdGUgYSBzaW1wbGUgY29sbGVjdGlvbiBvZiBjb2RlcyBzdWl0YWJsZSBmb3IgdXNlIGZvciBkYXRhIGVudHJ5IG9yIHZhbGlkYXRpb24uIEFuIGV4cGFuZGVkIGNvZGUgc3lzdGVtIHdpbGwgYmUgcmV0dXJuZWQsIG9yIGFuIGVycm9yIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgQ29kZVN5c3RlbUV4cGFuZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb21tdW5pY2F0aW9uLXJlcXVlc3Q6IE5vdGlmaWNhdGlvbiB0byBjb252ZXkgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgQ29tbXVuaWNhdGlvblJlcXVlc3Q6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZGlhZ25vc3RpY3JlcG9ydC1wcm92aWRlOiBQcm92aWRlIGEgZGlhZ25vc3RpYyByZXBvcnQsIG9yIHVwZGF0ZSBhIHByZXZpb3VzbHkgcHJvdmlkZWQgZGlhZ25vc3RpYyByZXBvcnQuXHJcbiAgICovXHJcbiAgRGlhZ25vc3RpY3JlcG9ydFByb3ZpZGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uLUNvbXBsZXRlOiBDaGFuZ2UgdGhlIHN0YXR1cyBvZiBhIE1lZGljYXRpb24gQWRtaW5pc3RyYXRpb24gdG8gc2hvdyB0aGF0IGl0IGlzIGNvbXBsZXRlLlxyXG4gICAqL1xyXG4gIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbkNvbXBsZXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi1OdWxsaWZpY2F0aW9uOiBTb21lb25lIHdpc2hlcyB0byByZWNvcmQgdGhhdCB0aGUgcmVjb3JkIG9mIGFkbWluaXN0cmF0aW9uIG9mIGEgbWVkaWNhdGlvbiBpcyBpbiBlcnJvciBhbmQgc2hvdWxkIGJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uTnVsbGlmaWNhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tUmVjb3JkaW5nOiBJbmRpY2F0ZXMgdGhhdCBhIG1lZGljYXRpb24gaGFzIGJlZW4gcmVjb3JkZWQgYWdhaW5zdCB0aGUgcGF0aWVudCdzIHJlY29yZC5cclxuICAgKi9cclxuICBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb25SZWNvcmRpbmc6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uLVVwZGF0ZTogVXBkYXRlIGEgTWVkaWNhdGlvbiBBZG1pbmlzdHJhdGlvbiByZWNvcmQuXHJcbiAgICovXHJcbiAgTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uVXBkYXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9ic2VydmF0aW9uLXByb3ZpZGU6IFByb3ZpZGUgYSBzaW1wbGUgb2JzZXJ2YXRpb24gb3IgdXBkYXRlIGEgcHJldmlvdXNseSBwcm92aWRlZCBzaW1wbGUgb2JzZXJ2YXRpb24uXHJcbiAgICovXHJcbiAgT2JzZXJ2YXRpb25Qcm92aWRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBhdGllbnQtbGluazogTm90aWZpY2F0aW9uIHRoYXQgdHdvIHBhdGllbnQgcmVjb3JkcyBhY3R1YWxseSBpZGVudGlmeSB0aGUgc2FtZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFBhdGllbnRMaW5rOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBhdGllbnQtdW5saW5rOiBOb3RpZmljYXRpb24gdGhhdCBwcmV2aW91cyBhZHZpY2UgdGhhdCB0d28gcGF0aWVudCByZWNvcmRzIGNvbmNlcm4gdGhlIHNhbWUgcGF0aWVudCBpcyBub3cgY29uc2lkZXJlZCBpbmNvcnJlY3QuXHJcbiAgICovXHJcbiAgUGF0aWVudFVubGluazogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB2YWx1ZXNldC1leHBhbmQ6IFRoZSBkZWZpbml0aW9uIG9mIGEgdmFsdWUgc2V0IGlzIHVzZWQgdG8gY3JlYXRlIGEgc2ltcGxlIGNvbGxlY3Rpb24gb2YgY29kZXMgc3VpdGFibGUgZm9yIHVzZSBmb3IgZGF0YSBlbnRyeSBvciB2YWxpZGF0aW9uLiBBbiBleHBhbmRlZCB2YWx1ZSBzZXQgd2lsbCBiZSByZXR1cm5lZCwgb3IgYW4gZXJyb3IgbWVzc2FnZS5cclxuICAgKi9cclxuICBWYWx1ZXNldEV4cGFuZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIE9uZSBvZiB0aGUgbWVzc2FnZSBldmVudHMgZGVmaW5lZCBhcyBwYXJ0IG9mIEZISVIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVzc2FnZUV2ZW50c0NvZGluZ3M6TWVzc2FnZUV2ZW50c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWRtaW4tbm90aWZ5OiBOb3RpZmljYXRpb24gb2YgYSBjaGFuZ2UgdG8gYW4gYWRtaW5pc3RyYXRpdmUgcmVzb3VyY2UgKGVpdGhlciBjcmVhdGUgb3IgdXBkYXRlKS4gTm90ZSB0aGF0IHRoZXJlIGlzIG5vIGRlbGV0ZSwgdGhvdWdoIHNvbWUgYWRtaW5pc3RyYXRpdmUgcmVzb3VyY2VzIGhhdmUgc3RhdHVzIG9yIHBlcmlvZCBlbGVtZW50cyBmb3IgdGhpcyB1c2UuXHJcbiAgICovXHJcbiAgQWRtaW5Ob3RpZnk6IHtcclxuICAgIGRpc3BsYXk6IFwiYWRtaW4tbm90aWZ5XCIsXHJcbiAgICBjb2RlOiBcImFkbWluLW5vdGlmeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1ldmVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGVTeXN0ZW0tZXhwYW5kOiBUaGUgZGVmaW5pdGlvbiBvZiBhIGNvZGUgc3lzdGVtIGlzIHVzZWQgdG8gY3JlYXRlIGEgc2ltcGxlIGNvbGxlY3Rpb24gb2YgY29kZXMgc3VpdGFibGUgZm9yIHVzZSBmb3IgZGF0YSBlbnRyeSBvciB2YWxpZGF0aW9uLiBBbiBleHBhbmRlZCBjb2RlIHN5c3RlbSB3aWxsIGJlIHJldHVybmVkLCBvciBhbiBlcnJvciBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIENvZGVTeXN0ZW1FeHBhbmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29kZVN5c3RlbS1leHBhbmRcIixcclxuICAgIGNvZGU6IFwiQ29kZVN5c3RlbS1leHBhbmRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2UtZXZlbnRzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb21tdW5pY2F0aW9uLXJlcXVlc3Q6IE5vdGlmaWNhdGlvbiB0byBjb252ZXkgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgQ29tbXVuaWNhdGlvblJlcXVlc3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiY29tbXVuaWNhdGlvbi1yZXF1ZXN0XCIsXHJcbiAgICBjb2RlOiBcImNvbW11bmljYXRpb24tcmVxdWVzdFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1ldmVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRpYWdub3N0aWNyZXBvcnQtcHJvdmlkZTogUHJvdmlkZSBhIGRpYWdub3N0aWMgcmVwb3J0LCBvciB1cGRhdGUgYSBwcmV2aW91c2x5IHByb3ZpZGVkIGRpYWdub3N0aWMgcmVwb3J0LlxyXG4gICAqL1xyXG4gIERpYWdub3N0aWNyZXBvcnRQcm92aWRlOiB7XHJcbiAgICBkaXNwbGF5OiBcImRpYWdub3N0aWNyZXBvcnQtcHJvdmlkZVwiLFxyXG4gICAgY29kZTogXCJkaWFnbm9zdGljcmVwb3J0LXByb3ZpZGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2UtZXZlbnRzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tQ29tcGxldGU6IENoYW5nZSB0aGUgc3RhdHVzIG9mIGEgTWVkaWNhdGlvbiBBZG1pbmlzdHJhdGlvbiB0byBzaG93IHRoYXQgaXQgaXMgY29tcGxldGUuXHJcbiAgICovXHJcbiAgTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uQ29tcGxldGU6IHtcclxuICAgIGRpc3BsYXk6IFwiTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uLUNvbXBsZXRlXCIsXHJcbiAgICBjb2RlOiBcIk1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi1Db21wbGV0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1ldmVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi1OdWxsaWZpY2F0aW9uOiBTb21lb25lIHdpc2hlcyB0byByZWNvcmQgdGhhdCB0aGUgcmVjb3JkIG9mIGFkbWluaXN0cmF0aW9uIG9mIGEgbWVkaWNhdGlvbiBpcyBpbiBlcnJvciBhbmQgc2hvdWxkIGJlIGlnbm9yZWQuXHJcbiAgICovXHJcbiAgTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uTnVsbGlmaWNhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tTnVsbGlmaWNhdGlvblwiLFxyXG4gICAgY29kZTogXCJNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tTnVsbGlmaWNhdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1ldmVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi1SZWNvcmRpbmc6IEluZGljYXRlcyB0aGF0IGEgbWVkaWNhdGlvbiBoYXMgYmVlbiByZWNvcmRlZCBhZ2FpbnN0IHRoZSBwYXRpZW50J3MgcmVjb3JkLlxyXG4gICAqL1xyXG4gIE1lZGljYXRpb25BZG1pbmlzdHJhdGlvblJlY29yZGluZzoge1xyXG4gICAgZGlzcGxheTogXCJNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tUmVjb3JkaW5nXCIsXHJcbiAgICBjb2RlOiBcIk1lZGljYXRpb25BZG1pbmlzdHJhdGlvbi1SZWNvcmRpbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2UtZXZlbnRzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tVXBkYXRlOiBVcGRhdGUgYSBNZWRpY2F0aW9uIEFkbWluaXN0cmF0aW9uIHJlY29yZC5cclxuICAgKi9cclxuICBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb25VcGRhdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uLVVwZGF0ZVwiLFxyXG4gICAgY29kZTogXCJNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24tVXBkYXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZXNzYWdlLWV2ZW50c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb2JzZXJ2YXRpb24tcHJvdmlkZTogUHJvdmlkZSBhIHNpbXBsZSBvYnNlcnZhdGlvbiBvciB1cGRhdGUgYSBwcmV2aW91c2x5IHByb3ZpZGVkIHNpbXBsZSBvYnNlcnZhdGlvbi5cclxuICAgKi9cclxuICBPYnNlcnZhdGlvblByb3ZpZGU6IHtcclxuICAgIGRpc3BsYXk6IFwib2JzZXJ2YXRpb24tcHJvdmlkZVwiLFxyXG4gICAgY29kZTogXCJvYnNlcnZhdGlvbi1wcm92aWRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZXNzYWdlLWV2ZW50c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGF0aWVudC1saW5rOiBOb3RpZmljYXRpb24gdGhhdCB0d28gcGF0aWVudCByZWNvcmRzIGFjdHVhbGx5IGlkZW50aWZ5IHRoZSBzYW1lIHBhdGllbnQuXHJcbiAgICovXHJcbiAgUGF0aWVudExpbms6IHtcclxuICAgIGRpc3BsYXk6IFwicGF0aWVudC1saW5rXCIsXHJcbiAgICBjb2RlOiBcInBhdGllbnQtbGlua1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1ldmVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhdGllbnQtdW5saW5rOiBOb3RpZmljYXRpb24gdGhhdCBwcmV2aW91cyBhZHZpY2UgdGhhdCB0d28gcGF0aWVudCByZWNvcmRzIGNvbmNlcm4gdGhlIHNhbWUgcGF0aWVudCBpcyBub3cgY29uc2lkZXJlZCBpbmNvcnJlY3QuXHJcbiAgICovXHJcbiAgUGF0aWVudFVubGluazoge1xyXG4gICAgZGlzcGxheTogXCJwYXRpZW50LXVubGlua1wiLFxyXG4gICAgY29kZTogXCJwYXRpZW50LXVubGlua1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1ldmVudHNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHZhbHVlc2V0LWV4cGFuZDogVGhlIGRlZmluaXRpb24gb2YgYSB2YWx1ZSBzZXQgaXMgdXNlZCB0byBjcmVhdGUgYSBzaW1wbGUgY29sbGVjdGlvbiBvZiBjb2RlcyBzdWl0YWJsZSBmb3IgdXNlIGZvciBkYXRhIGVudHJ5IG9yIHZhbGlkYXRpb24uIEFuIGV4cGFuZGVkIHZhbHVlIHNldCB3aWxsIGJlIHJldHVybmVkLCBvciBhbiBlcnJvciBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIFZhbHVlc2V0RXhwYW5kOiB7XHJcbiAgICBkaXNwbGF5OiBcInZhbHVlc2V0LWV4cGFuZFwiLFxyXG4gICAgY29kZTogXCJ2YWx1ZXNldC1leHBhbmRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2UtZXZlbnRzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19