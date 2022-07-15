// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export type AuditEventTypeCodingType = {
  /**
   * 110100: Audit event: Application Activity has taken place
   */
  ApplicationActivity: CodingArgs;
  /**
   * 110101: Audit event: Audit Log has been used
   */
  AuditLogUsed: CodingArgs;
  /**
   * 110102: Audit event: Storage of DICOM Instances has begun
   */
  BeginTransferringDICOMInstances: CodingArgs;
  /**
   * 110103: Audit event: DICOM Instances have been created, read, updated, or deleted
   */
  DICOMInstancesAccessed: CodingArgs;
  /**
   * 110104: Audit event: Storage of DICOM Instances has been completed
   */
  DICOMInstancesTransferred: CodingArgs;
  /**
   * 110105: Audit event: Entire Study has been deleted
   */
  DICOMStudyDeleted: CodingArgs;
  /**
   * 110106: Audit event: Data has been exported out of the system
   */
  Export: CodingArgs;
  /**
   * 110107: Audit event: Data has been imported into the system
   */
  Import: CodingArgs;
  /**
   * 110108: Audit event: System has joined or left network
   */
  NetworkEntry: CodingArgs;
  /**
   * 110109: Audit event: Order has been created, read, updated or deleted
   */
  OrderRecord: CodingArgs;
  /**
   * 110110: Audit event: Patient Record has been created, read, updated, or deleted
   */
  PatientRecord: CodingArgs;
  /**
   * 110111: Audit event: Procedure Record has been created, read, updated, or deleted
   */
  ProcedureRecord: CodingArgs;
  /**
   * 110112: Audit event: Query has been made
   */
  Query: CodingArgs;
  /**
   * 110113: Audit event: Security Alert has been raised
   */
  SecurityAlert: CodingArgs;
  /**
   * 110114: Audit event: User Authentication has been attempted
   */
  UserAuthentication: CodingArgs;
  /**
   * access: Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
   */
  AccessViewRecordLifecycleEvent: CodingArgs;
  /**
   * amend: Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
   */
  AmendUpdateRecordLifecycleEvent: CodingArgs;
  /**
   * archive: Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
   */
  ArchiveRecordLifecycleEvent: CodingArgs;
  /**
   * attest: Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
   */
  AttestRecordLifecycleEvent: CodingArgs;
  /**
   * decrypt: Occurs when an agent causes the system to decode record entry content from a cipher.
   */
  DecryptRecordLifecycleEvent: CodingArgs;
  /**
   * deidentify: Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
   */
  DeIdentifyAnononymizeRecordLifecycleEvent: CodingArgs;
  /**
   * deprecate: Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
   */
  DeprecateRecordLifecycleEvent: CodingArgs;
  /**
   * destroy: Occurs when an agent causes the system to permanently erase record entry content from the system.
   */
  DestroyDeleteRecordLifecycleEvent: CodingArgs;
  /**
   * disclose: Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
   */
  DiscloseRecordLifecycleEvent: CodingArgs;
  /**
   * encrypt: Occurs when an agent causes the system to encode record entry content in a cipher.
   */
  EncryptRecordLifecycleEvent: CodingArgs;
  /**
   * extract: Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
   */
  ExtractRecordLifecycleEvent: CodingArgs;
  /**
   * hold: Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
   */
  AddLegalHoldRecordLifecycleEvent: CodingArgs;
  /**
   * link: Occurs when an agent causes the system to connect related record entries.
   */
  LinkRecordLifecycleEvent: CodingArgs;
  /**
   * merge: Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
   */
  MergeRecordLifecycleEvent: CodingArgs;
  /**
   * originate: Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
   */
  OriginateRetainRecordLifecycleEvent: CodingArgs;
  /**
   * pseudonymize: Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
   */
  PseudonymizeRecordLifecycleEvent: CodingArgs;
  /**
   * reactivate: Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
   */
  ReActivateRecordLifecycleEvent: CodingArgs;
  /**
   * receive: Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
   */
  ReceiveRetainRecordLifecycleEvent: CodingArgs;
  /**
   * reidentify: Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
   */
  ReIdentifyRecordLifecycleEvent: CodingArgs;
  /**
   * report: Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
   */
  ReportOutputRecordLifecycleEvent: CodingArgs;
  /**
   * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
   */
  RESTfulOperation: CodingArgs;
  /**
   * restore: Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
   */
  RestoreRecordLifecycleEvent: CodingArgs;
  /**
   * transform: Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
   */
  TransformTranslateRecordLifecycleEvent: CodingArgs;
  /**
   * transmit: Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
   */
  TransmitRecordLifecycleEvent: CodingArgs;
  /**
   * unhold: Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
   */
  RemoveLegalHoldRecordLifecycleEvent: CodingArgs;
  /**
   * unlink: Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
   */
  UnlinkRecordLifecycleEvent: CodingArgs;
  /**
   * unmerge: Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
   */
  UnmergeRecordLifecycleEvent: CodingArgs;
  /**
   * verify: Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
   */
  VerifyRecordLifecycleEvent: CodingArgs;
}

