import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the Library type.
 */
export interface LibraryArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Library" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Library.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this library outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the library with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Library.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Library.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Library.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of librarys that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired library without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Library.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of library that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental library in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Library.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Library.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Library.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Library.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the library Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Library.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A detailed description of how the library is used from a clinical perspective.
     */
    usage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Library.usage
     */
    _usage?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Library.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Library.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A contributor to the content of the library, including authors, editors, reviewers, and endorsers.
     */
    contributor?: fhir.ContributorArgs[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Library.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifactArgs[] | undefined;
    /**
     * The parameter element defines parameters used by the library.
     */
    parameter?: fhir.ParameterDefinitionArgs[] | undefined;
    /**
     * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
     */
    dataRequirement?: fhir.DataRequirementArgs[] | undefined;
    /**
     * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
     */
    content?: fhir.AttachmentArgs[] | undefined;
}
/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export declare class Library extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Library";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, e.g., to identify this library outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the library with the format [url]|[version].
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
     * Allows filtering of librarys that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired library without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of library that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental library in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the library Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A detailed description of how the library is used from a clinical perspective.
     */
    usage?: fhir.FhirString | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes / editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this is usually after the approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
     */
    topic: fhir.CodeableConcept[];
    /**
     * A contributor to the content of the library, including authors, editors, reviewers, and endorsers.
     */
    contributor: fhir.Contributor[];
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact: fhir.RelatedArtifact[];
    /**
     * The parameter element defines parameters used by the library.
     */
    parameter: fhir.ParameterDefinition[];
    /**
     * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
     */
    dataRequirement: fhir.DataRequirement[];
    /**
     * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
     */
    content: fhir.Attachment[];
    /**
     * Default constructor for Library - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<LibraryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Library.d.ts.map