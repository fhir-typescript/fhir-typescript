/**
 * One of the message events defined as part of FHIR.
 */
export declare const MessageEventsCodes: {
    /**
     * admin-notify: Notification of a change to an administrative resource (either create or update). Note that there is no delete, though some administrative resources have status or period elements for this use.
     */
    readonly AdminNotify: "admin-notify";
    /**
     * CodeSystem-expand: The definition of a code system is used to create a simple collection of codes suitable for use for data entry or validation. An expanded code system will be returned, or an error message.
     */
    readonly CodeSystemExpand: "CodeSystem-expand";
    /**
     * communication-request: Notification to convey information.
     */
    readonly CommunicationRequest: "communication-request";
    /**
     * diagnosticreport-provide: Provide a diagnostic report, or update a previously provided diagnostic report.
     */
    readonly DiagnosticreportProvide: "diagnosticreport-provide";
    /**
     * MedicationAdministration-Complete: Change the status of a Medication Administration to show that it is complete.
     */
    readonly MedicationAdministrationComplete: "MedicationAdministration-Complete";
    /**
     * MedicationAdministration-Nullification: Someone wishes to record that the record of administration of a medication is in error and should be ignored.
     */
    readonly MedicationAdministrationNullification: "MedicationAdministration-Nullification";
    /**
     * MedicationAdministration-Recording: Indicates that a medication has been recorded against the patient's record.
     */
    readonly MedicationAdministrationRecording: "MedicationAdministration-Recording";
    /**
     * MedicationAdministration-Update: Update a Medication Administration record.
     */
    readonly MedicationAdministrationUpdate: "MedicationAdministration-Update";
    /**
     * observation-provide: Provide a simple observation or update a previously provided simple observation.
     */
    readonly ObservationProvide: "observation-provide";
    /**
     * patient-link: Notification that two patient records actually identify the same patient.
     */
    readonly PatientLink: "patient-link";
    /**
     * patient-unlink: Notification that previous advice that two patient records concern the same patient is now considered incorrect.
     */
    readonly PatientUnlink: "patient-unlink";
    /**
     * valueset-expand: The definition of a value set is used to create a simple collection of codes suitable for use for data entry or validation. An expanded value set will be returned, or an error message.
     */
    readonly ValuesetExpand: "valueset-expand";
};
/**
 * One of the message events defined as part of FHIR.
 */
export declare type MessageEventsCodeType = typeof MessageEventsCodes[keyof typeof MessageEventsCodes];
//# sourceMappingURL=MessageEventsCodes.d.ts.map