import * as fhir from '../fhirJson.js';
/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export interface ResearchDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ResearchDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different research definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
     */
    shortTitle?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.shortTitle
     */
    _shortTitle?: fhir.FhirElement;
    /**
     * An explanatory or alternate title for the ResearchDefinition giving additional information about its content.
     */
    subtitle?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.subtitle
     */
    _subtitle?: fhir.FhirElement;
    /**
     * Allows filtering of research definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ResearchDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of research definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The subject of the ResearchDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.Reference | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the research definition is the organization or individual primarily responsible for the maintenance and upkeep of the research definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the research definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research definition is presumed to be the predominant language in the place the research definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    comment?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.comment
     */
    _comment?: (fhir.FhirElement | null)[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the research definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the research definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A detailed description, from a clinical perspective, of how the ResearchDefinition is used.
     */
    usage?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.usage
     */
    _usage?: fhir.FhirElement;
    /**
     * A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a research definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching.
     */
    topic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An individiual or organization primarily involved in the creation and maintenance of the content.
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for internal coherence of the content.
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization primarily responsible for review of some aspect of the content.
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * An individual or organization responsible for officially endorsing the content for use in some setting.
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Each related artifact is either an attachment, or a reference to another resource, but not both.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * A reference to a Library resource containing the formal logic used by the ResearchDefinition.
     */
    library?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ResearchDefinition.library
     */
    _library?: (fhir.FhirElement | null)[];
    /**
     * A reference to a ResearchElementDefinition resource that defines the population for the research.
     */
    population: fhir.Reference | null;
    /**
     * A reference to a ResearchElementDefinition resource that defines the exposure for the research.
     */
    exposure?: fhir.Reference | undefined;
    /**
     * A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research.
     */
    exposureAlternative?: fhir.Reference | undefined;
    /**
     * A reference to a ResearchElementDefinition resomece that defines the outcome for the research.
     */
    outcome?: fhir.Reference | undefined;
}
//# sourceMappingURL=ResearchDefinition.d.ts.map