/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export const AuditEventTypeCodings:AuditEventTypeCodingType = {
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
   * access: Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
   */
  AccessViewRecordLifecycleEvent: {
    display: "Access/View Record Lifecycle Event",
    code: "access",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * amend: Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
   */
  AmendUpdateRecordLifecycleEvent: {
    display: "Amend (Update) Record Lifecycle Event",
    code: "amend",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * archive: Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
   */
  ArchiveRecordLifecycleEvent: {
    display: "Archive Record Lifecycle Event",
    code: "archive",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * attest: Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
   */
  AttestRecordLifecycleEvent: {
    display: "Attest Record Lifecycle Event",
    code: "attest",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * decrypt: Occurs when an agent causes the system to decode record entry content from a cipher.
   */
  DecryptRecordLifecycleEvent: {
    display: "Decrypt Record Lifecycle Event",
    code: "decrypt",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * deidentify: Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
   */
  DeIdentifyAnononymizeRecordLifecycleEvent: {
    display: "De-Identify (Anononymize) Record Lifecycle Event",
    code: "deidentify",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * deprecate: Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
   */
  DeprecateRecordLifecycleEvent: {
    display: "Deprecate Record Lifecycle Event",
    code: "deprecate",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * destroy: Occurs when an agent causes the system to permanently erase record entry content from the system.
   */
  DestroyDeleteRecordLifecycleEvent: {
    display: "Destroy/Delete Record Lifecycle Event",
    code: "destroy",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * disclose: Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
   */
  DiscloseRecordLifecycleEvent: {
    display: "Disclose Record Lifecycle Event",
    code: "disclose",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * encrypt: Occurs when an agent causes the system to encode record entry content in a cipher.
   */
  EncryptRecordLifecycleEvent: {
    display: "Encrypt Record Lifecycle Event",
    code: "encrypt",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * extract: Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
   */
  ExtractRecordLifecycleEvent: {
    display: "Extract Record Lifecycle Event",
    code: "extract",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * hold: Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
   */
  AddLegalHoldRecordLifecycleEvent: {
    display: "Add Legal Hold Record Lifecycle Event",
    code: "hold",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * link: Occurs when an agent causes the system to connect related record entries.
   */
  LinkRecordLifecycleEvent: {
    display: "Link Record Lifecycle Event",
    code: "link",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * merge: Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
   */
  MergeRecordLifecycleEvent: {
    display: "Merge Record Lifecycle Event",
    code: "merge",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * originate: Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
   */
  OriginateRetainRecordLifecycleEvent: {
    display: "Originate/Retain Record Lifecycle Event",
    code: "originate",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * pseudonymize: Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
   */
  PseudonymizeRecordLifecycleEvent: {
    display: "Pseudonymize Record Lifecycle Event",
    code: "pseudonymize",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * reactivate: Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
   */
  ReActivateRecordLifecycleEvent: {
    display: "Re-activate Record Lifecycle Event",
    code: "reactivate",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * receive: Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
   */
  ReceiveRetainRecordLifecycleEvent: {
    display: "Receive/Retain Record Lifecycle Event",
    code: "receive",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * reidentify: Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
   */
  ReIdentifyRecordLifecycleEvent: {
    display: "Re-identify Record Lifecycle Event",
    code: "reidentify",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * report: Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
   */
  ReportOutputRecordLifecycleEvent: {
    display: "Report (Output) Record Lifecycle Event",
    code: "report",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
   */
  RESTfulOperation: {
    display: "RESTful Operation",
    code: "rest",
    system: "http://terminology.hl7.org/CodeSystem/audit-event-type",
  },
  /**
   * restore: Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
   */
  RestoreRecordLifecycleEvent: {
    display: "Restore Record Lifecycle Event",
    code: "restore",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * transform: Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
   */
  TransformTranslateRecordLifecycleEvent: {
    display: "Transform/Translate Record Lifecycle Event",
    code: "transform",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * transmit: Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
   */
  TransmitRecordLifecycleEvent: {
    display: "Transmit Record Lifecycle Event",
    code: "transmit",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * unhold: Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
   */
  RemoveLegalHoldRecordLifecycleEvent: {
    display: "Remove Legal Hold Record Lifecycle Event",
    code: "unhold",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * unlink: Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
   */
  UnlinkRecordLifecycleEvent: {
    display: "Unlink Record Lifecycle Event",
    code: "unlink",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * unmerge: Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
   */
  UnmergeRecordLifecycleEvent: {
    display: "Unmerge Record Lifecycle Event",
    code: "unmerge",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
  /**
   * verify: Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
   */
  VerifyRecordLifecycleEvent: {
    display: "Verify Record Lifecycle Event",
    code: "verify",
    system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  },
} as const;
