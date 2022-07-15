import * as fhir from '../fhir.js';
import { ResponseCodeType } from '../fhirValueSets/ResponseCodes.js';
/**
 * Valid arguments for the MessageHeaderResponse type.
 */
export interface MessageHeaderResponseArgs extends fhir.BackboneElementArgs {
    /**
     * Allows receiver to know what message is being responded to.
     */
    identifier: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.response.identifier
     */
    _identifier?: fhir.FhirElementArgs;
    /**
     * Allows the sender of the acknowledge message to know if the request was successful or if action is needed.
     */
    code: fhir.FhirCode<ResponseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.response.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Allows the sender of the message to determine what the specific issues are.
     */
    details?: fhir.ReferenceArgs | undefined;
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export declare class MessageHeaderResponse extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Allows receiver to know what message is being responded to.
     */
    identifier: fhir.FhirId | null;
    /**
     * Allows the sender of the acknowledge message to know if the request was successful or if action is needed.
     */
    code: fhir.FhirCode<ResponseCodeType> | null;
    /**
     * Allows the sender of the message to determine what the specific issues are.
     */
    details?: fhir.Reference | undefined;
    /**
     * Default constructor for MessageHeaderResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageHeaderSource type.
 */
export interface MessageHeaderSourceArgs extends fhir.BackboneElementArgs {
    /**
     * May be used to support audit.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Supports audit and possibly interface engine behavior.
     */
    software?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.software
     */
    _software?: fhir.FhirElementArgs;
    /**
     * Supports audit and possibly interface engine behavior.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Allows escalation of technical issues.
     */
    contact?: fhir.ContactPointArgs | undefined;
    /**
     * Identifies where to send responses, may influence security permissions.
     */
    endpoint: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.endpoint
     */
    _endpoint?: fhir.FhirElementArgs;
}
/**
 * Allows replies, supports audit.
 */
export declare class MessageHeaderSource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * May be used to support audit.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Supports audit and possibly interface engine behavior.
     */
    software?: fhir.FhirString | undefined;
    /**
     * Supports audit and possibly interface engine behavior.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Allows escalation of technical issues.
     */
    contact?: fhir.ContactPoint | undefined;
    /**
     * Identifies where to send responses, may influence security permissions.
     */
    endpoint: fhir.FhirUri | null;
    /**
     * Default constructor for MessageHeaderSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderSourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageHeaderDestination type.
 */
export interface MessageHeaderDestinationArgs extends fhir.BackboneElementArgs {
    /**
     * May be used for routing of response and/or to support audit.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Supports multi-hop routing.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies where to route the message.
     */
    endpoint: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.endpoint
     */
    _endpoint?: fhir.FhirElementArgs;
}
/**
 * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
 */
export declare class MessageHeaderDestination extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * May be used for routing of response and/or to support audit.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Supports multi-hop routing.
     */
    target?: fhir.Reference | undefined;
    /**
     * Identifies where to route the message.
     */
    endpoint: fhir.FhirUri | null;
    /**
     * Default constructor for MessageHeaderDestination - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderDestinationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageHeader type.
 */
export interface MessageHeaderArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MessageHeader" | undefined;
    /**
     * Allows limited detection of out-of-order and delayed transmission.  Also supports audit.
     */
    timestamp: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.timestamp
     */
    _timestamp?: fhir.FhirElementArgs;
    /**
     * Drives the behavior associated with this message.
     */
    event: fhir.CodingArgs | null;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponseArgs | undefined;
    /**
     * Allows replies, supports audit.
     */
    source: fhir.MessageHeaderSourceArgs | null;
    /**
     * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
     */
    destination?: fhir.MessageHeaderDestinationArgs[] | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * Allows routing beyond just the application level.
     */
    receiver?: fhir.ReferenceArgs | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    responsible?: fhir.ReferenceArgs | undefined;
    /**
     * Need to be able to track why resources are being changed and report in the audit log/history of the resource.  May affect authorization.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Every message event is about actual data, a single resource, that is identified in the definition of the event, and perhaps some or all linked resources.
     */
    data?: fhir.ReferenceArgs[] | undefined;
}
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export declare class MessageHeader extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MessageHeader";
    /**
     * Allows limited detection of out-of-order and delayed transmission.  Also supports audit.
     */
    timestamp: fhir.FhirInstant | null;
    /**
     * Drives the behavior associated with this message.
     */
    event: fhir.Coding | null;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponse | undefined;
    /**
     * Allows replies, supports audit.
     */
    source: fhir.MessageHeaderSource | null;
    /**
     * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
     */
    destination: fhir.MessageHeaderDestination[];
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    author?: fhir.Reference | undefined;
    /**
     * Allows routing beyond just the application level.
     */
    receiver?: fhir.Reference | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Need to be able to track why resources are being changed and report in the audit log/history of the resource.  May affect authorization.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Every message event is about actual data, a single resource, that is identified in the definition of the event, and perhaps some or all linked resources.
     */
    data: fhir.Reference[];
    /**
     * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MessageHeader.d.ts.map