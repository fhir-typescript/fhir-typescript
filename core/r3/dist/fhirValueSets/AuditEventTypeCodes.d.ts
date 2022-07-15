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
     * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    readonly RESTfulOperation: "rest";
};
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventTypeCodeType = typeof AuditEventTypeCodes[keyof typeof AuditEventTypeCodes];
//# sourceMappingURL=AuditEventTypeCodes.d.ts.map