import * as fhir from '../fhir.js';
import { NamingsystemIdentifierTypeCodeType } from '../fhirValueSets/NamingsystemIdentifierTypeCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
import { NamingsystemTypeCodeType } from '../fhirValueSets/NamingsystemTypeCodes.js';
/**
 * Valid arguments for the NamingSystemContact type.
 */
export interface NamingSystemContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the naming system.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.contact.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
}
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export declare class NamingSystemContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the naming system.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for NamingSystemContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NamingSystemContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NamingSystemUniqueId type.
 */
export interface NamingSystemUniqueIdArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the unique identifier scheme used for this particular identifier.
     */
    type: fhir.FhirCode<NamingsystemIdentifierTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The string that should be sent over the wire to identify the code system or identifier system.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.preferred
     */
    _preferred?: fhir.FhirElementArgs;
    /**
     * Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * Indicates how the system may be identified when referenced in electronic exchange.
 */
export declare class NamingSystemUniqueId extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies the unique identifier scheme used for this particular identifier.
     */
    type: fhir.FhirCode<NamingsystemIdentifierTypeCodeType> | null;
    /**
     * The string that should be sent over the wire to identify the code system or identifier system.
     */
    value: fhir.FhirString | null;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: fhir.FhirBoolean | undefined;
    /**
     * Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for NamingSystemUniqueId - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NamingSystemUniqueIdArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NamingSystem type.
 */
export interface NamingSystemArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem" | undefined;
    /**
     * The descriptive name of this particular identifier type or code system.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Indicates whether the naming system is "ready for use" or not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: fhir.FhirCode<NamingsystemTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the naming system.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.NamingSystemContactArgs[] | undefined;
    /**
     * The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
     */
    responsible?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.responsible
     */
    _responsible?: fhir.FhirElementArgs;
    /**
     * The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Categorizes a naming system for easier search by grouping related naming systems.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Details about what the namespace identifies including scope, granularity, version labeling, etc.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * Indicates how the system may be identified when referenced in electronic exchange.
     */
    uniqueId: fhir.NamingSystemUniqueIdArgs[] | null;
    /**
     * For naming systems that are retired, indicates the naming system that should be used in their place (if any).
     */
    replacedBy?: fhir.ReferenceArgs | undefined;
}
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export declare class NamingSystem extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem";
    /**
     * The descriptive name of this particular identifier type or code system.
     */
    name: fhir.FhirString | null;
    /**
     * Indicates whether the naming system is "ready for use" or not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: fhir.FhirCode<NamingsystemTypeCodeType> | null;
    /**
     * Helps establish the "authority/credibility" of the naming system.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.NamingSystemContact[];
    /**
     * The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
     */
    responsible?: fhir.FhirString | undefined;
    /**
     * The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Categorizes a naming system for easier search by grouping related naming systems.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Details about what the namespace identifies including scope, granularity, version labeling, etc.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate content.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * Indicates how the system may be identified when referenced in electronic exchange.
     */
    uniqueId: fhir.NamingSystemUniqueId[];
    /**
     * For naming systems that are retired, indicates the naming system that should be used in their place (if any).
     */
    replacedBy?: fhir.Reference | undefined;
    /**
     * Default constructor for NamingSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NamingSystemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=NamingSystem.d.ts.map