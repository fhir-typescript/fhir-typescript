import * as fhir from '../fhirJson.js';
/**
 * Fix use of a particular code system to a particular version.
 */
export interface ExpansionProfileFixedVersion extends fhir.BackboneElement {
    /**
     * See ''Coding.system'' for further documentation.
     */
    system: string | null;
    /**
     * Extended properties for primitive element: ExpansionProfile.fixedVersion.system
     */
    _system?: fhir.FhirElement;
    /**
     * The version of the code system from which codes in the expansion should be included.
     */
    version: string | null;
    /**
     * Extended properties for primitive element: ExpansionProfile.fixedVersion.version
     */
    _version?: fhir.FhirElement;
    /**
     * How to manage the intersection between a fixed version in a value set, and this fixed version of the system in the expansion profile.
     */
    mode: 'check' | 'default' | 'override' | null;
    /**
     * Extended properties for primitive element: ExpansionProfile.fixedVersion.mode
     */
    _mode?: fhir.FhirElement;
}
/**
 * When a system is excluded, and this makes a material difference to the expansion, the exclusion SHALL  be noted in the expansion parameters using a parameter 'excluded'.
 */
export interface ExpansionProfileExcludedSystem extends fhir.BackboneElement {
    /**
     * See ''Coding.system'' for further documentation.
     */
    system: string | null;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludedSystem.system
     */
    _system?: fhir.FhirElement;
    /**
     * This is used to apply version specifc exclusion contraints. If no version is specified, then all codes from the code system present in the expansion (prior to application of the expansion profile) will be excluded.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludedSystem.version
     */
    _version?: fhir.FhirElement;
}
/**
 * At least one of designation.language or designation.use must be provided for each include.designation element.
 */
export interface ExpansionProfileDesignationIncludeDesignation extends fhir.BackboneElement {
    /**
     * In the absence of a language, all designations are retained which match the designation.use parameter for this include.designation.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.designation.include.designation.language
     */
    _language?: fhir.FhirElement;
    /**
     * In the absence of a use, all designations are retained which match the designation.language parameter for this include.designation element.
     */
    use?: '900000000000003001' | '900000000000013009' | '900000000000550004' | undefined;
}
/**
 * Designations to be included.
 */
export interface ExpansionProfileDesignationInclude extends fhir.BackboneElement {
    /**
     * At least one of designation.language or designation.use must be provided for each include.designation element.
     */
    designation?: (fhir.ExpansionProfileDesignationIncludeDesignation | null)[] | undefined;
}
/**
 * At least one of designation.language or designation.use must be provided for each exclude.designation element.
 */
export interface ExpansionProfileDesignationExcludeDesignation extends fhir.BackboneElement {
    /**
     * In the absence of a language, all designations are excluded which match the designation.use parameter for this exclude.designation element.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.designation.exclude.designation.language
     */
    _language?: fhir.FhirElement;
    /**
     * In the absence of a use, all designations are retained which match the designation.language parameter for this exclude.designation element.
     */
    use?: '900000000000003001' | '900000000000013009' | '900000000000550004' | undefined;
}
/**
 * Designations to be excluded.
 */
export interface ExpansionProfileDesignationExclude extends fhir.BackboneElement {
    /**
     * At least one of designation.language or designation.use must be provided for each exclude.designation element.
     */
    designation?: (fhir.ExpansionProfileDesignationExcludeDesignation | null)[] | undefined;
}
/**
 * A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
 */
export interface ExpansionProfileDesignation extends fhir.BackboneElement {
    /**
     * Designations to be included.
     */
    include?: fhir.ExpansionProfileDesignationInclude | undefined;
    /**
     * Designations to be excluded.
     */
    exclude?: fhir.ExpansionProfileDesignationExclude | undefined;
}
/**
 * Resource to define constraints on the Expansion of a FHIR ValueSet.
 */
export interface ExpansionProfile extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ExpansionProfile" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this expansion profile outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different expansion profile instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the expansion profile with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of expansion profiles that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired expansion profile without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ExpansionProfile.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of expansion profile that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental expansion profile in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the expansion profile. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the expansion profile is the organization or individual primarily responsible for the maintenance and upkeep of the expansion profile. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the expansion profile. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the expansion profile was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the expansion profile as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the expansion profile to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Fix use of a particular code system to a particular version.
     */
    fixedVersion?: (fhir.ExpansionProfileFixedVersion | null)[] | undefined;
    /**
     * When a system is excluded, and this makes a material difference to the expansion, the exclusion SHALL  be noted in the expansion parameters using a parameter 'excluded'.
     */
    excludedSystem?: fhir.ExpansionProfileExcludedSystem | undefined;
    /**
     * ExpansionProfile.designation.include and ExpansionProfile.designation.exclude are only evaluated if includeDesignations is present and set to "true". If includeDesignations is present with a value of "true" and both ExpansionProfile.designation.include and ExpansionProfile.designation.exclude are absent, then all designations are returned in the expansion.
     */
    includeDesignations?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.includeDesignations
     */
    _includeDesignations?: fhir.FhirElement;
    /**
     * A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
     */
    designation?: fhir.ExpansionProfileDesignation | undefined;
    /**
     * The ValueSet defintion refers to all fields in the ValueSet definition apart from  ValueSet.contains. The definition is only included if includeDefinition is present and has a value of "true".
     */
    includeDefinition?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.includeDefinition
     */
    _includeDefinition?: fhir.FhirElement;
    /**
     * Inactive codes are included if activeOnly is present and has a value of "true". Note that if the value set explicitly specifies that inactive codes are included, this property can still remove them from a specific expansion, but this parameter cannot include them if the value set excludes them.
     */
    activeOnly?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.activeOnly
     */
    _activeOnly?: fhir.FhirElement;
    /**
     * Nesting of codes is excluded if excludeNested is present and has a value of "true".
     */
    excludeNested?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludeNested
     */
    _excludeNested?: fhir.FhirElement;
    /**
     * Codes which cannot be used in user interfaces will be excluded if excludeNotForUI is present and has a value of "true".
     */
    excludeNotForUI?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludeNotForUI
     */
    _excludeNotForUI?: fhir.FhirElement;
    /**
     * Post coordinated codes are excluded if excludePostCoordinated is present and has a value of "true".
     */
    excludePostCoordinated?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.excludePostCoordinated
     */
    _excludePostCoordinated?: fhir.FhirElement;
    /**
     * Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.
     */
    displayLanguage?: string | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.displayLanguage
     */
    _displayLanguage?: fhir.FhirElement;
    /**
     * This field overides the default behaviour (which is to return an error). This does not apply to expansions which are unbounded. Clients SHALL process the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html) correctly if limitedExpansion = true.
     */
    limitedExpansion?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExpansionProfile.limitedExpansion
     */
    _limitedExpansion?: fhir.FhirElement;
}
//# sourceMappingURL=ExpansionProfile.d.ts.map