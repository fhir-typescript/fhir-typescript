// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-type|20150326
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export const AuditEventTypeCodings = {
    /**
     * 110100: Audit event: Application Activity has taken place
     */
    ApplicationActivity: {
        display: "Application Activity",
        code: "110100",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110101: Audit event: Audit Log has been used
     */
    AuditLogUsed: {
        display: "Audit Log Used",
        code: "110101",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110102: Audit event: Storage of DICOM Instances has begun
     */
    BeginTransferringDICOMInstances: {
        display: "Begin Transferring DICOM Instances",
        code: "110102",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110103: Audit event: DICOM Instances have been created, read, updated, or deleted
     */
    DICOMInstancesAccessed: {
        display: "DICOM Instances Accessed",
        code: "110103",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110104: Audit event: Storage of DICOM Instances has been completed
     */
    DICOMInstancesTransferred: {
        display: "DICOM Instances Transferred",
        code: "110104",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110105: Audit event: Entire Study has been deleted
     */
    DICOMStudyDeleted: {
        display: "DICOM Study Deleted",
        code: "110105",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110106: Audit event: Data has been exported out of the system
     */
    Export: {
        display: "Export",
        code: "110106",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110107: Audit event: Data has been imported into the system
     */
    Import: {
        display: "Import",
        code: "110107",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110108: Audit event: System has joined or left network
     */
    NetworkEntry: {
        display: "Network Entry",
        code: "110108",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110109: Audit event: Order has been created, read, updated or deleted
     */
    OrderRecord: {
        display: "Order Record",
        code: "110109",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110110: Audit event: Patient Record has been created, read, updated, or deleted
     */
    PatientRecord: {
        display: "Patient Record",
        code: "110110",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110111: Audit event: Procedure Record has been created, read, updated, or deleted
     */
    ProcedureRecord: {
        display: "Procedure Record",
        code: "110111",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110112: Audit event: Query has been made
     */
    Query: {
        display: "Query",
        code: "110112",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110113: Audit event: Security Alert has been raised
     */
    SecurityAlert: {
        display: "Security Alert",
        code: "110113",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110114: Audit event: User Authentication has been attempted
     */
    UserAuthentication: {
        display: "User Authentication",
        code: "110114",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    RESTfulOperation: {
        display: "RESTful Operation",
        code: "rest",
        system: "http://hl7.org/fhir/audit-event-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRFdmVudFR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BdWRpdEV2ZW50VHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsd0VBQXdFO0FBMEV4RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsK0JBQStCLEVBQUU7UUFDL0IsT0FBTyxFQUFFLG9DQUFvQztRQUM3QyxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILHNCQUFzQixFQUFFO1FBQ3RCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCx5QkFBeUIsRUFBRTtRQUN6QixPQUFPLEVBQUUsNkJBQTZCO1FBQ3RDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILGFBQWEsRUFBRTtRQUNiLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxrQkFBa0IsRUFBRTtRQUNsQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUU7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxzQ0FBc0M7S0FDL0M7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2F1ZGl0LWV2ZW50LXR5cGV8MjAxNTAzMjZcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBFdmVudCBUeXBlcyBmb3IgQXVkaXQgRXZlbnRzIC0gZGVmaW5lZCBieSBESUNPTSB3aXRoIHNvbWUgRkhJUiBzcGVjaWZpYyBhZGRpdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdWRpdEV2ZW50VHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogMTEwMTAwOiBBdWRpdCBldmVudDogQXBwbGljYXRpb24gQWN0aXZpdHkgaGFzIHRha2VuIHBsYWNlXHJcbiAgICovXHJcbiAgQXBwbGljYXRpb25BY3Rpdml0eTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMDE6IEF1ZGl0IGV2ZW50OiBBdWRpdCBMb2cgaGFzIGJlZW4gdXNlZFxyXG4gICAqL1xyXG4gIEF1ZGl0TG9nVXNlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMDI6IEF1ZGl0IGV2ZW50OiBTdG9yYWdlIG9mIERJQ09NIEluc3RhbmNlcyBoYXMgYmVndW5cclxuICAgKi9cclxuICBCZWdpblRyYW5zZmVycmluZ0RJQ09NSW5zdGFuY2VzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEwMzogQXVkaXQgZXZlbnQ6IERJQ09NIEluc3RhbmNlcyBoYXZlIGJlZW4gY3JlYXRlZCwgcmVhZCwgdXBkYXRlZCwgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIERJQ09NSW5zdGFuY2VzQWNjZXNzZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTA0OiBBdWRpdCBldmVudDogU3RvcmFnZSBvZiBESUNPTSBJbnN0YW5jZXMgaGFzIGJlZW4gY29tcGxldGVkXHJcbiAgICovXHJcbiAgRElDT01JbnN0YW5jZXNUcmFuc2ZlcnJlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMDU6IEF1ZGl0IGV2ZW50OiBFbnRpcmUgU3R1ZHkgaGFzIGJlZW4gZGVsZXRlZFxyXG4gICAqL1xyXG4gIERJQ09NU3R1ZHlEZWxldGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEwNjogQXVkaXQgZXZlbnQ6IERhdGEgaGFzIGJlZW4gZXhwb3J0ZWQgb3V0IG9mIHRoZSBzeXN0ZW1cclxuICAgKi9cclxuICBFeHBvcnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTA3OiBBdWRpdCBldmVudDogRGF0YSBoYXMgYmVlbiBpbXBvcnRlZCBpbnRvIHRoZSBzeXN0ZW1cclxuICAgKi9cclxuICBJbXBvcnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTA4OiBBdWRpdCBldmVudDogU3lzdGVtIGhhcyBqb2luZWQgb3IgbGVmdCBuZXR3b3JrXHJcbiAgICovXHJcbiAgTmV0d29ya0VudHJ5OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEwOTogQXVkaXQgZXZlbnQ6IE9yZGVyIGhhcyBiZWVuIGNyZWF0ZWQsIHJlYWQsIHVwZGF0ZWQgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIE9yZGVyUmVjb3JkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDExMDogQXVkaXQgZXZlbnQ6IFBhdGllbnQgUmVjb3JkIGhhcyBiZWVuIGNyZWF0ZWQsIHJlYWQsIHVwZGF0ZWQsIG9yIGRlbGV0ZWRcclxuICAgKi9cclxuICBQYXRpZW50UmVjb3JkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDExMTogQXVkaXQgZXZlbnQ6IFByb2NlZHVyZSBSZWNvcmQgaGFzIGJlZW4gY3JlYXRlZCwgcmVhZCwgdXBkYXRlZCwgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIFByb2NlZHVyZVJlY29yZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMTI6IEF1ZGl0IGV2ZW50OiBRdWVyeSBoYXMgYmVlbiBtYWRlXHJcbiAgICovXHJcbiAgUXVlcnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTEzOiBBdWRpdCBldmVudDogU2VjdXJpdHkgQWxlcnQgaGFzIGJlZW4gcmFpc2VkXHJcbiAgICovXHJcbiAgU2VjdXJpdHlBbGVydDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMTQ6IEF1ZGl0IGV2ZW50OiBVc2VyIEF1dGhlbnRpY2F0aW9uIGhhcyBiZWVuIGF0dGVtcHRlZFxyXG4gICAqL1xyXG4gIFVzZXJBdXRoZW50aWNhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXN0OiBBdWRpdCBFdmVudDogRXhlY3V0aW9uIG9mIGEgUkVTVGZ1bCBvcGVyYXRpb24gYXMgZGVmaW5lZCBieSBGSElSLlxyXG4gICAqL1xyXG4gIFJFU1RmdWxPcGVyYXRpb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVudCBUeXBlcyBmb3IgQXVkaXQgRXZlbnRzIC0gZGVmaW5lZCBieSBESUNPTSB3aXRoIHNvbWUgRkhJUiBzcGVjaWZpYyBhZGRpdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQXVkaXRFdmVudFR5cGVDb2RpbmdzOkF1ZGl0RXZlbnRUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiAxMTAxMDA6IEF1ZGl0IGV2ZW50OiBBcHBsaWNhdGlvbiBBY3Rpdml0eSBoYXMgdGFrZW4gcGxhY2VcclxuICAgKi9cclxuICBBcHBsaWNhdGlvbkFjdGl2aXR5OiB7XHJcbiAgICBkaXNwbGF5OiBcIkFwcGxpY2F0aW9uIEFjdGl2aXR5XCIsXHJcbiAgICBjb2RlOiBcIjExMDEwMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMDE6IEF1ZGl0IGV2ZW50OiBBdWRpdCBMb2cgaGFzIGJlZW4gdXNlZFxyXG4gICAqL1xyXG4gIEF1ZGl0TG9nVXNlZDoge1xyXG4gICAgZGlzcGxheTogXCJBdWRpdCBMb2cgVXNlZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMDFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTAyOiBBdWRpdCBldmVudDogU3RvcmFnZSBvZiBESUNPTSBJbnN0YW5jZXMgaGFzIGJlZ3VuXHJcbiAgICovXHJcbiAgQmVnaW5UcmFuc2ZlcnJpbmdESUNPTUluc3RhbmNlczoge1xyXG4gICAgZGlzcGxheTogXCJCZWdpbiBUcmFuc2ZlcnJpbmcgRElDT00gSW5zdGFuY2VzXCIsXHJcbiAgICBjb2RlOiBcIjExMDEwMlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMDM6IEF1ZGl0IGV2ZW50OiBESUNPTSBJbnN0YW5jZXMgaGF2ZSBiZWVuIGNyZWF0ZWQsIHJlYWQsIHVwZGF0ZWQsIG9yIGRlbGV0ZWRcclxuICAgKi9cclxuICBESUNPTUluc3RhbmNlc0FjY2Vzc2VkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRJQ09NIEluc3RhbmNlcyBBY2Nlc3NlZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMDNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTA0OiBBdWRpdCBldmVudDogU3RvcmFnZSBvZiBESUNPTSBJbnN0YW5jZXMgaGFzIGJlZW4gY29tcGxldGVkXHJcbiAgICovXHJcbiAgRElDT01JbnN0YW5jZXNUcmFuc2ZlcnJlZDoge1xyXG4gICAgZGlzcGxheTogXCJESUNPTSBJbnN0YW5jZXMgVHJhbnNmZXJyZWRcIixcclxuICAgIGNvZGU6IFwiMTEwMTA0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEwNTogQXVkaXQgZXZlbnQ6IEVudGlyZSBTdHVkeSBoYXMgYmVlbiBkZWxldGVkXHJcbiAgICovXHJcbiAgRElDT01TdHVkeURlbGV0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRElDT00gU3R1ZHkgRGVsZXRlZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMDVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTA2OiBBdWRpdCBldmVudDogRGF0YSBoYXMgYmVlbiBleHBvcnRlZCBvdXQgb2YgdGhlIHN5c3RlbVxyXG4gICAqL1xyXG4gIEV4cG9ydDoge1xyXG4gICAgZGlzcGxheTogXCJFeHBvcnRcIixcclxuICAgIGNvZGU6IFwiMTEwMTA2XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEwNzogQXVkaXQgZXZlbnQ6IERhdGEgaGFzIGJlZW4gaW1wb3J0ZWQgaW50byB0aGUgc3lzdGVtXHJcbiAgICovXHJcbiAgSW1wb3J0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkltcG9ydFwiLFxyXG4gICAgY29kZTogXCIxMTAxMDdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTA4OiBBdWRpdCBldmVudDogU3lzdGVtIGhhcyBqb2luZWQgb3IgbGVmdCBuZXR3b3JrXHJcbiAgICovXHJcbiAgTmV0d29ya0VudHJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIk5ldHdvcmsgRW50cnlcIixcclxuICAgIGNvZGU6IFwiMTEwMTA4XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEwOTogQXVkaXQgZXZlbnQ6IE9yZGVyIGhhcyBiZWVuIGNyZWF0ZWQsIHJlYWQsIHVwZGF0ZWQgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIE9yZGVyUmVjb3JkOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9yZGVyIFJlY29yZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMDlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTEwOiBBdWRpdCBldmVudDogUGF0aWVudCBSZWNvcmQgaGFzIGJlZW4gY3JlYXRlZCwgcmVhZCwgdXBkYXRlZCwgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIFBhdGllbnRSZWNvcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aWVudCBSZWNvcmRcIixcclxuICAgIGNvZGU6IFwiMTEwMTEwXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDExMTogQXVkaXQgZXZlbnQ6IFByb2NlZHVyZSBSZWNvcmQgaGFzIGJlZW4gY3JlYXRlZCwgcmVhZCwgdXBkYXRlZCwgb3IgZGVsZXRlZFxyXG4gICAqL1xyXG4gIFByb2NlZHVyZVJlY29yZDoge1xyXG4gICAgZGlzcGxheTogXCJQcm9jZWR1cmUgUmVjb3JkXCIsXHJcbiAgICBjb2RlOiBcIjExMDExMVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMTI6IEF1ZGl0IGV2ZW50OiBRdWVyeSBoYXMgYmVlbiBtYWRlXHJcbiAgICovXHJcbiAgUXVlcnk6IHtcclxuICAgIGRpc3BsYXk6IFwiUXVlcnlcIixcclxuICAgIGNvZGU6IFwiMTEwMTEyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDExMzogQXVkaXQgZXZlbnQ6IFNlY3VyaXR5IEFsZXJ0IGhhcyBiZWVuIHJhaXNlZFxyXG4gICAqL1xyXG4gIFNlY3VyaXR5QWxlcnQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU2VjdXJpdHkgQWxlcnRcIixcclxuICAgIGNvZGU6IFwiMTEwMTEzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDExNDogQXVkaXQgZXZlbnQ6IFVzZXIgQXV0aGVudGljYXRpb24gaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgVXNlckF1dGhlbnRpY2F0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVzZXIgQXV0aGVudGljYXRpb25cIixcclxuICAgIGNvZGU6IFwiMTEwMTE0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlc3Q6IEF1ZGl0IEV2ZW50OiBFeGVjdXRpb24gb2YgYSBSRVNUZnVsIG9wZXJhdGlvbiBhcyBkZWZpbmVkIGJ5IEZISVIuXHJcbiAgICovXHJcbiAgUkVTVGZ1bE9wZXJhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJSRVNUZnVsIE9wZXJhdGlvblwiLFxyXG4gICAgY29kZTogXCJyZXN0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9hdWRpdC1ldmVudC10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19