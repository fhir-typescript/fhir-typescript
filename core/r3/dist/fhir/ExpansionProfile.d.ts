import * as fhir from '../fhir.js';
import { SystemVersionProcessingModeCodeType } from '../fhirValueSets/SystemVersionProcessingModeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ExpansionProfileFixedVersion type.
 */
export interface ExpansionProfileFixedVersionArgs extends fhir.BackboneElementArgs {
    /**
     * See ''Coding.system'' for further documentation.
     */
    system: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.fixedVersion.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * The version of the code system from which codes in the expansion should be included.
     */
    version: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.fixedVersion.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.
     */
    mode: fhir.FhirCode<SystemVersionProcessingModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.fixedVersion.mode
     */
    _mode?: fhir.FhirElementArgs;
}
/**
 * Fix use of a particular code system to a particular version.
 */
export declare class ExpansionProfileFixedVersion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * See ''Coding.system'' for further documentation.
     */
    system: fhir.FhirUri | null;
    /**
     * The version of the code system from which codes in the expansion should be included.
     */
    version: fhir.FhirString | null;
    /**
     * How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.
     */
    mode: fhir.FhirCode<SystemVersionProcessingModeCodeType> | null;
    /**
     * Default constructor for ExpansionProfileFixedVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileFixedVersionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfileExcludedSystem type.
 */
export interface ExpansionProfileExcludedSystemArgs extends fhir.BackboneElementArgs {
    /**
     * See ''Coding.system'' for further documentation.
     */
    system: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludedSystem.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * This is used to apply version specifc exclusion contraints. If no version is specified, then all codes from the code system present in the expansion (prior to application of the expansion profile) will be excluded.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludedSystem.version
     */
    _version?: fhir.FhirElementArgs;
}
/**
 * When a system is excluded, and this makes a material difference to the expansion, the exclusion SHALL  be noted in the expansion parameters using a parameter 'excluded'.
 */
export declare class ExpansionProfileExcludedSystem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * See ''Coding.system'' for further documentation.
     */
    system: fhir.FhirUri | null;
    /**
     * This is used to apply version specifc exclusion contraints. If no version is specified, then all codes from the code system present in the expansion (prior to application of the expansion profile) will be excluded.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Default constructor for ExpansionProfileExcludedSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileExcludedSystemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfileDesignationIncludeDesignation type.
 */
export interface ExpansionProfileDesignationIncludeDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * In the absence of a language, all designations are retained which match the designation.use parameter for this include.designation.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.designation.include.designation.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * In the absence of a use, all designations are retained which match the designation.language parameter for this include.designation element.
     */
    use?: fhir.CodingArgs | undefined;
}
/**
 * At least one of designation.language or designation.use must be provided for each include.designation element.
 */
export declare class ExpansionProfileDesignationIncludeDesignation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * In the absence of a language, all designations are retained which match the designation.use parameter for this include.designation.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * In the absence of a use, all designations are retained which match the designation.language parameter for this include.designation element.
     */
    use?: fhir.Coding | undefined;
    /**
     * Default constructor for ExpansionProfileDesignationIncludeDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileDesignationIncludeDesignationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfileDesignationInclude type.
 */
export interface ExpansionProfileDesignationIncludeArgs extends fhir.BackboneElementArgs {
    /**
     * At least one of designation.language or designation.use must be provided for each include.designation element.
     */
    designation?: fhir.ExpansionProfileDesignationIncludeDesignationArgs[] | undefined;
}
/**
 * Designations to be included.
 */
export declare class ExpansionProfileDesignationInclude extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * At least one of designation.language or designation.use must be provided for each include.designation element.
     */
    designation: fhir.ExpansionProfileDesignationIncludeDesignation[];
    /**
     * Default constructor for ExpansionProfileDesignationInclude - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileDesignationIncludeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfileDesignationExcludeDesignation type.
 */
export interface ExpansionProfileDesignationExcludeDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * In the absence of a language, all designations are excluded which match the designation.use parameter for this exclude.designation element.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.designation.exclude.designation.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * In the absence of a use, all designations are retained which match the designation.language parameter for this exclude.designation element.
     */
    use?: fhir.CodingArgs | undefined;
}
/**
 * At least one of designation.language or designation.use must be provided for each exclude.designation element.
 */
export declare class ExpansionProfileDesignationExcludeDesignation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * In the absence of a language, all designations are excluded which match the designation.use parameter for this exclude.designation element.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * In the absence of a use, all designations are retained which match the designation.language parameter for this exclude.designation element.
     */
    use?: fhir.Coding | undefined;
    /**
     * Default constructor for ExpansionProfileDesignationExcludeDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileDesignationExcludeDesignationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfileDesignationExclude type.
 */
export interface ExpansionProfileDesignationExcludeArgs extends fhir.BackboneElementArgs {
    /**
     * At least one of designation.language or designation.use must be provided for each exclude.designation element.
     */
    designation?: fhir.ExpansionProfileDesignationExcludeDesignationArgs[] | undefined;
}
/**
 * Designations to be excluded.
 */
export declare class ExpansionProfileDesignationExclude extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * At least one of designation.language or designation.use must be provided for each exclude.designation element.
     */
    designation: fhir.ExpansionProfileDesignationExcludeDesignation[];
    /**
     * Default constructor for ExpansionProfileDesignationExclude - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileDesignationExcludeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfileDesignation type.
 */
export interface ExpansionProfileDesignationArgs extends fhir.BackboneElementArgs {
    /**
     * Designations to be included.
     */
    include?: fhir.ExpansionProfileDesignationIncludeArgs | undefined;
    /**
     * Designations to be excluded.
     */
    exclude?: fhir.ExpansionProfileDesignationExcludeArgs | undefined;
}
/**
 * A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
 */
export declare class ExpansionProfileDesignation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Designations to be included.
     */
    include?: fhir.ExpansionProfileDesignationInclude | undefined;
    /**
     * Designations to be excluded.
     */
    exclude?: fhir.ExpansionProfileDesignationExclude | undefined;
    /**
     * Default constructor for ExpansionProfileDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileDesignationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExpansionProfile type.
 */
export interface ExpansionProfileArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ExpansionProfile" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this expansion profile outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * There may be different expansion profile instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the expansion profile with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of expansion profiles that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired expansion profile without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of expansion profile that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental expansion profile in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the expansion profile. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the expansion profile is the organization or individual primarily responsible for the maintenance and upkeep of the expansion profile. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the expansion profile. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the expansion profile was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the expansion profile as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the expansion profile to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Fix use of a particular code system to a particular version.
     */
    fixedVersion?: fhir.ExpansionProfileFixedVersionArgs[] | undefined;
    /**
     * When a system is excluded, and this makes a material difference to the expansion, the exclusion SHALL  be noted in the expansion parameters using a parameter 'excluded'.
     */
    excludedSystem?: fhir.ExpansionProfileExcludedSystemArgs | undefined;
    /**
     * ExpansionProfile.designation.include and ExpansionProfile.designation.exclude are only evaluated if includeDesignations is present and set to "true". If includeDesignations is present with a value of "true" and both ExpansionProfile.designation.include and ExpansionProfile.designation.exclude are absent, then all designations are returned in the expansion.
     */
    includeDesignations?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.includeDesignations
     */
    _includeDesignations?: fhir.FhirElementArgs;
    /**
     * A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
     */
    designation?: fhir.ExpansionProfileDesignationArgs | undefined;
    /**
     * The ValueSet defintion refers to all fields in the ValueSet definition apart from  ValueSet.contains. The definition is only included if includeDefinition is present and has a value of "true".
     */
    includeDefinition?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.includeDefinition
     */
    _includeDefinition?: fhir.FhirElementArgs;
    /**
     * Inactive codes are included if activeOnly is present and has a value of "true". Note that if the value set explicitly specifies that inactive codes are included, this property can still remove them from a specific expansion, but this parameter cannot include them if the value set excludes them.
     */
    activeOnly?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.activeOnly
     */
    _activeOnly?: fhir.FhirElementArgs;
    /**
     * Nesting of codes is excluded if excludeNested is present and has a value of "true".
     */
    excludeNested?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludeNested
     */
    _excludeNested?: fhir.FhirElementArgs;
    /**
     * Codes which cannot be used in user interfaces will be excluded if excludeNotForUI is present and has a value of "true".
     */
    excludeNotForUI?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludeNotForUI
     */
    _excludeNotForUI?: fhir.FhirElementArgs;
    /**
     * Post coordinated codes are excluded if excludePostCoordinated is present and has a value of "true".
     */
    excludePostCoordinated?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludePostCoordinated
     */
    _excludePostCoordinated?: fhir.FhirElementArgs;
    /**
     * Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.
     */
    displayLanguage?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.displayLanguage
     */
    _displayLanguage?: fhir.FhirElementArgs;
    /**
     * This field overides the default behaviour (which is to return an error). This does not apply to expansions which are unbounded. Clients SHALL process the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html) correctly if limitedExpansion = true.
     */
    limitedExpansion?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.limitedExpansion
     */
    _limitedExpansion?: fhir.FhirElementArgs;
}
/**
 * Resource to define constraints on the Expansion of a FHIR ValueSet.
 */
