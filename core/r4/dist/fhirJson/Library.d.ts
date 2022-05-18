import * as fhir from '../fhirJson.js';
/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export interface Library extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Library";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Library.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this library outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different library instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the library with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Library.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Library.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Library.title
     */
    _title?: fhir.FhirElement;
    /**
     * An explanatory or alternate title for the library giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: Library.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Allows filtering of libraries that are appropriate for use vs. not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Allows filtering of librarys that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: Library.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A code or group definition that describes the intended subject of the contents of the library.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A code or group definition that describes the intended subject of the contents of the library.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the library. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Library.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the library is the organization or individual primarily responsible for the maintenance and upkeep of the library. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the library. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Library.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the library was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the library as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the library is presumed to be the predominant language in the place the library was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Library.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the library to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the library. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this library.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: Library.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description of how the library is used from a clinical perspective.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: Library.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Library.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: Library.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: Library.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a library  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching.
     */
    topic?: fhir.CodeableConcept[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: fhir.ContactDetail[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: fhir.ContactDetail[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: fhir.RelatedArtifact[] | undefined;
    /**
     * The parameter element defines parameters used by the library.
     */
    parameter?: fhir.ParameterDefinition[] | undefined;
    /**
     * Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library.
     */
    dataRequirement?: fhir.DataRequirement[] | undefined;
    /**
     * The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content.
     */
    content?: fhir.Attachment[] | undefined;
}
//# sourceMappingURL=Library.d.ts.map