import * as fhir from '../fhir.js';
import { ResponseCodeType } from '../fhirValueSets/ResponseCodes.js';
/**
 * Valid arguments for the MessageHeaderDestination type.
 */
export interface MessageHeaderDestinationArgs extends fhir.BackboneElementArgs {
    /**
     * Human-readable name for the target system.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.endpoint
     */
    _endpoint?: fhir.FhirElementArgs;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhir.ReferenceArgs | undefined;
}
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export declare class MessageHeaderDestination extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Human-readable name for the target system.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhir.Reference | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: fhir.FhirUrl | null;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhir.Reference | undefined;
    /**
     * Default constructor for MessageHeaderDestination - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderDestinationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageHeaderSource type.
 */
export interface MessageHeaderSourceArgs extends fhir.BackboneElementArgs {
    /**
     * Human-readable name for the source system.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.software
     */
    _software?: fhir.FhirElementArgs;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhir.ContactPointArgs | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.endpoint
     */
    _endpoint?: fhir.FhirElementArgs;
}
/**
 * The source application from which this message originated.
 */
export declare class MessageHeaderSource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Human-readable name for the source system.
     */
    name?: fhir.FhirString | undefined;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: fhir.FhirString | undefined;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: fhir.FhirString | undefined;
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhir.ContactPoint | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: fhir.FhirUrl | null;
    /**
     * Default constructor for MessageHeaderSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderSourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MessageHeaderResponse type.
 */
export interface MessageHeaderResponseArgs extends fhir.BackboneElementArgs {
    /**
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.response.identifier
     */
    _identifier?: fhir.FhirElementArgs;
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code: fhir.FhirCode<ResponseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.response.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
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
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier: fhir.FhirId | null;
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code: fhir.FhirCode<ResponseCodeType> | null;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
     */
    details?: fhir.Reference | undefined;
    /**
     * Default constructor for MessageHeaderResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (MessageHeader.response.code)
     */
    static get codeRequiredCodes(): {
        readonly FatalError: "fatal-error";
        readonly OK: "ok";
        readonly TransientError: "transient-error";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    event?: fhir.Coding | fhir.FhirUri | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventCoding?: fhir.CodingArgs | undefined;
    /**
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    eventUri?: fhir.FhirUri | string | undefined;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination?: fhir.MessageHeaderDestinationArgs[] | undefined;
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhir.ReferenceArgs | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    author?: fhir.ReferenceArgs | undefined;
    /**
     * The source application from which this message originated.
     */
    source: fhir.MessageHeaderSourceArgs | null;
    /**
     * Usually only for the request but can be used in a response.
     */
    responsible?: fhir.ReferenceArgs | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponseArgs | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus?: fhir.ReferenceArgs[] | undefined;
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.definition
     */
    _definition?: fhir.FhirElementArgs;
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
     * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
     */
    event: (fhir.Coding | fhir.FhirUri) | null;
    /**
     * Internal flag to properly serialize choice-type element MessageHeader.event[x]
     */
    protected static readonly _fts_eventIsChoice: true;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination: fhir.MessageHeaderDestination[];
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Usually only for the request but can be used in a response.
     */
    author?: fhir.Reference | undefined;
    /**
     * The source application from which this message originated.
     */
    source: fhir.MessageHeaderSource | null;
    /**
     * Usually only for the request but can be used in a response.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponse | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus: fhir.Reference[];
    /**
     * Permanent link to the MessageDefinition for this message.
     */
    definition?: fhir.FhirCanonical | undefined;
    /**
     * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MessageHeaderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=MessageHeader.d.ts.map