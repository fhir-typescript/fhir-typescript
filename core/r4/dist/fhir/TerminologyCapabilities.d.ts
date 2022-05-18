import * as fhir from '../fhir.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CapabilityStatementKindCodingType } from '../fhirValueSets/CapabilityStatementKindCodings.js';
import { CapabilityStatementKindCodeType } from '../fhirValueSets/CapabilityStatementKindCodes.js';
import { CodeSearchSupportCodingType } from '../fhirValueSets/CodeSearchSupportCodings.js';
import { CodeSearchSupportCodeType } from '../fhirValueSets/CodeSearchSupportCodes.js';
/**
 * Valid arguments for the TerminologyCapabilitiesSoftware type.
 */
export interface TerminologyCapabilitiesSoftwareArgs extends fhir.BackboneElementArgs {
    /**
     * Name the software is known by.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: fhir.FhirString | string | undefined;
}
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class TerminologyCapabilitiesSoftware extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name the software is known by.
     */
    name: fhir.FhirString | null;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesSoftware - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesSoftwareArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesImplementation type.
 */
export interface TerminologyCapabilitiesImplementationArgs extends fhir.BackboneElementArgs {
    /**
     * Information about the specific installation that this terminology capability statement relates to.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * An absolute base URL for the implementation.
     */
    url?: fhir.FhirUrl | string | undefined;
}
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class TerminologyCapabilitiesImplementation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Information about the specific installation that this terminology capability statement relates to.
     */
    description: fhir.FhirString | null;
    /**
     * An absolute base URL for the implementation.
     */
    url?: fhir.FhirUrl | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesImplementation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesImplementationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesCodeSystemVersionFilter type.
 */
export interface TerminologyCapabilitiesCodeSystemVersionFilterArgs extends fhir.BackboneElementArgs {
    /**
     * Code of the property supported.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Operations supported for the property.
     */
    op: fhir.FhirCode[] | string[] | undefined;
}
/**
 * Filter Properties supported.
 */
export declare class TerminologyCapabilitiesCodeSystemVersionFilter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Code of the property supported.
     */
    code: fhir.FhirCode | null;
    /**
     * Operations supported for the property.
     */
    op: fhir.FhirCode[];
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersionFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesCodeSystemVersionFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesCodeSystemVersion type.
 */
export interface TerminologyCapabilitiesCodeSystemVersionArgs extends fhir.BackboneElementArgs {
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: fhir.FhirString | string | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Language Displays supported.
     */
    language?: fhir.FhirCode[] | string[] | undefined;
    /**
     * Filter Properties supported.
     */
    filter?: fhir.TerminologyCapabilitiesCodeSystemVersionFilterArgs[] | undefined;
    /**
     * Properties supported for $lookup.
     */
    property?: fhir.FhirCode[] | string[] | undefined;
}
/**
 * Language translations might not be available for all codes.
 */
export declare class TerminologyCapabilitiesCodeSystemVersion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For version-less code systems, there should be a single version with no identifier.
     */
    code?: fhir.FhirString | undefined;
    /**
     * If this is the default version for this code system.
     */
    isDefault?: fhir.FhirBoolean | undefined;
    /**
     * If the compositional grammar defined by the code system is supported.
     */
    compositional?: fhir.FhirBoolean | undefined;
    /**
     * Language Displays supported.
     */
    language?: fhir.FhirCode[];
    /**
     * Filter Properties supported.
     */
    filter?: fhir.TerminologyCapabilitiesCodeSystemVersionFilter[];
    /**
     * Properties supported for $lookup.
     */
    property?: fhir.FhirCode[];
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesCodeSystemVersionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesCodeSystem type.
 */
export interface TerminologyCapabilitiesCodeSystemArgs extends fhir.BackboneElementArgs {
    /**
     * URI for the Code System.
     */
    uri?: fhir.FhirCanonical | string | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhir.TerminologyCapabilitiesCodeSystemVersionArgs[] | undefined;
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export declare class TerminologyCapabilitiesCodeSystem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * URI for the Code System.
     */
    uri?: fhir.FhirCanonical | undefined;
    /**
     * Language translations might not be available for all codes.
     */
    version?: fhir.TerminologyCapabilitiesCodeSystemVersion[];
    /**
     * True if subsumption is supported for this version of the code system.
     */
    subsumption?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesCodeSystemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesExpansionParameter type.
 */
export interface TerminologyCapabilitiesExpansionParameterArgs extends fhir.BackboneElementArgs {
    /**
     * Expansion Parameter name.
     */
    name: fhir.FhirCode | string | undefined;
    /**
     * Description of support for parameter.
     */
    documentation?: fhir.FhirString | string | undefined;
}
/**
 * Supported expansion parameter.
 */
export declare class TerminologyCapabilitiesExpansionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Expansion Parameter name.
     */
    name: fhir.FhirCode | null;
    /**
     * Description of support for parameter.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesExpansionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesExpansion type.
 */
export interface TerminologyCapabilitiesExpansionArgs extends fhir.BackboneElementArgs {
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhir.TerminologyCapabilitiesExpansionParameterArgs[] | undefined;
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: fhir.FhirMarkdown | string | undefined;
}
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export declare class TerminologyCapabilitiesExpansion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether the server can return nested value sets.
     */
    hierarchical?: fhir.FhirBoolean | undefined;
    /**
     * Whether the server supports paging on expansion.
     */
    paging?: fhir.FhirBoolean | undefined;
    /**
     * Allow request for incomplete expansions?
     */
    incomplete?: fhir.FhirBoolean | undefined;
    /**
     * Supported expansion parameter.
     */
    parameter?: fhir.TerminologyCapabilitiesExpansionParameter[];
    /**
     * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
     */
    textFilter?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesExpansion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesExpansionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesValidateCode type.
 */
export interface TerminologyCapabilitiesValidateCodeArgs extends fhir.BackboneElementArgs {
    /**
     * Whether translations are validated.
     */
    translations: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
export declare class TerminologyCapabilitiesValidateCode extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether translations are validated.
     */
    translations: fhir.FhirBoolean | null;
    /**
     * Default constructor for TerminologyCapabilitiesValidateCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesValidateCodeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesTranslation type.
 */
export interface TerminologyCapabilitiesTranslationArgs extends fhir.BackboneElementArgs {
    /**
     * Whether the client must identify the map.
     */
    needsMap: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
export declare class TerminologyCapabilitiesTranslation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Whether the client must identify the map.
     */
    needsMap: fhir.FhirBoolean | null;
    /**
     * Default constructor for TerminologyCapabilitiesTranslation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesTranslationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilitiesClosure type.
 */
export interface TerminologyCapabilitiesClosureArgs extends fhir.BackboneElementArgs {
    /**
     * If cross-system closure is supported.
     */
    translation?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Whether the $closure operation is supported.
 */
export declare class TerminologyCapabilitiesClosure extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If cross-system closure is supported.
     */
    translation?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for TerminologyCapabilitiesClosure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesClosureArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the TerminologyCapabilities type.
 */
export interface TerminologyCapabilitiesArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "TerminologyCapabilities" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindCodeType | null;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.TerminologyCapabilitiesSoftwareArgs | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.TerminologyCapabilitiesImplementationArgs | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhir.TerminologyCapabilitiesCodeSystemArgs[] | undefined;
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhir.TerminologyCapabilitiesExpansionArgs | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: CodeSearchSupportCodeType | undefined;
    /**
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhir.TerminologyCapabilitiesValidateCodeArgs | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhir.TerminologyCapabilitiesTranslationArgs | undefined;
    /**
     * Whether the $closure operation is supported.
     */
    closure?: fhir.TerminologyCapabilitiesClosureArgs | undefined;
}
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare class TerminologyCapabilities extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "TerminologyCapabilities";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindCodeType | null;
    /**
     * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.TerminologyCapabilitiesSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.TerminologyCapabilitiesImplementation | undefined;
    /**
     * Whether the server supports lockedDate.
     */
    lockedDate?: fhir.FhirBoolean | undefined;
    /**
     * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
     */
    codeSystem?: fhir.TerminologyCapabilitiesCodeSystem[];
    /**
     * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
     */
    expansion?: fhir.TerminologyCapabilitiesExpansion | undefined;
    /**
     * See notes on the [ValueSet](valueset.html#) resource.
     */
    codeSearch?: CodeSearchSupportCodeType | undefined;
    /**
     * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
     */
    validateCode?: fhir.TerminologyCapabilitiesValidateCode | undefined;
    /**
     * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
     */
    translation?: fhir.TerminologyCapabilitiesTranslation | undefined;
    /**
     * Whether the $closure operation is supported.
     */
    closure?: fhir.TerminologyCapabilitiesClosure | undefined;
    /**
     * Default constructor for TerminologyCapabilities - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TerminologyCapabilitiesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (TerminologyCapabilities.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Required-bound Value Set for kind (TerminologyCapabilities.kind)
     */
    static kindRequiredCoding(): CapabilityStatementKindCodingType;
    /**
     * Required-bound Value Set for codeSearch (TerminologyCapabilities.codeSearch)
     */
    static codeSearchRequiredCoding(): CodeSearchSupportCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=TerminologyCapabilities.d.ts.map