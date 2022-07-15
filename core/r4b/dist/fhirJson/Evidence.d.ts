import * as fhir from '../fhirJson.js';
/**
 * Evidence variable such as population, exposure, or outcome.
 */
export interface EvidenceVariableDefinition extends fhir.BackboneElement {
    /**
     * A text description or summary of the variable.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.variableDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * population | subpopulation | exposure | referenceExposure | measuredVariable | confounder.
     */
    variableRole: fhir.CodeableConcept | null;
    /**
     * Definition of the actual variable related to the statistic(s).
     */
    observed?: fhir.Reference | undefined;
    /**
     * Definition of the intended variable related to the Evidence.
     */
    intended?: fhir.Reference | undefined;
    /**
     * Indication of quality of match between intended variable to actual variable.
     */
    directnessMatch?: fhir.CodeableConcept | undefined;
}
/**
 * Number of samples in the statistic.
 */
export interface EvidenceStatisticSampleSize extends fhir.BackboneElement {
    /**
     * Human-readable summary of population sample size.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.description
     */
    _description?: fhir.FhirElement;
    /**
     * Footnote or explanatory note about the sample size.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Number of participants in the population.
     */
    numberOfStudies?: number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.numberOfStudies
     */
    _numberOfStudies?: fhir.FhirElement;
    /**
     * A human-readable string to clarify or explain concepts about the sample size.
     */
    numberOfParticipants?: number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.numberOfParticipants
     */
    _numberOfParticipants?: fhir.FhirElement;
    /**
     * Number of participants with known results for measured variables.
     */
    knownDataCount?: number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.sampleSize.knownDataCount
     */
    _knownDataCount?: fhir.FhirElement;
}
/**
 * A statistical attribute of the statistic such as a measure of heterogeneity.
 */
export interface EvidenceStatisticAttributeEstimate extends fhir.BackboneElement {
    /**
     * Human-readable summary of the estimate.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.attributeEstimate.description
     */
    _description?: fhir.FhirElement;
    /**
     * Footnote or explanatory note about the estimate.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * The type of attribute estimate, eg confidence interval or p value.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Often the p value
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Use 95 for a 95% confidence interval.
     */
    level?: number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.attributeEstimate.level
     */
    _level?: fhir.FhirElement;
    /**
     * Lower bound of confidence interval.
     */
    range?: fhir.Range | undefined;
    /**
     * A nested attribute estimate; which is the attribute estimate of an attribute estimate
     */
    attributeEstimate?: (fhir.EvidenceStatisticAttributeEstimate | null)[] | undefined;
}
/**
 * A variable adjusted for in the adjusted analysis.
 */
export interface EvidenceStatisticModelCharacteristicVariable extends fhir.BackboneElement {
    /**
     * Description of the variable.
     */
    variableDefinition: fhir.Reference | null;
    /**
     * How the variable is classified for use in adjusted analysis.
     */
    handling?: 'continuous' | 'dichotomous' | 'ordinal' | 'polychotomous' | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.modelCharacteristic.variable.handling
     */
    _handling?: fhir.FhirElement;
    /**
     * Description for grouping of ordinal or polychotomous variables.
     */
    valueCategory?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Discrete value for grouping of ordinal or polychotomous variables.
     */
    valueQuantity?: (fhir.Quantity | null)[] | undefined;
    /**
     * Range of values for grouping of ordinal or polychotomous variables.
     */
    valueRange?: (fhir.Range | null)[] | undefined;
}
/**
 * A component of the method to generate the statistic.
 */
export interface EvidenceStatisticModelCharacteristic extends fhir.BackboneElement {
    /**
     * Description of a component of the method to generate the statistic.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Further specification of the quantified value of the component of the method to generate the statistic.
     */
    value?: fhir.Quantity | undefined;
    /**
     * A variable adjusted for in the adjusted analysis.
     */
    variable?: (fhir.EvidenceStatisticModelCharacteristicVariable | null)[] | undefined;
    /**
     * An attribute of the statistic used as a model characteristic.
     */
    attributeEstimate?: (fhir.EvidenceStatisticAttributeEstimate | null)[] | undefined;
}
/**
 * Values and parameters for a single statistic.
 */
