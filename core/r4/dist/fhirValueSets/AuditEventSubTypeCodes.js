// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-sub-type|4.0.1
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export const AuditEventSubTypeCodes = {
    /**
     * 110120: Audit event: Application Entity has started
     */
    ApplicationStart: "110120",
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    ApplicationStop: "110121",
    /**
     * 110122: Audit event: User login has been attempted
     */
    Login: "110122",
    /**
     * 110123: Audit event: User logout has been attempted
     */
    Logout: "110123",
    /**
     * 110124: Audit event: Node has been attached
     */
    Attach: "110124",
    /**
     * 110125: Audit event: Node has been detached
     */
    Detach: "110125",
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    NodeAuthentication: "110126",
    /**
     * 110127: Audit event: Emergency Override has started
     */
    EmergencyOverrideStarted: "110127",
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    NetworkConfiguration: "110128",
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    SecurityConfiguration: "110129",
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    HardwareConfiguration: "110130",
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    SoftwareConfiguration: "110131",
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    UseOfRestrictedFunction: "110132",
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    AuditRecordingStopped: "110133",
    /**
     * 110134: Audit event: Audit recording has been started
     */
    AuditRecordingStarted: "110134",
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    ObjectSecurityAttributesChanged: "110135",
    /**
     * 110136: Audit event: Security roles have been changed
     */
    SecurityRolesChanged: "110136",
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    UserSecurityAttributesChanged: "110137",
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    EmergencyOverrideStopped: "110138",
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    RemoteServiceOperationStarted: "110139",
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    RemoteServiceOperationStopped: "110140",
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    LocalServiceOperationStarted: "110141",
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    LocalServiceOperationStopped: "110142",
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: "batch",
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    Capabilities: "capabilities",
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: "create",
    /**
     * delete: Delete a resource.
     */
    Delete: "delete",
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    History: "history",
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    HistoryInstance: "history-instance",
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: "history-system",
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    HistoryType: "history-type",
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    Operation: "operation",
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    Patch: "patch",
    /**
     * read: Read the current state of the resource.
     */
    Read: "read",
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    Search: "search",
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: "search-system",
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    SearchType: "search-type",
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: "transaction",
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update: "update",
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread: "vread",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRFdmVudFN1YlR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQXVkaXRFdmVudFN1YlR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5RUFBeUU7QUFFekU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILGdCQUFnQixFQUFFLFFBQVE7SUFDMUI7O09BRUc7SUFDSCxlQUFlLEVBQUUsUUFBUTtJQUN6Qjs7T0FFRztJQUNILEtBQUssRUFBRSxRQUFRO0lBQ2Y7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxRQUFRO0lBQzVCOztPQUVHO0lBQ0gsd0JBQXdCLEVBQUUsUUFBUTtJQUNsQzs7T0FFRztJQUNILG9CQUFvQixFQUFFLFFBQVE7SUFDOUI7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSxRQUFRO0lBQy9COztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsUUFBUTtJQUMvQjs7T0FFRztJQUNILHFCQUFxQixFQUFFLFFBQVE7SUFDL0I7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSxRQUFRO0lBQ2pDOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsUUFBUTtJQUMvQjs7T0FFRztJQUNILHFCQUFxQixFQUFFLFFBQVE7SUFDL0I7O09BRUc7SUFDSCwrQkFBK0IsRUFBRSxRQUFRO0lBQ3pDOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsUUFBUTtJQUM5Qjs7T0FFRztJQUNILDZCQUE2QixFQUFFLFFBQVE7SUFDdkM7O09BRUc7SUFDSCx3QkFBd0IsRUFBRSxRQUFRO0lBQ2xDOztPQUVHO0lBQ0gsNkJBQTZCLEVBQUUsUUFBUTtJQUN2Qzs7T0FFRztJQUNILDZCQUE2QixFQUFFLFFBQVE7SUFDdkM7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSxRQUFRO0lBQ3RDOztPQUVHO0lBQ0gsNEJBQTRCLEVBQUUsUUFBUTtJQUN0Qzs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxZQUFZLEVBQUUsY0FBYztJQUM1Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILGVBQWUsRUFBRSxrQkFBa0I7SUFDbkM7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsV0FBVyxFQUFFLGNBQWM7SUFDM0I7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsZUFBZTtJQUM3Qjs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7SUFDMUI7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0NBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hdWRpdC1ldmVudC1zdWItdHlwZXw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIE1vcmUgZGV0YWlsZWQgY29kZSBjb25jZXJuaW5nIHRoZSB0eXBlIG9mIHRoZSBhdWRpdCBldmVudCAtIGRlZmluZWQgYnkgRElDT00gd2l0aCBzb21lIEZISVIgc3BlY2lmaWMgYWRkaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEF1ZGl0RXZlbnRTdWJUeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogMTEwMTIwOiBBdWRpdCBldmVudDogQXBwbGljYXRpb24gRW50aXR5IGhhcyBzdGFydGVkXHJcbiAgICovXHJcbiAgQXBwbGljYXRpb25TdGFydDogXCIxMTAxMjBcIixcclxuICAvKipcclxuICAgKiAxMTAxMjE6IEF1ZGl0IGV2ZW50OiBBcHBsaWNhdGlvbiBFbnRpdHkgaGFzIHN0b3BwZWRcclxuICAgKi9cclxuICBBcHBsaWNhdGlvblN0b3A6IFwiMTEwMTIxXCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTIyOiBBdWRpdCBldmVudDogVXNlciBsb2dpbiBoYXMgYmVlbiBhdHRlbXB0ZWRcclxuICAgKi9cclxuICBMb2dpbjogXCIxMTAxMjJcIixcclxuICAvKipcclxuICAgKiAxMTAxMjM6IEF1ZGl0IGV2ZW50OiBVc2VyIGxvZ291dCBoYXMgYmVlbiBhdHRlbXB0ZWRcclxuICAgKi9cclxuICBMb2dvdXQ6IFwiMTEwMTIzXCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTI0OiBBdWRpdCBldmVudDogTm9kZSBoYXMgYmVlbiBhdHRhY2hlZFxyXG4gICAqL1xyXG4gIEF0dGFjaDogXCIxMTAxMjRcIixcclxuICAvKipcclxuICAgKiAxMTAxMjU6IEF1ZGl0IGV2ZW50OiBOb2RlIGhhcyBiZWVuIGRldGFjaGVkXHJcbiAgICovXHJcbiAgRGV0YWNoOiBcIjExMDEyNVwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEyNjogQXVkaXQgZXZlbnQ6IE5vZGUgQXV0aGVudGljYXRpb24gaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgTm9kZUF1dGhlbnRpY2F0aW9uOiBcIjExMDEyNlwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEyNzogQXVkaXQgZXZlbnQ6IEVtZXJnZW5jeSBPdmVycmlkZSBoYXMgc3RhcnRlZFxyXG4gICAqL1xyXG4gIEVtZXJnZW5jeU92ZXJyaWRlU3RhcnRlZDogXCIxMTAxMjdcIixcclxuICAvKipcclxuICAgKiAxMTAxMjg6IEF1ZGl0IGV2ZW50OiBOZXR3b3JrIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIE5ldHdvcmtDb25maWd1cmF0aW9uOiBcIjExMDEyOFwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEyOTogQXVkaXQgZXZlbnQ6IFNlY3VyaXR5IGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIFNlY3VyaXR5Q29uZmlndXJhdGlvbjogXCIxMTAxMjlcIixcclxuICAvKipcclxuICAgKiAxMTAxMzA6IEF1ZGl0IGV2ZW50OiBIYXJkd2FyZSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBIYXJkd2FyZUNvbmZpZ3VyYXRpb246IFwiMTEwMTMwXCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTMxOiBBdWRpdCBldmVudDogU29mdHdhcmUgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgU29mdHdhcmVDb25maWd1cmF0aW9uOiBcIjExMDEzMVwiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEzMjogQXVkaXQgZXZlbnQ6IEEgdXNlIG9mIGEgcmVzdHJpY3RlZCBmdW5jdGlvbiBoYXMgYmVlbiBhdHRlbXB0ZWRcclxuICAgKi9cclxuICBVc2VPZlJlc3RyaWN0ZWRGdW5jdGlvbjogXCIxMTAxMzJcIixcclxuICAvKipcclxuICAgKiAxMTAxMzM6IEF1ZGl0IGV2ZW50OiBBdWRpdCByZWNvcmRpbmcgaGFzIGJlZW4gc3RvcHBlZFxyXG4gICAqL1xyXG4gIEF1ZGl0UmVjb3JkaW5nU3RvcHBlZDogXCIxMTAxMzNcIixcclxuICAvKipcclxuICAgKiAxMTAxMzQ6IEF1ZGl0IGV2ZW50OiBBdWRpdCByZWNvcmRpbmcgaGFzIGJlZW4gc3RhcnRlZFxyXG4gICAqL1xyXG4gIEF1ZGl0UmVjb3JkaW5nU3RhcnRlZDogXCIxMTAxMzRcIixcclxuICAvKipcclxuICAgKiAxMTAxMzU6IEF1ZGl0IGV2ZW50OiBTZWN1cml0eSBhdHRyaWJ1dGVzIG9mIGFuIG9iamVjdCBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIE9iamVjdFNlY3VyaXR5QXR0cmlidXRlc0NoYW5nZWQ6IFwiMTEwMTM1XCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTM2OiBBdWRpdCBldmVudDogU2VjdXJpdHkgcm9sZXMgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBTZWN1cml0eVJvbGVzQ2hhbmdlZDogXCIxMTAxMzZcIixcclxuICAvKipcclxuICAgKiAxMTAxMzc6IEF1ZGl0IGV2ZW50OiBTZWN1cml0eSBhdHRyaWJ1dGVzIG9mIGEgdXNlciBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIFVzZXJTZWN1cml0eUF0dHJpYnV0ZXNDaGFuZ2VkOiBcIjExMDEzN1wiLFxyXG4gIC8qKlxyXG4gICAqIDExMDEzODogQXVkaXQgZXZlbnQ6IEVtZXJnZW5jeSBPdmVycmlkZSBoYXMgU3RvcHBlZFxyXG4gICAqL1xyXG4gIEVtZXJnZW5jeU92ZXJyaWRlU3RvcHBlZDogXCIxMTAxMzhcIixcclxuICAvKipcclxuICAgKiAxMTAxMzk6IEF1ZGl0IGV2ZW50OiBSZW1vdGUgU2VydmljZSBPcGVyYXRpb24gaGFzIEJlZ3VuXHJcbiAgICovXHJcbiAgUmVtb3RlU2VydmljZU9wZXJhdGlvblN0YXJ0ZWQ6IFwiMTEwMTM5XCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTQwOiBBdWRpdCBldmVudDogUmVtb3RlIFNlcnZpY2UgT3BlcmF0aW9uIGhhcyBTdG9wcGVkXHJcbiAgICovXHJcbiAgUmVtb3RlU2VydmljZU9wZXJhdGlvblN0b3BwZWQ6IFwiMTEwMTQwXCIsXHJcbiAgLyoqXHJcbiAgICogMTEwMTQxOiBBdWRpdCBldmVudDogTG9jYWwgU2VydmljZSBPcGVyYXRpb24gaGFzIEJlZ3VuXHJcbiAgICovXHJcbiAgTG9jYWxTZXJ2aWNlT3BlcmF0aW9uU3RhcnRlZDogXCIxMTAxNDFcIixcclxuICAvKipcclxuICAgKiAxMTAxNDI6IEF1ZGl0IGV2ZW50OiBMb2NhbCBTZXJ2aWNlIE9wZXJhdGlvbiBTdG9wcGVkXHJcbiAgICovXHJcbiAgTG9jYWxTZXJ2aWNlT3BlcmF0aW9uU3RvcHBlZDogXCIxMTAxNDJcIixcclxuICAvKipcclxuICAgKiBiYXRjaDogcGVyZm9ybSBhIHNldCBvZiBhIHNlcGFyYXRlIGludGVyYWN0aW9ucyBpbiBhIHNpbmdsZSBodHRwIG9wZXJhdGlvblxyXG4gICAqL1xyXG4gIEJhdGNoOiBcImJhdGNoXCIsXHJcbiAgLyoqXHJcbiAgICogY2FwYWJpbGl0aWVzOiBHZXQgYSBDYXBhYmlsaXR5IFN0YXRlbWVudCBmb3IgdGhlIHN5c3RlbS5cclxuICAgKi9cclxuICBDYXBhYmlsaXRpZXM6IFwiY2FwYWJpbGl0aWVzXCIsXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlOiBDcmVhdGUgYSBuZXcgcmVzb3VyY2Ugd2l0aCBhIHNlcnZlciBhc3NpZ25lZCBpZC5cclxuICAgKi9cclxuICBDcmVhdGU6IFwiY3JlYXRlXCIsXHJcbiAgLyoqXHJcbiAgICogZGVsZXRlOiBEZWxldGUgYSByZXNvdXJjZS5cclxuICAgKi9cclxuICBEZWxldGU6IFwiZGVsZXRlXCIsXHJcbiAgLyoqXHJcbiAgICogaGlzdG9yeTogUmV0cmlldmUgdGhlIGNoYW5nZSBoaXN0b3J5IGZvciBhIHBhcnRpY3VsYXIgcmVzb3VyY2UsIHR5cGUgb2YgcmVzb3VyY2UsIG9yIHRoZSBlbnRpcmUgc3lzdGVtLlxyXG4gICAqL1xyXG4gIEhpc3Rvcnk6IFwiaGlzdG9yeVwiLFxyXG4gIC8qKlxyXG4gICAqIGhpc3RvcnktaW5zdGFuY2U6IFJldHJpZXZlIHRoZSBjaGFuZ2UgaGlzdG9yeSBmb3IgYSBwYXJ0aWN1bGFyIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIEhpc3RvcnlJbnN0YW5jZTogXCJoaXN0b3J5LWluc3RhbmNlXCIsXHJcbiAgLyoqXHJcbiAgICogaGlzdG9yeS1zeXN0ZW06IFJldHJpZXZlIHRoZSBjaGFuZ2UgaGlzdG9yeSBmb3IgYWxsIHJlc291cmNlcyBvbiBhIHN5c3RlbS5cclxuICAgKi9cclxuICBIaXN0b3J5U3lzdGVtOiBcImhpc3Rvcnktc3lzdGVtXCIsXHJcbiAgLyoqXHJcbiAgICogaGlzdG9yeS10eXBlOiBSZXRyaWV2ZSB0aGUgY2hhbmdlIGhpc3RvcnkgZm9yIGFsbCByZXNvdXJjZXMgb2YgYSBwYXJ0aWN1bGFyIHR5cGUuXHJcbiAgICovXHJcbiAgSGlzdG9yeVR5cGU6IFwiaGlzdG9yeS10eXBlXCIsXHJcbiAgLyoqXHJcbiAgICogb3BlcmF0aW9uOiBQZXJmb3JtIGFuIG9wZXJhdGlvbiBhcyBkZWZpbmVkIGJ5IGFuIE9wZXJhdGlvbkRlZmluaXRpb24uXHJcbiAgICovXHJcbiAgT3BlcmF0aW9uOiBcIm9wZXJhdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIHBhdGNoOiBVcGRhdGUgYW4gZXhpc3RpbmcgcmVzb3VyY2UgYnkgcG9zdGluZyBhIHNldCBvZiBjaGFuZ2VzIHRvIGl0LlxyXG4gICAqL1xyXG4gIFBhdGNoOiBcInBhdGNoXCIsXHJcbiAgLyoqXHJcbiAgICogcmVhZDogUmVhZCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgUmVhZDogXCJyZWFkXCIsXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoOiBTZWFyY2ggYSByZXNvdXJjZSB0eXBlIG9yIGFsbCByZXNvdXJjZXMgYmFzZWQgb24gc29tZSBmaWx0ZXIgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgU2VhcmNoOiBcInNlYXJjaFwiLFxyXG4gIC8qKlxyXG4gICAqIHNlYXJjaC1zeXN0ZW06IFNlYXJjaCBhbGwgcmVzb3VyY2VzIGJhc2VkIG9uIHNvbWUgZmlsdGVyIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIFNlYXJjaFN5c3RlbTogXCJzZWFyY2gtc3lzdGVtXCIsXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoLXR5cGU6IFNlYXJjaCBhbGwgcmVzb3VyY2VzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBiYXNlZCBvbiBzb21lIGZpbHRlciBjcml0ZXJpYS5cclxuICAgKi9cclxuICBTZWFyY2hUeXBlOiBcInNlYXJjaC10eXBlXCIsXHJcbiAgLyoqXHJcbiAgICogdHJhbnNhY3Rpb246IFVwZGF0ZSwgY3JlYXRlIG9yIGRlbGV0ZSBhIHNldCBvZiByZXNvdXJjZXMgYXMgYSBzaW5nbGUgdHJhbnNhY3Rpb24uXHJcbiAgICovXHJcbiAgVHJhbnNhY3Rpb246IFwidHJhbnNhY3Rpb25cIixcclxuICAvKipcclxuICAgKiB1cGRhdGU6IFVwZGF0ZSBhbiBleGlzdGluZyByZXNvdXJjZSBieSBpdHMgaWQgKG9yIGNyZWF0ZSBpdCBpZiBpdCBpcyBuZXcpLlxyXG4gICAqL1xyXG4gIFVwZGF0ZTogXCJ1cGRhdGVcIixcclxuICAvKipcclxuICAgKiB2cmVhZDogUmVhZCB0aGUgc3RhdGUgb2YgYSBzcGVjaWZpYyB2ZXJzaW9uIG9mIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBWcmVhZDogXCJ2cmVhZFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIE1vcmUgZGV0YWlsZWQgY29kZSBjb25jZXJuaW5nIHRoZSB0eXBlIG9mIHRoZSBhdWRpdCBldmVudCAtIGRlZmluZWQgYnkgRElDT00gd2l0aCBzb21lIEZISVIgc3BlY2lmaWMgYWRkaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXVkaXRFdmVudFN1YlR5cGVDb2RlVHlwZSA9IHR5cGVvZiBBdWRpdEV2ZW50U3ViVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBBdWRpdEV2ZW50U3ViVHlwZUNvZGVzXTtcclxuIl19