// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-sub-type|20100826
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export const AuditEventSubTypeCodings = {
    /**
     * 110120: Audit event: Application Entity has started
     */
    ApplicationStart: {
        display: "Application Start",
        code: "110120",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    ApplicationStop: {
        display: "Application Stop",
        code: "110121",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110122: Audit event: User login has been attempted
     */
    Login: {
        display: "Login",
        code: "110122",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110123: Audit event: User logout has been attempted
     */
    Logout: {
        display: "Logout",
        code: "110123",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110124: Audit event: Node has been attached
     */
    Attach: {
        display: "Attach",
        code: "110124",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110125: Audit event: Node has been detached
     */
    Detach: {
        display: "Detach",
        code: "110125",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    NodeAuthentication: {
        display: "Node Authentication",
        code: "110126",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110127: Audit event: Emergency Override has started
     */
    EmergencyOverrideStarted: {
        display: "Emergency Override Started",
        code: "110127",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    NetworkConfiguration: {
        display: "Network Configuration",
        code: "110128",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    SecurityConfiguration: {
        display: "Security Configuration",
        code: "110129",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    HardwareConfiguration: {
        display: "Hardware Configuration",
        code: "110130",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    SoftwareConfiguration: {
        display: "Software Configuration",
        code: "110131",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    UseOfRestrictedFunction: {
        display: "Use of Restricted Function",
        code: "110132",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    AuditRecordingStopped: {
        display: "Audit Recording Stopped",
        code: "110133",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110134: Audit event: Audit recording has been started
     */
    AuditRecordingStarted: {
        display: "Audit Recording Started",
        code: "110134",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    ObjectSecurityAttributesChanged: {
        display: "Object Security Attributes Changed",
        code: "110135",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110136: Audit event: Security roles have been changed
     */
    SecurityRolesChanged: {
        display: "Security Roles Changed",
        code: "110136",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    UserSecurityAttributesChanged: {
        display: "User security Attributes Changed",
        code: "110137",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    EmergencyOverrideStopped: {
        display: "Emergency Override Stopped",
        code: "110138",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    RemoteServiceOperationStarted: {
        display: "Remote Service Operation Started",
        code: "110139",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    RemoteServiceOperationStopped: {
        display: "Remote Service Operation Stopped",
        code: "110140",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    LocalServiceOperationStarted: {
        display: "Local Service Operation Started",
        code: "110141",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    LocalServiceOperationStopped: {
        display: "Local Service Operation Stopped",
        code: "110142",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    },
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: {
        display: "batch",
        code: "batch",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    Capabilities: {
        display: "capabilities",
        code: "capabilities",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: {
        display: "create",
        code: "create",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * delete: Delete a resource.
     */
    Delete: {
        display: "delete",
        code: "delete",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    History: {
        display: "history",
        code: "history",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    HistoryInstance: {
        display: "history-instance",
        code: "history-instance",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: {
        display: "history-system",
        code: "history-system",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    HistoryType: {
        display: "history-type",
        code: "history-type",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    Operation: {
        display: "operation",
        code: "operation",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    Patch: {
        display: "patch",
        code: "patch",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * read: Read the current state of the resource.
     */
    Read: {
        display: "read",
        code: "read",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    Search: {
        display: "search",
        code: "search",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: {
        display: "search-system",
        code: "search-system",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    SearchType: {
        display: "search-type",
        code: "search-type",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: {
        display: "transaction",
        code: "transaction",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update: {
        display: "update",
        code: "update",
        system: "http://hl7.org/fhir/restful-interaction",
    },
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread: {
        display: "vread",
        code: "vread",
        system: "http://hl7.org/fhir/restful-interaction",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRFdmVudFN1YlR5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BdWRpdEV2ZW50U3ViVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNEVBQTRFO0FBMEs1RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILGdCQUFnQixFQUFFO1FBQ2hCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxlQUFlLEVBQUU7UUFDZixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDhDQUE4QztLQUN2RDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsOENBQThDO0tBQ3ZEO0lBQ0Q7O09BRUc7SUFDSCxrQkFBa0IsRUFBRTtRQUNsQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxRQUFRO1FB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QUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQ7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHlDQUF5QztLQUNsRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUseUNBQXlDO0tBQ2xEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9hdWRpdC1ldmVudC1zdWItdHlwZXwyMDEwMDgyNlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIE1vcmUgZGV0YWlsZWQgY29kZSBjb25jZXJuaW5nIHRoZSB0eXBlIG9mIHRoZSBhdWRpdCBldmVudCAtIGRlZmluZWQgYnkgRElDT00gd2l0aCBzb21lIEZISVIgc3BlY2lmaWMgYWRkaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXVkaXRFdmVudFN1YlR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIDExMDEyMDogQXVkaXQgZXZlbnQ6IEFwcGxpY2F0aW9uIEVudGl0eSBoYXMgc3RhcnRlZFxyXG4gICAqL1xyXG4gIEFwcGxpY2F0aW9uU3RhcnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTIxOiBBdWRpdCBldmVudDogQXBwbGljYXRpb24gRW50aXR5IGhhcyBzdG9wcGVkXHJcbiAgICovXHJcbiAgQXBwbGljYXRpb25TdG9wOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEyMjogQXVkaXQgZXZlbnQ6IFVzZXIgbG9naW4gaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgTG9naW46IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTIzOiBBdWRpdCBldmVudDogVXNlciBsb2dvdXQgaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgTG9nb3V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEyNDogQXVkaXQgZXZlbnQ6IE5vZGUgaGFzIGJlZW4gYXR0YWNoZWRcclxuICAgKi9cclxuICBBdHRhY2g6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTI1OiBBdWRpdCBldmVudDogTm9kZSBoYXMgYmVlbiBkZXRhY2hlZFxyXG4gICAqL1xyXG4gIERldGFjaDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMjY6IEF1ZGl0IGV2ZW50OiBOb2RlIEF1dGhlbnRpY2F0aW9uIGhhcyBiZWVuIGF0dGVtcHRlZFxyXG4gICAqL1xyXG4gIE5vZGVBdXRoZW50aWNhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMjc6IEF1ZGl0IGV2ZW50OiBFbWVyZ2VuY3kgT3ZlcnJpZGUgaGFzIHN0YXJ0ZWRcclxuICAgKi9cclxuICBFbWVyZ2VuY3lPdmVycmlkZVN0YXJ0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTI4OiBBdWRpdCBldmVudDogTmV0d29yayBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBOZXR3b3JrQ29uZmlndXJhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMjk6IEF1ZGl0IGV2ZW50OiBTZWN1cml0eSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBTZWN1cml0eUNvbmZpZ3VyYXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTMwOiBBdWRpdCBldmVudDogSGFyZHdhcmUgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgSGFyZHdhcmVDb25maWd1cmF0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEzMTogQXVkaXQgZXZlbnQ6IFNvZnR3YXJlIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIFNvZnR3YXJlQ29uZmlndXJhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMzI6IEF1ZGl0IGV2ZW50OiBBIHVzZSBvZiBhIHJlc3RyaWN0ZWQgZnVuY3Rpb24gaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgVXNlT2ZSZXN0cmljdGVkRnVuY3Rpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTMzOiBBdWRpdCBldmVudDogQXVkaXQgcmVjb3JkaW5nIGhhcyBiZWVuIHN0b3BwZWRcclxuICAgKi9cclxuICBBdWRpdFJlY29yZGluZ1N0b3BwZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTM0OiBBdWRpdCBldmVudDogQXVkaXQgcmVjb3JkaW5nIGhhcyBiZWVuIHN0YXJ0ZWRcclxuICAgKi9cclxuICBBdWRpdFJlY29yZGluZ1N0YXJ0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTM1OiBBdWRpdCBldmVudDogU2VjdXJpdHkgYXR0cmlidXRlcyBvZiBhbiBvYmplY3QgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBPYmplY3RTZWN1cml0eUF0dHJpYnV0ZXNDaGFuZ2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDEzNjogQXVkaXQgZXZlbnQ6IFNlY3VyaXR5IHJvbGVzIGhhdmUgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgU2VjdXJpdHlSb2xlc0NoYW5nZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTM3OiBBdWRpdCBldmVudDogU2VjdXJpdHkgYXR0cmlidXRlcyBvZiBhIHVzZXIgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBVc2VyU2VjdXJpdHlBdHRyaWJ1dGVzQ2hhbmdlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAxMTAxMzg6IEF1ZGl0IGV2ZW50OiBFbWVyZ2VuY3kgT3ZlcnJpZGUgaGFzIFN0b3BwZWRcclxuICAgKi9cclxuICBFbWVyZ2VuY3lPdmVycmlkZVN0b3BwZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTM5OiBBdWRpdCBldmVudDogUmVtb3RlIFNlcnZpY2UgT3BlcmF0aW9uIGhhcyBCZWd1blxyXG4gICAqL1xyXG4gIFJlbW90ZVNlcnZpY2VPcGVyYXRpb25TdGFydGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDE0MDogQXVkaXQgZXZlbnQ6IFJlbW90ZSBTZXJ2aWNlIE9wZXJhdGlvbiBoYXMgU3RvcHBlZFxyXG4gICAqL1xyXG4gIFJlbW90ZVNlcnZpY2VPcGVyYXRpb25TdG9wcGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDExMDE0MTogQXVkaXQgZXZlbnQ6IExvY2FsIFNlcnZpY2UgT3BlcmF0aW9uIGhhcyBCZWd1blxyXG4gICAqL1xyXG4gIExvY2FsU2VydmljZU9wZXJhdGlvblN0YXJ0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMTEwMTQyOiBBdWRpdCBldmVudDogTG9jYWwgU2VydmljZSBPcGVyYXRpb24gU3RvcHBlZFxyXG4gICAqL1xyXG4gIExvY2FsU2VydmljZU9wZXJhdGlvblN0b3BwZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYmF0Y2g6IHBlcmZvcm0gYSBzZXQgb2YgYSBzZXBhcmF0ZSBpbnRlcmFjdGlvbnMgaW4gYSBzaW5nbGUgaHR0cCBvcGVyYXRpb25cclxuICAgKi9cclxuICBCYXRjaDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjYXBhYmlsaXRpZXM6IEdldCBhIENhcGFiaWxpdHkgU3RhdGVtZW50IGZvciB0aGUgc3lzdGVtLlxyXG4gICAqL1xyXG4gIENhcGFiaWxpdGllczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjcmVhdGU6IENyZWF0ZSBhIG5ldyByZXNvdXJjZSB3aXRoIGEgc2VydmVyIGFzc2lnbmVkIGlkLlxyXG4gICAqL1xyXG4gIENyZWF0ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkZWxldGU6IERlbGV0ZSBhIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIERlbGV0ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBoaXN0b3J5OiBSZXRyaWV2ZSB0aGUgY2hhbmdlIGhpc3RvcnkgZm9yIGEgcGFydGljdWxhciByZXNvdXJjZSwgdHlwZSBvZiByZXNvdXJjZSwgb3IgdGhlIGVudGlyZSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgSGlzdG9yeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBoaXN0b3J5LWluc3RhbmNlOiBSZXRyaWV2ZSB0aGUgY2hhbmdlIGhpc3RvcnkgZm9yIGEgcGFydGljdWxhciByZXNvdXJjZS5cclxuICAgKi9cclxuICBIaXN0b3J5SW5zdGFuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaGlzdG9yeS1zeXN0ZW06IFJldHJpZXZlIHRoZSBjaGFuZ2UgaGlzdG9yeSBmb3IgYWxsIHJlc291cmNlcyBvbiBhIHN5c3RlbS5cclxuICAgKi9cclxuICBIaXN0b3J5U3lzdGVtOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGhpc3RvcnktdHlwZTogUmV0cmlldmUgdGhlIGNoYW5nZSBoaXN0b3J5IGZvciBhbGwgcmVzb3VyY2VzIG9mIGEgcGFydGljdWxhciB0eXBlLlxyXG4gICAqL1xyXG4gIEhpc3RvcnlUeXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9wZXJhdGlvbjogUGVyZm9ybSBhbiBvcGVyYXRpb24gYXMgZGVmaW5lZCBieSBhbiBPcGVyYXRpb25EZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIE9wZXJhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXRjaDogVXBkYXRlIGFuIGV4aXN0aW5nIHJlc291cmNlIGJ5IHBvc3RpbmcgYSBzZXQgb2YgY2hhbmdlcyB0byBpdC5cclxuICAgKi9cclxuICBQYXRjaDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWFkOiBSZWFkIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBSZWFkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNlYXJjaDogU2VhcmNoIGEgcmVzb3VyY2UgdHlwZSBvciBhbGwgcmVzb3VyY2VzIGJhc2VkIG9uIHNvbWUgZmlsdGVyIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIFNlYXJjaDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzZWFyY2gtc3lzdGVtOiBTZWFyY2ggYWxsIHJlc291cmNlcyBiYXNlZCBvbiBzb21lIGZpbHRlciBjcml0ZXJpYS5cclxuICAgKi9cclxuICBTZWFyY2hTeXN0ZW06IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc2VhcmNoLXR5cGU6IFNlYXJjaCBhbGwgcmVzb3VyY2VzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBiYXNlZCBvbiBzb21lIGZpbHRlciBjcml0ZXJpYS5cclxuICAgKi9cclxuICBTZWFyY2hUeXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHRyYW5zYWN0aW9uOiBVcGRhdGUsIGNyZWF0ZSBvciBkZWxldGUgYSBzZXQgb2YgcmVzb3VyY2VzIGFzIGEgc2luZ2xlIHRyYW5zYWN0aW9uLlxyXG4gICAqL1xyXG4gIFRyYW5zYWN0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVwZGF0ZTogVXBkYXRlIGFuIGV4aXN0aW5nIHJlc291cmNlIGJ5IGl0cyBpZCAob3IgY3JlYXRlIGl0IGlmIGl0IGlzIG5ldykuXHJcbiAgICovXHJcbiAgVXBkYXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHZyZWFkOiBSZWFkIHRoZSBzdGF0ZSBvZiBhIHNwZWNpZmljIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIFZyZWFkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogTW9yZSBkZXRhaWxlZCBjb2RlIGNvbmNlcm5pbmcgdGhlIHR5cGUgb2YgdGhlIGF1ZGl0IGV2ZW50IC0gZGVmaW5lZCBieSBESUNPTSB3aXRoIHNvbWUgRkhJUiBzcGVjaWZpYyBhZGRpdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQXVkaXRFdmVudFN1YlR5cGVDb2RpbmdzOkF1ZGl0RXZlbnRTdWJUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiAxMTAxMjA6IEF1ZGl0IGV2ZW50OiBBcHBsaWNhdGlvbiBFbnRpdHkgaGFzIHN0YXJ0ZWRcclxuICAgKi9cclxuICBBcHBsaWNhdGlvblN0YXJ0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkFwcGxpY2F0aW9uIFN0YXJ0XCIsXHJcbiAgICBjb2RlOiBcIjExMDEyMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMjE6IEF1ZGl0IGV2ZW50OiBBcHBsaWNhdGlvbiBFbnRpdHkgaGFzIHN0b3BwZWRcclxuICAgKi9cclxuICBBcHBsaWNhdGlvblN0b3A6IHtcclxuICAgIGRpc3BsYXk6IFwiQXBwbGljYXRpb24gU3RvcFwiLFxyXG4gICAgY29kZTogXCIxMTAxMjFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTIyOiBBdWRpdCBldmVudDogVXNlciBsb2dpbiBoYXMgYmVlbiBhdHRlbXB0ZWRcclxuICAgKi9cclxuICBMb2dpbjoge1xyXG4gICAgZGlzcGxheTogXCJMb2dpblwiLFxyXG4gICAgY29kZTogXCIxMTAxMjJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTIzOiBBdWRpdCBldmVudDogVXNlciBsb2dvdXQgaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgTG9nb3V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkxvZ291dFwiLFxyXG4gICAgY29kZTogXCIxMTAxMjNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTI0OiBBdWRpdCBldmVudDogTm9kZSBoYXMgYmVlbiBhdHRhY2hlZFxyXG4gICAqL1xyXG4gIEF0dGFjaDoge1xyXG4gICAgZGlzcGxheTogXCJBdHRhY2hcIixcclxuICAgIGNvZGU6IFwiMTEwMTI0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEyNTogQXVkaXQgZXZlbnQ6IE5vZGUgaGFzIGJlZW4gZGV0YWNoZWRcclxuICAgKi9cclxuICBEZXRhY2g6IHtcclxuICAgIGRpc3BsYXk6IFwiRGV0YWNoXCIsXHJcbiAgICBjb2RlOiBcIjExMDEyNVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMjY6IEF1ZGl0IGV2ZW50OiBOb2RlIEF1dGhlbnRpY2F0aW9uIGhhcyBiZWVuIGF0dGVtcHRlZFxyXG4gICAqL1xyXG4gIE5vZGVBdXRoZW50aWNhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJOb2RlIEF1dGhlbnRpY2F0aW9uXCIsXHJcbiAgICBjb2RlOiBcIjExMDEyNlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMjc6IEF1ZGl0IGV2ZW50OiBFbWVyZ2VuY3kgT3ZlcnJpZGUgaGFzIHN0YXJ0ZWRcclxuICAgKi9cclxuICBFbWVyZ2VuY3lPdmVycmlkZVN0YXJ0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiRW1lcmdlbmN5IE92ZXJyaWRlIFN0YXJ0ZWRcIixcclxuICAgIGNvZGU6IFwiMTEwMTI3XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEyODogQXVkaXQgZXZlbnQ6IE5ldHdvcmsgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgTmV0d29ya0NvbmZpZ3VyYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiTmV0d29yayBDb25maWd1cmF0aW9uXCIsXHJcbiAgICBjb2RlOiBcIjExMDEyOFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMjk6IEF1ZGl0IGV2ZW50OiBTZWN1cml0eSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBTZWN1cml0eUNvbmZpZ3VyYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiU2VjdXJpdHkgQ29uZmlndXJhdGlvblwiLFxyXG4gICAgY29kZTogXCIxMTAxMjlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTMwOiBBdWRpdCBldmVudDogSGFyZHdhcmUgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgSGFyZHdhcmVDb25maWd1cmF0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkhhcmR3YXJlIENvbmZpZ3VyYXRpb25cIixcclxuICAgIGNvZGU6IFwiMTEwMTMwXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEzMTogQXVkaXQgZXZlbnQ6IFNvZnR3YXJlIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIFNvZnR3YXJlQ29uZmlndXJhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJTb2Z0d2FyZSBDb25maWd1cmF0aW9uXCIsXHJcbiAgICBjb2RlOiBcIjExMDEzMVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMzI6IEF1ZGl0IGV2ZW50OiBBIHVzZSBvZiBhIHJlc3RyaWN0ZWQgZnVuY3Rpb24gaGFzIGJlZW4gYXR0ZW1wdGVkXHJcbiAgICovXHJcbiAgVXNlT2ZSZXN0cmljdGVkRnVuY3Rpb246IHtcclxuICAgIGRpc3BsYXk6IFwiVXNlIG9mIFJlc3RyaWN0ZWQgRnVuY3Rpb25cIixcclxuICAgIGNvZGU6IFwiMTEwMTMyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEzMzogQXVkaXQgZXZlbnQ6IEF1ZGl0IHJlY29yZGluZyBoYXMgYmVlbiBzdG9wcGVkXHJcbiAgICovXHJcbiAgQXVkaXRSZWNvcmRpbmdTdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkF1ZGl0IFJlY29yZGluZyBTdG9wcGVkXCIsXHJcbiAgICBjb2RlOiBcIjExMDEzM1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMzQ6IEF1ZGl0IGV2ZW50OiBBdWRpdCByZWNvcmRpbmcgaGFzIGJlZW4gc3RhcnRlZFxyXG4gICAqL1xyXG4gIEF1ZGl0UmVjb3JkaW5nU3RhcnRlZDoge1xyXG4gICAgZGlzcGxheTogXCJBdWRpdCBSZWNvcmRpbmcgU3RhcnRlZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMzRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTM1OiBBdWRpdCBldmVudDogU2VjdXJpdHkgYXR0cmlidXRlcyBvZiBhbiBvYmplY3QgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBPYmplY3RTZWN1cml0eUF0dHJpYnV0ZXNDaGFuZ2VkOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9iamVjdCBTZWN1cml0eSBBdHRyaWJ1dGVzIENoYW5nZWRcIixcclxuICAgIGNvZGU6IFwiMTEwMTM1XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDEzNjogQXVkaXQgZXZlbnQ6IFNlY3VyaXR5IHJvbGVzIGhhdmUgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgU2VjdXJpdHlSb2xlc0NoYW5nZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU2VjdXJpdHkgUm9sZXMgQ2hhbmdlZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMzZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTM3OiBBdWRpdCBldmVudDogU2VjdXJpdHkgYXR0cmlidXRlcyBvZiBhIHVzZXIgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBVc2VyU2VjdXJpdHlBdHRyaWJ1dGVzQ2hhbmdlZDoge1xyXG4gICAgZGlzcGxheTogXCJVc2VyIHNlY3VyaXR5IEF0dHJpYnV0ZXMgQ2hhbmdlZFwiLFxyXG4gICAgY29kZTogXCIxMTAxMzdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vZGljb20ubmVtYS5vcmcvcmVzb3VyY2VzL29udG9sb2d5L0RDTVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMTEwMTM4OiBBdWRpdCBldmVudDogRW1lcmdlbmN5IE92ZXJyaWRlIGhhcyBTdG9wcGVkXHJcbiAgICovXHJcbiAgRW1lcmdlbmN5T3ZlcnJpZGVTdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVtZXJnZW5jeSBPdmVycmlkZSBTdG9wcGVkXCIsXHJcbiAgICBjb2RlOiBcIjExMDEzOFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxMzk6IEF1ZGl0IGV2ZW50OiBSZW1vdGUgU2VydmljZSBPcGVyYXRpb24gaGFzIEJlZ3VuXHJcbiAgICovXHJcbiAgUmVtb3RlU2VydmljZU9wZXJhdGlvblN0YXJ0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVtb3RlIFNlcnZpY2UgT3BlcmF0aW9uIFN0YXJ0ZWRcIixcclxuICAgIGNvZGU6IFwiMTEwMTM5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDE0MDogQXVkaXQgZXZlbnQ6IFJlbW90ZSBTZXJ2aWNlIE9wZXJhdGlvbiBoYXMgU3RvcHBlZFxyXG4gICAqL1xyXG4gIFJlbW90ZVNlcnZpY2VPcGVyYXRpb25TdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlbW90ZSBTZXJ2aWNlIE9wZXJhdGlvbiBTdG9wcGVkXCIsXHJcbiAgICBjb2RlOiBcIjExMDE0MFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9kaWNvbS5uZW1hLm9yZy9yZXNvdXJjZXMvb250b2xvZ3kvRENNXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAxMTAxNDE6IEF1ZGl0IGV2ZW50OiBMb2NhbCBTZXJ2aWNlIE9wZXJhdGlvbiBoYXMgQmVndW5cclxuICAgKi9cclxuICBMb2NhbFNlcnZpY2VPcGVyYXRpb25TdGFydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkxvY2FsIFNlcnZpY2UgT3BlcmF0aW9uIFN0YXJ0ZWRcIixcclxuICAgIGNvZGU6IFwiMTEwMTQxXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDExMDE0MjogQXVkaXQgZXZlbnQ6IExvY2FsIFNlcnZpY2UgT3BlcmF0aW9uIFN0b3BwZWRcclxuICAgKi9cclxuICBMb2NhbFNlcnZpY2VPcGVyYXRpb25TdG9wcGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkxvY2FsIFNlcnZpY2UgT3BlcmF0aW9uIFN0b3BwZWRcIixcclxuICAgIGNvZGU6IFwiMTEwMTQyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2RpY29tLm5lbWEub3JnL3Jlc291cmNlcy9vbnRvbG9neS9EQ01cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGJhdGNoOiBwZXJmb3JtIGEgc2V0IG9mIGEgc2VwYXJhdGUgaW50ZXJhY3Rpb25zIGluIGEgc2luZ2xlIGh0dHAgb3BlcmF0aW9uXHJcbiAgICovXHJcbiAgQmF0Y2g6IHtcclxuICAgIGRpc3BsYXk6IFwiYmF0Y2hcIixcclxuICAgIGNvZGU6IFwiYmF0Y2hcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNhcGFiaWxpdGllczogR2V0IGEgQ2FwYWJpbGl0eSBTdGF0ZW1lbnQgZm9yIHRoZSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgQ2FwYWJpbGl0aWVzOiB7XHJcbiAgICBkaXNwbGF5OiBcImNhcGFiaWxpdGllc1wiLFxyXG4gICAgY29kZTogXCJjYXBhYmlsaXRpZXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZTogQ3JlYXRlIGEgbmV3IHJlc291cmNlIHdpdGggYSBzZXJ2ZXIgYXNzaWduZWQgaWQuXHJcbiAgICovXHJcbiAgQ3JlYXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcImNyZWF0ZVwiLFxyXG4gICAgY29kZTogXCJjcmVhdGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRlbGV0ZTogRGVsZXRlIGEgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgRGVsZXRlOiB7XHJcbiAgICBkaXNwbGF5OiBcImRlbGV0ZVwiLFxyXG4gICAgY29kZTogXCJkZWxldGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGhpc3Rvcnk6IFJldHJpZXZlIHRoZSBjaGFuZ2UgaGlzdG9yeSBmb3IgYSBwYXJ0aWN1bGFyIHJlc291cmNlLCB0eXBlIG9mIHJlc291cmNlLCBvciB0aGUgZW50aXJlIHN5c3RlbS5cclxuICAgKi9cclxuICBIaXN0b3J5OiB7XHJcbiAgICBkaXNwbGF5OiBcImhpc3RvcnlcIixcclxuICAgIGNvZGU6IFwiaGlzdG9yeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaGlzdG9yeS1pbnN0YW5jZTogUmV0cmlldmUgdGhlIGNoYW5nZSBoaXN0b3J5IGZvciBhIHBhcnRpY3VsYXIgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgSGlzdG9yeUluc3RhbmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcImhpc3RvcnktaW5zdGFuY2VcIixcclxuICAgIGNvZGU6IFwiaGlzdG9yeS1pbnN0YW5jZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaGlzdG9yeS1zeXN0ZW06IFJldHJpZXZlIHRoZSBjaGFuZ2UgaGlzdG9yeSBmb3IgYWxsIHJlc291cmNlcyBvbiBhIHN5c3RlbS5cclxuICAgKi9cclxuICBIaXN0b3J5U3lzdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcImhpc3Rvcnktc3lzdGVtXCIsXHJcbiAgICBjb2RlOiBcImhpc3Rvcnktc3lzdGVtXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXN0ZnVsLWludGVyYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBoaXN0b3J5LXR5cGU6IFJldHJpZXZlIHRoZSBjaGFuZ2UgaGlzdG9yeSBmb3IgYWxsIHJlc291cmNlcyBvZiBhIHBhcnRpY3VsYXIgdHlwZS5cclxuICAgKi9cclxuICBIaXN0b3J5VHlwZToge1xyXG4gICAgZGlzcGxheTogXCJoaXN0b3J5LXR5cGVcIixcclxuICAgIGNvZGU6IFwiaGlzdG9yeS10eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXN0ZnVsLWludGVyYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvcGVyYXRpb246IFBlcmZvcm0gYW4gb3BlcmF0aW9uIGFzIGRlZmluZWQgYnkgYW4gT3BlcmF0aW9uRGVmaW5pdGlvbi5cclxuICAgKi9cclxuICBPcGVyYXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwib3BlcmF0aW9uXCIsXHJcbiAgICBjb2RlOiBcIm9wZXJhdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcGF0Y2g6IFVwZGF0ZSBhbiBleGlzdGluZyByZXNvdXJjZSBieSBwb3N0aW5nIGEgc2V0IG9mIGNoYW5nZXMgdG8gaXQuXHJcbiAgICovXHJcbiAgUGF0Y2g6IHtcclxuICAgIGRpc3BsYXk6IFwicGF0Y2hcIixcclxuICAgIGNvZGU6IFwicGF0Y2hcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlYWQ6IFJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIFJlYWQ6IHtcclxuICAgIGRpc3BsYXk6IFwicmVhZFwiLFxyXG4gICAgY29kZTogXCJyZWFkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXN0ZnVsLWludGVyYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzZWFyY2g6IFNlYXJjaCBhIHJlc291cmNlIHR5cGUgb3IgYWxsIHJlc291cmNlcyBiYXNlZCBvbiBzb21lIGZpbHRlciBjcml0ZXJpYS5cclxuICAgKi9cclxuICBTZWFyY2g6IHtcclxuICAgIGRpc3BsYXk6IFwic2VhcmNoXCIsXHJcbiAgICBjb2RlOiBcInNlYXJjaFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoLXN5c3RlbTogU2VhcmNoIGFsbCByZXNvdXJjZXMgYmFzZWQgb24gc29tZSBmaWx0ZXIgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgU2VhcmNoU3lzdGVtOiB7XHJcbiAgICBkaXNwbGF5OiBcInNlYXJjaC1zeXN0ZW1cIixcclxuICAgIGNvZGU6IFwic2VhcmNoLXN5c3RlbVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoLXR5cGU6IFNlYXJjaCBhbGwgcmVzb3VyY2VzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBiYXNlZCBvbiBzb21lIGZpbHRlciBjcml0ZXJpYS5cclxuICAgKi9cclxuICBTZWFyY2hUeXBlOiB7XHJcbiAgICBkaXNwbGF5OiBcInNlYXJjaC10eXBlXCIsXHJcbiAgICBjb2RlOiBcInNlYXJjaC10eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXN0ZnVsLWludGVyYWN0aW9uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB0cmFuc2FjdGlvbjogVXBkYXRlLCBjcmVhdGUgb3IgZGVsZXRlIGEgc2V0IG9mIHJlc291cmNlcyBhcyBhIHNpbmdsZSB0cmFuc2FjdGlvbi5cclxuICAgKi9cclxuICBUcmFuc2FjdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJ0cmFuc2FjdGlvblwiLFxyXG4gICAgY29kZTogXCJ0cmFuc2FjdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdXBkYXRlOiBVcGRhdGUgYW4gZXhpc3RpbmcgcmVzb3VyY2UgYnkgaXRzIGlkIChvciBjcmVhdGUgaXQgaWYgaXQgaXMgbmV3KS5cclxuICAgKi9cclxuICBVcGRhdGU6IHtcclxuICAgIGRpc3BsYXk6IFwidXBkYXRlXCIsXHJcbiAgICBjb2RlOiBcInVwZGF0ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzdGZ1bC1pbnRlcmFjdGlvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdnJlYWQ6IFJlYWQgdGhlIHN0YXRlIG9mIGEgc3BlY2lmaWMgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgVnJlYWQ6IHtcclxuICAgIGRpc3BsYXk6IFwidnJlYWRcIixcclxuICAgIGNvZGU6IFwidnJlYWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc3RmdWwtaW50ZXJhY3Rpb25cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=