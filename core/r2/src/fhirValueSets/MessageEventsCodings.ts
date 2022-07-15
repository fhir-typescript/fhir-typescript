// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-events|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * One of the message events defined as part of FHIR.
 */
export type MessageEventsCodingType = {
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
}

/**
 * One of the message events defined as part of FHIR.
 */
export const MessageEventsCodings:MessageEventsCodingType = {
  /**
   * admin-notify: Notification of a change to an administrative resource (either create or update). Note that there is no delete, though some administrative resources have status or period elements for this use.
   */
  AdminNotify: {
    display: "admin-notify",
    code: "admin-notify",
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
} as const;
