import * as fhir from '../fhir.js';
import { GuidePageGenerationCodeType } from '../fhirValueSets/GuidePageGenerationCodes.js';
import { GuideParameterCodeType } from '../fhirValueSets/GuideParameterCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ImplementationGuideDependsOn type.
 */
export interface ImplementationGuideDependsOnArgs extends fhir.BackboneElementArgs {
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
     */
    _uri?: fhir.FhirElementArgs;
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.packageId
     */
    _packageId?: fhir.FhirElementArgs;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.version
     */
    _version?: fhir.FhirElementArgs;
}
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare class ImplementationGuideDependsOn extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: fhir.FhirCanonical | null;
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: fhir.FhirId | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImplementationGuideDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDependsOnArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideGlobal type.
 */
export interface ImplementationGuideGlobalArgs extends fhir.BackboneElementArgs {
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.profile
     */
    _profile?: fhir.FhirElementArgs;
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
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: fhir.FhirCode | null;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.FhirCanonical | null;
    /**
     * Default constructor for ImplementationGuideGlobal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideGlobalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionGrouping type.
 */
export interface ImplementationGuideDefinitionGroupingArgs extends fhir.BackboneElementArgs {
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Human readable text describing the package.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export declare class ImplementationGuideDefinitionGrouping extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: fhir.FhirString | null;
    /**
     * Human readable text describing the package.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionGroupingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionResource type.
 */
export interface ImplementationGuideDefinitionResourceArgs extends fhir.BackboneElementArgs {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.ReferenceArgs | null;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.fhirVersion
     */
    _fhirVersion?: (fhir.FhirElementArgs | null)[];
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    example?: fhir.FhirBoolean | fhir.FhirCanonical | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.groupingId
     */
    _groupingId?: fhir.FhirElementArgs;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideDefinitionResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion: fhir.FhirCode[];
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | undefined;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: fhir.FhirString | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    example?: (fhir.FhirBoolean | fhir.FhirCanonical) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.definition.resource.example[x]
     */
    protected static readonly _fts_exampleIsChoice: true;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: fhir.FhirId | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionPage type.
 */
export interface ImplementationGuideDefinitionPageArgs extends fhir.BackboneElementArgs {
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    name?: fhir.FhirUrl | fhir.Reference | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: fhir.FhirUrl | string | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhir.ReferenceArgs | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A code that indicates how the page is generated.
     */
    generation: fhir.FhirCode<GuidePageGenerationCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.generation
     */
    _generation?: fhir.FhirElementArgs;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.ImplementationGuideDefinitionPageArgs[] | undefined;
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare class ImplementationGuideDefinitionPage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    name: (fhir.FhirUrl | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.definition.page.name[x]
     */
    protected static readonly _fts_nameIsChoice: true;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: fhir.FhirString | null;
    /**
     * A code that indicates how the page is generated.
     */
    generation: fhir.FhirCode<GuidePageGenerationCodeType> | null;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page: fhir.ImplementationGuideDefinitionPage[];
    /**
     * Default constructor for ImplementationGuideDefinitionPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionPageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionParameter type.
 */
export interface ImplementationGuideDefinitionParameterArgs extends fhir.BackboneElementArgs {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: fhir.FhirCode<GuideParameterCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Value for named type.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Defines how IG is built by tools.
 */
export declare class ImplementationGuideDefinitionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: fhir.FhirCode<GuideParameterCodeType> | null;
    /**
     * Value for named type.
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for ImplementationGuideDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionTemplate type.
 */
export interface ImplementationGuideDefinitionTemplateArgs extends fhir.BackboneElementArgs {
    /**
     * Type of template specified.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The source location for the template.
     */
    source: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.source
     */
    _source?: fhir.FhirElementArgs;
    /**
     * The scope in which the template applies.
     */
    scope?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.scope
     */
    _scope?: fhir.FhirElementArgs;
}
/**
 * A template for building resources.
 */
export declare class ImplementationGuideDefinitionTemplate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of template specified.
     */
    code: fhir.FhirCode | null;
    /**
     * The source location for the template.
     */
    source: fhir.FhirString | null;
    /**
     * The scope in which the template applies.
     */
    scope?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionTemplateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinition type.
 */
export interface ImplementationGuideDefinitionArgs extends fhir.BackboneElementArgs {
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping?: fhir.ImplementationGuideDefinitionGroupingArgs[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideDefinitionResourceArgs[] | null;
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuideDefinitionPageArgs | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhir.ImplementationGuideDefinitionParameterArgs[] | undefined;
    /**
     * A template for building resources.
     */
    template?: fhir.ImplementationGuideDefinitionTemplateArgs[] | undefined;
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export declare class ImplementationGuideDefinition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping: fhir.ImplementationGuideDefinitionGrouping[];
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideDefinitionResource[];
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter: fhir.ImplementationGuideDefinitionParameter[];
    /**
     * A template for building resources.
     */
    template: fhir.ImplementationGuideDefinitionTemplate[];
    /**
     * Default constructor for ImplementationGuideDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideManifestResource type.
 */
export interface ImplementationGuideManifestResourceArgs extends fhir.BackboneElementArgs {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.ReferenceArgs | null;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    example?: fhir.FhirBoolean | fhir.FhirCanonical | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.relativePath
     */
    _relativePath?: fhir.FhirElementArgs;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideManifestResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    example?: (fhir.FhirBoolean | fhir.FhirCanonical) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.manifest.resource.example[x]
     */
    protected static readonly _fts_exampleIsChoice: true;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: fhir.FhirUrl | undefined;
    /**
     * Default constructor for ImplementationGuideManifestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideManifestResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideManifestPage type.
 */
export interface ImplementationGuideManifestPageArgs extends fhir.BackboneElementArgs {
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Label for the page intended for human display.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.anchor
     */
    _anchor?: (fhir.FhirElementArgs | null)[];
}
/**
 * Information about a page within the IG.
 */
export declare class ImplementationGuideManifestPage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: fhir.FhirString | null;
    /**
     * Label for the page intended for human display.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor: fhir.FhirString[];
    /**
     * Default constructor for ImplementationGuideManifestPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideManifestPageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideManifest type.
 */
export interface ImplementationGuideManifestArgs extends fhir.BackboneElementArgs {
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.rendering
     */
    _rendering?: fhir.FhirElementArgs;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideManifestResourceArgs[] | null;
    /**
     * Information about a page within the IG.
     */
    page?: fhir.ImplementationGuideManifestPageArgs[] | undefined;
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.image
     */
    _image?: (fhir.FhirElementArgs | null)[];
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.other
     */
    _other?: (fhir.FhirElementArgs | null)[];
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export declare class ImplementationGuideManifest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: fhir.FhirUrl | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideManifestResource[];
    /**
     * Information about a page within the IG.
     */
    page: fhir.ImplementationGuideManifestPage[];
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image: fhir.FhirString[];
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other: fhir.FhirString[];
    /**
     * Default constructor for ImplementationGuideManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideManifestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
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
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
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
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
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
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.packageId
     */
    _packageId?: fhir.FhirElementArgs;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.license
     */
    _license?: fhir.FhirElementArgs;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.fhirVersion
     */
    _fhirVersion?: (fhir.FhirElementArgs | null)[];
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhir.ImplementationGuideDependsOnArgs[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.ImplementationGuideGlobalArgs[] | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.ImplementationGuideDefinitionArgs | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.ImplementationGuideManifestArgs | undefined;
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
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
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: fhir.FhirId | null;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: fhir.FhirCode | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: fhir.FhirCode[];
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn: fhir.ImplementationGuideDependsOn[];
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global: fhir.ImplementationGuideGlobal[];
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.ImplementationGuideDefinition | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.ImplementationGuideManifest | undefined;
    /**
     * Default constructor for ImplementationGuide - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImplementationGuide.d.ts.map