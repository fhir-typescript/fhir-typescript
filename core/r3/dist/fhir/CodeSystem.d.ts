import * as fhir from '../fhir.js';
import { ConceptPropertyTypeCodeType } from '../fhirValueSets/ConceptPropertyTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CodesystemHierarchyMeaningCodeType } from '../fhirValueSets/CodesystemHierarchyMeaningCodes.js';
import { CodesystemContentModeCodeType } from '../fhirValueSets/CodesystemContentModeCodes.js';
/**
 * Valid arguments for the CodeSystemFilter type.
 */
export interface CodeSystemFilterArgs extends fhir.BackboneElementArgs {
    /**
     * The code that identifies this filter when it is used in the instance.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.filter.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A description of how or why the filter is used.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.filter.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A list of operators that can be used with the filter.
     */
    operator: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.filter.operator
     */
    _operator?: (fhir.FhirElementArgs | null)[];
    /**
     * A description of what the value for the filter should be.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.filter.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * A filter that can be used in a value set compose statement when selecting concepts using a filter.
 */
export declare class CodeSystemFilter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The code that identifies this filter when it is used in the instance.
     */
    code: fhir.FhirCode | null;
    /**
     * A description of how or why the filter is used.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A list of operators that can be used with the filter.
     */
    operator: fhir.FhirCode[];
    /**
     * A description of what the value for the filter should be.
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for CodeSystemFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeSystemFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CodeSystemProperty type.
 */
export interface CodeSystemPropertyArgs extends fhir.BackboneElementArgs {
    /**
     * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
     */
    uri?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.uri
     */
    _uri?: fhir.FhirElementArgs;
    /**
     * A description of the property- why it is defined, and how its value might be used.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to anotherr defined concept).
     */
    type: fhir.FhirCode<ConceptPropertyTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.type
     */
    _type?: fhir.FhirElementArgs;
}
/**
 * A property defines an additional slot through which additional information can be provided about a concept.
 */
export declare class CodeSystemProperty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
     */
    code: fhir.FhirCode | null;
    /**
     * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * A description of the property- why it is defined, and how its value might be used.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to anotherr defined concept).
     */
    type: fhir.FhirCode<ConceptPropertyTypeCodeType> | null;
    /**
     * Default constructor for CodeSystemProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeSystemPropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CodeSystemConceptDesignation type.
 */
export interface CodeSystemConceptDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.designation.language
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
     * Extended properties for primitive element: CodeSystem.concept.designation.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
 */
export declare class CodeSystemConceptDesignation extends fhir.BackboneElement {
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
     * Default constructor for CodeSystemConceptDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeSystemConceptDesignationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CodeSystemConceptProperty type.
 */
export interface CodeSystemConceptPropertyArgs extends fhir.BackboneElementArgs {
    /**
     * A code that is a reference to CodeSystem.property.code.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The value of this property.
     */
    value?: fhir.FhirCode | fhir.Coding | fhir.FhirString | fhir.FhirInteger | fhir.FhirBoolean | fhir.FhirDateTime | undefined;
    /**
     * The value of this property.
     */
    valueCode?: fhir.FhirCode | string | undefined;
    /**
     * The value of this property.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * The value of this property.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The value of this property.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The value of this property.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value of this property.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
}
/**
 * A property value for this concept.
 */
export declare class CodeSystemConceptProperty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that is a reference to CodeSystem.property.code.
     */
    code: fhir.FhirCode | null;
    /**
     * The value of this property.
     */
    value: (fhir.FhirCode | fhir.Coding | fhir.FhirString | fhir.FhirInteger | fhir.FhirBoolean | fhir.FhirDateTime) | null;
    /**
     * Internal flag to properly serialize choice-type element CodeSystem.concept.property.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for CodeSystemConceptProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeSystemConceptPropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CodeSystemConcept type.
 */
export interface CodeSystemConceptArgs extends fhir.BackboneElementArgs {
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation?: fhir.CodeSystemConceptDesignationArgs[] | undefined;
    /**
     * A property value for this concept.
     */
    property?: fhir.CodeSystemConceptPropertyArgs[] | undefined;
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
     */
    concept?: fhir.CodeSystemConceptArgs[] | undefined;
}
/**
 * If this is empty, it means that the code system resource does not represent the content of the code system.
 */
export declare class CodeSystemConcept extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: fhir.FhirCode | null;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: fhir.FhirString | undefined;
    /**
     * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: fhir.FhirString | undefined;
    /**
     * Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */
    designation: fhir.CodeSystemConceptDesignation[];
    /**
     * A property value for this concept.
     */
    property: fhir.CodeSystemConceptProperty[];
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
     */
    concept: fhir.CodeSystemConcept[];
    /**
     * Default constructor for CodeSystemConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeSystemConceptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CodeSystem type.
 */
export interface CodeSystemArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CodeSystem" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this code system outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the code system with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of code systems that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired code system without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of code system that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental code system in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the code system Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
     */
    caseSensitive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.caseSensitive
     */
    _caseSensitive?: fhir.FhirElementArgs;
    /**
     * The definition of the value set SHALL include all codes from this code system, and it SHALL be immutable.
     */
    valueSet?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.valueSet
     */
    _valueSet?: fhir.FhirElementArgs;
    /**
     * The meaning of the hierarchy of concepts.
     */
    hierarchyMeaning?: fhir.FhirCode<CodesystemHierarchyMeaningCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.hierarchyMeaning
     */
    _hierarchyMeaning?: fhir.FhirElementArgs;
    /**
     * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
     */
    compositional?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.compositional
     */
    _compositional?: fhir.FhirElementArgs;
    /**
     * Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'.
     */
    versionNeeded?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.versionNeeded
     */
    _versionNeeded?: fhir.FhirElementArgs;
    /**
     * How much of the content of the code system - the concepts and codes it defines - are represented in this resource.
     */
    content: fhir.FhirCode<CodesystemContentModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.content
     */
    _content?: fhir.FhirElementArgs;
    /**
     * The count of concepts defined in this resource cannot be more than this value, but may be less for several reasons - see the content value.
     */
    count?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.count
     */
    _count?: fhir.FhirElementArgs;
    /**
     * A filter that can be used in a value set compose statement when selecting concepts using a filter.
     */
    filter?: fhir.CodeSystemFilterArgs[] | undefined;
    /**
     * A property defines an additional slot through which additional information can be provided about a concept.
     */
    property?: fhir.CodeSystemPropertyArgs[] | undefined;
    /**
     * If this is empty, it means that the code system resource does not represent the content of the code system.
     */
    concept?: fhir.CodeSystemConceptArgs[] | undefined;
}
/**
 * A code system resource specifies a set of codes drawn from one or more code systems.
 */
export declare class CodeSystem extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CodeSystem";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this code system outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the code system with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired code system without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of code system that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental code system in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the code system Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
     */
    caseSensitive?: fhir.FhirBoolean | undefined;
    /**
     * The definition of the value set SHALL include all codes from this code system, and it SHALL be immutable.
     */
    valueSet?: fhir.FhirUri | undefined;
    /**
     * The meaning of the hierarchy of concepts.
     */
    hierarchyMeaning?: fhir.FhirCode<CodesystemHierarchyMeaningCodeType> | undefined;
    /**
     * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
     */
    compositional?: fhir.FhirBoolean | undefined;
    /**
     * Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'.
     */
    versionNeeded?: fhir.FhirBoolean | undefined;
    /**
     * How much of the content of the code system - the concepts and codes it defines - are represented in this resource.
     */
    content: fhir.FhirCode<CodesystemContentModeCodeType> | null;
    /**
     * The count of concepts defined in this resource cannot be more than this value, but may be less for several reasons - see the content value.
     */
    count?: fhir.FhirUnsignedInt | undefined;
    /**
     * A filter that can be used in a value set compose statement when selecting concepts using a filter.
     */
    filter: fhir.CodeSystemFilter[];
    /**
     * A property defines an additional slot through which additional information can be provided about a concept.
     */
    property: fhir.CodeSystemProperty[];
    /**
     * If this is empty, it means that the code system resource does not represent the content of the code system.
     */
    concept: fhir.CodeSystemConcept[];
    /**
     * Default constructor for CodeSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeSystemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CodeSystem.d.ts.map