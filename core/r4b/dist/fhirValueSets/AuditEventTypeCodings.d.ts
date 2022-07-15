import { CodingArgs } from '../fhir/Coding.js';
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventTypeCodingType = {
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
};
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventTypeCodings: AuditEventTypeCodingType;
//# sourceMappingURL=AuditEventTypeCodings.d.ts.map