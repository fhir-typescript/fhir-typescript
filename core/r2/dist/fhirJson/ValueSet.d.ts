import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface ValueSetContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the value set.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
 */
export interface ValueSetCodeSystemConceptDesignation extends fhir.BackboneElement {
    /**
     * The language this designation is defined for.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.designation.language
     */
    _language?: fhir.FhirElement;
    /**
     * A code that details how this designation would be used.
     */
    use?: fhir.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.designation.value
     */
    _value?: fhir.FhirElement;
}
/**
 * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
 */
export interface ValueSetCodeSystemConcept extends fhir.BackboneElement {
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.code
     */
    _code?: fhir.FhirElement;
    /**
     * If this code is not for use as a real concept.
     */
    abstract?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.abstract
     */
    _abstract?: fhir.FhirElement;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.display
     */
    _display?: fhir.FhirElement;
    /**
     * The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
     */
    designation?: (fhir.ValueSetCodeSystemConceptDesignation | null)[] | undefined;
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) and can only be determined by examining the definitions of the concepts.
     */
    concept?: (fhir.ValueSetCodeSystemConcept | null)[] | undefined;
}
/**
 * A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.
 */
export interface ValueSetCodeSystem extends fhir.BackboneElement {
    /**
     * An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.
     */
    system: string | null;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.system
     */
    _system?: fhir.FhirElement;
    /**
     * The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.version
     */
    _version?: fhir.FhirElement;
    /**
     * If code comparison is case sensitive when codes within this system are compared to each other.
     */
    caseSensitive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.caseSensitive
     */
    _caseSensitive?: fhir.FhirElement;
    /**
     * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
     */
    concept: (fhir.ValueSetCodeSystemConcept | null)[] | null;
}
/**
 * Specifies a concept to be included or excluded.
 */
export interface ValueSetComposeIncludeConcept extends fhir.BackboneElement {
    /**
     * Specifies a code for the concept to be included or excluded.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.code
     */
    _code?: fhir.FhirElement;
    /**
     * The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.display
     */
    _display?: fhir.FhirElement;
    /**
     * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation?: (fhir.ValueSetCodeSystemConceptDesignation | null)[] | undefined;
}
/**
 * Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
 */
export interface ValueSetComposeIncludeFilter extends fhir.BackboneElement {
    /**
     * A code that identifies a property defined in the code system.
     */
    property: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.property
     */
    _property?: fhir.FhirElement;
    /**
     * The kind of operation to perform as a part of the filter criteria.
     */
    op: '=' | 'in' | 'is-a' | 'is-not-a' | 'not-in' | 'regex' | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.op
     */
    _op?: fhir.FhirElement;
    /**
     * The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.value
     */
    _value?: fhir.FhirElement;
}
/**
 * Include one or more codes from a code system.
 */
export interface ValueSetComposeInclude extends fhir.BackboneElement {
    /**
     * An absolute URI which is the code system from which the selected codes come from.
     */
    system: string | null;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.system
     */
    _system?: fhir.FhirElement;
    /**
     * The version of the code system that the codes are selected from.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.version
     */
    _version?: fhir.FhirElement;
    /**
     * Specifies a concept to be included or excluded.
     */
    concept?: (fhir.ValueSetComposeIncludeConcept | null)[] | undefined;
    /**
     * Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
     */
    filter?: (fhir.ValueSetComposeIncludeFilter | null)[] | undefined;
}
/**
 * A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.
 */
export interface ValueSetCompose extends fhir.BackboneElement {
    /**
     * Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.
     */
    import?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.import
     */
    _import?: (fhir.FhirElement | null)[];
    /**
     * Include one or more codes from a code system.
     */
    include?: (fhir.ValueSetComposeInclude | null)[] | undefined;
    /**
     * Exclude one or more codes from the value set.
     */
    exclude?: (fhir.ValueSetComposeInclude | null)[] | undefined;
}
/**
 * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
 */
export interface ValueSetExpansionParameter extends fhir.BackboneElement {
    /**
     * The name of the parameter.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * The value of the parameter.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The value of the parameter.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * The value of the parameter.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The value of the parameter.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * The value of the parameter.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * The value of the parameter.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.value[x]
     */
    _valueCode?: fhir.FhirElement;
}
/**
 * The codes that are contained in the value set expansion.
 */
export interface ValueSetExpansionContains extends fhir.BackboneElement {
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.system
     */
    _system?: fhir.FhirElement;
    /**
     * If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
     */
    abstract?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.abstract
     */
    _abstract?: fhir.FhirElement;
    /**
     * The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.version
     */
    _version?: fhir.FhirElement;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.code
     */
    _code?: fhir.FhirElement;
    /**
     * The recommended display for this item in the expansion.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.display
     */
    _display?: fhir.FhirElement;
    /**
     * Other codes and entries contained under this entry in the hierarchy.
     */
    contains?: (fhir.ValueSetExpansionContains | null)[] | undefined;
}
/**
 * A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
 */
export interface ValueSetExpansion extends fhir.BackboneElement {
    /**
     * An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.
     */
    identifier: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.identifier
     */
    _identifier?: fhir.FhirElement;
    /**
     * The time at which the expansion was produced by the expanding system.
     */
    timestamp: string | null;
    /**
     * Extended properties for primitive element: ValueSet.expansion.timestamp
     */
    _timestamp?: fhir.FhirElement;
    /**
     * The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
     */
    total?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.total
     */
    _total?: fhir.FhirElement;
    /**
     * If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.
     */
    offset?: number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.offset
     */
    _offset?: fhir.FhirElement;
    /**
     * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
     */
    parameter?: (fhir.ValueSetExpansionParameter | null)[] | undefined;
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: (fhir.ValueSetExpansionContains | null)[] | undefined;
}
/**
 * A value set specifies a set of codes drawn from one or more code systems.
 */
export interface ValueSet extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ValueSet" | null;
    /**
     * An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.url
     */
    _url?: fhir.FhirElement;
    /**
     * Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.version
     */
    _version?: fhir.FhirElement;
    /**
     * Support human navigation.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.name
     */
    _name?: fhir.FhirElement;
    /**
     * Identify when/if the value set should be used.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: ValueSet.status
     */
    _status?: fhir.FhirElement;
    /**
     * This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the value set.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.ValueSetContact | null)[] | undefined;
    /**
     * Need to know when a value set was first legal for use or became withdrawn or replaced.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.date
     */
    _date?: fhir.FhirElement;
    /**
     * If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.
     */
    lockedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.lockedDate
     */
    _lockedDate?: fhir.FhirElement;
    /**
     * Human understandability.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.description
     */
    _description?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
     */
    immutable?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.immutable
     */
    _immutable?: fhir.FhirElement;
    /**
     * Explains why this value set is needed and why it has been constrained as it has.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * It is not required to say whether this intent applies.
     */
    extensible?: boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.extensible
     */
    _extensible?: fhir.FhirElement;
    /**
     * A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.
     */
    codeSystem?: fhir.ValueSetCodeSystem | undefined;
    /**
     * A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.
     */
    compose?: fhir.ValueSetCompose | undefined;
    /**
     * A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
     */
    expansion?: fhir.ValueSetExpansion | undefined;
}
//# sourceMappingURL=ValueSet.d.ts.map