export declare class ExpansionProfile extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ExpansionProfile";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this expansion profile outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different expansion profile instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the expansion profile with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Allows filtering of expansion profiles that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired expansion profile without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of expansion profile that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental expansion profile in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the expansion profile. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the expansion profile is the organization or individual primarily responsible for the maintenance and upkeep of the expansion profile. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the expansion profile. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the expansion profile was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the expansion profile as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the expansion profile to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * Fix use of a particular code system to a particular version.
     */
    fixedVersion: fhir.ExpansionProfileFixedVersion[];
    /**
     * When a system is excluded, and this makes a material difference to the expansion, the exclusion SHALL  be noted in the expansion parameters using a parameter 'excluded'.
     */
    excludedSystem?: fhir.ExpansionProfileExcludedSystem | undefined;
    /**
     * ExpansionProfile.designation.include and ExpansionProfile.designation.exclude are only evaluated if includeDesignations is present and set to "true". If includeDesignations is present with a value of "true" and both ExpansionProfile.designation.include and ExpansionProfile.designation.exclude are absent, then all designations are returned in the expansion.
     */
    includeDesignations?: fhir.FhirBoolean | undefined;
    /**
     * A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
     */
    designation?: fhir.ExpansionProfileDesignation | undefined;
    /**
     * The ValueSet defintion refers to all fields in the ValueSet definition apart from  ValueSet.contains. The definition is only included if includeDefinition is present and has a value of "true".
     */
    includeDefinition?: fhir.FhirBoolean | undefined;
    /**
     * Inactive codes are included if activeOnly is present and has a value of "true". Note that if the value set explicitly specifies that inactive codes are included, this property can still remove them from a specific expansion, but this parameter cannot include them if the value set excludes them.
     */
    activeOnly?: fhir.FhirBoolean | undefined;
    /**
     * Nesting of codes is excluded if excludeNested is present and has a value of "true".
     */
    excludeNested?: fhir.FhirBoolean | undefined;
    /**
     * Codes which cannot be used in user interfaces will be excluded if excludeNotForUI is present and has a value of "true".
     */
    excludeNotForUI?: fhir.FhirBoolean | undefined;
    /**
     * Post coordinated codes are excluded if excludePostCoordinated is present and has a value of "true".
     */
    excludePostCoordinated?: fhir.FhirBoolean | undefined;
    /**
     * Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.
     */
    displayLanguage?: fhir.FhirCode | undefined;
    /**
     * This field overides the default behaviour (which is to return an error). This does not apply to expansions which are unbounded. Clients SHALL process the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html) correctly if limitedExpansion = true.
     */
    limitedExpansion?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for ExpansionProfile - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExpansionProfileArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ExpansionProfile.d.ts.map