import * as fhir from '../fhir.js';
import { GuideDependencyTypeCodeType } from '../fhirValueSets/GuideDependencyTypeCodes.js';
import { GuideResourcePurposeCodeType } from '../fhirValueSets/GuideResourcePurposeCodes.js';
import { GuidePageKindCodeType } from '../fhirValueSets/GuidePageKindCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
/**
 * Valid arguments for the ImplementationGuideContact type.
 */
export interface ImplementationGuideContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the implementation guide.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.contact.name
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
export declare class ImplementationGuideContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the implementation guide.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for ImplementationGuideContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDependency type.
 */
export interface ImplementationGuideDependencyArgs extends fhir.BackboneElementArgs {
    /**
     * How the dependency is represented when the guide is published.
     */
    type: fhir.FhirCode<GuideDependencyTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependency.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Where the dependency is located.
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
     * How the dependency is represented when the guide is published.
     */
    type: fhir.FhirCode<GuideDependencyTypeCodeType> | null;
    /**
     * Where the dependency is located.
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
     * This element is provided so that implementation guide tooling does not have to guess the purpose of including a resource in the implementation guide based on the type or context.
     */
    purpose: fhir.FhirCode<GuideResourcePurposeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * A description of the reason that a resource has been included in the implementation guide.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A short code that may be used to identify the resource throughout the implementation guide.
     */
    acronym?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.acronym
     */
    _acronym?: fhir.FhirElementArgs;
    /**
     * Where this resource is found.
     */
    source?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * Where this resource is found.
     */
    sourceUri?: fhir.FhirUri | string | undefined;
    /**
     * Where this resource is found.
     */
    sourceReference?: fhir.ReferenceArgs | undefined;
    /**
     * Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.
     */
    exampleFor?: fhir.ReferenceArgs | undefined;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuidePackageResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This element is provided so that implementation guide tooling does not have to guess the purpose of including a resource in the implementation guide based on the type or context.
     */
    purpose: fhir.FhirCode<GuideResourcePurposeCodeType> | null;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | undefined;
    /**
     * A description of the reason that a resource has been included in the implementation guide.
     */
    description?: fhir.FhirString | undefined;
    /**
     * A short code that may be used to identify the resource throughout the implementation guide.
     */
    acronym?: fhir.FhirString | undefined;
    /**
     * Where this resource is found.
     */
    source: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.package.resource.source[x]
     */
    protected static readonly _fts_sourceIsChoice: true;
    /**
     * Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.
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
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
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
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
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
     * The type of resource that all instances must conform to.
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
 * A set of profiles that all resources covered by this implementation guide must conform to.
 */
export declare class ImplementationGuideGlobal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of resource that all instances must conform to.
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
     * The source address for the page.
     */
    source: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.source
     */
    _source?: fhir.FhirElementArgs;
    /**
     * A short name used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.name
     */
    _name?: fhir.FhirElementArgs;
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
     * The format of the page.
     */
    format?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.format
     */
    _format?: fhir.FhirElementArgs;
    /**
     * Nested Pages/Sections under this page.
     */
    page?: fhir.ImplementationGuidePageArgs[] | undefined;
}
/**
 * A page / section in the implementation guide. The root page is the implementation guide home page.
 */
export declare class ImplementationGuidePage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The source address for the page.
     */
    source: fhir.FhirUri | null;
    /**
     * A short name used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    name: fhir.FhirString | null;
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
     * The format of the page.
     */
    format?: fhir.FhirCode | undefined;
    /**
     * Nested Pages/Sections under this page.
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
     * This is required to allow hosting Implementation Guides on multiple different servers, and to allow for the editorial process.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be multiple resource versions of the Implementation Guide that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A free text natural language name identifying the Implementation Guide.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of Implementation Guides that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of Implementation Guides that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the implementation guide.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.ImplementationGuideContactArgs[] | undefined;
    /**
     * The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A free text natural language description of the Implementation Guide and its use.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate implementation guide.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
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
    package: fhir.ImplementationGuidePackageArgs[] | null;
    /**
     * A set of profiles that all resources covered by this implementation guide must conform to.
     */
    global?: fhir.ImplementationGuideGlobalArgs[] | undefined;
    /**
     * A binary file that is included in the  implementation guide when it is published.
     */
    binary?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.binary
     */
    _binary?: (fhir.FhirElementArgs | null)[];
    /**
     * A page / section in the implementation guide. The root page is the implementation guide home page.
     */
    page: fhir.ImplementationGuidePageArgs | null;
}
/**
 * A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
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
     * This is required to allow hosting Implementation Guides on multiple different servers, and to allow for the editorial process.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be multiple resource versions of the Implementation Guide that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A free text natural language name identifying the Implementation Guide.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of Implementation Guides that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * Allows filtering of Implementation Guides that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the implementation guide.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.ImplementationGuideContact[];
    /**
     * The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A free text natural language description of the Implementation Guide and its use.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate implementation guide.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
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
     * A set of profiles that all resources covered by this implementation guide must conform to.
     */
    global: fhir.ImplementationGuideGlobal[];
    /**
     * A binary file that is included in the  implementation guide when it is published.
     */
    binary: fhir.FhirUri[];
    /**
     * A page / section in the implementation guide. The root page is the implementation guide home page.
     */
    page: fhir.ImplementationGuidePage | null;
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