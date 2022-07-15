import * as fhir from '../fhirJson.js';
/**
 * An external specification that the content is mapped to.
 */
export interface StructureDefinitionMapping extends fhir.BackboneElement {
    /**
     * The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.identity
     */
    _identity?: fhir.FhirElement;
    /**
     * A formal identity for the specification being mapped to helps with identifying maps consistently.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.uri
     */
    _uri?: fhir.FhirElement;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.name
     */
    _name?: fhir.FhirElement;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.comment
     */
    _comment?: fhir.FhirElement;
}
/**
 * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
 */
export interface StructureDefinitionSnapshot extends fhir.BackboneElement {
    /**
     * Captures constraints on each element within the resource.
     */
    element: (fhir.ElementDefinition | null)[] | null;
}
/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
export interface StructureDefinitionDifferential extends fhir.BackboneElement {
    /**
     * Captures constraints on each element within the resource.
     */
    element: (fhir.ElementDefinition | null)[] | null;
}
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
export interface StructureDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "StructureDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this structure definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different structure definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the structure definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc. Applications don't have to use this name, but can always fall back to it. The title also corresponds to the label for the root element.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of structure definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired structure definition without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: StructureDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of structure definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental structure definition in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the structure definition is the organization or individual primarily responsible for the maintenance and upkeep of the structure definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the structure definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the structure definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the structure definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates.
     */
    keyword?: (fhir.Coding | null)[] | undefined;
    /**
     * A StructureDefinition does not need to specify the target it applies to,as StructureDefinitions will often be valid across multiple versions of FHIR. FHIR tooling can determine whether a StructureDefinition is consistent with a particular StructureDefinition if desired.
     */
    fhirVersion?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement;
    /**
     * An external specification that the content is mapped to.
     */
    mapping?: (fhir.StructureDefinitionMapping | null)[] | undefined;
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind: 'complex-type' | 'logical' | 'primitive-type' | 'resource' | null;
    /**
     * Extended properties for primitive element: StructureDefinition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * Abstract Resources cannot be instantiated - a concrete sub-type must be used. Abstract datatypes and extensions cannot be used in an instance. For logical models, the exact implication of "abstract" will rest with the author, depending how the logical model is used. Flagging a constraint structure as abstract conveys design intent but makes no difference to how the structure definition is handled. Note that inline declared elements that are given the type "Element" in the profile, but have children described, are anonymous concrete types that specialise Element.
     */
    abstract: boolean | null;
    /**
     * Extended properties for primitive element: StructureDefinition.abstract
     */
    _abstract?: fhir.FhirElement;
    /**
     * If this is an extension, Identifies the context within FHIR resources where the extension can be used.
     */
    contextType?: 'datatype' | 'extension' | 'resource' | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.contextType
     */
    _contextType?: fhir.FhirElement;
    /**
     * If the context is an element that can have multiple types, then use (e.g.) value[x] if the extension works on all choice types, or otherwise an enumeration of explicitly named elements if not. Note that a context of "string" doesn't mean that the extension can be used with one of the string patterns such as "id" etc.
     */
    context?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.context
     */
    _context?: (fhir.FhirElement | null)[];
    /**
     * All the rules must be true. When evaluating the invariant, the fluentpath focus is the element that holds the extension, and %extension refers to the extension itself.
     */
    contextInvariant?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.contextInvariant
     */
    _contextInvariant?: (fhir.FhirElement | null)[];
    /**
     * Note that in the case of constraints, the type could be determined by chasing through the baseDefinition references until a concrete structure (derivation = specialization) is reached, or by looking at the path of the first element in the snapshot - if present - but providing the type directly makes for simpler tooling and indexing.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Element" or another logical model.
     */
    baseDefinition?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.baseDefinition
     */
    _baseDefinition?: fhir.FhirElement;
    /**
     * If the definition is a specialization, then it adds new elements in the differential, and the snapshot includes the inherited elements.
     * If the definition is a constraint, then it can not define new elements, it can only make new rules about existing content (see [Profiling Resources](profiling.html#resources)).
     */
    derivation?: 'constraint' | 'specialization' | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.derivation
     */
    _derivation?: fhir.FhirElement;
    /**
     * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: fhir.StructureDefinitionSnapshot | undefined;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: fhir.StructureDefinitionDifferential | undefined;
}
//# sourceMappingURL=StructureDefinition.d.ts.map