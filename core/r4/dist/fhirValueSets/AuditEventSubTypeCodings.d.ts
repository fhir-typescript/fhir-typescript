import { Coding } from '../fhir/Coding.js';
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventSubTypeCodings: {
    /**
     * 110120: Audit event: Application Entity has started
     */
    readonly ApplicationStart: Coding;
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    readonly ApplicationStop: Coding;
    /**
     * 110122: Audit event: User login has been attempted
     */
    readonly Login: Coding;
    /**
     * 110123: Audit event: User logout has been attempted
     */
    readonly Logout: Coding;
    /**
     * 110124: Audit event: Node has been attached
     */
    readonly Attach: Coding;
    /**
     * 110125: Audit event: Node has been detached
     */
    readonly Detach: Coding;
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    readonly NodeAuthentication: Coding;
    /**
     * 110127: Audit event: Emergency Override has started
     */
    readonly EmergencyOverrideStarted: Coding;
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    readonly NetworkConfiguration: Coding;
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    readonly SecurityConfiguration: Coding;
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    readonly HardwareConfiguration: Coding;
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    readonly SoftwareConfiguration: Coding;
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    readonly UseOfRestrictedFunction: Coding;
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    readonly AuditRecordingStopped: Coding;
    /**
     * 110134: Audit event: Audit recording has been started
     */
    readonly AuditRecordingStarted: Coding;
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    readonly ObjectSecurityAttributesChanged: Coding;
    /**
     * 110136: Audit event: Security roles have been changed
     */
    readonly SecurityRolesChanged: Coding;
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    readonly UserSecurityAttributesChanged: Coding;
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    readonly EmergencyOverrideStopped: Coding;
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    readonly RemoteServiceOperationStarted: Coding;
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    readonly RemoteServiceOperationStopped: Coding;
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    readonly LocalServiceOperationStarted: Coding;
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    readonly LocalServiceOperationStopped: Coding;
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    readonly Batch: Coding;
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    readonly Capabilities: Coding;
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: Coding;
    /**
     * delete: Delete a resource.
     */
    readonly Delete: Coding;
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    readonly History: Coding;
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    readonly HistoryInstance: Coding;
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    readonly HistorySystem: Coding;
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    readonly HistoryType: Coding;
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    readonly Operation: Coding;
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    readonly Patch: Coding;
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: Coding;
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    readonly Search: Coding;
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    readonly SearchSystem: Coding;
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    readonly SearchType: Coding;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: Coding;
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    readonly Update: Coding;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: Coding;
};
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventSubTypeCodingType = typeof AuditEventSubTypeCodings;
//# sourceMappingURL=AuditEventSubTypeCodings.d.ts.map