import * as fhir from '../fhirJson.js';
/**
 * A description of the size of the sample involved in the synthesis.
 */
export interface EffectEvidenceSynthesisSampleSize extends fhir.BackboneElement {
    /**
     * Human-readable summary of sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.description
     */
    _description?: fhir.FhirElement;
    /**
     * Number of studies included in this evidence synthesis.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElement;
    /**
     * Number of participants included in this evidence synthesis.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElement;
}
/**
 * A description of the results for each exposure considered in the effect estimate.
 */
export interface EffectEvidenceSynthesisResultsByExposure extends fhir.BackboneElement {
    /**
     * Human-readable summary of results by exposure state.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.description
     */
    _description?: fhir.FhirElement;
    /**
     * Whether these results are for the exposure state or alternative exposure state.
     */
    exposureState?: 'exposure' | 'exposure-alternative' | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.resultsByExposure.exposureState
     */
    _exposureState?: fhir.FhirElement;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * Reference to a RiskEvidenceSynthesis resource.
     */
    riskEvidenceSynthesis: fhir.Reference | null;
}
/**
 * A description of the precision of the estimate for the effect.
 */
export interface EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends fhir.BackboneElement {
    /**
     * Examples include confidence interval and interquartile range.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.level
     */
    _level?: fhir.FhirElement;
    /**
     * Lower bound of confidence interval.
     */
    from?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.from
     */
    _from?: fhir.FhirElement;
    /**
     * Upper bound of confidence interval.
     */
    to?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.precisionEstimate.to
     */
    _to?: fhir.FhirElement;
}
/**
 * The estimated effect of the exposure variant.
 */
export interface EffectEvidenceSynthesisEffectEstimate extends fhir.BackboneElement {
    /**
     * Human-readable summary of effect estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.description
     */
    _description?: fhir.FhirElement;
    /**
     * Examples include relative risk and mean difference.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Used to define variant exposure states such as low-risk state.
     */
    variantState?: fhir.CodeableConcept | undefined;
    /**
     * The point estimate of the effect estimate.
     */
    value?: number | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.effectEstimate.value
     */
    _value?: fhir.FhirElement;
    /**
     * Specifies the UCUM unit for the outcome.
     */
    unitOfMeasure?: fhir.CodeableConcept | undefined;
    /**
     * A description of the precision of the estimate for the effect.
     */
    precisionEstimate?: (fhir.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate | null)[] | undefined;
}
/**
 * A description of a component of the overall certainty.
 */
export interface EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends fhir.BackboneElement {
    /**
     * Type of subcomponent of certainty rating.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * A rating of a subcomponent of rating certainty.
     */
    rating?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
/**
 * A description of the certainty of the effect estimate.
 */
export interface EffectEvidenceSynthesisCertainty extends fhir.BackboneElement {
    /**
     * A rating of the certainty of the effect estimate.
     */
    rating?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * A description of a component of the overall certainty.
     */
    certaintySubcomponent?: (fhir.EffectEvidenceSynthesisCertaintyCertaintySubcomponent | null)[] | undefined;
}
/**
 * The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.
 */
export interface EffectEvidenceSynthesis extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EffectEvidenceSynthesis" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this effect evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different effect evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the effect evidence synthesis with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of effect evidence synthesiss that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.status
     */
    _status?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the effect evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the effect evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the effect evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the effect evidence synthesis. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the effect evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the effect evidence synthesis as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the effect evidence synthesis is presumed to be the predominant language in the place the effect evidence synthesis was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.description
     */
    _description?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the resource.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the effect evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A copyright statement relating to the effect evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the effect evidence synthesis.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: EffectEvidenceSynthesis.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * The effective period for a effect evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Descriptive topics related to the content of the EffectEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
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
     * Type of synthesis eg meta-analysis.
     */
    synthesisType?: fhir.CodeableConcept | undefined;
    /**
     * Type of study eg randomized trial.
     */
    studyType?: fhir.CodeableConcept | undefined;
    /**
     * A reference to a EvidenceVariable resource that defines the population for the research.
     */
    population: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the exposure for the research.
     */
    exposure: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resource that defines the comparison exposure for the research.
     */
    exposureAlternative: fhir.Reference | null;
    /**
     * A reference to a EvidenceVariable resomece that defines the outcome for the research.
     */
    outcome: fhir.Reference | null;
    /**
     * A description of the size of the sample involved in the synthesis.
     */
    sampleSize?: fhir.EffectEvidenceSynthesisSampleSize | undefined;
    /**
     * A description of the results for each exposure considered in the effect estimate.
     */
    resultsByExposure?: (fhir.EffectEvidenceSynthesisResultsByExposure | null)[] | undefined;
    /**
     * The estimated effect of the exposure variant.
     */
    effectEstimate?: (fhir.EffectEvidenceSynthesisEffectEstimate | null)[] | undefined;
    /**
     * A description of the certainty of the effect estimate.
     */
    certainty?: (fhir.EffectEvidenceSynthesisCertainty | null)[] | undefined;
}
//# sourceMappingURL=EffectEvidenceSynthesis.d.ts.map