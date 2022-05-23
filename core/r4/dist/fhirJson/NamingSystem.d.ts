import * as fhir from '../fhirJson.js';
/**
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export interface NamingSystemUniqueId extends fhir.BackboneElement {
    /**
     * Different identifier types may be used in different types of communications (OIDs for v3, URIs for FHIR, etc.).  Other includes RUIDs from v3, standard v2 code name strings, etc.
     */
    type: 'oid' | 'other' | 'uri' | 'uuid' | null;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.type
     */
    _type?: fhir.FhirElement;
    /**
     * If the value is a URI intended for use as FHIR system identifier, the URI should not contain "\" or "?" or "," since this makes escaping very difficult.
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
     * e.g. "must be used in Germany" or "was initially published in error with this value".
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.uniqueId.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * Within a registry, a given identifier should only be "active" for a single namespace at a time.  (Ideally, an identifier should only ever be associated with a single namespace across all time).
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
    resourceType: "NamingSystem";
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of naming systems that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
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
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: NamingSystem.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
     */
    responsible?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.responsible
     */
    _responsible?: fhir.FhirElement;
    /**
     * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: NamingSystem.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
     */
    uniqueId: fhir.NamingSystemUniqueId[] | null;
}
//# sourceMappingURL=NamingSystem.d.ts.map