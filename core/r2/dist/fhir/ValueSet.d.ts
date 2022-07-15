import * as fhir from '../fhir.js';
import { FilterOperatorCodeType } from '../fhirValueSets/FilterOperatorCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
/**
 * Valid arguments for the ValueSetContact type.
 */
export interface ValueSetContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the value set.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.contact.name
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
export declare class ValueSetContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the value set.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for ValueSetContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetCodeSystemConceptDesignation type.
 */
export interface ValueSetCodeSystemConceptDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * The language this designation is defined for.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.designation.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * A code that details how this designation would be used.
     */
    use?: fhir.CodingArgs | undefined;
    /**
     * The text value for this designation.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.designation.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
 */
export declare class ValueSetCodeSystemConceptDesignation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The language this designation is defined for.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * A code that details how this designation would be used.
     */
    use?: fhir.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for ValueSetCodeSystemConceptDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetCodeSystemConceptDesignationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetCodeSystemConcept type.
 */
export interface ValueSetCodeSystemConceptArgs extends fhir.BackboneElementArgs {
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * If this code is not for use as a real concept.
     */
    abstract?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.abstract
     */
    _abstract?: fhir.FhirElementArgs;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.concept.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
     */
    designation?: fhir.ValueSetCodeSystemConceptDesignationArgs[] | undefined;
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) and can only be determined by examining the definitions of the concepts.
     */
    concept?: fhir.ValueSetCodeSystemConceptArgs[] | undefined;
}
/**
 * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
 */
export declare class ValueSetCodeSystemConcept extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: fhir.FhirCode | null;
    /**
     * If this code is not for use as a real concept.
     */
    abstract?: fhir.FhirBoolean | undefined;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: fhir.FhirString | undefined;
    /**
     * The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: fhir.FhirString | undefined;
    /**
     * Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
     */
    designation: fhir.ValueSetCodeSystemConceptDesignation[];
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) and can only be determined by examining the definitions of the concepts.
     */
    concept: fhir.ValueSetCodeSystemConcept[];
    /**
     * Default constructor for ValueSetCodeSystemConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetCodeSystemConceptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetCodeSystem type.
 */
export interface ValueSetCodeSystemArgs extends fhir.BackboneElementArgs {
    /**
     * An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.
     */
    system: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * If code comparison is case sensitive when codes within this system are compared to each other.
     */
    caseSensitive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.codeSystem.caseSensitive
     */
    _caseSensitive?: fhir.FhirElementArgs;
    /**
     * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
     */
    concept: fhir.ValueSetCodeSystemConceptArgs[] | null;
}
/**
 * A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.
 */
export declare class ValueSetCodeSystem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.
     */
    system: fhir.FhirUri | null;
    /**
     * The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.
     */
    version?: fhir.FhirString | undefined;
    /**
     * If code comparison is case sensitive when codes within this system are compared to each other.
     */
    caseSensitive?: fhir.FhirBoolean | undefined;
    /**
     * Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
     */
    concept: fhir.ValueSetCodeSystemConcept[];
    /**
     * Default constructor for ValueSetCodeSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetCodeSystemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetComposeIncludeConcept type.
 */
