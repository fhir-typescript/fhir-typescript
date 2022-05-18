import { Coding } from '../fhir/Coding.js';
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventTypeCodings: {
    /**
     * 110100: Audit event: Application Activity has taken place
     */
    readonly ApplicationActivity: Coding;
    /**
     * 110101: Audit event: Audit Log has been used
     */
    readonly AuditLogUsed: Coding;
    /**
     * 110102: Audit event: Storage of DICOM Instances has begun
     */
    readonly BeginTransferringDICOMInstances: Coding;
    /**
     * 110103: Audit event: DICOM Instances have been created, read, updated, or deleted
     */
    readonly DICOMInstancesAccessed: Coding;
    /**
     * 110104: Audit event: Storage of DICOM Instances has been completed
     */
    readonly DICOMInstancesTransferred: Coding;
    /**
     * 110105: Audit event: Entire Study has been deleted
     */
    readonly DICOMStudyDeleted: Coding;
    /**
     * 110106: Audit event: Data has been exported out of the system
     */
    readonly Export: Coding;
    /**
     * 110107: Audit event: Data has been imported into the system
     */
    readonly Import: Coding;
    /**
     * 110108: Audit event: System has joined or left network
     */
    readonly NetworkEntry: Coding;
    /**
     * 110109: Audit event: Order has been created, read, updated or deleted
     */
    readonly OrderRecord: Coding;
    /**
     * 110110: Audit event: Patient Record has been created, read, updated, or deleted
     */
    readonly PatientRecord: Coding;
    /**
     * 110111: Audit event: Procedure Record has been created, read, updated, or deleted
     */
    readonly ProcedureRecord: Coding;
    /**
     * 110112: Audit event: Query has been made
     */
    readonly Query: Coding;
    /**
     * 110113: Audit event: Security Alert has been raised
     */
    readonly SecurityAlert: Coding;
    /**
     * 110114: Audit event: User Authentication has been attempted
     */
    readonly UserAuthentication: Coding;
    /**
     * access: Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
     */
    readonly AccessViewRecordLifecycleEvent: Coding;
    /**
     * amend: Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
     */
    readonly AmendUpdateRecordLifecycleEvent: Coding;
    /**
     * archive: Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
     */
    readonly ArchiveRecordLifecycleEvent: Coding;
    /**
     * attest: Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
     */
    readonly AttestRecordLifecycleEvent: Coding;
    /**
     * decrypt: Occurs when an agent causes the system to decode record entry content from a cipher.
     */
    readonly DecryptRecordLifecycleEvent: Coding;
    /**
     * deidentify: Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
     */
    readonly DeIdentifyAnononymizeRecordLifecycleEvent: Coding;
    /**
     * deprecate: Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
     */
    readonly DeprecateRecordLifecycleEvent: Coding;
    /**
     * destroy: Occurs when an agent causes the system to permanently erase record entry content from the system.
     */
    readonly DestroyDeleteRecordLifecycleEvent: Coding;
    /**
     * disclose: Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
     */
    readonly DiscloseRecordLifecycleEvent: Coding;
    /**
     * encrypt: Occurs when an agent causes the system to encode record entry content in a cipher.
     */
    readonly EncryptRecordLifecycleEvent: Coding;
    /**
     * extract: Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
     */
    readonly ExtractRecordLifecycleEvent: Coding;
    /**
     * hold: Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    readonly AddLegalHoldRecordLifecycleEvent: Coding;
    /**
     * link: Occurs when an agent causes the system to connect related record entries.
     */
    readonly LinkRecordLifecycleEvent: Coding;
    /**
     * merge: Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
     */
    readonly MergeRecordLifecycleEvent: Coding;
    /**
     * originate: Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    readonly OriginateRetainRecordLifecycleEvent: Coding;
    /**
     * pseudonymize: Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
     */
    readonly PseudonymizeRecordLifecycleEvent: Coding;
    /**
     * reactivate: Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
     */
    readonly ReActivateRecordLifecycleEvent: Coding;
    /**
     * receive: Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    readonly ReceiveRetainRecordLifecycleEvent: Coding;
    /**
     * reidentify: Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
     */
    readonly ReIdentifyRecordLifecycleEvent: Coding;
    /**
     * report: Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
     */
    readonly ReportOutputRecordLifecycleEvent: Coding;
    /**
     * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    readonly RESTfulOperation: Coding;
    /**
     * restore: Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
     */
    readonly RestoreRecordLifecycleEvent: Coding;
    /**
     * transform: Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
     */
    readonly TransformTranslateRecordLifecycleEvent: Coding;
    /**
     * transmit: Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
     */
    readonly TransmitRecordLifecycleEvent: Coding;
    /**
     * unhold: Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    readonly RemoveLegalHoldRecordLifecycleEvent: Coding;
    /**
     * unlink: Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
     */
    readonly UnlinkRecordLifecycleEvent: Coding;
    /**
     * unmerge: Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
     */
    readonly UnmergeRecordLifecycleEvent: Coding;
    /**
     * verify: Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
     */
    readonly VerifyRecordLifecycleEvent: Coding;
};
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventTypeCodingType = typeof AuditEventTypeCodings;
//# sourceMappingURL=AuditEventTypeCodings.d.ts.map