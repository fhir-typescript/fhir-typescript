import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the CitationSummary type.
 */
export interface CitationSummaryArgs extends fhir.BackboneElementArgs {
    /**
     * Format for display of the citation.
     */
    style?: fhir.CodeableConceptArgs | undefined;
    /**
     * The human-readable display of the citation.
     */
    text: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.summary.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * A human-readable display of the citation.
 */
export declare class CitationSummary extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Format for display of the citation.
     */
    style?: fhir.CodeableConcept | undefined;
    /**
     * The human-readable display of the citation.
     */
    text: fhir.FhirMarkdown | null;
    /**
     * Default constructor for CitationSummary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationSummaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationClassification type.
 */
export interface CitationClassificationArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of classifier (e.g. publication type, keyword).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific classification value.
     */
    classifier?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * The assignment to an organizing scheme.
 */
export declare class CitationClassification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of classifier (e.g. publication type, keyword).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The specific classification value.
     */
    classifier: fhir.CodeableConcept[];
    /**
     * Default constructor for CitationClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationClassificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationStatusDate type.
 */
export interface CitationStatusDateArgs extends fhir.BackboneElementArgs {
    /**
     * Classification of the status.
     */
    activity: fhir.CodeableConceptArgs | null;
    /**
     * Either occurred or expected.
     */
    actual?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.statusDate.actual
     */
    _actual?: fhir.FhirElementArgs;
    /**
     * For an instance, place the same value in both start and end elements.
     */
    period: fhir.PeriodArgs | null;
}
/**
 * An effective date or period for a status of the citation.
 */
export declare class CitationStatusDate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Classification of the status.
     */
    activity: fhir.CodeableConcept | null;
    /**
     * Either occurred or expected.
     */
    actual?: fhir.FhirBoolean | undefined;
    /**
     * For an instance, place the same value in both start and end elements.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for CitationStatusDate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationStatusDateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationRelatesTo type.
 */
export interface CitationRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * How the Citation resource relates to the target artifact.
     */
    relationshipType: fhir.CodeableConceptArgs | null;
    /**
     * The clasification of the related artifact.
     */
    targetClassifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    target?: fhir.FhirUri | fhir.Identifier | fhir.Reference | fhir.Attachment | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetUri?: fhir.FhirUri | string | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetReference?: fhir.ReferenceArgs | undefined;
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    targetAttachment?: fhir.AttachmentArgs | undefined;
}
/**
 * Artifact related to the Citation Resource.
 */
export declare class CitationRelatesTo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the Citation resource relates to the target artifact.
     */
    relationshipType: fhir.CodeableConcept | null;
    /**
     * The clasification of the related artifact.
     */
    targetClassifier: fhir.CodeableConcept[];
    /**
     * The article or artifact that the Citation Resource is related to.
     */
    target: (fhir.FhirUri | fhir.Identifier | fhir.Reference | fhir.Attachment) | null;
    /**
     * Internal flag to properly serialize choice-type element Citation.relatesTo.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * Default constructor for CitationRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationRelatesToArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactVersion type.
 */
export interface CitationCitedArtifactVersionArgs extends fhir.BackboneElementArgs {
    /**
     * The version number or other version identifier.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.version.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * Citation for the main version of the cited artifact.
     */
    baseCitation?: fhir.ReferenceArgs | undefined;
}
/**
 * The defined version of the cited artifact.
 */
export declare class CitationCitedArtifactVersion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The version number or other version identifier.
     */
    value: fhir.FhirString | null;
    /**
     * Citation for the main version of the cited artifact.
     */
    baseCitation?: fhir.Reference | undefined;
    /**
     * Default constructor for CitationCitedArtifactVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactVersionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactStatusDate type.
 */
export interface CitationCitedArtifactStatusDateArgs extends fhir.BackboneElementArgs {
    /**
     * Classification of the status.
     */
    activity: fhir.CodeableConceptArgs | null;
    /**
     * Either occurred or expected.
     */
    actual?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.statusDate.actual
     */
    _actual?: fhir.FhirElementArgs;
    /**
     * For an instance, place the same value in both start and end elements.
     */
    period: fhir.PeriodArgs | null;
}
/**
 * An effective date or period for a status of the cited artifact.
 */
