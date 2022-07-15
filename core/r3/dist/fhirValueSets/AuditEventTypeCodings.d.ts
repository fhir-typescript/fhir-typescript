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
     * rest: Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    RESTfulOperation: CodingArgs;
};
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventTypeCodings: AuditEventTypeCodingType;
//# sourceMappingURL=AuditEventTypeCodings.d.ts.map