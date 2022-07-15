import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface NamingSystemContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the naming system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * Indicates how the system may be identified when referenced in electronic exchange.
 */
export interface NamingSystemUniqueId extends fhir.BackboneElement {
    /**
     * Identifies the unique identifier scheme used for this particular identifier.
     */
    type: 'oid' | 'other' | 'uri' | 'uuid' | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.type
     */
    _type?: fhir.FhirElement;
    /**
     * The string that should be sent over the wire to identify the code system or identifier system.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.value
     */
    _value?: fhir.FhirElement;
    /**
     * Indicates whether this identifier is the "preferred" identifier of this type.
     */
    preferred?: boolean | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.preferred
     */
    _preferred?: fhir.FhirElement;
    /**
     * Identifies the period of time over which this identifier is considered appropriate to refer to the naming system.  Outside of this window, the identifier might be non-deterministic.
     */
    period?: fhir.Period | undefined;
}
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export interface NamingSystem extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "NamingSystem" | null;
    /**
     * The descriptive name of this particular identifier type or code system.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.name
     */
    _name?: fhir.FhirElement;
    /**
     * Indicates whether the naming system is "ready for use" or not.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: NamingSystem.status
     */
    _status?: fhir.FhirElement;
    /**
     * Indicates the purpose for the naming system - what kinds of things does it make unique?
     */
    kind: 'codesystem' | 'identifier' | 'root' | null;
    /**
     * Extended properties for primitive element: NamingSystem.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the naming system.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.NamingSystemContact | null)[] | undefined;
    /**
     * The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
     */
    responsible?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.responsible
     */
    _responsible?: fhir.FhirElement;
    /**
     * The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.date
     */
    _date?: fhir.FhirElement;
    /**
     * Categorizes a naming system for easier search by grouping related naming systems.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Details about what the namespace identifies including scope, granularity, version labeling, etc.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.description
     */
    _description?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * Indicates how the system may be identified when referenced in electronic exchange.
     */
    uniqueId: (fhir.NamingSystemUniqueId | null)[] | null;
    /**
     * For naming systems that are retired, indicates the naming system that should be used in their place (if any).
     */
    replacedBy?: fhir.Reference | undefined;
}
//# sourceMappingURL=NamingSystem.d.ts.map