export interface EvidenceStatistic extends fhir.BackboneElement {
    /**
     * A description of the content value of the statistic.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.description
     */
    _description?: fhir.FhirElement;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Type of statistic, eg relative risk.
     */
    statisticType?: fhir.CodeableConcept | undefined;
    /**
     * Simple strings can be used for descriptive purposes. Exact matching to EvidenceVariable.category.name for the Evidence.variableDefinition[variableRole=measuredVariable].observed=Reference(EvidenceVariable) could facilitate validation within datasets.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Statistic value.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * When the number of events is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberOfEvents to record the total number of events rather than the number of participants with events.
     */
    numberOfEvents?: number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.numberOfEvents
     */
    _numberOfEvents?: fhir.FhirElement;
    /**
     * When the number affected is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is a Proportion, use Evidence.statistic.numberAffected and enter an integer as the value. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberAffected to record the number of participants with events rather than the total number of events.
     */
    numberAffected?: number | undefined;
    /**
     * Extended properties for primitive element: Evidence.statistic.numberAffected
     */
    _numberAffected?: fhir.FhirElement;
    /**
     * Number of samples in the statistic.
     */
    sampleSize?: fhir.EvidenceStatisticSampleSize | undefined;
    /**
     * A statistical attribute of the statistic such as a measure of heterogeneity.
     */
    attributeEstimate?: (fhir.EvidenceStatisticAttributeEstimate | null)[] | undefined;
    /**
     * A component of the method to generate the statistic.
     */
    modelCharacteristic?: (fhir.EvidenceStatisticModelCharacteristic | null)[] | undefined;
}
/**
 * Assessment of certainty, confidence in the estimates, or quality of the evidence.
 */
export interface EvidenceCertainty extends fhir.BackboneElement {
    /**
     * Textual description of certainty.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.certainty.description
     */
    _description?: fhir.FhirElement;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Aspect of certainty being rated.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Assessment or judgement of the aspect.
     */
    rating?: fhir.CodeableConcept | undefined;
    /**
     * Individual or group who did the rating.
     */
    rater?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.certainty.rater
     */
    _rater?: fhir.FhirElement;
    /**
     * A domain or subdomain of certainty.
     */
    subcomponent?: (fhir.EvidenceCertainty | null)[] | undefined;
}
/**
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (eg population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 */
export interface Evidence extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Evidence" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred. Multiple instances may share the same URL if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this summary outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author. Considerations for making this decision are found in Technical and Business Versions.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.version
     */
    _version?: fhir.FhirElement;
    /**
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the meta.source element to indicate where the current master source of the resource can be found.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.title
     */
    _title?: fhir.FhirElement;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAsReference?: fhir.Reference | undefined;
    /**
     * Citation Resource or display of suggested citation for this evidence.
     */
    citeAsMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.citeAs[x]
     */
    _citeAsMarkdown?: fhir.FhirElement;
    /**
     * Allows filtering of summarys s that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Evidence.status
     */
    _status?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the summary. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.date
     */
    _date?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.approvalDate
     */
    _approvalDate?: fhir.FhirElement;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.lastReviewDate
     */
    _lastReviewDate?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    author?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    editor?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    reviewer?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (Details at: http://build.fhir.org/clinicalreasoning-module.html).
     */
    endorser?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * Link or citation to artifact associated with the summary.
     */
    relatedArtifact?: (fhir.RelatedArtifact | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the evidence was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.description
     */
    _description?: fhir.FhirElement;
    /**
     * Declarative description of the Evidence.
     */
    assertion?: string | undefined;
    /**
     * Extended properties for primitive element: Evidence.assertion
     */
    _assertion?: fhir.FhirElement;
    /**
     * Footnotes and/or explanatory notes.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Evidence variable such as population, exposure, or outcome.
     */
    variableDefinition: (fhir.EvidenceVariableDefinition | null)[] | null;
    /**
     * The method to combine studies.
     */
    synthesisType?: fhir.CodeableConcept | undefined;
    /**
     * The type of study that produced this evidence.
     */
    studyType?: fhir.CodeableConcept | undefined;
    /**
     * Values and parameters for a single statistic.
     */
    statistic?: (fhir.EvidenceStatistic | null)[] | undefined;
    /**
     * Assessment of certainty, confidence in the estimates, or quality of the evidence.
     */
    certainty?: (fhir.EvidenceCertainty | null)[] | undefined;
}
//# sourceMappingURL=Evidence.d.ts.map