// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-status-reason|4.3.0
/**
 * MedicationRequest Status Reason Codes
 */
export const MedicationrequestStatusReasonCodes = {
    /**
     * altchoice: This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    TryAnotherTreatmentFirst: "altchoice",
    /**
     * clarif: Clarification is required before the order can be acted upon.
     */
    PrescriptionRequiresClarification: "clarif",
    /**
     * drughigh: The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    DrugLevelTooHigh: "drughigh",
    /**
     * hospadm: The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    AdmissionToHospital: "hospadm",
    /**
     * labint: The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    LabInterferenceIssues: "labint",
    /**
     * non-avail: Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    PatientNotAvailable: "non-avail",
    /**
     * preg: The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    ParentIsPregnantBreastFeeding: "preg",
    /**
     * salg: The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    Allergy: "salg",
    /**
     * sddi: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    DrugInteractsWithAnotherDrug: "sddi",
    /**
     * sdupther: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    DuplicateTherapy: "sdupther",
    /**
     * sintol: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    SuspectedIntolerance: "sintol",
    /**
     * surg: The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    PatientScheduledForSurgery: "surg",
    /**
     * washout: The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    WaitingForOldDrugToWashOut: "washout",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvbnJlcXVlc3RTdGF0dXNSZWFzb25Db2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVkaWNhdGlvbnJlcXVlc3RTdGF0dXNSZWFzb25Db2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxvRkFBb0Y7QUFFcEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBRztJQUNoRDs7T0FFRztJQUNILHdCQUF3QixFQUFFLFdBQVc7SUFDckM7O09BRUc7SUFDSCxpQ0FBaUMsRUFBRSxRQUFRO0lBQzNDOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsVUFBVTtJQUM1Qjs7T0FFRztJQUNILG1CQUFtQixFQUFFLFNBQVM7SUFDOUI7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSxRQUFRO0lBQy9COztPQUVHO0lBQ0gsbUJBQW1CLEVBQUUsV0FBVztJQUNoQzs7T0FFRztJQUNILDZCQUE2QixFQUFFLE1BQU07SUFDckM7O09BRUc7SUFDSCxPQUFPLEVBQUUsTUFBTTtJQUNmOztPQUVHO0lBQ0gsNEJBQTRCLEVBQUUsTUFBTTtJQUNwQzs7T0FFRztJQUNILGdCQUFnQixFQUFFLFVBQVU7SUFDNUI7O09BRUc7SUFDSCxvQkFBb0IsRUFBRSxRQUFRO0lBQzlCOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQzs7T0FFRztJQUNILDBCQUEwQixFQUFFLFNBQVM7Q0FDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVkaWNhdGlvbnJlcXVlc3Qtc3RhdHVzLXJlYXNvbnw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIE1lZGljYXRpb25SZXF1ZXN0IFN0YXR1cyBSZWFzb24gQ29kZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBNZWRpY2F0aW9ucmVxdWVzdFN0YXR1c1JlYXNvbkNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFsdGNob2ljZTogVGhpcyB0aGVyYXB5IGhhcyBiZWVuIG9yZGVyZWQgYXMgYSBiYWNrdXAgdG8gYSBwcmVmZXJyZWQgdGhlcmFweS4gVGhpcyBvcmRlciB3aWxsIGJlIHJlbGVhc2VkIHdoZW4gYW5kIGlmIHRoZSBwcmVmZXJyZWQgdGhlcmFweSBpcyB1bnN1Y2Nlc3NmdWwuXHJcbiAgICovXHJcbiAgVHJ5QW5vdGhlclRyZWF0bWVudEZpcnN0OiBcImFsdGNob2ljZVwiLFxyXG4gIC8qKlxyXG4gICAqIGNsYXJpZjogQ2xhcmlmaWNhdGlvbiBpcyByZXF1aXJlZCBiZWZvcmUgdGhlIG9yZGVyIGNhbiBiZSBhY3RlZCB1cG9uLlxyXG4gICAqL1xyXG4gIFByZXNjcmlwdGlvblJlcXVpcmVzQ2xhcmlmaWNhdGlvbjogXCJjbGFyaWZcIixcclxuICAvKipcclxuICAgKiBkcnVnaGlnaDogVGhlIGN1cnJlbnQgbGV2ZWwgb2YgdGhlIG1lZGljYXRpb24gaW4gdGhlIHBhdGllbnQncyBzeXN0ZW0gaXMgdG9vIGhpZ2guIFRoZSBtZWRpY2F0aW9uIGlzIHN1c3BlbmRlZCB0byBhbGxvdyB0aGUgbGV2ZWwgdG8gc3Vic2lkZSB0byBhIHNhZmVyIGxldmVsLlxyXG4gICAqL1xyXG4gIERydWdMZXZlbFRvb0hpZ2g6IFwiZHJ1Z2hpZ2hcIixcclxuICAvKipcclxuICAgKiBob3NwYWRtOiBUaGUgcGF0aWVudCBoYXMgYmVlbiBhZG1pdHRlZCB0byBhIGNhcmUgZmFjaWxpdHkgYW5kIHRoZWlyIGNvbW11bml0eSBtZWRpY2F0aW9ucyBhcmUgc3VzcGVuZGVkIHVudGlsIGhvc3BpdGFsIGRpc2NoYXJnZS5cclxuICAgKi9cclxuICBBZG1pc3Npb25Ub0hvc3BpdGFsOiBcImhvc3BhZG1cIixcclxuICAvKipcclxuICAgKiBsYWJpbnQ6IFRoZSB0aGVyYXB5IHdvdWxkIGludGVyZmVyZSB3aXRoIGEgcGxhbm5lZCBsYWIgdGVzdCBhbmQgdGhlIHRoZXJhcHkgaXMgYmVpbmcgd2l0aGRyYXduIHVudGlsIHRoZSB0ZXN0IGlzIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBMYWJJbnRlcmZlcmVuY2VJc3N1ZXM6IFwibGFiaW50XCIsXHJcbiAgLyoqXHJcbiAgICogbm9uLWF2YWlsOiBQYXRpZW50IG5vdCBhdmFpbGFibGUgZm9yIGEgcGVyaW9kIG9mIHRpbWUgZHVlIHRvIGEgc2NoZWR1bGVkIHRoZXJhcHksIGxlYXZlIG9mIGFic2VuY2Ugb3Igb3RoZXIgcmVhc29uLlxyXG4gICAqL1xyXG4gIFBhdGllbnROb3RBdmFpbGFibGU6IFwibm9uLWF2YWlsXCIsXHJcbiAgLyoqXHJcbiAgICogcHJlZzogVGhlIHBhdGllbnQgaXMgcHJlZ25hbnQgb3IgYnJlYXN0IGZlZWRpbmcuIFRoZSB0aGVyYXB5IHdpbGwgYmUgcmVzdW1lZCB3aGVuIHRoZSBwcmVnbmFuY3kgaXMgY29tcGxldGUgYW5kIHRoZSBwYXRpZW50IGlzIG5vIGxvbmdlciBicmVhc3RmZWVkaW5nLlxyXG4gICAqL1xyXG4gIFBhcmVudElzUHJlZ25hbnRCcmVhc3RGZWVkaW5nOiBcInByZWdcIixcclxuICAvKipcclxuICAgKiBzYWxnOiBUaGUgcGF0aWVudCBpcyBiZWxpZXZlZCB0byBiZSBhbGxlcmdpYyB0byBhIHN1YnN0YW5jZSB0aGF0IGlzIHBhcnQgb2YgdGhlIHRoZXJhcHkgYW5kIHRoZSB0aGVyYXB5IGlzIGJlaW5nIHRlbXBvcmFyaWx5IHdpdGhkcmF3biB0byBjb25maXJtLlxyXG4gICAqL1xyXG4gIEFsbGVyZ3k6IFwic2FsZ1wiLFxyXG4gIC8qKlxyXG4gICAqIHNkZGk6IFRoZSBkcnVnIGludGVyYWN0cyB3aXRoIGEgc2hvcnQtdGVybSB0cmVhdG1lbnQgdGhhdCBpcyBtb3JlIHVyZ2VudGx5IHJlcXVpcmVkLiBUaGlzIG9yZGVyIHdpbGwgYmUgcmVzdW1lZCB3aGVuIHRoZSBzaG9ydC10ZXJtIHRyZWF0bWVudCBpcyBjb21wbGV0ZS5cclxuICAgKi9cclxuICBEcnVnSW50ZXJhY3RzV2l0aEFub3RoZXJEcnVnOiBcInNkZGlcIixcclxuICAvKipcclxuICAgKiBzZHVwdGhlcjogVGhlIGRydWcgaW50ZXJhY3RzIHdpdGggYSBzaG9ydC10ZXJtIHRyZWF0bWVudCB0aGF0IGlzIG1vcmUgdXJnZW50bHkgcmVxdWlyZWQuIFRoaXMgb3JkZXIgd2lsbCBiZSByZXN1bWVkIHdoZW4gdGhlIHNob3J0LXRlcm0gdHJlYXRtZW50IGlzIGNvbXBsZXRlLlxyXG4gICAqL1xyXG4gIER1cGxpY2F0ZVRoZXJhcHk6IFwic2R1cHRoZXJcIixcclxuICAvKipcclxuICAgKiBzaW50b2w6IFRoZSBkcnVnIGludGVyYWN0cyB3aXRoIGEgc2hvcnQtdGVybSB0cmVhdG1lbnQgdGhhdCBpcyBtb3JlIHVyZ2VudGx5IHJlcXVpcmVkLiBUaGlzIG9yZGVyIHdpbGwgYmUgcmVzdW1lZCB3aGVuIHRoZSBzaG9ydC10ZXJtIHRyZWF0bWVudCBpcyBjb21wbGV0ZS5cclxuICAgKi9cclxuICBTdXNwZWN0ZWRJbnRvbGVyYW5jZTogXCJzaW50b2xcIixcclxuICAvKipcclxuICAgKiBzdXJnOiBUaGUgZHJ1ZyBpcyBjb250cmFpbmRpY2F0ZWQgZm9yIHBhdGllbnRzIHJlY2VpdmluZyBzdXJnZXJ5IGFuZCB0aGUgcGF0aWVudCBpcyBzY2hlZHVsZWQgdG8gYmUgYWRtaXR0ZWQgZm9yIHN1cmdlcnkgaW4gdGhlIG5lYXIgZnV0dXJlLiBUaGUgZHJ1ZyB3aWxsIGJlIHJlc3VtZWQgd2hlbiB0aGUgcGF0aWVudCBoYXMgc3VmZmljaWVudGx5IHJlY292ZXJlZCBmcm9tIHRoZSBzdXJnZXJ5LlxyXG4gICAqL1xyXG4gIFBhdGllbnRTY2hlZHVsZWRGb3JTdXJnZXJ5OiBcInN1cmdcIixcclxuICAvKipcclxuICAgKiB3YXNob3V0OiBUaGUgcGF0aWVudCB3YXMgcHJldmlvdXNseSByZWNlaXZpbmcgYSBtZWRpY2F0aW9uIGNvbnRyYWluZGljYXRlZCB3aXRoIHRoZSBjdXJyZW50IG1lZGljYXRpb24uIFRoZSBjdXJyZW50IG1lZGljYXRpb24gd2lsbCByZW1haW4gb24gaG9sZCB1bnRpbCB0aGUgcHJpb3IgbWVkaWNhdGlvbiBoYXMgYmVlbiBjbGVhbnNlZCBmcm9tIHRoZWlyIHN5c3RlbS5cclxuICAgKi9cclxuICBXYWl0aW5nRm9yT2xkRHJ1Z1RvV2FzaE91dDogXCJ3YXNob3V0XCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogTWVkaWNhdGlvblJlcXVlc3QgU3RhdHVzIFJlYXNvbiBDb2Rlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVkaWNhdGlvbnJlcXVlc3RTdGF0dXNSZWFzb25Db2RlVHlwZSA9IHR5cGVvZiBNZWRpY2F0aW9ucmVxdWVzdFN0YXR1c1JlYXNvbkNvZGVzW2tleW9mIHR5cGVvZiBNZWRpY2F0aW9ucmVxdWVzdFN0YXR1c1JlYXNvbkNvZGVzXTtcclxuIl19