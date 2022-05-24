import { CodingArgs } from '../fhir/Coding.js';
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventSubTypeCodingType = {
    /**
     * 110120: Audit event: Application Entity has started
     */
    ApplicationStart: CodingArgs;
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    ApplicationStop: CodingArgs;
    /**
     * 110122: Audit event: User login has been attempted
     */
    Login: CodingArgs;
    /**
     * 110123: Audit event: User logout has been attempted
     */
    Logout: CodingArgs;
    /**
     * 110124: Audit event: Node has been attached
     */
    Attach: CodingArgs;
    /**
     * 110125: Audit event: Node has been detached
     */
    Detach: CodingArgs;
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    NodeAuthentication: CodingArgs;
    /**
     * 110127: Audit event: Emergency Override has started
     */
    EmergencyOverrideStarted: CodingArgs;
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    NetworkConfiguration: CodingArgs;
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    SecurityConfiguration: CodingArgs;
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    HardwareConfiguration: CodingArgs;
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    SoftwareConfiguration: CodingArgs;
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    UseOfRestrictedFunction: CodingArgs;
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    AuditRecordingStopped: CodingArgs;
    /**
     * 110134: Audit event: Audit recording has been started
     */
    AuditRecordingStarted: CodingArgs;
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    ObjectSecurityAttributesChanged: CodingArgs;
    /**
     * 110136: Audit event: Security roles have been changed
     */
    SecurityRolesChanged: CodingArgs;
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    UserSecurityAttributesChanged: CodingArgs;
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    EmergencyOverrideStopped: CodingArgs;
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    RemoteServiceOperationStarted: CodingArgs;
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    RemoteServiceOperationStopped: CodingArgs;
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    LocalServiceOperationStarted: CodingArgs;
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    LocalServiceOperationStopped: CodingArgs;
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: CodingArgs;
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    Capabilities: CodingArgs;
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: CodingArgs;
    /**
     * delete: Delete a resource.
     */
    Delete: CodingArgs;
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    History: CodingArgs;
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    HistoryInstance: CodingArgs;
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: CodingArgs;
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    HistoryType: CodingArgs;
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    Operation: CodingArgs;
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    Patch: CodingArgs;
    /**
     * read: Read the current state of the resource.
     */
    Read: CodingArgs;
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    Search: CodingArgs;
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: CodingArgs;
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    SearchType: CodingArgs;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: CodingArgs;
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update: CodingArgs;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread: CodingArgs;
};
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventSubTypeCodings: AuditEventSubTypeCodingType;
//# sourceMappingURL=AuditEventSubTypeCodings.d.ts.map