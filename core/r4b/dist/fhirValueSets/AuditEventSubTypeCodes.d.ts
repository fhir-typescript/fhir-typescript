/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventSubTypeCodes: {
    /**
     * 110120: Audit event: Application Entity has started
     */
    readonly ApplicationStart: "110120";
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    readonly ApplicationStop: "110121";
    /**
     * 110122: Audit event: User login has been attempted
     */
    readonly Login: "110122";
    /**
     * 110123: Audit event: User logout has been attempted
     */
    readonly Logout: "110123";
    /**
     * 110124: Audit event: Node has been attached
     */
    readonly Attach: "110124";
    /**
     * 110125: Audit event: Node has been detached
     */
    readonly Detach: "110125";
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    readonly NodeAuthentication: "110126";
    /**
     * 110127: Audit event: Emergency Override has started
     */
    readonly EmergencyOverrideStarted: "110127";
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    readonly NetworkConfiguration: "110128";
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    readonly SecurityConfiguration: "110129";
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    readonly HardwareConfiguration: "110130";
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    readonly SoftwareConfiguration: "110131";
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    readonly UseOfRestrictedFunction: "110132";
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    readonly AuditRecordingStopped: "110133";
    /**
     * 110134: Audit event: Audit recording has been started
     */
    readonly AuditRecordingStarted: "110134";
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    readonly ObjectSecurityAttributesChanged: "110135";
    /**
     * 110136: Audit event: Security roles have been changed
     */
    readonly SecurityRolesChanged: "110136";
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    readonly UserSecurityAttributesChanged: "110137";
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    readonly EmergencyOverrideStopped: "110138";
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    readonly RemoteServiceOperationStarted: "110139";
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    readonly RemoteServiceOperationStopped: "110140";
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    readonly LocalServiceOperationStarted: "110141";
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    readonly LocalServiceOperationStopped: "110142";
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    readonly Batch: "batch";
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    readonly Capabilities: "capabilities";
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: "create";
    /**
     * delete: Delete a resource.
     */
    readonly Delete: "delete";
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    readonly History: "history";
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    readonly HistoryInstance: "history-instance";
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    readonly HistorySystem: "history-system";
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    readonly HistoryType: "history-type";
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    readonly Operation: "operation";
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    readonly Patch: "patch";
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: "read";
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    readonly Search: "search";
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    readonly SearchSystem: "search-system";
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    readonly SearchType: "search-type";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: "transaction";
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    readonly Update: "update";
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: "vread";
};
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventSubTypeCodeType = typeof AuditEventSubTypeCodes[keyof typeof AuditEventSubTypeCodes];
//# sourceMappingURL=AuditEventSubTypeCodes.d.ts.map