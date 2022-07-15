/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventTypeCodes: {
    /**
     * 110100: Audit event: Application Activity has taken place
     */
    readonly ApplicationActivity: "110100";
    /**
     * 110101: Audit event: Audit Log has been used
     */
    readonly AuditLogUsed: "110101";
    /**
     * 110102: Audit event: Storage of DICOM Instances has begun
     */
    readonly BeginTransferringDICOMInstances: "110102";
    /**
     * 110103: Audit event: DICOM Instances have been created, read, updated, or deleted
     */
    readonly DICOMInstancesAccessed: "110103";
    /**
     * 110104: Audit event: Storage of DICOM Instances has been completed
     */
    readonly DICOMInstancesTransferred: "110104";
    /**
     * 110105: Audit event: Entire Study has been deleted
     */
    readonly DICOMStudyDeleted: "110105";
    /**
     * 110106: Audit event: Data has been exported out of the system
     */
    readonly Export: "110106";
    /**
     * 110107: Audit event: Data has been imported into the system
     */
    readonly Import: "110107";
    /**
     * 110108: Audit event: System has joined or left network
     */
    readonly NetworkEntry: "110108";
    /**
     * 110109: Audit event: Order has been created, read, updated or deleted
     */
    readonly OrderRecord: "110109";
    /**
     * 110110: Audit event: Patient Record has been created, read, updated, or deleted
     */
    readonly PatientRecord: "110110";
    /**
     * 110111: Audit event: Procedure Record has been created, read, updated, or deleted
     */
    readonly ProcedureRecord: "110111";
    /**
     * 110112: Audit event: Query has been made
     */
    readonly Query: "110112";
    /**
     * 110113: Audit event: Security Alert has been raised
     */
    readonly SecurityAlert: "110113";
    /**
     * 110114: Audit event: User Authentication has been attempted
     */
    readonly UserAuthentication: "110114";
    /**
     * access: Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
     */
    readonly AccessViewRecordLifecycleEvent: "access";
    /**
     * amend: Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
     */
    readonly AmendUpdateRecordLifecycleEvent: "amend";
    /**
     * archive: Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
     */
    readonly ArchiveRecordLifecycleEvent: "archive";
    /**
     * attest: Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
     */
    readonly AttestRecordLifecycleEvent: "attest";
    /**
     * decrypt: Occurs when an agent causes the system to decode record entry content from a cipher.
     */
    readonly DecryptRecordLifecycleEvent: "decrypt";
    /**
     * deidentify: Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
     */
    readonly DeIdentifyAnononymizeRecordLifecycleEvent: "deidentify";
    /**
     * deprecate: Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
     */
    readonly DeprecateRecordLifecycleEvent: "deprecate";
    /**
     * destroy: Occurs when an agent causes the system to permanently erase record entry content from the system.
     */
    readonly DestroyDeleteRecordLifecycleEvent: "destroy";
    /**
     * disclose: Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
     */
    readonly DiscloseRecordLifecycleEvent: "disclose";
    /**
     * encrypt: Occurs when an agent causes the system to encode record entry content in a cipher.
     */
    readonly EncryptRecordLifecycleEvent: "encrypt";
    /**
     * extract: Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
     */
    readonly ExtractRecordLifecycleEvent: "extract";
    /**
     * hold: Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    readonly AddLegalHoldRecordLifecycleEvent: "hold";
    /**
     * link: Occurs when an agent causes the system to connect related record entries.
     */
    readonly LinkRecordLifecycleEvent: "link";
    /**
     * merge: Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
     */
    readonly MergeRecordLifecycleEvent: "merge";
    /**
     * originate: Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    readonly OriginateRetainRecordLifecycleEvent: "originate";
    /**
     * pseudonymize: Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
     */
    readonly PseudonymizeRecordLifecycleEvent: "pseudonymize";
    /**
     * reactivate: Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
     */
    readonly ReActivateRecordLifecycleEvent: "reactivate";
    /**
     * receive: Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    readonly ReceiveRetainRecordLifecycleEvent: "receive";
    /**
     * reidentify: Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
     */
    readonly ReIdentifyRecordLifecycleEvent: "reidentify";
    /**
     * report: Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
     */
    readonly ReportOutputRecordLifecycleEvent: "report";
    /**
     * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    readonly RESTfulOperation: "rest";
    /**
     * restore: Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
     */
    readonly RestoreRecordLifecycleEvent: "restore";
    /**
     * transform: Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
     */
    readonly TransformTranslateRecordLifecycleEvent: "transform";
    /**
     * transmit: Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
     */
    readonly TransmitRecordLifecycleEvent: "transmit";
    /**
     * unhold: Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    readonly RemoveLegalHoldRecordLifecycleEvent: "unhold";
    /**
     * unlink: Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
     */
    readonly UnlinkRecordLifecycleEvent: "unlink";
    /**
     * unmerge: Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
     */
    readonly UnmergeRecordLifecycleEvent: "unmerge";
    /**
     * verify: Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
     */
    readonly VerifyRecordLifecycleEvent: "verify";
};
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventTypeCodeType = typeof AuditEventTypeCodes[keyof typeof AuditEventTypeCodes];
//# sourceMappingURL=AuditEventTypeCodes.d.ts.map