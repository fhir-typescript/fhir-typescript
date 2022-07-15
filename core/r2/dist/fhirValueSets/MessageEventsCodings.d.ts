import { CodingArgs } from '../fhir/Coding.js';
/**
 * One of the message events defined as part of FHIR.
 */
export declare type MessageEventsCodingType = {
    /**
     * admin-notify: Notification of a change to an administrative resource (either create or update). Note that there is no delete, though some administrative resources have status or period elements for this use.
     */
    AdminNotify: CodingArgs;
    /**
     * diagnosticreport-provide: Provide a diagnostic report, or update a previously provided diagnostic report.
     */
    DiagnosticreportProvide: CodingArgs;
    /**
     * MedicationAdministration-Complete: Change the status of a Medication Administration to show that it is complete.
     */
    MedicationAdministrationComplete: CodingArgs;
    /**
     * MedicationAdministration-Nullification: Someone wishes to record that the record of administration of a medication is in error and should be ignored.
     */
    MedicationAdministrationNullification: CodingArgs;
    /**
     * MedicationAdministration-Recording: Indicates that a medication has been recorded against the patient's record.
     */
    MedicationAdministrationRecording: CodingArgs;
    /**
     * MedicationAdministration-Update: Update a Medication Administration record.
     */
    MedicationAdministrationUpdate: CodingArgs;
    /**
     * observation-provide: Provide a simple observation or update a previously provided simple observation.
     */
    ObservationProvide: CodingArgs;
    /**
     * patient-link: Notification that two patient records actually identify the same patient.
     */
    PatientLink: CodingArgs;
    /**
     * patient-unlink: Notification that previous advice that two patient records concern the same patient is now considered incorrect.
     */
    PatientUnlink: CodingArgs;
    /**
     * valueset-expand: The definition of a value set is used to create a simple collection of codes suitable for use for data entry or validation. An expanded value set will be returned, or an error message.
     */
    ValuesetExpand: CodingArgs;
};
/**
 * One of the message events defined as part of FHIR.
 */
export declare const MessageEventsCodings: MessageEventsCodingType;
//# sourceMappingURL=MessageEventsCodings.d.ts.map