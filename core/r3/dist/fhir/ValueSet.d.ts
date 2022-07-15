import * as fhir from '../fhir.js';
import { FilterOperatorCodeType } from '../fhirValueSets/FilterOperatorCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ValueSetComposeIncludeConceptDesignation type.
 */
export interface ValueSetComposeIncludeConceptDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.designation.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhir.CodingArgs | undefined;
    /**
     * The text value for this designation.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.designation.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
 */
export declare class ValueSetComposeIncludeConceptDesignation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhir.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for ValueSetComposeIncludeConceptDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ValueSetComposeIncludeConceptDesignationArgs>, options?: fhir.FhirConstructorOptions);
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
     * Expressions are allowed if defined by the underlying code system.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.concept.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation?: fhir.ValueSetComposeIncludeConceptDesignationArgs[] | undefined;
}
/**
 * The list of concepts is considered ordered, though the order may not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
 */
export declare class ValueSetComposeIncludeConcept extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Expressions are allowed if defined by the underlying code system.
     */
    code: fhir.FhirCode | null;
    /**
     * The value set resource allows for an alternative display to be specified for when this concept is used in this particular value set. See notes in the value set narrative about the correct use of this element.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation: fhir.ValueSetComposeIncludeConceptDesignation[];
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
     * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
     */
    value: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.filter.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
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
     * Use regex matching with care - full regex matching on every SNOMED CT term is prohibitive, for example.
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
     * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See ''Coding.system'' for further documentation about the correct value for the system element.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set may not be known until a context of use binds it to a particular version.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The list of concepts is considered ordered, though the order may not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
     */
    concept?: fhir.ValueSetComposeIncludeConceptArgs[] | undefined;
    /**
     * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
     */
    filter?: fhir.ValueSetComposeIncludeFilterArgs[] | undefined;
    /**
     * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set]{snomedct.html#implicit}, or a direct reference to a value set definition using ValueSet.url. The reference may not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
     */
    valueSet?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.include.valueSet
     */
    _valueSet?: (fhir.FhirElementArgs | null)[];
}
/**
 * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
 */
export declare class ValueSetComposeInclude extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If there are no codes or filters, the entire code system is included. Note that the set of codes that are included may contain abstract codes. See ''Coding.system'' for further documentation about the correct value for the system element.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * This is used when selecting the descendants of a concept - they may change between versions. If no version is specified, then the exact contents of the value set may not be known until a context of use binds it to a particular version.
     */
    version?: fhir.FhirString | undefined;
    /**
     * The list of concepts is considered ordered, though the order may not have any particular significance. Typically, the order of an expansion follows that defined in the compose element.
     */
    concept: fhir.ValueSetComposeIncludeConcept[];
    /**
     * Selecting codes by specifying filters based on properties is only possible where the underlying code system defines appropriate properties. Note that in some cases, the underlying code system defines the logical concepts but not the literal codes for the concepts. In such cases, the literal definitions may be provided by a third party.
     */
    filter: fhir.ValueSetComposeIncludeFilter[];
    /**
     * The value set URI is either a logical reference to a defined value set such as a [SNOMED CT reference set]{snomedct.html#implicit}, or a direct reference to a value set definition using ValueSet.url. The reference may not refer to an actual FHIR ValueSet resource; in this case, whatever is referred to is an implicit definition of a value set that needs to be clear about how versions are resolved.
     */
    valueSet: fhir.FhirUri[];
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
     * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
     */
    lockedDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.lockedDate
     */
    _lockedDate?: fhir.FhirElementArgs;
    /**
     * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems (e.g. LOINC, deprecated means inactive). Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active.
     */
    inactive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.compose.inactive
     */
    _inactive?: fhir.FhirElementArgs;
    /**
     * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
     */
    include: fhir.ValueSetComposeIncludeArgs[] | null;
    /**
     * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
     */
    exclude?: fhir.ValueSetComposeIncludeArgs[] | undefined;
}
/**
 * A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the "Content Logical Definition" (CLD).
 */
export declare class ValueSetCompose extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * With a defined lockedDate the value set is considered "Locked". Otherwise, the value set may have different expansions as underlying code systems and/or value sets evolve.  The interpretation of lockedDate is often dependent on the context - e.g. a SNOMED CT derived value set with a lockedDate will have a different expansion in USA than in UK.  If a value set specifies a version for include and exclude statements, and also specifies a locked date, the specified versions need to be available that date, or the value set will not be usable.
     */
    lockedDate?: fhir.FhirDate | undefined;
    /**
     * Note that in the FHIR terminology framework, "deprecated" does not mean inactive, but in some code systems (e.g. LOINC, deprecated means inactive). Code systems should define what codes are considered to be inactive. If this is not clearly defined (including in the FHIR code system resource), then all codes are assumed to be active.
     */
    inactive?: fhir.FhirBoolean | undefined;
    /**
     * All the conditions in an include must be true. If a system is listed, all the codes from the system are listed. If one or more filters are listed, all of the filters must apply. If one or more value sets are listed, the codes must be in all the value sets. E.g. each include is 'include all the codes that meet all these conditions'.
     */
    include: fhir.ValueSetComposeInclude[];
    /**
     * Usually this is used to selectively exclude codes that were included by subsumption in the inclusions. Any display names specified for the codes are ignored.
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
     * The names are assigned at the discretion of the server.
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
 * The server decides which parameters to include here, but at a minimum, the list SHOULD include the date, filter, and profile parameters passed to the $expand operation (if any).
 */