export declare class CitationCitedArtifactStatusDate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Classification of the status.
     */
    activity: fhir.CodeableConcept | null;
    /**
     * Either occurred or expected.
     */
    actual?: fhir.FhirBoolean | undefined;
    /**
     * For an instance, place the same value in both start and end elements.
     */
    period: fhir.Period | null;
    /**
     * Default constructor for CitationCitedArtifactStatusDate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactStatusDateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactTitle type.
 */
export interface CitationCitedArtifactTitleArgs extends fhir.BackboneElementArgs {
    /**
     * Used to express the reason or specific aspect for the title.
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Used to express the specific language.
     */
    language?: fhir.CodeableConceptArgs | undefined;
    /**
     * The title of the article or artifact.
     */
    text: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.title.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * The title details of the article or artifact.
 */
export declare class CitationCitedArtifactTitle extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Used to express the reason or specific aspect for the title.
     */
    type: fhir.CodeableConcept[];
    /**
     * Used to express the specific language.
     */
    language?: fhir.CodeableConcept | undefined;
    /**
     * The title of the article or artifact.
     */
    text: fhir.FhirMarkdown | null;
    /**
     * Default constructor for CitationCitedArtifactTitle - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactTitleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactAbstract type.
 */
export interface CitationCitedArtifactAbstractArgs extends fhir.BackboneElementArgs {
    /**
     * Used to express the reason or specific aspect for the abstract.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used to express the specific language.
     */
    language?: fhir.CodeableConceptArgs | undefined;
    /**
     * Abstract content.
     */
    text: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.abstract.text
     */
    _text?: fhir.FhirElementArgs;
    /**
     * Copyright notice for the abstract.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.abstract.copyright
     */
    _copyright?: fhir.FhirElementArgs;
}
/**
 * Summary of the article or artifact.
 */
export declare class CitationCitedArtifactAbstract extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    text: fhir.FhirMarkdown | null;
    /**
     * Copyright notice for the abstract.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CitationCitedArtifactAbstract - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactAbstractArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactPart type.
 */
export interface CitationCitedArtifactPartArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of component.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specification of the component.
     */
    value?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.part.value
     */
    _value?: fhir.FhirElementArgs;
    /**
     * The citation for the full article or artifact.
     */
    baseCitation?: fhir.ReferenceArgs | undefined;
}
/**
 * The component of the article or artifact.
 */
export declare class CitationCitedArtifactPart extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of component.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The specification of the component.
     */
    value?: fhir.FhirString | undefined;
    /**
     * The citation for the full article or artifact.
     */
    baseCitation?: fhir.Reference | undefined;
    /**
     * Default constructor for CitationCitedArtifactPart - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactPartArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactRelatesTo type.
 */
export interface CitationCitedArtifactRelatesToArgs extends fhir.BackboneElementArgs {
    /**
     * How the cited artifact relates to the target artifact.
     */
    relationshipType: fhir.CodeableConceptArgs | null;
    /**
     * The clasification of the related artifact.
     */
    targetClassifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    target?: fhir.FhirUri | fhir.Identifier | fhir.Reference | fhir.Attachment | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetUri?: fhir.FhirUri | string | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetReference?: fhir.ReferenceArgs | undefined;
    /**
     * The article or artifact that the cited artifact is related to.
     */
    targetAttachment?: fhir.AttachmentArgs | undefined;
}
/**
 * The artifact related to the cited artifact.
 */
export declare class CitationCitedArtifactRelatesTo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the cited artifact relates to the target artifact.
     */
    relationshipType: fhir.CodeableConcept | null;
    /**
     * The clasification of the related artifact.
     */
    targetClassifier: fhir.CodeableConcept[];
    /**
     * The article or artifact that the cited artifact is related to.
     */
    target: (fhir.FhirUri | fhir.Identifier | fhir.Reference | fhir.Attachment) | null;
    /**
     * Internal flag to properly serialize choice-type element Citation.citedArtifact.relatesTo.target[x]
     */
    protected static readonly _fts_targetIsChoice: true;
    /**
     * Default constructor for CitationCitedArtifactRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactRelatesToArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactPublicationFormPublishedIn type.
 */
