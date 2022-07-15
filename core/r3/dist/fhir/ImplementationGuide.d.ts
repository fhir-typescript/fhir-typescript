import * as fhir from '../fhir.js';
import { GuideDependencyTypeCodeType } from '../fhirValueSets/GuideDependencyTypeCodes.js';
import { GuidePageKindCodeType } from '../fhirValueSets/GuidePageKindCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ImplementationGuideDependency type.
 */
export interface ImplementationGuideDependencyArgs extends fhir.BackboneElementArgs {
    /**
     * For information about processing included guides, see [Including Guides]{implementationguide.html#include}.
     */
    type: fhir.FhirCode<GuideDependencyTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependency.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * When a guide is published, and the type is 'include', this will be a relative reference within the guide.
     */
    uri: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependency.uri
     */
    _uri?: fhir.FhirElementArgs;
}
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare class ImplementationGuideDependency extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For information about processing included guides, see [Including Guides]{implementationguide.html#include}.
     */
    type: fhir.FhirCode<GuideDependencyTypeCodeType> | null;
    /**
     * When a guide is published, and the type is 'include', this will be a relative reference within the guide.
     */
    uri: fhir.FhirUri | null;
    /**
     * Default constructor for ImplementationGuideDependency - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDependencyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuidePackageResource type.
 */
export interface ImplementationGuidePackageResourceArgs extends fhir.BackboneElementArgs {
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    example: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.example
     */
    _example?: fhir.FhirElementArgs;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This is used when generating schematrons from profiles, for example, but has other uses. Publishing tooling may autogenerate this value, but a human assigned value is more useful. This value must be unique within an implementation guide (across included guides as well).
     */
    acronym?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.acronym
     */
    _acronym?: fhir.FhirElementArgs;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    source?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    sourceUri?: fhir.FhirUri | string | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    sourceReference?: fhir.ReferenceArgs | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleFor?: fhir.ReferenceArgs | undefined;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuidePackageResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    example: fhir.FhirBoolean | null;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | undefined;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: fhir.FhirString | undefined;
    /**
     * This is used when generating schematrons from profiles, for example, but has other uses. Publishing tooling may autogenerate this value, but a human assigned value is more useful. This value must be unique within an implementation guide (across included guides as well).
     */
    acronym?: fhir.FhirString | undefined;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    source: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.package.resource.source[x]
     */
    protected static readonly _fts_sourceIsChoice: true;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleFor?: fhir.Reference | undefined;
    /**
     * Default constructor for ImplementationGuidePackageResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuidePackageResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuidePackage type.
 */
export interface ImplementationGuidePackageArgs extends fhir.BackboneElementArgs {
    /**
     * The name for the group, as used in page.package.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Human readable text describing the package.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuidePackageResourceArgs[] | null;
}
/**
 * A logical group of resources. Logical groups can be used when building pages.
 */
export declare class ImplementationGuidePackage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name for the group, as used in page.package.
     */
    name: fhir.FhirString | null;
    /**
     * Human readable text describing the package.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuidePackageResource[];
    /**
     * Default constructor for ImplementationGuidePackage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuidePackageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideGlobal type.
 */
export interface ImplementationGuideGlobalArgs extends fhir.BackboneElementArgs {
    /**
     * The type must match that of the profile that is referred to, but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.ReferenceArgs | null;
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export declare class ImplementationGuideGlobal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type must match that of the profile that is referred to, but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: fhir.FhirCode | null;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.Reference | null;
    /**
     * Default constructor for ImplementationGuideGlobal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideGlobalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuidePage type.
 */
export interface ImplementationGuidePageArgs extends fhir.BackboneElementArgs {
    /**
     * The publishing tool will autogenerate source for list (source = n/a), and inject included implementations for include (source = uri of guide to include).
     */
    source: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.source
     */
    _source?: fhir.FhirElementArgs;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.
     */
    kind: fhir.FhirCode<GuidePageKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * For constructed pages, what kind of resources to include in the list.
     */
    type?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.type
     */
    _type?: (fhir.FhirElementArgs | null)[];
    /**
     * For constructed pages, a list of packages to include in the page (or else empty for everything).
     */
    package?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.package
     */
    _package?: (fhir.FhirElementArgs | null)[];
    /**
     * This is primarily for the publishing tool, that will convert all pages to html format. HTML pages are pre-processed, see xxxx.
     */
    format?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.format
     */
    _format?: fhir.FhirElementArgs;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.ImplementationGuidePageArgs[] | undefined;
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare class ImplementationGuidePage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The publishing tool will autogenerate source for list (source = n/a), and inject included implementations for include (source = uri of guide to include).
     */
    source: fhir.FhirUri | null;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: fhir.FhirString | null;
    /**
     * The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.
     */
    kind: fhir.FhirCode<GuidePageKindCodeType> | null;
    /**
     * For constructed pages, what kind of resources to include in the list.
     */
    type: fhir.FhirCode[];
    /**
     * For constructed pages, a list of packages to include in the page (or else empty for everything).
     */
    package: fhir.FhirString[];
    /**
     * This is primarily for the publishing tool, that will convert all pages to html format. HTML pages are pre-processed, see xxxx.
     */
    format?: fhir.FhirCode | undefined;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page: fhir.ImplementationGuidePage[];
    /**
     * Default constructor for ImplementationGuidePage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuidePageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuide type.
 */
export interface ImplementationGuideArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of implementation guides that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired implementation guide without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of implementation guide that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental implementation guide in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * An Implementation Guide should specify the target it applies to, as ImplementationGuides are rarely valid across multiple versions of FHIR.
     */
    fhirVersion?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.fhirVersion
     */
    _fhirVersion?: fhir.FhirElementArgs;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependency?: fhir.ImplementationGuideDependencyArgs[] | undefined;
    /**
     * A logical group of resources. Logical groups can be used when building pages.
     */
    package?: fhir.ImplementationGuidePackageArgs[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.ImplementationGuideGlobalArgs[] | undefined;
    /**
     * This is principally included for the FHIR publishing tool, but may be useful when extracting and reusing content from the implementation guide.
     */
    binary?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.binary
     */
    _binary?: (fhir.FhirElementArgs | null)[];
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuidePageArgs | undefined;
}
/**
 * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export declare class ImplementationGuide extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of implementation guides that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired implementation guide without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of implementation guide that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental implementation guide in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * An Implementation Guide should specify the target it applies to, as ImplementationGuides are rarely valid across multiple versions of FHIR.
     */
    fhirVersion?: fhir.FhirId | undefined;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependency: fhir.ImplementationGuideDependency[];
    /**
     * A logical group of resources. Logical groups can be used when building pages.
     */
    package: fhir.ImplementationGuidePackage[];
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global: fhir.ImplementationGuideGlobal[];
    /**
     * This is principally included for the FHIR publishing tool, but may be useful when extracting and reusing content from the implementation guide.
     */
    binary: fhir.FhirUri[];
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuidePage | undefined;
    /**
     * Default constructor for ImplementationGuide - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImplementationGuide.d.ts.map