export declare class ValueSetExpansionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The names are assigned at the discretion of the server.
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
     * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
     */
    abstract?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.abstract
     */
    _abstract?: fhir.FhirElementArgs;
    /**
     * This should only have a value if the concept is inactive.
     */
    inactive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.contains.inactive
     */
    _inactive?: fhir.FhirElementArgs;
    /**
     * The exact value of the version string is specified by the system from which the code is derived.
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
     * The designations provided must be based on the value set and code system definitions.
     */
    designation?: fhir.ValueSetComposeIncludeConceptDesignationArgs[] | undefined;
    /**
     * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
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
     * This should not be understood to exclude its use for searching (e.g. by subsumption testing). The client should know whether it is appropriate for the user to select an abstract code or not.
     */
    abstract?: fhir.FhirBoolean | undefined;
    /**
     * This should only have a value if the concept is inactive.
     */
    inactive?: fhir.FhirBoolean | undefined;
    /**
     * The exact value of the version string is specified by the system from which the code is derived.
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
     * The designations provided must be based on the value set and code system definitions.
     */
    designation: fhir.ValueSetComposeIncludeConceptDesignation[];
    /**
     * If the expansion uses this element, there is  no implication about the logical relationship between them, and the  structure cannot be used for logical inferencing. The structure  exists to provide navigational assistance for helping human users to  locate codes in the expansion.
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
     * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
     */
    identifier: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.identifier
     */
    _identifier?: fhir.FhirElementArgs;
    /**
     * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
     */
    timestamp: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.timestamp
     */
    _timestamp?: fhir.FhirElementArgs;
    /**
     * Paging only applies to flat expansions.
     */
    total?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.total
     */
    _total?: fhir.FhirElementArgs;
    /**
     * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
     */
    offset?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ValueSet.expansion.offset
     */
    _offset?: fhir.FhirElementArgs;
    /**
     * The server decides which parameters to include here, but at a minimum, the list SHOULD include the date, filter, and profile parameters passed to the $expand operation (if any).
     */
    parameter?: fhir.ValueSetExpansionParameterArgs[] | undefined;
    /**
     * The codes that are contained in the value set expansion.
     */
    contains?: fhir.ValueSetExpansionContainsArgs[] | undefined;
}
/**
 * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation.
 */
export declare class ValueSetExpansion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Typically, this uri is a UUID (e.g. urn:uuid:8230ff20-c97a-4167-a59d-dc2cb9df16dd).
     */
    identifier: fhir.FhirUri | null;
    /**
     * This SHOULD be a fully populated instant, but in some circumstances, value sets are expanded by hand, and the expansion is published without that precision.
     */
    timestamp: fhir.FhirDateTime | null;
    /**
     * Paging only applies to flat expansions.
     */
    total?: fhir.FhirInteger | undefined;
    /**
     * Paging only applies to flat expansions. If a filter is applied, the count is the number of concepts that matched the filter, not the number of concepts in an unfiltered view of the expansion.
     */
    offset?: fhir.FhirInteger | undefined;
    /**
     * The server decides which parameters to include here, but at a minimum, the list SHOULD include the date, filter, and profile parameters passed to the $expand operation (if any).
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this value set outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different value set instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the value set with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly. A name should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a name.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of value sets that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired value set without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of value set that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental value set in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the value set. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the value set is the organization or individual primarily responsible for the maintenance and upkeep of the value set. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the value set. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the value set was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the value set as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created). The description is not intended to describe the semantics of the Value Set - there are no intrinsic semantics separate from the codes contained in its expansion. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes. A description should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a description.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Normally immutability is set to 'false', which is the default assumption if it is not populated.  Note that the implication is that if this is set to 'true', there may be only one ValueSet version for this definition. Immutability tends to be set to 'true' in one of two cases: - Where the value set, by the nature of its usage, cannot change.  For example "All specializations of ACT in ActClassCode" - Where there's no safe way to express the "Purpose" such that someone else could safely make changes to the value set definition. Source workflow control must guarantee that the same URI always yields the same definition.
     */
    immutable?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.immutable
     */
    _immutable?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the value set Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this value set.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * null Frequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ValueSet.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Whether this is intended to be used with an extensible binding or not.
     */
    extensible?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ValueSet.extensible
     */
    _extensible?: fhir.FhirElementArgs;
    /**
     * A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the "Content Logical Definition" (CLD).
     */
    compose?: fhir.ValueSetComposeArgs | undefined;
    /**
     * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation.
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this value set outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different value set instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the value set with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly. A name should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a name.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of value sets that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired value set without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of value set that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental value set in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the value set. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the value set is the organization or individual primarily responsible for the maintenance and upkeep of the value set. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the value set. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the value set was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the value set as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created). The description is not intended to describe the semantics of the Value Set - there are no intrinsic semantics separate from the codes contained in its expansion. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes. A description should be provided unless the value set is a contained resource (e.g. an anonymous value set in a profile). Most registries will require a description.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the value set to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * Normally immutability is set to 'false', which is the default assumption if it is not populated.  Note that the implication is that if this is set to 'true', there may be only one ValueSet version for this definition. Immutability tends to be set to 'true' in one of two cases: - Where the value set, by the nature of its usage, cannot change.  For example "All specializations of ACT in ActClassCode" - Where there's no safe way to express the "Purpose" such that someone else could safely make changes to the value set definition. Source workflow control must guarantee that the same URI always yields the same definition.
     */
    immutable?: fhir.FhirBoolean | undefined;
    /**
     * This element does not describe the usage of the value set Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this value set.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * null Frequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Whether this is intended to be used with an extensible binding or not.
     */
    extensible?: fhir.FhirBoolean | undefined;
    /**
     * A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the "Content Logical Definition" (CLD).
     */
    compose?: fhir.ValueSetCompose | undefined;
    /**
     * Expansion is performed to produce a collection of codes that are ready to use for data entry or validation.
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