export interface ValueSetComposeIncludeConceptArgs extends fhir.BackboneElementArgs {
    /**
     * Specifies a code for the concept to be included or excluded.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation?: fhir.ValueSetCodeSystemConceptDesignationArgs[] | undefined;
}
/**
 * Specifies a concept to be included or excluded.
 */
export declare class ValueSetComposeIncludeConcept extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specifies a code for the concept to be included or excluded.
     */
    code: fhir.FhirCode | null;
    /**
     * The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation: fhir.ValueSetCodeSystemConceptDesignation[];
    /**
     * Default constructor for ValueSetComposeIncludeConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetComposeIncludeConceptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetComposeIncludeFilter type.
 */
export interface ValueSetComposeIncludeFilterArgs extends fhir.BackboneElementArgs {
    /**
     * A code that identifies a property defined in the code system.
     */
    property: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.property
     */
    _property?: fhir.FhirElementArgs;
    /**
     * The kind of operation to perform as a part of the filter criteria.
     */
    op: fhir.FhirCode<FilterOperatorCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.op
     */
    _op?: fhir.FhirElementArgs;
    /**
     * The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value.
     */
    value: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
 */
export declare class ValueSetComposeIncludeFilter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that identifies a property defined in the code system.
     */
    property: fhir.FhirCode | null;
    /**
     * The kind of operation to perform as a part of the filter criteria.
     */
    op: fhir.FhirCode<FilterOperatorCodeType> | null;
    /**
     * The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value.
     */
    value: fhir.FhirCode | null;
    /**
     * Default constructor for ValueSetComposeIncludeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetComposeIncludeFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetComposeInclude type.
 */
export interface ValueSetComposeIncludeArgs extends fhir.BackboneElementArgs {
    /**
     * An absolute URI which is the code system from which the selected codes come from.
     */
    system: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * The version of the code system that the codes are selected from.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Specifies a concept to be included or excluded.
     */
    concept?: fhir.ValueSetComposeIncludeConceptArgs[] | undefined;
    /**
     * Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
     */
    filter?: fhir.ValueSetComposeIncludeFilterArgs[] | undefined;
}
/**
 * Include one or more codes from a code system.
 */
export declare class ValueSetComposeInclude extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An absolute URI which is the code system from which the selected codes come from.
     */
    system: fhir.FhirUri | null;
    /**
     * The version of the code system that the codes are selected from.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Specifies a concept to be included or excluded.
     */
    concept: fhir.ValueSetComposeIncludeConcept[];
    /**
     * Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
     */
    filter: fhir.ValueSetComposeIncludeFilter[];
    /**
     * Default constructor for ValueSetComposeInclude - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetComposeIncludeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetCompose type.
 */
export interface ValueSetComposeArgs extends fhir.BackboneElementArgs {
    /**
     * Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.
     */
    import?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.import
     */
    _import?: (fhir.FhirElementArgs | null)[];
    /**
     * Include one or more codes from a code system.
     */
    include?: fhir.ValueSetComposeIncludeArgs[] | undefined;
    /**
     * Exclude one or more codes from the value set.
     */
    exclude?: fhir.ValueSetComposeIncludeArgs[] | undefined;
}
/**
 * A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.
 */
export declare class ValueSetCompose extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.
     */
    import: fhir.FhirUri[];
    /**
     * Include one or more codes from a code system.
     */
    include: fhir.ValueSetComposeInclude[];
    /**
     * Exclude one or more codes from the value set.
     */
    exclude: fhir.ValueSetComposeInclude[];
    /**
     * Default constructor for ValueSetCompose - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetComposeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetExpansionParameter type.
 */
export interface ValueSetExpansionParameterArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the parameter.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.parameter.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The value of the parameter.
     */
    value?: fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirUri | fhir.FhirCode | undefined;
    /**
     * The value of the parameter.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The value of the parameter.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value of the parameter.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The value of the parameter.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The value of the parameter.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * The value of the parameter.
     */
    valueCode?: fhir.FhirCode | string | undefined;
}
/**
 * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
 */
export declare class ValueSetExpansionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the parameter.
     */
    name: fhir.FhirString | null;
    /**
     * The value of the parameter.
     */
    value?: (fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirUri | fhir.FhirCode) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ValueSet.expansion.parameter.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for ValueSetExpansionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetExpansionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetExpansionContains type.
 */
export interface ValueSetExpansionContainsArgs extends fhir.BackboneElementArgs {
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
     */
    abstract?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.abstract
     */
    _abstract?: fhir.FhirElementArgs;
    /**
     * The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The recommended display for this item in the expansion.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Other codes and entries contained under this entry in the hierarchy.
     */
    contains?: fhir.ValueSetExpansionContainsArgs[] | undefined;
}
/**
 * The codes that are contained in the value set expansion.
 */
export declare class ValueSetExpansionContains extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
     */
    abstract?: fhir.FhirBoolean | undefined;
    /**
     * The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.
     */
    version?: fhir.FhirString | undefined;
    /**
     * The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * The recommended display for this item in the expansion.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Other codes and entries contained under this entry in the hierarchy.
     */
    contains: fhir.ValueSetExpansionContains[];
    /**
     * Default constructor for ValueSetExpansionContains - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetExpansionContainsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSetExpansion type.
 */
export interface ValueSetExpansionArgs extends fhir.BackboneElementArgs {
    /**
     * An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.
     */
    identifier: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.identifier
     */
    _identifier?: fhir.FhirElementArgs;
    /**
     * The time at which the expansion was produced by the expanding system.
     */
    timestamp: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.timestamp
     */
    _timestamp?: fhir.FhirElementArgs;
    /**
     * The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
     */
    total?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.total
     */
    _total?: fhir.FhirElementArgs;
    /**
     * If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.
     */
    offset?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.offset
     */
    _offset?: fhir.FhirElementArgs;
    /**
     * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
     */
    parameter?: fhir.ValueSetExpansionParameterArgs[] | undefined;
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: fhir.ValueSetExpansionContainsArgs[] | undefined;
}
/**
 * A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
 */
export declare class ValueSetExpansion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.
     */
    identifier: fhir.FhirUri | null;
    /**
     * The time at which the expansion was produced by the expanding system.
     */
    timestamp: fhir.FhirDateTime | null;
    /**
     * The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
     */
    total?: fhir.FhirInteger | undefined;
    /**
     * If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.
     */
    offset?: fhir.FhirInteger | undefined;
    /**
     * A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
     */
    parameter: fhir.ValueSetExpansionParameter[];
    /**
     * The codes that are contained in the value set expansion.
     */
    contains: fhir.ValueSetExpansionContains[];
    /**
     * Default constructor for ValueSetExpansion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetExpansionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ValueSet type.
 */
export interface ValueSetArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ValueSet" | undefined;
    /**
     * An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Support human navigation.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Identify when/if the value set should be used.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the value set.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.ValueSetContactArgs[] | undefined;
    /**
     * Need to know when a value set was first legal for use or became withdrawn or replaced.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.
     */
    lockedDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.lockedDate
     */
    _lockedDate?: fhir.FhirElementArgs;
    /**
     * Human understandability.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
     */
    immutable?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.immutable
     */
    _immutable?: fhir.FhirElementArgs;
    /**
     * Explains why this value set is needed and why it has been constrained as it has.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * It is not required to say whether this intent applies.
     */
    extensible?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.extensible
     */
    _extensible?: fhir.FhirElementArgs;
    /**
     * A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.
     */
    codeSystem?: fhir.ValueSetCodeSystemArgs | undefined;
    /**
     * A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.
     */
    compose?: fhir.ValueSetComposeArgs | undefined;
    /**
     * A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
     */
    expansion?: fhir.ValueSetExpansionArgs | undefined;
}
/**
 * A value set specifies a set of codes drawn from one or more code systems.
 */
export declare class ValueSet extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ValueSet";
    /**
     * An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Support human navigation.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Identify when/if the value set should be used.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the value set.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.ValueSetContact[];
    /**
     * Need to know when a value set was first legal for use or became withdrawn or replaced.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.
     */
    lockedDate?: fhir.FhirDate | undefined;
    /**
     * Human understandability.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate content.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
     */
    immutable?: fhir.FhirBoolean | undefined;
    /**
     * Explains why this value set is needed and why it has been constrained as it has.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * It is not required to say whether this intent applies.
     */
    extensible?: fhir.FhirBoolean | undefined;
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
    /**
     * Default constructor for ValueSet - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ValueSet.d.ts.map