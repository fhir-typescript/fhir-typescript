import * as fhir from '../fhirJson.js';
/**
 * A human-readable display of the citation.
 */
export interface CitationSummary extends fhir.BackboneElement {
    /**
     * Format for display of the citation.
     */
    style?: fhir.CodeableConcept | undefined;
    /**
     * The human-readable display of the citation.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: Citation.summary.text
     */
    _text?: fhir.FhirElement;
}
/**
 * The assignment to an organizing scheme.
 */
export interface CitationClassification extends fhir.BackboneElement {
    /**
     * The kind of classifier (e.g. publication type, keyword).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The specific classification value.
     */
    classifier?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * An effective date or period for a status of the citation.
 */
export interface CitationStatusDate extends fhir.BackboneElement {
    /**
     * Classification of the status.
     */
    activity: fhir.CodeableConcept | null;
    /**
     * Either occurred or expected.
     */
    actual?: boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.statusDate.actual
     */
    _actual?: fhir.FhirElement;
    /**
     * For an instance, place the same value in both start and end elements.
     */
    period: fhir.Period | null;
}
/**
 * Artifact related to the Citation Resource.
 */
export interface CitationRelatesTo extends fhir.BackboneElement {
    /**
     * How the Citation resource relates to the target artifact.
     */
    relationshipType: fhir.CodeableConcept | null;
    /**
     * The clasification of the related artifact.
     */
    targetClassifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetUri?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.relatesTo.target[x]
     */
    _targetUri?: fhir.FhirElement;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetIdentifier?: fhir.Identifier | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetReference?: fhir.Reference | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetAttachment?: fhir.Attachment | undefined;
}
/**
 * The defined version of the cited artifact.
 */
export interface CitationCitedArtifactVersion extends fhir.BackboneElement {
    /**
     * The version number or other version identifier.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.version.value
     */
    _value?: fhir.FhirElement;
    /**
     * Citation for the main version of the cited artifact.
     */
    baseCitation?: fhir.Reference | undefined;
}
/**
 * An effective date or period for a status of the cited artifact.
 */
export interface CitationCitedArtifactStatusDate extends fhir.BackboneElement {
    /**
     * Classification of the status.
     */
    activity: fhir.CodeableConcept | null;
    /**
     * Either occurred or expected.
     */
    actual?: boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.statusDate.actual
     */
    _actual?: fhir.FhirElement;
    /**
     * For an instance, place the same value in both start and end elements.
     */
    period: fhir.Period | null;
}
/**
 * The title details of the article or artifact.
 */
export interface CitationCitedArtifactTitle extends fhir.BackboneElement {
    /**
     * Used to express the reason or specific aspect for the title.
     */
    type?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Used to express the specific language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * The title of the article or artifact.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.title.text
     */
    _text?: fhir.FhirElement;
}
/**
 * Summary of the article or artifact.
 */
export interface CitationCitedArtifactAbstract extends fhir.BackboneElement {
    /**
     * Used to express the reason or specific aspect for the abstract.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to express the specific language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * Abstract content.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.abstract.text
     */
    _text?: fhir.FhirElement;
    /**
     * Copyright notice for the abstract.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.abstract.copyright
     */
    _copyright?: fhir.FhirElement;
}
/**
 * The component of the article or artifact.
 */
export interface CitationCitedArtifactPart extends fhir.BackboneElement {
    /**
     * The kind of component.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The specification of the component.
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.part.value
     */
    _value?: fhir.FhirElement;
    /**
     * The citation for the full article or artifact.
     */
    baseCitation?: fhir.Reference | undefined;
}
/**
 * The artifact related to the cited artifact.
 */
export interface CitationCitedArtifactRelatesTo extends fhir.BackboneElement {
    /**
     * How the cited artifact relates to the target artifact.
     */
    relationshipType: fhir.CodeableConcept | null;
    /**
     * The clasification of the related artifact.
     */
    targetClassifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetUri?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.relatesTo.target[x]
     */
    _targetUri?: fhir.FhirElement;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetIdentifier?: fhir.Identifier | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetReference?: fhir.Reference | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetAttachment?: fhir.Attachment | undefined;
}
/**
 * The collection the cited article or artifact is published in.
 */
export interface CitationCitedArtifactPublicationFormPublishedIn extends fhir.BackboneElement {
    /**
     * Journals and newspapers are coded as Periodical.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * ClinicalTrials.gov is a name of a database.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.publishedIn.title
     */
    _title?: fhir.FhirElement;
    /**
     * Name of the publisher.
     */
    publisher?: fhir.Reference | undefined;
    /**
     * Geographic location of the publisher.
     */
    publisherLocation?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.publishedIn.publisherLocation
     */
    _publisherLocation?: fhir.FhirElement;
}
/**
 * Defining the date on which the issue of the journal was published.
 */
export interface CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication extends fhir.BackboneElement {
    /**
     * Date on which the issue of the journal was published.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date
     */
    _date?: fhir.FhirElement;
    /**
     * Year on which the issue of the journal was published.
     */
    year?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year
     */
    _year?: fhir.FhirElement;
    /**
     * Month on which the issue of the journal was published.
     */
    month?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month
     */
    _month?: fhir.FhirElement;
    /**
     * Day on which the issue of the journal was published.
     */
    day?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day
     */
    _day?: fhir.FhirElement;
    /**
     * Spring, Summer, Fall/Autumn, Winter.
     */
    season?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season
     */
    _season?: fhir.FhirElement;
    /**
     * Text representation of the date of which the issue of the journal was published.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text
     */
    _text?: fhir.FhirElement;
}
/**
 * The specific issue in which the cited article resides.
 */
export interface CitationCitedArtifactPublicationFormPeriodicRelease extends fhir.BackboneElement {
    /**
     * National Library of Medicine uses the codes "Internet" or "Print".
     */
    citedMedium?: fhir.CodeableConcept | undefined;
    /**
     * Volume number of journal in which the article is published.
     */
    volume?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.volume
     */
    _volume?: fhir.FhirElement;
    /**
     * Issue, part or supplement of journal in which the article is published.
     */
    issue?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.issue
     */
    _issue?: fhir.FhirElement;
    /**
     * Defining the date on which the issue of the journal was published.
     */
    dateOfPublication?: fhir.CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication | undefined;
}
/**
 * A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
 */
export interface CitationCitedArtifactPublicationForm extends fhir.BackboneElement {
    /**
     * The collection the cited article or artifact is published in.
     */
    publishedIn?: fhir.CitationCitedArtifactPublicationFormPublishedIn | undefined;
    /**
     * The specific issue in which the cited article resides.
     */
    periodicRelease?: fhir.CitationCitedArtifactPublicationFormPeriodicRelease | undefined;
    /**
     * The date the article was added to the database, or the date the article was released (which may differ from the journal issue publication date).
     */
    articleDate?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.articleDate
     */
    _articleDate?: fhir.FhirElement;
    /**
     * The date the article was last revised or updated in the database.
     */
    lastRevisionDate?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.lastRevisionDate
     */
    _lastRevisionDate?: fhir.FhirElement;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Entry number or identifier for inclusion in a database.
     */
    accessionNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.accessionNumber
     */
    _accessionNumber?: fhir.FhirElement;
    /**
     * Used for full display of pagination.
     */
    pageString?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.pageString
     */
    _pageString?: fhir.FhirElement;
    /**
     * Used for isolated representation of first page.
     */
    firstPage?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.firstPage
     */
    _firstPage?: fhir.FhirElement;
    /**
     * Used for isolated representation of last page.
     */
    lastPage?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.lastPage
     */
    _lastPage?: fhir.FhirElement;
    /**
     * Actual or approximate number of pages or screens.
     */
    pageCount?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.pageCount
     */
    _pageCount?: fhir.FhirElement;
    /**
     * Copyright notice for the full article or artifact.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.copyright
     */
    _copyright?: fhir.FhirElement;
}
/**
 * Used for any URL for the article or artifact cited.
 */
export interface CitationCitedArtifactWebLocation extends fhir.BackboneElement {
    /**
     * Code the reason for different URLs, e.g. abstract and full-text.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Persistent URLs, like doi, are preferred.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.webLocation.url
     */
    _url?: fhir.FhirElement;
}
/**
 * Provenance and copyright of classification.
 */
export interface CitationCitedArtifactClassificationWhoClassified extends fhir.BackboneElement {
    /**
     * Person who created the classification.
     */
    person?: fhir.Reference | undefined;
    /**
     * Organization who created the classification.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The publisher of the classification, not the publisher of the article or artifact being cited.
     */
    publisher?: fhir.Reference | undefined;
    /**
     * Rights management statement for the classification.
     */
    classifierCopyright?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.classification.whoClassified.classifierCopyright
     */
    _classifierCopyright?: fhir.FhirElement;
    /**
     * Acceptable to re-use the classification.
     */
    freeToShare?: boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.classification.whoClassified.freeToShare
     */
    _freeToShare?: fhir.FhirElement;
}
/**
 * The assignment to an organizing scheme.
 */
export interface CitationCitedArtifactClassification extends fhir.BackboneElement {
    /**
     * The kind of classifier (e.g. publication type, keyword).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The specific classification value.
     */
    classifier?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Provenance and copyright of classification.
     */
    whoClassified?: fhir.CitationCitedArtifactClassificationWhoClassified | undefined;
}
/**
 * Organization affiliated with the entity.
 */
export interface CitationCitedArtifactContributorshipEntryAffiliationInfo extends fhir.BackboneElement {
    /**
     * Display for the organization.
     */
    affiliation?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation
     */
    _affiliation?: fhir.FhirElement;
    /**
     * Role within the organization, such as professional title.
     */
    role?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.affiliationInfo.role
     */
    _role?: fhir.FhirElement;
    /**
     * Identifier for the organization.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
}
/**
 * Contributions with accounting for time or number.
 */
export interface CitationCitedArtifactContributorshipEntryContributionInstance extends fhir.BackboneElement {
    /**
     * The specific contribution.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The time that the contribution was made.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.contributionInstance.time
     */
    _time?: fhir.FhirElement;
}
/**
 * Used to report contributorship in individualized ways.
 */
export interface CitationCitedArtifactContributorshipEntry extends fhir.BackboneElement {
    /**
     * humanName.family can match MEDLINE-based lastName (used for surname or single name), humanName.given can match MEDLINE-based forename (used for remainder of name except for suffix), humanName.suffix can match MEDLINE-based suffix (eg 2nd, 3rd, Jr, Sr).
     */
    name?: fhir.HumanName | undefined;
    /**
     * This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
     */
    initials?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.initials
     */
    _initials?: fhir.FhirElement;
    /**
     * This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
     */
    collectiveName?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.collectiveName
     */
    _collectiveName?: fhir.FhirElement;
    /**
     * Avoids needing to disambiguate common last names or changes of name. ORCID is commonly used as author identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Organization affiliated with the entity.
     */
    affiliationInfo?: (fhir.CitationCitedArtifactContributorshipEntryAffiliationInfo | null)[] | undefined;
    /**
     * Physical mailing address for the author or contributor.
     */
    address?: (fhir.Address | null)[] | undefined;
    /**
     * Email or telephone contact methods for the author or contributor.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * The CreDiT taxonomy provides a way to encode contribution information inside article XML files. The purpose of CRediT is to provide transparency in contributions to scholarly published work, to enable improved systems of attribution, credit, and accountability.
     */
    contributionType?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The role of the contributor (e.g. author, editor, reviewer).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Contributions with accounting for time or number.
     */
    contributionInstance?: (fhir.CitationCitedArtifactContributorshipEntryContributionInstance | null)[] | undefined;
    /**
     * Indication of which contributor is the corresponding contributor for the role.
     */
    correspondingContact?: boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.correspondingContact
     */
    _correspondingContact?: fhir.FhirElement;
    /**
     * Used to code order of authors.
     */
    listOrder?: number | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.listOrder
     */
    _listOrder?: fhir.FhirElement;
}
/**
 * Used to record a display of the author/contributor list without separate coding for each list member.
 */
export interface CitationCitedArtifactContributorshipSummary extends fhir.BackboneElement {
    /**
     * Used most commonly to express an author list or a contributorship statement.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The format for the display string.
     */
    style?: fhir.CodeableConcept | undefined;
    /**
     * Used to code the producer or rule for creating the display string.
     */
    source?: fhir.CodeableConcept | undefined;
    /**
     * The display string for the author list, contributor list, or contributorship statement.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.summary.value
     */
    _value?: fhir.FhirElement;
}
/**
 * This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
 */
export interface CitationCitedArtifactContributorship extends fhir.BackboneElement {
    /**
     * If list is incomplete "et al" can be appended to Contributorship.summary.value for display purposes.
     */
    complete?: boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.complete
     */
    _complete?: fhir.FhirElement;
    /**
     * Used to report contributorship in individualized ways.
     */
    entry?: (fhir.CitationCitedArtifactContributorshipEntry | null)[] | undefined;
    /**
     * Used to record a display of the author/contributor list without separate coding for each list member.
     */
    summary?: (fhir.CitationCitedArtifactContributorshipSummary | null)[] | undefined;
}
/**
 * The article or artifact being described.
 */
export interface CitationCitedArtifact extends fhir.BackboneElement {
    /**
     * May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple citation resources.
     */
    relatedIdentifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * When the cited artifact was accessed.
     */
    dateAccessed?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.dateAccessed
     */
    _dateAccessed?: fhir.FhirElement;
    /**
     * The defined version of the cited artifact.
     */
    version?: fhir.CitationCitedArtifactVersion | undefined;
    /**
     * The status of the cited artifact.
     */
    currentState?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An effective date or period for a status of the cited artifact.
     */
    statusDate?: (fhir.CitationCitedArtifactStatusDate | null)[] | undefined;
    /**
     * The title details of the article or artifact.
     */
    title?: (fhir.CitationCitedArtifactTitle | null)[] | undefined;
    /**
     * Summary of the article or artifact.
     */
    abstract?: (fhir.CitationCitedArtifactAbstract | null)[] | undefined;
    /**
     * The component of the article or artifact.
     */
    part?: fhir.CitationCitedArtifactPart | undefined;
    /**
     * The artifact related to the cited artifact.
     */
    relatesTo?: (fhir.CitationCitedArtifactRelatesTo | null)[] | undefined;
    /**
     * A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
     */
    publicationForm?: (fhir.CitationCitedArtifactPublicationForm | null)[] | undefined;
    /**
     * Used for any URL for the article or artifact cited.
     */
    webLocation?: (fhir.CitationCitedArtifactWebLocation | null)[] | undefined;
    /**
     * The assignment to an organizing scheme.
     */
    classification?: (fhir.CitationCitedArtifactClassification | null)[] | undefined;
    /**
     * This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
     */
    contributorship?: fhir.CitationCitedArtifactContributorship | undefined;
    /**
     * Any additional information or content for the article or artifact.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
/**
 * The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 */
export interface Citation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Citation" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.url
     */
    _url?: fhir.FhirElement;
    /**
     * May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different citation instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the citation with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of summarys s that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Citation.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of citations that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the citation. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the citation is the organization or individual primarily responsible for the maintenance and upkeep of the citation. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the citation. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the citation was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the citation as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the citation is presumed to be the predominant language in the place the citation was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the citation to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the citation. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this citation.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * Use and/or publishing restrictions for the Citation, not for the cited artifact.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: Citation.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a citation  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Who authored the Citation.
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Who edited the Citation.
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Who reviewed the Citation.
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Who endorsed the Citation.
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * A human-readable display of the citation.
     */
    summary?: (fhir.CitationSummary | null)[] | undefined;
    /**
     * The assignment to an organizing scheme.
     */
    classification?: (fhir.CitationClassification | null)[] | undefined;
    /**
     * Used for general notes and annotations not coded elsewhere.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * The status of the citation.
     */
    currentState?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * An effective date or period for a status of the citation.
     */
    statusDate?: (fhir.CitationStatusDate | null)[] | undefined;
    /**
     * Artifact related to the Citation Resource.
     */
    relatesTo?: (fhir.CitationRelatesTo | null)[] | undefined;
    /**
     * The article or artifact being described.
     */
    citedArtifact?: fhir.CitationCitedArtifact | undefined;
}
//# sourceMappingURL=Citation.d.ts.map