export interface CitationCitedArtifactPublicationFormPublishedInArgs extends fhir.BackboneElementArgs {
    /**
     * Journals and newspapers are coded as Periodical.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * ClinicalTrials.gov is a name of a database.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.publishedIn.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Name of the publisher.
     */
    publisher?: fhir.ReferenceArgs | undefined;
    /**
     * Geographic location of the publisher.
     */
    publisherLocation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.publishedIn.publisherLocation
     */
    _publisherLocation?: fhir.FhirElementArgs;
}
/**
 * The collection the cited article or artifact is published in.
 */
export declare class CitationCitedArtifactPublicationFormPublishedIn extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Journals and newspapers are coded as Periodical.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN.
     */
    identifier: fhir.Identifier[];
    /**
     * ClinicalTrials.gov is a name of a database.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Name of the publisher.
     */
    publisher?: fhir.Reference | undefined;
    /**
     * Geographic location of the publisher.
     */
    publisherLocation?: fhir.FhirString | undefined;
    /**
     * Default constructor for CitationCitedArtifactPublicationFormPublishedIn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactPublicationFormPublishedInArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication type.
 */
export interface CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationArgs extends fhir.BackboneElementArgs {
    /**
     * Date on which the issue of the journal was published.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Year on which the issue of the journal was published.
     */
    year?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.year
     */
    _year?: fhir.FhirElementArgs;
    /**
     * Month on which the issue of the journal was published.
     */
    month?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.month
     */
    _month?: fhir.FhirElementArgs;
    /**
     * Day on which the issue of the journal was published.
     */
    day?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.day
     */
    _day?: fhir.FhirElementArgs;
    /**
     * Spring, Summer, Fall/Autumn, Winter.
     */
    season?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.season
     */
    _season?: fhir.FhirElementArgs;
    /**
     * Text representation of the date of which the issue of the journal was published.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.dateOfPublication.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Defining the date on which the issue of the journal was published.
 */
export declare class CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Date on which the issue of the journal was published.
     */
    date?: fhir.FhirDate | undefined;
    /**
     * Year on which the issue of the journal was published.
     */
    year?: fhir.FhirString | undefined;
    /**
     * Month on which the issue of the journal was published.
     */
    month?: fhir.FhirString | undefined;
    /**
     * Day on which the issue of the journal was published.
     */
    day?: fhir.FhirString | undefined;
    /**
     * Spring, Summer, Fall/Autumn, Winter.
     */
    season?: fhir.FhirString | undefined;
    /**
     * Text representation of the date of which the issue of the journal was published.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactPublicationFormPeriodicRelease type.
 */
export interface CitationCitedArtifactPublicationFormPeriodicReleaseArgs extends fhir.BackboneElementArgs {
    /**
     * National Library of Medicine uses the codes "Internet" or "Print".
     */
    citedMedium?: fhir.CodeableConceptArgs | undefined;
    /**
     * Volume number of journal in which the article is published.
     */
    volume?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.volume
     */
    _volume?: fhir.FhirElementArgs;
    /**
     * Issue, part or supplement of journal in which the article is published.
     */
    issue?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.periodicRelease.issue
     */
    _issue?: fhir.FhirElementArgs;
    /**
     * Defining the date on which the issue of the journal was published.
     */
    dateOfPublication?: fhir.CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublicationArgs | undefined;
}
/**
 * The specific issue in which the cited article resides.
 */
export declare class CitationCitedArtifactPublicationFormPeriodicRelease extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * National Library of Medicine uses the codes "Internet" or "Print".
     */
    citedMedium?: fhir.CodeableConcept | undefined;
    /**
     * Volume number of journal in which the article is published.
     */
    volume?: fhir.FhirString | undefined;
    /**
     * Issue, part or supplement of journal in which the article is published.
     */
    issue?: fhir.FhirString | undefined;
    /**
     * Defining the date on which the issue of the journal was published.
     */
    dateOfPublication?: fhir.CitationCitedArtifactPublicationFormPeriodicReleaseDateOfPublication | undefined;
    /**
     * Default constructor for CitationCitedArtifactPublicationFormPeriodicRelease - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactPublicationFormPeriodicReleaseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactPublicationForm type.
 */
export interface CitationCitedArtifactPublicationFormArgs extends fhir.BackboneElementArgs {
    /**
     * The collection the cited article or artifact is published in.
     */
    publishedIn?: fhir.CitationCitedArtifactPublicationFormPublishedInArgs | undefined;
    /**
     * The specific issue in which the cited article resides.
     */
    periodicRelease?: fhir.CitationCitedArtifactPublicationFormPeriodicReleaseArgs | undefined;
    /**
     * The date the article was added to the database, or the date the article was released (which may differ from the journal issue publication date).
     */
    articleDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.articleDate
     */
    _articleDate?: fhir.FhirElementArgs;
    /**
     * The date the article was last revised or updated in the database.
     */
    lastRevisionDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.lastRevisionDate
     */
    _lastRevisionDate?: fhir.FhirElementArgs;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Entry number or identifier for inclusion in a database.
     */
    accessionNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.accessionNumber
     */
    _accessionNumber?: fhir.FhirElementArgs;
    /**
     * Used for full display of pagination.
     */
    pageString?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.pageString
     */
    _pageString?: fhir.FhirElementArgs;
    /**
     * Used for isolated representation of first page.
     */
    firstPage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.firstPage
     */
    _firstPage?: fhir.FhirElementArgs;
    /**
     * Used for isolated representation of last page.
     */
    lastPage?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.lastPage
     */
    _lastPage?: fhir.FhirElementArgs;
    /**
     * Actual or approximate number of pages or screens.
     */
    pageCount?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.pageCount
     */
    _pageCount?: fhir.FhirElementArgs;
    /**
     * Copyright notice for the full article or artifact.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.publicationForm.copyright
     */
    _copyright?: fhir.FhirElementArgs;
}
/**
 * A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
 */
export declare class CitationCitedArtifactPublicationForm extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    articleDate?: fhir.FhirDateTime | undefined;
    /**
     * The date the article was last revised or updated in the database.
     */
    lastRevisionDate?: fhir.FhirDateTime | undefined;
    /**
     * Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
     */
    language: fhir.CodeableConcept[];
    /**
     * Entry number or identifier for inclusion in a database.
     */
    accessionNumber?: fhir.FhirString | undefined;
    /**
     * Used for full display of pagination.
     */
    pageString?: fhir.FhirString | undefined;
    /**
     * Used for isolated representation of first page.
     */
    firstPage?: fhir.FhirString | undefined;
    /**
     * Used for isolated representation of last page.
     */
    lastPage?: fhir.FhirString | undefined;
    /**
     * Actual or approximate number of pages or screens.
     */
    pageCount?: fhir.FhirString | undefined;
    /**
     * Copyright notice for the full article or artifact.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CitationCitedArtifactPublicationForm - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactPublicationFormArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactWebLocation type.
 */
export interface CitationCitedArtifactWebLocationArgs extends fhir.BackboneElementArgs {
    /**
     * Code the reason for different URLs, e.g. abstract and full-text.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Persistent URLs, like doi, are preferred.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.webLocation.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * Used for any URL for the article or artifact cited.
 */
export declare class CitationCitedArtifactWebLocation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Code the reason for different URLs, e.g. abstract and full-text.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Persistent URLs, like doi, are preferred.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Default constructor for CitationCitedArtifactWebLocation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactWebLocationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactClassificationWhoClassified type.
 */
export interface CitationCitedArtifactClassificationWhoClassifiedArgs extends fhir.BackboneElementArgs {
    /**
     * Person who created the classification.
     */
    person?: fhir.ReferenceArgs | undefined;
    /**
     * Organization who created the classification.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The publisher of the classification, not the publisher of the article or artifact being cited.
     */
    publisher?: fhir.ReferenceArgs | undefined;
    /**
     * Rights management statement for the classification.
     */
    classifierCopyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.classification.whoClassified.classifierCopyright
     */
    _classifierCopyright?: fhir.FhirElementArgs;
    /**
     * Acceptable to re-use the classification.
     */
    freeToShare?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.classification.whoClassified.freeToShare
     */
    _freeToShare?: fhir.FhirElementArgs;
}
/**
 * Provenance and copyright of classification.
 */
export declare class CitationCitedArtifactClassificationWhoClassified extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    classifierCopyright?: fhir.FhirString | undefined;
    /**
     * Acceptable to re-use the classification.
     */
    freeToShare?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for CitationCitedArtifactClassificationWhoClassified - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactClassificationWhoClassifiedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactClassification type.
 */
export interface CitationCitedArtifactClassificationArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of classifier (e.g. publication type, keyword).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The specific classification value.
     */
    classifier?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Provenance and copyright of classification.
     */
    whoClassified?: fhir.CitationCitedArtifactClassificationWhoClassifiedArgs | undefined;
}
/**
 * The assignment to an organizing scheme.
 */
export declare class CitationCitedArtifactClassification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of classifier (e.g. publication type, keyword).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The specific classification value.
     */
    classifier: fhir.CodeableConcept[];
    /**
     * Provenance and copyright of classification.
     */
    whoClassified?: fhir.CitationCitedArtifactClassificationWhoClassified | undefined;
    /**
     * Default constructor for CitationCitedArtifactClassification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactClassificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactContributorshipEntryAffiliationInfo type.
 */
export interface CitationCitedArtifactContributorshipEntryAffiliationInfoArgs extends fhir.BackboneElementArgs {
    /**
     * Display for the organization.
     */
    affiliation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.affiliationInfo.affiliation
     */
    _affiliation?: fhir.FhirElementArgs;
    /**
     * Role within the organization, such as professional title.
     */
    role?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.affiliationInfo.role
     */
    _role?: fhir.FhirElementArgs;
    /**
     * Identifier for the organization.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
}
/**
 * Organization affiliated with the entity.
 */
export declare class CitationCitedArtifactContributorshipEntryAffiliationInfo extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Display for the organization.
     */
    affiliation?: fhir.FhirString | undefined;
    /**
     * Role within the organization, such as professional title.
     */
    role?: fhir.FhirString | undefined;
    /**
     * Identifier for the organization.
     */
    identifier: fhir.Identifier[];
    /**
     * Default constructor for CitationCitedArtifactContributorshipEntryAffiliationInfo - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactContributorshipEntryAffiliationInfoArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactContributorshipEntryContributionInstance type.
 */
export interface CitationCitedArtifactContributorshipEntryContributionInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * The specific contribution.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The time that the contribution was made.
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.contributionInstance.time
     */
    _time?: fhir.FhirElementArgs;
}
/**
 * Contributions with accounting for time or number.
 */
export declare class CitationCitedArtifactContributorshipEntryContributionInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specific contribution.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The time that the contribution was made.
     */
    time?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for CitationCitedArtifactContributorshipEntryContributionInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactContributorshipEntryContributionInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactContributorshipEntry type.
 */
export interface CitationCitedArtifactContributorshipEntryArgs extends fhir.BackboneElementArgs {
    /**
     * humanName.family can match MEDLINE-based lastName (used for surname or single name), humanName.given can match MEDLINE-based forename (used for remainder of name except for suffix), humanName.suffix can match MEDLINE-based suffix (eg 2nd, 3rd, Jr, Sr).
     */
    name?: fhir.HumanNameArgs | undefined;
    /**
     * This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
     */
    initials?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.initials
     */
    _initials?: fhir.FhirElementArgs;
    /**
     * This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
     */
    collectiveName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.collectiveName
     */
    _collectiveName?: fhir.FhirElementArgs;
    /**
     * Avoids needing to disambiguate common last names or changes of name. ORCID is commonly used as author identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Organization affiliated with the entity.
     */
    affiliationInfo?: fhir.CitationCitedArtifactContributorshipEntryAffiliationInfoArgs[] | undefined;
    /**
     * Physical mailing address for the author or contributor.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * Email or telephone contact methods for the author or contributor.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * The CreDiT taxonomy provides a way to encode contribution information inside article XML files. The purpose of CRediT is to provide transparency in contributions to scholarly published work, to enable improved systems of attribution, credit, and accountability.
     */
    contributionType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The role of the contributor (e.g. author, editor, reviewer).
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * Contributions with accounting for time or number.
     */
    contributionInstance?: fhir.CitationCitedArtifactContributorshipEntryContributionInstanceArgs[] | undefined;
    /**
     * Indication of which contributor is the corresponding contributor for the role.
     */
    correspondingContact?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.correspondingContact
     */
    _correspondingContact?: fhir.FhirElementArgs;
    /**
     * Used to code order of authors.
     */
    listOrder?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.entry.listOrder
     */
    _listOrder?: fhir.FhirElementArgs;
}
/**
 * Used to report contributorship in individualized ways.
 */
export declare class CitationCitedArtifactContributorshipEntry extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * humanName.family can match MEDLINE-based lastName (used for surname or single name), humanName.given can match MEDLINE-based forename (used for remainder of name except for suffix), humanName.suffix can match MEDLINE-based suffix (eg 2nd, 3rd, Jr, Sr).
     */
    name?: fhir.HumanName | undefined;
    /**
     * This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
     */
    initials?: fhir.FhirString | undefined;
    /**
     * This element is used in Medline based citations, but not supported fully by FHIR HumanName datatype.
     */
    collectiveName?: fhir.FhirString | undefined;
    /**
     * Avoids needing to disambiguate common last names or changes of name. ORCID is commonly used as author identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * Organization affiliated with the entity.
     */
    affiliationInfo: fhir.CitationCitedArtifactContributorshipEntryAffiliationInfo[];
    /**
     * Physical mailing address for the author or contributor.
     */
    address: fhir.Address[];
    /**
     * Email or telephone contact methods for the author or contributor.
     */
    telecom: fhir.ContactPoint[];
    /**
     * The CreDiT taxonomy provides a way to encode contribution information inside article XML files. The purpose of CRediT is to provide transparency in contributions to scholarly published work, to enable improved systems of attribution, credit, and accountability.
     */
    contributionType: fhir.CodeableConcept[];
    /**
     * The role of the contributor (e.g. author, editor, reviewer).
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Contributions with accounting for time or number.
     */
    contributionInstance: fhir.CitationCitedArtifactContributorshipEntryContributionInstance[];
    /**
     * Indication of which contributor is the corresponding contributor for the role.
     */
    correspondingContact?: fhir.FhirBoolean | undefined;
    /**
     * Used to code order of authors.
     */
    listOrder?: fhir.FhirPositiveInt | undefined;
    /**
     * Default constructor for CitationCitedArtifactContributorshipEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactContributorshipEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactContributorshipSummary type.
 */
export interface CitationCitedArtifactContributorshipSummaryArgs extends fhir.BackboneElementArgs {
    /**
     * Used most commonly to express an author list or a contributorship statement.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The format for the display string.
     */
    style?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used to code the producer or rule for creating the display string.
     */
    source?: fhir.CodeableConceptArgs | undefined;
    /**
     * The display string for the author list, contributor list, or contributorship statement.
     */
    value: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.summary.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Used to record a display of the author/contributor list without separate coding for each list member.
 */
export declare class CitationCitedArtifactContributorshipSummary extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    value: fhir.FhirMarkdown | null;
    /**
     * Default constructor for CitationCitedArtifactContributorshipSummary - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactContributorshipSummaryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifactContributorship type.
 */
export interface CitationCitedArtifactContributorshipArgs extends fhir.BackboneElementArgs {
    /**
     * If list is incomplete "et al" can be appended to Contributorship.summary.value for display purposes.
     */
    complete?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.contributorship.complete
     */
    _complete?: fhir.FhirElementArgs;
    /**
     * Used to report contributorship in individualized ways.
     */
    entry?: fhir.CitationCitedArtifactContributorshipEntryArgs[] | undefined;
    /**
     * Used to record a display of the author/contributor list without separate coding for each list member.
     */
    summary?: fhir.CitationCitedArtifactContributorshipSummaryArgs[] | undefined;
}
/**
 * This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
 */
export declare class CitationCitedArtifactContributorship extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If list is incomplete "et al" can be appended to Contributorship.summary.value for display purposes.
     */
    complete?: fhir.FhirBoolean | undefined;
    /**
     * Used to report contributorship in individualized ways.
     */
    entry: fhir.CitationCitedArtifactContributorshipEntry[];
    /**
     * Used to record a display of the author/contributor list without separate coding for each list member.
     */
    summary: fhir.CitationCitedArtifactContributorshipSummary[];
    /**
     * Default constructor for CitationCitedArtifactContributorship - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactContributorshipArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CitationCitedArtifact type.
 */
export interface CitationCitedArtifactArgs extends fhir.BackboneElementArgs {
    /**
     * May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple citation resources.
     */
    relatedIdentifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * When the cited artifact was accessed.
     */
    dateAccessed?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Citation.citedArtifact.dateAccessed
     */
    _dateAccessed?: fhir.FhirElementArgs;
    /**
     * The defined version of the cited artifact.
     */
    version?: fhir.CitationCitedArtifactVersionArgs | undefined;
    /**
     * The status of the cited artifact.
     */
    currentState?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An effective date or period for a status of the cited artifact.
     */
    statusDate?: fhir.CitationCitedArtifactStatusDateArgs[] | undefined;
    /**
     * The title details of the article or artifact.
     */
    title?: fhir.CitationCitedArtifactTitleArgs[] | undefined;
    /**
     * Summary of the article or artifact.
     */
    abstract?: fhir.CitationCitedArtifactAbstractArgs[] | undefined;
    /**
     * The component of the article or artifact.
     */
    part?: fhir.CitationCitedArtifactPartArgs | undefined;
    /**
     * The artifact related to the cited artifact.
     */
    relatesTo?: fhir.CitationCitedArtifactRelatesToArgs[] | undefined;
    /**
     * A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
     */
    publicationForm?: fhir.CitationCitedArtifactPublicationFormArgs[] | undefined;
    /**
     * Used for any URL for the article or artifact cited.
     */
    webLocation?: fhir.CitationCitedArtifactWebLocationArgs[] | undefined;
    /**
     * The assignment to an organizing scheme.
     */
    classification?: fhir.CitationCitedArtifactClassificationArgs[] | undefined;
    /**
     * This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
     */
    contributorship?: fhir.CitationCitedArtifactContributorshipArgs | undefined;
    /**
     * Any additional information or content for the article or artifact.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * The article or artifact being described.
 */
export declare class CitationCitedArtifact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
     */
    identifier: fhir.Identifier[];
    /**
     * May include trial registry identifiers, e.g. NCT04372602 from clinicaltrials.gov. This identifier can be valid for multiple citation resources.
     */
    relatedIdentifier: fhir.Identifier[];
    /**
     * When the cited artifact was accessed.
     */
    dateAccessed?: fhir.FhirDateTime | undefined;
    /**
     * The defined version of the cited artifact.
     */
    version?: fhir.CitationCitedArtifactVersion | undefined;
    /**
     * The status of the cited artifact.
     */
    currentState: fhir.CodeableConcept[];
    /**
     * An effective date or period for a status of the cited artifact.
     */
    statusDate: fhir.CitationCitedArtifactStatusDate[];
    /**
     * The title details of the article or artifact.
     */
    title: fhir.CitationCitedArtifactTitle[];
    /**
     * Summary of the article or artifact.
     */
    abstract: fhir.CitationCitedArtifactAbstract[];
    /**
     * The component of the article or artifact.
     */
    part?: fhir.CitationCitedArtifactPart | undefined;
    /**
     * The artifact related to the cited artifact.
     */
    relatesTo: fhir.CitationCitedArtifactRelatesTo[];
    /**
     * A common use is a journal article with a publication date and pagination for a print version and a different publication date for the online version of the same article.
     */
    publicationForm: fhir.CitationCitedArtifactPublicationForm[];
    /**
     * Used for any URL for the article or artifact cited.
     */
    webLocation: fhir.CitationCitedArtifactWebLocation[];
    /**
     * The assignment to an organizing scheme.
     */
    classification: fhir.CitationCitedArtifactClassification[];
    /**
     * This element is used to list authors and other contributors, their contact information, specific contributions, and summary statements.
     */
    contributorship?: fhir.CitationCitedArtifactContributorship | undefined;
    /**
     * Any additional information or content for the article or artifact.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for CitationCitedArtifact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationCitedArtifactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Citation type.
 */
export interface CitationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Citation" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Citation.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different citation instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the citation with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of summarys s that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Citation.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of citations that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Citation.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the citation. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Citation.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the citation is the organization or individual primarily responsible for the maintenance and upkeep of the citation. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the citation. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Citation.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the citation was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the citation as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the citation is presumed to be the predominant language in the place the citation was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the citation to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the citation. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this citation.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * Use and/or publishing restrictions for the Citation, not for the cited artifact.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: Citation.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Citation.approvalDate
     */
    _approvalDate?: fhir.FhirElementArgs;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * Extended properties for primitive element: Citation.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElementArgs;
    /**
     * The effective period for a citation  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Who authored the Citation.
     */
    author?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Who edited the Citation.
     */
    editor?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Who reviewed the Citation.
     */
    reviewer?: fhir.ContactDetailArgs[] | undefined;
    /**
     * Who endorsed the Citation.
     */
    endorser?: fhir.ContactDetailArgs[] | undefined;
    /**
     * A human-readable display of the citation.
     */
    summary?: fhir.CitationSummaryArgs[] | undefined;
    /**
     * The assignment to an organizing scheme.
     */
    classification?: fhir.CitationClassificationArgs[] | undefined;
    /**
     * Used for general notes and annotations not coded elsewhere.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * The status of the citation.
     */
    currentState?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An effective date or period for a status of the citation.
     */
    statusDate?: fhir.CitationStatusDateArgs[] | undefined;
    /**
     * Artifact related to the Citation Resource.
     */
    relatesTo?: fhir.CitationRelatesToArgs[] | undefined;
    /**
     * The article or artifact being described.
     */
    citedArtifact?: fhir.CitationCitedArtifactArgs | undefined;
}
/**
 * The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.
 */
export declare class Citation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Citation";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * May include DOI, PMID, PMCID, etc. This element will contain unique identifiers that support de-duplication of citations. This identifier can be valid for only one citation resource.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different citation instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the citation with the format [url]|[version].
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
     * Allows filtering of summarys s that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of citations that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the citation. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the citation is the organization or individual primarily responsible for the maintenance and upkeep of the citation. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the citation. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the citation was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the citation as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the citation is presumed to be the predominant language in the place the citation was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the citation to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the citation. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this citation.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * Use and/or publishing restrictions for the Citation, not for the cited artifact.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a citation  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Who authored the Citation.
     */
    author: fhir.ContactDetail[];
    /**
     * Who edited the Citation.
     */
    editor: fhir.ContactDetail[];
    /**
     * Who reviewed the Citation.
     */
    reviewer: fhir.ContactDetail[];
    /**
     * Who endorsed the Citation.
     */
    endorser: fhir.ContactDetail[];
    /**
     * A human-readable display of the citation.
     */
    summary: fhir.CitationSummary[];
    /**
     * The assignment to an organizing scheme.
     */
    classification: fhir.CitationClassification[];
    /**
     * Used for general notes and annotations not coded elsewhere.
     */
    note: fhir.Annotation[];
    /**
     * The status of the citation.
     */
    currentState: fhir.CodeableConcept[];
    /**
     * An effective date or period for a status of the citation.
     */
    statusDate: fhir.CitationStatusDate[];
    /**
     * Artifact related to the Citation Resource.
     */
    relatesTo: fhir.CitationRelatesTo[];
    /**
     * The article or artifact being described.
     */
    citedArtifact?: fhir.CitationCitedArtifact | undefined;
    /**
     * Default constructor for Citation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CitationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Citation.d.ts.map